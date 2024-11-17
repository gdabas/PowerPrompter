import React from 'react';
import { IoMdClose } from 'react-icons/io';

interface ClaudeInterface {
  onClose: () => void;
  initialPrompt: string;
  onEditPrompt: (prompt: string) => void;
}

const ClaudeInterface: React.FC<ClaudeInterface> = ({ onClose, initialPrompt, onEditPrompt }) => {
  return (
    <div className="relative bg-slate-800 rounded-lg p-4 h-[600px]">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-white">Using Claude Model</h3>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <IoMdClose size={24} />
        </button>
      </div>
      {/* Add your GPT-specific chat implementation here */}
    </div>
  );
};

export default ClaudeInterface;