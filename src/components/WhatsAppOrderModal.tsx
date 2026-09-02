import React, { useState } from 'react';
import { 
  X, 
  MessageCircle, 
  Phone, 
  Upload, 
  FileText, 
  Check, 
  AlertCircle,
  Clock, 
  MapPin, 
  User, 
  Pill,
  Send
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/siteConfig';

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledMedicine?: string;
}

export const WhatsAppOrderModal: React.FC<WhatsAppOrderModalProps> = ({
  isOpen,
  onClose,
  prefilledMedicine = ''
}) => {
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [medicineName, setMedicineName] = useState(prefilledMedicine);
  const [hasPrescription, setHasPrescription] = useState<'Yes' | 'No'>('No');
  const [prescriptionFileName, setPrescriptionFileName] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('Earliest / Immediate (Within 1-2 Hours)');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPrescriptionFileName(file.name);
      setHasPrescription('Yes');
    }
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    if (!customerName.trim()) {
      setError('Please enter your full name.');
      return;
    }
    if (!phone.trim() || phone.length < 10) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (!medicineName.trim() && !prescriptionFileName) {
      setError('Please enter required medicine name(s) or attach a prescription.');
      return;
    }
    if (!address.trim()) {
      setError('Please enter your delivery address in Masaurhi.');
      return;
    }

    setError('');

    // Format WhatsApp message strictly according to prompt specification
    const text = 
