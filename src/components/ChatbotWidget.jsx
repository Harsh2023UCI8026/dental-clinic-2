import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageSquare, X, Send, Sparkles, ChevronRight, Calendar, Phone, 
  HelpCircle, ShieldCheck, CheckCircle2, RefreshCw, UserCheck
} from 'lucide-react';

// Character-by-character animated typewriter message component
function TypewriterMessage({ text, onComplete, speed = 20 }) {
  const [displayedText, setDisplayedText] = useState('');
  const indexRef = useRef(0);

  useEffect(() => {
    setDisplayedText('');
    indexRef.current = 0;

    const timer = setInterval(() => {
      if (indexRef.current < text.length) {
        setDisplayedText((prev) => prev + text.charAt(indexRef.current));
        indexRef.current += 1;
      } else {
        clearInterval(timer);
        if (onComplete) onComplete();
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return <span>{displayedText}</span>;
}

export default function ChatbotWidget({ onOpenBookingModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Namaste! 🙏 Welcome to Floss & Gloss Dental Clinic, Shela. How can I assist your smile today?',
      options: [
        '✨ Clear Aligners & EMI',
        '👩‍⚕️ Book Dr. Archana Consultation',
        '💰 Treatment Charges',
        '📍 Clinic Address & Timings'
      ]
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showPreviewBubble, setShowPreviewBubble] = useState(true);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setShowPreviewBubble(false);
    }
  }, [messages, isOpen]);

  // Periodic floating message preview trigger
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isOpen) {
        setShowPreviewBubble((prev) => !prev);
      }
    }, 6000);
    return () => clearInterval(timer);
  }, [isOpen]);

  const handleOptionClick = (optionText) => {
    const userMsg = { id: Date.now(), sender: 'user', text: optionText };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      let botReply = '';
      let replyOptions = [];

      if (optionText.includes('Clear Aligners') || optionText.includes('Aligner')) {
        botReply = 'Floss & Gloss Clear Aligners start at ₹45,000 with flexible 0% interest EMIs starting at ₹1,499/month! Treatment is 100% supervised in-clinic by Dr. Archana Mal (M.D.S. Periodontist). Would you like to book a free 3D Aligner scan?';
        replyOptions = ['📅 Book Free 3D Aligner Scan', '💬 WhatsApp Specialist', '🔙 Main Menu'];
      } else if (optionText.includes('Book Dr. Archana') || optionText.includes('Book')) {
        botReply = 'Dr. Archana Mal (B.D.S., M.D.S. Periodontist) has 19+ years of clinical experience. You can book an instant zero-waiting slot directly via KiviHealth or WhatsApp.';
        replyOptions = ['⚡ Instant KiviHealth Slot', '💬 Chat on WhatsApp (+91 9104591919)', '🔙 Main Menu'];
      } else if (optionText.includes('Charges') || optionText.includes('Pricing')) {
        botReply = 'Our Transparent Charges:\n• Free Consultation & Aligner Assessment\n• Clear Aligners: ₹45,000 – ₹75,000 (EMI ₹1,499/mo)\n• Painless RCT: ₹3,500 – ₹6,500\n• Permanent Implants: ₹22,000+';
        replyOptions = ['📅 Book Consultation Slot', '💬 Request Callback', '🔙 Main Menu'];
      } else if (optionText.includes('Address') || optionText.includes('Timings')) {
        botReply = '📍 Address: 130-First Floor, Orchid Sky, Shela, Ahmedabad 380058 (Near Applewoods/Bopal).\n⏰ Timings: Mon–Sat: 10AM-2PM & 5PM-8PM | Sun: 10AM-2PM.';
        replyOptions = ['⚡ Book Visit Now', '💬 WhatsApp Directions', '🔙 Main Menu'];
      } else if (optionText.includes('Main Menu')) {
        botReply = 'How else can I help you today? Please choose an option below:';
        replyOptions = [
          '✨ Clear Aligners & EMI',
          '👩‍⚕️ Book Dr. Archana Consultation',
          '💰 Treatment Charges',
          '📍 Clinic Address & Timings'
        ];
      } else {
        botReply = `Thank you for reaching out! Our clinic assistant is ready to help. You can call us directly at +91 9104591919 or book an appointment online.`;
        replyOptions = ['⚡ Book Free Appointment', '💬 Connect on WhatsApp', '🔙 Main Menu'];
      }

      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, sender: 'bot', text: botReply, options: replyOptions }
      ]);
    }, 700);
  };

  const handleSendCustomMessage = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    const userText = inputVal;
    setInputVal('');
    handleOptionClick(userText);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* 💬 FLOATING TEXT PREVIEW POPUP (SPEECH BUBBLE - Black n Green style) */}
      {!isOpen && showPreviewBubble && (
        <div className="mb-3 mr-1 bg-gradient-to-r from-teal-950 via-slate-900 to-cyan-950 text-white p-3.5 rounded-2xl shadow-2xl border border-teal-500/40 max-w-xs animate-float-subtle flex items-center gap-3 backdrop-blur-lg">
          <div className="w-9 h-9 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center flex-shrink-0 border border-emerald-400/40">
            <Sparkles className="w-4 h-4 text-emerald-400 animate-spin" />
          </div>
          <div className="text-xs">
            <div className="font-extrabold text-cyan-300 flex items-center gap-1">
              <span>Smile Assistant Active</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>
            <p className="text-slate-200 mt-0.5 leading-snug">
              Need Clear Aligners at ₹1,499/mo? Chat with us now!
            </p>
          </div>
          <button 
            onClick={() => setShowPreviewBubble(false)} 
            className="text-slate-400 hover:text-white text-xs ml-1"
          >
            ✕
          </button>
        </div>
      )}

      {/* 🌟 1. BLACK N GREEN INSPIRED ANIMATED LAUNCHER BUTTON */}
      {!isOpen && (
        <div className="relative group">
          
          {/* Animated Morphing Outer Glowing Ring 1 */}
          <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-full blur-md opacity-80 group-hover:opacity-100 animate-blob-morph transition duration-700"></div>

          {/* Concentric Ping Aura Ring 2 */}
          <div className="absolute -inset-1 bg-emerald-400 rounded-full opacity-40 animate-ping"></div>

          {/* Dotted Orbit Sketch Line 3 */}
          <div className="absolute -inset-3 border border-emerald-300/40 rounded-full animate-spin-slow pointer-events-none"></div>

          {/* Main Circular Avatar Button */}
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open Dental Assistant Chatbot"
            className="relative w-16 h-16 sm:w-18 sm:h-18 bg-teal-900 rounded-full p-0.5 shadow-2xl flex items-center justify-center overflow-hidden border-2 border-emerald-300 transform group-hover:scale-105 transition duration-300"
          >
            <img 
              src="/images/chatbot_assistant.jpg" 
              alt="Floss & Gloss Dental AI Assistant"
              className="w-full h-full object-cover rounded-full"
            />
            {/* Online Status Green Indicator */}
            <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full shadow-md"></span>
          </button>
        </div>
      )}

      {/* 🤖 2. EXPANDABLE CHATBOT DRAWER / WINDOW */}
      {isOpen && (
        <div className="w-[350px] sm:w-[380px] h-[520px] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-scale-up">
          
          {/* Drawer Header */}
          <div className="bg-gradient-to-r from-teal-800 via-teal-900 to-cyan-900 text-white p-4 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full bg-teal-700 overflow-hidden border-2 border-emerald-400 flex-shrink-0">
                <img 
                  src="/images/chatbot_assistant.jpg" 
                  alt="Assistant"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-extrabold text-sm flex items-center gap-1.5">
                  <span>Floss & Gloss Assistant</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                </div>
                <div className="text-[10px] text-teal-200">Online • Shela Clinic Support</div>
              </div>
            </div>
            
            <button 
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-teal-800/80 hover:bg-teal-700 flex items-center justify-center text-teal-200 hover:text-white transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50 text-xs">
            {messages.map((msg) => (
              <div 
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div 
                  className={`max-w-[85%] p-3.5 rounded-2xl leading-relaxed shadow-sm ${
                    msg.sender === 'user' 
                      ? 'bg-gradient-to-r from-teal-700 to-cyan-800 text-white font-medium rounded-br-none'
                      : 'bg-white text-slate-800 border border-slate-200/80 rounded-bl-none'
                  }`}
                >
                  {msg.sender === 'bot' ? (
                    <TypewriterMessage text={msg.text} />
                  ) : (
                    <span>{msg.text}</span>
                  )}
                </div>

                {/* Bot Quick Reply Options */}
                {msg.sender === 'bot' && msg.options && msg.options.length > 0 && (
                  <div className="mt-2.5 flex flex-wrap gap-1.5 max-w-[90%]">
                    {msg.options.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          if (opt.includes('Book Free 3D Aligner Scan') || opt.includes('Instant KiviHealth Slot') || opt.includes('Book Visit')) {
                            if (onOpenBookingModal) onOpenBookingModal();
                          } else if (opt.includes('WhatsApp')) {
                            window.open('https://wa.me/919104591919?text=Hi%20Floss%20%26%20Gloss,%20I%20want%20to%20know%20more%20about%20Clear%20Aligners.', '_blank');
                          } else {
                            handleOptionClick(opt);
                          }
                        }}
                        className="bg-white hover:bg-teal-50 border border-teal-600/30 text-teal-800 hover:text-teal-900 font-semibold text-[11px] px-3 py-1.5 rounded-full shadow-sm transition active:scale-95 flex items-center gap-1"
                      >
                        <span>{opt}</span>
                        <ChevronRight className="w-3 h-3 text-teal-600" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-1.5 bg-white border border-slate-200 p-3 rounded-2xl rounded-bl-none w-fit text-slate-400">
                <span className="w-2 h-2 bg-teal-500 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-teal-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-2 h-2 bg-teal-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </div>
            )}
            
            <div ref={chatEndRef} />
          </div>

          {/* Input Footer */}
          <form onSubmit={handleSendCustomMessage} className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
            <input 
              type="text"
              placeholder="Ask a question..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className="flex-1 px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500"
            />
            <button 
              type="submit"
              className="bg-teal-700 hover:bg-teal-800 text-white p-2.5 rounded-xl shadow transition"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}

    </div>
  );
}
