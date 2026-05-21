/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SERVICES } from '../data';
import * as LucideIcons from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Decorative background visual blob */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-10 w-[600px] h-32 bg-emerald-100/30 blur-3xl pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans font-extrabold text-xs uppercase tracking-widest text-brand-fresh mb-2 block">
            💎 Bowerkitchen Services
          </span>
          <h2 className="serif text-3xl sm:text-4xl text-brand-dark tracking-tight leading-tight mb-4 font-bold">
            Freshness Sourced <span className="text-brand-primary italic">Sincerity</span>
          </h2>
          <p className="font-sans text-brand-earth text-sm sm:text-base">
            We operate fully customized procurement systems ensuring each leaf and potato arriving at your home in Karimnagar is fresh, clean, and nutritious.
          </p>
        </div>

        {/* Services mapping grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="services-grid">
          {SERVICES.map((service, i) => {
            // Dynamically extract corresponding Lucide icon component
            const LucideIcon = (LucideIcons as any)[service.iconName] || LucideIcons.HelpCircle;

            return (
              <div
                key={service.id}
                className="glass-effect p-8 rounded-[2rem] border border-brand-light/20 bg-white hover:bg-white/90 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Visual backdrop watermark count */}
                <span className="absolute right-6 top-4 font-display font-black text-6xl text-brand-light/10 select-none group-hover:text-brand-light/25 duration-500 transition-colors">
                  0{i + 1}
                </span>

                {/* Styled icon base */}
                <div className="p-3.5 rounded-2xl bg-brand-bg text-brand-primary w-fit mb-6 shadow-sm group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                  <LucideIcon className="w-6 h-6" />
                </div>

                {/* Service Content */}
                <h3 className="font-display font-extrabold text-lg text-brand-dark mb-3 group-hover:text-brand-primary transition-colors">
                  {service.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-brand-earth leading-relaxed">
                  {service.description}
                </p>

                {/* Subtle bottom gradient glow bar appearing on hover */}
                <div className="absolute bottom-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-primary to-brand-fresh rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
