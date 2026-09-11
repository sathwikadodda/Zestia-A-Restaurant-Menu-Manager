import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'zestia_cart';

export const MAX_ITEM_QUANTITY = 20;

export function useCart() {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          // Ensure all restored items also respect the 20 limit
          return parsed.map(item => ({
            ...item,
            quantity: Math.min(MAX_ITEM_QUANTITY, Math.max(1, item.quantity || 1))
          }));
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
        const currentQty = prevItems[existingIndex].quantity;
        // If already at or above 20, do not increase
        if (currentQty >= MAX_ITEM_QUANTITY) {
          return prevItems;
        }
        const updated = [...prevItems];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: Math.min(MAX_ITEM_QUANTITY, currentQty + quantity)
        };
        return updated;
      }
      return [...prevItems, { ...item, quantity: Math.min(MAX_ITEM_QUANTITY, quantity) }];
    });
  }, []);

  const updateQuantity = useCallback((id, delta) => {
    setCartItems(prevItems => {
      return prevItems
        .map(item => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            if (newQty <= 0) return null;
            return { ...item, quantity: Math.min(MAX_ITEM_QUANTITY, newQty) };
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
