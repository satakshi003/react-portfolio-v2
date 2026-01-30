
export default function Card({
  children,
  className = '',
  hover = true,
  ...props
}) {
  const baseStyles = `
    relative
    bg-zinc-900/50
    backdrop-blur-sm
    border border-zinc-800
    rounded-2xl
    p-6
    transition-all duration-300 ease-out
  `;

  const hoverStyles = hover
    ? `
      hover:bg-zinc-900/80
      hover:border-zinc-700
      hover:shadow-xl
      hover:shadow-indigo-500/5
      hover:-translate-y-1
    `
    : '';

  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`} {...props}>
      {children}
    </div>
  );
}
