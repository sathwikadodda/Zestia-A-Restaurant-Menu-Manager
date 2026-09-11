import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

export default function ErrorState({ message, onRetry }) {
  return (
    <div className="py-14 sm:py-20 px-4 text-center flex flex-col items-center justify-center max-w-md mx-auto">
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 shadow-subtle mb-4">
        <AlertCircle className="w-8 h-8 sm:w-10 sm:h-10" />
      </div>

      <h3 className="font-serif text-xl sm:text-2xl font-bold text-espresso-900">
        Unable to Load Menu
      </h3>
      <p className="mt-2 text-xs sm:text-sm text-espresso-600 leading-relaxed">
        {message || "We encountered an issue fetching the latest kitchen offerings. Please try reloading."}
      </p>

      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-espresso-900 hover:bg-gold-600 text-cream-50 hover:text-espresso-950 font-semibold text-xs sm:text-sm transition-all duration-200 shadow-subtle cursor-pointer active:scale-95"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Retry Loading Menu</span>
        </button>
      )}
    </div>
  );
}
