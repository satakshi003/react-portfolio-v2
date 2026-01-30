import { motion } from 'framer-motion';
import { about } from '../../data/content';

/**
 * About Panel - README style
 */
export default function AboutPanel() {
  return (
    <div className="p-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          {/* README header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-[#3b82f6]/20 flex items-center justify-center">
              <span className="text-xl">📖</span>
            </div>
            <h1 className="text-2xl font-bold text-white">README.md</h1>
          </div>

          {/* Markdown-style content */}
          <div className="prose prose-invert max-w-none">
            {/* Title */}
            <div className="border-b border-[#3c3c3c] pb-4 mb-6">
              <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                <span className="text-[#3b82f6]">#</span>
                About Me
              </h1>
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="border-l-4 border-[#3b82f6] pl-4 py-2 mb-6 bg-[#3b82f6]/5 rounded-r"
            >
              <p className="text-lg text-[#cccccc] italic">
                "{about.headline}"
              </p>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-8"
            >
              <p className="text-[#9e9e9e] leading-relaxed whitespace-pre-line">
                {about.description}
              </p>
            </motion.div>

            {/* Highlights section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-[#3b82f6]">##</span>
                What I Bring
              </h2>

              <div className="grid grid-cols-2 gap-3">
                {about.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-[#252526] border border-[#3c3c3c]"
                  >
                    <span className="text-[#3b82f6]">✓</span>
                    <span className="text-[#cccccc]">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Code block style fun fact */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8"
            >
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-[#3b82f6]">##</span>
                Fun Fact
              </h2>

              <div className="bg-[#252526] rounded-lg border border-[#3c3c3c] p-4 font-mono text-sm">
                <div className="flex">
                  <span className="line-number">1</span>
                  <span className="syntax-comment">// When I'm not coding...</span>
                </div>
                <div className="flex">
                  <span className="line-number">2</span>
                  <span>
                    <span className="syntax-keyword">const</span>{' '}
                    <span className="syntax-variable">hobbies</span> ={' '}
                    <span className="text-[#cccccc]">[</span>
                    <span className="syntax-string">"learning"</span>,{' '}
                    <span className="syntax-string">"problem-solving"</span>,{' '}
                    <span className="syntax-string">"building"</span>
                    <span className="text-[#cccccc]">]</span>;
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
