import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  ChevronDown,
  FileCode,
  Folder,
  FolderOpen,
  User,
  Code2,
  Briefcase,
  Mail,
  Star
} from 'lucide-react';

/**
 * File Explorer Sidebar - VS Code style
 */
export default function FileExplorer({ activeSection, onSectionChange, sections }) {
  const [expanded, setExpanded] = useState(true);

  const fileIcons = {
    'hero': User,
    'about': FileCode,
    'skills': Code2,
    'projects': Star,
    'experience': Briefcase,
    'contact': Mail,
  };

  return (
    <div className="w-60 bg-[#252526] border-r border-[#3c3c3c] flex flex-col h-full">
      {/* Header */}
      <div className="px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-[#bbbbbb]">
        Explorer
      </div>

      {/* Project folder */}
      <div className="flex-1 overflow-y-auto">
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center gap-1 px-2 py-1 text-[13px] text-[#cccccc] hover:bg-[#37373d] transition-colors"
        >
          {expanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          {expanded ? <FolderOpen size={16} className="text-[#dcb67a]" /> : <Folder size={16} className="text-[#dcb67a]" />}
          <span className="ml-1 font-medium">portfolio</span>
        </button>

        {/* Files */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="ml-4 overflow-hidden"
            >
              {sections.map((section, index) => {
                const Icon = fileIcons[section.id] || FileCode;
                const isActive = activeSection === index;

                return (
                  <motion.button
                    key={section.id}
                    onClick={() => onSectionChange(index)}
                    className={`
                      w-full flex items-center gap-2 px-4 py-1 text-[13px] transition-colors
                      ${isActive
                        ? 'bg-[#37373d] text-white'
                        : 'text-[#cccccc] hover:bg-[#2a2d2e]'
                      }
                    `}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Icon size={16} className={isActive ? 'text-[#3b82f6]' : 'text-[#519aba]'} />
                    <span>{section.filename}</span>
                  </motion.button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-[#3c3c3c] text-[11px] text-[#6e6e6e]">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <span>Development</span>
        </div>
      </div>
    </div>
  );
}
