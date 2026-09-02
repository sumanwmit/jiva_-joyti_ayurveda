import React, { useState } from 'react';
import { 
  X, 
  ZoomIn, 
  ChevronLeft, 
  ChevronRight, 
  Filter, 
  Sparkles, 
  Camera,
  MapPin
} from 'lucide-react';
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from '../data/galleryData';
import { GalleryItem } from '../types';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { BUSINESS_CONFIG } from '../config/siteConfig';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  const handleOpenLightbox = (item: GalleryItem) => {
    setLightboxItem(item);
  };

  const handleCloseLightbox = () => {
    setLightboxItem(null);
  };

  const handleNext = () => {
    if (!lightboxItem) return;
    const currentIndex = filteredItems.findIndex(i => i.id === lightboxItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setLightboxItem(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!lightboxItem) return;
    const currentIndex = filteredItems.findIndex(i => i.id === lightboxItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setLightboxItem(filteredItems[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-[#e0d8d0]">
      <SEOHead
        title="Photo Gallery | Jivan Joyti Ayurveda Kendra, Taregna Station Road, Masaurhi"
        description="View photos of Jivan Joyti Ayurveda Kendra: Storefront, organized medicine shelves, classical Ayurvedic herb racks, health devices, and consultation counter."
        canonicalPath="/gallery"
        breadcrumbs={[
          { name: 'Photo Gallery', path: '/gallery' }
        ]}
      />

      {/* Breadcrumb */}
      <div className="bg-white dark:bg-[#080808] border-b border-slate-200 dark:border-white/5">
        <Breadcrumb items={[{ name: 'Photo Gallery', path: '/gallery' }]} />
      </div>

      {/* Hero Header */}
      <section className="relative py-14 sm:py-20 bg-gradient-to-b from-[#050505] via-[#090909] to-[#050505] text-[#e0d8d0] border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-emerald-300 text-xs font-semibold backdrop-blur-md">
              <Camera className="w-3.5 h-3.5 text-emerald-400" />
              <span>Store Tour & Inventory Visuals</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-serif-display">
              Store & Inventory Gallery
            </h1>
            <p className="text-[#a39b92] text-sm sm:text-base leading-relaxed">
              Take a virtual walkthrough of our pharmacy on Taregna Station Road, Masaurhi. Experience our hygienic storage, well-organized classical Ayurvedic sections, and modern diagnostic display.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter Pills */}
      <section className="py-6 bg-white dark:bg-[#080808] border-b border-slate-200 dark:border-white/5 sticky top-16 z-30 shadow-xs backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <Filter className="w-4 h-4 text-slate-400 dark:text-[#a39b92] shrink-0 mr-1" />
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-150 ${
                  selectedCategory === cat
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-slate-100 dark:bg-[#121212] text-slate-700 dark:text-[#a39b92] hover:bg-slate-200 dark:hover:bg-[#1a1a1a] dark:hover:text-white border dark:border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => handleOpenLightbox(item)}
                className="group relative rounded-3xl overflow-hidden bg-white dark:bg-[#0d0d0d] border border-slate-200 dark:border-white/10 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col"
              >
                {/* Image Container */}
                <div className="relative aspect-4/3 overflow-hidden bg-slate-100 dark:bg-black">
                  <img
                    src={item.imageUrl}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <ZoomIn className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#050505]/80 backdrop-blur-md text-emerald-300 border border-emerald-500/30">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Caption Card */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-emerald-400 transition font-serif-display">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-[#a39b92] mt-1.5 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[11px] text-slate-400 dark:text-[#6e675f]">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-emerald-500" /> Masaurhi, Patna
                    </span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold group-hover:underline">
                      Click to Zoom &rarr;
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal with Zoom & Navigation */}
      {lightboxItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-md animate-in fade-in duration-200">
          {/* Close Button */}
          <button
            onClick={handleCloseLightbox}
            className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition focus:outline-none border border-white/10"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition hidden sm:flex items-center justify-center focus:outline-none border border-white/10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition hidden sm:flex items-center justify-center focus:outline-none border border-white/10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content */}
          <div 
            className="relative max-w-4xl w-full bg-[#0a0a0a] rounded-3xl overflow-hidden shadow-2xl border border-white/10 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-16/10 sm:aspect-16/9 bg-black flex items-center justify-center overflow-hidden">
              <img
                src={lightboxItem.imageUrl}
                alt={lightboxItem.alt}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="p-6 bg-[#0a0a0a] border-t border-white/10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-800">
                  {lightboxItem.category}
                </span>
                <span className="text-xs text-[#a39b92]">
                  {BUSINESS_CONFIG.name}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white font-serif-display">
                {lightboxItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#a39b92] mt-2 leading-relaxed">
                {lightboxItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
