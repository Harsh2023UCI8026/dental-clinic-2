import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, X, Send, Calendar, Phone, Sparkles, MapPin, 
  ShieldCheck, ArrowRight, RefreshCw, MessageSquare
} from 'lucide-react';

// Typewriter animated message component
function TypewriterMessage({ text, speed = 25, onComplete }) {
  const [displayedText, setDisplayedText] = useState('');
  const indexRef = useRef(0);

  useEffect(() => {
    indexRef.current = 0;
    setDisplayedText('');
    
    const interval = setInterval(() => {
      if (indexRef.current < text.length) {
        setDisplayedText((prev) => text.substring(0, indexRef.current + 1));
        indexRef.current += 1;
      } else {
        clearInterval(interval);
        if (onComplete) onComplete();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <p className="whitespace-pre-line">{displayedText}</p>;
}

export default function ChatbotWidget({ onOpenBookingModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Hello! 👋 I am Dr. Archana's Virtual Assistant at Floss & Gloss Dental Clinic, Shela.\n\nHow can I assist your smile today?",
      showOptions: true,
      isAnimated: true
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen]);

  const quickOptions = [
    { label: '📅 Book Consultation Slot', action: 'book' },
    { label: '🚨 Severe Tooth Pain / Emergency', action: 'emergency' },
    { label: '✨ Clear Aligners & Braces Query', action: 'aligners' },
    { label: '🦷 Teeth Cleaning & Polishing', action: 'cleaning' },
    { label: '🛡️ Implants & Replacement', action: 'implants' },
    { label: '📍 Clinic Address & Hours', action: 'location' }
  ];

  const handleOptionClick = (option) => {
    // Add user message
    const userMsg = { id: Date.now(), sender: 'user', text: option.label };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      let botResponseText = '';
      let isBookingResponse = false;

      switch (option.action) {
        case 'book':
          botResponseText = "Great choice! Direct specialist consultation with Dr. Archana Mal (MDS Periodontist) has zero waiting time.\n\nYou can pick your preferred date and time slot below:";
          isBookingResponse = true;
          break;
        case 'emergency':
          botResponseText = "🚨 For urgent toothache or dental emergencies in Shela/Bopal, please call Dr. Archana directly at +91 91045 91919 or visit our clinic at 130-First Floor, Orchid Sky, Shela.";
          break;
        case 'aligners':
          botResponseText = "✨ Our Floss & Gloss Clear Aligners start from ₹1,499/mo EMI. We offer a complimentary 3D Digital Scan at our Shela clinic!\n\nWould you like to reserve a free scan slot?";
          isBookingResponse = true;
          break;
        case 'cleaning':
          botResponseText = "🦷 Professional scaling removes plaque and prevents gum bleeding. Plans start from ₹1,200. Recommended twice a year for healthy gums!";
          break;
        case 'implants':
          botResponseText = "🛡️ Permanent US FDA-approved dental implants look, feel, and function just like natural teeth. Book a consultation for X-Ray assessment.";
          break;
        case 'location':
          botResponseText = "📍 We are located at 130-First Floor, Orchid Sky, Shela, Ahmedabad (Near Applewoods).\n\n⏰ Timings: Mon-Sat 10:00 AM – 8:00 PM | Sun 10:00 AM – 2:00 PM (By Appt).";
          break;
        default:
          botResponseText = "Thank you for reaching out! How else can I help you today?";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'bot',
          text: botResponseText,
          isBooking: isBookingResponse,
          showOptions: true,
          isAnimated: true
        }
      ]);
      setIsTyping(false);
    }, 600);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userText = inputText;
    setInputText('');
    setMessages((prev) => [...prev, { id: Date.now(), sender: 'user', text: userText }]);
    setIsTyping(true);

    setTimeout(() => {
      const lower = userText.toLowerCase();
      let reply = "Thank you for your message! Dr. Archana's team will assist you. You can also call us directly at +91 9104591919.";
      let isBooking = false;

      if (lower.includes('aligner') || lower.includes('brace') || lower.includes('price') || lower.includes('cost')) {
        reply = "Floss & Gloss Clear Aligners start at ₹45,000 (EMI ₹1,499/mo). Complete treatment includes US FDA-approved materials & MDS supervision.";
        isBooking = true;
      } else if (lower.includes('book') || lower.includes('appointment') || lower.includes('slot')) {
        reply = "You can instantly reserve a zero-waiting appointment slot right here:";
        isBooking = true;
      } else if (lower.includes('address') || lower.includes('where') || lower.includes('location')) {
        reply = "Clinic Address: 130-First Floor, Orchid Sky, Shela, Ahmedabad (Near Applewoods).";
      }

      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, sender: 'bot', text: reply, isBooking, showOptions: true, isAnimated: true }
      ]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      
      {/* 🔴 FLOATING CHATBOT LAUNCHER BUTTON */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition transform hover:scale-105 active:scale-95 border-2 border-white/20 cursor-pointer"
        >
          <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white animate-pulse"></div>
          <Bot className="w-7 h-7 text-white" />
          <span className="hidden sm:inline-block max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-bold text-xs pl-2 text-white">
            Chat with AI Assistant
          </span>
        </button>
      )}

      {/* 💬 CHATBOT WINDOW MODAL */}
      {isOpen && (
        <div className="w-[360px] sm:w-[390px] h-[580px] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-pulse-glow">
          
          {/* Chat Header */}
          <div className="bg-slate-900 text-white p-4 flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-sm shadow">
                  AM
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-slate-900"></div>
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-white flex items-center gap-1.5">
                  <span>Dr. Archana Assistant</span>
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                </h4>
                <div className="text-[11px] text-teal-400 font-semibold">
                  Floss & Gloss Clinic • Active Now
                </div>
              </div>
            </div>
            
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50/50 text-xs">
            
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 leading-relaxed shadow-sm transition-all duration-300 ${
                    msg.sender === 'user'
                      ? 'bg-red-600 text-white rounded-br-none font-medium transform translate-y-0 scale-100'
                      : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none transform translate-y-0 scale-100'
                  }`}
                >
                  {msg.sender === 'bot' && msg.isAnimated ? (
                    <TypewriterMessage 
                      text={msg.text} 
                      onComplete={scrollToBottom}
                    />
                  ) : (
                    <p className="whitespace-pre-line">{msg.text}</p>
                  )}

                  {/* Inline Slot Picker Trigger */}
                  {msg.isBooking && (
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        onOpenBookingModal();
                      }}
                      className="mt-3 w-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-extrabold text-xs py-2.5 rounded-xl shadow flex items-center justify-center gap-2 transition transform hover:scale-[1.02]"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Open Slot Picker</span>
                    </button>
                  )}
                </div>
              </div>
            ))}

            {/* Quick Option Pills */}
            {messages.length > 0 && messages[messages.length - 1].showOptions && !isTyping && (
              <div className="pt-2 space-y-1.5 transition-all duration-500 ease-out">
                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider px-1">
                  Suggested Options:
                </div>
                <div className="flex flex-col gap-1.5">
                  {quickOptions.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleOptionClick(opt)}
                      className="text-left bg-white hover:bg-teal-50 text-slate-700 hover:text-teal-900 border border-slate-200 hover:border-teal-300 font-semibold px-3 py-2 rounded-xl transition text-xs flex items-center justify-between transform hover:translate-x-1 duration-200 shadow-sm"
                    >
                      <span>{opt.label}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 text-slate-500 rounded-2xl rounded-bl-none p-3 flex items-center gap-1.5 shadow-sm">
                  <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input Bar */}
          <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 px-3.5 py-2.5 bg-slate-100 rounded-xl text-xs text-slate-800 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
            />
            <button
              type="submit"
              className="bg-teal-600 hover:bg-teal-700 text-white p-2.5 rounded-xl shadow transition flex-shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}

    </div>
  );
}
