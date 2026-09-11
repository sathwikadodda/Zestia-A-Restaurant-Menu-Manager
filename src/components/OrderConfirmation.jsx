import React from 'react';
import { CheckCircle2, Clock, UtensilsCrossed, ArrowRight } from 'lucide-react';

export default function OrderConfirmation({ orderDetails, onBackToMenu }) {
  if (!orderDetails) return null;

  const { orderId, tableNumber, items, subtotal, tax, grandTotal, timestamp } = orderDetails;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-success-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto bg-espresso-950/70 backdrop-blur-md animate-fade-in"
    >
      <div className="relative w-full max-w-lg bg-cream-50 rounded-3xl overflow-hidden shadow-modal border border-champagne-300 p-5 sm:p-8 animate-slide-up my-auto text-center">
        
        {/* Success Icon with gold ring */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-champagne-100 border-2 border-gold-500/50 flex items-center justify-center text-emerald-600 shadow-champagne mb-4">
          <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12" />
        </div>

        {/* Title & Subtitle with Table Badge */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-2">
          <span className="inline-block px-3 py-1 rounded-full bg-champagne-200/70 text-gold-700 text-xs font-bold uppercase tracking-wider">
            Order Confirmed!
          </span>
          {tableNumber && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500 text-espresso-950 text-xs font-bold uppercase tracking-wider shadow-sm">
              <span role="img" aria-label="Table">🍽️</span>
              <span>{tableNumber}</span>
            </span>
          )}
        </div>

        <h2 id="order-success-title" className="font-serif text-2xl sm:text-3xl font-bold text-espresso-900">
          Thank you for dining with Zestia
        </h2>
        <p className="mt-1.5 text-xs sm:text-sm text-espresso-600 max-w-sm mx-auto">
          Your culinary order for <strong className="font-semibold text-espresso-900">{tableNumber || 'your table'}</strong> has been dispatched to our artisanal kitchen and preparation has commenced.
        </p>

        {/* Order Meta Ticket */}
        <div className="mt-5 p-4 rounded-2xl bg-champagne-100/60 border border-champagne-200/80 text-left space-y-3">
          <div className="flex items-center justify-between border-b border-champagne-200 pb-2.5">
            <div>
              <span className="block text-[10px] uppercase font-bold text-espresso-500">Order Reference</span>
              <span className="font-serif text-base font-bold text-espresso-950 tracking-wider">
                {orderId}
              </span>
            </div>
            {tableNumber && (
              <div className="text-center">
                <span className="block text-[10px] uppercase font-bold text-espresso-500">Table</span>
                <span className="font-serif text-base font-bold text-espresso-950">
                  {tableNumber}
                </span>
              </div>
            )}
            <div className="text-right">
              <span className="block text-[10px] uppercase font-bold text-espresso-500">Est. Serving Time</span>
              <span className="text-xs font-bold text-gold-700 flex items-center gap-1 justify-end">
                <Clock className="w-3.5 h-3.5" />
                18 - 22 mins
              </span>
            </div>
          </div>

          {/* Ordered Items List */}
          <div className="max-h-48 overflow-y-auto space-y-2 pr-1 divide-y divide-champagne-200/40">
            {items.map((item) => (
              <div key={item.id} className="pt-2 first:pt-0 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 truncate pr-2">
                  <span className="font-bold text-espresso-900">{item.quantity}x</span>
                  <span className="text-espresso-800 truncate">{item.name}</span>
                </div>
                <span className="font-semibold text-espresso-900 shrink-0">
                  ₹{item.price * item.quantity}
                </span>
              </div>
            ))}
          </div>

          {/* Financial Breakdown */}
          <div className="pt-2 border-t border-champagne-200 text-xs space-y-1">
            <div className="flex justify-between text-espresso-600">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between text-espresso-600">
              <span>Taxes & Service (5%)</span>
              <span>₹{tax}</span>
            </div>
            <div className="flex justify-between font-serif text-sm font-bold text-espresso-950 pt-1 border-t border-champagne-200">
              <span>Grand Total</span>
              <span>₹{grandTotal}</span>
            </div>
          </div>
        </div>

        {/* Back to Menu Action */}
        <div className="mt-6">
          <button
            type="button"
            onClick={onBackToMenu}
            className="w-full py-3.5 px-6 rounded-2xl bg-espresso-900 hover:bg-gold-600 text-cream-50 hover:text-espresso-950 font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all duration-200 cursor-pointer active:scale-98"
          >
            <span>Back to Menu</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
