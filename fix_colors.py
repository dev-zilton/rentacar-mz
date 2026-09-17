#!/usr/bin/env python3
import re
import sys
from pathlib import Path

# Padroniza as cores de ERRO (red-*) para o token semantico danger-*
COLOR_MAP = {
    r'\bred-50\b': 'danger-50',
    r'\bred-100\b': 'danger-100',
    r'\bred-200\b': 'danger-200',
    r'\bred-300\b': 'danger-300',
    r'\bred-400\b': 'danger-400',
    r'\bred-500\b': 'danger-500',
    r'\bred-600\b': 'danger-600',
    r'\bred-800\b': 'danger-800',
    r'\bred-900\b': 'danger-900',
}

FILES = [
    "components/admin/LeadsTable.tsx",
    "components/admin/LogoutButton.tsx",
    "components/ContactForm.tsx",
    "app/admin/page.tsx",
    "app/admin/login/page.tsx",
]

def process_file(filepath: str, dry_run: bool = False):
    path = Path(filepath)
    if not path.exists():
        print(f"[SKIP] {filepath}: arquivo nao encontrado")
        return

    original = path.read_text(encoding="utf-8")
    content = original
    total_changes = 0

    for pattern, replacement in COLOR_MAP.items():
        content, n = re.subn(pattern, replacement, content)
        total_changes += n

    if total_changes == 0:
        print(f"[--] {filepath}: nenhuma ocorrencia de red-*")
        return

    if dry_run:
        print(f"[DRY] {filepath}: {total_changes} substituicoes seriam feitas")
    else:
        path.write_text(content, encoding="utf-8")
        print(f"[OK] {filepath}: {total_changes} substituicoes aplicadas")

if __name__ == "__main__":
    dry_run = "--dry-run" in sys.argv
    if dry_run:
        print("=== MODO DRY-RUN (nada sera escrito) ===\n")
    for f in FILES:
        process_file(f, dry_run=dry_run)
