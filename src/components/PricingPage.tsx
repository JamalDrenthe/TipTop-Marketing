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
  const { t } = useLanguage();

  return (
    <div className="py-12 sm:py-20 bg-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <FadeIn direction="up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 text-zinc-800 text-xs uppercase tracking-widest font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A868]" />
            <span>{t('packagesTag')}</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-zinc-900 tracking-tight">
            {t('navPackages')} &amp; <span className="italic font-normal text-zinc-600">Prijzen</span>
          </h1>
          <p className="text-zinc-600 max-w-2xl mx-auto mt-4 text-base sm:text-lg leading-relaxed">
            {t('bottomCtaDesc')}
          </p>
        </FadeIn>

        {/* Interactive Growth Goal Selector */}
        <FadeIn direction="up" delay={0.2}>
          <div className="mt-10 max-w-2xl mx-auto p-1.5 bg-zinc-100 rounded-2xl flex flex-col sm:flex-row gap-1 shadow-inner">
            <button
              onClick={() => setHighlightedTier('PLATINUM')}
              className={`flex-1 py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                highlightedTier === 'PLATINUM'
                  ? 'bg-white text-zinc-900 shadow-sm'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              {t('packagesGoal1')}
            </button>
            <button
              onClick={() => setHighlightedTier('PREMIUM')}
              className={`flex-1 py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                highlightedTier === 'PREMIUM'
                  ? 'bg-zinc-900 text-white shadow-sm'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              {t('packagesGoal2')}
            </button>
            <button
              onClick={() => setHighlightedTier('GOAT')}
              className={`flex-1 py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                highlightedTier === 'GOAT'
                  ? 'bg-[#C6A868] text-zinc-950 font-bold shadow-sm'
                  : 'text-zinc-600 hover:text-zinc-900'
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
          {PACKAGES.map((pkg) => {
            const isFeatured = pkg.id === 'PREMIUM';
            const isSelected = highlightedTier === pkg.id;

            return (
              <StaggerItem key={pkg.id}>
                <div
                  className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 h-full ${
                    isFeatured
                      ? 'bg-[#09090B] text-white border-2 border-[#C6A868] shadow-2xl lg:-translate-y-3'
                      : 'bg-white text-zinc-900 border border-zinc-200 hover:border-zinc-400 shadow-sm'
                  } ${isSelected && !isFeatured ? 'ring-2 ring-zinc-900' : ''}`}
                >
                  {isFeatured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 metallic-badge text-[#09090B] text-[11px] font-extrabold uppercase tracking-[0.2em] px-5 py-1.5 rounded-full shadow-md whitespace-nowrap">
                      ✦ {pkg.badge}
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`text-xs font-bold uppercase tracking-[0.25em] ${
                          isFeatured ? 'text-[#C6A868]' : 'text-zinc-400'
                        }`}
                      >
                        {pkg.id === 'GOAT' ? 'Top Tier' : `Pakket ${pkg.id === 'PLATINUM' ? '01' : '02'}`}
                      </span>
                      {pkg.id === 'GOAT' && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#C6A868]/20 text-[#A88640]">
                          <Crown className="w-3.5 h-3.5 text-[#C6A868]" />
                          Top tier
                        </span>
                      )}
                    </div>

                    <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide">
                      {pkg.name}
                    </h2>

                    <div
                      className={`my-6 pb-6 border-b ${
                        isFeatured ? 'border-zinc-800' : 'border-zinc-100'
                      }`}
                    >
                      <div className="flex items-baseline gap-1.5 flex-wrap">
                        <span
                          className={`font-serif text-3xl sm:text-4xl font-bold ${
                            isFeatured ? 'text-white' : 'text-zinc-900'
                          }`}
                        >
                          {pkg.priceDisplay}
                        </span>
                      </div>
                      <p
                        className={`text-xs mt-2 leading-relaxed ${
                          isFeatured ? 'text-zinc-400' : 'text-zinc-500'
                        }`}
                      >
                        {pkg.bestFor}
                      </p>
                    </div>

                    <p
                      className={`text-xs uppercase tracking-widest font-semibold mb-4 ${
                        isFeatured ? 'text-[#C6A868]' : 'text-zinc-900'
                      }`}
                    >
                      {t('packagesIncludedLabel')} {pkg.name}:
                    </p>

                    <ul className="space-y-3.5 text-sm">
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span
                            className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                              isFeatured
                                ? 'bg-[#C6A868] text-[#09090B]'
                                : 'bg-zinc-900 text-white'
                            }`}
                          >
                            <Check className="w-3 h-3 stroke-[3]" />
                          </span>
                          <span
                            className={
                              feat.includes('Website') || feat.includes('Webshop')
                                ? 'font-semibold text-[#C6A868]'
                                : isFeatured
                                ? 'text-zinc-200'
                                : 'text-zinc-700'
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
                      onClick={() => onSelectPackage(pkg.id)}
                      className={`w-full py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-200 flex items-center justify-center gap-2 shadow-md ${
                        isFeatured
                          ? 'metallic-badge text-[#09090B] hover:opacity-95'
                          : 'bg-zinc-900 text-white hover:bg-zinc-800'
                      }`}
                    >
                      <span>{t('packagesSelectButton')} {pkg.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onOpenStrategyModal(pkg.id)}
                      className={`w-full py-2.5 rounded-xl text-xs font-semibold transition ${
                        isFeatured
                          ? 'text-zinc-400 hover:text-white'
                          : 'text-zinc-600 hover:text-zinc-900'
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
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#A88640]">
                {t('packagesTag')}
              </span>
              <h3 className="font-serif text-3xl font-bold text-zinc-900 mt-2">
                {t('packagesComparisonHeading')}
              </h3>
              <p className="text-sm text-zinc-500 mt-2">
                {t('packagesComparisonSubheading')}
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="overflow-x-auto rounded-3xl border border-zinc-200 shadow-sm bg-white">
              <table className="w-full text-left border-collapse min-w-[680px]">
                <thead>
                  <tr className="bg-[#09090B] text-white">
                    <th className="p-6 text-xs uppercase tracking-widest text-zinc-400 font-semibold w-2/5">
                      Onderdeel / Deliverable
                    </th>
                    <th className="p-6 text-center font-serif text-lg font-bold w-1/5">
                      PLATINUM
                      <span className="block font-sans text-xs font-normal text-zinc-400 mt-0.5">
                        €1.750 p/m
                      </span>
                    </th>
                    <th className="p-6 text-center font-serif text-lg font-bold text-[#C6A868] bg-zinc-900 border-x border-zinc-800 w-1/5">
                      PREMIUM ✦
                      <span className="block font-sans text-xs font-normal text-zinc-300 mt-0.5">
                        €2.450 tot €3.000 p/m
                      </span>
                    </th>
                    <th className="p-6 text-center font-serif text-lg font-bold w-1/5">
                      GOAT
                      <span className="block font-sans text-xs font-normal text-zinc-400 mt-0.5">
                        €3.250 tot €3.500 p/m
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 text-sm">
                  <tr className="hover:bg-zinc-50">
                    <td className="p-5 font-medium text-zinc-900">Maandelijkse Video Output</td>
                    <td className="p-5 text-center font-semibold text-zinc-700">8 tot 12 video's</td>
                    <td className="p-5 text-center font-bold text-zinc-900 bg-amber-50/40 border-x border-zinc-200">
                      12 tot 16 video's
                    </td>
                    <td className="p-5 text-center font-bold text-zinc-900">16 tot 20 video's</td>
                  </tr>
                  <tr className="hover:bg-zinc-50">
                    <td className="p-5 font-medium text-zinc-900">Professionele Fotografie</td>
                    <td className="p-5 text-center text-zinc-400">—</td>
                    <td className="p-5 text-center font-bold text-zinc-900 bg-amber-50/40 border-x border-zinc-200">
                      9 foto's p/m
                    </td>
                    <td className="p-5 text-center font-bold text-zinc-900">18 foto's p/m</td>
                  </tr>
                  <tr className="hover:bg-zinc-50">
                    <td className="p-5 font-medium text-zinc-900">High volume productie</td>
                    <td className="p-5 text-center text-zinc-900">
                      <Check className="w-5 h-5 mx-auto text-zinc-900" />
                    </td>
                    <td className="p-5 text-center text-[#A88640] bg-amber-50/40 border-x border-zinc-200">
                      <Check className="w-5 h-5 mx-auto text-[#A88640]" />
                    </td>
                    <td className="p-5 text-center text-zinc-900">
                      <Check className="w-5 h-5 mx-auto text-zinc-900" />
                    </td>
                  </tr>
                  <tr className="hover:bg-zinc-50">
                    <td className="p-5 font-medium text-zinc-900">Full social management</td>
                    <td className="p-5 text-center text-zinc-900">
                      <Check className="w-5 h-5 mx-auto text-zinc-900" />
                    </td>
                    <td className="p-5 text-center text-[#A88640] bg-amber-50/40 border-x border-zinc-200">
                      <Check className="w-5 h-5 mx-auto text-[#A88640]" />
                    </td>
                    <td className="p-5 text-center text-zinc-900">
                      <Check className="w-5 h-5 mx-auto text-zinc-900" />
                    </td>
                  </tr>
                  <tr className="hover:bg-zinc-50">
                    <td className="p-5 font-medium text-zinc-900">Campagnes en speciale shoots</td>
                    <td className="p-5 text-center text-zinc-900">
                      <Check className="w-5 h-5 mx-auto text-zinc-900" />
                    </td>
                    <td className="p-5 text-center text-[#A88640] bg-amber-50/40 border-x border-zinc-200">
                      <Check className="w-5 h-5 mx-auto text-[#A88640]" />
                    </td>
                    <td className="p-5 text-center text-zinc-900">
                      <Check className="w-5 h-5 mx-auto text-zinc-900" />
                    </td>
                  </tr>
                  <tr className="hover:bg-zinc-50">
                    <td className="p-5 font-medium text-zinc-900">Contactmanagement (DM's &amp; Leads)</td>
                    <td className="p-5 text-center text-zinc-400">—</td>
                    <td className="p-5 text-center text-[#A88640] bg-amber-50/40 border-x border-zinc-200">
                      <Check className="w-5 h-5 mx-auto text-[#A88640]" />
                    </td>
                    <td className="p-5 text-center text-zinc-900">
                      <Check className="w-5 h-5 mx-auto text-zinc-900" />
                    </td>
                  </tr>
                  <tr className="hover:bg-zinc-50">
                    <td className="p-5 font-medium text-zinc-900">High end Website</td>
                    <td className="p-5 text-center text-zinc-400">—</td>
                    <td className="p-5 text-center font-bold text-zinc-900 bg-amber-50/40 border-x border-zinc-200">
                      Inbegrepen
                    </td>
                    <td className="p-5 text-center font-bold text-zinc-900">Inbegrepen</td>
                  </tr>
                  <tr className="hover:bg-zinc-50">
                    <td className="p-5 font-medium text-zinc-900">Webshop (E Commerce)</td>
                    <td className="p-5 text-center text-zinc-400">—</td>
                    <td className="p-5 text-center text-zinc-400 bg-amber-50/40 border-x border-zinc-200">—</td>
                    <td className="p-5 text-center font-bold text-zinc-900">Inbegrepen</td>
                  </tr>
                  <tr className="bg-zinc-50">
                    <td className="p-5 font-semibold text-zinc-900">Direct Pakket Kiezen</td>
                    <td className="p-5 text-center">
                      <button
                        onClick={() => onSelectPackage('PLATINUM')}
                        className="px-4 py-2.5 rounded-lg bg-zinc-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-zinc-700 transition"
                      >
                        {t('packagesSelectButton')} Platinum
                      </button>
                    </td>
                    <td className="p-5 text-center bg-amber-50/60 border-x border-zinc-200">
                      <button
                        onClick={() => onSelectPackage('PREMIUM')}
                        className="px-4 py-2.5 rounded-lg metallic-badge text-[#09090B] text-xs font-bold uppercase tracking-wider hover:opacity-90 transition shadow-sm"
                      >
                        {t('packagesSelectButton')} Premium
                      </button>
                    </td>
                    <td className="p-5 text-center">
                      <button
                        onClick={() => onSelectPackage('GOAT')}
                        className="px-4 py-2.5 rounded-lg bg-zinc-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-zinc-700 transition"
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
