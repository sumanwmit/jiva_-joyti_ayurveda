import React from 'react';
import { Download, CheckCircle, Smartphone } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { IOSInstallGuide } from './IOSInstallGuide';

interface PWAInstallButtonProps {
  variant?: 'nav' | 'hero' | 'floating' | 'banner';
  className?: string;
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({ 
  variant = 'nav',
  className = ''
}) => {
  const { 
    isInstallable, 
    isInstalled, 
    showIOSGuide, 
    setShowIOSGuide, 
    installSuccess, 
    handleInstallClick 
  } = usePWAInstall();

  if (isInstalled && !installSuccess) {
    return null;
  }

  if (installSuccess) {
    return (
      <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-xs font-semibold ${className}`}>
        <CheckCircle className="w-4 h-4 text-emerald-600" />
        <span>App Installed!</span>
      </div>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={handleInstallClick}
        aria-label="Add Jivan Joyti Ayurveda Kendra to Home Screen"
        className={`group relative inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 active:scale-95 ${
          variant === 'nav'
            ? 'px-3.5 py-1.5 rounded-full text-xs bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm'
            : variant === 'hero'
            ? 'px-5 py-3 rounded-xl text-sm bg-slate-900 dark:bg-white/5 hover:dark:bg-white/10 text-white border border-slate-700 dark:border-white/10 shadow-lg'
            : 'px-4 py-2 rounded-xl text-xs bg-emerald-600 hover:bg-emerald-500 text-white shadow-md'
        } ${className}`}
      >
        <span className="text-base leading-none">📲</span>
        <span>Add to Home</span>
      </button>

      <IOSInstallGuide
        isOpen={showIOSGuide}
        onClose={() => setShowIOSGuide(false)}
      />
    </>
  );
};
