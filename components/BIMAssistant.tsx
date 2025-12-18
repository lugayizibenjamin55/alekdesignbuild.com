
import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, Loader2, X } from 'lucide-react';
import { Message } from '../types';
import { getBIMAdvice } from '../geminiService';

interface Props {
  onClose: () => void;
}

export default function BIMAssistant({ onClose }: Props) {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', content: "Hello! I'm your Alek Design Build BIM Assistant. How can I help you with ArchiCAD, Tekla, or Twinmotion today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const aiResponse = await getBIMAdvice(messages, userMsg);
    
    setMessages(prev => [...prev, { role: 'model', content: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <>
      <div className="p-4 bg-blue-600 text-white flex justify-between items-center shrink-0">
        <div className="flex items-center gap-2">
          <Bot className="w-5 h-5" />
          <div>
            <h3 className="font-bold text-sm">BIM Expert Assistant</h3>
            <p className="text-[10px] opacity-80 uppercase tracking-widest font-medium">Powered by Gemini AI</p>
          </div>
        </div>
        <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-full transition-colors">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto space-y-4 bg-slate-900 custom-scrollbar">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-blue-600' : 'bg-slate-700'}`}>
                {msg.role === 'user' ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-blue-400" />}
              </div>
              <div className={`p-3 rounded-2xl text-xs leading-relaxed ${msg.role === 'user' ? 'bg-blue-700 text-white rounded-tr-none' : 'bg-slate-800 text-slate-200 rounded-tl-none border border-slate-700'}`}>
                {msg.content}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="flex gap-2 max-w-[85%]">
              <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4 text-blue-400" />
              </div>
              <div className="bg-slate-800 p-3 rounded-2xl rounded-tl-none border border-slate-700">
                <Loader2 className="w-4 h-4 text-blue-400 animate-spin" />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-slate-800 border-t border-slate-700 shrink-0">
        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about Tekla, ArchiCAD..."
            className="flex-grow bg-slate-900 text-white text-xs p-3 rounded-xl border border-slate-700 focus:outline-none focus:border-blue-500"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading}
            className="bg-blue-600 hover:bg-blue-500 p-3 rounded-xl transition-all disabled:opacity-50"
          >
            <Send className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </>
  );
}
