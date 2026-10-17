import React, { useState } from 'react';
import { PORTFOLIO_ITEMS, PortfolioItem, filterPortfolioItems } from '../utils/pricing.ts';
import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';
import { Expand, Sparkles, Video, Camera, Globe, ArrowUpRight } from 'lucide-react';

interface PortfolioPageProps {
  onSelectCase: (item: PortfolioItem) => void;
  onOpenStrategyModal: () => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  onSelectCase,
  onOpenStrategyModal
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { t } = useLanguage();

  const filteredItems = filterPortfolioItems(PORTFOLIO_ITEMS, activeCategory);

  const categories = [
    { id: 'all', label: t('portfolioCategoryAll') },
    { id: 'video', label: t('portfolioCategoryVideo') },
    { id: 'shoots', label: t('portfolioCategoryShoots') },
    { id: 'web', label: t('portfolioCategoryWeb') }
  ];

  return (
    <div className="py-12 sm:py-20 bg-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <FadeIn direction="up">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 text-zinc-800 text-xs uppercase tracking-widest font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#C6A868]" />
              <span>{t('portfolioTag')}</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold text-zinc-900 tracking-tight">
              {t('portfolioTitle')} <span className="italic font-normal text-zinc-600">{t('portfolioTitleItalic')}</span>
            </h1>
            <p className="text-zinc-600 mt-4 text-base sm:text-lg leading-relaxed">
              {t('heroSubtitle')}
            </p>
          </div>
        </FadeIn>

        {/* Filter Bar */}
        <FadeIn direction="up" delay={0.2}>
          <div className="flex flex-wrap items-center gap-2 mt-8 p-1 bg-zinc-100 rounded-2xl w-fit">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-zinc-900 text-white shadow-sm'
                    : 'text-zinc-600 hover:text-zinc-950'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
          {filteredItems.map((item) => (
            <StaggerItem key={item.id}>
              <div
                onClick={() => onSelectCase(item)}
                data-cursor="view"
                className="portfolio-card group relative rounded-3xl overflow-hidden bg-zinc-950 aspect-[4/5] cursor-pointer shadow-lg border border-zinc-200 transition-all duration-300 hover:shadow-2xl hover:border-zinc-400 h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black transition-transform duration-700 group-hover:scale-105">
                  <div className="absolute inset-0 opacity-40 mix-blend-screen bg-luxury-grid" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-[#C6A868] shadow-inner group-hover:scale-110 transition-transform">
                      {item.category === 'video' && <Video className="w-7 h-7" />}
                      {item.category === 'shoots' && <Camera className="w-7 h-7" />}
                      {item.category === 'web' && <Globe className="w-7 h-7" />}
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#C6A868]">
                      {item.deliverableSummary}
                    </span>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />

                <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                  <span className="px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-widest bg-black/70 text-white backdrop-blur-md border border-white/15 font-semibold">
                    {item.packageUsed} PAKKET
                  </span>
                  <span className="w-10 h-10 rounded-full bg-white text-zinc-950 flex items-center justify-center shadow-lg group-hover:bg-[#C6A868] transition">
                    <Expand className="w-4 h-4" />
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                  <p className="text-[11px] uppercase tracking-widest text-[#C6A868] font-semibold mb-1">
                    {item.categoryLabel}
                  </p>
                  <h3 className="font-serif text-2xl font-bold group-hover:text-[#C6A868] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-300 mt-2 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-white/15 flex items-center justify-between text-xs">
                    <span className="font-bold text-[#C6A868]">
                      {item.results.viewsOrReach}
                    </span>
                    <span className="text-zinc-300 font-medium">
                      {item.results.growthOrConversion}
                    </span>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom Banner */}
        <FadeIn direction="up" delay={0.2}>
          <div className="mt-16 bg-[#09090B] text-white rounded-3xl p-8 sm:p-12 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xl text-center md:text-left">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                {t('portfolioBannerTitle')}
              </h3>
              <p className="text-zinc-400 text-sm mt-2">
                {t('portfolioBannerDesc')}
              </p>
            </div>
            <button
              onClick={onOpenStrategyModal}
              className="metallic-badge text-[#09090B] px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:opacity-95 transition shadow-lg shrink-0 flex items-center gap-2"
            >
              <span>{t('heroCtaStrategy')}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};
