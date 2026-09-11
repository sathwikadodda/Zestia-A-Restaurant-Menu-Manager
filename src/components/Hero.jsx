import React from 'react';
import { UtensilsCrossed, Sparkles, Clock, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-champagne-100/70 via-cream-100/40 to-cream-50 pt-8 pb-10 border-b border-champagne-200/50">
      
      {/* Subtle decorative background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-champagne-300/20 rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top welcome chip */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-champagne-100 border border-gold-400/40 text-espresso-800 text-xs font-medium tracking-wide mb-4 shadow-subtle">
          <Sparkles className="w-3.5 h-3.5 text-gold-600" />
          <span>Modern Artisanal Cuisine</span>
          <span className="text-gold-500">•</span>
          <span className="text-espresso-600">Table & Takeaway Menu</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-espresso-900 tracking-tight max-w-3xl mx-auto leading-[1.15]">
          A Symphony of Flavors, <br />
          <span className="italic font-normal text-gold-600">Crafted with Passion.</span>
        </h1>

        {/* Subtitle description */}
        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-espresso-600 max-w-2xl mx-auto font-normal leading-relaxed">
          Welcome to <strong className="font-semibold text-espresso-800">ZESTIA</strong>. Explore our masterfully curated selection of slow-cooked gravies, flame-kissed tandoor grills, wood-fired specials, and decadent confectionery.
        </p>

        {/* Quick Highlights / Trust Badges */}
        <div className="mt-6 sm:mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-espresso-700">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cream-50/80 border border-champagne-200 shadow-subtle">
            <UtensilsCrossed className="w-3.5 h-3.5 text-gold-600" />
            <span>100% Artisanal Prep</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cream-50/80 border border-champagne-200 shadow-subtle">
            <Clock className="w-3.5 h-3.5 text-gold-600" />
            <span>Average 15-20m Dining Prep</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cream-50/80 border border-champagne-200 shadow-subtle">
            <ShieldCheck className="w-3.5 h-3.5 text-gold-600" />
            <span>Farm-Fresh Produce</span>
          </div>
        </div>

      </div>
    </section>
  );
}
