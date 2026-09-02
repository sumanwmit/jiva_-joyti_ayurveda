import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  MessageCircle, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  MapPin, 
  ShieldCheck, 
  LogIn, 
  Clock,
  HeartPulse,
  Sparkles
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/siteConfig';
import { useTheme } from '../context/ThemeContext';
import { PWAInstallButton } from './PWAInstallButton';

interface NavbarProps {
  onOpenWhatsAppModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenWhatsAppModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  // Handle scroll detection for sticky glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
    { name: 'Login', path: '/login' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Micro Header */}
      <div className="bg-[#050505] text-slate-300 text-xs py-1.5 px-4 sm:px-6 lg:px-8 border-b border-white/5 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" /> Licensed Ayurvedic & Allopathic Pharmacy
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" /> Taregna Station Rd, Masaurhi, Patna
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-emerald-400" /> Open Today: 7:00 AM – 10:30 PM
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              className="flex items-center gap-1 text-slate-200 hover:text-emerald-400 font-semibold transition"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>Call: {BUSINESS_CONFIG.phone}</span>
            </a>
            <span className="text-white/20">|</span>
            <Link 
              to="/login"
              className="flex items-center gap-1 text-slate-200 hover:text-emerald-400 font-medium transition"
            >
              <LogIn className="w-3 h-3 text-emerald-400" />
              <span>Portal Login</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 dark:bg-[#080808]/95 backdrop-blur-md shadow-lg border-b border-slate-200/80 dark:border-white/10 py-2.5'
            : 'bg-white dark:bg-[#050505] border-b border-slate-200 dark:border-white/5 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-xl"
            aria-label="Jivan Joyti Ayurveda Kendra Homepage"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-emerald-600 via-teal-600 to-emerald-500 text-white flex items-center justify-center font-black text-lg shadow-md shadow-emerald-900/30 group-hover:scale-105 transition">
              JJ
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white tracking-tight leading-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition font-serif-display">
                  Jivan Joyti
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 dark:border dark:border-emerald-800/60 px-1.5 py-0.5 rounded">
                  Ayurveda
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-[#a39b92] font-medium tracking-wide">
                Kendra & Pharmacy • Masaurhi
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-150 ${
                  isActive(link.path)
                    ? 'bg-emerald-50 text-emerald-700 dark:bg-white/10 dark:text-emerald-300 dark:border dark:border-white/10 shadow-xs'
                    : 'text-slate-600 dark:text-[#e0d8d0]/80 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Action Buttons: Add to Home + Dark Mode + WhatsApp CTA */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* PWA Add to Home Button */}
            <PWAInstallButton variant="nav" />

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 transition focus:outline-none"
              aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-600" />
              )}
            </button>

            {/* Quick Order WhatsApp CTA */}
            <button
              onClick={onOpenWhatsAppModal}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md shadow-emerald-900/30 transition active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Order</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 dark:text-slate-200 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-4 pt-3 pb-6 bg-white dark:bg-[#0a0a0a] border-t border-slate-200 dark:border-white/10 shadow-2xl space-y-3 animate-in slide-in-from-top-4 duration-200">
            <div className="grid grid-cols-2 gap-2 pb-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3.5 py-2.5 rounded-xl text-xs font-bold text-center transition ${
                    isActive(link.path)
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-white/10 text-xs">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWhatsAppModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-600 text-white font-bold rounded-xl shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Medicine Order</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-200 font-bold rounded-xl"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Call Store</span>
                </a>
                <Link
                  to="/services"
                  className="flex items-center justify-center gap-1.5 py-2.5 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-bold rounded-xl border border-emerald-200 dark:border-emerald-800/50"
                >
                  <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Check Stock</span>
                </Link>
              </div>

              <div className="pt-2 text-center text-[11px] text-slate-500 dark:text-[#a39b92]">
                Taregna Station Rd, Masaurhi • Open 7:00 AM - 10:30 PM
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
