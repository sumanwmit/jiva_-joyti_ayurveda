import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/siteConfig';

interface FloatingActionsProps {
  onOpenWhatsAppModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenWhatsAppModal }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <aside aria-label="Quick Actions" className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="w-11 h-11 rounded-full bg-slate-900/90 dark:bg-slate-800/90 text-white shadow-lg backdrop-blur-md flex items-center justify-center hover:bg-emerald-600 dark:hover:bg-emerald-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 active:scale-95 animate-in fade-in zoom-in-75"
          aria-label="Back to top"
          title="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Direct Call Floating Button */}
      <a
        href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
        className="group relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-600/30 transition-all duration-200 active:scale-95 focus:outline-none"
        aria-label="Call Jivan Joyti Medical Store"
        title={`Call ${BUSINESS_CONFIG.phone}`}
      >
        <Phone className="w-6 h-6" />
        {/* Tooltip on hover for desktop */}
        <span className="absolute right-15 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none shadow-md hidden sm:block">
          Call {BUSINESS_CONFIG.phone}
        </span>
      </a>

      {/* Floating WhatsApp Button */}
      <button
        onClick={onOpenWhatsAppModal}
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl shadow-emerald-500/40 transition-all duration-200 active:scale-95 focus:outline-none animate-bounce duration-1000"
        aria-label="Order Medicines on WhatsApp"
        title="WhatsApp Medicine Order"
      >
        <MessageCircle className="w-7 h-7" />
        
        {/* Pulsing indicator dot */}
        <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 border-2 border-white"></span>
        </span>

        {/* Hover Label for desktop */}
        <span className="absolute right-16 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none shadow-md hidden sm:block">
          Order on WhatsApp
        </span>
      </button>
    </aside>
  );
};
