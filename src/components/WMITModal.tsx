import React from 'react';
import { ExternalLink, X, Globe, Shield, Sparkles, CheckCircle2 } from 'lucide-react';

interface WMITModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WMITModal: React.FC<WMITModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white dark:bg-[#0d0d0d] rounded-3xl shadow-2xl border border-slate-200 dark:border-white/10 p-6 md:p-8 overflow-hidden text-slate-800 dark:text-[#e0d8d0]"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-full hover:bg-slate-100 dark:hover:bg-white/5 transition"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-emerald-500/20">
            W
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 font-serif-display">
              WebMaker IT Solutions
              <span className="text-xs bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 font-semibold px-2 py-0.5 rounded-full border dark:border-emerald-800/40">
                Certified Partner
              </span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-[#a39b92]">
              Leading Digital Solutions & High-Performance Web Architectures
            </p>
          </div>
        </div>

        {/* Body Info */}
        <div className="space-y-3 mb-6 text-sm text-slate-600 dark:text-[#a39b92]">
          <p>
            This enterprise healthcare Progressive Web Application for <strong className="text-slate-900 dark:text-[#e0d8d0]">Jivan Joyti Ayurveda Kendra</strong> was designed, engineered, and optimized by WebMaker IT Solutions (WMIT).
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
            <div className="flex items-center gap-2 text-xs bg-slate-50 dark:bg-[#121212] p-2.5 rounded-xl border border-slate-100 dark:border-white/5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span className="text-slate-800 dark:text-[#e0d8d0]">Full PWA Mobile Install Ready</span>
            </div>
            <div className="flex items-center gap-2 text-xs bg-slate-50 dark:bg-[#121212] p-2.5 rounded-xl border border-slate-100 dark:border-white/5">
              <Sparkles className="w-4 h-4 text-emerald-500 shrink-0" />
              <span className="text-slate-800 dark:text-[#e0d8d0]">Instant WhatsApp Ordering</span>
            </div>
            <div className="flex items-center gap-2 text-xs bg-slate-50 dark:bg-[#121212] p-2.5 rounded-xl border border-slate-100 dark:border-white/5">
              <Shield className="w-4 h-4 text-emerald-500 shrink-0" />
              <span className="text-slate-800 dark:text-[#e0d8d0]">High Security & Fast CDN</span>
            </div>
            <div className="flex items-center gap-2 text-xs bg-slate-50 dark:bg-[#121212] p-2.5 rounded-xl border border-slate-100 dark:border-white/5">
              <Globe className="w-4 h-4 text-emerald-500 shrink-0" />
              <span className="text-slate-800 dark:text-[#e0d8d0]">100% Local SEO Optimized</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://crm.webmakerit.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm shadow-md transition"
          >
            Visit WebMaker IT
            <ExternalLink className="w-4 h-4" />
          </a>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-[#e0d8d0] font-medium text-sm transition border dark:border-white/5"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
