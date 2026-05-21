/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import ProductCatalog from './components/ProductCatalog';
import ComboPacks from './components/ComboPacks';
import Services from './components/Services';
import OrderTimeline from './components/OrderTimeline';
import DeliveryTimings from './components/DeliveryTimings';
import ReviewSlider from './components/ReviewSlider';
import Gallery from './components/Gallery';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import MobileBottomNav from './components/MobileBottomNav';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-brand-bg relative selection:bg-brand-light selection:text-brand-primary" id="app-root-shell">
        {/* Glowing floating circular shapes of green/yellow behind sections */}
        <div className="absolute top-24 left-1/10 w-96 h-96 rounded-full bg-brand-light/10 blur-3xl pointer-events-none z-0"></div>
        <div className="absolute top-1/2 right-1/10 w-80 h-80 rounded-full bg-brand-fresh/5 blur-3xl pointer-events-none z-0"></div>

        {/* Floating elements & navigational units */}
        <Navbar />
        
        <main className="relative z-10" id="main-content-flow">
          <Hero />
          <AboutUs />
          <ProductCatalog />
          <ComboPacks />
          <Services />
          <OrderTimeline />
          <DeliveryTimings />
          <ReviewSlider />
          <Gallery />
          <ContactSection />
        </main>

        <Footer />

        {/* Absolute floating systems */}
        <CartDrawer />
        
        {/* Contextual mobile buttons & navigation rails */}
        <MobileBottomNav />
      </div>
    </CartProvider>
  );
}
