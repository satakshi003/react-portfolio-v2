import { Minus, Square, X } from 'lucide-react';
import { personalInfo } from '../../data/content';

/**
 * Window Title Bar - VS Code style
 */
export default function TitleBar() {
  return (
    <div className="flex items-center justify-between bg-[#3c3c3c] px-3 py-1">
      {/* Left - Menu items (decorative) */}
      <div className="flex items-center gap-4 text-[13px] text-[#cccccc]">
        <span className="hover:bg-[#505050] px-2 py-0.5 rounded cursor-pointer">File</span>
        <span className="hover:bg-[#505050] px-2 py-0.5 rounded cursor-pointer">Edit</span>
        <span className="hover:bg-[#505050] px-2 py-0.5 rounded cursor-pointer">View</span>
        <span className="hover:bg-[#505050] px-2 py-0.5 rounded cursor-pointer">Help</span>
      </div>

      {/* Center - Title */}
      <div className="absolute left-1/2 -translate-x-1/2 text-[13px] text-[#cccccc]">
        portfolio.dev — {personalInfo.name}
      </div>

      {/* Right - Window controls */}
      <div className="flex items-center gap-1">
        <button className="p-1.5 hover:bg-[#505050] rounded transition-colors">
          <Minus size={14} className="text-[#cccccc]" />
        </button>
        <button className="p-1.5 hover:bg-[#505050] rounded transition-colors">
          <Square size={12} className="text-[#cccccc]" />
        </button>
        <button className="p-1.5 hover:bg-[#e81123] rounded transition-colors group">
          <X size={14} className="text-[#cccccc] group-hover:text-white" />
        </button>
      </div>
    </div>
  );
}
