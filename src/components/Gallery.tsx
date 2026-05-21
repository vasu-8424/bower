/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { GALLERY_DATA } from '../data';
import { GalleryItem } from '../types';
import { X, ZoomIn, Eye } from 'lucide-react';

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Farms', 'Veggies', 'Packing', 'Organic'];

  const filteredGallery = GALLERY_DATA.filter((item) => {
    return activeCategory === 'All' || item.category === activeCategory;
  });

  return (
    <section id="gallery" className="py-24 bg-brand-bg relative">
      {/* Organic top wave */}
      <div className="absolute top-0 inset-x-0 h-10 w-full overflow-hidden pointer-events-none">
        <div className="w-full h-full bg-white rounded-b-[40px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-sans font-extrabold text-xs uppercase tracking-widest text-brand-fresh mb-2 block">
            📸 Original Visual Harvests
          </span>
          <h2 className="serif text-3xl sm:text-4xl text-brand-dark tracking-tight leading-tight mb-4 font-bold">
            BowerKitchen <span className="text-brand-primary italic">Harvest Gallery</span>
          </h2>
          <p className="font-sans text-brand-earth text-sm sm:text-base">
            Take a visual tour across our regional partnered farms, clean hygiene sorting operations, and daily packed grocery vectors.
          </p>
        </div>

        {/* Gallery categories navigation tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-10 max-w-lg mx-auto" id="gallery-categories">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full font-sans font-bold text-xs cursor-pointer transition-all duration-300 ${
                  isActive
                    ? 'glass-btn-solid-green shadow-md text-white'
                    : 'bg-white/45 backdrop-blur-md border border-white/35 hover:bg-white/75 text-brand-dark/80 hover:text-brand-primary shadow-xs'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Masonry-Style Image Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          id="gallery-masonry-grid"
        >
          {filteredGallery.map((item) => (
            <article
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="relative rounded-3xl overflow-hidden shadow-md group aspect-[4/3] cursor-pointer bg-emerald-50 border border-brand-light/10 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 duration-500 transition-transform"
                loading="lazy"
                decoding="async"
              />
              
              {/* Glass subtle gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="font-sans font-extrabold text-[10px] text-brand-light uppercase tracking-widest mb-1">
                  {item.category}
                </span>
                <h3 className="font-display font-bold text-white text-base leading-tight">
                  {item.title}
                </h3>
                
                {/* Floating zoom indicator and status info */}
                <div className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-md text-white">
                  <Eye className="w-4 h-4" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* --- FULLSCREEN LIGHTBOX PORTAL VIEW --- */}
        {selectedItem && (
          <div
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
            id="gallery-lightbox-overlay"
          >
            {/* Close trigger button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white hover:bg-white/30 hover:rotate-90 duration-200 transition-all cursor-pointer flex items-center justify-center"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* High-res modal contents card */}
            <div
              className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center select-none"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl border border-white/10"
              />
              <div className="text-center mt-4">
                <span className="px-3 py-1 rounded-full bg-brand-primary/20 text-brand-light border border-brand-light/20 font-sans font-bold text-xs uppercase tracking-wider">
                  {selectedItem.category}
                </span>
                <h4 className="font-display font-bold text-white text-lg tracking-tight mt-2 pb-1">
                  {selectedItem.title}
                </h4>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
