/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';

interface LeafParticle {
  id: number;
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
  rotation: number;
}

export default function FloatingLeaves() {
  const [particles, setParticles] = useState<LeafParticle[]>([]);

  useEffect(() => {
    // Generate a fixed set of floating leaves with randomized positions and animation properties
    const tempParticles: LeafParticle[] = Array.from({ length: 16 }).map((_, i) => ({
      id: i,
      left: Math.random() * 95, // % position
      top: Math.random() * 90,  // % position
      size: Math.random() * 24 + 12, // 12px to 36px
      delay: Math.random() * -10, // negative delay so they start immediately anim-dispersed
      duration: Math.random() * 12 + 10, // 10s to 22s float cycles
      opacity: Math.random() * 0.15 + 0.05, // fine, ambient subtlety
      rotation: Math.random() * 360,
    }));
    setParticles(tempParticles);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" id="ambient-leaves-container">
      {particles.map((leaf) => (
        <svg
          key={leaf.id}
          className="absolute text-brand-fresh select-none animate-float-slow"
          style={{
            left: `${leaf.left}%`,
            top: `${leaf.top}%`,
            width: `${leaf.size}px`,
            height: `${leaf.size}px`,
            opacity: leaf.opacity,
            animationDelay: `${leaf.delay}s`,
            animationDuration: `${leaf.duration}s`,
            transform: `rotate(${leaf.rotation}deg)`,
          }}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          {/* Detailed premium organic leaf path */}
          <path d="M17 8C8 10 5.9 16.1 5 21C6.9 20.1 13 18 15 9C16.1 13 14 18 11 21C20 18.1 20.9 9 17 8M17 8C19 6 21 3 21 3C21 3 18 5 16 7C14.7 8.3 15 9 17 8Z" />
        </svg>
      ))}
    </div>
  );
}
