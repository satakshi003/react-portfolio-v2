import { useScrollAnimation } from '../../hooks/useScrollAnimation';


export default function SectionWrapper({
  children,
  id,
  className = '',
  dark = false,
}) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id={id}
      ref={ref}
      className={`
        relative
        py-20 md:py-32
        px-6 md:px-8
        ${dark ? 'bg-zinc-900/30' : 'bg-transparent'}
        transition-all duration-700 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        ${className}
      `}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}
