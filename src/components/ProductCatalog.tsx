/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { useCart } from '../context/CartContext';
import { VEGETABLE_DATA, CATEGORIES } from '../data';
import { VegetableItem } from '../types';
import { Search, Sparkles, Check, Flame, Award, HeartHandshake } from 'lucide-react';

export default function ProductCatalog() {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Track selected weight/unit of individual products: key is productId, value is the custom selected unit
  const [productUnits, setProductUnits] = useState<Record<string, string>>({});
  
  // State for success feedback message popup timing checks
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  // Helper inside card to determine available unit sizes for dynamic toggling
  const getPortionOptions = (item: VegetableItem) => {
    if (item.category === 'leafy') {
      return ['1 Bunch', '2 Bunches', '3 Bunches', '5 Bunches'];
    }
    if (item.id === 'lemon') {
      return ['6 Pcs', '12 Pcs', '24 Pcs'];
    }
    if (item.id === 'drumstick') {
      return ['1 Portion (3 Pcs)', '2 Portions', '3 Portions'];
    }
    // All weight-based vegetables offer selection from 250g to 5kg
    return ['250g', '500g', '1kg', '2kg', '5kg'];
  };

  // Helper inside card to calculate current unit rate based on chosen unit toggle
  const calculateRateByUnit = (item: VegetableItem, selectedUnit: string): { rate: number; displayUnit: string } => {
    const baseRate = item.rate;

    // Handle standard single portions
    if (selectedUnit.includes('Bunch') || selectedUnit.includes('Bunch')) {
      const multiplier = parseInt(selectedUnit) || 1;
      return { rate: baseRate * multiplier, displayUnit: selectedUnit };
    }
    if (selectedUnit.includes('Pcs')) {
      const pcsCount = parseInt(selectedUnit) || 6;
      const multiplier = pcsCount / 6;
      return { rate: baseRate * multiplier, displayUnit: selectedUnit };
    }
    if (selectedUnit.includes('Portion')) {
      const multiplier = parseInt(selectedUnit) || 1;
      return { rate: baseRate * multiplier, displayUnit: selectedUnit };
    }

    // Handle metric weights relative to vegetable default database unit
    const isBaseKG = item.unit === 'kg';
    const isBase250g = item.unit === '250g';
    const isBase500g = item.unit === '500g';

    let weightInGrams = 1000; // Default weight assumption in grams
    if (selectedUnit === '100g') weightInGrams = 100;
    else if (selectedUnit === '250g') weightInGrams = 250;
    else if (selectedUnit === '500g') weightInGrams = 500;
    else if (selectedUnit === '1kg') weightInGrams = 1000;
    else if (selectedUnit === '2kg') weightInGrams = 2000;
    else if (selectedUnit === '5kg') weightInGrams = 5000;

    let calculatedRate = baseRate;
    if (isBaseKG) {
      calculatedRate = baseRate * (weightInGrams / 1000);
    } else if (isBase250g) {
      calculatedRate = baseRate * (weightInGrams / 250);
    } else if (isBase500g) {
      calculatedRate = baseRate * (weightInGrams / 500);
    }

    // Round nicely to closest integer
    return { rate: Math.round(calculatedRate), displayUnit: selectedUnit };
  };

  // Apply search filtering and category constraints over products list
  const filteredProducts = useMemo(() => {
    return VEGETABLE_DATA.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
                            (item.nutrition && item.nutrition.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleAddToCartClick = (item: VegetableItem) => {
    const selectedUnit = productUnits[item.id] || getPortionOptions(item)[1] || item.unit; // Default to second weight option (e.g. 500g)
    const { rate } = calculateRateByUnit(item, selectedUnit);

    addToCart(item, 1, 'single', selectedUnit, rate);

    // Provide haptic visual response
    setJustAddedId(item.id);
    setTimeout(() => {
      setJustAddedId(null);
    }, 1500);
  };

  return (
    <section id="products" className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Visual Organic Waves divider border */}
      <div className="absolute top-0 inset-x-0 h-10 w-full overflow-hidden pointer-events-none">
        <div className="w-full h-full bg-white rounded-b-[40px] shadow-xs"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans font-extrabold text-xs uppercase tracking-widest text-brand-fresh mb-2 block">
            🥬 Seasonal Sunrise Pluck
          </span>
          <h2 className="serif text-3xl sm:text-4xl text-brand-dark tracking-tight leading-tight mb-4 font-bold">
            Browse Handselected <span className="text-brand-primary italic">Vegetable Catalog</span>
          </h2>
          <p className="font-sans text-brand-earth text-sm sm:text-base">
            Select veggies precisely down to portions. Add them directly to your custom basket, then export seamlessly to WhatsApp.
          </p>
        </div>

        {/* Catalog Control Area (Search + Category sliders) */}
        <div className="flex flex-col gap-6 mb-12">
          
          {/* Dynamic Search Box */}
          <div className="relative max-w-2xl mx-auto w-full group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-brand-fresh group-focus-within:text-brand-primary">
              <Search className="w-5 h-5 transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Search vegetables by name or nutritional vitamins..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-brand-light/40 bg-white/70 backdrop-blur-md focus:border-brand-primary focus:bg-white text-brand-dark font-sans font-semibold placeholder-zinc-450 shadow-md focus:ring-4 focus:ring-brand-fresh/10 outline-none transition-all"
              id="catalog-search-input"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-4 flex items-center font-sans font-extrabold text-xs text-brand-earth/70 hover:text-red-500"
              >
                Clear
              </button>
            )}
          </div>

          {/* Luxury Horizontal Filter list */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-5xl mx-auto w-full px-2" id="category-filter-bar">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-full font-sans font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 pointer-events-auto cursor-pointer ${
                    isActive
                      ? 'glass-btn-solid-green shadow-md'
                      : 'bg-white/45 backdrop-blur-md border border-white/35 hover:bg-white/75 text-brand-dark/80 hover:text-brand-primary shadow-xs'
                  }`}
                  aria-label={`Show ${cat.name}`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

        </div>

        {/* Dynamic Catalog Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-brand-light/10 shadow-sm max-w-lg mx-auto">
            <span className="text-4xl">🔍</span>
            <h3 className="font-display font-bold text-lg text-brand-dark mt-4">We couldn't find that veggie</h3>
            <p className="font-sans text-xs text-brand-earth mt-2 px-6">
              Veggies are sourced based on seasonal plucking. Try adjusting search queries, categories, or request it on WhatsApp directly!
            </p>
          </div>
        ) : (
          <div
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6"
            id="product-cards-grid"
          >
            {filteredProducts.map((veggie) => {
              const portionOptions = getPortionOptions(veggie);
              const customSelectedUnit = productUnits[veggie.id] || portionOptions[1] || veggie.unit; // Default to second size
              const { displayUnit } = calculateRateByUnit(veggie, customSelectedUnit);
              const isJustAdded = justAddedId === veggie.id;

              return (
                <article
                  key={veggie.id}
                  className="glass-effect rounded-3xl border border-brand-light/25 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-350 bg-white group"
                >
                  <div>
                    {/* Upper cover photo area with badges */}
                    <div className="relative h-28 xs:h-36 sm:h-44 overflow-hidden bg-emerald-50">
                      <img
                        src={veggie.image}
                        alt={veggie.name}
                        className="w-full h-full object-cover group-hover:scale-110 duration-700 transition-all"
                        loading="lazy"
                        decoding="async"
                      />

                      {/* Overlapping glowing category label */}
                      <span className="absolute top-2 left-2 sm:top-3 sm:left-3 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-black/50 backdrop-blur-md text-brand-light font-sans font-bold text-[9px] sm:text-[10px] tracking-wider uppercase">
                        {CATEGORIES.find((c) => c.id === veggie.category)?.name.split(' ')[1] || veggie.category}
                      </span>

                      {/* Best Seller/Popular tag overlay */}
                      {veggie.popular && (
                        <span className="absolute top-2 right-2 sm:top-3 sm:right-3 px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-amber-500/90 text-white font-sans font-extrabold text-[8px] sm:text-[9px] uppercase tracking-widest flex items-center gap-0.5 sm:gap-1 shadow-sm">
                          <Sparkles className="w-2 sm:w-2.5 h-2 sm:h-2.5 fill-white" /> Popular
                        </span>
                      )}

                      {/* Soft morning fresh badge bottom overlay */}
                      <span className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 px-1.5 sm:py-0.5 rounded-md bg-[#2E7D32]/90 backdrop-blur-sm text-white font-sans font-semibold text-[8px] sm:text-[9px] uppercase tracking-widest leading-none">
                        ● Morning Fresh
                      </span>
                    </div>

                    {/* Meta info block context */}
                    <div className="p-3.5 sm:p-5 pb-2">
                      <h3 className="font-display font-extrabold text-sm sm:text-base text-brand-dark group-hover:text-brand-primary transition-colors leading-tight">
                        {veggie.name}
                      </h3>
                      
                      {veggie.description && (
                        <p className="font-sans text-xs text-brand-earth mt-1 sm:mt-1.5 leading-snug line-clamp-2 h-8">
                          {veggie.description}
                        </p>
                      )}

                      {/* Interactive health/nutrition snippet */}
                      {veggie.nutrition && (
                        <div className="mt-2 sm:mt-3 py-1 sm:py-1.5 px-1.5 sm:px-2.5 rounded-lg bg-emerald-50 text-[9px] sm:text-[10px] text-brand-primary font-sans font-semibold flex items-center gap-1 border border-emerald-100">
                          <span className="text-[10px] sm:text-[12px]">🥗</span>
                          <span className="truncate">{veggie.nutrition}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Pricing and portion size toggles footer body */}
                  <div className="p-3.5 sm:p-5 pt-0 mt-1 sm:mt-2">
                    
                    {/* Portion togglers */}
                    <div className="mb-3.5 sm:mb-4">
                      <span className="font-sans text-[9px] sm:text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                        Choose Quantity Size:
                      </span>
                      <div className="flex flex-wrap gap-1 mt-1 bg-white/20 backdrop-blur-xs p-1 rounded-lg border border-white/30">
                        {portionOptions.map((opt) => {
                          const isOptActive = customSelectedUnit === opt;
                          return (
                            <button
                              key={opt}
                              onClick={(e) => {
                                e.stopPropagation();
                                setProductUnits((prev) => ({ ...prev, [veggie.id]: opt }));
                              }}
                              className={`py-1 px-1 sm:px-1.5 rounded-md text-[8px] sm:text-[9px] font-sans font-extrabold transition-all outline-none cursor-pointer grow text-center ${
                                isOptActive
                                  ? 'glass-btn-solid-green text-white shadow-xs'
                                  : 'text-brand-dark/70 hover:text-brand-primary bg-white/30 hover:bg-white/60'
                              }`}
                              aria-label={`Select ${opt}`}
                            >
                              {opt.replace(' Portion', '').replace(' Pcs', 'P')}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Final CTA Purchase block */}
                    <div className="pt-2 sm:pt-3 border-t border-brand-light/20 flex flex-col gap-2">
                      <div className="flex justify-between items-center text-[9px] sm:text-[10px] font-sans font-bold text-brand-earth">
                        <span>Selected Size:</span>
                        <span className="text-brand-primary uppercase">{displayUnit}</span>
                      </div>

                      {/* Add directly trigger card button */}
                      <button
                        onClick={() => handleAddToCartClick(veggie)}
                        className={`w-full py-2.5 sm:py-3 rounded-xl font-sans font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer pointer-events-auto ${
                          isJustAdded
                            ? 'bg-amber-500/90 text-white animate-bounce border border-white/20 backdrop-blur-md'
                            : 'glass-btn-primary'
                        }`}
                        id={`add-btn-${veggie.id}`}
                      >
                        {isJustAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5 stroke-[3]" /> Added!
                          </>
                        ) : (
                          <>
                            <span>Add Basket</span>
                            <span>🥬</span>
                          </>
                        )}
                      </button>

                    </div>

                  </div>
                </article>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
