'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

type Message = {
  sender: 'user' | 'bot';
  text: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Fixed: include messages.length in dependency array
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          sender: 'bot',
          text: 'Merhaba, size nasıl yardımcı olabilirim? 😊',
        },
      ]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { sender: 'user', text: trimmed }]);
    setInput('');
    setIsLoading(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: 'Teşekkürler! Mesajınız alındı. Size en kısa sürede dönüş yapacağız.',
        },
      ]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-br from-[#5DA5F1] to-[#3A78D4] text-white p-4 rounded-full shadow-lg hover:scale-105 transition"
          title="CRITER Asistan"
        >
          <Image src="/chat.png" alt="Chat" width={24} height={24} />
        </button>
      </div>

      {/* Chatbox */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-4 w-[90vw] max-w-sm z-50 backdrop-blur-md rounded-2xl border border-white/20 bg-white/50 shadow-xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#3A78D4] to-[#5DA5F1] text-white px-5 py-3 flex items-center justify-between rounded-t-2xl">
              <span className="text-sm font-semibold tracking-wide">CRITER AI Asistan</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white text-xl hover:text-gray-300 transition"
              >
                ×
              </button>
            </div>

            {/* Message List */}
            <div className="h-[370px] p-4 overflow-y-auto flex flex-col gap-3 bg-white/30">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`px-4 py-2 text-sm max-w-[75%] rounded-xl backdrop-blur-sm ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-br from-[#5DA5F1] to-[#3A78D4] text-white shadow'
                        : 'bg-white text-gray-800 shadow-md'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="text-xs text-gray-500 italic">Yazıyor...</div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input + Icon Send */}
            <div className="px-3 py-3 bg-white/60 border-t border-gray-200 flex gap-2 items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Bir mesaj yaz..."
                className="flex-1 px-4 py-2 text-gray-900 text-sm rounded-full border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim()}
                className="bg-black p-2 rounded-full hover:bg-gray-900 transition flex items-center justify-center"
                title="Mesaj Gönder"
              >
                <Image src="/send.png" alt="Gönder" width={18} height={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
