import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../../data/content';

/**
 * Hero Panel - Code file style
 */
export default function HeroPanel() {
  const codeLines = [
    { lineNum: 1, content: <span className="syntax-comment">{'// Welcome to my portfolio'}</span> },
    { lineNum: 2, content: '' },
    { lineNum: 3, content: <><span className="syntax-keyword">const</span> <span className="syntax-variable">developer</span> = {'{'}</> },
    { lineNum: 4, content: <span className="ml-6"><span className="syntax-variable">name</span>: <span className="syntax-string">"{personalInfo.name}"</span>,</span> },
    { lineNum: 5, content: <span className="ml-6"><span className="syntax-variable">role</span>: <span className="syntax-string">"{personalInfo.role}"</span>,</span> },
    { lineNum: 6, content: <span className="ml-6"><span className="syntax-variable">location</span>: <span className="syntax-string">"{personalInfo.location}"</span>,</span> },
    { lineNum: 7, content: <span className="ml-6"><span className="syntax-variable">available</span>: <span className="syntax-keyword">true</span>,</span> },
    { lineNum: 8, content: '}' },
    { lineNum: 9, content: '' },
    { lineNum: 10, content: <span className="syntax-comment">{'// Connect with me'}</span> },
    { lineNum: 11, content: <><span className="syntax-keyword">export</span> <span className="syntax-keyword">const</span> <span className="syntax-variable">links</span> = {'{'}</> },
    { lineNum: 12, content: <span className="ml-6"><span className="syntax-variable">github</span>: <span className="syntax-string">"{personalInfo.github}"</span>,</span> },
    { lineNum: 13, content: <span className="ml-6"><span className="syntax-variable">linkedin</span>: <span className="syntax-string">"linkedin.com/in/satakshi"</span>,</span> },
    { lineNum: 14, content: <span className="ml-6"><span className="syntax-variable">email</span>: <span className="syntax-string">"{personalInfo.email}"</span>,</span> },
    { lineNum: 15, content: '}' },
  ];

  return (
    <div className="min-h-full flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        {/* Profile section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-6 mb-12"
        >
          {/* Profile image */}
          <div className="relative">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#3b82f6] to-[#06b6d4] p-[3px]">
              <div className="w-full h-full rounded-full bg-[#1e1e1e] flex items-center justify-center overflow-hidden">
                <img
                  src="/profile-placeholder.svg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-green-500 border-4 border-[#1e1e1e]" />
          </div>

          <div>
            <h1 className="text-4xl font-bold gradient-text-accent mb-2">
              {personalInfo.name}
            </h1>
            <p className="text-[#6e6e6e] text-lg">{personalInfo.role}</p>
          </div>
        </motion.div>

        {/* Code block */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-[#252526] rounded-lg border border-[#3c3c3c] overflow-hidden"
        >
          {/* Code header */}
          <div className="flex items-center gap-2 px-4 py-2 bg-[#2d2d2d] border-b border-[#3c3c3c]">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <span className="text-[#969696] text-sm ml-2">developer.js</span>
          </div>

          {/* Code content */}
          <div className="p-4 font-mono text-sm overflow-x-auto">
            {codeLines.map((line, index) => (
              <motion.div
                key={line.lineNum}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                className="flex"
              >
                <span className="line-number">{line.lineNum}</span>
                <span className="text-[#cccccc]">{line.content || '\u00A0'}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex items-center justify-center gap-4 mt-8"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-[#252526] border border-[#3c3c3c] text-[#cccccc] hover:text-[#3b82f6] hover:border-[#3b82f6] transition-all"
          >
            <Github size={20} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-[#252526] border border-[#3c3c3c] text-[#cccccc] hover:text-[#3b82f6] hover:border-[#3b82f6] transition-all"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-3 rounded-lg bg-[#252526] border border-[#3c3c3c] text-[#cccccc] hover:text-[#3b82f6] hover:border-[#3b82f6] transition-all"
          >
            <Mail size={20} />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
