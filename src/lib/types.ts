export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  duration: string;
  priceFrom: string;
  tags: string[];
}

export interface PriceCategory {
  id: string;
  title: string;
  items: { name: string; price: string }[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  instagram: string;
  image: string;
  initials: string;
}

export interface GalleryItem {
  id: string;
  category: string;
  title: string;
  image: string;
  size: "tall" | "wide" | "square";
  beforeAfter?: boolean;
}

export interface Review {
  id: string;
  name: string;
  service: string;
  rating: number;
  text: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface Settings {
  brand: string;
  brandLatin: string;
  tagline: string;
  phone: string;
  phoneHref: string;
  email: string;
  instagram: string;
  address: string;
  addressShort: string;
  mapUrl: string;
  mapEmbedUrl: string;
  workingHours: { days: string; hours: string }[];
  socials: { instagram: string; facebook: string; telegram: string };
}
