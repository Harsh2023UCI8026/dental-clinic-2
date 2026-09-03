import React, { useState } from 'react';
import { 
  CheckCircle2, XCircle, Star, Phone, MessageSquare, MapPin, Clock, ShieldCheck, 
  Sparkles, Award, ArrowRight, UserCheck, Calendar, Zap, Heart, Check, ChevronDown, 
  Building2, Camera, Stethoscope, ChevronRight, Play, Info, HelpCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import ChatbotWidget from './components/ChatbotWidget';

export default function App() {
  // Lead Form State
  const [formData, setFormData] = useState({ name: '', phone: '', treatment: 'Clear Aligners' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Teeth Issues Tab State
  const [activeIssueTab, setActiveIssueTab] = useState('gap');

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(0);

  // AI Smile Preview Modal State
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [previewStep, setPreviewStep] = useState(1);
  const [previewData, setPreviewData] = useState({ concern: 'Gaps', timeframe: '6-8 months' });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setFormSubmitted(true);
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
  };

  const triggerKiviHealthBooking = () => {
    window.open('https://kivihealth.com/iam/archana.mal.m8w8m9l53l8p/bookslot', '_blank');
  };

  const triggerWhatsApp = () => {
    window.open('https://wa.me/919104591919?text=Hi%20Floss%20%26%20Gloss,%20I%20want%20to%20know%20more%20about%20Clear%20Aligners%20and%20Book%20a%20Free%20Scan.', '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-slate-50 relative">
      
      {/* 🔝 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-slate-900 text-white text-xs md:text-sm py-2 px-4 text-center flex items-center justify-center gap-2">
        <span className="bg-red-600 text-white font-bold text-[10px] uppercase px-2 py-0.5 rounded-full animate-pulse">
          Student Special
        </span>
        <span>Get Clear Aligners starting at <strong>₹1,499/month EMI</strong> | 0% Interest Available</span>
        <button 
          onClick={triggerWhatsApp}
          className="hidden md:inline-flex items-center gap-1 underline text-red-400 font-semibold hover:text-red-300 ml-2"
        >
          <MessageSquare className="w-3.5 h-3.5" /> Chat on WhatsApp
        </button>
      </div>

      {/* 🧭 2. MAIN HEADER */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-gradient-to-tr from-teal-600 to-cyan-500 rounded-xl flex items-center justify-center text-white font-extrabold text-2xl shadow-md">
              F&G
            </div>
            <div>
              <div className="text-xl md:text-2xl font-black tracking-tight text-slate-900 leading-none">
                FLOSS & GLOSS
              </div>
              <div className="text-[11px] font-semibold text-teal-600 tracking-wider uppercase mt-0.5">
                Dental Clinic • Shela Ahmedabad
              </div>
            </div>
          </div>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#why-aligners" className="hover:text-red-600 transition">Why Aligners</a>
            <a href="#comparison" className="hover:text-red-600 transition">Toothsi vs Braces</a>
            <a href="#issues" className="hover:text-red-600 transition">Issues We Fix</a>
            <a href="#doctor" className="hover:text-red-600 transition">Lead Specialist</a>
            <a href="#pricing" className="hover:text-red-600 transition">Pricing & EMI</a>
            <a href="#faq" className="hover:text-red-600 transition">FAQs</a>
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-3">
            <a 
              href="tel:+919104591919" 
              className="hidden sm:flex items-center gap-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 px-3.5 py-2.5 rounded-full transition border border-slate-200"
            >
              <Phone className="w-3.5 h-3.5 text-teal-600" />
              <span>+91 9104591919</span>
            </a>
            <button 
              onClick={triggerKiviHealthBooking}
              className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs md:text-sm px-5 py-2.5 rounded-full shadow-lg shadow-red-600/30 hover:shadow-red-600/50 transition transform active:scale-95 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      </header>

      {/* 🌟 3. HERO SECTION WITH LEAD CAPTURE FUNNEL */}
      <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Trust Pill */}
              <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-1.5 text-xs font-semibold text-amber-900 shadow-sm">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span><strong>5.0★ Google Rated</strong> (81+ Verified Shela Reviews)</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.15] tracking-tight">
                Invisible. Removable.<br/>
                <span className="bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">
                  Painless Aligners in 6-8 Months.
                </span>
              </h1>

              {/* Sub-headline */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Designed & supervised directly by <strong>Dr. Archana Mal (M.D.S. Periodontist)</strong> with 19+ years of experience. No monthly wire tightenings, no food restrictions, and no waiting time.
              </p>

              {/* Bullet Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'US FDA Approved Medical Material',
                  'EMIs Starting at ₹1,499/month',
                  '100% Doctor-Monitored Care',
                  'Free Extra Aligner Guarantee'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* AI Smile Simulator CTA */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button 
                  onClick={() => setIsPreviewOpen(true)}
                  className="bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-2xl shadow-lg shadow-teal-700/20 flex items-center gap-2.5 transition transform hover:-translate-y-0.5"
                >
                  <Sparkles className="w-4 h-4 text-cyan-300 animate-spin" />
                  <span>Try 30-Sec AI Smile Preview</span>
                </button>
                <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                  <ShieldCheck className="w-5 h-5 text-teal-600" />
                  <span>Shela • Bopal • Shilaj • Applewoods</span>
                </div>
              </div>

            </div>

            {/* Right Form Column (Lead Capture Box) */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 relative">
                
                {/* Form Header Badge */}
                <div className="bg-red-50 text-red-700 border border-red-100 font-bold text-xs px-3 py-1 rounded-full w-fit mb-4 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-red-600 fill-current" />
                  <span>Free Clinic Consultation & Scan</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-1">Book Your Free Smile Consultation</h3>
                <p className="text-xs text-slate-500 mb-6">Zero waiting time. Direct consultation with Dr. Archana Mal.</p>

                {formSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
                    <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto text-xl shadow-lg">
                      ✓
                    </div>
                    <h4 className="font-bold text-emerald-900 text-lg">Slot Requested Successfully!</h4>
                    <p className="text-xs text-emerald-700 leading-relaxed">
                      Our clinic coordinator will call you at <strong>{formData.phone}</strong> shortly to confirm your appointment time at Orchid Sky, Shela.
                    </p>
                    <button 
                      onClick={triggerKiviHealthBooking}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3 rounded-xl shadow transition"
                    >
                      Instant Book on KiviHealth
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Your Full Name*</label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Rahul Patel"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Mobile Number*</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="10-digit phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Treatment Preference</label>
                      <select 
                        value={formData.treatment}
                        onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition bg-white"
                      >
                        <option value="Clear Aligners">Floss & Gloss Clear Aligners</option>
                        <option value="Braces">Traditional Braces</option>
                        <option value="Root Canal">Root Canal Treatment (RCT)</option>
                        <option value="Implants">Dental Implants</option>
                        <option value="General Consultation">General Teeth Checkup</option>
                      </select>
                    </div>

                    <div className="flex items-start gap-2 pt-1">
                      <input type="checkbox" defaultChecked id="whatsapp-opt" className="mt-1 accent-red-600" />
                      <label htmlFor="whatsapp-opt" className="text-[11px] text-slate-500 leading-tight">
                        Receive appointment updates & treatment cost estimation on WhatsApp.
                      </label>
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-extrabold text-sm py-4 rounded-xl shadow-xl shadow-red-600/30 hover:shadow-red-600/50 transition transform active:scale-98 flex items-center justify-center gap-2"
                    >
                      <span>Book Free Clinic Visit</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <p className="text-[10px] text-slate-400 text-center">
                      🔒 Your privacy is respected. No spam guaranteed.
                    </p>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🛡️ 4. STERILIZATION & HYGIENE BANNER */}
      <section className="bg-slate-900 text-white py-8 border-y border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            
            <div className="flex items-center gap-4 bg-slate-800/60 p-4 rounded-2xl border border-slate-700/50">
              <div className="w-12 h-12 bg-teal-500/20 text-teal-400 rounded-xl flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-100">100% Autoclave Sterilized</h4>
                <p className="text-xs text-slate-400">Class-B pressure autoclaving for total bacterial elimination.</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-slate-800/60 p-4 rounded-2xl border border-slate-700/50">
              <div className="w-12 h-12 bg-cyan-500/20 text-cyan-400 rounded-xl flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-100">UV Germicidal Protection</h4>
                <p className="text-xs text-slate-400">Ultraviolet irradiation storage for every single tool.</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-slate-800/60 p-4 rounded-2xl border border-slate-700/50">
              <div className="w-12 h-12 bg-red-500/20 text-red-400 rounded-xl flex items-center justify-center flex-shrink-0">
                <Stethoscope className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-100">Digital Low-Ray X-Rays</h4>
                <p className="text-xs text-slate-400">Instant digital diagnosis with minimum radiation exposure.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 📊 5. SECTION 1 REPLICATED: "MUCH SUPERIOR TO BRACES" */}
      <section id="comparison" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="bg-red-50 text-red-600 font-extrabold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              Comparison Grid
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 mb-4">
              Much Superior to Traditional Braces
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Say goodbye to ugly metal wires, food restrictions, and painful bracket cuts. Floss & Gloss clear aligners give you total freedom.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl border border-slate-200 shadow-xl bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-4 sm:p-5 text-sm font-bold w-1/2 sm:w-5/12">Key Features & Experience</th>
                    <th className="p-4 sm:p-5 text-sm font-extrabold text-center bg-red-600 text-white w-1/4 sm:w-3.5/12">
                      Floss & Gloss Aligners
                    </th>
                    <th className="p-4 sm:p-5 text-sm font-bold text-center text-slate-300 w-1/4 sm:w-3.5/12">
                      Traditional Braces
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm font-semibold">
                  {[
                    { feature: 'Nearly Invisible & Discreet', aligner: true, braces: false },
                    { feature: 'Remove at Will (Eat & Brush Easily)', aligner: true, braces: false },
                    { feature: 'Fast Results in 6–8 Months', aligner: true, braces: false },
                    { feature: 'Painless Smooth Medical Polyurethane', aligner: true, braces: false },
                    { feature: 'Eat All Your Favorite Foods (No Restrictions)', aligner: true, braces: false },
                    { feature: 'Supervised by MDS Specialist (Dr. Archana Mal)', aligner: true, braces: 'varies' },
                    { feature: 'Zero Waiting & Minimal Clinic Visits', aligner: true, braces: false },
                    { feature: 'Guaranteed Outcome (Free Extra Trays if needed)', aligner: true, braces: false },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'}>
                      <td className="p-4 sm:p-5 font-semibold text-slate-800">{row.feature}</td>
                      <td className="p-4 sm:p-5 text-center bg-red-50/40 text-emerald-600 font-bold">
                        {row.aligner === true && <CheckCircle2 className="w-5 h-5 mx-auto text-emerald-600" />}
                      </td>
                      <td className="p-4 sm:p-5 text-center text-slate-400">
                        {row.braces === false && <XCircle className="w-5 h-5 mx-auto text-rose-400" />}
                        {row.braces === 'varies' && <span className="text-xs text-amber-600 font-medium">Varies</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500 font-medium text-center sm:text-left">
                💡 <strong>Did you know?</strong> 85% of working professionals and students prefer clear aligners over metal braces.
              </div>
              <button 
                onClick={triggerKiviHealthBooking}
                className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-6 py-3 rounded-xl shadow transition whitespace-nowrap"
              >
                Book Your Aligner Scan
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ⚖️ 6. SECTION 2 REPLICATED: "FLOSS & GLOSS VS OTHER ALIGNERS" */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="bg-teal-500/20 text-teal-300 font-extrabold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider border border-teal-500/30">
              Value & Safety Comparison
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 mb-4">
              Floss & Gloss vs Other Aligner Brands
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Don't risk your teeth with unmonitored DIY home kits or overpay at corporate chains. Get direct specialist care at realistic pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Card 1: DIY / Online Brands */}
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Online DIY Aligner Kits</div>
                <h3 className="text-2xl font-black text-slate-200 mb-4">DIY Mail Kits</h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-center gap-2 text-rose-400">
                    <XCircle className="w-4 h-4 flex-shrink-0" />
                    <span>No in-person dentist monitoring</span>
                  </div>
                  <div className="flex items-center gap-2 text-rose-400">
                    <XCircle className="w-4 h-4 flex-shrink-0" />
                    <span>Impression putty at home (high error risk)</span>
                  </div>
                  <div className="flex items-center gap-2 text-rose-400">
                    <XCircle className="w-4 h-4 flex-shrink-0" />
                    <span>No gum or bone health verification</span>
                  </div>
                  <div className="flex items-center gap-2 text-rose-400">
                    <XCircle className="w-4 h-4 flex-shrink-0" />
                    <span>Cost: ₹60,000 – ₹1,20,000</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-700/60 text-xs text-slate-500">
                ⚠️ High risk of permanent tooth relapse
              </div>
            </div>

            {/* Card 2: Floss & Gloss (FEATURED) */}
            <div className="bg-gradient-to-b from-red-950/90 to-slate-900 border-2 border-red-500 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative transform md:-translate-y-3">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-red-600 text-white font-extrabold text-[10px] uppercase tracking-wider px-4 py-1 rounded-full shadow-lg">
                Recommended Choice
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-red-400 mb-2">Floss & Gloss Dental</div>
                <h3 className="text-2xl font-black text-white mb-2">Specialist Care</h3>
                <p className="text-xs text-slate-300 mb-4">By Dr. Archana Mal (M.D.S. Periodontist)</p>
                <div className="space-y-3 text-xs sm:text-sm text-slate-200">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>100% In-Clinic Digital Scan & Monitoring</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-400">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>US FDA Approved Medical Grade Material</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-400">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>Periodontal (Gum) Health Certified</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-400 font-bold">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-red-400" />
                    <span className="text-white">Price: ₹45,000 – ₹95,000 (EMI ₹1,499/mo)</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-red-500/40">
                <button 
                  onClick={triggerKiviHealthBooking}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs py-3 rounded-xl shadow-lg transition"
                >
                  Book Free Consultation
                </button>
              </div>
            </div>

            {/* Card 3: Corporate Chains */}
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Corporate Chains</div>
                <h3 className="text-2xl font-black text-slate-200 mb-4">Multi-Clinic Chains</h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-center gap-2 text-amber-400">
                    <Info className="w-4 h-4 flex-shrink-0" />
                    <span>Rotating junior associate doctors</span>
                  </div>
                  <div className="flex items-center gap-2 text-amber-400">
                    <Info className="w-4 h-4 flex-shrink-0" />
                    <span>High overhead & markups</span>
                  </div>
                  <div className="flex items-center gap-2 text-rose-400">
                    <XCircle className="w-4 h-4 flex-shrink-0" />
                    <span>Cost: ₹1,50,000 – ₹3,50,000</span>
                  </div>
                  <div className="flex items-center gap-2 text-amber-400">
                    <Info className="w-4 h-4 flex-shrink-0" />
                    <span>Rigid long commercial contracts</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-700/60 text-xs text-slate-500">
                Expensive corporate pricing
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 🦷 7. SECTION 3 REPLICATED: "TEETH ISSUES THAT WE FIX" (CARD GRID & CAROUSEL) */}
      <section id="issues" className="py-16 md:py-24 bg-[#E0F2FE]">
        <div className="container mx-auto px-4">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Teeth issues that we fix
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Custom-engineered clear aligner treatments for all types of smile & bite correction.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-10">
            
            {/* Card 1: Teeth Gap */}
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100 flex flex-col justify-between hover:shadow-2xl transition transform hover:-translate-y-1">
              <div>
                <div className="bg-slate-50 rounded-2xl p-4 mb-5 text-center flex items-center justify-center h-44 overflow-hidden border border-slate-100">
                  <img 
                    src="/images/teeth_gap.jpg" 
                    alt="Teeth Gap Diagram" 
                    className="max-h-36 object-contain rounded-xl"
                  />
                </div>
                <h3 className="text-lg font-black text-slate-900 leading-snug mb-2">
                  Teeth Gap – Fix Before College Photos
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A gap between teeth, primarily a cosmetic concern. Food getting stuck may lead to tooth decay and plaque buildup.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-bold text-teal-600 flex items-center justify-between">
                <span>Avg 5–7 Months</span>
                <span className="text-slate-400">Mild to Moderate</span>
              </div>
            </div>

            {/* Card 2: Crooked Teeth */}
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100 flex flex-col justify-between hover:shadow-2xl transition transform hover:-translate-y-1">
              <div>
                <div className="bg-slate-50 rounded-2xl p-4 mb-5 text-center flex items-center justify-center h-44 overflow-hidden border border-slate-100">
                  <img 
                    src="/images/crooked_teeth.jpg" 
                    alt="Crooked Teeth Diagram" 
                    className="max-h-36 object-contain rounded-xl"
                  />
                </div>
                <h3 className="text-lg font-black text-slate-900 leading-snug mb-2">
                  Crooked Teeth – Straighten for Placements
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Misaligned teeth if not treated in time, can lead to oral issues like gum disease, decay, and unnatural breakage.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-bold text-teal-600 flex items-center justify-between">
                <span>Avg 7–10 Months</span>
                <span className="text-slate-400">Moderate</span>
              </div>
            </div>

            {/* Card 3: Forwardly Placed */}
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100 flex flex-col justify-between hover:shadow-2xl transition transform hover:-translate-y-1">
              <div>
                <div className="bg-slate-50 rounded-2xl p-4 mb-5 text-center flex items-center justify-center h-44 overflow-hidden border border-slate-100">
                  <img 
                    src="/images/forward_teeth.jpg" 
                    alt="Forwardly Placed Teeth Diagram" 
                    className="max-h-36 object-contain rounded-xl"
                  />
                </div>
                <h3 className="text-lg font-black text-slate-900 leading-snug mb-2">
                  Forwardly Placed
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Alignment issue where upper teeth stick out more than lower teeth, this may affect lip posture & alignment of the jaw.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-bold text-teal-600 flex items-center justify-between">
                <span>Avg 8–12 Months</span>
                <span className="text-slate-400">Complex</span>
              </div>
            </div>

            {/* Card 4: Deep Bite */}
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100 flex flex-col justify-between hover:shadow-2xl transition transform hover:-translate-y-1">
              <div>
                <div className="bg-slate-50 rounded-2xl p-4 mb-5 text-center flex items-center justify-center h-44 overflow-hidden border border-slate-100">
                  <img 
                    src="/images/deep_bite.jpg" 
                    alt="Deep Bite Diagram" 
                    className="max-h-36 object-contain rounded-xl"
                  />
                </div>
                <h3 className="text-lg font-black text-slate-900 leading-snug mb-2">
                  Deep Bite
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Aesthetic issues, damage to teeth, gums, jaw headaches, hearing difficulties, and digestion problems from improper chewing.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-bold text-teal-600 flex items-center justify-between">
                <span>Avg 9–14 Months</span>
                <span className="text-slate-400">Complex</span>
              </div>
            </div>

          </div>

          {/* Bottom Action CTA Pill */}
          <div className="text-center">
            <button 
              onClick={triggerKiviHealthBooking}
              className="bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm sm:text-base px-10 py-4 rounded-full shadow-xl shadow-red-600/30 hover:shadow-red-600/50 transition transform hover:scale-105 active:scale-95"
            >
              Fix Your Smile Now
            </button>
          </div>

        </div>
      </section>

      {/* 👩‍⚕️ 8. LEAD SPECIALIST PROFILE: DR. ARCHANA MAL */}
      <section id="doctor" className="py-16 md:py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl overflow-hidden relative">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Doctor Avatar / Badge */}
              <div className="lg:col-span-5 text-center">
                <div className="relative inline-block">
                  <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-gradient-to-tr from-teal-500 to-cyan-400 p-1.5 mx-auto shadow-2xl">
                    <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                      <div className="text-center p-4">
                        <div className="w-16 h-16 bg-teal-500 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-black mb-2">
                          AM
                        </div>
                        <div className="font-extrabold text-sm text-white">Dr. Archana Mal</div>
                        <div className="text-[11px] text-teal-400 font-semibold">B.D.S. , M.D.S.</div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-red-600 text-white text-[10px] font-extrabold px-3 py-1 rounded-full shadow-lg">
                    19+ Yrs Exp
                  </div>
                </div>
              </div>

              {/* Doctor Details */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-500/30 text-teal-300 text-xs font-bold px-3 py-1 rounded-full">
                  <Award className="w-3.5 h-3.5 text-teal-400" />
                  <span>Chief Dental Surgeon & Owner</span>
                </div>

                <h2 className="text-3xl font-black text-white">Dr. Archana Mal</h2>
                <div className="text-xs text-teal-400 font-bold tracking-wide">
                  Reg. No.: A-10804 • M.D.S. Periodontics (Patiala) | B.D.S. (Ludhiana)
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  With over <strong>19 years of clinical practice</strong>, Dr. Archana Mal specializes in advanced clear aligners, periodontics, and family dental care. Her patient-first approach ensures completely transparent explanations, gentle treatments, and zero waiting times at Orchid Sky, Shela.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-700/60 text-xs">
                  <div>
                    <div className="text-slate-400">Clinical Practice Since</div>
                    <div className="font-bold text-white text-sm">2007 (19+ Years)</div>
                  </div>
                  <div>
                    <div className="text-slate-400">Clinic Location</div>
                    <div className="font-bold text-white text-sm">Orchid Sky, Shela</div>
                  </div>
                </div>

                <div className="pt-2">
                  <button onClick={triggerKiviHealthBooking} className="bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs px-6 py-3 rounded-xl shadow-lg transition flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Book Consultation with Dr. Archana</span>
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 💰 9. PRICING & EASY EMI TRANSPARENCY GRID */}
      <section id="pricing" className="py-16 md:py-24 bg-slate-100">
        <div className="container mx-auto px-4">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="bg-emerald-100 text-emerald-800 font-extrabold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              Transparent Costing
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 mb-4">
              Clear Pricing & Easy EMI Options
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              No hidden fees. Flexible 0% interest monthly payment options designed for students and working families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            {/* Package 1 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg flex flex-col justify-between">
              <div>
                <div className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-2">Essential Aligners</div>
                <h3 className="text-xl font-black text-slate-900 mb-1">Mild Correction</h3>
                <div className="text-2xl font-black text-red-600 my-3">
                  ₹45,000 <span className="text-xs text-slate-400 font-normal">/ total</span>
                </div>
                <div className="bg-slate-100 text-slate-700 text-xs font-bold px-3 py-1.5 rounded-xl mb-4">
                  💳 EMI starting at <strong>₹1,499/month</strong>
                </div>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Ideal for mild gaps & minor crowding</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> 3D Digital Scan included</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Treatment length: 4–6 months</li>
                </ul>
              </div>
              <button onClick={triggerKiviHealthBooking} className="mt-6 w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-3 rounded-xl transition">
                Choose Plan
              </button>
            </div>

            {/* Package 2 (POPULAR) */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-red-500 shadow-2xl flex flex-col justify-between relative transform md:-translate-y-2">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-red-600 text-white font-extrabold text-[10px] uppercase tracking-wider px-3.5 py-1 rounded-full shadow">
                Most Popular
              </div>
              <div>
                <div className="text-xs font-extrabold text-red-600 uppercase tracking-wider mb-2">Comprehensive Aligners</div>
                <h3 className="text-xl font-black text-slate-900 mb-1">Full Smile Redesign</h3>
                <div className="text-3xl font-black text-red-600 my-3">
                  ₹75,000 <span className="text-xs text-slate-400 font-normal">/ total</span>
                </div>
                <div className="bg-red-50 text-red-700 text-xs font-bold px-3 py-1.5 rounded-xl mb-4 border border-red-100">
                  ⚡ Student EMI starting at <strong>₹2,499/month</strong>
                </div>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Treats moderate gaps, crowding & bites</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Unlimited Refinement Trays</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Post-treatment retainer set included</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Direct MDS Periodontist checkups</li>
                </ul>
              </div>
              <button onClick={triggerKiviHealthBooking} className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs py-3.5 rounded-xl shadow-lg transition">
                Book Free Consultation
              </button>
            </div>

            {/* Package 3 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg flex flex-col justify-between">
              <div>
                <div className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-2">General Dental Care</div>
                <h3 className="text-xl font-black text-slate-900 mb-1">RCT & Implants</h3>
                <div className="text-2xl font-black text-slate-800 my-3">
                  Custom <span className="text-xs text-slate-400 font-normal">/ per case</span>
                </div>
                <div className="bg-slate-100 text-slate-700 text-xs font-bold px-3 py-1.5 rounded-xl mb-4">
                  🏥 Full clinic warranty on crowns
                </div>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Single-sitting Root Canal Treatment</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Permanent Implants & Dentures</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Painless wisdom tooth extractions</li>
                </ul>
              </div>
              <button onClick={triggerKiviHealthBooking} className="mt-6 w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-3 rounded-xl transition">
                Inquire Rates
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* ❓ 10. FAQ ACCORDION SECTION */}
      <section id="faq" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <div className="text-center mb-12">
            <span className="bg-slate-100 text-slate-700 font-extrabold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: 'How much do clear aligners cost at Floss & Gloss?',
                a: 'Clear aligner plans start at ₹45,000 for mild alignment and up to ₹75,000 for full complex smile correction. Easy 0% interest EMI options are available starting at ₹1,499/month.'
              },
              {
                q: 'Are clear aligners really better than metal braces?',
                a: 'Yes! Clear aligners are nearly invisible, removable while eating and brushing, cause zero cuts or mouth ulcers, and achieve straight teeth in 6 to 8 months compared to 18-24 months for braces.'
              },
              {
                q: 'Who designs and monitors my aligner treatment?',
                a: 'Unlike online DIY aligner companies, your entire treatment plan at Floss & Gloss is personally designed and supervised by Dr. Archana Mal (M.D.S. Periodontist, 19+ years experience) at our Shela clinic.'
              },
              {
                q: 'How often do I need to visit the clinic?',
                a: 'Only once every 6 to 8 weeks for a brief 10-minute checkup and picking up your next set of aligner trays!'
              },
              {
                q: 'Where is Floss & Gloss Dental Clinic located?',
                a: 'We are located at 130-First Floor, Orchid Sky, Shela, Ahmedabad (Gujarat 380058), right near Applewoods and Bopal.'
              }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden transition"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full text-left p-5 bg-slate-50 hover:bg-slate-100 flex items-center justify-between font-bold text-sm text-slate-900"
                >
                  <span>{item.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openFaq === idx ? 'rotate-180 text-red-600' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="p-5 bg-white text-xs sm:text-sm text-slate-600 border-t border-slate-100 leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 📍 11. LOCATION & FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800 text-xs">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            
            <div className="space-y-3">
              <div className="text-xl font-black text-white">FLOSS & GLOSS</div>
              <div className="text-slate-400 text-xs">Premium Dental Treatment in Shela - Applewoods - Bopal - Shilaj</div>
              <div className="text-teal-400 font-bold text-xs">Dr. Archana Mal (B.D.S. , M.D.S.)</div>
            </div>

            <div>
              <div className="font-bold text-white text-sm mb-3">Clinic Timings</div>
              <div className="space-y-1.5">
                <div>Mon – Sat: 10:00 AM – 2:00 PM</div>
                <div>Evening: 5:00 PM – 8:00 PM</div>
                <div className="text-amber-400 font-semibold">Sunday: 10:00 AM – 2:00 PM (Appt Only)</div>
              </div>
            </div>

            <div>
              <div className="font-bold text-white text-sm mb-3">Contact & Address</div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-red-500" /> 130-First Floor, Orchid Sky, Shela, Ahmedabad 380058</div>
                <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-teal-400" /> +91 9104591919</div>
                <div className="flex items-center gap-2"><MessageSquare className="w-4 h-4 text-emerald-400" /> drarchanamal@gmail.com</div>
              </div>
            </div>

            <div>
              <div className="font-bold text-white text-sm mb-3">Instant Booking</div>
              <p className="mb-3 text-slate-400">Zero waiting time with KiviHealth appointment system.</p>
              <button 
                onClick={triggerKiviHealthBooking}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs py-3 rounded-xl shadow transition"
              >
                Book KiviHealth Slot
              </button>
            </div>

          </div>

          <div className="pt-8 border-t border-slate-800 text-center text-[11px] text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>© 2026 Floss & Gloss Dental Clinic. All Rights Reserved.</div>
            <div className="flex gap-4">
              <span>Shela Clinic</span> • <span>Bopal</span> • <span>Shilaj</span> • <span>Applewoods</span>
            </div>
          </div>
        </div>
      </footer>

      {/* 📱 12. STICKY FLOATING MOBILE CTA BAR */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-3 flex items-center gap-3 shadow-2xl">
        <button 
          onClick={triggerWhatsApp}
          className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs py-3 rounded-xl flex items-center justify-center gap-1.5 shadow"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp</span>
        </button>
        <button 
          onClick={triggerKiviHealthBooking}
          className="flex-1 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs py-3 rounded-xl flex items-center justify-center gap-1.5 shadow-lg shadow-red-600/30"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Scan</span>
        </button>
      </div>

      {/* 🤖 13. CHATBOT WIDGET INTEGRATION */}
      <ChatbotWidget onOpenBookingModal={triggerKiviHealthBooking} />

      {/* 🔮 14. AI SMILE PREVIEW MODAL */}
      {isPreviewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 animate-pulse-glow">
            
            <button 
              onClick={() => setIsPreviewOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-lg font-bold"
            >
              ✕
            </button>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto text-xl font-black">
                ✨
              </div>
              <h3 className="text-xl font-black text-slate-900">30-Second AI Smile Assessment</h3>
              <p className="text-xs text-slate-500">Select your primary teeth alignment concern to view projected timeline.</p>
            </div>

            <div className="mt-6 space-y-3">
              {[
                { name: 'Teeth Gap (Diastema)', time: 'Estimated 5–7 months' },
                { name: 'Crooked / Crowded Teeth', time: 'Estimated 7–10 months' },
                { name: 'Forwardly Placed Front Teeth', time: 'Estimated 8–12 months' }
              ].map((opt, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setPreviewData({ concern: opt.name, timeframe: opt.time });
                    setPreviewStep(2);
                  }}
                  className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-red-500 hover:bg-red-50/30 font-bold text-xs text-slate-800 flex items-center justify-between transition"
                >
                  <span>{opt.name}</span>
                  <span className="text-teal-600 font-semibold">{opt.time}</span>
                </button>
              ))}
            </div>

            {previewStep === 2 && (
              <div className="mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2">
                <div className="font-bold text-emerald-900 text-sm">Great Candidate for Floss & Gloss Aligners!</div>
                <div className="text-xs text-emerald-700">Projected Result Time: <strong>{previewData.timeframe}</strong></div>
                <button 
                  onClick={() => {
                    setIsPreviewOpen(false);
                    triggerKiviHealthBooking();
                  }}
                  className="w-full bg-red-600 text-white font-extrabold text-xs py-3 rounded-xl mt-2 shadow"
                >
                  Book In-Clinic Scan Now
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
