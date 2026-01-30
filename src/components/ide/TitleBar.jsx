import { Minus, Square, X } from 'lucide-react';
import { personalInfo } from '../../data/content';


export default function TitleBar() {
  return (
    <div className="flex items-center justify-between bg-[#3c3c3c] px-3 py-1">
      <div className="flex items-center gap-2 md:gap-4 text-[13px] text-[#cccccc] flex-1 min-w-0">
        <span className="hover:bg-[#505050] px-2 py-0.5 rounded cursor-pointer whitespace-nowrap">File</span>
        <span className="hover:bg-[#505050] px-2 py-0.5 rounded cursor-pointer whitespace-nowrap">Edit</span>
        <span className="hover:bg-[#505050] px-2 py-0.5 rounded cursor-pointer whitespace-nowrap hidden sm:block">Selection</span>
        <span className="hover:bg-[#505050] px-2 py-0.5 rounded cursor-pointer whitespace-nowrap hidden md:block">View</span>
        <span className="hover:bg-[#505050] px-2 py-0.5 rounded cursor-pointer whitespace-nowrap hidden lg:block">Go</span>
        <span className="hover:bg-[#505050] px-2 py-0.5 rounded cursor-pointer whitespace-nowrap hidden lg:block">Run</span>
        <span className="hover:bg-[#505050] px-2 py-0.5 rounded cursor-pointer whitespace-nowrap hidden xl:block">Terminal</span>
        <span className="hover:bg-[#505050] px-2 py-0.5 rounded cursor-pointer whitespace-nowrap hidden xl:block">Help</span>
      </div>

      <div className="text-center text-[13px] text-[#cccccc] truncate px-4 absolute left-1/2 -translate-x-1/2 pointer-events-none hidden sm:block">
        portfolio.dev — {personalInfo.name}
      </div>

      <div className="flex items-center gap-1 flex-1 justify-end">
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
