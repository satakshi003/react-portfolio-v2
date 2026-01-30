import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react';
import { personalInfo } from '../../data/content';

/**
 * Contact Panel - API endpoint style
 */
export default function ContactPanel() {
  const currentYear = new Date().getFullYear();

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
              <Send size={20} className="text-[#3b82f6]" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">api/contact.js</h1>
              <p className="text-[#6e6e6e] text-sm">POST /api/contact</p>
            </div>
          </div>

          {/* API-style request */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-[#252526] rounded-lg border border-[#3c3c3c] overflow-hidden mb-8"
          >
            <div className="p-4 font-mono text-sm">
              <div className="mb-4">
                <span className="text-[#6e6e6e]">// Let's connect!</span>
              </div>

              <div className="flex">
                <span className="line-number">1</span>
                <span>
                  <span className="syntax-keyword">const</span>{' '}
                  <span className="syntax-variable">contactInfo</span> = {'{'}
                </span>
              </div>

              <div className="flex">
                <span className="line-number">2</span>
                <span className="ml-4">
                  <span className="syntax-variable">email</span>:{' '}
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="syntax-string hover:text-[#3b82f6] transition-colors"
                  >
                    "{personalInfo.email}"
                  </a>,
                </span>
              </div>

              <div className="flex">
                <span className="line-number">3</span>
                <span className="ml-4">
                  <span className="syntax-variable">phone</span>:{' '}
                  <span className="syntax-string">"{personalInfo.phone}"</span>,
                </span>
              </div>

              <div className="flex">
                <span className="line-number">4</span>
                <span className="ml-4">
                  <span className="syntax-variable">location</span>:{' '}
                  <span className="syntax-string">"{personalInfo.location}"</span>,
                </span>
              </div>

              <div className="flex">
                <span className="line-number">5</span>
                <span className="ml-4">
                  <span className="syntax-variable">status</span>:{' '}
                  <span className="syntax-string">"Open to opportunities"</span>,
                </span>
              </div>

              <div className="flex">
                <span className="line-number">6</span>
                <span>{'}'}</span>
              </div>
            </div>
          </motion.div>

          {/* Contact cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-5 rounded-lg bg-[#252526] border border-[#3c3c3c] hover:border-[#3b82f6] transition-all group text-center"
            >
              <Mail className="w-6 h-6 mx-auto mb-3 text-[#3b82f6]" />
              <p className="text-[#6e6e6e] text-xs uppercase tracking-wider mb-1">Email</p>
              <p className="text-[#cccccc] text-sm group-hover:text-[#3b82f6] transition-colors truncate">
                {personalInfo.email}
              </p>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-lg bg-[#252526] border border-[#3c3c3c] hover:border-[#3b82f6] transition-all group text-center"
            >
              <Github className="w-6 h-6 mx-auto mb-3 text-[#3b82f6]" />
              <p className="text-[#6e6e6e] text-xs uppercase tracking-wider mb-1">GitHub</p>
              <p className="text-[#cccccc] text-sm group-hover:text-[#3b82f6] transition-colors">
                View Profile
              </p>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-lg bg-[#252526] border border-[#3c3c3c] hover:border-[#3b82f6] transition-all group text-center"
            >
              <Linkedin className="w-6 h-6 mx-auto mb-3 text-[#3b82f6]" />
              <p className="text-[#6e6e6e] text-xs uppercase tracking-wider mb-1">LinkedIn</p>
              <p className="text-[#cccccc] text-sm group-hover:text-[#3b82f6] transition-colors">
                Connect
              </p>
            </a>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center mb-12"
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] text-white font-semibold hover:opacity-90 transition-opacity"
            >
              <Mail size={18} />
              Send me an email
            </a>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="pt-8 border-t border-[#3c3c3c] text-center"
          >
            <p className="text-[#6e6e6e] text-sm">
              © {currentYear} {personalInfo.name}. Built with React + ❤️
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
