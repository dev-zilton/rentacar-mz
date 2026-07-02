export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "elite-car-rentals-theme";
export const LANGUAGE_STORAGE_KEY = "elite-car-rentals-language";

export function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "light";

  // Check localStorage first
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === "light" || stored === "dark") {
    return stored;
  }

  // Check system preference
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }

  return "light";
}

export function applyTheme(theme: Theme) {
  const html = document.documentElement;

  html.classList.toggle("dark", theme === "dark");

  localStorage.setItem(THEME_STORAGE_KEY, theme);
  // Force a reflow/repaint to ensure styles update immediately across the page
  // Some browsers may delay repaint until the next user interaction (scroll),
  // so reading layout forces the browser to apply the new class immediately.
  void html.offsetWidth;
}
