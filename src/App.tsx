import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import Footer from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { WhatsAppOrderModal } from './components/WhatsAppOrderModal';

// Lazy Loaded Exact 6 Routes
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const Gallery = lazy(() => import('./pages/Gallery').then(m => ({ default: m.Gallery })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const Login = lazy(() => import('./pages/Login').then(m => ({ default: m.Login })));

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Healthcare Loading Fallback
function LoadingFallback() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 space-y-4">
      <div className="relative">
        <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white font-extrabold text-xl flex items-center justify-center animate-pulse shadow-xl shadow-emerald-600/30">
          JJ
        </div>
        <div className="absolute -inset-1 rounded-2xl border-2 border-emerald-400/40 animate-ping" />
      </div>
      <p className="text-xs font-semibold text-emerald-800 dark:text-emerald-400 tracking-wider uppercase">
        Loading Jivan Joyti Healthcare...
      </p>
    </div>
  );
}

export default function App() {
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [prefilledMedicine, setPrefilledMedicine] = useState('');

  const handleOpenWhatsAppModal = (medicineName?: string) => {
    if (medicineName) {
      setPrefilledMedicine(medicineName);
    } else {
      setPrefilledMedicine('');
    }
    setIsWhatsAppModalOpen(true);
  };

  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-200">
          {/* Header & Sticky Navbar */}
          <Navbar onOpenWhatsAppModal={() => handleOpenWhatsAppModal()} />

          {/* Main Routing Area with Suspense Lazy Loading */}
          <main className="flex-1">
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route 
                  path="/" 
                  element={<Home onOpenWhatsAppModal={handleOpenWhatsAppModal} />} 
                />
                <Route 
                  path="/about" 
                  element={<About onOpenWhatsAppModal={() => handleOpenWhatsAppModal()} />} 
                />
                <Route 
                  path="/services" 
                  element={<Services onOpenWhatsAppModal={handleOpenWhatsAppModal} />} 
                />
                <Route 
                  path="/gallery" 
                  element={<Gallery />} 
                />
                <Route 
                  path="/contact" 
                  element={<Contact onOpenWhatsAppModal={() => handleOpenWhatsAppModal()} />} 
                />
                <Route 
                  path="/login" 
                  element={<Login />} 
                />
                {/* Fallback to Home */}
                <Route 
                  path="*" 
                  element={<Home onOpenWhatsAppModal={handleOpenWhatsAppModal} />} 
                />
              </Routes>
            </Suspense>
          </main>

          {/* Mandatory Global Footer & WMIT Anchor Tracking */}
          <Footer />

          {/* Floating Actions (WhatsApp, Call, Back to Top) */}
          <FloatingActions onOpenWhatsAppModal={() => handleOpenWhatsAppModal()} />

          {/* WhatsApp Medicine Order Modal */}
          <WhatsAppOrderModal
            isOpen={isWhatsAppModalOpen}
            onClose={() => setIsWhatsAppModalOpen(false)}
            prefilledMedicine={prefilledMedicine}
          />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
