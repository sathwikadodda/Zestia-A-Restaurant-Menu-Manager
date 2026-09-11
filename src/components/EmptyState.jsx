import React from 'react';
import { SearchX, RotateCcw } from 'lucide-react';

export default function EmptyState({
  title = "No dishes found",
  message = "We couldn't find any dishes matching your current selection.",
  actionLabel = "Reset Filters",
  onAction
}) {
  return (
    <div className="py-14 sm:py-20 px-4 text-center flex flex-col items-center justify-center max-w-md mx-auto">
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-champagne-100 border border-champagne-300/80 flex items-center justify-center text-gold-600 shadow-subtle mb-4">
        <SearchX className="w-8 h-8 sm:w-10 sm:h-10 text-espresso-400" />
      </div>

      <h3 className="font-serif text-xl sm:text-2xl font-bold text-espresso-900">
        {title}
      </h3>
      <p className="mt-2 text-xs sm:text-sm text-espresso-600 leading-relaxed">
        {message}
      </p>

      {onAction && (
        <button
          type="button"
          onClick={onAction}
          className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-champagne-200 hover:bg-gold-500 text-espresso-900 hover:text-white font-semibold text-xs sm:text-sm transition-all duration-200 shadow-subtle cursor-pointer active:scale-95"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>{actionLabel}</span>
        </button>
      )}
    </div>
  );
}
