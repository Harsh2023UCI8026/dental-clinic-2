import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageSquare, X, Send, Sparkles, ChevronRight, Calendar, Phone, 
  ShieldCheck, CheckCircle2, UserCheck
} from 'lucide-react';

export default function ChatbotWidget({ onOpenBookingModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Namaste 🙏 Welcome to Floss & Gloss Dental Clinic, Shela. How can we assist you with your dental care today?',
      options: [
        '✨ Clear Aligners & EMI',
        '👩‍⚕️ Doctor Archana Consultation',
        '💰 Treatment Fees & Cost',
        '📍 Clinic Location & Timings'
      ]
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleOptionClick = (optionText) => {
    const userMsg = { id: Date.now(), sender: 'user', text: optionText };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      let botReply = '';
      let replyOptions = [];

      if (optionText.includes('Clear Aligners') || optionText.includes('Aligner')) {
        botReply = 'Floss & Gloss Clear Aligners start at ₹45,000 with 0% interest EMIs from ₹1,499/month. All treatments are supervised directly in-clinic by Dr. Archana Mal (M.D.S. Periodontist). Would you like to schedule an in-clinic scan?';
        replyOptions = ['📅 Schedule In-Clinic Scan', '💬 WhatsApp Desk', '🔙 Main Menu'];
      } else if (optionText.includes('Doctor Archana') || optionText.includes('Consultation')) {
        botReply = 'Dr. Archana Mal (B.D.S., M.D.S. Periodontist) brings 19+ years of clinical practice. You can reserve your appointment slot online via KiviHealth with zero waiting time.';
        replyOptions = ['⚡ Instant KiviHealth Slot', '💬 WhatsApp (+91 9104591919)', '🔙 Main Menu'];
      } else if (optionText.includes('Fees') || optionText.includes('Cost')) {
        botReply = 'Transparent Clinic Fees:\n• Consultation & Examination: Included\n• Clear Aligners: ₹45,000 – ₹75,000 (EMI ₹1,499/mo)\n• Painless Root Canal (RCT): ₹3,500 – ₹6,500\n• Permanent Dental Implants: ₹22,000+';
        replyOptions = ['📅 Book Consultation', '💬 Direct Call', '🔙 Main Menu'];
      } else if (optionText.includes('Location') || optionText.includes('Timings')) {
        botReply = '📍 Location: 130-First Floor, Orchid Sky, Shela, Ahmedabad 380058 (Near Applewoods).\n⏰ Timings: Mon–Sat: 10AM-2PM & 5PM-8PM | Sun: 10AM-2PM.';
        replyOptions = ['⚡ Book Appointment', '💬 WhatsApp Directions', '🔙 Main Menu'];
      } else if (optionText.includes('Main Menu')) {
        botReply = 'Please select a topic below to proceed:';
        replyOptions = [
          '✨ Clear Aligners & EMI',
          '👩‍⚕️ Doctor Archana Consultation',
          '💰 Treatment Fees & Cost',
          '📍 Clinic Location & Timings'
        ];
      } else {
        botReply = `Thank you for reaching out to Floss & Gloss Dental Clinic. Our reception desk is available at +91 9104591919.`;
        replyOptions = ['⚡ Book Appointment', '💬 WhatsApp Desk', '🔙 Main Menu'];
      }

      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, sender: 'bot', text: botReply, options: replyOptions }
      ]);
    }, 500);
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

      {/* Classic Dignified Circular Launcher Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open Dental Desk Assistant"
          className="w-14 h-14 bg-[#0F292F] hover:bg-slate-900 rounded-full shadow-2xl flex items-center justify-center border-2 border-amber-400 text-white transition transform hover:scale-105"
        >
          <div className="relative w-full h-full rounded-full overflow-hidden p-0.5">
            <img 
              src="/images/chatbot_assistant.jpg" 
              alt="Floss & Gloss Dental Assistant"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"></span>
        </button>
      )}

      {/* Professional Clinic Chat Window */}
      {isOpen && (
        <div className="w-[340px] sm:w-[370px] h-[500px] bg-white rounded-xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden">
          
          {/* Header */}
          <div className="bg-[#0F292F] text-white p-4 flex items-center justify-between border-b border-teal-800/60">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-teal-800 overflow-hidden border border-amber-400/50 flex-shrink-0">
                <img src="/images/chatbot_assistant.jpg" alt="Assistant" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-bold text-sm text-white flex items-center gap-1.5">
                  <span>Floss & Gloss Dental Desk</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                </div>
                <div className="text-[10px] text-teal-200">Official Shela Clinic Support</div>
              </div>
            </div>
            
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-slate-50 text-xs">
            {messages.map((msg) => (
              <div 
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div 
                  className={`max-w-[85%] p-3 rounded-lg leading-relaxed shadow-xs whitespace-pre-line ${
                    msg.sender === 'user' 
                      ? 'bg-[#0F292F] text-white font-medium rounded-br-none'
                      : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>

                {/* Quick Reply Options */}
                {msg.sender === 'bot' && msg.options && msg.options.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1.5 max-w-[90%]">
                    {msg.options.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          if (opt.includes('In-Clinic Scan') || opt.includes('Instant KiviHealth Slot') || opt.includes('Book Consultation') || opt.includes('Book Appointment')) {
                            if (onOpenBookingModal) onOpenBookingModal();
                          } else if (opt.includes('WhatsApp')) {
                            window.open('https://wa.me/919104591919?text=Hi%20Floss%20%26%20Gloss,%20I%20want%20to%20know%20more%20about%20Clear%20Aligners.', '_blank');
                          } else {
                            handleOptionClick(opt);
                          }
                        }}
                        className="bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-semibold text-[11px] px-3 py-1.5 rounded shadow-xs transition flex items-center gap-1"
                      >
                        <span>{opt}</span>
                        <ChevronRight className="w-3 h-3 text-teal-800" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="bg-white border border-slate-200 p-2.5 rounded-lg w-fit text-slate-400 text-xs italic">
                Desk typing...
              </div>
            )}
            
            <div ref={chatEndRef} />
          </div>

          {/* Form */}
          <form onSubmit={handleSendCustomMessage} className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
            <input 
              type="text"
              placeholder="Type your query..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className="flex-1 px-3 py-2 text-xs rounded border border-slate-300 focus:outline-none focus:border-teal-800"
            />
            <button 
              type="submit"
              className="bg-[#0F292F] hover:bg-slate-900 text-white p-2 rounded transition"
            >
              <Send className="w-3.5 h-3.5 text-amber-400" />
            </button>
          </form>

        </div>
      )}

    </div>
  );
}
