/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Leaf, Check, Users, ShoppingBag, Waves, Zap } from 'lucide-react';

export default function AboutUs() {
  // Counters states initialized to animate elegantly on load
  const [happyCustomers, setHappyCustomers] = useState(0);
  const [veggieVarieties, setVeggieVarieties] = useState(0);

  useEffect(() => {
    // Animate numbers up to values
    const duration = 2000; // ms
    const customerTarget = 1000;
    const varietiesTarget = 52;

    const interval = 20; // ms
    const steps = duration / interval;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setHappyCustomers(Math.min(Math.floor((customerTarget / steps) * step), customerTarget));
      setVeggieVarieties(Math.min(Math.floor((varietiesTarget / steps) * step), varietiesTarget));

      if (step >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const coreReasons = [
    'Sourced directly from trusted regional farmers',
    'Carefully handpicked hygienic quality check',
    'Incredibly fresh and high-quality organic produce',
    'Daily fresh morning stock replacement',
    'Prompt afternoon contactless delivery',
    'Simplified and interactive WhatsApp cart checkout'
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Absolute decorative gradient ring */}
      <div className="absolute right-0 top-1/4 w-96 h-96 rounded-full bg-brand-light/10 blur-3xl pointer-events-none"></div>
      <div className="absolute left-0 bottom-1/4 w-80 h-80 rounded-full bg-brand-fresh/5 blur-2xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT COLUMN: Premium Farmers Market Imagery Grid */}
          <div className="relative group" id="about-visuals-grid">
            {/* Visual decorative brand border overlay */}
            <div className="absolute -inset-4 rounded-[2.5rem] bg-linear-to-tr from-brand-primary/20 to-brand-fresh/20 -rotate-3 scale-95 opacity-70 group-hover:rotate-0 duration-500 transition-all"></div>
            
            <div className="relative grid grid-cols-12 gap-4">
              {/* Primary main organic image */}
              <div className="col-span-8 overflow-hidden rounded-3xl shadow-xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=650"
                  alt="Fresh farm organic vegetables pluck"
                  className="w-full h-[320px] sm:h-[400px] object-cover hover:scale-105 duration-700 transition-all"
                  loading="lazy"
                />
              </div>

              {/* Secondary stacked visual details */}
              <div className="col-span-4 flex flex-col gap-4 justify-between h-full">
                <div className="overflow-hidden rounded-2xl shadow-lg border-2 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&q=80&w=300"
                    alt="Fresh red tomatoes"
                    className="w-full h-[120px] sm:h-[180px] object-cover grayscale-10 hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                </div>
                
                {/* Floating solid brand credential widget inside grid */}
                <div className="glass-green-effect p-4 rounded-2xl border border-brand-primary/20 flex flex-col justify-center text-center">
                  <Leaf className="w-8 h-8 text-brand-primary mx-auto mb-1 animate-bounce" />
                  <span className="font-display font-extrabold text-brand-primary text-2xl leading-none">
                    100%
                  </span>
                  <span className="font-sans font-bold text-[10px] text-brand-dark/80 tracking-normal uppercase mt-0.5">
                    Hygienic Organic
                  </span>
                </div>
              </div>
            </div>

            {/* Little floating rating overlay */}
            <div className="absolute -bottom-6 left-6 glass-effect p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-brand-light/30">
              <div className="flex -space-x-2">
                <span className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center font-display font-black text-white text-xs border border-white">B</span>
                <span className="w-8 h-8 rounded-full bg-brand-fresh flex items-center justify-center font-display font-black text-white text-xs border border-white">K</span>
              </div>
              <div>
                <div className="flex gap-0.5 text-amber-500 text-xs">★ ★ ★ ★ ★</div>
                <p className="font-sans text-[11px] font-bold text-brand-dark/95">Certified Farm Quality</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Luxurious About Content */}
          <div id="about-content" className="flex flex-col">
            <span className="font-sans font-extrabold text-xs uppercase tracking-widest text-brand-fresh mb-2">
              🌱 Direct Farm-to-Home
            </span>
            
            <h2 className="serif text-3xl sm:text-4xl text-brand-dark tracking-tight leading-tight mb-6 font-bold">
              Welcome to <span className="text-brand-primary italic">BowerKitchen</span> Vegetables
            </h2>
            
            <p className="font-sans text-brand-earth text-sm sm:text-base leading-relaxed mb-6">
              We are a trusted premier brand dedicated to delivering fresh, hygienic, and nutrient-rich vegetables directly from pure Telangana soils to your doorstep here in Karimnagar.
            </p>

            <p className="font-sans text-brand-earth text-sm sm:text-base leading-relaxed mb-8">
              Our mission is to eliminate the hassle of early morning crowded markets, endless bargaining, and stale stocks by offering handselected premium-grade vegetables combined with simplified, interactive WhatsApp-focused ordering.
            </p>

            {/* Vision statement */}
            <div className="p-5 rounded-2xl bg-brand-bg border-l-4 border-brand-primary mb-8 shadow-sm">
              <h3 className="font-display font-extrabold text-brand-primary text-sm uppercase tracking-wide mb-1">
                Our Vision
              </h3>
              <p className="font-sans text-xs sm:text-sm text-brand-dark/90 italic">
                “To become the most trusted household brand for fresh vegetables and groceries by promoting healthier lifestyles through chemical-free, sunrise-fresh regional produce.”
              </p>
            </div>

            {/* Handpicked checklists */}
            <h4 className="font-display font-bold text-sm text-brand-dark tracking-wider uppercase mb-4">
              Why Families Choose Us:
            </h4>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {coreReasons.map((reason) => (
                <li key={reason} className="flex items-start gap-2 text-xs sm:text-sm text-brand-dark/85">
                  <div className="p-0.5 rounded-full bg-brand-fresh/10 text-brand-primary mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>

            {/* Dynamic statistics section */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-brand-light/20" id="about-stats-grid">
              
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-2xl sm:text-3xl text-brand-primary leading-none">
                  {happyCustomers}+
                </span>
                <span className="font-sans text-[11px] font-bold text-brand-earth uppercase tracking-wider mt-1.5 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-brand-fresh inline" /> Customers
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-display font-extrabold text-2xl sm:text-3xl text-brand-primary leading-none">
                  {veggieVarieties}+
                </span>
                <span className="font-sans text-[11px] font-bold text-brand-earth uppercase tracking-wider mt-1.5 flex items-center gap-1">
                  <ShoppingBag className="w-3.5 h-3.5 text-brand-fresh inline" /> Varieties
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-display font-extrabold text-2xl sm:text-3xl text-brand-primary leading-none">
                  Daily
                </span>
                <span className="font-sans text-[11px] font-bold text-brand-earth uppercase tracking-wider mt-1.5 flex items-center gap-1">
                  <Waves className="w-3.5 h-3.5 text-brand-fresh inline" /> Fresh Stock
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-display font-extrabold text-2xl sm:text-3xl text-brand-primary leading-none">
                  Fast
                </span>
                <span className="font-sans text-[11px] font-bold text-brand-earth uppercase tracking-wider mt-1.5 flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-brand-fresh inline" /> Delivery
                </span>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
