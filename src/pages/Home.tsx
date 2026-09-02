import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  ChevronRight, 
  ShieldCheck, 
  Sparkles, 
  Leaf, 
  Pill, 
  Activity, 
  HeartHandshake, 
  Stethoscope, 
  Star, 
  ArrowRight,
  Send, 
  Clock, 
  CheckCircle2, 
  AlertCircle
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/siteConfig';
import { SERVICES_DATA } from '../data/servicesData';
import { WHY_CHOOSE_US, TESTIMONIALS_DATA, FAQS_DATA, HEALTH_TIPS_DATA } from '../data/faqReviewsData';
import medicineData from '../data/medicineStock.json';
import { MedicineItem } from '../types';
import { SEOHead } from '../components/SEOHead';
import { MedicineStockChecker } from '../components/MedicineStockChecker';

interface HomeProps {
  onOpenWhatsAppModal: (medicineName?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenWhatsAppModal }) => {
  // Previews only
  const featuredServices = SERVICES_DATA.slice(0, 6);
  const featuredProducts = (medicineData as MedicineItem[]).slice(0, 4);
  const reviewsPreview = TESTIMONIALS_DATA.slice(0, 3);
  const faqPreview = FAQS_DATA.slice(0, 4);
  const tipsPreview = HEALTH_TIPS_DATA.slice(0, 2);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Leaf': return <Leaf className="w-6 h-6 text-emerald-600" />;
      case 'Pill': return <Pill className="w-6 h-6 text-emerald-600" />;
      case 'Activity': return <Activity className="w-6 h-6 text-emerald-600" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6 text-emerald-600" />;
      case 'Stethoscope': return <Stethoscope className="w-6 h-6 text-emerald-600" />;
      default: return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Jivan Joyti Ayurveda Kendra | Pharmacy & Ayurvedic Healthcare Masaurhi"
        description="Providing genuine medicines, healthcare products, surgical supplies, baby care, personal care and daily medical essentials at affordable prices in Masaurhi, Patna."
        canonicalPath="/"
        faqs={faqPreview}
      />

      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#050505] via-[#090909] to-[#050505] text-[#e0d8d0] py-16 sm:py-24 lg:py-32 border-b border-white/5">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1920&q=80"
            alt="Healthcare and Pharmacy in Masaurhi"
            className="w-full h-full object-cover object-center opacity-15 filter brightness-50 scale-105 transform"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-emerald-300 text-xs font-semibold backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Taregna Station Rd, Masaurhi, Patna</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-serif-display">
              Your Trusted Medical Store for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-emerald-400">Genuine Medicines</span> & Ayurveda
            </h1>

            {/* Description (Exact text required by prompt) */}
            <p className="text-base sm:text-lg text-[#a39b92] leading-relaxed font-normal">
              Providing genuine medicines, healthcare products, surgical supplies, baby care, personal care and daily medical essentials at affordable prices.
            </p>

            {/* Required 3 Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              {/* Call Now */}
              <a
                href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-950 transition-all duration-200 active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>

              {/* WhatsApp Order */}
              <button
                onClick={() => onOpenWhatsAppModal()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-950 transition-all duration-200 active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Order</span>
              </button>

              {/* Get Directions */}
              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/10 font-semibold text-sm backdrop-blur-md transition-all duration-200 active:scale-95"
              >
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Micro Highlights */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-white/10 text-xs text-[#a39b92]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Genuine Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>7:00 AM – 10:30 PM Open</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Licensed Pharmacists</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SEARCH & STOCK CHECKER PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <MedicineStockChecker onOrderClick={(med) => onOpenWhatsAppModal(med)} />
      </section>

      {/* 2. SHORT ABOUT PREVIEW */}
      <section className="py-16 sm:py-24 bg-slate-50 dark:bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 dark:border dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <Leaf className="w-3.5 h-3.5" />
                About Jivan Joyti Kendra
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-serif-display">
                A Decade of Healing & Healthcare in Masaurhi
              </h2>
              <p className="text-slate-600 dark:text-[#a39b92] text-sm sm:text-base leading-relaxed">
                Founded with a mission to deliver pure Ayurvedic Rasayanas alongside critical modern allopathic medicines, Jivan Joyti Ayurveda Kendra has grown into Masaurhi&apos;s most dependable healthcare destination. Situated conveniently near Taregna Railway Station, we bridge time-tested holistic Ayurveda with modern pharmaceutical standards.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-white dark:bg-[#0d0d0d] rounded-2xl border border-slate-200 dark:border-white/10 shadow-xs">
                  <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400">14+</div>
                  <div className="text-xs font-semibold text-slate-700 dark:text-white mt-1">Years of Trust</div>
                  <div className="text-[11px] text-slate-500 dark:text-[#a39b92]">Serving Masaurhi & Taregna</div>
                </div>
                <div className="p-4 bg-white dark:bg-[#0d0d0d] rounded-2xl border border-slate-200 dark:border-white/10 shadow-xs">
                  <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400">3,500+</div>
                  <div className="text-xs font-semibold text-slate-700 dark:text-white mt-1">Medicines in Stock</div>
                  <div className="text-[11px] text-slate-500 dark:text-[#a39b92]">Herbal & Allopathic Formulations</div>
                </div>
              </div>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white/10 hover:bg-emerald-600 dark:hover:bg-white/20 text-white font-semibold text-xs transition border dark:border-white/10"
                >
                  <span>Read Full Kendra Story & Mission</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-4/3 rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1000&q=80"
                  alt="Ayurvedic Herbs and Jivan Joyti Kendra Store"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-[#0e0e0e] p-5 rounded-2xl border border-slate-200 dark:border-white/10 shadow-2xl hidden sm:block max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                    100%
                  </div>
                  <div>
                    <p className="font-bold text-xs text-slate-900 dark:text-white">Authenticity Guaranteed</p>
                    <p className="text-[11px] text-slate-500 dark:text-[#a39b92]">Baidyanath, Dabur, Kottakkal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED SERVICES (MAXIMUM 6) */}
      <section className="py-16 sm:py-24 bg-white dark:bg-[#080808] border-t border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 dark:border dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                Our Core Offerings
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight font-serif-display">
                Comprehensive Healthcare & Pharmacy Services
              </h2>
              <p className="text-slate-600 dark:text-[#a39b92] text-sm max-w-2xl mt-1">
                From emergency allopathic prescriptions to authentic classical Ayurveda and home diagnostic devices.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              <span>View All Services</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0d0d0d] border border-slate-200/80 dark:border-white/10 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:shadow-xl transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-white/5 flex items-center justify-center shadow-xs mb-4 group-hover:scale-105 transition border dark:border-white/5">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition font-serif-display">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-[#a39b92] leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/70 dark:border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">
                    {service.turnaroundTime}
                  </span>
                  <Link
                    to="/services"
                    className="text-xs font-bold text-slate-700 dark:text-[#e0d8d0] group-hover:text-emerald-400 flex items-center gap-1"
                  >
                    Details <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="py-16 sm:py-24 bg-slate-50 dark:bg-[#050505] border-t border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 dark:border dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Patient-First Standards
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight font-serif-display">
              Why Masaurhi Trusts Jivan Joyti Ayurveda Kendra
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-[#0d0d0d] border border-slate-200 dark:border-white/10 shadow-xs hover:shadow-md transition"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-white/5 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4 border dark:border-white/5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5 font-serif-display">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-[#a39b92] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEATURED PRODUCTS PREVIEW */}
      <section className="py-16 sm:py-24 bg-white dark:bg-[#080808] border-t border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 dark:border dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
                <Pill className="w-3.5 h-3.5" />
                Top Sellers & Essentials
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight font-serif-display">
                Featured Health & Ayurvedic Products
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              <span>Explore All Products in Stock Checker</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((prod) => (
              <div
                key={prod.id}
                className="bg-slate-50 dark:bg-[#0d0d0d] rounded-2xl border border-slate-200 dark:border-white/10 p-5 flex flex-col justify-between hover:shadow-xl transition group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 px-2 py-0.5 rounded border dark:border-emerald-800/50">
                      {prod.brand}
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                      {prod.status}
                    </span>
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-emerald-400 transition">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-[#a39b92] mt-1 line-clamp-2">
                    {prod.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200 dark:border-white/5 flex items-center justify-between">
                  <div>
                    <span className="text-base font-extrabold text-slate-900 dark:text-white">
                      ₹{prod.discountedPrice || prod.mrp}
                    </span>
                    {prod.discountedPrice && (
                      <span className="text-xs text-slate-400 dark:text-[#6e675f] line-through ml-1.5">
                        ₹{prod.mrp}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => onOpenWhatsAppModal(`${prod.name} (${prod.brand})`)}
                    className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-xs transition"
                    title="Order on WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CUSTOMER REVIEWS PREVIEW */}
      <section className="py-16 sm:py-24 bg-slate-50 dark:bg-[#050505] border-t border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 dark:border dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              Verified Local Feedback
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight font-serif-display">
              What Our Patients & Doctors Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviewsPreview.map((rev) => (
              <div
                key={rev.id}
                className="bg-white dark:bg-[#0d0d0d] p-6 rounded-2xl border border-slate-200 dark:border-white/10 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-[#e0d8d0] italic leading-relaxed">
                    &quot;{rev.comment}&quot;
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/5">
                  <h3 className="font-bold text-xs text-slate-900 dark:text-white">{rev.name}</h3>
                  <p className="text-[11px] text-slate-400 dark:text-[#a39b92]">{rev.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              <span>Read More Verified Reviews in About Section</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FAQ PREVIEW */}
      <section className="py-16 sm:py-24 bg-white dark:bg-[#080808] border-t border-slate-200 dark:border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight font-serif-display">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-[#a39b92] mt-1">
              Common questions about medicine ordering, delivery in Masaurhi, and authenticity.
            </p>
          </div>

          <div className="space-y-4">
            {faqPreview.map((faq) => (
              <div
                key={faq.id}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-[#0d0d0d] border border-slate-200 dark:border-white/10"
              >
                <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-xs text-slate-600 dark:text-[#a39b92] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <Link
              to="/contact"
              className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              Have a different question? Contact our pharmacist &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 8. LATEST HEALTH TIPS PREVIEW */}
      <section className="py-16 sm:py-24 bg-slate-50 dark:bg-[#050505] border-t border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 dark:border dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
                <Leaf className="w-3.5 h-3.5" />
                Ayurvedic Knowledge
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight font-serif-display">
                Latest Health & Ayurvedic Wellness Tips
              </h2>
            </div>
            <Link
              to="/services"
              className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              View More Advice
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tipsPreview.map((tip) => (
              <div
                key={tip.id}
                className="p-6 rounded-2xl bg-white dark:bg-[#0d0d0d] border border-slate-200 dark:border-white/10 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold mb-2">
                    <span>{tip.category}</span>
                    <span className="text-white/20">•</span>
                    <span>{tip.readTime}</span>
                  </div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2 font-serif-display">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-[#a39b92] leading-relaxed">
                    {tip.content}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/5 text-[11px] text-slate-400 dark:text-[#6e675f]">
                  Published by Jivan Joyti Health Advisory Team
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA SECTION */}
      <section className="py-16 bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-900/90 text-white border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight font-serif-display">
            Need Medicines Delivered at Your Doorstep in Masaurhi?
          </h2>
          <p className="text-[#a39b92] text-sm sm:text-base max-w-2xl mx-auto">
            Send your prescription photo via WhatsApp or call our emergency hotline. Fast delivery, genuine products, and licensed pharmacist advice.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenWhatsAppModal()}
              className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-xl transition active:scale-95"
            >
              Order on WhatsApp Now
            </button>
            <a
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/15 transition active:scale-95"
            >
              Call {BUSINESS_CONFIG.phone}
            </a>
          </div>
        </div>
      </section>

      {/* 10. NEWSLETTER */}
      <section className="py-12 bg-white dark:bg-[#050505] border-t border-slate-200 dark:border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white font-serif-display">
            Stay Updated with Seasonal Ayurvedic Advice & Health Alerts
          </h3>
          <p className="text-xs text-slate-500 dark:text-[#a39b92]">
            Subscribe to receive health tips from our certified Vaidyas. No spam, only genuine care.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for subscribing to Jivan Joyti Health Alerts!');
            }}
            className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="flex-1 px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-[#121212] border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
