/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { VegetableItem, ComboPack, Testimonial, ServiceItem, GalleryItem } from './types';

export const CATEGORIES = [
  { id: 'all', name: '✨ All Fresh', description: 'Complete hand-harvested selection' },
  { id: 'daily', name: '🥔 Daily Essentials', description: 'Everyday cooking staples, fresh and handpicked' },
  { id: 'leafy', name: '🥬 Leafy Greens', description: 'Iron-rich, vibrant greens sourced fresh at sunrise' },
  { id: 'fresh', name: '🥕 Fresh Vegetables', description: 'Crisp, nutritious vegetables from the farm' },
  { id: 'beans', name: '🫘 Beans & Peas', description: 'Crunchy, protein-packed pods' }
];

export const VEGETABLE_DATA: VegetableItem[] = [
  // --- Daily Essentials ---
  {
    id: 'tomato',
    name: 'Tomato',
    category: 'daily',
    image: '/tomato.png',
    unit: 'kg',
    rate: 38,
    popular: true,
    description: 'Plump, vine-ripened red tomatoes. Firm skin and juicy flesh perfect for traditional curries and rasam.',
    nutrition: 'Rich in Vitamin C, Lycopene, and antioxidants'
  },
  {
    id: 'potato',
    name: 'Potato',
    category: 'daily',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=600',
    unit: 'kg',
    rate: 29,
    popular: true,
    description: 'Freshly harvested earthy potatoes, rich in starch and ideal for roasting, boiling, or making aloo fry.',
    nutrition: 'Excellent source of Vitamin B6, Potassium, and energy'
  },
  {
    id: 'onion',
    name: 'Onion',
    category: 'daily',
    image: 'https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&q=80&w=600',
    unit: 'kg',
    rate: 45,
    popular: true,
    description: 'Crisp, sharp Karimnagar pink-red onions. High juice content and excellent flavor base.',
    nutrition: 'Contains powerful sulfur compounds and Vitamin C'
  },
  {
    id: 'ginger',
    name: 'Ginger',
    category: 'daily',
    image: '/ginger.png',
    unit: '250g',
    rate: 32,
    description: 'Spicy, fibrous root ginger with intense aroma. Directly sourced to assure potent medicinal and culinary qualities.',
    nutrition: 'Anti-inflammatory, cures indigestion and motion sickness'
  },
  {
    id: 'garlic',
    name: 'Garlic',
    category: 'daily',
    image: 'https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?auto=format&fit=crop&q=80&w=600',
    unit: '250g',
    rate: 45,
    description: 'Firm, pungent white garlic cloves with thin papery skin. A fundamental ingredient for authentic masalas.',
    nutrition: 'High in Allicin, boosts cardiovascular health and immunity'
  },
  {
    id: 'lemon',
    name: 'Lemon',
    category: 'daily',
    image: 'https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&q=80&w=600',
    unit: '6 Pcs',
    rate: 20,
    popular: true,
    description: 'Juicy, dynamic yellow lemons with high citrus content, perfect for standard lemon rice or refreshments.',
    nutrition: 'Vast dose of raw Vitamin C and alkaline properties'
  },
  {
    id: 'green_chillies',
    name: 'Green Chillies',
    category: 'daily',
    image: '/green%20chilli.png',
    unit: '250g',
    rate: 18,
    description: 'Slender, vibrant spicy green chillies. Brings immediate fresh heat to stir-fries and chutneys.',
    nutrition: 'Speeds up metabolism, packed with Capsaicin'
  },
  {
    id: 'bhaji_chilli',
    name: 'Bhaji Chilli',
    category: 'daily',
    image: '/bhajji%20chilli.png',
    unit: '250g',
    rate: 24,
    description: 'Mild, plump green chillies ideally suited for making traditional crispy Mirchi Bajji.',
    nutrition: 'Good source of dietary minerals and dietary fiber'
  },

  // --- Leafy Greens ---
  {
    id: 'amaranthus',
    name: 'Amaranthus (Thotakura)',
    category: 'leafy',
    image: '/amaranthus.png',
    unit: 'Bunch',
    rate: 15,
    description: 'Fresh crimson-green leafy stalks widely used in stir-fries and combined with lentils.',
    nutrition: 'Superfood containing high protein, iron, and calcium'
  },
  {
    id: 'gongura',
    name: 'Gongura (Sorrel Leaves)',
    category: 'leafy',
    image: '/gongura.png',
    unit: 'Bunch',
    rate: 18,
    popular: true,
    description: 'Slightly tangy, vitamin-rich red sorrel leaves, highly popular for preparing the famous Gongura Pachadi.',
    nutrition: 'High in Vitamin A, Iron, Zinc, and Folate'
  },
  {
    id: 'spring_onion',
    name: 'Spring Onion',
    category: 'leafy',
    image: '/spring%20onion.png',
    unit: 'Bunch',
    rate: 22,
    description: 'Crisp green shoots paired with delicate, sweet white onion buds. Adds a beautiful garnish and fresh texture.',
    nutrition: 'High in sulfur compounds, supports healthy digestion'
  },
  {
    id: 'radish_leaves',
    name: 'Radish Leaves',
    category: 'leafy',
    image: '/radish%20leaves.png',
    unit: 'Bunch',
    rate: 15,
    description: 'Mild pepper-tasting green leaves. Highly nutritious and excellent for Indian stir fry preparations (Mooli Saag).',
    nutrition: 'Extremely high in Vitamin C and fiber'
  },
  {
    id: 'purslane',
    name: 'Purslane (Gangabayala kura)',
    category: 'leafy',
    image: '/purslane.png',
    unit: 'Bunch',
    rate: 16,
    description: 'Succulent-like, tender leafy green known for its subtle lemony finish and immense mineral density.',
    nutrition: 'The highest plant source of heart-healthy Omega-3 fatty acids'
  },
  {
    id: 'coriander',
    name: 'Coriander (Kothimera)',
    category: 'leafy',
    image: '/coriander.png',
    unit: 'Bunch',
    rate: 10,
    popular: true,
    description: 'Extremely aromatic coriander leaves. Picked fresh daily for the ultimate garnish experience.',
    nutrition: 'Aids detoxification and helps regulate blood sugar levels'
  },
  {
    id: 'mint_leaves',
    name: 'Mint Leaves (Pudina)',
    category: 'leafy',
    image: '/mint.png',
    unit: 'Bunch',
    rate: 12,
    description: 'Intensely refreshing spear mint leaves. Handpicked to serve with perfect biryanis and green chutneys.',
    nutrition: 'Cooling agent, highly rich in iron and vitamin A'
  },
  {
    id: 'curry_leaves',
    name: 'Curry Leaves',
    category: 'leafy',
    image: '/curry%20leaves.png',
    unit: '100g',
    rate: 10,
    description: 'Glossy dark green leaves essential for tempering (tadka). Deeply aromatic and fresh.',
    nutrition: 'Great for hair health, prevents premature graying'
  },
  {
    id: 'fenugreek_leaves',
    name: 'Fenugreek Leaves (Methi)',
    category: 'leafy',
    image: '/fenugreek%20leaves.png',
    unit: 'Bunch',
    rate: 18,
    description: 'Earthy, slightly bitter-sweet leaves ideal for making Methi Chaman or Methi Puri.',
    nutrition: 'Improves insulin sensitivity, balances cholesterol'
  },
  {
    id: 'spinach',
    name: 'Spinach (Palakura)',
    category: 'leafy',
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=600',
    unit: 'Bunch',
    rate: 16,
    popular: true,
    description: 'Crisp, tender, deeply green broad spinach leaves. Carefully washed to ensure they are mud-free.',
    nutrition: 'Packed with high-grade Iron, Folate, and Lutein'
  },

  // --- Fresh Vegetables ---
  {
    id: 'carrot',
    name: 'Carrot',
    category: 'fresh',
    image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&q=80&w=600',
    unit: '500g',
    rate: 26,
    popular: true,
    description: 'Sweet, crisp, uniform orange carrots. Excellent for direct raw salads, juices, or sweet halwas.',
    nutrition: 'Abundant in Beta-Carotene, promoting optimal eyesight'
  },
  {
    id: 'cabbage',
    name: 'Cabbage',
    category: 'fresh',
    image: '/cabbage.png',
    unit: 'Pc',
    rate: 24,
    description: 'Tightly packed, crisp outer-layered cabbage heads with clean sweet cores.',
    nutrition: 'Provides high content of Vitamin K and soluble fibers'
  },
  {
    id: 'cauliflower',
    name: 'Cauliflower',
    category: 'fresh',
    image: 'https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?auto=format&fit=crop&q=80&w=600',
    unit: 'Pc',
    rate: 35,
    popular: true,
    description: 'Snowy-white dense florets framed by crisp protective outer greens. Bug-free quality check.',
    nutrition: 'Folate-rich, magnificent low-carb antioxidant powerhouse'
  },
  {
    id: 'capsicum',
    name: 'Capsicum (Bell Pepper)',
    category: 'fresh',
    image: '/capsicum.png',
    unit: '500g',
    rate: 34,
    description: 'Glossy green bell peppers with thick juicy walls. High crunch and crisp, clean taste.',
    nutrition: 'Extremely high concentration of Vitamin A and C'
  },
  {
    id: 'bottle_gourd',
    name: 'Bottle Gourd (Sorakaya)',
    category: 'fresh',
    image: '/bottle%20guard.png',
    unit: 'Pc',
    rate: 22,
    description: 'Tender, water-rich bottle gourd with smooth skin and pale green color. Perfect for comforting soups and subzis.',
    nutrition: 'Over 92% water content, highly cooling and digestive'
  },
  {
    id: 'brinjal',
    name: 'Brinjal (Guthi Vankaya)',
    category: 'fresh',
    image: '/brinjal.png',
    unit: '500g',
    rate: 25,
    popular: true,
    description: 'Deep glossy purple, small tender brinjals. Perfect for preparing the iconic Hyderabadi Guthi Vankaya curry.',
    nutrition: 'High in Nasunin, which protects brain cell membranes'
  },
  {
    id: 'lady_finger',
    name: 'Lady Finger (Bhendi)',
    category: 'fresh',
    image: 'https://images.unsplash.com/photo-1425543103986-22abb7d7e8d2?auto=format&fit=crop&q=80&w=600',
    unit: '500g',
    rate: 28,
    popular: true,
    description: 'Tender, easily breakable young okra pods. Guaranteed non-sticky when stir fried at accurate size.',
    nutrition: 'Rich in dietary fiber and essential vitamins'
  },
  {
    id: 'ridge_gourd',
    name: 'Ridge Gourd (Beerakaya)',
    category: 'fresh',
    image: '/ridge%20gourd.png',
    unit: '500g',
    rate: 26,
    description: 'Sharp-crested ridge gourd. Highly fibrous vegetable that makes extremely tasty chutneys.',
    nutrition: 'Low in saturated fat, ideal weight controller'
  },
  {
    id: 'ivy_gourd',
    name: 'Ivy Gourd (Dondakaya)',
    category: 'fresh',
    image: '/ivy%20gourd.png',
    unit: '500g',
    rate: 22,
    description: 'Fresh dondakaya pods. Rich green, firm and crunchy. Outstanding for high-heat southern style stir fry.',
    nutrition: 'Helps regulate glycemic levels'
  },
  {
    id: 'bitter_gourd',
    name: 'Bitter Gourd (Kakarakaya)',
    category: 'fresh',
    image: '/bitter%20gourd.png',
    unit: '500g',
    rate: 25,
    description: 'Dark green, beautifully ridged bitter melons. Well matured and freshly harvested to maintain properties.',
    nutrition: 'Superb blood purifier, insulin controller'
  },
  {
    id: 'drumstick',
    name: 'Drumstick (Munakkaya)',
    category: 'fresh',
    image: '/drumstcik.png',
    unit: '250g (3 Pcs)',
    rate: 20,
    popular: true,
    description: 'Long, aromatic drumsticks, ideal for sambar. Adds robust character and rich flavor broth.',
    nutrition: 'Strengthens bones, rich source of Calcium and Vitamin C'
  },

  // --- Beans & Peas ---
  {
    id: 'beans',
    name: 'Beans (French Beans)',
    category: 'beans',
    image: '/beans.png',
    unit: '500g',
    rate: 32,
    description: 'Vibrant, snapping-fresh French beans with tender inner seeds. Great for mixed dry curries.',
    nutrition: 'Extremely rich in dietary fiber and folate'
  },
  {
    id: 'cowpea',
    name: 'Cowpea (Alasandalu)',
    category: 'beans',
    image: '/cowpea.png',
    unit: '500g',
    rate: 28,
    description: 'Long green cowpea pods, crispy and rich in plant protein. Highly delicious when combined with potatoes.',
    nutrition: 'High plant protein and complex vital nutrients'
  },
  {
    id: 'broad_beans',
    name: 'Broad Beans (Chikkudukaya)',
    category: 'beans',
    image: '/broad%20beans.png',
    unit: '500g',
    rate: 30,
    popular: true,
    description: 'Traditional Karimnagar Indian flat beans (Chikkudu). Packed with sweet, plump internal beans.',
    nutrition: 'Exceptional source of copper, iron, and manganese'
  },
  {
    id: 'cluster_beans',
    name: 'Cluster Beans (Goru Chikkudu)',
    category: 'beans',
    image: '/cluster%20beans.png',
    unit: '500g',
    rate: 22,
    description: 'Slightly bitter yet extremely flavor-packed slender cluster beans. Highly delicious when prepared with shredded coconut.',
    nutrition: 'Low glycemic index, rich in dietary fiber'
  },
  {
    id: 'green_peas',
    name: 'Green Peas',
    category: 'beans',
    image: '/green%20peas.png',
    unit: '250g',
    rate: 25,
    popular: true,
    description: 'Sweet, vibrant green pearls straight from original pods. Juicy and incredibly fresh.',
    nutrition: 'Outstanding plant-based source of iron and muscle building protein'
  }
];

