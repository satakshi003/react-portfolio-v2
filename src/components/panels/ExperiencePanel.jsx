import { motion } from 'framer-motion';
import { experience, education, certifications } from '../../data/content';

/**
 * Experience Panel - Git timeline style
 */
export default function ExperiencePanel() {
  return (
    <div className="p-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-[#3b82f6]/20 flex items-center justify-center">
              <span className="text-xl">📋</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">CHANGELOG.md</h1>
              <p className="text-[#6e6e6e] text-sm">My journey so far</p>
            </div>
          </div>

          {/* Experience Section */}
          <div className="mb-10">
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-[#3b82f6]">##</span>
              Work Experience
            </h2>

            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="mb-6 p-4 rounded-lg bg-[#252526] border border-[#3c3c3c]"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-white font-semibold">{exp.title}</h3>
                  <span className="text-xs px-2 py-1 rounded bg-[#3b82f6]/20 text-[#3b82f6] font-mono">
                    {exp.period}
                  </span>
                </div>

                <p className="text-[#6e6e6e] text-sm mb-3">
                  {exp.organization} • {exp.location}
                </p>

                <div className="font-mono text-sm">
                  {exp.description.map((item, i) => (
                    <div key={i} className="flex gap-2 mb-1">
                      <span className="text-[#4ec9b0]">+</span>
                      <span className="text-[#9e9e9e]">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-3">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs text-[#569cd6] bg-[#569cd6]/10 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education Section */}
          <div className="mb-10">
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-[#3b82f6]">##</span>
              Education
            </h2>

            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="p-4 rounded-lg bg-[#252526] border border-[#3c3c3c]"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-white font-semibold">{edu.degree}</h3>
                  <span className="text-xs px-2 py-1 rounded bg-[#4ec9b0]/20 text-[#4ec9b0] font-mono">
                    {edu.period}
                  </span>
                </div>

                <p className="text-[#9e9e9e] text-sm">{edu.institution}</p>
                <p className="text-[#6e6e6e] text-sm">{edu.location}</p>

                <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded bg-gradient-to-r from-[#3b82f6]/10 to-[#06b6d4]/10 border border-[#3b82f6]/30">
                  <span className="text-[#3b82f6] font-bold">{edu.grade}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-[#ff2d75]">##</span>
              Certifications
            </h2>

            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="p-4 rounded-lg bg-[#252526] border border-[#3c3c3c]"
              >
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-white font-medium">{cert.title}</h3>
                  <span className="text-xs text-[#c586c0]">{cert.year}</span>
                </div>
                <p className="text-[#6e6e6e] text-sm">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
