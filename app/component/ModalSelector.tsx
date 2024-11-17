import React from 'react';

interface ModelSelectorProps {
  selectedModel: string;
  onModelSelect: (model: string) => void;
  className?: string;
}

const ModelSelector: React.FC<ModelSelectorProps> = ({ selectedModel, onModelSelect, className }) => {
  const models = [
    { id: 'gpt-4', name: 'GPT-4', description: 'Latest GPT model with advanced capabilities' },
    { id: 'claude', name: 'Claude', description: 'Anthropic\'s advanced AI assistant' },
  ];

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {models.map((model) => (
        <button
          key={model.id}
          onClick={() => onModelSelect(model.id)}
          className={`flex-1 p-4 rounded-lg border transition-all duration-300 ${
            selectedModel === model.id
              ? 'border-emerald-500 bg-emerald-500/10 text-emerald-500'
              : 'border-gray-600 hover:border-emerald-500/50 text-gray-300'
          }`}
        >
          <div className="text-lg font-semibold">{model.name}</div>
          <div className="text-sm opacity-70">{model.description}</div>
        </button>
      ))}
    </div>
  );
};

export default ModelSelector;