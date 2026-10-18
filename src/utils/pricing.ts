export type PackageTier = 'PLATINUM' | 'PREMIUM' | 'GOAT';

export interface Package {
  id: PackageTier;
  name: string;
  badge?: string;
  badgeEn?: string;
  isFeatured?: boolean;
  priceDisplay: string;
  priceDisplayEn: string;
  monthlyPriceMin: number;
  monthlyPriceMax: number;
  videosPerMonth: string;
  photosPerMonth?: string;
  highVolumeProduction: boolean;
  fullSocialManagement: boolean;
  campaignsSpecialShoots: boolean;
  contactManagement: boolean;
  websiteIncluded: boolean;
  webshopIncluded: boolean;
  features: string[];
  featuresEn: string[];
  bestFor: string;
  bestForEn: string;
}

export const PACKAGES: Package[] = [
  {
    id: 'PLATINUM',
    name: 'PLATINUM',
    priceDisplay: '€1.750 p/m',
    priceDisplayEn: '€1,750 /mo',
    monthlyPriceMin: 1750,
    monthlyPriceMax: 1750,
    videosPerMonth: "8 tot 12 video's per maand",
    highVolumeProduction: true,
    fullSocialManagement: true,
    campaignsSpecialShoots: true,
    contactManagement: false,
    websiteIncluded: false,
    webshopIncluded: false,
    features: [
      "8 tot 12 video's per maand",
      "High volume productie",
      "Full social management",
      "Campagnes en speciale shoots"
    ],
    featuresEn: [
      "8 to 12 videos per month",
      "High volume production",
      "Full social management",
      "Campaigns & special shoots"
    ],
    bestFor: 'Bedrijven die willen opschalen met consistente video output en professioneel social beheer.',
    bestForEn: 'Brands ready to scale with consistent monthly video output and full social media management.'
  },
  {
    id: 'PREMIUM',
    name: 'PREMIUM',
    badge: 'Meest gekozen',
    badgeEn: 'Most Popular',
    isFeatured: true,
    priceDisplay: '€2.450 tot €3.000 p/m',
    priceDisplayEn: '€2,450 to €3,000 /mo',
    monthlyPriceMin: 2450,
    monthlyPriceMax: 3000,
    videosPerMonth: "12 tot 16 video's per maand",
    photosPerMonth: "9 foto's",
    highVolumeProduction: true,
    fullSocialManagement: true,
    campaignsSpecialShoots: true,
    contactManagement: true,
    websiteIncluded: true,
    webshopIncluded: false,
    features: [
      "12 tot 16 video's per maand",
      "9 foto's",
      "High volume productie",
      "Full social management",
      "Campagnes en speciale shoots",
      "Contactmanagement",
      "Website"
    ],
    featuresEn: [
      "12 to 16 videos per month",
      "9 editorial photos",
      "High volume production",
      "Full social management",
      "Campaigns & special shoots",
      "Contact & DM management",
      "Custom Website"
    ],
    bestFor: 'Merken die structureel willen opschalen met een complete merkuitstraling: meer video, fotografie, actieve DM-opvolging en een maatwerk website.',
    bestForEn: 'Brands scaling systematically: higher monthly video output, editorial photography, active DM lead handling, and a custom website.'
  },
  {
    id: 'GOAT',
    name: 'GOAT',
    badge: 'Top tier',
    badgeEn: 'Top Tier',
    isFeatured: false,
    priceDisplay: '€3.250 tot €3.500 p/m',
    priceDisplayEn: '€3,250 to €3,500 /mo',
    monthlyPriceMin: 3250,
    monthlyPriceMax: 3500,
    videosPerMonth: "16 tot 20 video's per maand",
    photosPerMonth: "18 foto's",
    highVolumeProduction: true,
    fullSocialManagement: true,
    campaignsSpecialShoots: true,
    contactManagement: true,
    websiteIncluded: true,
    webshopIncluded: true,
    features: [
      "16 tot 20 video's per maand",
      "18 foto's",
      "High volume productie",
      "Full social management",
      "Campagnes en speciale shoots",
      "Contactmanagement",
      "Website",
      "Webshop"
    ],
    featuresEn: [
      "16 to 20 videos per month",
      "18 editorial photos",
      "High volume production",
      "Full social management",
      "Campaigns & special shoots",
      "Contact & DM management",
      "Custom Website",
      "Full E-Commerce Webshop"
    ],
    bestFor: 'Gevestigde merken en e-commerce bedrijven: maximale maandelijkse video- en fotoproductie met een complete, converterende webshop.',
    bestForEn: 'Established brands and e-commerce businesses: maximum monthly video and photo output paired with a high-converting custom webshop.'
  }
];

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'video' | 'shoots' | 'web';
  categoryLabel: string;
  categoryLabelEn: string;
  packageUsed: PackageTier;
  deliverableSummary: string;
  deliverableSummaryEn: string;
  results: {
    viewsOrReach: string;
    productionOutput: string;
    growthOrConversion: string;
  };
  resultsEn: {
    viewsOrReach: string;
    productionOutput: string;
    growthOrConversion: string;
  };
  description: string;
  descriptionEn: string;
  accentColor: string;
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'vanguard-athletics',
    title: 'Vanguard Athletics · High Volume Launch',
    category: 'web',
    categoryLabel: 'Website & Webshop',
    categoryLabelEn: 'Website & Webshop',
    packageUsed: 'GOAT',
    deliverableSummary: "20 video's p/m · 18 foto's · Webshop",
    deliverableSummaryEn: '20 videos /mo · 18 photos · Webshop',
    results: {
      viewsOrReach: '1.8M+ Organic Views',
      productionOutput: "20 video's + 18 foto's p/m",
      growthOrConversion: '+410% E Commerce Omzet'
    },
    resultsEn: {
      viewsOrReach: '1.8M+ Organic Views',
      productionOutput: '20 videos + 18 photos /mo',
      growthOrConversion: '+410% E-Commerce Revenue'
    },
    description: 'Compleet social productietraject met 20 maandelijkse video producties, editorial fotoshoots en een snelle webshop gebouwd voor maximale conversie.',
    descriptionEn: 'End-to-end monthly social production with 20 videos, editorial photo shoots, and a fast storefront built for high conversion.',
    accentColor: '#C6A868'
  },
  {
    id: 'apex-prestige-cars',
    title: 'Apex Prestige Cars · Automotive Branding',
    category: 'video',
    categoryLabel: 'High Volume Video',
    categoryLabelEn: 'High Volume Video',
    packageUsed: 'PREMIUM',
    deliverableSummary: "16 video's p/m · 9 foto's · Website",
    deliverableSummaryEn: '16 videos /mo · 9 photos · Website',
    results: {
      viewsOrReach: '3.4M+ Reels & TikToks',
      productionOutput: "16 cinema grade video's p/m",
      growthOrConversion: '48 Directe Showroom Leads/m'
    },
    resultsEn: {
      viewsOrReach: '3.4M+ Reels & TikToks',
      productionOutput: '16 cinema-grade videos /mo',
      growthOrConversion: '48 Direct Showroom Leads/mo'
    },
    description: 'Cinematische producties op locatie gecombineerd met gerichte short form formats, actief DM contactmanagement en een interactieve showroom website.',
    descriptionEn: 'On-location cinematic automotive productions combined with focused short-form formats, active DM lead management, and an interactive digital showroom website.',
    accentColor: '#FFFFFF'
  },
  {
    id: 'maison-noir',
    title: 'Maison Noir Gastronomy · Seasonal Retainer',
    category: 'shoots',
    categoryLabel: 'Special Shoots & Fotografie',
    categoryLabelEn: 'Special Shoots & Photography',
    packageUsed: 'PLATINUM',
    deliverableSummary: "12 video's p/m · Campagneshoots",
    deliverableSummaryEn: '12 videos /mo · Campaign Shoots',
    results: {
      viewsOrReach: '950K+ Lokale Weergaven',
      productionOutput: "12 video's p/m + menushot",
      growthOrConversion: '100% Volgeboekt op Vrij & Za'
    },
    resultsEn: {
      viewsOrReach: '950K+ Local Views',
      productionOutput: '12 videos /mo + menu shoot',
      growthOrConversion: '100% Booked Out Fri & Sat'
    },
    description: 'Maandelijkse culinaire storytelling en high end sfeerimpressies. Volledig beheer van Instagram en TikTok met wekelijkse planning en community interactie.',
    descriptionEn: 'Monthly culinary storytelling and atmospheric campaign shoots. Full management of Instagram and TikTok including weekly scheduling and community interaction.',
    accentColor: '#C6A868'
  },
  {
    id: 'aurum-horology',
    title: 'Aurum Horology · Luxury Editorial & Shop',
    category: 'web',
    categoryLabel: 'Website & Webshop',
    categoryLabelEn: 'Website & Webshop',
    packageUsed: 'GOAT',
    deliverableSummary: "18 video's p/m · 18 editorial foto's · Webshop",
    deliverableSummaryEn: '18 videos /mo · 18 editorial photos · Webshop',
    results: {
      viewsOrReach: '2.2M+ Reach',
      productionOutput: 'Macro videografie & catalogus',
      growthOrConversion: '3.9x Blended ROAS'
    },
    resultsEn: {
      viewsOrReach: '2.2M+ Reach',
      productionOutput: 'Macro videography & catalog',
      growthOrConversion: '3.9x Blended ROAS'
    },
    description: 'Detailgerichte macro videografie en editorial fotografie voor exclusieve timepieces gekoppeld aan een bespoke Shopify Plus ervaring.',
    descriptionEn: 'Precision macro videography and editorial photography for luxury timepieces paired with a bespoke high-converting e-commerce store.',
    accentColor: '#DFC282'
  },
  {
    id: 'elevate-clinic',
    title: 'Elevate Aesthetics · Clinic Social & Leads',
    category: 'video',
    categoryLabel: 'High Volume Video',
    categoryLabelEn: 'High Volume Video',
    packageUsed: 'PREMIUM',
    deliverableSummary: "14 video's p/m · 9 foto's · Contactbeheer",
    deliverableSummaryEn: '14 videos /mo · 9 photos · DM Lead Mgmt',
    results: {
      viewsOrReach: '1.2M+ Video Views',
      productionOutput: "14 video's + artsenportretten",
      growthOrConversion: '+190 Behandelingen p/m'
    },
    resultsEn: {
      viewsOrReach: '1.2M+ Video Views',
      productionOutput: '14 videos + specialist portraits',
      growthOrConversion: '+190 Bookings /mo'
    },
    description: 'Educatieve en trust building short form videocontent gekoppeld aan 7 dagen per week reactief DM beheer die geïnteresseerden omzet in behandelafspraken.',
    descriptionEn: 'Educational and authority-building short-form video content paired with 7-day reactive DM management converting inquiries directly into clinic bookings.',
    accentColor: '#FFFFFF'
  },
  {
    id: 'kinetix-apparel',
    title: 'Kinetix Performance · Campaign Drop',
    category: 'shoots',
    categoryLabel: 'Special Shoots & Fotografie',
    categoryLabelEn: 'Special Shoots & Photography',
    packageUsed: 'PLATINUM',
    deliverableSummary: "12 video's p/m · High energy campagne",
    deliverableSummaryEn: '12 videos /mo · High-Energy Campaign',
    results: {
      viewsOrReach: '1.6M+ Views',
      productionOutput: "12 video's + atletenshoot",
      growthOrConversion: '+32.000 Volgers in 90 dagen'
    },
    resultsEn: {
      viewsOrReach: '1.6M+ Views',
      productionOutput: '12 videos + athlete shoot',
      growthOrConversion: '+32,000 Followers in 90 Days'
    },
    description: 'High energy fitness content met atleten op toplocaties. Hoge retentie hooks en sound design die organisch miljoenen views genereren.',
    descriptionEn: 'High-energy athletic campaign content filmed at premier locations. High-retention hooks and custom sound design generating millions of organic views.',
    accentColor: '#C6A868'
  }
];

