import React from 'react';

export default function LoadingState({ count = 6 }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="bg-champagne-50/70 rounded-2xl p-4 border border-champagne-200/80 animate-pulse space-y-3.5"
        >
          {/* Skeleton Image */}
          <div className="aspect-[16/10] w-full rounded-xl bg-champagne-200/60" />

          {/* Skeleton Title & Description */}
          <div className="space-y-2 pt-1">
            <div className="h-4 bg-champagne-200/70 rounded-md w-3/4" />
            <div className="h-3 bg-champagne-200/50 rounded-md w-full" />
            <div className="h-3 bg-champagne-200/40 rounded-md w-2/3" />
          </div>

          {/* Skeleton Footer */}
          <div className="pt-3 border-t border-champagne-200/60 flex items-center justify-between">
            <div className="h-5 bg-champagne-200/80 rounded-md w-14" />
            <div className="h-8 bg-champagne-200 rounded-xl w-20" />
          </div>
        </div>
      ))}
    </div>
  );
}
