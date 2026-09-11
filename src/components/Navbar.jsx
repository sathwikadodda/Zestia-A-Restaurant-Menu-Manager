import React from 'react';
import { ShoppingBag, ChevronDown } from 'lucide-react';

export default function Navbar({
  cartCount,
  cartTotal,
  onOpenCart,
  currentTable,
  onOpenTableSelector
}) {
  return (
    <header className="sticky top-0 z-40 bg-cream-50/95 backdrop-blur-md border-b border-champagne-200/80 transition-all duration-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4">
        
        {/* Main Branding - Primary Visual Focus */}
        <div className="text-center">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-widest text-espresso-900 uppercase leading-none">
            ZESTIA
          </h1>
          <p className="text-[11px] sm:text-xs tracking-[0.25em] uppercase font-medium text-espresso-500 mt-1">
            Scan. Browse. Dine.
          </p>
        </div>

        {/* Action Controls Row */}
        <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-champagne-200/60">
          {/* Current Table Number (Interactive & Subtle) */}
          <button
            type="button"
            onClick={onOpenTableSelector}
            aria-label={`Current table is ${currentTable || 'not selected'}. Click to change table.`}
            className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-champagne-100 hover:bg-champagne-200/90 border border-champagne-300/80 text-espresso-900 transition-all duration-200 text-xs font-semibold shadow-subtle cursor-pointer active:scale-95"
          >
            <span>{currentTable || 'Select Table'}</span>
            <ChevronDown className="w-3.5 h-3.5 text-espresso-500 group-hover:text-gold-700 transition-colors" />
          </button>

          {/* Cart Button */}
          <button
            type="button"
            onClick={onOpenCart}
            aria-label={`Open shopping cart with ${cartCount} items`}
            className="group relative flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-champagne-100 hover:bg-champagne-200/90 border border-champagne-300/80 text-espresso-900 transition-all duration-200 shadow-subtle cursor-pointer active:scale-95 text-xs font-semibold"
          >
            <div className="relative">
              <ShoppingBag className="w-4 h-4 text-espresso-800 group-hover:text-gold-600 transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-gold-600 text-cream-50 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs animate-fade-in">
                  {cartCount > 99 ? '99+' : cartCount}
                </span>
              )}
            </div>
            <span>Cart</span>
            {cartTotal > 0 && (
              <span className="text-espresso-700 font-bold border-l border-champagne-300/80 pl-2">
                ₹{cartTotal}
              </span>
            )}
          </button>
        </div>

      </div>
    </header>
  );
}
