export interface WigProduct {
  id: string;
  name: string;
  category: 'Lace Wigs' | 'Bobs & Pixies' | 'Curls & Waves' | 'Braided Wigs' | 'Hair Care & Accessories';
  price: number;
  priceNote?: string;
  originalPrice?: number;
  lengths?: string[];
  colors?: string[];
  laceType?: string;
  density?: string;
  description: string;
  features: string[];
  image: string;
  originalFilename?: string;
  badge?: string;
  inStock: boolean;
}

export interface BeautyService {
  id: string;
  title: string;
  category: string;
  priceText: string;
  duration: string;
  description: string;
  includes: string[];
  image: string;
  originalFilename?: string;
  isConfirmed: boolean; // Confirmed vs Proposed as requested by user
  badge?: string;
}

export interface CustomerLook {
  id: string;
  title: string;
  category: 'Sleek Straight' | 'Bouncy Curls' | 'Bob Cuts' | 'Pixie & Waves' | 'Braided Styles' | 'Colored Hair';
  technique: string;
  description: string;
  image: string;
  originalFilename?: string;
  hairUsed: string;
  tag: string;
}

export interface BusinessConfig {
  brandName: string;
  logo?: string;
  phone: string;
  phoneDisplay: string;
  whatsappNumber: string; // international digits only, e.g. 254797238278
  locationName: string;
  address: string;
  email: string;
  openingHours: string;
  currency: string;
  instagram: string;
  tiktok: string;
  facebook: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  serviceId: string;
  wigOption: 'purchase' | 'bring_own' | 'consultation';
  preferredDate: string;
  preferredTime: string;
  notes: string;
}
