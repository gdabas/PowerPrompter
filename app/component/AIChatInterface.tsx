'use client';
import { useEffect, useState } from 'react';
import { BsSend } from 'react-icons/bs';
import { findMockResponse } from '../utils/mockResponses';
import PromptModal from './PromptDrawer';
import { BiSolidEdit } from "react-icons/bi";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}
interface AIChatInterfaceProps {
    onClose: () => void;
    initialPrompt: string;
    onEditPrompt: (prompt: string) => void;
  }

export default function AIChatInterface({ onClose, initialPrompt, onEditPrompt }: AIChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isPromptModalOpen, setIsPromptModalOpen] = useState(false);
  const [selectedPrompt, setSelectedPrompt] = useState('');

  const handleEditPrompt = (prompt: string) => {
    setSelectedPrompt(prompt);
    setIsPromptModalOpen(true);
  };

  const handleEnhancedPromptGenerate = () => {
    setIsPromptModalOpen(false);
    // Here you can handle the enhanced prompt
    // For now, we'll just send it as a new message
    const userMessage: Message = {
      role: 'user',
      content: selectedPrompt
    };
    
    const aiResponse: Message = {
      role: 'assistant',
      content: findMockResponse(selectedPrompt)
    };

    setMessages(prev => [...prev, userMessage, aiResponse]);
  };

  useEffect(() => {
    if (initialPrompt) {
      const userMessage: Message = {
        role: 'user',
        content: initialPrompt
      };
      
      const aiResponse: Message = {
        role: 'assistant',
        content: findMockResponse(initialPrompt)
      };

      setMessages([userMessage, aiResponse]);
    }
  }, [initialPrompt]);


  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    // Add user message
    const userMessage: Message = {
      role: 'user',
      content: newMessage
    };

    // Get AI response
    const aiResponse: Message = {
      role: 'assistant',
      content: findMockResponse(newMessage)
    };

    // Update messages
    setMessages(prev => [...prev, userMessage, aiResponse]);
    setNewMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900 flex">
      {/* Chat Header */}
      <div className="flex flex-col w-full h-full">
        <div className="bg-black p-4 text-white flex justify-between items-center">
          <h2 className="text-xl font-semibold">AI Chat</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 w-8/12 mx-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div className="group relative w-full">
              <div
                className={`max-w-fit   p-3 min-w-[50px]  ${
                  message.role === 'user'
                    ? 'bg-opacity-10 bg-gray-500 text-white ml-auto text-end px-10 rounded-2xl relative'
                    : 'text-white text-start'
                }`}
              >
                {message.content}
                {message.role === 'user' && (
                  <button
                    onClick={() => handleEditPrompt(message.content)}
                    className="absolute -left-8 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <BiSolidEdit />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

        {/* Chat Input */}
        <div className="border-t border-gray-200 p-4 bg-white w-8/12 mx-auto mb-5 rounded-lg">
          <div className="flex items-center space-x-2">
            <textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
              placeholder="Type your message..."
              className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500"
            />
             <button
            onClick={handleSendMessage}
            className="bg-emerald-500 text-white rounded-full p-3 hover:bg-emerald-600"
          >
            <BsSend />
          </button>
          </div>
        </div>
      </div>
      <PromptModal 
          isOpen={isPromptModalOpen}
          onClose={() => setIsPromptModalOpen(false)}
          onGenerate={handleEnhancedPromptGenerate}
          initialPrompt={selectedPrompt}
        />
    </div>
  );
}