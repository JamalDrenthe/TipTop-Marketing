import React from 'react';
import { TipTopLogo } from './TipTopLogo.tsx';
import { PACKAGES, PORTFOLIO_ITEMS, PackageTier, PortfolioItem } from '../utils/pricing.ts';
import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';
import { ArrowRight, Sparkles, Video, Camera, Globe, Share2, Wand2, Laptop, Check, Crown, ArrowUpRight } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onSelectPackage: (tier: PackageTier) => void;
  onOpenStrategyModal: (preselectedTier?: PackageTier) => void;
  onSelectCase?: (item: PortfolioItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectPackage,
  onOpenStrategyModal,
  onSelectCase
}) => {
  const { language, t } = useLanguage();
  const isEn = language === 'EN';

  const marqueeItems = [
    t('marquee1'),
    t('marquee2'),
    t('marquee3'),
    t('marquee4'),
    t('marquee5'),
    t('marquee6'),
  ];

  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative bg-[#09090B] text-white overflow-hidden bg-luxury-grid py-16 sm:py-24 border-b border-zinc-800">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#C6A868]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <FadeIn direction="up" delay={0.1}>
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 backdrop-blur-sm">
                  <Sparkles className="w-3.5 h-3.5 text-[#C6A868]" />
                  <span className="text-xs uppercase tracking-[0.22em] text-zinc-300 font-medium">
                    {t('heroBadge')}
                  </span>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.06]">
                  {t('heroTitleLine1')} <br className="hidden sm:inline" />
                  <span className="gold-gradient-text italic font-normal">{t('heroTitleLine2')}</span>
                </h1>
              </FadeIn>

              <FadeIn direction="up" delay={0.3}>
                <p className="text-zinc-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                  {t('heroSubtitle')}
                </p>
              </FadeIn>

              {/* Hero Action Buttons */}
              <FadeIn direction="up" delay={0.4}>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                  <button
                    onClick={() => onNavigate('pakketten')}
                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#09090B] font-bold text-xs uppercase tracking-widest hover:bg-[#C6A868] transition-all duration-300 flex items-center justify-center gap-3 shadow-lg cursor-pointer"
                  >
                    <span>{t('heroCtaPackages')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onOpenStrategyModal()}
                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 text-white border border-white/20 font-semibold text-xs uppercase tracking-widest hover:bg-white/10 hover:border-[#C6A868] transition-all duration-300 flex items-center justify-center gap-2.5 backdrop-blur-md cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4 text-[#C6A868]" />
                    <span>{t('heroCtaStrategy')}</span>
                  </button>
                </div>
              </FadeIn>

              {/* Proof / Metrics Strip */}
              <FadeIn direction="up" delay={0.5}>
                <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto lg:mx-0">
                  <div>
                    <p className="font-serif text-2xl sm:text-3xl font-bold text-white">{t('heroMetric1Value')}</p>
                    <p className="text-[11px] sm:text-xs text-zinc-400 uppercase tracking-wider mt-0.5 font-medium">
                      {t('heroMetric1Label')}
                    </p>
                  </div>
                  <div>
                    <p className="font-serif text-2xl sm:text-3xl font-bold text-[#C6A868]">{t('heroMetric2Value')}</p>
                    <p className="text-[11px] sm:text-xs text-zinc-400 uppercase tracking-wider mt-0.5 font-medium">
                      {t('heroMetric2Label')}
                    </p>
                  </div>
                  <div>
                    <p className="font-serif text-2xl sm:text-3xl font-bold text-white">{t('heroMetric3Value')}</p>
                    <p className="text-[11px] sm:text-xs text-zinc-400 uppercase tracking-wider mt-0.5 font-medium">
                      {t('heroMetric3Label')}
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <FadeIn direction="left" delay={0.3}>
                <div className="relative w-full max-w-md rounded-3xl bg-zinc-900/90 border border-white/15 p-8 shadow-2xl backdrop-blur-xl">
                  <div className="flex items-center justify-between pb-6 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs uppercase tracking-widest text-zinc-300 font-medium">
                        {t('emblemTitle')}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#C6A868] bg-[#C6A868]/10 px-2.5 py-1 rounded-full border border-[#C6A868]/20">
                      {t('emblemTag')}
                    </span>
                  </div>

                  {/* Logo Emblem */}
                  <div className="my-8 flex justify-center">
                    <div className="p-3 rounded-full bg-white ring-8 ring-[#C6A868]/20 shadow-2xl">
                      <TipTopLogo size={180} showText={false} />
                    </div>
                  </div>

                  {/* Key Deliverables */}
                  <div className="space-y-2.5 pt-2">
                    <div className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3 border border-white/10">
                      <span className="text-xs text-zinc-300 flex items-center gap-2">
                        <Video className="w-3.5 h-3.5 text-[#C6A868]" /> {t('emblemItem1')}
                      </span>
                    </div>

                    <div className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3 border border-white/10">
                      <span className="text-xs text-zinc-300 flex items-center gap-2">
                        <Wand2 className="w-3.5 h-3.5 text-[#C6A868]" /> {t('emblemItem2')}
                      </span>
                    </div>

                    <div className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3 border border-white/10">
                      <span className="text-xs text-zinc-300 flex items-center gap-2">
                        <Laptop className="w-3.5 h-3.5 text-[#C6A868]" /> {t('emblemItem3')}
                      </span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* INFINITE MARQUEE TICKER */}
      <div className="bg-zinc-950 border-y border-zinc-800 py-4 overflow-hidden select-none">
        <div className="animate-marquee">
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <span
              key={idx}
              className="mx-8 text-xs uppercase tracking-[0.28em] text-zinc-400 font-medium whitespace-nowrap flex items-center gap-3"
            >
              <span className="text-[#C6A868]">✦</span>
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>

      {/* OVER TIPTOP MARKETING: 4 PILLARS */}
      <section className="py-20 sm:py-28 bg-white dark:bg-[#09090B] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5 space-y-4">
              <FadeIn direction="right">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#A88640] dark:text-[#C6A868] block">
                  {t('pillarsTag')}
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-white leading-tight mt-2">
                  {t('pillarsTitleLine1')} <br />
                  <span className="italic font-normal text-zinc-500 dark:text-zinc-400">{t('pillarsTitleLine2')}</span>
                </h2>
                <div className="w-16 h-0.5 bg-[#C6A868] my-6" />
                <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-base sm:text-lg">
                  {t('pillarsDesc')}
                </p>
              </FadeIn>
            </div>

            <div className="lg:col-span-7">
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6" staggerDelay={0.12}>
                <StaggerItem>
                  <div className="bg-zinc-50 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-7 hover:border-[#C6A868] dark:hover:border-[#C6A868] transition-all duration-300 group h-full">
                    <div className="w-12 h-12 rounded-xl bg-[#09090B] dark:bg-zinc-800 text-white flex items-center justify-center mb-5 group-hover:bg-[#C6A868] group-hover:text-[#09090B] transition-colors">
                      <Video className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-zinc-900 dark:text-white mb-2">{t('pillar1Title')}</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {t('pillar1Desc')}
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-zinc-50 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-7 hover:border-[#C6A868] dark:hover:border-[#C6A868] transition-all duration-300 group h-full">
                    <div className="w-12 h-12 rounded-xl bg-[#09090B] dark:bg-zinc-800 text-white flex items-center justify-center mb-5 group-hover:bg-[#C6A868] group-hover:text-[#09090B] transition-colors">
                      <Share2 className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-zinc-900 dark:text-white mb-2">{t('pillar2Title')}</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {t('pillar2Desc')}
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-zinc-50 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-7 hover:border-[#C6A868] dark:hover:border-[#C6A868] transition-all duration-300 group h-full">
                    <div className="w-12 h-12 rounded-xl bg-[#09090B] dark:bg-zinc-800 text-white flex items-center justify-center mb-5 group-hover:bg-[#C6A868] group-hover:text-[#09090B] transition-colors">
                      <Wand2 className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-zinc-900 dark:text-white mb-2">{t('pillar3Title')}</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {t('pillar3Desc')}
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-zinc-50 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-7 hover:border-[#C6A868] dark:hover:border-[#C6A868] transition-all duration-300 group h-full">
                    <div className="w-12 h-12 rounded-xl bg-[#09090B] dark:bg-zinc-800 text-white flex items-center justify-center mb-5 group-hover:bg-[#C6A868] group-hover:text-[#09090B] transition-colors">
                      <Laptop className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-zinc-900 dark:text-white mb-2">{t('pillar4Title')}</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {t('pillar4Desc')}
                    </p>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>

          </div>
        </div>
      </section>

      {/* PACKAGES PREVIEW SECTION */}
      <section className="py-20 sm:py-28 bg-[#09090B] text-white border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C6A868] block mb-3">
                  {t('packagesTag')}
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl font-bold">
                  {t('packagesTitle')} <span className="italic font-normal text-zinc-400">{t('packagesTitleItalic')}</span>
                </h2>
              </div>
              <button
                onClick={() => onNavigate('pakketten')}
                className="self-start md:self-auto inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C6A868] hover:text-white transition font-semibold border border-[#C6A868]/40 rounded-full px-5 py-3 cursor-pointer"
              >
                <span>{t('packagesFullComparison')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch" staggerDelay={0.15}>
            {PACKAGES.map((pkg) => {
              const isFeatured = pkg.id === 'PREMIUM';
              const features = isEn ? pkg.featuresEn : pkg.features;
              const price = isEn ? pkg.priceDisplayEn : pkg.priceDisplay;
              const badge = isEn ? pkg.badgeEn : pkg.badge;

              return (
                <StaggerItem key={pkg.id}>
                  <div
                    className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 h-full ${
                      isFeatured
                        ? 'bg-zinc-900 border-2 border-[#C6A868] shadow-2xl lg:-translate-y-2'
                        : 'bg-zinc-950 border border-zinc-800 hover:border-zinc-700'
                    }`}
                  >
                    {isFeatured && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 metallic-badge text-[#09090B] text-[11px] font-extrabold uppercase tracking-[0.2em] px-5 py-1.5 rounded-full shadow-md whitespace-nowrap">
                        ✦ {badge}
                      </div>
                    )}

                    <div>
                      <div className="flex items-center justify-between mb-3 pt-2">
                        <span className="text-xs uppercase tracking-widest text-[#C6A868] font-bold">
                          {pkg.id}
                        </span>
                        {pkg.id === 'GOAT' && <Crown className="w-4 h-4 text-[#C6A868]" />}
                      </div>

                      <h3 className="font-serif text-3xl font-bold text-white">{pkg.name}</h3>
                      <p className="font-serif text-2xl font-bold text-zinc-200 mt-3">
                        {price}
                      </p>

                      <ul className="space-y-3 text-xs text-zinc-300 mt-6 pt-6 border-t border-zinc-800">
                        {features.map((f, idx) => (
                          <li key={idx} className="flex items-center gap-2.5">
                            <Check className="w-4 h-4 text-[#C6A868] shrink-0" />
                            <span className={f.includes('Website') || f.includes('Webshop') ? 'font-bold text-white' : ''}>
                              {f}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 pt-6 border-t border-zinc-800">
                      <button
                        onClick={() => onSelectPackage(pkg.id)}
                        className={`w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest transition flex items-center justify-center gap-2 cursor-pointer ${
                          isFeatured
                            ? 'metallic-badge text-[#09090B] hover:opacity-95'
                            : 'bg-white/10 text-white hover:bg-white hover:text-[#09090B]'
                        }`}
                      >
                        <span>{t('packagesSelectButton')} {pkg.id}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* PORTFOLIO TEASER SECTION */}
      <section className="py-20 sm:py-28 bg-white dark:bg-[#09090B] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#A88640] dark:text-[#C6A868] block mb-3">
                  {t('portfolioTag')}
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-white">
                  {t('portfolioTitle')} <span className="italic font-normal text-zinc-500 dark:text-zinc-400">{t('portfolioTitleItalic')}</span>
                </h2>
              </div>
              <button
                onClick={() => onNavigate('portfolio')}
                className="self-start md:self-auto inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-[#09090B] text-xs uppercase tracking-widest font-semibold hover:bg-zinc-700 dark:hover:bg-[#C6A868] transition cursor-pointer"
              >
                <span>{t('portfolioViewAll')}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.15}>
            {PORTFOLIO_ITEMS.slice(0, 3).map((item) => {
              const results = isEn ? item.resultsEn : item.results;
              const summary = isEn ? item.deliverableSummaryEn : item.deliverableSummary;
              const catLabel = isEn ? item.categoryLabelEn : item.categoryLabel;

              return (
                <StaggerItem key={item.id}>
                  <div
                    onClick={() => (onSelectCase ? onSelectCase(item) : onNavigate('portfolio'))}
                    data-cursor="view"
                    className="portfolio-card group relative rounded-3xl overflow-hidden bg-zinc-950 aspect-[4/5] cursor-pointer shadow-lg border border-zinc-200 dark:border-zinc-800 transition-all duration-300 hover:shadow-2xl hover:border-[#C6A868]/60 h-full"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black transition-transform duration-700 group-hover:scale-105">
                      <div className="absolute inset-0 bg-luxury-grid opacity-30" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-3 text-[#C6A868] group-hover:scale-110 transition-transform">
                          {item.category === 'video' && <Video className="w-7 h-7" />}
                          {item.category === 'shoots' && <Camera className="w-7 h-7" />}
                          {item.category === 'web' && <Globe className="w-7 h-7" />}
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C6A868]">
                          {summary}
                        </span>
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

                    <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                      <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest bg-black/70 text-white backdrop-blur-md border border-white/15 font-semibold">
                        {item.packageUsed} {t('portfolioPackageBadge')}
                      </span>
                      <span className="w-8 h-8 rounded-full bg-white text-zinc-950 flex items-center justify-center shadow-md group-hover:bg-[#C6A868] transition">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                      <p className="text-[10px] uppercase tracking-widest text-[#C6A868] font-semibold mb-1">
                        {catLabel}
                      </p>
                      <h3 className="font-serif text-2xl font-bold group-hover:text-[#C6A868] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-zinc-300 mt-2 font-medium">
                        {results.viewsOrReach} · {results.growthOrConversion}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* BOTTOM CALL TO ACTION */}
      <section className="py-20 bg-[#09090B] text-white border-t border-zinc-800">
        <FadeIn direction="up">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <span className="text-[#C6A868] text-sm font-mono">{t('bottomCtaTag')}</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold">
              {t('bottomCtaTitle')}
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg font-light leading-relaxed">
              {t('bottomCtaDesc')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <button
                onClick={() => onOpenStrategyModal()}
                className="px-8 py-4 rounded-full metallic-badge text-[#09090B] font-bold text-xs uppercase tracking-widest hover:opacity-95 transition shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t('heroCtaStrategy')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 rounded-full bg-white/10 text-white hover:bg-white/20 font-semibold text-xs uppercase tracking-widest transition cursor-pointer"
              >
                {t('bottomCtaDirectBtn')}
              </button>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
};
