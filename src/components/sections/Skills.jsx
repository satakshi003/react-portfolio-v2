import { motion } from 'framer-motion';
import ScrollSection from '../effects/ScrollSection';
import TiltCard from '../effects/TiltCard';
import { skills } from '../../data/content';


export default function Skills() {
  const skillCategories = [
    {
      name: 'Languages',
      items: skills.languages,
      icon: '💻',
      gradient: 'from-[#3b82f6]/20 to-transparent'
    },
    {
      name: 'Frontend',
      items: skills.frontend,
      icon: '🎨',
      gradient: 'from-[#06b6d4]/20 to-transparent'
    },
    {
      name: 'Backend',
      items: skills.backend,
      icon: '⚙️',
      gradient: 'from-[#3b82f6]/20 to-transparent'
    },
    {
      name: 'Databases',
      items: skills.databases,
      icon: '🗄️',
      gradient: 'from-[#3b82f6]/20 to-transparent'
    },
    {
      name: 'Tools',
      items: skills.tools,
      icon: '🛠️',
      gradient: 'from-[#06b6d4]/20 to-transparent'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    },
  };

  return (
    <ScrollSection id="skills" dark>
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 text-[#3b82f6] text-sm font-medium uppercase tracking-wider mb-4"
        >
          <span className="w-8 h-[2px] bg-[#3b82f6]" />
          Skills & Technologies
          <span className="w-8 h-[2px] bg-[#3b82f6]" />
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-white"
        >
          My Tech Stack
        </motion.h2>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skillCategories.map((category) => (
          <motion.div key={category.name} variants={itemVariants}>
            <TiltCard className="group h-full">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-xl font-semibold text-white">
                    {category.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="px-4 py-2 text-sm font-medium text-gray-300 bg-white/5 border border-white/10 rounded-full
                                 hover:border-[#3b82f6]/50 hover:bg-[#3b82f6]/10 hover:text-pink-300 
                                 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </ScrollSection>
  );
}
