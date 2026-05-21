/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { lazy, Suspense } from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MobileBottomNav from './components/MobileBottomNav';

// Lazy loading below-the-fold components
const AboutUs = lazy(() => import('./components/AboutUs'));
const ProductCatalog = lazy(() => import('./components/ProductCatalog'));
const ComboPacks = lazy(() => import('./components/ComboPacks'));
const Services = lazy(() => import('./components/Services'));
const OrderTimeline = lazy(() => import('./components/OrderTimeline'));
const DeliveryTimings = lazy(() => import('./components/DeliveryTimings'));
const ReviewSlider = lazy(() => import('./components/ReviewSlider'));
const Gallery = lazy(() => import('./components/Gallery'));
const ContactSection = lazy(() => import('./components/ContactSection'));
const Footer = lazy(() => import('./components/Footer'));
const CartDrawer = lazy(() => import('./components/CartDrawer'));

// Elegant HSL Organic loading placeholder spinner
function BowerLoader() {
  return (
    <div className="w-full py-16 flex items-center justify-center min-h-[150px]" id="bower-skeleton-loader">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 rounded-full border-3 border-[#2E7D32]/15 border-t-[#2E7D32] animate-spin"></div>
        <span className="font-sans font-bold text-[10px] text-[#2E7D32]/85 tracking-widest uppercase animate-pulse">
          Sourcing Fresh...
        </span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-brand-bg relative selection:bg-brand-light selection:text-brand-primary overflow-x-hidden" id="app-root-shell">
        {/* Glowing floating circular shapes of green/yellow behind sections */}
        <div className="absolute top-24 left-[10%] w-96 h-96 rounded-full bg-brand-light/10 blur-3xl pointer-events-none z-0"></div>
        <div className="absolute top-1/2 right-[10%] w-80 h-80 rounded-full bg-brand-fresh/5 blur-3xl pointer-events-none z-0"></div>

        {/* Floating elements & navigational units */}
        <Navbar />
        
        <main className="relative z-10" id="main-content-flow">
          <Hero />
          
          <Suspense fallback={<BowerLoader />}>
            <AboutUs />
          </Suspense>
          
          <Suspense fallback={<BowerLoader />}>
            <ProductCatalog />
          </Suspense>
          
          <Suspense fallback={<BowerLoader />}>
            <ComboPacks />
          </Suspense>
          
          <Suspense fallback={<BowerLoader />}>
            <Services />
          </Suspense>
          
          <Suspense fallback={<BowerLoader />}>
            <OrderTimeline />
          </Suspense>
          
          <Suspense fallback={<BowerLoader />}>
            <DeliveryTimings />
          </Suspense>
          
          <Suspense fallback={<BowerLoader />}>
            <ReviewSlider />
          </Suspense>
          
          <Suspense fallback={<BowerLoader />}>
            <Gallery />
          </Suspense>
          
          <Suspense fallback={<BowerLoader />}>
            <ContactSection />
          </Suspense>
        </main>

        <Suspense fallback={null}>
          <Footer />
        </Suspense>

        {/* Absolute floating systems */}
        <Suspense fallback={null}>
          <CartDrawer />
        </Suspense>
        
        {/* Contextual mobile buttons & navigation rails */}
        <MobileBottomNav />
      </div>
    </CartProvider>
  );
}
