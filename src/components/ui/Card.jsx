/**
 * Clean, modern surface card with neutral borders, soft shadows, and light/dark theme tokens.
 */
export default function Card({ children, className = "", hover = true }) {
  return (
    <div
      className={`bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 sm:p-6 shadow-xs ${
        hover ? 'transition-all duration-200 hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}

