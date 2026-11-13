/**
 * Clean, broad section container wrapper with comfortable max-w-6xl horizontal space
 * and tightened vertical rhythm (py-16 md:py-20) with consistent px-4 sm:px-6 lg:px-8 padding.
 */
export default function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
  containerClassName = "max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto"
}) {
  return (
    <section id={id} className={`py-16 md:py-20 scroll-mt-20 ${className}`}>
      <div className={containerClassName}>
        {(title || subtitle) && (
          <div className="mb-10 text-left space-y-2">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary)] font-heading">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-3xl leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div>
          {children}
        </div>
      </div>
    </section>
  );
}
