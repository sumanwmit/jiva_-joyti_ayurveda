import React from 'react';
import { X, Share, PlusSquare, Check } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/siteConfig';

interface IOSInstallGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IOSInstallGuide: React.FC<IOSInstallGuideProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md bg-white dark:bg-[#0d0d0d] rounded-3xl shadow-2xl border border-slate-200 dark:border-white/10 p-6 text-slate-800 dark:text-[#e0d8d0]"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-full hover:bg-slate-100 dark:hover:bg-white/5 transition"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-emerald-600 text-white font-extrabold text-2xl flex items-center justify-center shadow-lg shadow-emerald-600/30">
            JJ
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white font-serif-display">
            Install {BUSINESS_CONFIG.shortName} App
          </h3>
          <p className="text-xs text-slate-500 dark:text-[#a39b92] mt-1">
            Fast 1-tap medicine orders & stock checker directly on your iPhone or iPad
          </p>
        </div>

        <div className="space-y-4 mb-6">
          <div className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-[#121212] rounded-xl border border-slate-100 dark:border-white/5">
            <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950/80 dark:text-emerald-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              1
            </div>
            <div className="text-sm">
              <p className="font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
                Tap the Share Button <Share className="w-4 h-4 text-emerald-500 inline" />
              </p>
              <p className="text-xs text-slate-500 dark:text-[#a39b92]">
                In the bottom bar of Safari browser.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-[#121212] rounded-xl border border-slate-100 dark:border-white/5">
            <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950/80 dark:text-emerald-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              2
            </div>
            <div className="text-sm">
              <p className="font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
                Select &quot;Add to Home Screen&quot; <PlusSquare className="w-4 h-4 text-emerald-500 inline" />
              </p>
              <p className="text-xs text-slate-500 dark:text-[#a39b92]">
                Scroll down in the share sheet and tap Add to Home Screen.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-[#121212] rounded-xl border border-slate-100 dark:border-white/5">
            <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950/80 dark:text-emerald-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              3
            </div>
            <div className="text-sm">
              <p className="font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
                Tap &quot;Add&quot; <Check className="w-4 h-4 text-emerald-500 inline" />
              </p>
              <p className="text-xs text-slate-500 dark:text-[#a39b92]">
                In the top right corner. The app icon will appear on your home screen!
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-medium text-sm transition shadow-md"
        >
          Got it, Thanks!
        </button>
      </div>
    </div>
  );
};
