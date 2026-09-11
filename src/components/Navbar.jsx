import React from 'react';
import { ShoppingBag, Sparkles } from 'lucide-react';

export default function Navbar({ cartCount, cartTotal, onOpenCart }) {
  return (
    <header className="sticky top-0 z-40 bg-cream-50/95 backdrop-blur-md border-b border-champagne-200/70 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        
        {/* Brand Identity */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-champagne-100 border border-gold-400/40 flex items-center justify-center text-gold-600 shadow-subtle">
            <span className="font-serif font-bold text-xl leading-none tracking-tighter">Z</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-serif text-2xl font-bold tracking-wider text-espresso-900 uppercase">
                ZESTIA
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold-500 mb-0.5"></span>
            </div>
            <p className="text-[11px] tracking-widest uppercase font-medium text-espresso-600">
              Scan. Browse. Dine.
            </p>
          </div>
        </div>

        {/* Right Action: Cart Trigger */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenCart}
            aria-label={`Open shopping cart with ${cartCount} items`}
            className="group relative flex items-center gap-2.5 px-3.5 sm:px-4 py-2 rounded-full bg-champagne-100 hover:bg-champagne-200/90 border border-champagne-300/80 text-espresso-900 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold-500/50 shadow-subtle cursor-pointer active:scale-95"
          >
            <div className="relative">
              <ShoppingBag className="w-5 h-5 text-espresso-800 group-hover:text-gold-600 transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold-600 text-cream-50 text-[11px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center shadow-sm animate-fade-in">
                  {cartCount > 99 ? '99+' : cartCount}
                </span>
              )}
            </div>
            
            <div className="hidden sm:flex flex-col items-start text-left">
              <span className="text-[11px] uppercase tracking-wider text-espresso-500 font-semibold leading-none">
                Cart
              </span>
              <span className="text-xs font-bold text-espresso-900 leading-tight">
                {cartTotal > 0 ? `₹${cartTotal}` : 'Empty'}
              </span>
            </div>

            {cartCount > 0 && (
              <span className="sm:hidden text-xs font-bold text-espresso-800 pl-0.5">
                ₹{cartTotal}
              </span>
            )}
          </button>
        </div>

      </div>
    </header>
  );
}
