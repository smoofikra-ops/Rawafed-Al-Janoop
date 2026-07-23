export type Language = 'ar' | 'en';

export interface Branch {
  id: string;
  name: Record<Language, string>;
  city: Record<Language, string>;
  address: Record<Language, string>;
  phone: string;
  mapLink: string;
  type: 'headquarters' | 'branch' | 'warehouse';
  image?: string;
  hours: Record<Language, string>;
  iframe?: string;
}

export interface Brand {
  id: string;
  name: Record<Language, string>;
  description: Record<Language, string>;
  logo: string;
  categories: Record<Language, string>[];
}

export interface Product {
  id: string;
  name: Record<Language, string>;
  brandId: string;
  category: Record<Language, string>;
  image: string;
  size?: Record<Language, string>;
}

export interface Service {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  icon: string;
}

export interface Stat {
  id: string;
  value: number;
  label: Record<Language, string>;
  suffix?: string;
}

export interface NavItem {
  id: string;
  label: Record<Language, string>;
  href: string;
}
