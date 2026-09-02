import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Mail, 
  Send, 
  Navigation, 
  CheckCircle2, 
  AlertCircle,
  ShieldCheck,
  Building,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/siteConfig';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumb } from '../components/Breadcrumb';

interface ContactProps {
  onOpenWhatsAppModal: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenWhatsAppModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry / Medicine Stock',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Direct inquiry to WhatsApp with formatted content
    const msg = `Hello ${BUSINESS_CONFIG.name}
Contact Form Message:
Name: ${formData.name}
Phone: ${formData.phone}
${formData.email ? `Email: ${formData.email}\n` : ''}Subject: ${formData.subject}
Message: ${formData.message}`;

    const url = `https://wa.me/${BUSINESS_CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-[#e0d8d0]">
      <SEOHead
        title="Contact Us & Directions | Jivan Joyti Ayurveda Kendra, Masaurhi, Patna"
        description="Visit or contact Jivan Joyti Ayurveda Kendra at Railway Station, Taregna Station Rd, Masaurhi, Patna, Bihar 804452. Phone: +91 7870705208. Open 7 AM - 10:30 PM."
        canonicalPath="/contact"
        breadcrumbs={[
          { name: 'Contact & Store Location', path: '/contact' }
        ]}
      />

      {/* Breadcrumb */}
      <div className="bg-white dark:bg-[#080808] border-b border-slate-200 dark:border-white/5">
        <Breadcrumb items={[{ name: 'Contact Us & Store Location', path: '/contact' }]} />
      </div>

      {/* Hero Header */}
      <section className="relative py-14 sm:py-20 bg-gradient-to-b from-[#050505] via-[#090909] to-[#050505] text-[#e0d8d0] border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-emerald-300 text-xs font-semibold backdrop-blur-md">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>Taregna Station Road, Masaurhi, Patna, Bihar</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-serif-display">
              Get in Touch &amp; Visit Us
            </h1>
            <p className="text-[#a39b92] text-sm sm:text-base leading-relaxed">
              Have questions about an Ayurvedic formulation, doctor prescription, or doorstep delivery? Contact our certified pharmacy team or visit our store in Masaurhi.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Business Details & Action Cards */}
            <div className="space-y-6">
              {/* Address Card */}
              <div className="p-6 rounded-3xl bg-white dark:bg-[#0d0d0d] border border-slate-200 dark:border-white/10 shadow-xs">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-white/5 border dark:border-white/5 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 font-serif-display">
                  Store Location
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-[#a39b92] leading-relaxed">
                  {BUSINESS_CONFIG.address}
                </p>
                <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-2">
                  Landmark: {BUSINESS_CONFIG.landmark}
                </p>
                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/5">
                  <a
                    href={BUSINESS_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Open in Google Maps / Directions</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Working Hours Card */}
              <div className="p-6 rounded-3xl bg-white dark:bg-[#0d0d0d] border border-slate-200 dark:border-white/10 shadow-xs">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-white/5 border dark:border-white/5 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold mb-4">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 font-serif-display">
                  Counter Hours
                </h3>
                <div className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-[#a39b92]">
                  <div className="flex justify-between">
                    <span>Monday – Saturday:</span>
                    <span className="font-semibold text-slate-900 dark:text-white">{BUSINESS_CONFIG.workingHours.weekdays}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-semibold text-slate-900 dark:text-white">{BUSINESS_CONFIG.workingHours.sunday}</span>
                  </div>
                  <div className="pt-2 border-t border-slate-100 dark:border-white/5 text-emerald-600 dark:text-emerald-400 font-bold text-xs">
                    Emergency On-Call: 24/7 Available
                  </div>
                </div>
              </div>

              {/* Direct Buttons */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-950 via-[#0d0d0d] to-slate-900 border border-emerald-500/20 text-white shadow-lg space-y-4">
                <h3 className="text-base font-bold font-serif-display">Fast Direct Actions</h3>
                <div className="space-y-2">
                  <a
                    href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-xl font-bold text-xs shadow-md transition"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Store: {BUSINESS_CONFIG.phone}</span>
                  </a>
                  <button
                    onClick={onOpenWhatsAppModal}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold text-xs border border-white/10 transition"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Prescription / Order</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Center & Right Column: Contact Form & Google Map */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Form */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0d0d0d] border border-slate-200 dark:border-white/10 shadow-xs">
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white font-serif-display">
                    Send Us an Inquiry
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-[#a39b92] mt-1">
                    Fill out the form below to connect directly with our pharmacist on WhatsApp or email.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-6 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 rounded-2xl text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                    <h4 className="font-bold text-base text-slate-900 dark:text-white font-serif-display">Inquiry Sent via WhatsApp!</h4>
                    <p className="text-xs text-slate-600 dark:text-[#a39b92]">
                      Our pharmacist has received your inquiry and will respond promptly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-semibold transition"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-semibold text-slate-700 dark:text-[#e0d8d0] mb-1">
                          Full Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-[#121212] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-[#e0d8d0] placeholder:text-slate-400 dark:placeholder:text-[#6e675f] focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold text-slate-700 dark:text-[#e0d8d0] mb-1">
                          Phone Number <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="10-digit number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-[#121212] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-[#e0d8d0] placeholder:text-slate-400 dark:placeholder:text-[#6e675f] focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-semibold text-slate-700 dark:text-[#e0d8d0] mb-1">
                          Email Address <span className="text-slate-400 dark:text-[#6e675f] font-normal">(Optional)</span>
                        </label>
                        <input
                          type="email"
                          placeholder="name@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-[#121212] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-[#e0d8d0] placeholder:text-slate-400 dark:placeholder:text-[#6e675f] focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold text-slate-700 dark:text-[#e0d8d0] mb-1">
                          Subject / Inquiry Type
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-[#121212] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-[#e0d8d0] focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                        >
                          <option>General Inquiry / Medicine Stock</option>
                          <option>Ayurvedic Medicine Consultation</option>
                          <option>Prescription Delivery in Masaurhi</option>
                          <option>Health Device Demo / Warranty</option>
                          <option>Bulk / Clinic Supply</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 dark:text-[#e0d8d0] mb-1">
                        Message / Required Medicines <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Please mention the medicines you need or write your healthcare question here..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-[#121212] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-[#e0d8d0] placeholder:text-slate-400 dark:placeholder:text-[#6e675f] focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition active:scale-98"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit &amp; Open WhatsApp Chat</span>
                    </button>
                  </form>
                )}
              </div>

              {/* Google Map Section */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0d0d0d] border border-slate-200 dark:border-white/10 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white font-serif-display">
                      Google Maps &amp; Navigation
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-[#a39b92]">
                      Located conveniently on Taregna Station Rd, near Railway Station, Masaurhi
                    </p>
                  </div>
                  <a
                    href={BUSINESS_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 text-xs font-semibold border border-emerald-200 dark:border-emerald-800/50"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="aspect-16/9 sm:aspect-21/9 rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-black">
                  <iframe
                    title="Jivan Joyti Ayurveda Kendra Map Location Taregna Masaurhi"
                    src="https://maps.google.com/maps?q=Taregna%20Railway%20Station%2C%20Masaurhi%2C%20Patna%2C%20Bihar%20804452&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
