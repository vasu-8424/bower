/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import { VegetableItem, ComboPack, CartItem } from '../types';

interface CartContextProps {
  cartItems: CartItem[];
  addToCart: (item: VegetableItem | ComboPack, quantity: number, itemType: 'single' | 'combo', selectedUnit: string, selectedRate: number) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, qty: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  checkoutWhatsApp: () => void;
  cartTotal: number;
  totalItemsCount: number;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from localStorage on init
  useEffect(() => {
    const stored = localStorage.getItem('bk_vegetables_cart');
    if (stored) {
      try {
        setCartItems(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse cart items', e);
      }
    }
  }, []);

  // Save cart to localStorage on modification
  const saveCart = (items: CartItem[]) => {
    setCartItems(items);
    localStorage.setItem('bk_vegetables_cart', JSON.stringify(items));
  };

  const addToCart = (
    item: VegetableItem | ComboPack,
    quantity: number,
    itemType: 'single' | 'combo',
    selectedUnit: string,
    selectedRate: number
  ) => {
    // Unique key: itemId_unit
    const cartId = `${item.id}_${selectedUnit.replace(/\s+/g, '')}`;

    const existingIndex = cartItems.findIndex((ci) => ci.id === cartId);

    if (existingIndex > -1) {
      const updated = [...cartItems];
      updated[existingIndex].quantity += quantity;
      saveCart(updated);
    } else {
      const newItem: CartItem = {
        id: cartId,
        item,
        quantity,
        itemType,
        unit: selectedUnit,
        rate: selectedRate,
      };
      saveCart([...cartItems, newItem]);
    }
    // Open cart drawer immediately for premium feedback response
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    const filtered = cartItems.filter((ci) => ci.id !== id);
    saveCart(filtered);
  };

  const updateQuantity = (id: string, qty: number) => {
    if (qty <= 0) {
      removeFromCart(id);
      return;
    }
    const updated = cartItems.map((ci) => {
      if (ci.id === id) {
        return { ...ci, quantity: qty };
      }
      return ci;
    });
    saveCart(updated);
  };

  const clearCart = () => {
    saveCart([]);
  };

  const cartTotal = cartItems.reduce((acc, curr) => {
    return acc + curr.rate * curr.quantity;
  }, 0);

  const totalItemsCount = cartItems.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const checkoutWhatsApp = () => {
    if (cartItems.length === 0) {
      return;
    }

    const heading = '🟢 *BOWERKITCHEN VEGETABLES ORDER* 🥬';
    const subhead = 'Farm Fresh Delivery • Karimnagar, India';
    const separator = '━━━━━━━━━━━━━━━━━━━━━━';

    const itemsText = cartItems
      .map((ci, index) => {
        return `${index + 1}. *${ci.item.name}* \n   ↳ Qty: ${ci.quantity} \n   ↳ Pack/Size: ${ci.unit}`;
      })
      .join('\n\n');

    const totalText = `*Total Items Count: ${totalItemsCount}*`;
    const noteText = 'Please prepare my items hygienically and send delivery confirmation for Karimnagar address.';
    
    const plainMessage = `${heading}\n_${subhead}_\n${separator}\n\n${itemsText}\n\n${separator}\n${totalText}\n\n💬 _${noteText}_`;
    const encodedMessage = encodeURIComponent(plainMessage);
    
    // Direct link to user requested WhatsApp API
    const whatsappLink = `https://wa.me/918247386122?text=${encodedMessage}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        checkoutWhatsApp,
        cartTotal,
        totalItemsCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
