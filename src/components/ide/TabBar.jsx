import { motion } from 'framer-motion';
import { X, Circle } from 'lucide-react';


export default function TabBar({ sections, activeSection, onSectionChange }) {
  return (
    <div className="flex items-center bg-[#252526] border-b border-[#3c3c3c] overflow-x-auto hide-scrollbar">
      {sections.map((section, index) => {
        const isActive = activeSection === index;

        return (
          <motion.button
            key={section.id}
            onClick={() => onSectionChange(index)}
            className={`
              relative flex items-center gap-2 px-4 py-2 text-[13px] min-w-max
              border-r border-[#3c3c3c] transition-colors
              ${isActive
                ? 'bg-[#1e1e1e] text-white'
                : 'bg-[#2d2d2d] text-[#969696] hover:bg-[#2d2d2d]'
              }
            `}
            whileHover={{ backgroundColor: isActive ? '#1e1e1e' : '#323232' }}
          >
            {isActive && (
              <motion.div
                layoutId="activeTab"
                className="absolute top-0 left-0 right-0 h-[2px] bg-[#3b82f6]"
              />
            )}
            <Circle
              size={8}
              className={isActive ? 'text-[#3b82f6] fill-[#3b82f6]' : 'text-[#519aba] fill-[#519aba]'}
            />

            <span>{section.filename}</span>
            <X
              size={14}
              className="ml-2 text-[#6e6e6e] hover:text-white transition-colors opacity-0 group-hover:opacity-100"
            />
          </motion.button>
        );
      })}
      <div className="flex-1 bg-[#252526]" />
    </div>
  );
}
