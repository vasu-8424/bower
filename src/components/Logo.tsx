/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  lightMode?: boolean;
}

export default function Logo({ className = '', size = 48, showText = true, lightMode = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`} id="brand-logo">
      {/* Original BK Brand Logo Image */}
      <img
        src="/logo.png"
        alt="BowerKitchen Logo"
        className="transform transition-transform hover:rotate-6 duration-500 object-contain rounded-lg"
        style={{ width: size, height: size }}
        loading="lazy"
      />

      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-display font-extrabold tracking-tight text-lg leading-none ${
              lightMode ? 'text-brand-cream' : 'text-brand-primary'
            }`}
          >
            BowerKitchen
          </span>
          <span
            className={`font-sans font-bold text-xs tracking-widest uppercase ${
              lightMode ? 'text-brand-light' : 'text-brand-fresh'
            }`}
          >
            VEGETABLES
          </span>
        </div>
      )}
    </div>
  );
}
