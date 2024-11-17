interface PromptDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onGenerate: () => void;
  initialPrompt: string;
}

export default function PromptDrawer({ 
  isOpen, 
  onClose, 
  onGenerate,
  initialPrompt 
}: PromptDrawerProps) {
  return (
    <div
      className={`fixed inset-y-0 right-0 w-[400px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } z-50`}
    >
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="p-4 border-b flex justify-between items-center">
          <h3 className="text-xl font-semibold">Enhance Your Prompt</h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Current Prompt</label>
            <div className="w-full p-3 border rounded-md bg-gray-50">
              {initialPrompt}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
            <select className="w-full p-2 border rounded-md">
              <option>Professional Writer</option>
              <option>Business Analyst</option>
              <option>Software Developer</option>
              <option>Marketing Expert</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Intent</label>
            <select className="w-full p-2 border rounded-md">
              <option>Explain</option>
              <option>Analyze</option>
              <option>Summarize</option>
              <option>Compare</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tone</label>
            <select className="w-full p-2 border rounded-md">
              <option>Professional</option>
              <option>Casual</option>
              <option>Academic</option>
              <option>Friendly</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Additional Context</label>
            <textarea 
              className="w-full p-2 border rounded-md"
              rows={3}
              placeholder="Add any additional context or requirements..."
            />
          </div>
        </div>

        {/* Footer */}
        <div className="border-t p-4 bg-gray-50">
          <div className="flex gap-3 justify-end">
            <button 
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button 
              onClick={onGenerate}
              className="px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600"
            >
              Generate Enhanced Prompt
            </button>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}
    </div>
  );
}