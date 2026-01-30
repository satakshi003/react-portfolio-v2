/**
 * Skill tag component
 */
export default function SkillTag({ children, className = '' }) {
  return (
    <span
      className={`
        inline-block
        px-4 py-2
        text-sm font-medium
        text-zinc-300
        bg-zinc-800/50
        border border-zinc-700/50
        rounded-lg
        transition-all duration-300 ease-out
        hover:bg-zinc-700/50
        hover:border-zinc-600
        hover:text-white
        hover:scale-105
        cursor-default
        ${className}
      `}
    >
      {children}
    </span>
  );
}
