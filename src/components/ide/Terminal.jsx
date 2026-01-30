import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, ChevronUp, ChevronDown } from 'lucide-react';
import { personalInfo } from '../../data/content';


export default function Terminal({ activeSection, sections }) {
  const [commands, setCommands] = useState([]);
  const [collapsed, setCollapsed] = useState(false);

  
  useEffect(() => {
    setCommands([
      { type: 'system', text: `Welcome to ${personalInfo.name}'s portfolio!` },
      { type: 'info', text: '→ Use tabs or scroll horizontally to navigate' },
      { type: 'info', text: '→ Click files in explorer to jump to sections' },
    ]);
  }, []);

  
  useEffect(() => {
    if (sections[activeSection]) {
      setCommands(prev => [
        ...prev.slice(-8), 
        {
          type: 'command',
          text: `cd portfolio/${sections[activeSection].filename}`
        },
      ]);
    }
  }, [activeSection, sections]);

  return (
    <div className={`bg-[#1e1e1e] border-t border-[#3c3c3c] transition-all duration-300 ${collapsed ? 'h-8' : 'h-36'}`}>
      <div className="flex items-center justify-between px-4 py-1 bg-[#252526] border-b border-[#3c3c3c]">
        <div className="flex items-center gap-2 text-[12px] text-[#cccccc]">
          <TerminalIcon size={14} />
          <span>TERMINAL</span>
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 text-[#cccccc] hover:text-white transition-colors"
        >
          {collapsed ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
      </div>
      {!collapsed && (
        <div className="p-3 font-mono text-[12px] overflow-y-auto h-[calc(100%-28px)]">
          {commands.map((cmd, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-start gap-2 mb-1"
            >
              {cmd.type === 'command' && (
                <>
                  <span className="text-[#4ec9b0]">~</span>
                  <span className="text-[#569cd6]">$</span>
                  <span className="text-[#cccccc]">{cmd.text}</span>
                </>
              )}
              {cmd.type === 'system' && (
                <span className="text-[#3b82f6]">{cmd.text}</span>
              )}
              {cmd.type === 'info' && (
                <span className="text-[#6a9955]">{cmd.text}</span>
              )}
            </motion.div>
          ))}
          <div className="flex items-center gap-2">
            <span className="text-[#4ec9b0]">~</span>
            <span className="text-[#569cd6]">$</span>
            <span className="terminal-cursor"></span>
          </div>
        </div>
      )}
    </div>
  );
}
