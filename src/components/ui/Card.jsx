/**
 * Clean, modern surface card with Silver Glass aesthetic:
 * 30% bg-card, fine border, backdrop-blur-md, and rounded-2xl outer geometry.
 */
export default function Card({ children, className = "", hover = true }) {
  return (
    <div
      className={`glass-card rounded-2xl p-6 sm:p-8 shadow-sm transition-all duration-200 ${
        hover ? 'hover:border-[var(--accent-border)] hover:shadow-md' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
