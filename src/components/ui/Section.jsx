import { motion, useReducedMotion } from 'framer-motion';

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
  const shouldReduceMotion = useReducedMotion();

  const animationProps = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-40px" },
        transition: { duration: 0.45, ease: "easeOut" }
      };

  return (
    <section id={id} className={`py-16 md:py-20 scroll-mt-20 ${className}`}>
      <div className={containerClassName}>
        {(title || subtitle) && (
          <motion.div {...animationProps} className="mb-10 text-left space-y-2">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-[#F0F6FC]">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-sm md:text-base text-slate-600 dark:text-[#8B949E] max-w-3xl leading-relaxed">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}

        <motion.div {...animationProps}>
          {children}
        </motion.div>
      </div>
    </section>
  );
}