`Hello ${BUSINESS_CONFIG.name}
Medicine Order
Customer Name: ${customerName}
Phone: ${phone}
${email ? `Email: ${email}\n` : ''}Medicine Required: ${medicineName || 'Attached in Prescription'}
Address: ${address}
Prescription: ${hasPrescription}${prescriptionFileName ? ` (File: ${prescriptionFileName})` : ''}
Preferred Time: ${deliveryTime}
Message: ${notes || 'Please confirm medicine availability & total amount.'}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.whatsapp}?text=${encodedText}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div 
        className="relative w-full max-w-xl bg-white dark:bg-[#0d0d0d] rounded-3xl shadow-2xl border border-slate-200 dark:border-white/10 p-5 sm:p-7 text-slate-800 dark:text-[#e0d8d0] my-8"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-full hover:bg-slate-100 dark:hover:bg-white/5 transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-100 dark:border-white/5">
          <div className="w-12 h-12 rounded-2xl bg-emerald-600 flex items-center justify-center text-white shadow-md shrink-0">
            <MessageCircle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-serif-display">
              WhatsApp Medicine Order
            </h3>
            <p className="text-xs text-slate-500 dark:text-[#a39b92]">
              Direct dispatch from {BUSINESS_CONFIG.name}, Masaurhi
            </p>
          </div>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 rounded-xl text-rose-700 dark:text-rose-300 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSendWhatsApp} className="space-y-4 text-xs sm:text-sm">
          {/* Row 1: Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-slate-700 dark:text-[#e0d8d0] mb-1">
                Customer Name <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 dark:text-[#6e675f] absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#121212] border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none dark:text-[#e0d8d0] placeholder:text-slate-400 dark:placeholder:text-[#6e675f] text-xs sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label className="block font-semibold text-slate-700 dark:text-[#e0d8d0] mb-1">
                Mobile Number <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 dark:text-[#6e675f] absolute left-3 top-3" />
                <input
                  type="tel"
                  required
                  placeholder="10-digit number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#121212] border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none dark:text-[#e0d8d0] placeholder:text-slate-400 dark:placeholder:text-[#6e675f] text-xs sm:text-sm"
                />
              </div>
            </div>
          </div>

          {/* Row 2: Email & Delivery Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-slate-700 dark:text-[#e0d8d0] mb-1">
                Email Address <span className="text-slate-400 dark:text-[#6e675f] font-normal">(Optional)</span>
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-[#121212] border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none dark:text-[#e0d8d0] placeholder:text-slate-400 dark:placeholder:text-[#6e675f] text-xs sm:text-sm"
              />
            </div>
            <div>
              <label className="block font-semibold text-slate-700 dark:text-[#e0d8d0] mb-1">
                Preferred Delivery Time
              </label>
              <div className="relative">
                <Clock className="w-4 h-4 text-slate-400 dark:text-[#6e675f] absolute left-3 top-3" />
                <select
                  value={deliveryTime}
                  onChange={(e) => setDeliveryTime(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#121212] border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none dark:text-[#e0d8d0] text-xs sm:text-sm appearance-none"
                >
                  <option>Earliest / Immediate (Within 1-2 Hours)</option>
                  <option>Today Evening (5 PM - 8 PM)</option>
                  <option>Tomorrow Morning (8 AM - 11 AM)</option>
                  <option>Store Pickup (Collect at Counter)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Row 3: Medicine Required */}
          <div>
            <label className="block font-semibold text-slate-700 dark:text-[#e0d8d0] mb-1">
              Medicine Required & Quantity <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <Pill className="w-4 h-4 text-slate-400 dark:text-[#6e675f] absolute left-3 top-3" />
              <textarea
                rows={2}
                required={!prescriptionFileName}
                placeholder="e.g. Baidyanath Chyawanprash (1kg), Dolo 650 (2 strips), Betadine solution (1 bottle)"
                value={medicineName}
                onChange={(e) => setMedicineName(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#121212] border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none dark:text-[#e0d8d0] placeholder:text-slate-400 dark:placeholder:text-[#6e675f] text-xs sm:text-sm"
              />
            </div>
          </div>

          {/* Row 4: Delivery Address */}
          <div>
            <label className="block font-semibold text-slate-700 dark:text-[#e0d8d0] mb-1">
              Delivery Address in Masaurhi / Patna <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-slate-400 dark:text-[#6e675f] absolute left-3 top-3" />
              <input
                type="text"
                required
                placeholder="House / Shop No., Landmark, Taregna / Masaurhi Area"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#121212] border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none dark:text-[#e0d8d0] placeholder:text-slate-400 dark:placeholder:text-[#6e675f] text-xs sm:text-sm"
              />
            </div>
          </div>

          {/* Row 5: Prescription Upload */}
          <div className="p-3 bg-slate-50 dark:bg-white/5 rounded-xl border border-dashed border-slate-300 dark:border-white/15">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-emerald-500" />
                <span className="font-semibold text-slate-800 dark:text-[#e0d8d0]">
                  Upload Prescription Photo
                </span>
              </div>
              <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800/60 rounded-lg text-xs font-semibold hover:bg-emerald-100 transition">
                <Upload className="w-3.5 h-3.5" />
                <span>{prescriptionFileName ? 'Change Photo' : 'Select Photo / PDF'}</span>
                <input
                  type="file"
                  accept="image/*,.pdf"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>
            {prescriptionFileName && (
              <div className="mt-2 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                <Check className="w-3.5 h-3.5" />
                <span>Attached: {prescriptionFileName}</span>
              </div>
            )}
            <p className="text-[11px] text-slate-500 dark:text-[#a39b92] mt-1">
              You can also share the photo directly in the WhatsApp chat window after clicking submit.
            </p>
          </div>

          {/* Row 6: Additional Message / Notes */}
          <div>
            <label className="block font-semibold text-slate-700 dark:text-[#e0d8d0] mb-1">
              Additional Message or Special Instructions
            </label>
            <input
              type="text"
              placeholder="e.g. Please bring change for Rs 500, call before arriving"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 dark:bg-[#121212] border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none dark:text-[#e0d8d0] placeholder:text-slate-400 dark:placeholder:text-[#6e675f] text-xs sm:text-sm"
            />
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
            <button
              type="submit"
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-sm shadow-md transition active:scale-98"
            >
              <Send className="w-4 h-4" />
              <span>Send via WhatsApp</span>
            </button>
            <a
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 py-3 px-5 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-800 dark:text-[#e0d8d0] rounded-xl font-bold text-sm transition border dark:border-white/5"
            >
              <Phone className="w-4 h-4 text-emerald-500" />
              <span>Call Now</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
