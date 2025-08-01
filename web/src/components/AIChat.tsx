'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot } from 'lucide-react';

interface Message {
  sender: 'user' | 'ai';
  text: string;
}

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const userMessage: Message = { sender: 'user', text: inputValue };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        sender: 'ai',
        text: "This is a simulated AI response. The real AI is not connected yet.",
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={handleToggle}
          className="p-3 bg-violet-600 text-white rounded-full shadow-lg hover:bg-violet-700 transition-transform duration-300 hover:scale-110"
          aria-label="Open AI Chat"
        >
          <Bot size={28} />
        </button>
      )}

      {/* Chat Window */}
            <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="w-80 h-[40rem] bg-white/5 dark:bg-black/5 backdrop-blur-lg rounded-xl shadow-2xl flex flex-col border border-white/10"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-3 border-b border-white/10">
              <h3 className="font-bold text-lg text-neutral-800 dark:text-neutral-200">Chat with AI</h3>
              <button
                onClick={handleToggle}
                className="p-1 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white rounded-full hover:bg-white/10 cursor-pointer"
                aria-label="Close AI Chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-3 space-y-3 overflow-y-auto">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.sender === 'ai' && (
                    <div className="w-8 h-8 bg-violet-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                      <Bot size={20} />
                    </div>
                  )}
                  <div
                    className={`max-w-xs p-2.5 rounded-lg ${msg.sender === 'user'
                        ? 'bg-violet-600 text-white rounded-br-none'
                        : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 rounded-bl-none'
                      }`}>
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                  <div className="flex items-end gap-2 justify-start">
                      <div className="w-8 h-8 bg-violet-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                          <Bot size={20} />
                      </div>
                      <div className="max-w-xs p-2.5 rounded-lg bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 rounded-bl-none">
                          <div className="flex items-center justify-center space-x-1">
                              <span className="h-1.5 w-1.5 bg-violet-400 rounded-full animate-pulse [animation-delay:-0.3s]"></span>
                              <span className="h-1.5 w-1.5 bg-violet-400 rounded-full animate-pulse [animation-delay:-0.15s]"></span>
                              <span className="h-1.5 w-1.5 bg-violet-400 rounded-full animate-pulse"></span>
                          </div>
                      </div>
                  </div>
              )}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-white/10">
              <div className="flex items-center gap-2">
                <textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                  placeholder="Ask me anything..."
                  className="flex-1 p-2 bg-transparent border border-neutral-300 dark:border-neutral-600 rounded-md resize-none focus:ring-2 focus:ring-violet-500 focus:outline-none text-sm"
                  rows={1}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={isLoading || inputValue.trim() === ''}
                  className="p-2 bg-violet-600 text-white rounded-md shadow-md hover:bg-violet-700 disabled:bg-violet-400 disabled:cursor-not-allowed transition-colors"
                  aria-label="Send Message"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIChat;
