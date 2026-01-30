import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import ScrollSection from '../effects/ScrollSection';
import { experience, education, certifications } from '../../data/content';


export default function Experience() {
  return (
    <ScrollSection id="experience" dark>
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 text-[#3b82f6] text-sm font-medium uppercase tracking-wider mb-4"
        >
          <span className="w-8 h-[2px] bg-[#3b82f6]" />
          Journey
          <span className="w-8 h-[2px] bg-[#3b82f6]" />
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-white"
        >
          Experience & Education
        </motion.h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-white flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-[#3b82f6]/20 border border-[#3b82f6]/30">
                <Briefcase size={20} className="text-[#3b82f6]" />
              </div>
              Experience
            </h3>

            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gradient-to-b before:from-[#3b82f6] before:to-transparent"
                >
                  <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-[#3b82f6] -translate-x-[3px] ring-4 ring-[#0a0a0a]" />

                  <div className="premium-card rounded-xl p-5">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <h4 className="text-lg font-semibold text-white">
                        {exp.title}
                      </h4>
                      <span className="text-xs font-medium text-[#3b82f6] bg-[#3b82f6]/10 px-3 py-1 rounded-full border border-[#3b82f6]/20">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-gray-500 text-sm mb-4">
                      {exp.organization} • {exp.location}
                    </p>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-400 text-sm flex gap-2">
                          <span className="text-[#3b82f6] mt-1">▹</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs text-gray-400 bg-white/5 rounded border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-white flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-[#06b6d4]/20 border border-[#06b6d4]/30">
                <Award size={20} className="text-[#06b6d4]" />
              </div>
              Certifications
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="premium-card rounded-xl p-5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h4 className="text-base font-semibold text-white">
                      {cert.title}
                    </h4>
                    <span className="text-xs font-medium text-[#06b6d4] bg-[#06b6d4]/10 px-3 py-1 rounded-full border border-[#06b6d4]/20">
                      {cert.year}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mb-1">{cert.issuer}</p>
                  <p className="text-gray-600 text-sm">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-white flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-[#3b82f6]/20 border border-[#3b82f6]/30">
                <GraduationCap size={20} className="text-[#3b82f6]" />
              </div>
              Education
            </h3>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="premium-card rounded-2xl p-6"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <h4 className="text-lg font-semibold text-white">
                      {edu.degree}
                    </h4>
                    <span className="text-xs font-medium text-[#3b82f6] bg-[#3b82f6]/10 px-3 py-1 rounded-full border border-[#3b82f6]/20">
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-gray-400 mb-2">{edu.institution}</p>
                  <p className="text-gray-600 text-sm mb-4">{edu.location}</p>
                  <div className="inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-[#3b82f6]/10 to-[#06b6d4]/10 rounded-xl border border-[#3b82f6]/20">
                    <span className="text-2xl font-bold gradient-text-accent">
                      {edu.grade.split(':')[1]?.trim() || edu.grade}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 p-8 rounded-2xl bg-gradient-to-br from-[#3b82f6]/5 to-[#06b6d4]/5 border border-white/5 text-center"
            >
              <p className="text-gray-600 text-sm mb-2">Continuous Learning</p>
              <p className="text-3xl font-bold gradient-text-accent">
                Always Growing
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </ScrollSection>
  );
}