// Fallback high-res illustrations if any images must be loaded correctly.
// Let's optimize double-fallback inside the rendering card as well.

export const COMBO_PACKS: ComboPack[] = [
  {
    id: 'combo_family_weekly',
    name: '🛍️ Family Weekly Combo',
    price: 349,
    originalPrice: 420,
    description: 'Full weekly kitchen coverage. Contains critical everyday staples, diverse leafy essentials, hot chillies, and selected fresh seasonal veggies for families.',
    inclusions: [
      'Onion (2 kg)',
      'Tomato (2 kg)',
      'Potato (1.5 kg)',
      'Spinach (2 Bunches)',
      'Coriander & Mint (1 Bunch each)',
      'Green Chillies (250g)',
      'Lady Finger & Brinjal (500g each)'
    ],
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600',
    badge: '👑 Best Seller',
    organicLabel: true
  },
  {
    id: 'combo_healthy_green',
    name: '🥬 Healthy Green Combo',
    price: 149,
    originalPrice: 190,
    description: 'Vibrant sunrise harvest of iron-rich greens. Boost your daily antioxidant and vitamin intake with the finest Karimnagar leafy vegetables.',
    inclusions: [
      'Spinach (Palakura) - 2 Bunches',
      'Gongura (Sorrel) - 2 Bunches',
      'Coriander - 2 Bunches',
      'Mint Leaves - 2 Bunches',
      'Fenugreek Leaves (Methi) - 1 Bunch'
    ],
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=600',
    badge: '🌿 Detoxing Power',
    organicLabel: true
  },
  {
    id: 'combo_kitchen_essentials',
    name: '🍲 Kitchen Essentials Combo',
    price: 199,
    originalPrice: 245,
    description: 'The foundation of all Indian cooking masalas and bases. Spices up meals with hot chillies and hand-cleared aromatic roots.',
    inclusions: [
      'Ginger (250g)',
      'Garlic (250g)',
      'Onion (1 kg)',
      'Tomato (1 kg)',
      'Green Chillies (250g)',
      'Lemons (6 Pcs)'
    ],
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=600',
    badge: '🔥 Essential Masala',
    organicLabel: true
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'service_home_delivery',
    title: 'Doorstep Delivery',
    description: 'Safe, contactless, and prompt doorstep deliveries across Karimnagar cities and surrounding sectors.',
    iconName: 'Truck'
  },
  {
    id: 'service_whatsapp',
    title: 'WhatsApp Ordering',
    description: 'Forget complex apps. Just select, compile your cart, and send a direct pre-filled list on WhatsApp!',
    iconName: 'MessageSquareText'
  },
  {
    id: 'service_fresh',
    title: 'Fresh Sunrise Stock',
    description: 'Veggies and leafy greens are cleaned and sorted from high-trust organic farms right at sunrise.',
    iconName: 'Leaf'
  },
  {
    id: 'service_hygienic',
    title: 'Hygienic Packaging',
    description: 'Individually packed in air-rated, clean-to-touch pouches to preserve natural nutrients and texture.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'service_same_day',
    title: 'Same Day Delivery',
    description: 'Order before 11:00 AM to get guaranteed fresh deliveries in the afternoon slots.',
    iconName: 'CalendarCheck'
  },
  {
    id: 'service_pricing',
    title: 'Farm Sourcing',
    description: 'Sourced directly from our premium partner farms without any marketplace middleman delays.',
    iconName: 'Handshake'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'rev1',
    name: 'Rao Bahadur',
    rating: 5,
    comment: 'Ordering vegetables in Karimnagar was always tedious. BowerKitchen has made it incredibly fast! The green spinach and tomatoes arrived sparkling clean and as fresh as if plucked directly from the backyard.',
    location: 'Mukarrampura, Karimnagar',
    date: 'May 2026',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 'rev2',
    name: 'Anjali Sharma',
    rating: 5,
    comment: 'The Gongura and methi qualities are amazing! They are thoroughly cleaned with zero mud particles, saving so much sorting time. Strongly recommend the Family Weekly Combo pack.',
    location: 'Bhagyanagar, Karimnagar',
    date: 'May 2026',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 'rev3',
    name: 'Srinivas Goud',
    rating: 5,
    comment: 'Simple, frictionless WhatsApp checkout process. I added the Kitchen Essentials combo, and in minutes they confirmed and delivered. Perfect customer support and high-quality garlic roots!',
    location: 'Kothirampur, Karimnagar',
    date: 'May 2026',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 'rev4',
    name: 'Lavanya Reddy',
    rating: 5,
    comment: 'Amazing Lady Finger quality (no hard ones!) and crisp green chillies. My kids notice the fresh organic taste. BowerKitchen is our permanent vendor now.',
    location: 'Sapthagiri Colony, Karimnagar',
    date: 'May 2026',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150'
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal1',
    title: 'Farmers Sunrise Plucking',
    category: 'Farms',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'gal2',
    title: 'Premium Sorted Green Peas',
    category: 'Veggies',
    image: '/green%20peas.png'
  },
  {
    id: 'gal3',
    title: 'Healthy Weekly Family Box',
    category: 'Packing',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'gal4',
    title: 'Crisp Red Tomato Yield',
    category: 'Veggies',
    image: '/tomato.png'
  },
  {
    id: 'gal5',
    title: 'Pristine Leafy Greens Bunch',
    category: 'Organic',
    image: '/gongura.png'
  },
  {
    id: 'gal6',
    title: 'Hygienically Cleared Veggie Basket',
    category: 'Packing',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=600'
  }
];
