/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Plus, Minus, Trash2, MessageSquareText, ShoppingBasket, Info } from 'lucide-react';

export default function CartDrawer() {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartTotal,
    checkoutWhatsApp,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" id="cart-drawer-shell">
      {/* Absolute dark glass overlay behind the drawer block */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300"
        onClick={() => setIsCartOpen(false)}
      ></div>

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10" id="cart-drawer-panel">
        <div className="w-full sm:w-screen sm:max-w-md bg-white shadow-2xl flex flex-col justify-between" id="cart-drawer-content">
          
          {/* Drawer Header */}
          <div className="px-4 py-4 sm:px-6 sm:py-5 border-b border-brand-light/20 flex items-center justify-between bg-brand-bg">
            <div className="flex items-center gap-2 text-brand-primary">
              <ShoppingBasket className="w-5 h-5 animate-bounce" />
              <h2 className="font-display font-extrabold text-base uppercase tracking-wider">
                Your Organic Basket
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-full glass-btn-icon cursor-pointer outline-none flex items-center justify-center"
              aria-label="Close Basket"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body - Items list */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 no-scrollbar">
            {cartItems.length === 0 ? (
              <div className="text-center py-20 flex flex-col items-center justify-center">
                <span className="text-5xl">🛒</span>
                <h3 className="font-display font-bold text-brand-dark mt-4 text-base">Your basket is empty</h3>
                <p className="font-sans text-xs text-brand-earth max-w-xs mt-2 leading-relaxed">
                  Look through our fresh vegetable sections or super saver combos to select items for your household.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-6 px-6 py-2.5 rounded-xl glass-btn-solid-green font-sans font-bold text-xs shadow-md transition-all cursor-pointer"
                >
                  Start Adding Veggies
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between text-xs text-brand-earth pb-2 border-b border-dashed border-brand-light/40">
                  <span>Selected Vegetables</span>
                  <button
                    onClick={clearCart}
                    className="px-2.5 py-1 rounded-lg bg-red-500/10 hover:bg-red-500/20 backdrop-blur-md border border-red-500/25 text-red-500 hover:text-red-700 font-sans font-bold text-[11px] flex items-center gap-1 cursor-pointer transition-all duration-200"
                    aria-label="Empty basket"
                  >
                    <Trash2 className="w-3.5 h-3.5" /> Clear All
                  </button>
                </div>

                <div className="space-y-4" id="cart-items-wrapper">
                  {cartItems.map((ci) => {
                    const itemTotal = ci.rate * ci.quantity;

                    return (
                      <div
                        key={ci.id}
                        className="p-2.5 sm:p-3.5 rounded-2xl bg-brand-bg/60 border border-brand-light/15 flex gap-3 sm:gap-4 items-stretch shadow-xs"
                      >
                        {/* Veggie Thumb */}
                        <div className="w-16 h-16 rounded-xl overflow-hidden bg-white shrink-0 shadow-xs border border-brand-light/10">
                          <img
                            src={ci.item.image}
                            alt={ci.item.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>

                        {/* Title, Details, Actions */}
                        <div className="flex-1 flex flex-col justify-between">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-display font-extrabold text-xs sm:text-sm text-brand-dark leading-tight pr-4">
                                {ci.item.name}
                              </h4>
                              <span className="inline-block mt-1 px-2 py-0.5 rounded-md bg-white text-[9px] text-brand-primary font-sans font-black border border-brand-light/30">
                                Size: {ci.unit}
                              </span>
                            </div>
                            <button
                              onClick={() => removeFromCart(ci.id)}
                              className="p-1 rounded-full bg-white/40 hover:bg-red-500/10 text-zinc-400 hover:text-red-500 hover:border-red-500/30 backdrop-blur-xs border border-white/40 transition-all cursor-pointer"
                              aria-label={`Remove ${ci.item.name}`}
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>

                          <div className="flex items-center justify-between mt-2.5 pt-1.5 border-t border-brand-light/10">
                            {/* Qty count controller */}
                            <div className="flex items-center gap-2.5">
                              <span className="font-sans text-[10px] text-brand-earth font-bold uppercase mr-1">
                                Qty:
                              </span>
                              <button
                                onClick={() => updateQuantity(ci.id, ci.quantity - 1)}
                                className="p-1 rounded-md bg-white/50 backdrop-blur-md border border-white/45 text-brand-primary hover:bg-white/85 hover:text-brand-fresh transition-all cursor-pointer shadow-xs flex items-center justify-center"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="font-mono font-black text-xs text-brand-dark min-w-[12px] text-center">
                                {ci.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(ci.id, ci.quantity + 1)}
                                className="p-1 rounded-md bg-white/50 backdrop-blur-md border border-white/45 text-brand-primary hover:bg-white/85 hover:text-brand-fresh transition-all cursor-pointer shadow-xs flex items-center justify-center"
                                aria-label="Increase quantity"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        </div>

                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>

          {/* Drawer Footer - Checkouts */}
          {cartItems.length > 0 && (
            <div className="p-4 sm:p-6 border-t border-brand-light/20 bg-brand-bg" id="cart-drawer-checkout-footer">

              {/* Informative help note */}
              <div className="mb-3.5 sm:mb-4.5 p-3 rounded-xl bg-orange-50 text-[10px] text-orange-800 font-sans font-medium flex gap-2 items-start border border-orange-100">
                <Info className="w-4 h-4 shrink-0 text-orange-600 mt-0.5" />
                <span>Complete your checkout and settle delivery and details directly with our coordinator on WhatsApp!</span>
              </div>

              {/* Core CTA */}
              <button
                onClick={checkoutWhatsApp}
                className="w-full py-4 rounded-xl glass-btn-solid-green font-sans font-black text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2.5 cursor-pointer text-center"
                id="cart-submit-whatsapp-order"
              >
                <MessageSquareText className="w-5 h-5 fill-white/10" />
                <span>Confirm order on WhatsApp</span>
              </button>

              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full py-2.5 mt-3 rounded-xl glass-btn-primary font-sans font-bold text-[11px] uppercase tracking-wider transition-all cursor-pointer text-center"
              >
                ✕ Continue Shopping Veggies
              </button>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
