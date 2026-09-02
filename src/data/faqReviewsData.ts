import { FAQItem, TestimonialItem, HealthTipItem } from '../types';

export const FAQS_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "Do you offer genuine Ayurvedic medicines from certified brands?",
    answer: "Yes, 100%. We stock authentic classical and proprietary medicines from top certified manufacturers including Shree Baidyanath, Dabur India, Patanjali Divya Pharmacy, Himalaya Wellness, Kottakkal Arya Vaidya Sala, and Zandu.",
    category: "Medicines & Authenticity"
  },
  {
    id: "faq-2",
    question: "How can I order medicines through WhatsApp?",
    answer: "Simply click the 'WhatsApp Order' button on our website or text us at +91 7870705208. Share a photo of your doctor's prescription or the medicine names along with your address. Our pharmacist will confirm availability, price, and dispatch details promptly.",
    category: "Ordering & Delivery"
  },
  {
    id: "faq-3",
    question: "Is home delivery available in Masaurhi and surrounding areas?",
    answer: "Yes, we provide fast local doorstep delivery across Masaurhi town, Taregna Railway Station road, and nearby local localities in Patna district. Urgent and emergency orders are prioritized.",
    category: "Ordering & Delivery"
  },
  {
    id: "faq-4",
    question: "Do I need a prescription to buy medicines?",
    answer: "Prescription-only drugs (Schedule H / H1 antibiotics, chronic therapies) require a valid doctor's prescription. OTC items, herbal syrups, supplements, baby care, and standard Ayurvedic health tonics can be purchased directly.",
    category: "Prescriptions"
  },
  {
    id: "faq-5",
    question: "What are your operating hours?",
    answer: "We are open Monday through Sunday from 7:00 AM to 10:30 PM. For emergency prescription needs outside regular hours, our phone line (+91 7870705208) provides 24/7 on-call emergency assistance.",
    category: "Store Hours"
  },
  {
    id: "faq-6",
    question: "Can I check medicine stock availability online?",
    answer: "Yes! Use our interactive 'Medicine Stock Checker' tab on the website to search by medicine name, brand, or health category to view real-time availability and order instantly on WhatsApp.",
    category: "Stock Checker"
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "rev-1",
    name: "Ramesh Kumar Sharma",
    location: "Taregna Station Road, Masaurhi",
    rating: 5,
    date: "August 2026",
    comment: "Best medical store in Masaurhi. Rare Ayurvedic herbs and classical Baidyanath medicines that are hard to find in local shops are always readily available here. Genuine bill and polite staff.",
    verifiedPurchase: true
  },
  {
    id: "rev-2",
    name: "Dr. Anjali Verma",
    location: "Masaurhi Main Market, Patna",
    rating: 5,
    date: "July 2026",
    comment: "I always recommend Jivan Joyti Ayurveda Kendra to my patients. Their strict storage protocols, genuine medicines, and accurate dispensing make them the most trustworthy pharmacy in Taregna.",
    verifiedPurchase: true
  },
  {
    id: "rev-3",
    name: "Sunil Prasad",
    location: "Patna - Masaurhi Road",
    rating: 5,
    date: "August 2026",
    comment: "WhatsApp ordering is super convenient. Sent the prescription photo at 9 AM and received all diabetes medicines and Omron BP machine with warranty card within an hour.",
    verifiedPurchase: true
  },
  {
    id: "rev-4",
    name: "Pooja Devi",
    location: "Gandhi Nagar, Masaurhi",
    rating: 5,
    date: "June 2026",
    comment: "Very helpful Vaidya and pharmacist. They explained the exact dosage of Maharasnadi Kadha and diet precautions for my mother's knee pain. Great relief within two weeks.",
    verifiedPurchase: true
  }
];

export const HEALTH_TIPS_DATA: HealthTipItem[] = [
  {
    id: "tip-1",
    title: "5 Ayurvedic Herbs for Daily Immunity in Changing Weather",
    category: "Ayurvedic Wellness",
    readTime: "3 min read",
    date: "September 2026",
    snippet: "Discover how Giloy, Tulsi, Amla, Ashwagandha, and Turmeric shield your respiratory tract and enhance vital Ojas naturally.",
    content: "According to Ayurveda, strong Ojas (vital immunity) protects the body from seasonal viral attacks. Incorporating freshly crushed Giloy juice or Chyawanprash alongside warm turmeric milk helps balance Vata and Kapha doshas during weather transitions."
  },
  {
    id: "tip-2",
    title: "Managing Joint Stiffness Naturally During Monsoon & Winter",
    category: "Pain Management",
    readTime: "4 min read",
    date: "August 2026",
    snippet: "Tips on Abhyanga (warm oil massage) using Mahanarayan or Peedantak Taila and anti-inflammatory herbal decoctions.",
    content: "Cold and humid conditions aggravate Vata in joints. Regular application of warm medicated herbal oil followed by gentle fomentation reduces stiffness and preserves synovial fluid in knees and spine."
  },
  {
    id: "tip-3",
    title: "Safe Medicine Storage: Why Temperature Control Matters",
    category: "Medicine Care",
    readTime: "2 min read",
    date: "August 2026",
    snippet: "Essential guidelines to keep your daily medicines, syrups, and insulin potent, safe, and effective at home.",
    content: "Never store medicines in moist bathrooms or direct sunlight. Insulin and probiotic syrups must be kept in the refrigerator middle rack (2-8°C), never in the freezer compartment."
  }
];

export const WHY_CHOOSE_US = [
  {
    icon: "ShieldCheck",
    title: "100% Genuine & Certified",
    description: "Sourced directly from authorized pharmaceutical distributors with batch verification."
  },
  {
    icon: "Truck",
    title: "Quick Local Delivery",
    description: "Doorstep delivery across Masaurhi and Taregna Station areas in record time."
  },
  {
    icon: "MessageCircle",
    title: "Instant WhatsApp Ordering",
    description: "Send prescription photos on WhatsApp at 7870705208 for swift confirmation."
  },
  {
    icon: "Leaf",
    title: "Rare Classical Ayurveda",
    description: "Extensive selection of classical Bhasmas, Asavas, and Kottakkal herbal formulations."
  },
  {
    icon: "Percent",
    title: "Fair Pricing & Discounts",
    description: "Transparent billing with generous concessions on chronic life-saving medications."
  },
  {
    icon: "Clock",
    title: "7 AM - 10:30 PM & 24/7 Emergency",
    description: "Extended daily counter hours and on-call night emergency assistance."
  }
];
