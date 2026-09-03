import React, { useState } from 'react';
import { 
  CheckCircle2, XCircle, Star, Phone, MessageSquare, MapPin, Clock, ShieldCheck, 
  Sparkles, Award, ArrowRight, UserCheck, Calendar, Zap, Heart, Check, ChevronDown, 
  Building2, Camera, Stethoscope, ChevronRight, Play, Info, HelpCircle, Lock, Award as MedalIcon
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';
import ChatbotWidget from './components/ChatbotWidget';

// Animation variants (subtle, clean, dignified)
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};

export default function App() {
  // Lead Form State
  const [formData, setFormData] = useState({ name: '', phone: '', treatment: 'Clear Aligners' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(0);

  // AI Smile Preview Modal State
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [previewStep, setPreviewStep] = useState(1);
  const [previewData, setPreviewData] = useState({ concern: 'Gaps', timeframe: '6-8 months' });

  // ⭐️ Patient Review State & Upload Modal
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    treatment: 'Clear Aligners',
    rating: 5,
    comment: '',
    mediaFile: null,
    mediaPreview: '',
    mediaType: 'image'
  });

  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'Pooja Patel',
      treatment: 'Clear Aligners',
      rating: 5,
      comment: 'Got my clear aligners from Dr. Archana Mal! Completed treatment in just 7 months. Super transparent process and zero waiting time at the Shela clinic.',
      date: '2 weeks ago',
      mediaUrl: '/images/review_patient1.jpg',
      mediaType: 'image'
    },
    {
      id: 2,
      name: 'Ankit Sharma',
      treatment: 'Smile Transformation',
      rating: 5,
      comment: 'Very happy with the results! No monthly wire pain like metal braces. EMI was super affordable at ₹1,499/month. Highly recommend Floss & Gloss!',
      date: '1 month ago',
      mediaUrl: '/images/review_patient2.jpg',
      mediaType: 'image'
    },
    {
      id: 3,
      name: 'Riddhi Shah',
      treatment: 'Painless RCT & Crown',
      rating: 5,
      comment: 'Doctor Archana is extremely gentle and experienced. Had my root canal done completely pain-free in a single sitting!',
      date: '1 month ago',
      mediaUrl: '',
      mediaType: 'image'
    }
  ]);

  const handleMediaUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const fileType = file.type.startsWith('video') ? 'video' : 'image';
    const previewUrl = URL.createObjectURL(file);
    setNewReview({
      ...newReview,
      mediaFile: file,
      mediaPreview: previewUrl,
      mediaType: fileType
    });
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) return;
    
    const createdReview = {
      id: Date.now(),
      name: newReview.name,
      treatment: newReview.treatment,
      rating: Number(newReview.rating),
      comment: newReview.comment,
      date: 'Just now',
      mediaUrl: newReview.mediaPreview || '',
      mediaType: newReview.mediaType
    };

    setReviews([createdReview, ...reviews]);
    setIsReviewModalOpen(false);
    setNewReview({
      name: '',
      treatment: 'Clear Aligners',
      rating: 5,
      comment: '',
      mediaFile: null,
      mediaPreview: '',
      mediaType: 'image'
    });
    confetti({ particleCount: 70, spread: 50, origin: { y: 0.7 } });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setFormSubmitted(true);
    confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
  };

  const triggerKiviHealthBooking = () => {
    window.open('https://kivihealth.com/iam/archana.mal.m8w8m9l53l8p/bookslot', '_blank');
  };

  const triggerWhatsApp = () => {
    window.open('https://wa.me/919104591919?text=Hi%20Floss%20%26%20Gloss,%20I%20want%20to%20know%20more%20about%20Clear%20Aligners%20and%20Book%20a%20Consultation.', '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-[#FCFCFD] relative selection:bg-teal-900 selection:text-white">
      
      {/* 🔝 1. TOP DIGNIFIED ANNOUNCEMENT BAR */}
      <div className="bg-[#0F292F] text-teal-100 text-xs md:text-sm py-2.5 px-4 text-center flex items-center justify-center gap-3 border-b border-teal-800/40">
        <span className="bg-amber-600/90 text-white font-extrabold text-[10px] uppercase px-2.5 py-0.5 rounded tracking-wider">
          Clinic Announcement
        </span>
        <span>Specialist Dental Care & Clear Aligners in Shela, Ahmedabad | <strong>0% Interest EMIs</strong></span>
        <button 
          onClick={triggerWhatsApp}
          className="hidden md:inline-flex items-center gap-1.5 underline text-amber-300 font-semibold hover:text-white ml-2 transition"
        >
          <MessageSquare className="w-3.5 h-3.5" /> Direct WhatsApp Consultation
        </button>
      </div>

      {/* 🧭 2. CLASSIC PROFESSIONAL HEADER */}
      <header className="sticky top-0 z-40 bg-white/98 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="container mx-auto px-4 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Brand Crest & Title */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="w-10 h-10 bg-[#0F292F] text-amber-400 rounded-lg flex items-center justify-center font-serif text-xl font-bold shadow-sm border border-amber-500/30">
              F&G
            </div>
            <div>
              <div className="text-lg md:text-xl font-serif font-bold text-slate-900 tracking-tight leading-none">
                FLOSS & GLOSS
              </div>
              <div className="text-[10px] font-bold text-teal-800 tracking-wider uppercase mt-1 whitespace-nowrap">
                Dental Clinic • Shela Ahmedabad
              </div>
            </div>
          </div>

          {/* Navigation Links (Desktop - Single Line, Prominent Readable Size) */}
          <nav className="hidden xl:flex items-center gap-7 text-sm lg:text-base font-bold text-slate-800 whitespace-nowrap">
            <a href="#why-aligners" className="hover:text-teal-800 transition py-1">Aligners</a>
            <a href="#comparison" className="hover:text-teal-800 transition py-1">Vs Braces</a>
            <a href="#issues" className="hover:text-teal-800 transition py-1">Treatments</a>
            <a href="#doctor" className="hover:text-teal-800 transition py-1">Specialist</a>
            <a href="#pricing" className="hover:text-teal-800 transition py-1">Fees & EMI</a>
            <a href="#reviews" className="hover:text-teal-800 transition py-1">Reviews</a>
            <a href="#faq" className="hover:text-teal-800 transition py-1">FAQs</a>
          </nav>

          {/* Header Action Buttons (Single Line, No Wrap) */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <a 
              href="tel:+919104591919" 
              className="hidden sm:flex items-center gap-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 px-3.5 py-2.5 rounded-lg transition border border-slate-300 whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-teal-800" />
              <span>+91 9104591919</span>
            </a>
            <button 
              onClick={triggerKiviHealthBooking}
              className="bg-[#0F292F] hover:bg-teal-950 text-white font-bold text-xs md:text-sm px-5 py-2.5 rounded-lg shadow-sm transition border border-teal-700/50 flex items-center gap-2 whitespace-nowrap"
            >
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>Book Slot</span>
            </button>
          </div>

        </div>
      </header>

      {/* 🌟 3. TRADITIONAL HIGH-END CLINIC HERO SECTION */}
      <section className="relative pt-10 pb-16 md:pt-14 md:pb-20 bg-gradient-to-b from-[#FAF8F5] via-white to-slate-50 border-b border-slate-200/60">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            
            {/* Left Column: Authoritative Medical Headline */}
            <motion.div variants={fadeInUp} className="lg:col-span-7 space-y-6">
              
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2.5 bg-amber-50/80 border border-amber-200/80 rounded-md px-3.5 py-1.5 text-xs font-semibold text-amber-950 shadow-sm">
                <div className="flex text-amber-600">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span><strong>5.0★ Patient Rated</strong> • 81+ Verified Shela Reviews</span>
              </div>

              {/* Serif Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 leading-[1.2] tracking-tight">
                Specialist Clear Aligner Treatment & Advanced Dental Surgery.
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                Directly planned and supervised by <strong>Dr. Archana Mal (M.D.S. Periodontist)</strong> with over 19 years of clinical practice in Ahmedabad. Transparent diagnosis, zero waiting times, and predictable oral health outcomes.
              </p>

              {/* 4 Professional Credential Pill Boxes */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {[
                  { title: '19+ Years Practice', desc: 'M.D.S. Specialist', icon: MedalIcon },
                  { title: 'US FDA Approved', desc: 'Clear Aligners', icon: ShieldCheck },
                  { title: 'Easy EMI Option', desc: 'From ₹1,499/mo', icon: Zap },
                  { title: 'In-Clinic Monitoring', desc: 'No DIY Mail Kits', icon: UserCheck }
                ].map((cred, idx) => {
                  const IconC = cred.icon;
                  return (
                    <div key={idx} className="bg-white border border-slate-200 rounded-lg p-3 shadow-sm">
                      <IconC className="w-4 h-4 text-teal-800 mb-1.5" />
                      <div className="font-bold text-xs text-slate-900 leading-snug">{cred.title}</div>
                      <div className="text-[10px] text-slate-500">{cred.desc}</div>
                    </div>
                  );
                })}
              </div>

              {/* Doctor Credentials & Clinic Visual Showcase */}
              <div className="pt-2 flex flex-wrap items-center gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <img 
                  src="/images/hero_doctor_patient.jpg" 
                  alt="Dr. Archana Mal with patient"
                  className="w-14 h-14 rounded-lg object-cover border border-slate-300 shadow-sm flex-shrink-0"
                />
                <div className="flex-1 min-w-[200px]">
                  <div className="font-bold text-xs text-slate-900">Dr. Archana Mal (B.D.S., M.D.S. Periodontist)</div>
                  <div className="text-[11px] text-slate-500">Reg. No. A-10804 • 130-First Floor, Orchid Sky, Shela</div>
                </div>
                <button 
                  onClick={() => setIsPreviewOpen(true)}
                  className="bg-[#0F292F] hover:bg-slate-900 text-white font-bold text-xs px-4 py-2.5 rounded-md transition shadow flex items-center gap-2"
                >
                  <span>30-Sec Smile Calculator</span>
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
                </button>
              </div>

            </motion.div>

            {/* Right Column: Formal Patient Appointment Form */}
            <motion.div variants={fadeInUp} className="lg:col-span-5">
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-xl border border-slate-200 text-slate-800">
                
                <div className="border-b border-slate-100 pb-4 mb-5">
                  <div className="text-xs font-bold text-teal-800 uppercase tracking-wider mb-1">Clinic Appointment Request</div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">Schedule Consultation</h3>
                  <p className="text-xs text-slate-500 mt-1">Direct consultation slot at Orchid Sky Clinic, Shela.</p>
                </div>

                {formSubmitted ? (
                  <div className="bg-emerald-50/80 border border-emerald-200 rounded-lg p-6 text-center space-y-3">
                    <div className="w-12 h-12 bg-emerald-700 text-white rounded-full flex items-center justify-center mx-auto text-xl shadow">
                      ✓
                    </div>
                    <h4 className="font-bold text-emerald-950 text-lg">Appointment Request Received</h4>
                    <p className="text-xs text-emerald-800 leading-relaxed">
                      Our clinic coordinator will phone you at <strong>{formData.phone}</strong> to confirm your consultation timing with Dr. Archana Mal.
                    </p>
                    <button 
                      onClick={triggerKiviHealthBooking}
                      className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs py-3 rounded transition"
                    >
                      Instant Book via KiviHealth
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Patient Full Name*
                      </label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Ramesh Shah"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-800/20 focus:border-teal-800 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Contact Phone Number*
                      </label>
                      <input 
                        type="tel" 
                        required
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-800/20 focus:border-teal-800 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Primary Dental Interest
                      </label>
                      <select 
                        value={formData.treatment}
                        onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-800/20 focus:border-teal-800 transition bg-white font-medium text-slate-700"
                      >
                        <option value="Clear Aligners">Floss & Gloss Clear Aligners (₹1,499/mo EMI)</option>
                        <option value="Braces">Orthodontic Braces</option>
                        <option value="Root Canal">Root Canal Therapy (RCT)</option>
                        <option value="Implants">Dental Implants & Prosthetics</option>
                        <option value="General Checkup">Routine Oral Examination</option>
                      </select>
                    </div>

                    <div className="flex items-start gap-2 pt-1">
                      <input type="checkbox" defaultChecked id="whatsapp-opt" className="mt-1 accent-teal-800 w-4 h-4 rounded" />
                      <label htmlFor="whatsapp-opt" className="text-[11px] text-slate-600 leading-tight">
                        Receive appointment confirmation & clinic directions on WhatsApp.
                      </label>
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-[#0F292F] hover:bg-teal-950 text-white font-bold text-sm py-3.5 rounded shadow transition flex items-center justify-center gap-2 border border-teal-800/50"
                    >
                      <span>Request Clinic Appointment</span>
                      <ArrowRight className="w-4 h-4 text-amber-400" />
                    </button>

                    <div className="text-center text-[11px] text-slate-400 font-medium pt-1">
                      🔒 Official Shela Dental Surgery Center • Confidential
                    </div>
                  </form>
                )}

              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* 🛡️ 4. STERILIZATION & SURGICAL STANDARDS BANNER */}
      <section className="bg-[#0F292F] text-white py-10 border-y border-teal-800/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            
            <div className="flex items-center gap-4 bg-teal-950/60 p-4 rounded-lg border border-teal-800/50">
              <div className="w-12 h-12 bg-teal-800/40 text-amber-400 rounded-lg flex items-center justify-center flex-shrink-0 border border-teal-700/50">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">Class-B Autoclave Sterilization</h4>
                <p className="text-xs text-teal-200/80">Strict hospital-grade infection control protocol.</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-teal-950/60 p-4 rounded-lg border border-teal-800/50">
              <div className="w-12 h-12 bg-teal-800/40 text-cyan-300 rounded-lg flex items-center justify-center flex-shrink-0 border border-teal-700/50">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">UV Germicidal Disinfection</h4>
                <p className="text-xs text-teal-200/80">Ultraviolet tool storage prior to every procedure.</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-teal-950/60 p-4 rounded-lg border border-teal-800/50">
              <div className="w-12 h-12 bg-teal-800/40 text-emerald-400 rounded-lg flex items-center justify-center flex-shrink-0 border border-teal-700/50">
                <Stethoscope className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">Digital Low-Radiation X-Rays</h4>
                <p className="text-xs text-teal-200/80">Instant diagnostic precision with minimal exposure.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 📊 5. COMPARISON MATRIX: FLOSS & GLOSS VS METAL BRACES */}
      <section id="comparison" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-xs font-bold text-teal-800 uppercase tracking-widest mb-2">Clinical Comparison</div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
              Clear Aligners vs Metal Braces
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Modern clear aligner technology compared with traditional wire brackets.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-xl border border-slate-200 shadow-md bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#0F292F] text-white">
                    <th className="p-4 sm:p-5 text-xs font-bold uppercase tracking-wider w-1/2">Treatment Feature</th>
                    <th className="p-4 sm:p-5 text-xs font-bold uppercase tracking-wider text-center bg-teal-900 text-amber-300 w-1/4">
                      Floss & Gloss Aligners
                    </th>
                    <th className="p-4 sm:p-5 text-xs font-bold uppercase tracking-wider text-center text-slate-300 w-1/4">
                      Metal Braces
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm font-medium">
                  {[
                    { feature: 'Discreet Appearance (Virtually Invisible)', aligner: true, braces: false },
                    { feature: 'Removable During Meals & Oral Hygiene', aligner: true, braces: false },
                    { feature: 'Typical Treatment Timeline (6–12 Months)', aligner: true, braces: false },
                    { feature: 'Smooth Polyurethane (No Wire Ulcers)', aligner: true, braces: false },
                    { feature: 'Dietary Freedom (No Hard Food Restrictions)', aligner: true, braces: false },
                    { feature: 'Direct M.D.S. Specialist Supervision', aligner: true, braces: 'varies' },
                    { feature: 'Predictable Digital Treatment Planning', aligner: true, braces: false }
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-slate-50/60' : 'bg-white'}>
                      <td className="p-4 font-semibold text-slate-800">{row.feature}</td>
                      <td className="p-4 text-center bg-teal-50/50 text-emerald-700 font-bold">
                        {row.aligner === true && <CheckCircle2 className="w-5 h-5 mx-auto text-emerald-700" />}
                      </td>
                      <td className="p-4 text-center text-slate-400">
                        {row.braces === false && <XCircle className="w-5 h-5 mx-auto text-slate-400" />}
                        {row.braces === 'varies' && <span className="text-xs text-amber-700 font-bold">Varies</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* ⚖️ 6. VALUE & SAFETY COMPARISON: CLINIC VS DIY MAIL KITS */}
      <section className="py-16 md:py-20 bg-[#0F292F] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-2">Patient Safety Guide</div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Specialist Clinic vs Mail-Order DIY Aligners
            </h2>
            <p className="text-teal-100/80 text-sm sm:text-base mt-2">
              Why in-person orthodontic evaluation by an M.D.S. Periodontist matters for your long-term bone & tooth safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            
            {/* Card 1 */}
            <div className="bg-teal-950/80 border border-teal-800/80 rounded-xl p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase text-slate-400 mb-1">DIY Mail-Order Kits</div>
                <h3 className="text-xl font-bold text-white mb-4">Unmonitored Home Trays</h3>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2 text-rose-300">
                    <XCircle className="w-4 h-4 flex-shrink-0" />
                    <span>No in-clinic dentist physical inspection</span>
                  </li>
                  <li className="flex items-center gap-2 text-rose-300">
                    <XCircle className="w-4 h-4 flex-shrink-0" />
                    <span>Self-taken putty impression error risk</span>
                  </li>
                  <li className="flex items-center gap-2 text-rose-300">
                    <XCircle className="w-4 h-4 flex-shrink-0" />
                    <span>No pre-treatment X-ray bone check</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-teal-800/60 text-xs text-amber-300 font-semibold">
                ⚠️ Relapse & gum damage risk
              </div>
            </div>

            {/* Card 2 (FEATURED) */}
            <div className="bg-gradient-to-b from-teal-900 to-slate-900 border-2 border-amber-400 rounded-xl p-6 flex flex-col justify-between shadow-xl relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-950 font-extrabold text-[10px] uppercase tracking-wider px-3.5 py-0.5 rounded shadow">
                Professional Gold Standard
              </div>
              <div>
                <div className="text-xs font-bold uppercase text-amber-300 mb-1">Floss & Gloss Dental Clinic</div>
                <h3 className="text-xl font-serif font-bold text-white mb-2">Specialist-Led Care</h3>
                <p className="text-xs text-teal-200 mb-4">By Dr. Archana Mal (M.D.S. Periodontist)</p>
                <ul className="space-y-2.5 text-xs text-white">
                  <li className="flex items-center gap-2 text-emerald-300 font-medium">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>Complete In-Clinic Digital 3D Scanning</span>
                  </li>
                  <li className="flex items-center gap-2 text-emerald-300 font-medium">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>US FDA Approved Biocompatible Material</span>
                  </li>
                  <li className="flex items-center gap-2 text-emerald-300 font-medium">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>Periodic M.D.S. Progress Monitoring</span>
                  </li>
                  <li className="flex items-center gap-2 font-bold bg-teal-950/80 p-2.5 rounded border border-teal-700/50 mt-2">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-amber-400" />
                    <span className="text-white">Fees: ₹45,000 – ₹75,000 (EMI ₹1,499/mo)</span>
                  </li>
                </ul>
              </div>
              <button 
                onClick={triggerKiviHealthBooking}
                className="mt-6 w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs py-3 rounded shadow transition"
              >
                Schedule Specialist Scan
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-teal-950/80 border border-teal-800/80 rounded-xl p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase text-slate-400 mb-1">Commercial Corporate Chains</div>
                <h3 className="text-xl font-bold text-white mb-4">Multi-Branch Chains</h3>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2 text-amber-300">
                    <Info className="w-4 h-4 flex-shrink-0" />
                    <span>Frequent doctor rotation & changes</span>
                  </li>
                  <li className="flex items-center gap-2 text-amber-300">
                    <Info className="w-4 h-4 flex-shrink-0" />
                    <span>High commercial overhead costs</span>
                  </li>
                  <li className="flex items-center gap-2 text-rose-300">
                    <XCircle className="w-4 h-4 flex-shrink-0" />
                    <span>Fees: ₹1,50,000 – ₹3,00,000</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-teal-800/60 text-xs text-slate-400">
                High corporate markup
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 🦷 7. DENTAL CONDITIONS TREATED */}
      <section id="issues" className="py-16 md:py-20 bg-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-xs font-bold text-teal-800 uppercase tracking-widest mb-2">Orthodontic Indications</div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
              Dental Conditions Treated
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Custom clear aligners engineered for precise anatomical tooth movement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            
            {/* Condition 1 */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="bg-slate-50 rounded-lg p-3 mb-4 flex items-center justify-center h-40 border border-slate-100">
                  <img src="/images/teeth_gap.jpg" alt="Teeth Gap" className="max-h-32 object-contain" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">Teeth Spacing (Gaps)</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Interdental spacing concerns. Closing gaps prevents plaque retention and improves smile aesthetics.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] font-bold text-teal-800">
                Est. Duration: 5–7 Months
              </div>
            </div>

            {/* Condition 2 */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="bg-slate-50 rounded-lg p-3 mb-4 flex items-center justify-center h-40 border border-slate-100">
                  <img src="/images/crooked_teeth.jpg" alt="Crooked Teeth" className="max-h-32 object-contain" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">Dental Crowding</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Overlapping teeth alignment. Correcting crowding improves cleanability and prevents early decay.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] font-bold text-teal-800">
                Est. Duration: 7–10 Months
              </div>
            </div>

            {/* Condition 3 */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="bg-slate-50 rounded-lg p-3 mb-4 flex items-center justify-center h-40 border border-slate-100">
                  <img src="/images/forward_teeth.jpg" alt="Forward Teeth" className="max-h-32 object-contain" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">Maxillary Protrusion</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Forwardly placed upper teeth. Aligner therapy helps re-establish harmonious lip profile & bite.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] font-bold text-teal-800">
                Est. Duration: 8–12 Months
              </div>
            </div>

            {/* Condition 4 */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="bg-slate-50 rounded-lg p-3 mb-4 flex items-center justify-center h-40 border border-slate-100">
                  <img src="/images/deep_bite.jpg" alt="Deep Bite" className="max-h-32 object-contain" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">Deep Bite Overbite</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Upper front teeth excessively cover lower teeth. Correcting deep bite protects enamel wear & TMJ joint.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] font-bold text-teal-800">
                Est. Duration: 9–14 Months
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 👩‍⚕️ 8. LEAD SURGEON & CLINICAL LEAD: DR. ARCHANA MAL */}
      <section id="doctor" className="py-16 md:py-20 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto bg-[#0F292F] rounded-xl p-8 sm:p-10 text-white shadow-xl border border-teal-800/60">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Doctor Avatar */}
              <div className="lg:col-span-5 text-center">
                <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-teal-800 p-1.5 mx-auto border-2 border-amber-400 shadow-lg">
                  <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                    <div className="text-center p-4">
                      <div className="w-16 h-16 bg-teal-700 text-amber-400 rounded-full flex items-center justify-center mx-auto text-xl font-serif font-bold mb-1">
                        AM
                      </div>
                      <div className="font-bold text-sm text-white">Dr. Archana Mal</div>
                      <div className="text-[10px] text-teal-300">B.D.S. , M.D.S.</div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 inline-block bg-amber-500 text-slate-950 text-[10px] font-extrabold px-3 py-1 rounded uppercase tracking-wider">
                  19+ Years Clinical Practice
                </div>
              </div>

              {/* Doctor Credentials */}
              <div className="lg:col-span-7 space-y-3.5">
                <div className="text-xs text-amber-400 font-bold tracking-widest uppercase">Lead Dental Surgeon & Specialist</div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">Dr. Archana Mal</h2>
                <div className="text-xs text-teal-200 font-medium">
                  Reg. No. A-10804 • M.D.S. Periodontics (Patiala) | B.D.S. (Ludhiana)
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Dr. Archana Mal brings over 19 years of dedicated clinical expertise in periodontics, restorative dentistry, and clear aligner orthodontics. At Floss & Gloss Dental Clinic, Shela, every patient treatment plan is formulated with rigorous clinical evaluation and personal doctor attention.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-2 border-t border-teal-800/60 text-xs">
                  <div>
                    <div className="text-teal-300/80">Clinical Practice Since</div>
                    <div className="font-bold text-white">Year 2007 (19+ Yrs)</div>
                  </div>
                  <div>
                    <div className="text-teal-300/80">Clinic Center</div>
                    <div className="font-bold text-white">Orchid Sky, Shela</div>
                  </div>
                </div>

                <button 
                  onClick={triggerKiviHealthBooking}
                  className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs px-6 py-3 rounded shadow transition flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment with Dr. Archana</span>
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 💰 9. TRANSPARENT FEE STRUCTURE */}
      <section id="pricing" className="py-16 md:py-20 bg-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-xs font-bold text-teal-800 uppercase tracking-widest mb-2">Transparent Treatment Fees</div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
              Clear Fee Schedule & Payment Plans
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Straightforward pricing without unexpected additions. Easy 0% interest monthly instalment options available.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            
            {/* Plan 1 */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Mild Alignment</div>
                <h3 className="text-lg font-serif font-bold text-slate-900 mb-2">Essential Aligners</h3>
                <div className="text-2xl font-bold text-slate-900 my-2">
                  ₹45,000 <span className="text-xs text-slate-500 font-normal">/ complete case</span>
                </div>
                <div className="bg-slate-100 text-slate-700 text-xs font-bold px-3 py-1.5 rounded mb-4">
                  💳 EMI Option: <strong>₹1,499/month</strong>
                </div>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-700" /> Minor gap closure & minor crowding</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-700" /> Digital 3D treatment plan</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-700" /> Est. length: 4–6 months</li>
                </ul>
              </div>
              <button onClick={triggerKiviHealthBooking} className="mt-6 w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-3 rounded transition">
                Book Consultation
              </button>
            </div>

            {/* Plan 2 (POPULAR) */}
            <div className="bg-white rounded-xl p-6 border-2 border-teal-800 shadow-lg flex flex-col justify-between relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0F292F] text-amber-400 font-bold text-[10px] uppercase tracking-wider px-3.5 py-0.5 rounded shadow">
                Most Selected Plan
              </div>
              <div>
                <div className="text-xs font-bold text-teal-800 uppercase tracking-wider mb-1">Full Smile Realignment</div>
                <h3 className="text-lg font-serif font-bold text-slate-900 mb-2">Comprehensive Aligners</h3>
                <div className="text-3xl font-bold text-teal-900 my-2">
                  ₹75,000 <span className="text-xs text-slate-500 font-normal">/ complete case</span>
                </div>
                <div className="bg-teal-50 text-teal-900 text-xs font-bold px-3 py-1.5 rounded mb-4 border border-teal-200">
                  ⚡ Easy EMI Option: <strong>₹2,499/month</strong>
                </div>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-700" /> Moderate to complex spacing & bite issues</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-700" /> Refinement aligners included</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-700" /> Post-treatment retainer set</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-700" /> Periodic M.D.S. specialist monitoring</li>
                </ul>
              </div>
              <button onClick={triggerKiviHealthBooking} className="mt-6 w-full bg-[#0F292F] hover:bg-teal-950 text-white font-bold text-xs py-3 rounded shadow transition">
                Schedule Aligner Scan
              </button>
            </div>

            {/* Plan 3 */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">General & Restorative</div>
                <h3 className="text-lg font-serif font-bold text-slate-900 mb-2">RCT & Implants</h3>
                <div className="text-xl font-bold text-slate-900 my-2">
                  Standard Case Rates
                </div>
                <div className="bg-slate-100 text-slate-700 text-xs font-bold px-3 py-1.5 rounded mb-4">
                  🏥 Full clinic warranty on prosthetics
                </div>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-700" /> Single-sitting painless Root Canal Therapy</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-700" /> Dental Implants & Zirconia Crowns</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-700" /> Periodontal (Gum) Surgeries</li>
                </ul>
              </div>
              <button onClick={triggerKiviHealthBooking} className="mt-6 w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-3 rounded transition">
                Inquire Procedure Fees
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* ⭐ 9.5 PATIENT REVIEWS & MEDIA UPLOAD SECTION */}
      <section id="reviews" className="py-16 md:py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-xs font-bold text-teal-800 uppercase tracking-widest mb-1.5">Real Patient Experiences</div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
                Verified Patient Reviews & Media
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Read authentic transformations and share your own treatment story with photos or videos.
              </p>
            </div>

            <button 
              onClick={() => setIsReviewModalOpen(true)}
              className="bg-[#0F292F] hover:bg-slate-900 text-white font-bold text-xs px-6 py-3 rounded-lg shadow transition flex items-center gap-2 whitespace-nowrap self-start md:self-auto"
            >
              <Camera className="w-4 h-4 text-amber-400" />
              <span>Submit Your Review (Photo/Video)</span>
            </button>
          </div>

          {/* Patient Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((rev) => (
              <div key={rev.id} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition">
                <div>
                  
                  {/* Rating Stars & Date */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex text-amber-500">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] text-slate-400 font-medium">{rev.date}</span>
                  </div>

                  {/* Media Content (Image or Video) */}
                  {rev.mediaUrl && (
                    <div className="mb-4 rounded-lg overflow-hidden border border-slate-200 bg-slate-100 max-h-48 relative">
                      {rev.mediaType === 'video' ? (
                        <video controls src={rev.mediaUrl} className="w-full h-44 object-cover" />
                      ) : (
                        <img src={rev.mediaUrl} alt="Patient review transformation" className="w-full h-44 object-cover" />
                      )}
                    </div>
                  )}

                  {/* Review Text */}
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal italic">
                    "{rev.comment}"
                  </p>
                </div>

                {/* Patient Info Footer */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-xs text-slate-900">{rev.name}</div>
                    <div className="text-[10px] text-teal-800 font-semibold">{rev.treatment} • Shela</div>
                  </div>
                  <span className="bg-emerald-50 text-emerald-800 text-[9px] font-extrabold px-2 py-0.5 rounded border border-emerald-200">
                    Verified Patient
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      <section id="faq" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <div className="text-center mb-12">
            <div className="text-xs font-bold text-teal-800 uppercase tracking-widest mb-2">Information Center</div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
              Patient Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: 'What is the fee for clear aligners at Floss & Gloss Dental Clinic?',
                a: 'Clear aligner treatment fees range from ₹45,000 for mild spacing/crowding cases up to ₹75,000 for complex full-smile corrections. Flexible 0% interest monthly instalment (EMI) plans start at ₹1,499/month.'
              },
              {
                q: 'Who designs and monitors my aligner treatment plan?',
                a: 'Your treatment plan is formulated, scanned, and periodically evaluated in-person by Dr. Archana Mal (B.D.S., M.D.S. Periodontist) with over 19 years of clinical practice. We do not use unmonitored home-impression kits.'
              },
              {
                q: 'Are clear aligners suitable for all orthodontic conditions?',
                a: 'Clear aligners are highly effective for teeth gaps, dental crowding, overbites, and forwardly placed teeth. During your initial clinical visit, Dr. Archana will evaluate your dental X-rays to confirm suitability.'
              },
              {
                q: 'How many clinic visits are required during aligner therapy?',
                a: 'After your initial 3D digital scan and tray delivery, routine in-clinic progress checks are scheduled once every 6 to 8 weeks.'
              },
              {
                q: 'Where is the clinic situated in Shela, Ahmedabad?',
                a: 'Floss & Gloss Dental Clinic is located at 130-First Floor, Orchid Sky, Shela, Ahmedabad (Gujarat 380058), serving patients across Shela, Bopal, Shilaj, and Applewoods.'
              }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="border border-slate-200 rounded-lg overflow-hidden transition"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full text-left p-4 sm:p-5 bg-slate-50 hover:bg-slate-100 flex items-center justify-between font-bold text-sm text-slate-900"
                >
                  <span>{item.q}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${openFaq === idx ? 'rotate-180 text-teal-800' : ''}`} />
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

      {/* 📍 11. CLINIC LOCATION & FORMAL FOOTER */}
      <footer className="bg-[#0A1D22] text-slate-300 py-14 border-t border-teal-900/60 text-xs">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            
            <div className="space-y-3">
              <div className="text-xl font-serif font-bold text-white">FLOSS & GLOSS DENTAL CLINIC</div>
              <div className="text-slate-400 text-xs">Speciality Dental Care Center • Shela, Ahmedabad</div>
              <div className="text-amber-400 font-bold text-xs">Dr. Archana Mal (B.D.S. , M.D.S. Periodontist)</div>
            </div>

            <div>
              <div className="font-bold text-white text-sm mb-3">Clinic Operating Hours</div>
              <div className="space-y-1 text-slate-400">
                <div>Monday – Saturday: 10:00 AM – 2:00 PM</div>
                <div>Evening Hours: 5:00 PM – 8:00 PM</div>
                <div className="text-amber-400 font-semibold pt-1">Sunday: 10:00 AM – 2:00 PM (Prior Appointment)</div>
              </div>
            </div>

            <div>
              <div className="font-bold text-white text-sm mb-3">Location & Direct Phone</div>
              <div className="space-y-1.5 text-slate-400">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>130-First Floor, Orchid Sky, Shela, Ahmedabad, Gujarat 380058</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span>+91 9104591919</span>
                </div>
              </div>
            </div>

            <div>
              <div className="font-bold text-white text-sm mb-3">Appointment Booking</div>
              <p className="mb-3 text-slate-400">Direct slot scheduling via official KiviHealth portal.</p>
              <button 
                onClick={triggerKiviHealthBooking}
                className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs py-3 rounded transition"
              >
                Book Consultation Slot
              </button>
            </div>

          </div>

          <div className="pt-8 border-t border-teal-900/60 text-center text-[11px] text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>© 2026 Floss & Gloss Dental Clinic. All Rights Reserved. Reg. No. A-10804</div>
            <div className="flex gap-4 text-slate-400">
              <span>Shela</span> • <span>Bopal</span> • <span>Shilaj</span> • <span>Applewoods</span>
            </div>
          </div>
        </div>
      </footer>

      {/* 📱 12. STICKY MOBILE APPOINTMENT BAR */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 p-3 flex items-center gap-3 shadow-xl">
        <button 
          onClick={triggerWhatsApp}
          className="flex-1 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs py-3 rounded flex items-center justify-center gap-1.5"
        >
          <MessageSquare className="w-4 h-4 text-amber-300" />
          <span>WhatsApp Clinic</span>
        </button>
        <button 
          onClick={triggerKiviHealthBooking}
          className="flex-1 bg-[#0F292F] hover:bg-slate-900 text-white font-bold text-xs py-3 rounded flex items-center justify-center gap-1.5 shadow"
        >
          <Calendar className="w-4 h-4 text-amber-400" />
          <span>Book Appointment</span>
        </button>
      </div>

      {/* 🤖 13. PROFESSIONAL DENTAL ASSISTANT CHATBOT */}
      <ChatbotWidget onOpenBookingModal={triggerKiviHealthBooking} />

      {/* 🔮 14. SMILE TIMELINE ASSESSMENT MODAL */}
      {isPreviewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-xs p-4">
          <div className="bg-white rounded-xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200">
            
            <button 
              onClick={() => setIsPreviewOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-lg font-bold"
            >
              ✕
            </button>

            <div className="text-center space-y-2">
              <div className="text-xs font-bold text-teal-800 uppercase tracking-wider">Orthodontic Calculator</div>
              <h3 className="text-xl font-serif font-bold text-slate-900">30-Second Aligner Timeline Assessment</h3>
              <p className="text-xs text-slate-500">Select your alignment concern to estimate clinical duration.</p>
            </div>

            <div className="mt-6 space-y-2.5">
              {[
                { name: 'Interdental Teeth Gaps', time: 'Est. 5–7 months' },
                { name: 'Teeth Crowding & Overlap', time: 'Est. 7–10 months' },
                { name: 'Forwardly Placed Upper Teeth', time: 'Est. 8–12 months' }
              ].map((opt, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setPreviewData({ concern: opt.name, timeframe: opt.time });
                    setPreviewStep(2);
                  }}
                  className="w-full text-left p-3.5 rounded border border-slate-200 hover:border-teal-800 hover:bg-slate-50 font-bold text-xs text-slate-800 flex items-center justify-between transition"
                >
                  <span>{opt.name}</span>
                  <span className="text-teal-800 font-semibold">{opt.time}</span>
                </button>
              ))}
            </div>

            {previewStep === 2 && (
              <div className="mt-6 p-4 bg-teal-50 border border-teal-200 rounded text-center space-y-2">
                <div className="font-bold text-teal-950 text-sm">Suitable for Clear Aligner Therapy</div>
                <div className="text-xs text-teal-800">Projected Aligner Timeframe: <strong>{previewData.timeframe}</strong></div>
                <button 
                  onClick={() => {
                    setIsPreviewOpen(false);
                    triggerKiviHealthBooking();
                  }}
                  className="w-full bg-[#0F292F] text-white font-bold text-xs py-3 rounded mt-2 shadow"
                >
                  Schedule Clinical 3D Scan
                </button>
              </div>
            )}

          </div>
        </div>
      )}

      {/* 📸 15. PATIENT REVIEW UPLOAD MODAL */}
      {isReviewModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 backdrop-blur-xs p-4">
          <div className="bg-white rounded-xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200">
            
            <button 
              onClick={() => setIsReviewModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-lg font-bold"
            >
              ✕
            </button>

            <div className="border-b border-slate-100 pb-3 mb-4">
              <div className="text-xs font-bold text-teal-800 uppercase tracking-wider">Patient Voice</div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Submit Your Patient Review</h3>
              <p className="text-xs text-slate-500 mt-0.5">Upload your treatment experience with photos or video clips.</p>
            </div>

            <form onSubmit={handleReviewSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Your Full Name*
                </label>
                <input 
                  type="text"
                  required
                  placeholder="e.g. Priyank Shah"
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded border border-slate-300 focus:outline-none focus:border-teal-800"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Treatment Received
                  </label>
                  <select 
                    value={newReview.treatment}
                    onChange={(e) => setNewReview({ ...newReview, treatment: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded border border-slate-300 bg-white"
                  >
                    <option value="Clear Aligners">Clear Aligners</option>
                    <option value="Braces">Orthodontic Braces</option>
                    <option value="Root Canal">Root Canal Therapy</option>
                    <option value="Implants">Dental Implants</option>
                    <option value="General Consultation">General Dentistry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Rating (Stars)
                  </label>
                  <select 
                    value={newReview.rating}
                    onChange={(e) => setNewReview({ ...newReview, rating: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded border border-slate-300 bg-white font-bold text-amber-600"
                  >
                    <option value={5}>★★★★★ (5 Stars)</option>
                    <option value={4}>★★★★☆ (4 Stars)</option>
                    <option value={3}>★★★☆☆ (3 Stars)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Your Review / Treatment Experience*
                </label>
                <textarea 
                  required
                  rows={3}
                  placeholder="Share your experience with Dr. Archana Mal, treatment results, or clinic care..."
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded border border-slate-300 focus:outline-none focus:border-teal-800"
                />
              </div>

              {/* Image / Video Upload Field */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Attach Photo or Video (Optional)
                </label>
                <div className="border-2 border-dashed border-slate-300 hover:border-teal-800 rounded-lg p-3 text-center bg-slate-50 transition cursor-pointer relative">
                  <input 
                    type="file"
                    accept="image/*,video/*"
                    onChange={handleMediaUpload}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                  <Camera className="w-5 h-5 text-slate-400 mx-auto mb-1" />
                  <span className="text-xs font-bold text-slate-600">
                    {newReview.mediaFile ? newReview.mediaFile.name : 'Click or Drag Photo / Video Here'}
                  </span>
                  <p className="text-[10px] text-slate-400 mt-0.5">Supports JPG, PNG, MP4 (Max 25MB)</p>
                </div>

                {/* Media Preview Box */}
                {newReview.mediaPreview && (
                  <div className="mt-3 rounded border border-slate-200 overflow-hidden bg-slate-100 max-h-36 flex items-center justify-center">
                    {newReview.mediaType === 'video' ? (
                      <video src={newReview.mediaPreview} controls className="max-h-36 object-contain" />
                    ) : (
                      <img src={newReview.mediaPreview} alt="Preview" className="max-h-36 object-contain" />
                    )}
                  </div>
                )}
              </div>

              <button 
                type="submit"
                className="w-full bg-[#0F292F] hover:bg-slate-900 text-white font-bold text-xs py-3 rounded shadow transition"
              >
                Post Verified Review
              </button>
            </form>

          </div>
        </div>
      )}

    </div>
  );
}