export function getPackageById(id: string): Package | undefined {
  return PACKAGES.find(p => p.id === id);
}

export function filterPortfolioItems(items: PortfolioItem[], category: string): PortfolioItem[] {
  if (!category || category === 'all') {
    return items;
  }
  return items.filter(item => item.category === category);
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  packageSelected: string;
  message: string;
}

export function validateContactForm(
  data: ContactFormData,
  lang: 'NL' | 'EN' = 'NL'
): { isValid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};
  const isEn = lang === 'EN';

  if (!data.name || data.name.trim().length < 2) {
    errors.name = isEn ? 'Please enter a valid name.' : 'Vul alstublieft een geldige naam in.';
  }
  if (!data.company || data.company.trim().length < 2) {
    errors.company = isEn ? 'Please enter your company name.' : 'Vul alstublieft een bedrijfsnaam in.';
  }
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = isEn ? 'Please enter a valid email address.' : 'Vul een geldig e-mailadres in.';
  }
  if (!data.phone || data.phone.trim().length < 8) {
    errors.phone = isEn
      ? 'Please enter a valid phone or WhatsApp number.'
      : 'Vul een geldig telefoonnummer of WhatsApp nummer in.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

export function recommendPackage(needs: {
  needsWebshop: boolean;
  needsWebsite: boolean;
  highVolumeGoal: 'standard' | 'high' | 'maximum';
}): PackageTier {
  if (needs.needsWebshop || needs.highVolumeGoal === 'maximum') {
    return 'GOAT';
  }
  if (needs.needsWebsite || needs.highVolumeGoal === 'high') {
    return 'PREMIUM';
  }
  return 'PLATINUM';
}
