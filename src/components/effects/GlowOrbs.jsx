import { motion } from 'framer-motion';

/**
 * Animated floating glow orbs background
 */
export default function GlowOrbs() {
  const orbs = [
    {
      size: 'w-[500px] h-[500px]',
      color: 'bg-blue-500/20',
      position: 'top-1/4 -left-1/4',
      delay: 0
    },
    {
      size: 'w-[400px] h-[400px]',
      color: 'bg-cyan-500/15',
      position: 'bottom-1/4 -right-1/4',
      delay: 2
    },
    {
      size: 'w-[600px] h-[600px]',
      color: 'bg-sky-500/10',
      position: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
      delay: 4
    },
    {
      size: 'w-[300px] h-[300px]',
      color: 'bg-blue-600/20',
      position: 'top-3/4 left-1/4',
      delay: 1
    },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className={`absolute ${orb.size} ${orb.color} ${orb.position} rounded-full blur-[120px]`}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            delay: orb.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
}
