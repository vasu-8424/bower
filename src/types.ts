/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface VegetableItem {
  id: string;
  name: string;
  category: 'daily' | 'leafy' | 'fresh' | 'beans';
  image: string;
  unit: string;
  rate: number;
  popular?: boolean;
  description?: string;
  nutrition?: string;
}

export interface ComboPack {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  description: string;
  inclusions: string[];
  image: string;
  badge?: string;
  organicLabel?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  location: string;
  date: string;
  avatar: string;
}

export interface CartItem {
  id: string; // unique cart identifier (combines item ID and potential configurations)
  item: VegetableItem | ComboPack;
  quantity: number;
  itemType: 'single' | 'combo';
  unit: string; // Selected unit (e.g., "500g", "1kg", "1 pack")
  rate: number;  // Price for that specific unit
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}
