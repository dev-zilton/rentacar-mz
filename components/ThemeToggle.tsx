'use client'

import { useTheme } from '@/contexts/ThemeContext'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
      aria-label="Toggle theme"
      title={theme === 'light' ? 'Modo escuro' : 'Modo claro'}
    >
      {theme === 'light' ? (
        <Moon size={20} />
      ) : (
        <Sun size={20} />
      )}
    </button>
  )
}
