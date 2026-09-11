import React, { useState } from 'react';
import { Plus, Check, Clock } from 'lucide-react';

export default function FoodCard({ item, inCartQuantity = 0, onAddToCart, onSelect }) {
  const [justAdded, setJustAdded] = useState(false);

  const handleQuickAdd = (e) => {
    e.stopPropagation();
    onAddToCart(item, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 900);
  };

  return (
    <article
      onClick={() => onSelect(item)}
      className="group relative flex flex-col justify-between bg-champagne-50/70 hover:bg-champagne-100/60 rounded-2xl p-3.5 sm:p-4 border border-champagne-200/90 hover:border-gold-400/60 transition-all duration-300 shadow-subtle hover:shadow-champagne cursor-pointer"
    >
      {/* Top Image Section */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-champagne-200/50 mb-3.5">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80';
          }}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Dietary veg / non-veg badge */}
        <div className="absolute top-2.5 left-2.5 bg-cream-50/95 backdrop-blur-sm px-1.5 py-1 rounded-md border border-champagne-200/90 shadow-sm flex items-center gap-1.5">
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
          <span className="text-[10px] font-semibold text-espresso-800 uppercase tracking-wider">
            {item.isVeg ? 'Veg' : 'Non-Veg'}
          </span>
        </div>

        {/* Special Chef/Popular Badge if present */}
        {item.badge && (
          <div className="absolute top-2.5 right-2.5 bg-espresso-900/90 text-gold-300 backdrop-blur-sm text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wider uppercase shadow-sm">
            {item.badge}
          </div>
        )}

        {/* Prep Time pill */}
        {item.prepTime && (
          <div className="absolute bottom-2 right-2 bg-cream-50/90 backdrop-blur-sm text-espresso-700 text-[10px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
            <Clock className="w-2.5 h-2.5 text-gold-600" />
            <span>{item.prepTime}</span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-serif text-base sm:text-lg font-bold text-espresso-900 group-hover:text-gold-700 transition-colors line-clamp-1">
            {item.name}
          </h3>
        </div>

        <p className="mt-1 text-xs text-espresso-600 line-clamp-2 leading-relaxed">
          {item.description}
        </p>
      </div>

      {/* Bottom Footer: Price & Add Button */}
      <div className="mt-4 pt-3 border-t border-champagne-200/80 flex items-center justify-between gap-2">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase font-semibold text-espresso-500 tracking-wider">Price</span>
          <span className="font-serif text-lg font-bold text-espresso-950">
            ₹{item.price}
          </span>
        </div>

        <button
          type="button"
          onClick={handleQuickAdd}
          aria-label={`Add ${item.name} to cart`}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 shadow-sm cursor-pointer active:scale-95 ${
            justAdded
              ? 'bg-emerald-600 text-white'
              : inCartQuantity > 0
              ? 'bg-champagne-200 hover:bg-gold-500 hover:text-white text-espresso-900 border border-gold-400/60'
              : 'bg-gold-500 hover:bg-gold-600 text-espresso-950 hover:text-white'
          }`}
        >
          {justAdded ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>Added!</span>
            </>
          ) : inCartQuantity > 0 ? (
            <>
              <span className="w-4 h-4 rounded-full bg-espresso-900 text-gold-300 text-[10px] flex items-center justify-center font-bold">
                {inCartQuantity}
              </span>
              <span>Add +</span>
            </>
          ) : (
            <>
              <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Add</span>
            </>
          )}
        </button>
      </div>
    </article>
  );
}
