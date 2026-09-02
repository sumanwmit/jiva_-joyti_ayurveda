import React, { useState } from 'react';
import { 
  Leaf, 
  Pill, 
  Activity, 
  HeartHandshake, 
  Stethoscope, 
  ShieldCheck, 
  CheckCircle2, 
  MessageCircle, 
  Phone, 
  Sparkles,
  ArrowRight,
  Search
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/siteConfig';
import { SERVICES_DATA, MEDICINE_CATEGORIES } from '../data/servicesData';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { MedicineStockChecker } from '../components/MedicineStockChecker';

interface ServicesProps {
  onOpenWhatsAppModal: (prefill?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenWhatsAppModal }) => {
  const [selectedServiceCategory, setSelectedServiceCategory] = useState<string>('All');

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

  const medicineCategoriesOverview = [
    {
      title: "Ayurvedic & Herbal Formulations",
      desc: "Authentic Bhasmas, Asavas, Arishtas, Churnas, Rasayanas & Medicated Oils.",
      brands: "Baidyanath, Dabur, Kottakkal, Patanjali, Zandu",
      tag: "Pure & Certified"
    },
    {
      title: "Allopathic Prescription Drugs",
      desc: "Critical therapies for Diabetes, Hypertension, Cardiac Care, Antibiotics, and Gastroenterology.",
      brands: "Cipla, Sun Pharma, Abbott, Alkem, Mankind",
      tag: "Batch Verified"
    },
    {
      title: "OTC Everyday Medicines",
      desc: "Fast relief for fever, headache, body aches, acidity, motion sickness, cold, and flu.",
      brands: "Dolo 650, Crocin, Gelusil, Honitus, Disprin",
      tag: "Instant Counter Sale"
    },
    {
      title: "Health Devices & Monitoring",
      desc: "Digital BP monitors, Blood Glucose Meters, Nebulizers, Oximeters & Thermometers with warranty.",
      brands: "Omron, Accu-Chek, Dr. Morepen, Philips",
      tag: "Home Diagnostic"
    },
    {
      title: "Surgical Supplies & First Aid",
      desc: "Sterile bandages, antiseptic solutions, cotton, surgical tapes, syringes & trauma kits.",
      brands: "Win-Medicare Betadine, Romsons, 3M, Dettol",
      tag: "24/7 Emergency"
    },
    {
      title: "Baby Care & Hygiene",
      desc: "Gentle baby shampoos, massage oils, tear-free cleansers, diapers, and infant nutrition.",
      brands: "Himalaya Baby, Sebamed, Pampers, Nestle",
      tag: "Dermatologically Safe"
    },
    {
      title: "Nutritional Supplements & Tonics",
      desc: "Multivitamins, Calcium + D3, Zinc, Iron tonics, Protein powders, and energy boosters.",
      brands: "Becosules, Shelcal, Revital, Ensure, Protinex",
      tag: "Vitality Boost"
    },
    {
      title: "Personal Care & Hygiene",
      desc: "Antiseptic soaps, hand sanitizers, skin care lotions, medicated hair oils, and oral care.",
      brands: "Dettol, Savlon, Mediker, Kesh King, Boroline",
      tag: "Daily Wellness"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-[#e0d8d0]">
      <SEOHead
        title="Healthcare & Pharmacy Services | Jivan Joyti Ayurveda Kendra Masaurhi"
        description="Explore complete pharmacy services: Ayurvedic formulations, prescription medicines, surgical supplies, health devices, baby care, and live medicine stock checker."
        canonicalPath="/services"
        breadcrumbs={[
          { name: 'Services & Stock Checker', path: '/services' }
        ]}
      />

      {/* Breadcrumb */}
      <div className="bg-white dark:bg-[#080808] border-b border-slate-200 dark:border-white/5">
        <Breadcrumb items={[{ name: 'Healthcare Services & Inventory', path: '/services' }]} />
      </div>

      {/* Hero Header */}
      <section className="relative py-14 sm:py-20 bg-gradient-to-b from-[#050505] via-[#090909] to-[#050505] text-[#e0d8d0] border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-emerald-300 text-xs font-semibold backdrop-blur-md">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Full-Spectrum Pharmacy & Ayurvedic Dispensary</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-serif-display">
              Our Healthcare & Pharmacy Services
            </h1>
            <p className="text-[#a39b92] text-sm sm:text-base leading-relaxed">
              From classical Ayurvedic Bhasmas to emergency life-saving allopathic drugs, health devices, and local home delivery in Masaurhi.
            </p>
          </div>
        </div>
      </section>

      {/* EXCLUSIVE FEATURE: MEDICINE STOCK CHECKER INTEGRATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <MedicineStockChecker 
          standalone 
          onOrderClick={(medicineName) => onOpenWhatsAppModal(medicineName)} 
        />
      </section>

      {/* Complete Category-wise Services Cards */}
      <section className="py-16 bg-white dark:bg-[#080808] border-b border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 dark:border dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Detailed Service Portfolios
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-serif-display">
              Specialized Healthcare Services
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-[#a39b92] mt-1">
              Each service is backed by strict quality protocols and certified pharmacists.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {SERVICES_DATA.map((serv) => (
              <div
                key={serv.id}
                className="bg-slate-50 dark:bg-[#0d0d0d] rounded-3xl border border-slate-200 dark:border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-200 shadow-xs hover:shadow-xl group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white dark:bg-white/5 flex items-center justify-center shadow-xs text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition border dark:border-white/5">
                      {getServiceIcon(serv.iconName)}
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border dark:border-emerald-800/50">
                      {serv.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-400 transition font-serif-display">
                      {serv.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-[#a39b92] mt-2 leading-relaxed">
                      {serv.fullDesc}
                    </p>
                  </div>

                  {/* Features Checklist */}
                  <div className="space-y-2 pt-2">
                    <p className="text-xs font-bold text-slate-700 dark:text-[#e0d8d0] uppercase tracking-wider">
                      Key Highlights:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {serv.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-[#a39b92]">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Trusted Brands */}
                  <div className="pt-2">
                    <span className="text-[11px] text-slate-400 dark:text-[#6e675f] font-semibold mr-2">Top Brands:</span>
                    <div className="inline-flex flex-wrap gap-1.5 mt-1">
                      {serv.highlights.map((h, i) => (
                        <span key={i} className="text-[10px] font-medium bg-white dark:bg-white/5 text-slate-700 dark:text-[#e0d8d0] px-2 py-0.5 rounded border border-slate-200 dark:border-white/5">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Service Card CTA */}
                <div className="pt-6 mt-6 border-t border-slate-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                    ⏱ Turnaround: {serv.turnaroundTime}
                  </span>
                  <button
                    onClick={() => onOpenWhatsAppModal(`Inquiry regarding ${serv.title}`)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition active:scale-95"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Inquire / Order on WhatsApp</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medicine Categories Breakdown */}
      <section className="py-16 bg-slate-50 dark:bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight font-serif-display">
              Complete Medicine & Health Categories
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-[#a39b92] mt-1">
              Available 7 days a week with same-day local Masaurhi fulfillment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {medicineCategoriesOverview.map((cat, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#0d0d0d] p-6 rounded-2xl border border-slate-200 dark:border-white/10 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 px-2 py-0.5 rounded border dark:border-emerald-800/50">
                      {cat.tag}
                    </span>
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white mb-2 font-serif-display">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-[#a39b92] leading-relaxed mb-3">
                    {cat.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 dark:border-white/5 text-[11px] text-slate-500 dark:text-[#a39b92]">
                  <strong className="text-slate-700 dark:text-[#e0d8d0]">Brands:</strong> {cat.brands}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Health Check Advisory Banner */}
      <section className="py-12 bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-950 text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold font-serif-display">
              Walk-in for Complimentary Blood Pressure Check
            </h3>
            <p className="text-xs sm:text-sm text-[#a39b92] max-w-xl">
              Visit our Kendra at Taregna Station Rd, Masaurhi for free blood pressure screening and pulse rate checks by licensed staff.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href={BUSINESS_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-lg transition"
            >
              Get Directions
            </a>
            <a
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition border border-white/10"
            >
              Call Store
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
