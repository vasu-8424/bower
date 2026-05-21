/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useCart } from '../context/CartContext';
import { Home, ShoppingBasket, CalendarDays, Compass, MessageSquareText } from 'lucide-react';

export default function MobileBottomNav() {
  const { totalItemsCount, setIsCartOpen, isCartOpen } = useCart();

  return (
    <>
      {/* 1. STICKY FLOATING WHATSAPP BUTTON (Stays floating just above mobile bottom bar) */}
      <div className="fixed bottom-22 right-5 z-30 md:hidden animate-float-medium pointer-events-auto">
        <a
          href="https://wa.me/918247386122?text=Hello%20BowerKitchen%20Vegetables%2C%20I%20want%20to%20order%20fresh%20vegetables."
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 rounded-full glass-btn-solid-green flex items-center justify-center shadow-xl border-2 border-white/40 ring-4 ring-emerald-500/20"
          aria-label="Direct Chat on WhatsApp"
        >
          <MessageSquareText className="w-7 h-7 fill-white/10" />
        </a>
      </div>

      {/* 2. STICKY MOBILE BOTTOM NAVIGATION RAIL */}
      <div className="fixed bottom-0 inset-x-0 z-35 md:hidden" id="mobile-navigation-bar">
        {/* Soft upper fade protector */}
        <div className="h-6 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>

        {/* Core Glass Bar */}
        <div className="glass-navbar border-t border-white/40 shadow-2xl py-2 px-6 flex items-center justify-between">
          
          {/* Btn 1: Home */}
          <a
            href="#hero"
            className="flex flex-col items-center gap-1 text-brand-dark/75 hover:text-brand-primary cursor-pointer active:scale-95 transition-all"
            aria-label="Home"
          >
            <Home className="w-5 h-5" />
            <span className="font-sans text-[9px] font-bold tracking-wider uppercase">Home</span>
          </a>

          {/* Btn 2: Catalog */}
          <a
            href="#products"
            className="flex flex-col items-center gap-1 text-brand-dark/75 hover:text-brand-primary cursor-pointer active:scale-95 transition-all"
            aria-label="Our Vegetables"
          >
            <Compass className="w-5 h-5" />
            <span className="font-sans text-[9px] font-bold tracking-wider uppercase">Veggies</span>
          </a>

          {/* Btn 3: Active Cart Basket with dynamic counts badge */}
          <button
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="relative -mt-6 p-4 rounded-full glass-btn-solid-green border-4 border-white shadow-lg active:scale-90 transition-transform cursor-pointer"
            aria-label="View curated vegetable basket"
          >
            <ShoppingBasket className="w-6 h-6" />
            {totalItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white font-sans font-black text-[9px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-white animate-pulse">
                {totalItemsCount}
              </span>
            )}
          </button>

          {/* Btn 4: Combos */}
          <a
            href="#combos"
            className="flex flex-col items-center gap-1 text-brand-dark/75 hover:text-brand-primary cursor-pointer active:scale-95 transition-all"
            aria-label="Combo Packs"
          >
            <CalendarDays className="w-5 h-5" />
            <span className="font-sans text-[9px] font-bold tracking-wider uppercase">Combos</span>
          </a>

          {/* Btn 5: Timings */}
          <a
            href="#timings"
            className="flex flex-col items-center gap-1 text-brand-dark/75 hover:text-brand-primary cursor-pointer active:scale-95 transition-all"
            aria-label="Operational Schedules"
          >
            <span className="text-[18px]">📅</span>
            <span className="font-sans text-[9px] font-bold tracking-wider uppercase leading-none">Timings</span>
          </a>

        </div>
      </div>
    </>
  );
}
