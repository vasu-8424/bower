/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MessageSquareText, Sparkles, CheckSquare, Compass } from 'lucide-react';

export default function OrderTimeline() {
  const steps = [
    {
      id: 1,
      title: 'Send Vegetable List on WhatsApp',
      desc: 'Browse our dynamic catalog, select portions to fill your premium basket, and click checkout. We will format and redirect you to WhatsApp instantly! Alternatively, you can directly type your list to us.',
      icon: MessageSquareText,
      badge: 'Step 01',
      bgClass: 'bg-emerald-500',
    },
    {
      id: 2,
      title: 'We Prepare & Hygienically Pack',
      desc: 'Our morning coordinators harvest and pick vegetables from standard organic fields. All ingredients are washed thoroughly, sorted for insects, and sealed in breathable organic packets.',
      icon: CheckSquare,
      badge: 'Step 02',
      bgClass: 'bg-gradient-to-r from-emerald-600 to-green-500',
    },
    {
      id: 3,
      title: 'Fast Doorstep Delivery',
      desc: 'Our delivery professional brings your fresh organic vegetables directly to your door in safe, contactless carriers during selected morning schedules across Karimnagar.',
      icon: Sparkles,
      badge: 'Step 03',
      bgClass: 'bg-brand-primary',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-brand-light/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans font-extrabold text-xs uppercase tracking-widest text-brand-fresh mb-2 block">
            ⚙️ Simple Frictionless Process
          </span>
          <h2 className="serif text-3xl sm:text-4xl text-brand-dark tracking-tight leading-tight mb-4 font-bold">
            How Simple <span className="text-brand-primary italic">Ordering Works</span>
          </h2>
          <p className="font-sans text-brand-earth text-sm sm:text-base">
            No endless credential signups, heavy downloads, or complex login credentials required. Order in seconds using WhatsApp.
          </p>
        </div>

        {/* Timeline Line/Ticks Layout (Responsive matching mobile/desktop grids) */}
        <div className="relative" id="timeline-flow-container">
          {/* Centered timeline horizontal line on desktop */}
          <div className="hidden lg:block absolute top-[110px] left-[15%] right-[15%] h-1 bg-brand-light/30 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.id}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step Badge and Icon container */}
                  <div className="relative mb-6">
                    {/* Glowing outer circles */}
                    <div className="absolute inset-0 rounded-full bg-brand-fresh/20 scale-125 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
                    
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center text-white shadow-lg ${step.bgClass} z-10 relative`}>
                      <Icon className="w-8 h-8 fill-white/10" />
                    </div>

                    {/* Step indicator tag */}
                    <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-brand-dark text-brand-light font-sans font-black text-[10px] uppercase tracking-widest rounded-full shadow-md z-20">
                      {step.badge}
                    </span>
                  </div>

                  {/* Body textual information */}
                  <h3 className="font-display font-extrabold text-[#1B1B1B] text-lg sm:text-xl tracking-tight mb-3 mt-2 group-hover:text-brand-primary transition-colors">
                    {step.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-brand-earth leading-relaxed max-w-sm">
                    {step.desc}
                  </p>

                  {/* Decorative indicator showing progression on mobile */}
                  {idx < steps.length - 1 && (
                    <div className="lg:hidden w-0.5 h-10 bg-brand-light/30 my-6"></div>
                  )}

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
