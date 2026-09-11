import React from 'react';
import { Search, X } from 'lucide-react';

export default function SearchBar({ searchQuery, onSearchChange, onClearSearch, vegOnly, onToggleVegOnly }) {
  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
      
      {/* Search Input Container */}
      <div className="relative flex-1 group">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-espresso-400 group-focus-within:text-gold-600 transition-colors">
          <Search className="w-4 h-4" />
        </div>

        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by dish name (e.g. Biryani, Butter Chicken, Pizza)..."
          maxLength={100}
          aria-label="Search dishes by name"
          className="w-full pl-10 pr-10 py-2.5 sm:py-3 rounded-xl bg-champagne-50/80 hover:bg-champagne-100/60 focus:bg-cream-50 border border-champagne-300 text-espresso-900 placeholder:text-espresso-400 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/40 focus:border-gold-500 transition-all shadow-subtle"
        />

        {searchQuery && (
          <button
            type="button"
            onClick={onClearSearch}
            aria-label="Clear search input"
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-espresso-400 hover:text-espresso-800 transition-colors cursor-pointer"
          >
            <div className="w-6 h-6 rounded-full bg-champagne-200/80 hover:bg-champagne-300 flex items-center justify-center">
              <X className="w-3.5 h-3.5 text-espresso-700" />
            </div>
          </button>
        )}
      </div>

      {/* Dietary Veg-Only Quick Filter Toggle */}
      <button
        type="button"
        onClick={onToggleVegOnly}
        aria-pressed={vegOnly}
        className={`flex items-center justify-center gap-2 px-3.5 py-2.5 sm:py-3 rounded-xl border text-xs font-semibold tracking-wide transition-all shadow-subtle shrink-0 cursor-pointer ${
          vegOnly
            ? 'bg-emerald-50 border-emerald-500 text-emerald-800 ring-2 ring-emerald-500/20'
            : 'bg-champagne-50/80 hover:bg-champagne-100/70 border-champagne-300 text-espresso-700'
        }`}
      >
        <span className="w-3.5 h-3.5 rounded-sm border border-emerald-600 flex items-center justify-center p-0.5 bg-white">
          <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
        </span>
        <span>Pure Veg</span>
      </button>

    </div>
  );
}
