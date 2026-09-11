import React, { useEffect } from 'react';
import { Check, ShoppingBag, X } from 'lucide-react';

export default function Toast({ message, visible, onClose }) {
  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => {
      onClose();
    }, 2500);
    return () => clearTimeout(timer);
  }, [visible, onClose]);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-espresso-950 text-cream-50 shadow-2xl border border-gold-500/40 animate-toast min-w-[280px] max-w-[90vw]"
    >
      <div className="w-6 h-6 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center shrink-0">
        <Check className="w-3.5 h-3.5" />
      </div>
      <p className="text-xs font-medium text-cream-100 flex-1 truncate">
        {message}
      </p>
      <button
        type="button"
        onClick={onClose}
        aria-label="Dismiss toast"
        className="text-espresso-400 hover:text-cream-50 p-1 -mr-1 transition-colors cursor-pointer"
      >
        <X className="w-3 h-3" />
      </button>
    </div>
  );
}
