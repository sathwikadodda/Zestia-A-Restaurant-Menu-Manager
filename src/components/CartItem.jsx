import React from 'react';
import { Plus, Minus, Trash2 } from 'lucide-react';

export default function CartItem({ item, onUpdateQuantity, onRemove }) {
  const itemTotal = item.price * item.quantity;

  return (
    <div className="flex items-center gap-3 p-3 rounded-2xl bg-champagne-100/50 hover:bg-champagne-100/80 border border-champagne-200/80 transition-all">
      {/* Thumbnail */}
      <img
        src={item.image}
        alt={item.name}
        onError={(e) => {
          e.currentTarget.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80';
        }}
        className="w-16 h-16 rounded-xl object-cover shrink-0 border border-champagne-200"
      />

      {/* Details */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-1">
          <h4 className="text-xs sm:text-sm font-bold text-espresso-900 truncate">
            {item.name}
          </h4>
          <button
            type="button"
            onClick={() => onRemove(item.id)}
            aria-label={`Remove ${item.name} from cart`}
            className="text-espresso-400 hover:text-rose-600 p-1 -mt-1 -mr-1 transition-colors cursor-pointer"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="flex items-center gap-2 mt-0.5">
          <span className="text-[11px] text-espresso-600">
            ₹{item.price} each
          </span>
          <span 
            className={`w-2.5 h-2.5 rounded-xs border flex items-center justify-center p-0.5 ${
              item.isVeg ? 'border-emerald-600' : 'border-rose-700'
            }`}
          >
            <span className={`w-1 h-1 rounded-full ${item.isVeg ? 'bg-emerald-600' : 'bg-rose-700'}`} />
          </span>
        </div>

        {/* Quantity Controls & Line Total */}
        <div className="flex items-center justify-between mt-2 pt-1 border-t border-champagne-200/60">
          <div className="flex items-center gap-1.5 bg-cream-50 border border-champagne-300/80 rounded-lg p-0.5">
            <button
              type="button"
              onClick={() => onUpdateQuantity(item.id, -1)}
              aria-label={`Decrease quantity of ${item.name}`}
              className="w-6 h-6 rounded-md hover:bg-champagne-200 text-espresso-800 flex items-center justify-center transition-colors cursor-pointer"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="text-xs font-bold text-espresso-900 w-5 text-center">
              {item.quantity}
            </span>
            <button
              type="button"
              onClick={() => onUpdateQuantity(item.id, 1)}
              aria-label={`Increase quantity of ${item.name}`}
              className="w-6 h-6 rounded-md hover:bg-champagne-200 text-espresso-800 flex items-center justify-center transition-colors cursor-pointer"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>

          <span className="font-serif text-sm font-bold text-espresso-950">
            ₹{itemTotal}
          </span>
        </div>
      </div>
    </div>
  );
}
