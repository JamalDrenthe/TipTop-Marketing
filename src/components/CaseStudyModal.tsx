import React, { useEffect } from 'react';
import { PortfolioItem } from '../utils/pricing.ts';
import { useLanguage } from '../context/LanguageContext.tsx';
import { X, ArrowUpRight, Video, Camera, Globe } from 'lucide-react';

interface CaseStudyModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onSelectPackage: (tier: any) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  item,
  onClose,
  onSelectPackage
}) => {
  const { language, t } = useLanguage();
  const isEn = language === 'EN';

  useEffect(() => {
    if (!item) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onClose]);

  if (!item) return null;

  const desc = isEn ? item.descriptionEn : item.description;
  const results = isEn ? item.resultsEn : item.results;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#09090B] border border-zinc-800 text-white rounded-3xl max-w-2xl w-full overflow-hidden relative shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/80 text-white hover:bg-[#C6A868] hover:text-[#09090B] transition flex items-center justify-center cursor-pointer"
          aria-label="Close case study"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Banner */}
        <div className="h-56 sm:h-68 w-full relative bg-zinc-950 flex items-center justify-center p-8 overflow-hidden">
          <div className="absolute inset-0 bg-luxury-grid opacity-30" />
          <div className="relative z-10 text-center">
            <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-3 text-[#C6A868]">
              {item.category === 'video' && <Video className="w-8 h-8" />}
              {item.category === 'shoots' && <Camera className="w-8 h-8" />}
              {item.category === 'web' && <Globe className="w-8 h-8" />}
            </div>
            <span className="px-3.5 py-1 rounded-full text-[11px] font-mono uppercase tracking-widest bg-[#C6A868] text-[#09090B] font-bold">
              {item.packageUsed} {t('caseModalRetainerSuffix')}
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Case Info */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#C6A868] font-semibold block mb-1">
              {t('caseModalTag')}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">{item.title}</h3>
            <p className="text-sm text-zinc-300 mt-3 leading-relaxed">
              {desc}
            </p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
              <p className="font-serif text-xl sm:text-2xl font-bold text-[#C6A868]">
                {results.viewsOrReach}
              </p>
              <p className="text-[10px] sm:text-[11px] text-zinc-400 uppercase tracking-wider mt-1 font-semibold">
                {t('caseModalMetricReach')}
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
              <p className="font-serif text-xl sm:text-2xl font-bold text-white">
                {results.productionOutput}
              </p>
              <p className="text-[10px] sm:text-[11px] text-zinc-400 uppercase tracking-wider mt-1 font-semibold">
                {t('caseModalMetricOutput')}
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
              <p className="font-serif text-xl sm:text-2xl font-bold text-emerald-400">
                {results.growthOrConversion}
              </p>
              <p className="text-[10px] sm:text-[11px] text-zinc-400 uppercase tracking-wider mt-1 font-semibold">
                {t('caseModalMetricImpact')}
              </p>
            </div>
          </div>

          {/* Action */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-zinc-800">
            <span className="text-xs text-zinc-400">
              {t('caseModalIncludedIn')} <strong className="text-white">{item.packageUsed}</strong> {t('caseModalPackageWord')}
            </span>
            <button
              onClick={() => {
                onClose();
                onSelectPackage(item.packageUsed);
              }}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full metallic-badge text-[#09090B] text-xs font-bold uppercase tracking-widest hover:opacity-95 transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{t('caseModalChooseBtn')} {item.packageUsed}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
