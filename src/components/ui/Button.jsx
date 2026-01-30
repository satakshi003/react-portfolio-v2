/**
 * Reusable Button Component
 * Variants: primary, secondary, ghost
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  ...props
}) {
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    font-medium rounded-xl
    transition-all duration-300 ease-out
    focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:ring-offset-2 focus:ring-offset-[#0a0a0a]
    disabled:opacity-50 disabled:cursor-not-allowed
    transform hover:scale-[1.02] active:scale-[0.98]
  `;

  const variants = {
    primary: `
      bg-indigo-500 text-white
      hover:bg-indigo-400 hover:shadow-lg hover:shadow-indigo-500/25
    `,
    secondary: `
      bg-transparent text-white
      border border-zinc-700
      hover:bg-white/5 hover:border-zinc-500
    `,
    ghost: `
      bg-transparent text-zinc-400
      hover:text-white hover:bg-white/5
    `,
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
}
