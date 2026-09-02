import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Shield, 
  Heart, 
  ChevronRight, 
  MessageCircle,
  ExternalLink,
  Award
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/siteConfig';
import { WMITModal } from './WMITModal';

export default function Footer() {
  const [isWMITModalOpen, setIsWMITModalOpen] = useState(false);

  // === STEP 11: MANDATORY GLOBAL TRACKER HOOK ===
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://crm.webmakerit.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid')!);
    }
    if (!cid) return;
    let visitorId = localStorage.getItem('wmit_visitor_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);
    let sessionId = sessionStorage.getItem('wmit_session_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);
    
    const getPageName = () => {
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split('?')[0] : 'Home';
    };
    
    const sendInitPayload = () => {
      const payload = {
        cid: cid,
        visitor_id: visitorId,
        session_id: sessionId,
        page_name: getPageName(),
        referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent,
        action: 'init'
      };
      fetch(TRACKING_ENDPOINT, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(() => {});
    };
    
    const sendExitPayload = () => {
      const payload = {
        cid: cid,
        session_id: sessionId,
        page_name: getPageName(),
        action: 'page_change'
      };
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true
        }).catch(() => {});
      }
    };
    
    sendInitPayload();
    
    // === IDLE TIMEOUT LOGIC FOR REACT ===
    let idleTimer: ReturnType<typeof setTimeout>;
    let isIdle = false;
    const resetIdleTimer = () => {
      if (isIdle) {
        isIdle = false;
        sendInitPayload(); // Wake up! Resume tracking
      }
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isIdle = true;
        sendExitPayload(); // Inactive! Stop tracking
      }, 60000); // 60 Seconds
    };
    
    const activityEvents = ['mousemove', 'keydown', 'scroll', 'touchstart'];
    activityEvents.forEach(evt => document.addEventListener(evt, resetIdleTimer, { passive: true }));
    resetIdleTimer(); // Initialize idle timer
    
    // ====================================
    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };
    
    window.addEventListener('popstate', handleLocationChange);
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        sendExitPayload();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', sendExitPayload);
    
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', sendExitPayload);
      activityEvents.forEach(evt => document.removeEventListener(evt, resetIdleTimer));
      clearTimeout(idleTimer);
    };
  }, []);

  return (
    <footer className="bg-[#050505] text-[#e0d8d0] border-t border-white/10 relative z-20">
      {/* Top Banner Accent */}
      <div className="bg-gradient-to-r from-emerald-900/90 via-slate-900 to-emerald-950/90 border-b border-white/5 py-3.5 text-[#e0d8d0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-400 shrink-0" />
            <span className="text-xs sm:text-sm font-medium tracking-wide">
              Need urgent medicines in Masaurhi? Quick delivery & 24/7 on-call emergency support.
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a 
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider bg-white/10 hover:bg-white/15 text-white px-3.5 py-1.5 rounded-full border border-white/10 transition"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" /> Call: {BUSINESS_CONFIG.phone}
            </a>
            <a 
              href={`https://wa.me/${BUSINESS_CONFIG.whatsapp}?text=${encodeURIComponent('Hello Jivan Joyti Ayurveda Kendra, I need urgent medicine delivery in Masaurhi.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-300 px-3.5 py-1.5 rounded-full border border-emerald-500/30 transition"
            >
              <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Col 1: Business Identity & Trust */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-emerald-950">
                JJ
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-serif-display leading-tight">
                  {BUSINESS_CONFIG.name}
                </h3>
                <p className="text-xs text-emerald-400 font-medium">
                  Masaurhi, Patna • Est. {BUSINESS_CONFIG.establishedYear}
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#a39b92] leading-relaxed">
              {BUSINESS_CONFIG.tagline}. Providing authentic Ayurvedic Rasayanas, Bhasmas, Asavas, and essential allopathic medicines under licensed pharmacist care.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-[#a39b92]">
              <span className="flex items-center gap-1 text-emerald-400">
                <Shield className="w-4 h-4" /> 100% Genuine
              </span>
              <span className="text-white/20">•</span>
              <span className="flex items-center gap-1 text-emerald-400">
                <Heart className="w-4 h-4" /> Trusted Healthcare
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/90 border-l-2 border-emerald-500 pl-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/" className="text-[#a39b92] hover:text-white transition flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#a39b92] hover:text-white transition flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500" /> About Kendra
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#a39b92] hover:text-white transition flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500" /> Healthcare Services
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-emerald-400 hover:text-emerald-300 transition flex items-center gap-1.5 font-semibold">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-400" /> Stock Checker
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-[#a39b92] hover:text-white transition flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500" /> Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#a39b92] hover:text-white transition flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500" /> Contact & Directions
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-[#a39b92] hover:text-white transition flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500" /> Customer & Pharmacist Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Working Hours & Location */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/90 border-l-2 border-emerald-500 pl-2">
              Store Timings & Address
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                <div>
                  <p className="text-white font-medium">Mon – Sat: {BUSINESS_CONFIG.workingHours.weekdays}</p>
                  <p className="text-[#a39b92] text-xs">Sunday: {BUSINESS_CONFIG.workingHours.sunday}</p>
                  <p className="text-emerald-400 text-xs font-semibold mt-0.5">{BUSINESS_CONFIG.workingHours.emergency}</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                <p className="text-[#a39b92] text-xs leading-relaxed">
                  {BUSINESS_CONFIG.address}
                </p>
              </div>
              <div className="pt-1">
                <a
                  href={BUSINESS_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-emerald-400 hover:text-emerald-300 font-medium"
                >
                  View on Google Maps <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Direct Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/90 border-l-2 border-emerald-500 pl-2">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <a 
                href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                className="flex items-center gap-2.5 text-[#e0d8d0]/80 hover:text-emerald-400 transition"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{BUSINESS_CONFIG.phone}</span>
              </a>
              <a 
                href={`https://wa.me/${BUSINESS_CONFIG.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[#e0d8d0]/80 hover:text-emerald-400 transition"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: {BUSINESS_CONFIG.phoneRaw}</span>
              </a>
              <a 
                href={`mailto:${BUSINESS_CONFIG.email}`}
                className="flex items-center gap-2.5 text-[#e0d8d0]/80 hover:text-emerald-400 transition"
              >
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="truncate">{BUSINESS_CONFIG.email}</span>
              </a>
            </div>

            {/* Quick Policies Links */}
            <div className="pt-2 text-xs text-[#6e675f] space-x-3">
              <Link to="/contact" className="hover:text-[#a39b92]">Privacy Policy</Link>
              <span>•</span>
              <Link to="/contact" className="hover:text-[#a39b92]">Terms</Link>
              <span>•</span>
              <Link to="/contact" className="hover:text-[#a39b92]">Disclaimer</Link>
            </div>
          </div>
        </div>

        {/* Disclaimer note */}
        <div className="mt-10 pt-6 border-t border-white/5 text-xs text-[#6e675f] leading-relaxed">
          <p>
            <strong>Medical Disclaimer:</strong> Information provided on this portal is for informational purposes only and does not substitute professional medical advice. Always take prescription medications strictly as directed by a registered medical practitioner.
          </p>
        </div>

        {/* STEP 12: COPYRIGHT & MANDATORY WMIT POPUP TRIGGER */}
        <div className="mt-6 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#a39b92] text-center md:text-left">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS_CONFIG.name}. All rights reserved.
          </p>

          {/* REQUIRED WMIT POPUP TRIGGER — PRESERVED EXACTLY */}
          <div className="my-1 md:my-0">
            <a 
              href="#" 
              className="wmit-popup-trigger text-emerald-400 hover:text-emerald-300 font-semibold px-3 py-1 rounded bg-white/5 hover:bg-white/10 transition inline-block border border-white/10"
              onClick={(e) => {
                e.preventDefault();
                setIsWMITModalOpen(true);
              }}
            >
              Developed by WMIT
            </a>
          </div>

          <p className="text-[#6e675f]">
            Taregna Railway Station Road, Masaurhi, Patna, Bihar
          </p>
        </div>
      </div>

      {/* WMIT Popup Dialog */}
      <WMITModal isOpen={isWMITModalOpen} onClose={() => setIsWMITModalOpen(false)} />
    </footer>
  );
}
