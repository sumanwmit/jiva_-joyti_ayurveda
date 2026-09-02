export interface MedicineItem {
  id: string;
  name: string;
  genericName?: string;
  brand: string;
  category: string;
  dosageForm: string;
  mrp: number;
  discountedPrice?: number;
  availableQuantity: number;
  expiry: string;
  status: 'Available' | 'Limited Stock' | 'Out of Stock';
  prescriptionRequired: boolean;
  description: string;
  indications?: string[];
  manufacturer?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  turnaroundTime?: string;
  highlights: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Store Front' | 'Medicine Shelves' | 'Ayurvedic Section' | 'Diagnostics' | 'Customer Care';
  imageUrl: string;
  alt: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  verifiedPurchase: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface HealthTipItem {
  id: string;
  title: string;
  category: string;
  readTime: string;
  snippet: string;
  content: string;
  date: string;
}
