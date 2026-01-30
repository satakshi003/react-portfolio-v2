import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';
import ScrollSection from '../effects/ScrollSection';
import TiltCard from '../effects/TiltCard';
import MagneticButton from '../effects/MagneticButton';
import { projects, personalInfo } from '../../data/content';


export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    },
  };

  return (
    <ScrollSection id="projects">
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 text-[#3b82f6] text-sm font-medium uppercase tracking-wider mb-4"
        >
          <span className="w-8 h-[2px] bg-[#3b82f6]" />
          Featured Projects
          <span className="w-8 h-[2px] bg-[#3b82f6]" />
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Things I've Built
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-500 max-w-2xl mx-auto"
        >
          A collection of projects showcasing my skills in frontend and backend development
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project, index) => (
          <motion.div key={project.id} variants={itemVariants}>
            <TiltCard className="group h-full">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <motion.div
                    className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#3b82f6]/20 to-[#06b6d4]/20 border border-[#3b82f6]/20 flex items-center justify-center"
                    whileHover={{ rotate: 15 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Folder size={24} className="text-[#3b82f6]" />
                  </motion.div>

                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-full text-gray-500 hover:text-[#3b82f6] hover:bg-[#3b82f6]/10 transition-all duration-300"
                        aria-label="View on GitHub"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-full text-gray-500 hover:text-[#3b82f6] hover:bg-[#3b82f6]/10 transition-all duration-300"
                        aria-label="View Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#3b82f6] transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-500 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium text-pink-300/80 bg-[#3b82f6]/10 rounded-full border border-[#3b82f6]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center mt-12"
      >
        <MagneticButton
          variant="secondary"
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          View More on GitHub
          <Github size={18} />
        </MagneticButton>
      </motion.div>
    </ScrollSection>
  );
}
