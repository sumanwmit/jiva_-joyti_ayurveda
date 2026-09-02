import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Lock, 
  User, 
  Eye, 
  EyeOff, 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  Phone,
  KeyRound
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/siteConfig';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumb } from '../components/Breadcrumb';

export const Login: React.FC = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!identifier.trim()) {
      setErrorMessage('Please enter your registered mobile number or email address.');
      return;
    }
    if (!password.trim() || password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
      return;
    }

    setIsLoading(true);

    // Simulate secure authentication check
    setTimeout(() => {
      setIsLoading(false);
      setLoginSuccess(true);
    }, 1200);
  };

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(`Hello Jivan Joyti Ayurveda Kendra, I need to reset my patient portal account login for mobile/email: ${identifier || 'my account'}`);
    window.open(`https://wa.me/${BUSINESS_CONFIG.whatsapp}?text=${msg}`, '_blank');
    setShowForgotPassword(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-[#e0d8d0] flex flex-col justify-between">
      <SEOHead
        title="Patient & Pharmacist Login | Jivan Joyti Ayurveda Kendra"
        description="Secure login portal for patients and healthcare partners of Jivan Joyti Ayurveda Kendra Masaurhi to track prescriptions, orders, and health records."
        canonicalPath="/login"
        breadcrumbs={[
          { name: 'Portal Login', path: '/login' }
        ]}
      />

      {/* Breadcrumb */}
      <div className="bg-white dark:bg-[#080808] border-b border-slate-200 dark:border-white/5">
        <Breadcrumb items={[{ name: 'Portal Login', path: '/login' }]} />
      </div>

      {/* Main Login Card */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-md bg-white dark:bg-[#0d0d0d] rounded-3xl shadow-2xl border border-slate-200 dark:border-white/10 p-6 sm:p-8 space-y-6">
          {/* Logo & Branding */}
          <div className="text-center space-y-2">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center font-black text-2xl shadow-lg shadow-emerald-600/30">
              JJ
            </div>
            <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight font-serif-display">
              {BUSINESS_CONFIG.shortName} Portal Login
            </h1>
            <p className="text-xs text-slate-500 dark:text-[#a39b92]">
              Access your prescription records, loyalty discounts &amp; order history
            </p>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="p-3 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 rounded-xl text-rose-700 dark:text-rose-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Success State */}
          {loginSuccess ? (
            <div className="p-6 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 rounded-2xl text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
              <h3 className="font-bold text-base text-slate-900 dark:text-white font-serif-display">
                Welcome back!
              </h3>
              <p className="text-xs text-slate-600 dark:text-[#a39b92]">
                You are securely signed in as <strong>{identifier}</strong>.
              </p>
              <div className="pt-2 flex flex-col gap-2">
                <Link
                  to="/services"
                  className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-sm transition"
                >
                  Go to Medicine Stock Checker
                </Link>
                <button
                  onClick={() => {
                    setLoginSuccess(false);
                    setPassword('');
                  }}
                  className="text-xs text-slate-500 dark:text-[#a39b92] hover:underline"
                >
                  Sign Out
                </button>
              </div>
            </div>
          ) : (
            /* Login Form */
            <form onSubmit={handleLogin} className="space-y-4 text-xs sm:text-sm">
              {/* Email / Mobile Field */}
              <div>
                <label 
                  htmlFor="identifier"
                  className="block font-semibold text-slate-700 dark:text-[#e0d8d0] mb-1"
                >
                  Email or 10-Digit Mobile Number <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 dark:text-[#6e675f] absolute left-3.5 top-3.5" />
                  <input
                    id="identifier"
                    type="text"
                    required
                    placeholder="e.g. 7870705208 or name@example.com"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-[#121212] border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-[#e0d8d0] placeholder:text-slate-400 dark:placeholder:text-[#6e675f] focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label 
                    htmlFor="password"
                    className="block font-semibold text-slate-700 dark:text-[#e0d8d0]"
                  >
                    Password <span className="text-rose-500">*</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowForgotPassword(true)}
                    className="text-xs text-emerald-600 dark:text-emerald-400 hover:underline font-semibold"
                  >
                    Forgot Password?
                  </button>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 dark:text-[#6e675f] absolute left-3.5 top-3.5" />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-10 py-2.5 bg-slate-50 dark:bg-[#121212] border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-[#e0d8d0] placeholder:text-slate-400 dark:placeholder:text-[#6e675f] focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Remember Me Option */}
              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-600 dark:text-[#a39b92]">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 text-emerald-600 rounded border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-[#121212] focus:ring-emerald-500"
                  />
                  <span>Remember my device</span>
                </label>
                <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> SSL 256-Bit
                </span>
              </div>

              {/* Secure Login Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-400/50 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition active:scale-98 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Verifying Credentials...</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>Secure Sign In</span>
                  </>
                )}
              </button>
            </form>
          )}

          {/* Quick Help & Pharmacist Assist */}
          <div className="pt-4 border-t border-slate-100 dark:border-white/5 text-center space-y-2 text-xs text-slate-500 dark:text-[#a39b92]">
            <p>
              New patient or need medicine without an account?
            </p>
            <div className="flex justify-center gap-3">
              <Link to="/services" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">
                Order as Guest &rarr;
              </Link>
              <span>•</span>
              <a 
                href={`https://wa.me/${BUSINESS_CONFIG.whatsapp}?text=${encodeURIComponent('Hello Jivan Joyti Kendra, I need help with my patient portal account.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline"
              >
                Help Desk
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {showForgotPassword && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-sm bg-white dark:bg-[#0d0d0d] rounded-2xl p-6 shadow-2xl border border-slate-200 dark:border-white/10 space-y-4">
            <div className="flex items-center gap-2 text-emerald-500">
              <KeyRound className="w-5 h-5" />
              <h3 className="font-bold text-base text-slate-900 dark:text-white font-serif-display">Reset Password</h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-[#a39b92]">
              For security, our registered pharmacist will verify your prescription mobile number and send an OTP or reset link directly to your WhatsApp.
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="flex-1 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition"
              >
                Send WhatsApp OTP
              </button>
              <button
                type="button"
                onClick={() => setShowForgotPassword(false)}
                className="py-2 px-3 bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-[#a39b92] hover:dark:text-white rounded-xl text-xs font-semibold transition border dark:border-white/5"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
