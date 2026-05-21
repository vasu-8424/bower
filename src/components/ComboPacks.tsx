/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { COMBO_PACKS } from '../data';
import { ComboPack } from '../types';
import { Check, MessageSquareText, Sparkles, ShieldAlert, Award } from 'lucide-react';

export default function ComboPacks() {
  const { addToCart } = useCart();
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  const handleAddCombo = (combo: ComboPack) => {
    // Add to local state shopping cart as "combo" type
    addToCart(combo, 1, 'combo', '1 Pack', combo.price);

    // Provide haptic visual response
    setJustAddedId(combo.id);
    setTimeout(() => {
      setJustAddedId(null);
    }, 1500);
  };

  return (
    <section id="combos" className="py-24 bg-white relative overflow-hidden">
      {/* Curved SVG Divider for organic premium transitions */}
      <div className="absolute top-0 inset-x-0 h-10 w-full overflow-hidden pointer-events-none">
        <div className="w-full h-full bg-brand-bg rounded-b-[40px] shadow-xs"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans font-extrabold text-xs uppercase tracking-widest text-brand-fresh mb-2 block">
            🛍️ Super Saver Curations
          </span>
          <h2 className="serif text-3xl sm:text-4xl text-brand-dark tracking-tight leading-tight mb-4 font-bold">
            Weekly <span className="text-brand-primary italic">Combo Packs</span>
          </h2>
          <p className="font-sans text-brand-earth text-sm sm:text-base">
            Carefully curated vegetable combos designed for varying family sizes. Enjoy handselected variety, high savings, and seamless WhatsApp dispatch.
          </p>
        </div>

        {/* Bento Grid layout for combos */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch" id="combo-cards-grid">
          {COMBO_PACKS.map((combo) => {
            const isBestSeller = combo.id === 'combo_family_weekly';
            const isJustAdded = justAddedId === combo.id;
            const savings = combo.originalPrice - combo.price;

            return (
              <article
                key={combo.id}
                className={`rounded-[2.5rem] p-5 sm:p-8 flex flex-col justify-between transition-all duration-350 relative shadow-md group ${
                  isBestSeller
                    ? 'bg-linear-to-b from-[#143016] to-[#2E7D32] text-white border-2 border-brand-light/30 shadow-emerald-950/20 shadow-2xl scale-100 lg:scale-105 z-10'
                    : 'bg-brand-bg text-brand-dark border border-brand-light/20 hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                {/* Floating Best Seller/Discount Indicator Badges */}
                <div className="absolute top-6 right-6 flex flex-col items-end gap-2">
                  {combo.badge && (
                    <span className={`px-4 py-1 rounded-full font-sans font-black text-[10px] uppercase tracking-widest ${
                      isBestSeller ? 'bg-amber-500 text-white' : 'bg-brand-primary text-white'
                    }`}>
                      {combo.badge}
                    </span>
                  )}
                </div>

                {/* Card Title Content */}
                <div>
                  <span className={`font-sans font-semibold text-xs uppercase tracking-widest ${
                    isBestSeller ? 'text-brand-light' : 'text-brand-primary'
                  }`}>
                    ● Sourced Clean
                  </span>
                  
                  <h3 className="font-display font-extrabold text-2xl tracking-tight mt-1 mb-3">
                    {combo.name.replace('🛍️ ', '').replace('🥬 ', '').replace('🍲 ', '')}
                  </h3>

                  <p className={`font-sans text-xs leading-relaxed mb-6 ${
                    isBestSeller ? 'text-emerald-100' : 'text-brand-earth'
                  }`}>
                    {combo.description}
                  </p>

                  <div className={`my-6 border-t ${isBestSeller ? 'border-brand-fresh/30' : 'border-brand-light/30'}`}></div>

                  {/* Curated list of specific inclusions inside box */}
                  <h4 className="font-display font-bold text-xs tracking-wider uppercase mb-3">
                    Inclusions inside Combo:
                  </h4>
                  
                  <ul className="flex flex-col gap-2.5 mb-8">
                    {combo.inclusions.map((inc) => (
                      <li key={inc} className="flex items-center gap-2.5 text-xs">
                        <div className={`p-1.5 rounded-full ${
                          isBestSeller ? 'bg-brand-fresh/20 text-brand-light' : 'bg-white text-brand-primary border border-brand-light/20'
                        }`}>
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className={isBestSeller ? 'text-[#FAF9F6] font-medium' : 'text-brand-dark/85 font-medium'}>
                          {inc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing UI and bottom whatsapp drawer addition triggers */}
                <div className="pt-6 border-t border-brand-light/10 mt-auto">
                  <div className="mb-6 flex justify-between items-center text-xs font-sans font-bold">
                    <span>Curated Selection:</span>
                    <span className={`${isBestSeller ? 'text-emerald-200' : 'text-brand-primary'} uppercase`}>1 Curated Pack</span>
                  </div>

                  <div className="flex flex-col gap-3">
                    {/* Add to current modular bag drawer */}
                    <button
                      onClick={() => handleAddCombo(combo)}
                      className={`w-full py-4 rounded-xl font-sans font-bold text-sm shadow-md transition-all duration-205 flex items-center justify-center gap-2 cursor-pointer ${
                        isJustAdded
                          ? 'bg-amber-500/90 border border-white/20 backdrop-blur-md text-white animate-pulse'
                          : isBestSeller
                          ? 'glass-btn-secondary'
                          : 'glass-btn-primary'
                      }`}
                      id={`combo-add-${combo.id}`}
                    >
                      {isJustAdded ? (
                        <>
                          <Check className="w-4 h-4 stroke-[3]" />
                          <span>Pack Added to Basket!</span>
                        </>
                      ) : (
                        <>
                          <span>Add Pack to Basket</span>
                          <span>🛍️</span>
                        </>
                      )}
                    </button>

                    {/* Highly premium organic label text */}
                    {combo.organicLabel && (
                      <p className={`text-[11px] font-sans text-center font-bold tracking-wide ${
                        isBestSeller ? 'text-brand-light' : 'text-brand-fresh'
                      }`}>
                        🍃 100% Sourced Chemical-Free Sunrise Harvest
                      </p>
                    )}
                  </div>
                </div>

              </article>
            );
          })}
        </div>

        {/* High trust badge below grid */}
        <div className="glass-green-effect p-6 rounded-3xl border border-brand-primary/20 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-4 text-center md:text-left mt-16 shadow-xs">
          <div className="p-3 rounded-full bg-brand-primary/10 text-brand-primary">
            <Award className="w-8 h-8" />
          </div>
          <div>
            <h4 className="font-display font-extrabold text-sm text-brand-primary uppercase tracking-wider mb-0.5">
              CUSTOMIZABLE SIZES AVAILABLE
            </h4>
            <p className="font-sans text-xs text-brand-earth max-w-xl">
              Want to drop or swap an item from any weekly pack? Simply place order via WhatsApp, and mention requested item updates to our direct coordinator!
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
