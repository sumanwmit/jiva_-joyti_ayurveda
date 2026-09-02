import { GalleryItem } from '../types';

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Store Front & Reception Counter",
    category: "Store Front",
    imageUrl: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=1000&q=80",
    alt: "Jivan Joyti Ayurveda Kendra Storefront at Taregna Station Road Masaurhi",
    description: "Welcoming store counter equipped with computer billing, prescription intake, and friendly pharmacist consultation."
  },
  {
    id: "gal-2",
    title: "Dedicated Ayurvedic Herbal & Bhasma Shelf",
    category: "Ayurvedic Section",
    imageUrl: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1000&q=80",
    alt: "Classical Ayurvedic herbs, Asavas, and Rasayanas shelf",
    description: "Extensive organized collection of classical Ayurvedic formulas, churnas, medicated oils, and rasayanas from Baidyanath, Dabur, and Kottakkal."
  },
  {
    id: "gal-3",
    title: "Organized Prescription Medicine Racks",
    category: "Medicine Shelves",
    imageUrl: "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1000&q=80",
    alt: "Modern medicine shelves with systematic barcode inventory",
    description: "Systematically categorized allopathic tablets, capsules, and syrups for fast, error-free dispensing."
  },
  {
    id: "gal-4",
    title: "Digital Health Devices & Diagnostic Equipment",
    category: "Diagnostics",
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=80",
    alt: "Digital blood pressure monitors, glucometers, and oximeters",
    description: "Display of genuine Omron BP monitors, Accu-Chek glucometers, and portable nebulizers with warranty support."
  },
  {
    id: "gal-5",
    title: "Infant Care & Mother Wellness Section",
    category: "Customer Care",
    imageUrl: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=1000&q=80",
    alt: "Baby care range and maternal supplements",
    description: "Gentle baby skin lotions, herbal massage oils, tear-free shampoos, and diapers."
  },
  {
    id: "gal-6",
    title: "Emergency First Aid & Sterile Surgical Station",
    category: "Diagnostics",
    imageUrl: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1000&q=80",
    alt: "Sterile surgical dressings, antiseptic solutions and bandages",
    description: "Full range of Betadine antiseptics, sterile gauze pads, crepe bandages, and emergency wound care essentials."
  },
  {
    id: "gal-7",
    title: "Cold Chain Temperature-Controlled Storage",
    category: "Medicine Shelves",
    imageUrl: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1000&q=80",
    alt: "Pharmaceutical refrigerator for insulin and vaccines",
    description: "Medical-grade refrigeration preserving vaccine potency, insulin, and sensitive eye drops."
  },
  {
    id: "gal-8",
    title: "Consultation & Health Advisory Desk",
    category: "Customer Care",
    imageUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80",
    alt: "Pharmacist providing prescription guidance to patient",
    description: "Dedicated patient consultation area for dosage explanation, dietary precautions, and lifestyle guidance."
  }
];

export const GALLERY_CATEGORIES = [
  'All',
  'Store Front',
  'Medicine Shelves',
  'Ayurvedic Section',
  'Diagnostics',
  'Customer Care'
] as const;
