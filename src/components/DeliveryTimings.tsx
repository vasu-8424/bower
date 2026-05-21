/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { Clock, Calendar, ShieldAlert, MessageCircle, Sparkles } from 'lucide-react';

export default function DeliveryTimings() {
  const [isOpenNow, setIsOpenNow] = useState(true);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    // Dynamically calculate operational status based on local time
    const checkOpenStatus = () => {
      const now = new Date();
      const currentHour = now.getHours();
      
      // Open for custom confirmations between 9 AM (9) and 9 PM (21)
      if (currentHour >= 9 && currentHour < 21) {
        setIsOpenNow(true);
      } else {
        setIsOpenNow(false);
      }

      // Format current time nicely for dashboard metrics
      setCurrentTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000); // Check once a minute
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="timings" className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Curved Visual Waves transition border */}
      <div className="absolute top-0 inset-x-0 h-10 w-full overflow-hidden pointer-events-none">
        <div className="w-full h-full bg-white rounded-b-[40px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans font-extrabold text-xs uppercase tracking-widest text-brand-fresh mb-2 block">
            📅 Freshness Schedules
          </span>
          <h2 className="serif text-3xl sm:text-4xl text-brand-dark tracking-tight leading-tight mb-4 font-bold">
            Order & <span className="text-brand-primary italic">Delivery Schedules</span>
          </h2>
          <p className="font-sans text-brand-earth text-sm sm:text-base">
            We operate calculated dispatch timelines to ensure vegetables are harvested, packed in under 3 hours, and sent cold during crisp morning hours.
          </p>
        </div>

        {/* Live Operational Status Banner */}
        <div className="max-w-4xl mx-auto mb-12">
          {isOpenNow ? (
            <div className="rounded-3xl bg-emerald-500/10 border-2 border-emerald-500/20 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs" id="status-banner-open">
              <div className="flex items-center gap-3 text-center sm:text-left">
                <span className="w-4.5 h-4.5 rounded-full bg-emerald-500 animate-ping shrink-0"></span>
                <div>
                  <h4 className="font-display font-extrabold text-brand-primary text-sm uppercase tracking-wider">
                    BOWERKITCHEN IS OPEN FOR ORDERS!
                  </h4>
                  <p className="font-sans text-xs text-brand-earth mt-0.5">
                    We are actively preparing orders right now. Build your basket and checkout.
                  </p>
                </div>
              </div>
              <div className="shrink-0 py-2 px-4 rounded-xl bg-white border border-brand-light/35 font-mono text-xs font-black text-brand-primary">
                Local Time: {currentTime || '9:45 AM'}
              </div>
            </div>
          ) : (
            <div className="rounded-3xl bg-amber-500/5 border-2 border-amber-500/20 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs" id="status-banner-closed">
              <div className="flex items-center gap-3 text-center sm:text-left">
                <span className="w-4 h-4 rounded-full bg-amber-500 shrink-0"></span>
                <div>
                  <h4 className="font-display font-extrabold text-amber-700 text-sm uppercase tracking-wider">
                    CURRENTLY QUEUEING ORDERS FOR SUNRISE DISPATCH
                  </h4>
                  <p className="font-sans text-xs text-brand-earth mt-0.5">
                    Order queue is available 24/7. Our staff will confirm your items first thing at 9:00 AM!
                  </p>
                </div>
              </div>
              <div className="shrink-0 py-2 px-4 rounded-xl bg-white border border-brand-light/20 font-mono text-xs font-black text-[#8D6E63]">
                Local Time: {currentTime || '11:15 PM'}
              </div>
            </div>
          )}
        </div>

        {/* Logistics Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto" id="timings-grid">
          
          {/* Card 1: Order Hours */}
          <div className="glass-effect rounded-3xl p-6 sm:p-8 border border-brand-light/25 bg-white text-center shadow-md flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-brand-bg text-brand-primary flex items-center justify-center mx-auto mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-display font-extrabold text-brand-dark text-lg mb-2">
                Order Timings
              </h3>
              <p className="font-sans text-xs text-brand-earth leading-relaxed mb-6">
                Place orders through our basket or text lists anytime for manual catalog confirmation.
              </p>
            </div>
            <div className="py-4.5 px-6 rounded-2xl bg-brand-bg border border-brand-light/15 font-sans font-black text-brand-primary text-base sm:text-lg">
              9:00 AM – 9:00 PM
            </div>
          </div>

          {/* Card 2: Delivery Hours */}
          <div className="glass-effect rounded-3xl p-6 sm:p-8 border-2 border-brand-primary/20 bg-emerald-50 text-center shadow-lg flex flex-col justify-between transform scale-100 md:scale-102">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-brand-primary text-white flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="font-display font-extrabold text-brand-primary text-lg mb-2">
                Delivery Timings
              </h3>
              <p className="font-sans text-xs text-brand-earth leading-relaxed mb-6 font-medium">
                Sourced fresh daily. Settle order slots with morning dispatches directly to Karimnagar communities.
              </p>
            </div>
            <div className="py-4.5 px-6 rounded-2xl bg-white border border-brand-light/35 font-sans font-black text-brand-primary text-base sm:text-lg">
              6:00 AM – 9:00 AM
            </div>
          </div>

          {/* Card 3: 24/7 Availability */}
          <div className="glass-effect rounded-3xl p-6 sm:p-8 border border-brand-light/25 bg-white text-center shadow-md flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-brand-bg text-brand-primary flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-display font-extrabold text-brand-dark text-lg mb-2">
                Availability
              </h3>
              <p className="font-sans text-xs text-brand-earth leading-relaxed mb-6">
                Our responsive digital shopping cart remains active 24 hours to help compile custom requirements.
              </p>
            </div>
            <div className="py-4.5 px-6 rounded-2xl bg-brand-bg border border-brand-light/15 font-sans font-black text-brand-primary text-base sm:text-lg">
              24/7 Service Available
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
