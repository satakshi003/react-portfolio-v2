import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { projects } from '../../data/content';

/**
 * Projects Panel - Git log style
 */
export default function ProjectsPanel() {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-[#3b82f6]/20 flex items-center justify-center">
              <Folder size={20} className="text-[#3b82f6]" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">projects/</h1>
              <p className="text-[#6e6e6e] text-sm">git log --oneline</p>
            </div>
          </div>

          {/* Projects as git commits */}
          <div className="space-y-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="group relative"
              >
                {/* Git branch line */}
                <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-[#3c3c3c] group-last:hidden" />

                <div className="flex gap-4">
                  {/* Commit dot */}
                  <div className="relative z-10 w-8 h-8 rounded-full bg-[#3b82f6] flex items-center justify-center text-white text-xs font-mono">
                    {String(project.id).padStart(2, '0')}
                  </div>

                  {/* Project card */}
                  <div className="flex-1 p-5 rounded-lg bg-[#252526] border border-[#3c3c3c] hover:border-[#3b82f6]/50 transition-all group-hover:bg-[#2a2a2a]">
                    {/* Header row */}
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-[#3b82f6] transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-[#6e6e6e] text-xs font-mono">
                          commit #{String(Math.random()).slice(2, 9)}
                        </span>
                      </div>

                      <div className="flex gap-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded text-[#6e6e6e] hover:text-[#3b82f6] hover:bg-[#37373d] transition-all"
                          >
                            <Github size={18} />
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded text-[#6e6e6e] hover:text-[#3b82f6] hover:bg-[#37373d] transition-all"
                          >
                            <ExternalLink size={18} />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[#9e9e9e] text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech stack as diff additions */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-mono text-[#4ec9b0] bg-[#4ec9b0]/10 rounded border border-[#4ec9b0]/30"
                        >
                          + {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View more */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-center"
          >
            <a
              href={`https://github.com/satakshi-subhasmita`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm text-[#cccccc] border border-[#3c3c3c] rounded hover:border-[#3b82f6] hover:text-[#3b82f6] transition-all"
            >
              <Github size={16} />
              View all repositories
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
