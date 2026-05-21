/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import FloatingLeaves from './FloatingLeaves';
import { MessageSquareText, Leaf, ShieldCheck, Truck, Clock, Sparkles } from 'lucide-react';

export default function Hero() {
  const heroFeatures = [
    { name: 'Farm Fresh', icon: Leaf, color: 'text-emerald-500', bg: 'bg-emerald-50', desc: 'Direct from farmers' },
    { name: 'Hygienically Packed', icon: ShieldCheck, color: 'text-green-600', bg: 'bg-green-50', desc: 'Sanitized pouches' },
    { name: 'Home Delivery', icon: Truck, color: 'text-amber-600', bg: 'bg-amber-50', desc: 'Real-time doorstep' },
    { name: '24/7 Available', icon: Clock, color: 'text-blue-500', bg: 'bg-blue-50', desc: 'Never miss stock' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(27, 27, 27, 0.4) 0%, rgba(20, 48, 22, 0.92) 100%), url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1600')`,
      }}
    >
      {/* Decorative botanical floating leaf particles */}
      <FloatingLeaves />

      {/* Decorative organic top and bottom SVG divider curve */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-brand-bg/90 to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white flex flex-col items-center">
        {/* Sparkle badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-fresh/20 border border-brand-light/30 text-brand-light font-sans font-bold text-xs uppercase tracking-widest mb-6 animate-pulse" id="hero-badge">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Premier Farm Delivery in Karimnagar</span>
        </div>

        {/* Cinematic Headline */}
        <h1
          className="serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-white max-w-5xl leading-[1.1] mb-6 drop-shadow-md font-bold"
          id="hero-header-title"
        >
          Fresh Vegetables <br />
          <span className="text-brand-light bg-clip-text bg-gradient-to-r from-brand-light to-emerald-300 italic font-medium">
            Delivered to Your Doorstep
          </span>
        </h1>

        {/* Subheadline description */}
        <p
          className="font-sans font-medium text-base sm:text-lg md:text-xl text-emerald-100 max-w-3xl mb-10 leading-relaxed"
          id="hero-header-subtitle"
        >
          Farm-fresh, handselected vegetables & daily groceries delivered hygienically across Karimnagar with super-simple WhatsApp ordering.
        </p>

        {/* Premium Action CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full sm:w-auto" id="hero-cta-buttons">
          <a
            href="https://wa.me/918247386122?text=Hello%20BowerKitchen%20Vegetables%2C%20I%20want%20to%20order%20fresh%20vegetables."
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl glass-btn-solid-green font-sans font-bold text-base shadow-xl flex items-center justify-center gap-2.5 card-hover"
            id="hero-whatsapp-order-cta"
          >
            <MessageSquareText className="w-5 h-5 fill-white/10" />
            <span>Order on WhatsApp</span>
          </a>

          <a
            href="#products"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl glass-btn-secondary font-sans font-bold text-base flex items-center justify-center gap-2 focus:outline-none card-hover"
            id="hero-products-scroll-cta"
          >
            <span>Explore Products</span>
            <span className="text-brand-light">🥬</span>
          </a>
        </div>

        {/* Animated dynamic floating key indicators/badges */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl mt-4"
          id="hero-floating-badges"
        >
          {heroFeatures.map((feat, i) => {
            const IconComponent = feat.icon;
            return (
              <div
                key={feat.name}
                className="glass-effect p-4 rounded-2xl flex flex-col items-center text-center backdrop-blur-lg border border-white/15 shadow-lg group hover:bg-white/80 transition-all duration-300 hover:scale-105"
                style={{
                  animationDelay: `${i * 150}ms`,
                }}
              >
                <div className={`p-3 rounded-full mb-2 ${feat.bg} ${feat.color}`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-brand-dark text-sm sm:text-base leading-tight">
                  {feat.name}
                </h3>
                <p className="font-sans text-xs text-brand-earth mt-1">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Decorative Bottom Organic SVG wave transition curve */}
      <div className="absolute bottom-0 inset-x-0 h-16 pointer-events-none">
        <svg
          className="w-full h-full fill-brand-bg"
          viewBox="0 0 1440 64"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,32L80,37.3C160,43,320,53,480,48C640,43,800,21,960,16C1120,11,1280,21,1360,26.7L1440,32L1440,64L1360,64C1280,64,1120,64,960,64C800,64,640,64,480,64C320,64,160,64,80,64L0,64Z" />
        </svg>
      </div>
    </section>
  );
}
