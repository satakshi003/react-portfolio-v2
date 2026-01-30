import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Magnetic button that attracts toward cursor
 */
export default function MagneticButton({
  children,
  className = '',
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  ...props
}) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = (e.clientX - centerX) * 0.3;
    const distanceY = (e.clientY - centerY) * 0.3;
    setPosition({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = `
    relative inline-flex items-center justify-center gap-2
    font-semibold rounded-full overflow-hidden
    transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-[#050505]
  `;

  const variants = {
    primary: `
      bg-gradient-to-r from-blue-500 to-cyan-500
      text-white
      hover:from-blue-400 hover:to-cyan-400
      shadow-lg shadow-blue-500/25
      hover:shadow-xl hover:shadow-blue-500/40
    `,
    secondary: `
      bg-transparent
      text-white
      border border-white/20
      hover:border-blue-500/50
      hover:bg-blue-500/10
    `,
    ghost: `
      bg-white/5
      text-white
      hover:bg-white/10
      hover:text-blue-400
    `,
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-base',
    lg: 'px-10 py-4 text-lg',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const MotionComponent = href ? motion.a : motion.button;
  const elementProps = href ? { href } : { onClick };

  return (
    <MotionComponent
      ref={ref}
      className={classes}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      whileTap={{ scale: 0.95 }}
      {...elementProps}
      {...props}
    >
      {/* Shimmer effect */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700" />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </MotionComponent>
  );
}
