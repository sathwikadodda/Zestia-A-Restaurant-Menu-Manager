import React from 'react';
import { Receipt, CheckCircle2, Clock, Check } from 'lucide-react';

export default function BillConfirmation({ billDetails, onClose }) {
  if (!billDetails) return null;

  const { tableNumber, roundsCount = 1, sessionTotal = 0, time } = billDetails;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="bill-confirmation-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto bg-espresso-950/70 backdrop-blur-md animate-fade-in"
    >
      <div
        className="relative w-full max-w-md bg-cream-50 rounded-3xl overflow-hidden shadow-modal border border-champagne-300 p-6 sm:p-7 animate-slide-up my-auto text-center"
      >
        {/* Status Icon */}
        <div className="w-16 h-16 mx-auto rounded-full bg-champagne-100 border-2 border-gold-500/50 flex items-center justify-center text-gold-700 shadow-champagne mb-4">
          <Receipt className="w-8 h-8" />
        </div>

        {/* Title & Subtitle */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-champagne-200/70 text-gold-700 text-xs font-bold uppercase tracking-wider mb-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          <span>Dining Session Completed</span>
        </div>

        <h2
          id="bill-confirmation-title"
          className="font-serif text-2xl sm:text-3xl font-bold text-espresso-900"
        >
          Bill Requested for {tableNumber}
        </h2>

        <p className="mt-2 text-xs sm:text-sm text-espresso-600 leading-relaxed max-w-sm mx-auto">
          Your order is complete. The bill has been requested and our staff will arrive at <strong className="text-espresso-900 font-bold">{tableNumber}</strong> shortly.
        </p>

        {/* Session Summary Card */}
        <div className="mt-5 p-4 rounded-2xl bg-champagne-100/60 border border-champagne-200/80 text-left space-y-2.5 text-xs">
          <div className="flex items-center justify-between border-b border-champagne-200 pb-2">
            <span className="text-espresso-600 font-medium">Table</span>
            <span className="font-bold text-espresso-950">{tableNumber}</span>
          </div>

          <div className="flex items-center justify-between border-b border-champagne-200 pb-2">
            <span className="text-espresso-600 font-medium">Order Rounds</span>
            <span className="font-bold text-espresso-950">{roundsCount} {roundsCount === 1 ? 'round' : 'rounds'}</span>
          </div>

          {sessionTotal > 0 && (
            <div className="flex items-center justify-between border-b border-champagne-200 pb-2">
              <span className="text-espresso-600 font-medium">Session Total</span>
              <span className="font-serif text-base font-bold text-espresso-950">₹{sessionTotal}</span>
            </div>
          )}

          <div className="flex items-center justify-between pt-0.5 text-[11px] text-espresso-500">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-gold-600" />
              <span>Requested at {time || 'just now'}</span>
            </span>
            <span className="text-emerald-700 font-semibold">Staff Notified</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-6">
          <button
            type="button"
            onClick={onClose}
            className="w-full py-3.5 px-5 rounded-2xl bg-espresso-900 hover:bg-gold-600 text-cream-50 hover:text-espresso-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all duration-200 cursor-pointer active:scale-98"
          >
            <Check className="w-4 h-4" />
            <span>Done / Ready for Next Session</span>
          </button>
        </div>

      </div>
    </div>
  );
}
