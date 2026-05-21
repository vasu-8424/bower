/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Logo from './Logo';
import { Facebook, Instagram, Linkedin, Send, Sparkles, Check } from 'lucide-react';

export default function Footer() {
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setEmailSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setEmailSubscribed(false);
    }, 3500);
  };

  return (
    <footer className="bg-linear-to-b from-[#143016] to-[#0A1A0B] text-white pt-20 pb-28 md:pb-10 relative overflow-hidden" id="app-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Upper subscription marquee block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-white/10 pb-16 mb-16">
          <div className="lg:col-span-7">
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight text-white mb-2">
              Subscribe to BowerKitchen Newsletter
            </h3>
            <p className="font-sans text-xs sm:text-sm text-emerald-200/70 max-w-lg">
              Get direct early warnings on seasonal crop arrivals, native recipes, healthy family combos, and special holiday discounts in Karimnagar.
            </p>
          </div>
          
          <div className="lg:col-span-5 w-full">
            {emailSubscribed ? (
              <div className="p-3.5 rounded-2xl bg-brand-fresh/20 border border-brand-light/30 text-brand-light font-sans font-bold text-xs flex items-center justify-center gap-2" id="footer-newsletter-success">
                <Check className="w-4 h-4 text-brand-light" />
                <span>Subscribed! Check your mailbox soon.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative flex items-center">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="w-full py-4.5 pl-6 pr-16 rounded-2xl bg-white/10 border border-white/15 focus:border-brand-light text-white font-sans text-xs outline-none focus:bg-white/15 focus:ring-4 focus:ring-brand-fresh/20 transition-all placeholder-zinc-400"
                />
                <button
                  type="submit"
                  className="absolute right-2 p-3 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 text-white hover:bg-white/25 transition-all cursor-pointer flex items-center justify-center"
                  aria-label="Subscribe to newsletter"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Primary widgets layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16" id="footer-widgets-grid">
          
          {/* Logo & coordinates widget col-span-4 */}
          <div className="lg:col-span-4">
            <Logo size={64} showText={true} lightMode={true} className="mb-6" />
            <p className="font-sans text-xs sm:text-sm text-emerald-100/75 leading-relaxed mb-6">
              Empowering Karimnagar households with pesticide-free, highly nutritious, and farm fresh vegetable dispatches. Safe, fast, and simple.
            </p>
            <div className="text-xs text-emerald-200/50 flex flex-col gap-1 font-mono">
              <span>📍 Karimnagar, Telangana, India</span>
              <span>📞 +91 8247386122</span>
              <span>✉️ shanigarapukiranteja@gmail.com</span>
            </div>
          </div>

          {/* Quick Links col-span-2 */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="font-display font-extrabold text-xs tracking-widest text-brand-light uppercase mb-6">
              Navigation
            </h4>
            <ul className="flex flex-col gap-4 font-sans text-xs sm:text-sm text-emerald-100/70">
              <li><a href="#hero" className="hover:text-brand-light transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-brand-light transition-colors">About Fresh</a></li>
              <li><a href="#products" className="hover:text-brand-light transition-colors">Products Catalog</a></li>
              <li><a href="#combos" className="hover:text-brand-light transition-colors">Combo Packs</a></li>
              <li><a href="#services" className="hover:text-brand-light transition-colors">Why Choose Us</a></li>
            </ul>
          </div>

          {/* Sourcing Categories col-span-3 */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="font-display font-extrabold text-xs tracking-widest text-brand-light uppercase mb-6">
              Harvest Sections
            </h4>
            <ul className="flex flex-col gap-4 font-sans text-xs sm:text-sm text-emerald-100/70">
              <li><a href="#products" className="hover:text-brand-light transition-colors">🥔 Daily Essentials</a></li>
              <li><a href="#products" className="hover:text-brand-light transition-colors">🥬 Leafy Greens</a></li>
              <li><a href="#products" className="hover:text-brand-light transition-colors">🥕 Fresh Vegetables</a></li>
              <li><a href="#products" className="hover:text-brand-light transition-colors">🫘 Beans & Peas</a></li>
              <li><a href="#combos" className="hover:text-brand-light transition-colors">🛍️ Family Weekly Combo</a></li>
            </ul>
          </div>

          {/* Social icons widget col-span-3 */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="font-display font-extrabold text-xs tracking-widest text-brand-light uppercase mb-6">
              Follow Our Harvest
            </h4>
            <p className="font-sans text-xs text-emerald-200/50 leading-relaxed mb-6">
              Join our active community on social media to see original harvest clips, farmer interviews, and live stock snapshots.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FAF9F6] hover:bg-white/25 hover:scale-110 transition-all flex items-center justify-center shadow-xs"
                aria-label="Visit BowerKitchen Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FAF9F6] hover:bg-white/25 hover:scale-110 transition-all flex items-center justify-center shadow-xs"
                aria-label="Visit BowerKitchen Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FAF9F6] hover:bg-white/25 hover:scale-110 transition-all flex items-center justify-center shadow-xs"
                aria-label="Visit BowerKitchen LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Lower footer copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-emerald-200/40">
          <p>© 2026 BowerKitchen Vegetables. All Rights Reserved. Sourced with honor in Karimnagar, Telangana, India.</p>
          <div className="flex gap-6 mt-4 md:mt-0 font-bold tracking-wider">
            <span className="flex items-center gap-1"><Sparkles className="w-3.5 h-3.5 text-brand-light" /> Pure Sourcing</span>
            <span>Hygienic Seals</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
