import React from 'react';

export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
  categoryCounts = {}
}) {
  return (
    <nav 
      aria-label="Menu categories"
      className="w-full overflow-x-auto no-scrollbar py-2"
    >
      <div className="flex items-center gap-2 sm:gap-2.5 min-w-max pb-1">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          const count = categoryCounts[cat.id];

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelectCategory(cat.id)}
              aria-selected={isSelected}
              role="tab"
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                isSelected
                  ? 'bg-espresso-900 text-cream-50 shadow-md ring-2 ring-gold-500/50 scale-[1.02]'
                  : 'bg-champagne-100/90 hover:bg-champagne-200/80 text-espresso-800 border border-champagne-200/80 shadow-subtle'
              }`}
            >
              <span>{cat.name}</span>
              {typeof count === 'number' && (
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                    isSelected
                      ? 'bg-gold-500 text-espresso-950'
                      : 'bg-champagne-200 text-espresso-600'
                  }`}
                >
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
