import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Award, 
  Heart, 
  Leaf, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  UserCheck, 
  Calendar,
  Phone,
  MessageCircle,
  Stethoscope,
  BookOpen
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/siteConfig';
import { WHY_CHOOSE_US, TESTIMONIALS_DATA } from '../data/faqReviewsData';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumb } from '../components/Breadcrumb';

interface AboutProps {
  onOpenWhatsAppModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenWhatsAppModal }) => {
  const timelineEvents = [
    {
      year: "2012",
      title: "Foundation at Taregna Station Road",
      desc: "Established by registered pharmacists and Ayurvedic practitioners to solve the severe shortage of genuine classical Ayurvedic medicines in Masaurhi sub-division."
    },
    {
      year: "2016",
      title: "Expansion to Comprehensive Pharmacy",
      desc: "Integrated full-scale allopathic prescription dispensing with medical-grade refrigeration for insulin and critical temperature-sensitive therapies."
    },
    {
      year: "2020",
      title: "Community Emergency Response",
      desc: "Served the Taregna and Masaurhi community non-stop with door-to-door emergency medicines, oxygen supplies, and pulse oximeters during the pandemic."
    },
    {
      year: "2024",
      title: "Digital Stock & WhatsApp Prescription Integration",
      desc: "Pioneered real-time digital medicine stock checking and instantaneous WhatsApp dispensing for patients across Patna district."
    },
    {
      year: "2026",
      title: "PWA Progressive Web App & Healthcare Hub",
      desc: "Launched our full-featured installable Progressive Web Application, providing instant home-screen access to local medicine stocks."
    }
  ];

  const achievements = [
    { number: "14+", label: "Years Serving Masaurhi", desc: "Unbroken record of genuine pharmacy care" },
    { number: "3,500+", label: "Medicines & Formulations", desc: "Herbal, classical & prescription drugs" },
    { number: "25,000+", label: "Prescriptions Dispensed", desc: "Zero counterfeit product guarantee" },
    { number: "100%", label: "Authentic Batch Verified", desc: "Sourced from licensed pharma houses" }
  ];

  const coreValues = [
    {
      title: "Zero Compromise on Authenticity",
      desc: "We strictly reject unauthorized or duplicate drugs. Every tablet, churna, and syrup comes with valid batch numbers and manufacturer warranties."
    },
    {
      title: "Holistic Patient Wellness",
      desc: "We combine the root-cause therapeutic wisdom of Ayurveda with life-saving precision of modern allopathic medicine."
    },
    {
      title: "Affordable Healthcare Access",
      desc: "Healthcare is a right. We provide honest pricing, generic alternatives where appropriate, and maximum savings on chronic therapies."
    },
    {
      title: "Community Empathy & 24/7 Availability",
      desc: "We treat every patient like family. Our emergency helpline remains active day and night for urgent prescriptions."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-[#e0d8d0]">
      <SEOHead
        title="About Jivan Joyti Ayurveda Kendra | Our Story, Mission & Journey in Masaurhi"
        description="Learn about Jivan Joyti Ayurveda Kendra, founded in 2012 at Taregna Station Rd, Masaurhi, Patna. Authentic Ayurvedic formulations, certified pharmacists & patient-first care."
        canonicalPath="/about"
        breadcrumbs={[
          { name: 'About Kendra', path: '/about' }
        ]}
      />

      {/* Breadcrumb */}
      <div className="bg-white dark:bg-[#080808] border-b border-slate-200 dark:border-white/5">
        <Breadcrumb items={[{ name: 'About Jivan Joyti Ayurveda Kendra', path: '/about' }]} />
      </div>

      {/* Hero Header */}
      <section className="relative py-14 sm:py-20 bg-gradient-to-b from-[#050505] via-[#090909] to-[#050505] text-[#e0d8d0] border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-emerald-300 text-xs font-semibold backdrop-blur-md">
              <Leaf className="w-3.5 h-3.5 text-emerald-400" />
              <span>Dedicated to Pure Healing Since 2012</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-serif-display">
              About Jivan Joyti Ayurveda Kendra
            </h1>
            <p className="text-[#a39b92] text-sm sm:text-base leading-relaxed">
              Bridging classical Vedic wisdom with modern pharmaceutical standards to serve the healthcare needs of Masaurhi, Taregna, and Patna district.
            </p>
          </div>
        </div>
      </section>

      {/* Business Story */}
      <section className="py-16 bg-white dark:bg-[#080808] border-b border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 dark:border dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <BookOpen className="w-3.5 h-3.5" />
                Our Story
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight font-serif-display">
                Rooted in Tradition, Powered by Trust
              </h2>
              <p className="text-slate-600 dark:text-[#a39b92] text-sm sm:text-base leading-relaxed">
                Jivan Joyti Ayurveda Kendra was founded in 2012 on Taregna Station Road, Masaurhi, Patna. In a region where patients frequently struggled to locate authentic, unadulterated Ayurvedic Rasayanas and quality-assured prescription allopathic drugs, our Kendra was created to be an unshakeable pillar of healthcare integrity.
              </p>
              <p className="text-slate-600 dark:text-[#a39b92] text-sm leading-relaxed">
                Over the past 14 years, under the guidance of licensed pharmaceutical professionals and experienced Ayurvedic Vaidyas, we have earned the trust of over 25,000 families. We do not merely hand over medicines; we ensure every patient understands proper dosage, dietary precautions (Pathya-Apathya), and storage instructions.
              </p>
              
              <div className="p-4 bg-emerald-50 dark:bg-[#0d0d0d] rounded-2xl border border-emerald-200 dark:border-white/10">
                <div className="flex items-start gap-3">
                  <UserCheck className="w-5 h-5 text-emerald-500 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-bold text-sm text-slate-900 dark:text-white font-serif-display">
                      Message from the Chief Pharmacist &amp; Vaidya Team
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-[#a39b92] mt-1 italic leading-relaxed">
                      &quot;Healthcare is sacred service. Whether a patient comes to us for a classical Baidyanath Bhasma or emergency cardiac tablets, our duty is to provide 100% genuine medicine with empathy and accurate guidance. We are proud to serve Masaurhi.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=600&q=80"
                  alt="Jivan Joyti Kendra Storefront"
                  className="rounded-2xl object-cover shadow-md h-52 w-full border dark:border-white/10"
                />
                <img
                  src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80"
                  alt="Ayurvedic Herbs"
                  className="rounded-2xl object-cover shadow-md h-64 w-full border dark:border-white/10"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=600&q=80"
                  alt="Organized Pharmacy Racks"
                  className="rounded-2xl object-cover shadow-md h-64 w-full border dark:border-white/10"
                />
                <img
                  src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80"
                  alt="Medical Devices"
                  className="rounded-2xl object-cover shadow-md h-52 w-full border dark:border-white/10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-16 bg-slate-50 dark:bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Mission */}
            <div className="p-8 rounded-3xl bg-white dark:bg-[#0d0d0d] border border-slate-200 dark:border-white/10 shadow-sm relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-white/5 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold mb-4 border dark:border-white/5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2 font-serif-display">Our Mission</h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-[#a39b92] leading-relaxed">
                To provide authentic, affordable, and readily accessible healthcare solutions — spanning classical Ayurvedic therapies, doctor-prescribed allopathic medicines, and precision diagnostic devices — with unwavering commitment to patient safety, ethical dispensing, and compassionate service.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 rounded-3xl bg-white dark:bg-[#0d0d0d] border border-slate-200 dark:border-white/10 shadow-sm relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-white/5 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold mb-4 border dark:border-white/5">
                <Sparkles className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2 font-serif-display">Our Vision</h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-[#a39b92] leading-relaxed">
                To be the benchmark healthcare and Ayurvedic center in Bihar, empowering families with holistic wellness, preventive natural remedies, instant digital stock transparency, and rapid emergency doorstep medicine fulfillment.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-serif-display">Our Core Values</h2>
            <p className="text-xs text-slate-500 dark:text-[#a39b92] mt-1">The principles that govern every prescription we fulfill.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-[#0d0d0d] border border-slate-200 dark:border-white/10 shadow-xs"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 font-bold text-xs flex items-center justify-center mb-3 border dark:border-emerald-800/50">
                  {idx + 1}
                </div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-2 font-serif-display">{val.title}</h3>
                <p className="text-xs text-slate-600 dark:text-[#a39b92] leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements / Numbers */}
      <section className="py-14 bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 text-white border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {achievements.map((ach, idx) => (
              <div key={idx} className="p-4">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-serif-display">{ach.number}</div>
                <div className="text-sm font-bold text-emerald-300 mt-1">{ach.label}</div>
                <div className="text-xs text-[#a39b92] mt-0.5">{ach.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Journey & Timeline */}
      <section className="py-16 bg-white dark:bg-[#080808] border-b border-slate-200 dark:border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 dark:border dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
              <Calendar className="w-3.5 h-3.5" />
              Our Journey
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight font-serif-display">
              A Decade of Growth & Community Service
            </h2>
          </div>

          <div className="relative border-l-2 border-emerald-500/30 ml-4 sm:ml-32 space-y-8 pb-4">
            {timelineEvents.map((evt, idx) => (
              <div key={idx} className="relative pl-6 sm:pl-8 group">
                {/* Year Marker on Left for sm screens */}
                <div className="hidden sm:block absolute -left-28 top-0.5 text-right w-20 font-black text-emerald-500 dark:text-emerald-400 text-lg">
                  {evt.year}
                </div>

                {/* Timeline Dot */}
                <div className="absolute -left-2.25 top-1.5 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white dark:border-[#080808] group-hover:scale-125 transition" />

                {/* Content Card */}
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#0d0d0d] border border-slate-200 dark:border-white/10 group-hover:border-emerald-500/50 transition">
                  <span className="sm:hidden inline-block text-xs font-bold text-emerald-400 mb-1">
                    {evt.year}
                  </span>
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white font-serif-display">
                    {evt.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-[#a39b92] mt-1 leading-relaxed">
                    {evt.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Full */}
      <section className="py-16 bg-slate-50 dark:bg-[#050505] border-b border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight font-serif-display">
              Why Patients Continue to Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-[#0d0d0d] border border-slate-200 dark:border-white/10 shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-white/5 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 border dark:border-white/5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white mb-1.5 font-serif-display">{item.title}</h3>
                <p className="text-xs text-slate-600 dark:text-[#a39b92] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Reviews Section */}
      <section className="py-16 bg-white dark:bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight font-serif-display">
              Patient Testimonials & Reviews
            </h2>
            <p className="text-xs text-slate-500 dark:text-[#a39b92] mt-1">
              Genuine experiences from local residents in Taregna, Masaurhi, and surrounding villages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS_DATA.map((rev) => (
              <div
                key={rev.id}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-[#0d0d0d] border border-slate-200 dark:border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-2">
                    {[...Array(rev.rating)].map((_, i) => (
                      <span key={i} className="text-amber-400">★</span>
                    ))}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-[#e0d8d0] italic leading-relaxed">
                    &quot;{rev.comment}&quot;
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-200 dark:border-white/5 text-xs">
                  <p className="font-bold text-slate-900 dark:text-white">{rev.name}</p>
                  <p className="text-[11px] text-slate-400 dark:text-[#a39b92]">{rev.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-950 text-white text-center border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif-display">Have Questions About Your Prescription?</h2>
          <p className="text-xs text-[#a39b92]">
            Our licensed pharmacists and Vaidyas are here to help you 7 days a week.
          </p>
          <div className="flex justify-center gap-3 pt-2">
            <button
              onClick={onOpenWhatsAppModal}
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-md transition"
            >
              Consult via WhatsApp
            </button>
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition border border-white/10"
            >
              Contact & Directions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
