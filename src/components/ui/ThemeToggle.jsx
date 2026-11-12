import { FiSun, FiMoon } from 'react-icons/fi';

/**
 * Accessible light/dark mode switch button.
 * Sets document.documentElement attribute 'data-mode' and toggles the '.dark' class cleanly.
 */
export default function ThemeToggle({ theme, toggleTheme }) {
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="p-2.5 rounded-xl border border-[var(--border-card)] bg-[var(--bg-card)] hover:border-[var(--accent)] text-slate-400 hover:text-[var(--accent)] focus:outline-hidden focus:ring-2 focus:ring-[var(--accent)] transition-all cursor-pointer shadow-xs min-h-[44px] min-w-[44px] flex items-center justify-center"
      title={`Toggle theme (currently ${theme} mode)`}
    >
      {isDark ? (
        <FiSun className="w-4 h-4 text-amber-400" />
      ) : (
        <FiMoon className="w-4 h-4 text-slate-700" />
      )}
    </button>
  );
}
