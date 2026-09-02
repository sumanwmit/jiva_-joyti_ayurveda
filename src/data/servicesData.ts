import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "serv-ayurveda",
    title: "Genuine Ayurvedic & Classical Herbals",
    category: "Ayurvedic Healthcare",
    shortDesc: "100% authentic Bhasmas, Asavas, Arishtas, Churnas, Ghrits, and patent herbal formulations from certified pharmacies.",
    fullDesc: "We specialize in authentic, certified Ayurvedic medications from renowned traditional pharmacies like Baidyanath, Dabur, Kottakkal Arya Vaidya Sala, Patanjali, and Zandu. We stock classical formulations for chronic joint pain, digestive disorders, diabetes management, immunity, skin health, and rejuvenation.",
    iconName: "Leaf",
    features: [
      "100% Authentic herbal formulations",
      "Pure classical Asava, Arishta & Rasayanas",
      "Proper storage in temperature-controlled racks",
      "Guidance on herbal dosage and Anupana (adjuvant)"
    ],
    turnaroundTime: "Instant / In-Stock",
    highlights: ["Baidyanath", "Kottakkal", "Dabur", "Himalaya", "Zandu"]
  },
  {
    id: "serv-prescription",
    title: "Allopathic & Prescription Medicines",
    category: "Prescription Medicines",
    shortDesc: "Accurate dispensing of doctor-prescribed medications with batch validation, genuine sourcing, and cold-chain storage.",
    fullDesc: "Full inventory of essential antibiotics, anti-hypertensives, cardiovascular medications, antidiabetic drugs, gastrointestinal therapies, and pain modulators sourced directly from top pharmaceutical manufacturers.",
    iconName: "Pill",
    features: [
      "Strict prescription verification & dosage advisory",
      "Cold-chain insulin & vaccine refrigeration",
      "Batch tracking with clear expiry dates",
      "Discounts up to 15% on regular chronic prescriptions"
    ],
    turnaroundTime: "Ready in 5-10 mins",
    highlights: ["Cipla", "Sun Pharma", "Mankind", "Abbott", "Alkem"]
  },
  {
    id: "serv-devices",
    title: "Health Devices & Medical Equipment",
    category: "Health Devices",
    shortDesc: "Digital BP monitors, Glucometers, Nebulizers, Oximeters, Thermometers, and Orthopedic supports.",
    fullDesc: "We provide state-of-the-art diagnostic and medical support equipment for home monitoring. Includes brand warranties, live demonstration for seniors, and replacement strip packs.",
    iconName: "Activity",
    features: [
      "Digital BP monitors with one-touch operation",
      "Blood glucose meters with test strips",
      "Pediatric and adult compressor nebulizers",
      "Fingertip pulse oximeters and digital thermometers"
    ],
    turnaroundTime: "Same Day In-Store Demo",
    highlights: ["Omron", "Accu-Chek", "Dr. Morepen", "Philips"]
  },
  {
    id: "serv-baby-care",
    title: "Baby Care & Mother Wellness",
    category: "Baby Care",
    shortDesc: "Safe, dermatologically tested baby foods, gentle hygiene items, massage oils, diapers, and maternal nutrition.",
    fullDesc: "Complete care range for infants and new mothers. Hypoallergenic baby shampoos, herbal massage oils, diapers, feeding bottles, teething aids, and lactational herbal supplements.",
    iconName: "HeartHandshake",
    features: [
      "Ayurvedic infant massage oils & gentle cleansers",
      "Tear-free shampoos and rash creams",
      "Premium diapers with wetness indicators",
      "Maternal nutrition and lactational tonics"
    ],
    turnaroundTime: "Instant",
    highlights: ["Himalaya Baby", "Sebamed", "Pampers", "Nestle"]
  },
  {
    id: "serv-surgicals",
    title: "Surgical Supplies & First Aid Essentials",
    category: "Medical Equipment",
    shortDesc: "Hospital-grade bandages, sterile dressings, antiseptic solutions, syringes, IV sets, and emergency trauma kits.",
    fullDesc: "Essential surgical consumables and sterile wound care supplies for clinical use, local emergencies, home nursing, and post-operative recovery.",
    iconName: "Stethoscope",
    features: [
      "Sterile gauze, cotton rolls, and micropore tapes",
      "Betadine, spirit, and hydrogen peroxide solutions",
      "Crepe bandages, traction kits, and splints",
      "Disinfection wipes and disposable gloves"
    ],
    turnaroundTime: "Available 24/7 on call",
    highlights: ["Win-Medicare", "Romsons", "3M", "Dettol"]
  },
  {
    id: "serv-consultation",
    title: "Ayurvedic Health Advisory & BP/Sugar Checks",
    category: "Consultation & Diagnostics",
    shortDesc: "Walk-in blood pressure & random blood sugar testing with basic diet and Ayurvedic lifestyle guidance.",
    fullDesc: "Our qualified pharmacy team provides complimentary blood pressure checks, rapid glucose screening, body weight monitoring, and basic herbal diet advice tailored to your Prakriti.",
    iconName: "ShieldCheck",
    features: [
      "Free walk-in Blood Pressure checks",
      "Instant Blood Sugar testing (nominal strip charge)",
      "Medication adherence counseling",
      "Guidance on seasonal Ayurvedic regimens (Ritucharya)"
    ],
    turnaroundTime: "Walk-in Welcome (No appointment needed)",
    highlights: ["Free BP Check", "Diet Advice", "Lifestyle Tips"]
  }
];

export const MEDICINE_CATEGORIES = [
  { name: "All Categories", count: 24, icon: "LayoutGrid" },
  { name: "Ayurvedic Health & Immunity", count: 8, icon: "Leaf" },
  { name: "Prescription Medicines", count: 6, icon: "Pill" },
  { name: "Health Devices & Medical Equipment", count: 4, icon: "Activity" },
  { name: "Baby Care & Hygiene", count: 3, icon: "HeartHandshake" },
  { name: "Joint & Pain Management", count: 4, icon: "Flame" },
  { name: "Nutritional Supplements", count: 3, icon: "Sparkles" },
  { name: "Surgical Supplies & First Aid", count: 2, icon: "Stethoscope" }
];
