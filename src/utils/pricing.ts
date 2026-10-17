export type PackageTier = 'PLATINUM' | 'PREMIUM' | 'GOAT';

export interface Package {
  id: PackageTier;
  name: string;
  badge?: string;
  isFeatured?: boolean;
  priceDisplay: string;
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
  bestFor: string;
}

export const PACKAGES: Package[] = [
  {
    id: 'PLATINUM',
    name: 'PLATINUM',
    priceDisplay: '€1.750 p/m',
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
    bestFor: 'Bedrijven die willen opschalen met consistente video output en professioneel social beheer.'
  },
  {
    id: 'PREMIUM',
    name: 'PREMIUM',
    badge: 'Meest gekozen',
    isFeatured: true,
    priceDisplay: '€2.450 tot €3.000 p/m',
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
    bestFor: 'Merken die volledige markt dominantie willen: meer video, fotografie, actieve DM opvolging en een high end website.'
  },
  {
    id: 'GOAT',
    name: 'GOAT',
    badge: 'Top tier',
    isFeatured: false,
    priceDisplay: '€3.250 tot €3.500 p/m',
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
    bestFor: 'Gevestigde spelers en e commerce merken: maximale video en fotoproductie met complete converterende webshop.'
  }
];

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'video' | 'shoots' | 'web';
  categoryLabel: string;
  packageUsed: PackageTier;
  deliverableSummary: string;
  results: {
    viewsOrReach: string;
    productionOutput: string;
    growthOrConversion: string;
  };
  description: string;
  accentColor: string;
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'vanguard-athletics',
    title: 'Vanguard Athletics · High Volume Launch',
    category: 'web',
    categoryLabel: 'Website & Webshop',
    packageUsed: 'GOAT',
    deliverableSummary: "20 video's p/m · 18 foto's · Webshop",
    results: {
      viewsOrReach: '1.8M+ Organic Views',
      productionOutput: "20 video's + 18 foto's p/m",
      growthOrConversion: '+410% E Commerce Omzet'
    },
    description: 'Volledige social dominantie campagne met 20 maandelijkse short form producties, editorial fotoshoots en een ultra snelle webshop geoptimaliseerd voor hoge conversie.',
    accentColor: '#C6A868'
  },
  {
    id: 'apex-prestige-cars',
    title: 'Apex Prestige Cars · Automotive Branding',
    category: 'video',
    categoryLabel: 'High Volume Video',
    packageUsed: 'PREMIUM',
    deliverableSummary: "16 video's p/m · 9 foto's · Website",
    results: {
      viewsOrReach: '3.4M+ Reels & TikToks',
      productionOutput: "16 cinema grade video's p/m",
      growthOrConversion: '48 Directe Showroom Leads/m'
    },
    description: 'Cinematische videoformaten op locatie gecombineerd met snelle virale short form edits, actief DM contactmanagement en een interactieve showroom website.',
    accentColor: '#FFFFFF'
  },
  {
    id: 'maison-noir',
    title: 'Maison Noir Gastronomy · Seasonal Retainer',
    category: 'shoots',
    categoryLabel: 'Special Shoots & Fotografie',
    packageUsed: 'PLATINUM',
    deliverableSummary: "12 video's p/m · Campagneshoots",
    results: {
      viewsOrReach: '950K+ Lokale Weergaven',
      productionOutput: "12 video's p/m + menushot",
      growthOrConversion: '100% Volgeboekt op Vrij & Za'
    },
    description: 'Maandelijkse culinaire storytelling en high end sfeerimpressies. Volledig beheer van Instagram en TikTok met wekelijkse planning en community interactie.',
    accentColor: '#C6A868'
  },
  {
    id: 'aurum-horology',
    title: 'Aurum Horology · Luxury Editorial & Shop',
    category: 'web',
    categoryLabel: 'Website & Webshop',
    packageUsed: 'GOAT',
    deliverableSummary: "18 video's p/m · 18 editorial foto's · Webshop",
    results: {
      viewsOrReach: '2.2M+ Reach',
      productionOutput: 'Macro videografie & catalogus',
      growthOrConversion: '3.9x Blended ROAS'
    },
    description: 'Detailgerichte macro videografie en editorial fotografie voor exclusieve timepieces gekoppeld aan een bespoke Shopify Plus ervaring.',
    accentColor: '#DFC282'
  },
  {
    id: 'elevate-clinic',
    title: 'Elevate Aesthetics · Clinic Social & Leads',
    category: 'video',
    categoryLabel: 'High Volume Video',
    packageUsed: 'PREMIUM',
    deliverableSummary: "14 video's p/m · 9 foto's · Contactbeheer",
    results: {
      viewsOrReach: '1.2M+ Video Views',
      productionOutput: "14 video's + artsenportretten",
      growthOrConversion: '+190 Behandelingen p/m'
    },
    description: 'Educatieve en trust building short form videocontent gekoppeld aan 7 dagen per week reactief DM beheer die geïnteresseerden omzet in behandelafspraken.',
    accentColor: '#FFFFFF'
  },
  {
    id: 'kinetix-apparel',
    title: 'Kinetix Performance · Campaign Drop',
    category: 'shoots',
    categoryLabel: 'Special Shoots & Fotografie',
    packageUsed: 'PLATINUM',
    deliverableSummary: "12 video's p/m · High energy campagne",
    results: {
      viewsOrReach: '1.6M+ Views',
      productionOutput: "12 video's + atletenshoot",
      growthOrConversion: '+32.000 Volgers in 90 dagen'
    },
    description: 'High energy fitness content met atleten op toplocaties. Hoge retentie hooks en sound design die organisch miljoenen views genereren.',
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

export function validateContactForm(data: ContactFormData): { isValid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Vul alstublieft een geldige naam in.';
  }
  if (!data.company || data.company.trim().length < 2) {
    errors.company = 'Vul alstublieft een bedrijfsnaam in.';
  }
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Vul een geldig e-mailadres in.';
  }
  if (!data.phone || data.phone.trim().length < 8) {
    errors.phone = 'Vul een geldig telefoonnummer of WhatsApp nummer in.';
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
