import React, { useState, useEffect } from 'react';
import { X, Plus, Minus, Clock, Flame, Check } from 'lucide-react';

export default function FoodDetails({ item, onClose, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  // Reset quantity when selected item changes
  useEffect(() => {
    setQuantity(1);
    setIsAdded(false);
  }, [item]);

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  const handleIncrement = () => setQuantity(prev => Math.min(prev + 1, 20));
  const handleDecrement = () => setQuantity(prev => Math.max(prev - 1, 1));

  const handleAddToCart = () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    onAddToCart(item, quantity);
    setIsAdded(true);

    setTimeout(() => {
      setIsSubmitting(false);
      onClose();
    }, 600);
  };

  const totalPrice = item.price * quantity;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="food-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto bg-espresso-950/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-cream-50 rounded-3xl overflow-hidden shadow-modal border border-champagne-300 animate-slide-up my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close food details"
          className="absolute top-3.5 right-3.5 z-10 w-8 h-8 rounded-full bg-cream-50/90 hover:bg-cream-100 text-espresso-800 border border-champagne-200/80 flex items-center justify-center shadow-md transition-all cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Hero Image */}
        <div className="relative aspect-[16/10] w-full bg-champagne-200">
          <img
            src={item.image}
            alt={item.name}
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80';
            }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/60 via-transparent to-transparent pointer-events-none" />

          {/* Badges on Image */}
          <div className="absolute bottom-3 left-3.5 flex flex-wrap gap-2">
            <div className="bg-cream-50/95 backdrop-blur-sm px-2 py-1 rounded-md border border-champagne-200 shadow-sm flex items-center gap-1.5">
              <span
                className={`w-3.5 h-3.5 rounded-sm border flex items-center justify-center p-0.5 ${
                  item.isVeg ? 'border-emerald-600' : 'border-rose-700'
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    item.isVeg ? 'bg-emerald-600' : 'bg-rose-700'
                  }`}
                />
              </span>
              <span className="text-[11px] font-bold text-espresso-900 uppercase tracking-wider">
                {item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
              </span>
            </div>

            {item.badge && (
              <span className="bg-gold-500 text-espresso-950 text-[11px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm">
                {item.badge}
              </span>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 space-y-4">
          <div>
            <div className="flex items-start justify-between gap-2">
              <h2
                id="food-modal-title"
                className="font-serif text-xl sm:text-2xl font-bold text-espresso-900"
              >
                {item.name}
              </h2>
              <span className="font-serif text-xl sm:text-2xl font-bold text-gold-700 whitespace-nowrap">
                ₹{item.price}
              </span>
            </div>
            <p className="mt-2 text-xs sm:text-sm text-espresso-600 leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Cooking & Flavor Notes */}
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-champagne-200/70 text-xs text-espresso-700">
            <div className="flex items-center gap-2 p-2 rounded-xl bg-champagne-100/60 border border-champagne-200/60">
              <Clock className="w-4 h-4 text-gold-600 shrink-0" />
              <div>
                <span className="block text-[10px] uppercase font-semibold text-espresso-500">Est. Time</span>
                <span className="font-medium text-espresso-900">{item.prepTime || '15-20 mins'}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2 rounded-xl bg-champagne-100/60 border border-champagne-200/60">
              <Flame className="w-4 h-4 text-gold-600 shrink-0" />
              <div>
                <span className="block text-[10px] uppercase font-semibold text-espresso-500">Spice Level</span>
                <span className="font-medium text-espresso-900">
                  {item.spicyLevel === 0 ? 'Mild' : item.spicyLevel === 1 ? 'Gentle' : item.spicyLevel === 2 ? 'Medium' : 'Hot'}
                </span>
              </div>
            </div>
          </div>

          {/* Quantity Stepper & Add to Cart Footer */}
          <div className="pt-4 border-t border-champagne-200/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            
            {/* Quantity Selector */}
            <div className="flex items-center justify-between sm:justify-start gap-3 bg-champagne-100/80 border border-champagne-300/80 rounded-2xl p-1.5">
              <span className="text-xs font-semibold text-espresso-600 pl-2 sm:hidden">
                Quantity
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleDecrement}
                  disabled={quantity <= 1}
                  aria-label="Decrease quantity"
                  className="w-8 h-8 rounded-xl bg-cream-50 hover:bg-cream-100 disabled:opacity-40 text-espresso-800 flex items-center justify-center border border-champagne-300/60 transition-all cursor-pointer disabled:cursor-not-allowed"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="font-bold text-sm text-espresso-900 w-6 text-center">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={handleIncrement}
                  disabled={quantity >= 20}
                  aria-label="Increase quantity"
                  className="w-8 h-8 rounded-xl bg-cream-50 hover:bg-cream-100 disabled:opacity-40 text-espresso-800 flex items-center justify-center border border-champagne-300/60 transition-all cursor-pointer disabled:cursor-not-allowed"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Submit Add to Cart Button */}
            <button
              type="button"
              onClick={handleAddToCart}
              disabled={isSubmitting}
              className={`flex-1 py-3 px-5 rounded-2xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-md cursor-pointer active:scale-98 disabled:opacity-75 ${
                isAdded
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gold-500 hover:bg-gold-600 text-espresso-950 hover:text-white'
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added to Cart!</span>
                </>
              ) : (
                <>
                  <span>Add {quantity > 1 ? `(${quantity})` : ''} to Cart</span>
                  <span className="opacity-60">•</span>
                  <span>₹{totalPrice}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
