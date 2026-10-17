import React, { useState } from 'react';
import { PACKAGES, PackageTier } from '../utils/pricing.ts';
import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';
import { Check, Crown, Sparkles, ArrowRight } from 'lucide-react';

interface PricingPageProps {
  onSelectPackage: (tier: PackageTier) => void;
  onOpenStrategyModal: (preselectedTier?: PackageTier) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({
  onSelectPackage,
  onOpenStrategyModal
}) => {
  const [highlightedTier, setHighlightedTier] = useState<PackageTier>('PREMIUM');
  const { language, t } = useLanguage();
  const isEn = language === 'EN';

  return (
    <div className="py-12 sm:py-20 bg-white dark:bg-[#09090B] transition-colors">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <FadeIn direction="up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs uppercase tracking-widest font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A868]" />
            <span>{t('packagesTag')}</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-zinc-900 dark:text-white tracking-tight">
            {t('navPackages')} &amp; <span className="italic font-normal text-zinc-500 dark:text-zinc-400">{t('packagesPageTitleSuffix')}</span>
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mt-4 text-base sm:text-lg leading-relaxed">
            {t('bottomCtaDesc')}
          </p>
        </FadeIn>

        {/* Interactive Growth Goal Selector */}
        <FadeIn direction="up" delay={0.2}>
          <div className="mt-10 max-w-2xl mx-auto p-1.5 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 rounded-2xl flex flex-col sm:flex-row gap-1.5 shadow-inner">
            <button
              onClick={() => setHighlightedTier('PLATINUM')}
              className={`flex-1 py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                highlightedTier === 'PLATINUM'
                  ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
              }`}
            >
              {t('packagesGoal1')}
            </button>
            <button
              onClick={() => setHighlightedTier('PREMIUM')}
              className={`flex-1 py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                highlightedTier === 'PREMIUM'
                  ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
              }`}
            >
              {t('packagesGoal2')}
            </button>
            <button
              onClick={() => setHighlightedTier('GOAT')}
              className={`flex-1 py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                highlightedTier === 'GOAT'
                  ? 'metallic-badge text-zinc-950 font-bold shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
              }`}
            >
              {t('packagesGoal3')}
            </button>
          </div>
        </FadeIn>
      </div>

      {/* 3 Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch" staggerDelay={0.15}>
          {PACKAGES.map((pkg, index) => {
            const isFeatured = pkg.id === 'PREMIUM';
            const isSelected = highlightedTier === pkg.id;
            const features = isEn ? pkg.featuresEn : pkg.features;
            const price = isEn ? pkg.priceDisplayEn : pkg.priceDisplay;
            const bestFor = isEn ? pkg.bestForEn : pkg.bestFor;
            const badge = isEn ? pkg.badgeEn : pkg.badge;

            return (
              <StaggerItem key={pkg.id}>
                <div
                  onClick={() => setHighlightedTier(pkg.id)}
                  className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 h-full cursor-pointer ${
                    isFeatured
                      ? 'bg-[#09090B] dark:bg-zinc-900 text-white border-2 border-[#C6A868] shadow-2xl lg:-translate-y-3'
                      : 'bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-800 hover:border-[#C6A868]/60 shadow-sm'
                  } ${
                    isSelected
                      ? 'ring-2 ring-[#C6A868] shadow-[0_12px_40px_rgba(198,168,104,0.18)]'
                      : ''
                  }`}
                >
                  {isFeatured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 metallic-badge text-[#09090B] text-[11px] font-extrabold uppercase tracking-[0.2em] px-5 py-1.5 rounded-full shadow-md whitespace-nowrap">
                      ✦ {badge}
                    </div>
                  )}

                  {!isFeatured && isSelected && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#09090B] dark:bg-white text-[#C6A868] dark:text-[#09090B] border border-[#C6A868]/40 text-[10px] font-bold uppercase tracking-[0.18em] px-4 py-1 rounded-full shadow-sm whitespace-nowrap">
                      ✦ {t('packagesRecommendedBadge')}
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`text-xs font-bold uppercase tracking-[0.25em] ${
                          isFeatured ? 'text-[#C6A868]' : 'text-zinc-500 dark:text-zinc-400'
                        }`}
                      >
                        {pkg.id === 'GOAT'
                          ? 'Top Tier'
                          : `${t('packagesTierLabel')} 0${index + 1}`}
                      </span>
                      {pkg.id === 'GOAT' && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#C6A868]/20 text-[#A88640] dark:text-[#C6A868]">
                          <Crown className="w-3.5 h-3.5 text-[#C6A868]" />
                          {badge}
                        </span>
                      )}
                    </div>

                    <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide">
                      {pkg.name}
                    </h2>

                    <div
                      className={`my-6 pb-6 border-b ${
                        isFeatured ? 'border-zinc-800' : 'border-zinc-100 dark:border-zinc-800'
                      }`}
                    >
                      <div className="flex items-baseline gap-1.5 flex-wrap">
                        <span
                          className={`font-serif text-3xl sm:text-4xl font-bold ${
                            isFeatured ? 'text-white' : 'text-zinc-900 dark:text-white'
                          }`}
                        >
                          {price}
                        </span>
                      </div>
                      <p
                        className={`text-xs mt-2 leading-relaxed ${
                          isFeatured ? 'text-zinc-400' : 'text-zinc-500 dark:text-zinc-400'
                        }`}
                      >
                        {bestFor}
                      </p>
                    </div>

                    <p
                      className={`text-xs uppercase tracking-widest font-semibold mb-4 ${
                        isFeatured ? 'text-[#C6A868]' : 'text-zinc-900 dark:text-zinc-200'
                      }`}
                    >
                      {t('packagesIncludedLabel')} {pkg.name}:
                    </p>

                    <ul className="space-y-3.5 text-sm">
                      {features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span
                            className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                              isFeatured
                                ? 'bg-[#C6A868] text-[#09090B]'
                                : 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-950'
                            }`}
                          >
                            <Check className="w-3 h-3 stroke-[3]" />
                          </span>
                          <span
                            className={
                              feat.includes('Website') || feat.includes('Webshop')
                                ? 'font-semibold text-[#A88640] dark:text-[#C6A868]'
                                : isFeatured
                                ? 'text-zinc-200'
                                : 'text-zinc-700 dark:text-zinc-300'
                            }
                          >
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-10 space-y-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectPackage(pkg.id);
                      }}
                      className={`w-full py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-200 flex items-center justify-center gap-2 shadow-md cursor-pointer ${
                        isFeatured
                          ? 'metallic-badge text-[#09090B] hover:opacity-95'
                          : 'bg-zinc-900 dark:bg-white text-white dark:text-[#09090B] hover:bg-zinc-800 dark:hover:bg-[#C6A868]'
                      }`}
                    >
                      <span>{t('packagesSelectButton')} {pkg.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenStrategyModal(pkg.id);
                      }}
                      className={`w-full py-2.5 rounded-xl text-xs font-semibold transition cursor-pointer ${
                        isFeatured
                          ? 'text-zinc-400 hover:text-white'
                          : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                      }`}
                    >
                      {t('packagesStrategyLink')}
                    </button>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Comprehensive Comparison Table */}
        <div className="mt-24">
          <FadeIn direction="up">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#A88640] dark:text-[#C6A868]">
                {t('packagesTag')}
              </span>
              <h3 className="font-serif text-3xl font-bold text-zinc-900 dark:text-white mt-2">
                {t('packagesComparisonHeading')}
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">
                {t('packagesComparisonSubheading')}
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="overflow-x-auto rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm bg-white dark:bg-zinc-950">
              <table className="w-full text-left border-collapse min-w-[680px]">
                <thead>
                  <tr className="bg-[#09090B] text-white border-b border-zinc-800">
                    <th className="p-6 text-xs uppercase tracking-widest text-zinc-400 font-semibold w-2/5">
                      {t('tableColDeliverable')}
                    </th>
                    <th className="p-6 text-center font-serif text-lg font-bold w-1/5">
                      PLATINUM
                      <span className="block font-sans text-xs font-normal text-zinc-400 mt-0.5">
                        {isEn ? '€1,750 /mo' : '€1.750 p/m'}
                      </span>
                    </th>
                    <th className="p-6 text-center font-serif text-lg font-bold text-[#C6A868] bg-zinc-900 border-x border-zinc-800 w-1/5">
                      PREMIUM ✦
                      <span className="block font-sans text-xs font-normal text-zinc-300 mt-0.5">
                        {isEn ? '€2,450 to €3,000 /mo' : '€2.450 tot €3.000 p/m'}
                      </span>
                    </th>
                    <th className="p-6 text-center font-serif text-lg font-bold w-1/5">
                      GOAT
                      <span className="block font-sans text-xs font-normal text-zinc-400 mt-0.5">
                        {isEn ? '€3,250 to €3,500 /mo' : '€3.250 tot €3.500 p/m'}
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-sm">
                  <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
                    <td className="p-5 font-medium text-zinc-900 dark:text-zinc-100">{t('tableRowVideos')}</td>
                    <td className="p-5 text-center font-semibold text-zinc-700 dark:text-zinc-300">{t('tableValVideosPlatinum')}</td>
                    <td className="p-5 text-center font-bold text-zinc-900 dark:text-white bg-amber-50/40 dark:bg-[#C6A868]/10 border-x border-zinc-200 dark:border-zinc-800">
                      {t('tableValVideosPremium')}
                    </td>
                    <td className="p-5 text-center font-bold text-zinc-900 dark:text-white">{t('tableValVideosGoat')}</td>
                  </tr>
                  <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
                    <td className="p-5 font-medium text-zinc-900 dark:text-zinc-100">{t('tableRowPhotos')}</td>
                    <td className="p-5 text-center text-zinc-400 dark:text-zinc-600">—</td>
                    <td className="p-5 text-center font-bold text-zinc-900 dark:text-white bg-amber-50/40 dark:bg-[#C6A868]/10 border-x border-zinc-200 dark:border-zinc-800">
                      {t('tableValPhotosPremium')}
                    </td>
                    <td className="p-5 text-center font-bold text-zinc-900 dark:text-white">{t('tableValPhotosGoat')}</td>
                  </tr>
                  <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
                    <td className="p-5 font-medium text-zinc-900 dark:text-zinc-100">{t('tableRowHighVolume')}</td>
                    <td className="p-5 text-center">
                      <Check className="w-5 h-5 mx-auto text-zinc-900 dark:text-white" />
                    </td>
                    <td className="p-5 text-center bg-amber-50/40 dark:bg-[#C6A868]/10 border-x border-zinc-200 dark:border-zinc-800">
                      <Check className="w-5 h-5 mx-auto text-[#A88640] dark:text-[#C6A868]" />
                    </td>
                    <td className="p-5 text-center">
                      <Check className="w-5 h-5 mx-auto text-zinc-900 dark:text-white" />
                    </td>
                  </tr>
                  <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
                    <td className="p-5 font-medium text-zinc-900 dark:text-zinc-100">{t('tableRowSocialMgmt')}</td>
                    <td className="p-5 text-center">
                      <Check className="w-5 h-5 mx-auto text-zinc-900 dark:text-white" />
                    </td>
                    <td className="p-5 text-center bg-amber-50/40 dark:bg-[#C6A868]/10 border-x border-zinc-200 dark:border-zinc-800">
                      <Check className="w-5 h-5 mx-auto text-[#A88640] dark:text-[#C6A868]" />
                    </td>
                    <td className="p-5 text-center">
                      <Check className="w-5 h-5 mx-auto text-zinc-900 dark:text-white" />
                    </td>
                  </tr>
                  <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
                    <td className="p-5 font-medium text-zinc-900 dark:text-zinc-100">{t('tableRowShoots')}</td>
                    <td className="p-5 text-center">
                      <Check className="w-5 h-5 mx-auto text-zinc-900 dark:text-white" />
                    </td>
                    <td className="p-5 text-center bg-amber-50/40 dark:bg-[#C6A868]/10 border-x border-zinc-200 dark:border-zinc-800">
                      <Check className="w-5 h-5 mx-auto text-[#A88640] dark:text-[#C6A868]" />
                    </td>
                    <td className="p-5 text-center">
                      <Check className="w-5 h-5 mx-auto text-zinc-900 dark:text-white" />
                    </td>
                  </tr>
                  <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
                    <td className="p-5 font-medium text-zinc-900 dark:text-zinc-100">{t('tableRowContactMgmt')}</td>
                    <td className="p-5 text-center text-zinc-400 dark:text-zinc-600">—</td>
                    <td className="p-5 text-center bg-amber-50/40 dark:bg-[#C6A868]/10 border-x border-zinc-200 dark:border-zinc-800">
                      <Check className="w-5 h-5 mx-auto text-[#A88640] dark:text-[#C6A868]" />
                    </td>
                    <td className="p-5 text-center">
                      <Check className="w-5 h-5 mx-auto text-zinc-900 dark:text-white" />
                    </td>
                  </tr>
                  <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
                    <td className="p-5 font-medium text-zinc-900 dark:text-zinc-100">{t('tableRowWebsite')}</td>
                    <td className="p-5 text-center text-zinc-400 dark:text-zinc-600">—</td>
                    <td className="p-5 text-center font-bold text-zinc-900 dark:text-[#C6A868] bg-amber-50/40 dark:bg-[#C6A868]/10 border-x border-zinc-200 dark:border-zinc-800">
                      {t('tableValIncluded')}
                    </td>
                    <td className="p-5 text-center font-bold text-zinc-900 dark:text-white">{t('tableValIncluded')}</td>
                  </tr>
                  <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
                    <td className="p-5 font-medium text-zinc-900 dark:text-zinc-100">{t('tableRowWebshop')}</td>
                    <td className="p-5 text-center text-zinc-400 dark:text-zinc-600">—</td>
                    <td className="p-5 text-center text-zinc-400 dark:text-zinc-600 bg-amber-50/40 dark:bg-[#C6A868]/10 border-x border-zinc-200 dark:border-zinc-800">—</td>
                    <td className="p-5 text-center font-bold text-zinc-900 dark:text-[#C6A868]">{t('tableValIncluded')}</td>
                  </tr>
                  <tr className="bg-zinc-50 dark:bg-zinc-900/80">
                    <td className="p-5 font-semibold text-zinc-900 dark:text-white">{t('tableRowSelect')}</td>
                    <td className="p-5 text-center">
                      <button
                        onClick={() => onSelectPackage('PLATINUM')}
                        className="px-4 py-2.5 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 text-xs font-semibold uppercase tracking-wider hover:bg-zinc-700 dark:hover:bg-[#C6A868] transition cursor-pointer"
                      >
                        {t('packagesSelectButton')} Platinum
                      </button>
                    </td>
                    <td className="p-5 text-center bg-amber-50/60 dark:bg-[#C6A868]/15 border-x border-zinc-200 dark:border-zinc-800">
                      <button
                        onClick={() => onSelectPackage('PREMIUM')}
                        className="px-4 py-2.5 rounded-lg metallic-badge text-[#09090B] text-xs font-bold uppercase tracking-wider hover:opacity-90 transition shadow-sm cursor-pointer"
                      >
                        {t('packagesSelectButton')} Premium
                      </button>
                    </td>
                    <td className="p-5 text-center">
                      <button
                        onClick={() => onSelectPackage('GOAT')}
                        className="px-4 py-2.5 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 text-xs font-semibold uppercase tracking-wider hover:bg-zinc-700 dark:hover:bg-[#C6A868] transition cursor-pointer"
                      >
                        {t('packagesSelectButton')} GOAT
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};
