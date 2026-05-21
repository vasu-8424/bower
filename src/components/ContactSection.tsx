/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquareText, Compass, HeartHandshake, CheckCircle } from 'lucide-react';

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;

    // Simulate simple client notification response
    setFormSubmitted(true);
    setTimeout(() => {
      setName('');
      setSubject('');
      setMessage('');
      setFormSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative gradient blur background vector */}
      <div className="absolute right-10 top-10 w-96 h-96 bg-brand-light/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans font-extrabold text-xs uppercase tracking-widest text-brand-fresh mb-2 block">
            📞 Reach Bowerkitchen
          </span>
          <h2 className="serif text-3xl sm:text-4xl text-brand-dark tracking-tight leading-tight mb-4 font-bold">
            Connect With Our <span className="text-brand-primary italic">Farm Desk</span>
          </h2>
          <p className="font-sans text-brand-earth text-sm sm:text-base">
            Have bulk requirements or custom questions for an event in Karimnagar? Ring our coordinator or visit us directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* LEFT 5 COLUMNS: Structured Contact Coordinates */}
          <div className="lg:col-span-5 flex flex-col justify-between" id="contact-info-cards">
            <div className="flex flex-col gap-6">
              
              <h3 className="font-display font-extrabold text-[#1B1B1B] text-xl tracking-tight mb-2">
                BowerKitchen Karimnagar Office
              </h3>
              
              {/* Card - Phone */}
              <div className="glass-effect p-5 rounded-2xl border border-brand-light/35 flex gap-4 items-start shadow-xs">
                <div className="p-3.5 rounded-xl bg-brand-bg text-brand-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-xs text-brand-earth uppercase tracking-widest">
                    Direct Phone Support
                  </h4>
                  <a
                    href="tel:8247386122"
                    className="font-sans font-black text-brand-dark text-lg hover:text-brand-primary"
                  >
                    +91 8247386122
                  </a>
                  <p className="font-sans text-[11px] text-zinc-400 mt-1">
                    Call directly for urgent orders and bulk queries.
                  </p>
                </div>
              </div>

              {/* Card - Email */}
              <div className="glass-effect p-5 rounded-2xl border border-brand-light/35 flex gap-4 items-start shadow-xs">
                <div className="p-3.5 rounded-xl bg-brand-bg text-brand-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-xs text-brand-earth uppercase tracking-widest">
                    Email Inquiries
                  </h4>
                  <a
                    href="mailto:shanigarapukiranteja@gmail.com"
                    className="font-sans font-bold text-brand-dark text-sm sm:text-base hover:text-brand-primary break-all"
                  >
                    shanigarapukiranteja@gmail.com
                  </a>
                  <p className="font-sans text-[11px] text-zinc-400 mt-1">
                    Reach out for commercial partnerships and B2B vendor supply.
                  </p>
                </div>
              </div>

              {/* Card - Location */}
              <div className="glass-effect p-5 rounded-2xl border-2 border-brand-primary/10 bg-emerald-50/50 flex gap-4 items-start shadow-xs">
                <div className="p-3.5 rounded-xl bg-brand-primary text-white">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-xs text-brand-primary uppercase tracking-widest">
                    Our Location
                  </h4>
                  <strong className="font-sans text-brand-dark text-base block mt-0.5">
                    Karimnagar City, Telangana State, India
                  </strong>
                  <p className="font-sans text-[11px] text-brand-earth mt-1 leading-snug">
                    Sourcing center sending farm packs daily across urban Karimnagar localities.
                  </p>
                </div>
              </div>

            </div>

            {/* Quick Action Button Drawer */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8" id="contact-action-triggers">
              
              <a
                href="tel:8247386122"
                className="py-3.5 px-4 rounded-xl glass-btn-primary font-sans font-bold text-xs text-center shadow-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>

              <a
                href="https://wa.me/918247386122?text=Hello%20BowerKitchen%20Vegetables%2C%20I%20want%20to%20order%20fresh%20vegetables."
                target="_blank"
                rel="noreferrer"
                className="py-3.5 px-4 rounded-xl glass-btn-solid-green text-white font-sans font-bold text-xs text-center shadow-md flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                <MessageSquareText className="w-3.5 h-3.5 fill-white/10" />
                <span>WhatsApp</span>
              </a>

              <a
                href="https://maps.google.com/?q=Karimnagar,+Telangana"
                target="_blank"
                rel="noreferrer"
                className="py-3.5 px-4 rounded-xl bg-white/50 backdrop-blur-md border border-white/40 text-brand-dark/90 hover:text-brand-primary font-sans font-bold text-xs text-center shadow-xs hover:bg-white/80 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Directions</span>
              </a>

            </div>
          </div>

          {/* RIGHT 7 COLUMNS: Integrated Interactive Form + Google Maps IFrame Frame */}
          <div className="lg:col-span-7 flex flex-col gap-6" id="contact-map-form-hub">
            
            {/* Embedded Google Map */}
            <div className="rounded-3xl overflow-hidden border border-brand-light/35 shadow-lg h-72 relative bg-emerald-50">
              <iframe
                title="BowerKitchen Location Karimnagar India"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60460.84024843936!2d79.10260429188045!3d18.43469083163353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bccd909b019cef9%3A0x6fb2a0618037cf17!2sKarimnagar%2C%20Telangana!5e0!3m2!1sen!2sin!4v1716260000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-10 brightness-95 opacity-90 contrast-102 hover:grayscale-0 duration-500 transition-all"
              ></iframe>
            </div>

            {/* In-page request feedback Form */}
            <div className="glass-effect rounded-3xl p-6 border border-brand-light/20 bg-white shadow-md">
              <h4 className="font-display font-extrabold text-sm text-[#1B1B1B] uppercase tracking-wider mb-4 flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-brand-primary" /> Send An Instant Message
              </h4>

              {formSubmitted ? (
                <div className="py-8 text-center" id="form-success-popup">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-brand-primary flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h5 className="font-display font-bold text-brand-primary">Message Sent Successfully!</h5>
                  <p className="font-sans text-xs text-brand-earth mt-1 leading-normal max-w-sm mx-auto">
                    Thanks for writing. Our dedicated CRM team will fetch your message details and call your contact number shortly!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <label htmlFor="form-input-name" className="font-sans text-[10px] font-bold text-brand-earth uppercase tracking-widest mb-1">
                        Full Name *
                      </label>
                      <input
                        id="form-input-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Vasu Unakka"
                        className="p-3 rounded-xl border border-brand-light/40 bg-brand-bg/50 focus:border-brand-primary focus:bg-white text-xs font-sans font-semibold outline-none transition-all"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="form-input-subject" className="font-sans text-[10px] font-bold text-brand-earth uppercase tracking-widest mb-1">
                        Subject of Query
                      </label>
                      <input
                        id="form-input-subject"
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Daily hotel vegetable supply details"
                        className="p-3 rounded-xl border border-brand-light/40 bg-brand-bg/50 focus:border-brand-primary focus:bg-white text-xs font-sans font-semibold outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="form-input-msg" className="font-sans text-[10px] font-bold text-brand-earth uppercase tracking-widest mb-1">
                      Detailed Message *
                      </label>
                    <textarea
                      id="form-input-msg"
                      rows={3}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Type details here: Address in Mukarrampura or specific bulk veggies requests..."
                      className="p-3 rounded-xl border border-brand-light/40 bg-brand-bg/50 focus:border-brand-primary focus:bg-white text-xs font-sans font-semibold outline-none transition-all"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="py-3.5 rounded-xl glass-btn-solid-green font-sans font-bold text-xs uppercase tracking-wider transition-all cursor-pointer text-center"
                  >
                    Submit Form Inquiry
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
