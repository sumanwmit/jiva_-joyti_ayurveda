import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  MessageCircle, 
  Sparkles, 
  Info,
  Calendar,
  Layers,
  ArrowUpDown
} from 'lucide-react';
import medicineData from '../data/medicineStock.json';
import { MedicineItem } from '../types';
import { BUSINESS_CONFIG } from '../config/siteConfig';

interface MedicineStockCheckerProps {
  onOrderClick?: (medicineName: string) => void;
  standalone?: boolean;
}

export const MedicineStockChecker: React.FC<MedicineStockCheckerProps> = ({ 
  onOrderClick,
  standalone = false
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedMedicine, setSelectedMedicine] = useState<MedicineItem | null>(null);

  // Cast JSON data
  const inventory: MedicineItem[] = useMemo(() => medicineData as MedicineItem[], []);

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set(inventory.map(m => m.category));
    return ['All', ...Array.from(cats)];
  }, [inventory]);

  // Filtered list
  const filteredMedicines = useMemo(() => {
    return inventory.filter((item) => {
      const matchesSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.genericName && item.genericName.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.indications && item.indications.some(ind => ind.toLowerCase().includes(searchQuery.toLowerCase())));

      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesStatus = statusFilter === 'All' || item.status === statusFilter;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [inventory, searchQuery, selectedCategory, statusFilter]);

  const handleOrder = (item: MedicineItem) => {
    if (onOrderClick) {
      onOrderClick(`${item.name} (${item.brand}) - Rs.${item.discountedPrice || item.mrp}`);
    } else {
      const msg = encodeURIComponent(
        `Hello ${BUSINESS_CONFIG.name}, I would like to order ${item.name} by ${item.brand} (MRP: Rs.${item.mrp}). Please confirm availability.`
      );
      window.open(`https://wa.me/${BUSINESS_CONFIG.whatsapp}?text=${msg}`, '_blank');
    }
  };

  const getStatusBadge = (status: MedicineItem['status']) => {
    switch (status) {
      case 'Available':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Available
          </span>
        );
      case 'Limited Stock':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
            <AlertTriangle className="w-3.5 h-3.5" />
            Limited Stock
          </span>
        );
      case 'Out of Stock':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-800 dark:bg-rose-950/80 dark:text-rose-300 border border-rose-200 dark:border-rose-800">
            <XCircle className="w-3.5 h-3.5" />
            Out of Stock
          </span>
        );
    }
  };

  return (
    <div id="medicine-stock-checker" className={`w-full ${standalone ? 'py-4' : 'my-8'}`}>
      <div className="bg-white dark:bg-[#0a0a0a] rounded-3xl border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden">
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-900/80 p-6 md:p-8 text-white relative overflow-hidden border-b border-white/10">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-xs font-semibold tracking-wider uppercase mb-3 text-emerald-300">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              Real-Time Pharmacy Stock Search
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight font-serif-display">
              Medicine Availability & Stock Checker
            </h3>
            <p className="text-[#a39b92] text-sm md:text-base mt-2 leading-relaxed">
              Instantly check in-store stock for Ayurvedic formulations, allopathic prescription drugs, wellness supplements, and health devices at Masaurhi.
            </p>
          </div>
          {/* Decorative Leaf Graphic */}
          <div className="absolute right-0 bottom-0 translate-x-8 translate-y-8 opacity-5 pointer-events-none">
            <div className="w-64 h-64 rounded-full border-8 border-white" />
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="p-5 md:p-8 bg-slate-50 dark:bg-[#070707] border-b border-slate-200 dark:border-white/5 space-y-4">
          <div className="flex flex-col md:flex-row gap-3">
            {/* Instant Search Bar */}
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by Medicine Name, Brand (e.g. Baidyanath, Dolo, Omron), or Health Need..."
                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-[#121212] border border-slate-200 dark:border-white/10 rounded-2xl text-sm font-medium text-slate-900 dark:text-[#e0d8d0] placeholder-slate-400 dark:placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-3.5 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-white bg-slate-100 dark:bg-white/10 px-2 py-0.5 rounded-full"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Dropdown */}
            <div className="w-full md:w-64">
              <div className="relative">
                <Layers className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-10 pr-8 py-3 bg-white dark:bg-[#121212] border border-slate-200 dark:border-white/10 rounded-2xl text-xs sm:text-sm font-medium text-slate-800 dark:text-[#e0d8d0] focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm appearance-none"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat} className="dark:bg-[#121212] dark:text-[#e0d8d0]">
                      {cat === 'All' ? 'All Categories' : cat}
                    </option>
                  ))}
                </select>
                <ArrowUpDown className="w-3.5 h-3.5 text-slate-400 absolute right-3.5 top-4 pointer-events-none" />
              </div>
            </div>

            {/* Status Filter */}
            <div className="w-full md:w-48">
              <div className="relative">
                <Filter className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full pl-10 pr-8 py-3 bg-white dark:bg-[#121212] border border-slate-200 dark:border-white/10 rounded-2xl text-xs sm:text-sm font-medium text-slate-800 dark:text-[#e0d8d0] focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm appearance-none"
                >
                  <option value="All" className="dark:bg-[#121212] dark:text-[#e0d8d0]">All Statuses</option>
                  <option value="Available" className="dark:bg-[#121212] dark:text-[#e0d8d0]">In Stock Only</option>
                  <option value="Limited Stock" className="dark:bg-[#121212] dark:text-[#e0d8d0]">Limited Stock</option>
                  <option value="Out of Stock" className="dark:bg-[#121212] dark:text-[#e0d8d0]">Out of Stock</option>
                </select>
                <ArrowUpDown className="w-3.5 h-3.5 text-slate-400 absolute right-3.5 top-4 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Quick Stats Summary */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 dark:text-[#a39b92] pt-1">
            <div className="flex items-center gap-3">
              <span>Showing <strong className="text-slate-900 dark:text-white">{filteredMedicines.length}</strong> products</span>
              <span className="text-white/20">•</span>
              <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" /> 100% Genuine Sourcing
              </span>
            </div>
            <div className="text-slate-400 dark:text-[#6e675f]">
              Updated Live from Taregna Kendra Database
            </div>
          </div>
        </div>

        {/* Results Table / Grid */}
        <div className="overflow-x-auto">
          {filteredMedicines.length === 0 ? (
            <div className="p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center mx-auto mb-4 text-slate-400">
                <Search className="w-8 h-8" />
              </div>
              <h4 className="text-base font-bold text-slate-800 dark:text-white">
                No matching medicines found
              </h4>
              <p className="text-xs text-slate-500 dark:text-[#a39b92] max-w-md mx-auto mt-1 mb-5">
                We might have this medicine in our physical stock or can arrange it for you within 24 hours.
              </p>
              <button
                onClick={() => {
                  const msg = encodeURIComponent(`Hello Jivan Joyti Kendra, I am inquiring about availability for: "${searchQuery}"`);
                  window.open(`https://wa.me/${BUSINESS_CONFIG.whatsapp}?text=${msg}`, '_blank');
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition shadow-md shadow-emerald-950"
              >
                <MessageCircle className="w-4 h-4" />
                Inquire on WhatsApp for &quot;{searchQuery || 'Medicine'}&quot;
              </button>
            </div>
          ) : (
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-100/75 dark:bg-[#0f0f0f] border-b border-slate-200 dark:border-white/10 text-slate-600 dark:text-[#a39b92] font-bold uppercase tracking-[0.15em] text-[10px]">
                  <th className="py-3.5 px-4 sm:px-6">Medicine & Brand</th>
                  <th className="py-3.5 px-3">Category</th>
                  <th className="py-3.5 px-3">MRP / Price</th>
                  <th className="py-3.5 px-3">Expiry</th>
                  <th className="py-3.5 px-3">Availability</th>
                  <th className="py-3.5 px-4 sm:px-6 text-right">Quick Order</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-white/5">
                {filteredMedicines.map((item) => (
                  <tr 
                    key={item.id}
                    className="hover:bg-emerald-50/40 dark:hover:bg-white/[0.03] transition-colors group"
                  >
                    {/* Name & Brand */}
                    <td className="py-4 px-4 sm:px-6">
                      <div className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition">
                        {item.name}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-[#a39b92] flex items-center gap-2 mt-0.5">
                        <span className="font-semibold text-emerald-700 dark:text-emerald-400">{item.brand}</span>
                        <span className="text-white/20">•</span>
                        <span>{item.dosageForm}</span>
                        {item.prescriptionRequired && (
                          <span className="bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300 dark:border dark:border-amber-800/50 text-[10px] font-bold px-1.5 py-0.2 rounded">
                            Rx Required
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Category */}
                    <td className="py-4 px-3 text-slate-600 dark:text-[#a39b92]">
                      <span className="inline-block bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-[#e0d8d0] px-2.5 py-1 rounded-lg text-xs font-medium border dark:border-white/5">
                        {item.category}
                      </span>
                    </td>

                    {/* Pricing */}
                    <td className="py-4 px-3">
                      <div className="font-extrabold text-slate-900 dark:text-white">
                        ₹{item.discountedPrice || item.mrp}
                      </div>
                      {item.discountedPrice && item.discountedPrice < item.mrp && (
                        <div className="text-[11px] text-slate-400 dark:text-[#6e675f] line-through">
                          MRP: ₹{item.mrp}
                        </div>
                      )}
                    </td>

                    {/* Expiry */}
                    <td className="py-4 px-3 text-slate-500 dark:text-[#a39b92]">
                      <div className="flex items-center gap-1 text-xs">
                        <Calendar className="w-3.5 h-3.5 text-slate-400 dark:text-[#6e675f]" />
                        <span>{item.expiry}</span>
                      </div>
                    </td>

                    {/* Status Badge */}
                    <td className="py-4 px-3">
                      {getStatusBadge(item.status)}
                    </td>

                    {/* Action Button */}
                    <td className="py-4 px-4 sm:px-6 text-right">
                      {item.status !== 'Out of Stock' ? (
                        <button
                          onClick={() => handleOrder(item)}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-sm shadow-emerald-950 transition active:scale-95"
                          title="Order this medicine on WhatsApp"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>Order</span>
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            const msg = encodeURIComponent(`Hello Jivan Joyti Kendra, please notify me when "${item.name}" is restocked.`);
                            window.open(`https://wa.me/${BUSINESS_CONFIG.whatsapp}?text=${msg}`, '_blank');
                          }}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-600 dark:text-[#a39b92] font-medium text-xs transition border dark:border-white/5"
                        >
                          <span>Request Restock</span>
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Footer Note */}
        <div className="p-4 bg-slate-50 dark:bg-[#070707] border-t border-slate-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-[#a39b92]">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Need a medicine not listed here? We stock over 3,000+ formulations in store.</span>
          </div>
          <button
            onClick={() => {
              const msg = encodeURIComponent(`Hello Jivan Joyti Ayurveda Kendra, I would like to inquire about medicine availability for my prescription.`);
              window.open(`https://wa.me/${BUSINESS_CONFIG.whatsapp}?text=${msg}`, '_blank');
            }}
            className="text-emerald-600 dark:text-emerald-400 hover:underline font-bold whitespace-nowrap"
          >
            Direct WhatsApp Prescription Inquiry &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};
