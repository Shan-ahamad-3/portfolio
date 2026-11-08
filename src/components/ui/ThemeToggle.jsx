import { FiSun, FiMoon } from 'react-icons/fi';

/**
 * Accessible light/dark theme switch button.
 */
export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-hidden focus:ring-2 focus:ring-teal-500 transition-colors cursor-pointer"
      title={`Toggle theme (currently ${theme})`}
    >
      {theme === 'dark' ? (
        <FiSun className="w-4 h-4 text-amber-400" />
      ) : (
        <FiMoon className="w-4 h-4 text-slate-700" />
      )}
    </button>
  );
}

