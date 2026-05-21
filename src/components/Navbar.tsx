/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import Logo from './Logo';
import { ShoppingBasket, Menu, X, MessageSquareText, Phone } from 'lucide-react';

export default function Navbar() {
  const { totalItemsCount, setIsCartOpen, isCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor page scroll to style the glassmorphism header dynamically
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Fresh', href: '#about' },
    { name: 'Our Products', href: '#products' },
    { name: 'Combo Packs', href: '#combos' },
    { name: 'Why Us', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 glass-navbar ${
          isScrolled ? 'py-3' : 'py-5'
        }`}
        id="app-header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Elegant SVG Branded Logo */}
            <a href="#hero" className="flex items-center">
              <Logo size={56} showText={true} />
            </a>

            {/* Desktop Navigation Link Toggles */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-sans font-semibold text-sm text-brand-dark/85 hover:text-brand-primary tracking-wide transition-colors duration-200 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-fresh transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Practical Action Actions */}
            <div className="flex items-center gap-3">
              {/* Shopping Basket Drawer trigger */}
              <button
                id="cart-basket-trigger"
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="relative p-2.5 rounded-full glass-btn-icon flex items-center justify-center cursor-pointer group"
                aria-label="View curated vegetable basket"
              >
                <ShoppingBasket className="w-5 h-5 group-hover:scale-110 transition-transform" />
                {totalItemsCount > 0 && (
                  <span
                    className="absolute -top-1 -right-1 bg-red-500 text-white font-sans font-bold text-[10px] w-5 h-5 flex items-center justify-center rounded-full border-2 border-white animate-pulse"
                    id="cart-badge-count"
                  >
                    {totalItemsCount}
                  </span>
                )}
              </button>

              {/* Direct WhatsApp Call out CTA */}
              <a
                href="https://wa.me/918247386122?text=Hello%20BowerKitchen%20Vegetables%2C%20I%20want%20to%20order%20fresh%20vegetables."
                target="_blank"
                rel="noreferrer"
                className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full glass-btn-solid-green font-sans font-bold text-sm cursor-pointer"
                id="whatsapp-header-cta"
              >
                <MessageSquareText className="w-4 h-4 fill-white/10" />
                <span>Order Now</span>
              </a>

              {/* Mobile Drawer Trigger Menu */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-full glass-btn-icon flex items-center justify-center cursor-pointer"
                aria-label="Open navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER WINDOW (Glassmorphism backdrop overlays) */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop glass blur */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        ></div>

        {/* Drawer panel content slider */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-4/5 max-w-sm glass-effect shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 transform ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-brand-light/20 pb-4">
            <Logo size={48} showText={true} />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 rounded-full glass-btn-icon flex items-center justify-center cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav Links List */}
          <nav className="flex flex-col gap-5 my-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-sans font-bold text-lg text-brand-dark/90 hover:text-brand-primary hover:translate-x-1 transition-transform"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Quick Contact & WhatsApp Bottom drawer anchors */}
          <div className="border-t border-brand-light/20 pt-6 flex flex-col gap-4">
            <div className="flex items-center gap-3 text-brand-earth">
              <Phone className="w-5 h-5" />
              <span className="font-sans font-bold text-sm">+91 8247386122</span>
            </div>
            
            <a
              href="https://wa.me/918247386122?text=Hello%20BowerKitchen%20Vegetables%2C%20I%20want%20to%20order%20fresh%20vegetables."
              target="_blank"
              onClick={() => setMobileMenuOpen(false)}
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2.5 py-3 rounded-2xl glass-btn-solid-green font-sans font-bold text-center"
            >
              <MessageSquareText className="w-5 h-5 fill-white/10" />
              <span>Order on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
