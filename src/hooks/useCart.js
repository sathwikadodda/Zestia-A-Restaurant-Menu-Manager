import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'zestia_cart';

export function useCart() {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Failed to parse cart from localStorage:', e);
    }
    return [];
  });

  // Sync to localStorage whenever cartItems updates
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
    } catch (e) {
      console.warn('Failed to persist cart to localStorage:', e);
    }
  }, [cartItems]);

  const addToCart = useCallback((item, quantity = 1) => {
    if (!item || !item.id || quantity <= 0) return;

    setCartItems(prevItems => {
      const existingIndex = prevItems.findIndex(i => i.id === item.id);
      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity
        };
        return updated;
      }
      return [...prevItems, { ...item, quantity }];
    });
  }, []);

  const updateQuantity = useCallback((id, delta) => {
    setCartItems(prevItems => {
      return prevItems
        .map(item => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  }, []);

  const removeFromCart = useCallback((id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  }, []);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const getItemQuantity = useCallback((id) => {
    const found = cartItems.find(item => item.id === id);
    return found ? found.quantity : 0;
  }, [cartItems]);

  // Derived financial computations
  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const tax = subtotal > 0 ? Math.round(subtotal * 0.05) : 0; // 5% GST & service charge
  const grandTotal = subtotal + tax;

  return {
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    getItemQuantity,
    totalItemsCount,
    subtotal,
    tax,
    grandTotal
  };
}
