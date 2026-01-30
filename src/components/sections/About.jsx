import { motion } from 'framer-motion';
import ScrollSection from '../effects/ScrollSection';
import { about } from '../../data/content';
import { Sparkles, Code2, Palette, Zap } from 'lucide-react';


export default function About() {
  const highlights = [
    { icon: Code2, text: 'Clean Code', color: 'blue' },
    { icon: Palette, text: 'UI/UX Focus', color: 'cyan' },
    { icon: Zap, text: 'Fast Learner', color: 'blue' },
    { icon: Sparkles, text: 'Detail Oriented', color: 'cyan' },
  ];

  return (
    <ScrollSection id="about">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-[#3b82f6] text-sm font-medium uppercase tracking-wider mb-4">
              <span className="w-8 h-[2px] bg-[#3b82f6]" />
              About Me
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {about.headline}
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-8 whitespace-pre-line">
              {about.description}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="group p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#3b82f6]/30 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <item.icon
                  size={24}
                  className={`mb-3 text-${item.color}-400`}
                />
                <span className="text-gray-300 text-sm font-medium">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/20 via-[#06b6d4]/10 to-transparent rounded-3xl blur-3xl" />
            <div className="relative h-full glass-dark rounded-3xl p-6 overflow-hidden">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-[#3b82f6]" />
                <div className="w-3 h-3 rounded-full bg-[#06b6d4]" />
                <div className="w-3 h-3 rounded-full bg-gray-600" />
              </div>
              <div className="font-mono text-sm space-y-3">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="text-gray-500">{'// Mission'}</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <span className="text-[#06b6d4]">const</span>{' '}
                  <span className="text-white">developer</span>{' '}
                  <span className="text-gray-500">=</span>{' '}
                  <span className="text-[#3b82f6]">{'{'}</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="ml-4"
                >
                  <span className="text-gray-300">passion:</span>{' '}
                  <span className="text-green-400">"Frontend"</span>,
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="ml-4"
                >
                  <span className="text-gray-300">focus:</span>{' '}
                  <span className="text-green-400">"User Experience"</span>,
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  className="ml-4"
                >
                  <span className="text-gray-300">goal:</span>{' '}
                  <span className="text-green-400">"Create Impact"</span>,
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                >
                  <span className="text-[#3b82f6]">{'}'}</span>;
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 }}
                  className="pt-4"
                >
                  <span className="text-gray-300">{'// Let\'s build something amazing'}</span>
                  <span className="animate-pulse text-[#3b82f6] ml-1">▊</span>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div >
    </ScrollSection >
  );
}
