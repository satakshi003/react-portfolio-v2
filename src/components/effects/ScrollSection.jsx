import { motion } from 'framer-motion';

/**
 * Scroll section wrapper with animations
 */
export default function ScrollSection({
  children,
  id,
  className = '',
  dark = false,
}) {
  return (
    <motion.section
      id={id}
      className={`
        relative
        py-24 md:py-36
        px-6 md:px-8
        ${dark ? 'bg-[#0a0a0a]' : 'bg-transparent'}
        ${className}
      `}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {children}
      </div>
    </motion.section>
  );
}
