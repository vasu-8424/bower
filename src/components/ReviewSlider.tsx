/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../data';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function ReviewSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Touch swiping state variables
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  // Set up autoplay slide effects
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000); // cycle every 6s
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Touch handlers to process touchscreen swipes
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  return (
    <section id="reviews" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative botanical backdrop rings */}
      <div className="absolute left-[10%] top-1/4 w-[500px] h-32 bg-emerald-50 rounded-full blur-3xl pointer-events-none -skew-y-12"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans font-extrabold text-xs uppercase tracking-widest text-brand-fresh mb-2 block">
            ⭐ Verified Customer Love
          </span>
          <h2 className="serif text-3xl sm:text-4xl text-brand-dark tracking-tight leading-tight mb-4 font-bold">
            Loved By <span className="text-brand-primary italic">Karimnagar Households</span>
          </h2>
          <p className="font-sans text-brand-earth text-sm sm:text-base">
            See why native families in Karimnagar choose BowerKitchen Vegetables every single day for their kitchens, breakfasts, and nutritious greens.
          </p>
        </div>

        {/* Carousel Slider Panel */}
        <div
          className="max-w-4xl mx-auto relative px-4 select-none touch-pan-y"
          id="testimonials-carousel"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          
          <div className="overflow-hidden relative min-h-[360px] xs:min-h-[300px] sm:min-h-[240px] flex items-center justify-center">
            {TESTIMONIALS.map((review, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div
                  key={review.id}
                  className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-700 transform ${
                    isActive
                      ? 'opacity-100 translate-x-0 scale-100 z-10'
                      : 'opacity-0 translate-x-full scale-95 pointer-events-none'
                  }`}
                >
                  <Quote className="w-10 h-10 text-brand-fresh/20 mb-4 fill-brand-fresh/5 rotate-180" />
                  
                  {/* Testimonial Star indicators */}
                  <div className="flex gap-1 mb-4 text-[#F5B041]">
                    {Array.from({ length: review.rating }).map((_, rIdx) => (
                      <Star key={rIdx} className="w-5 h-5 fill-current stroke-current" />
                    ))}
                  </div>

                  {/* Feedback description text */}
                  <blockquote className="font-sans text-brand-dark text-base sm:text-lg md:text-xl font-medium max-w-2xl leading-relaxed italic mb-6">
                    “{review.comment}”
                  </blockquote>

                  {/* Customer author profile info */}
                  <div className="flex items-center gap-3.5 mt-2">
                    <div className="w-11 h-11 rounded-full bg-brand-primary/10 border-2 border-brand-light flex items-center justify-center font-sans font-extrabold text-brand-primary text-xs shadow-md">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="text-left">
                      <cite className="font-display font-extrabold text-sm text-brand-dark not-italic block">
                        {review.name}
                      </cite>
                      <span className="font-sans text-[11px] font-bold text-brand-fresh block uppercase tracking-wide">
                        📍 {review.location}
                      </span>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Action Trigger Toggles Left/Right */}
          <div className="hidden sm:flex justify-between items-center absolute -inset-x-12 top-1/2 -translate-y-1/2 z-20">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full glass-btn-icon cursor-pointer outline-none flex items-center justify-center"
              aria-label="Previous Review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full glass-btn-icon cursor-pointer outline-none flex items-center justify-center"
              aria-label="Next Review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Pagination Indicators Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer outline-none ${
                  idx === activeIndex
                    ? 'w-8 bg-brand-primary/80 backdrop-blur-md shadow-xs'
                    : 'w-2.5 bg-white/40 border border-white/20 backdrop-blur-xs hover:bg-brand-primary/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              ></button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
