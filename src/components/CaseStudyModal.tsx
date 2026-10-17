import React from 'react';
import { PortfolioItem } from '../utils/pricing.ts';
import { X, Check, ArrowUpRight, Video, Camera, Globe } from 'lucide-react';

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
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-[#09090B] border border-zinc-800 text-white rounded-3xl max-w-2xl w-full overflow-hidden relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/80 text-white hover:bg-[#C6A868] hover:text-[#09090B] transition flex items-center justify-center"
          aria-label="Sluit case study"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Banner */}
        <div className="h-60 sm:h-72 w-full relative bg-zinc-950 flex items-center justify-center p-8 overflow-hidden">
          <div className="absolute inset-0 bg-luxury-grid opacity-30" />
          <div className="relative z-10 text-center">
            <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-3 text-[#C6A868]">
              {item.category === 'video' && <Video className="w-8 h-8" />}
              {item.category === 'shoots' && <Camera className="w-8 h-8" />}
              {item.category === 'web' && <Globe className="w-8 h-8" />}
            </div>
            <span className="px-3.5 py-1 rounded-full text-[11px] font-mono uppercase tracking-widest bg-[#C6A868] text-[#09090B] font-bold">
              {item.packageUsed} PAKKET RETAINER
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Case Info */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#C6A868] font-semibold block mb-1">
              Case Study Analysis
            </span>
            <h3 className="font-serif text-3xl font-bold">{item.title}</h3>
            <p className="text-sm text-zinc-300 mt-3 leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
              <p className="font-serif text-xl sm:text-2xl font-bold text-[#C6A868]">
                {item.results.viewsOrReach}
              </p>
              <p className="text-[10px] sm:text-[11px] text-zinc-400 uppercase tracking-wider mt-1 font-semibold">
                Organisch Bereik
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
              <p className="font-serif text-xl sm:text-2xl font-bold text-white">
                {item.results.productionOutput}
              </p>
              <p className="text-[10px] sm:text-[11px] text-zinc-400 uppercase tracking-wider mt-1 font-semibold">
                Maandelijkse Output
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
              <p className="font-serif text-xl sm:text-2xl font-bold text-emerald-400">
                {item.results.growthOrConversion}
              </p>
              <p className="text-[10px] sm:text-[11px] text-zinc-400 uppercase tracking-wider mt-1 font-semibold">
                Conversie Impact
              </p>
            </div>
          </div>

          {/* Action */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-zinc-800">
            <span className="text-xs text-zinc-400">
              Inbegrepen in het <strong>{item.packageUsed}</strong> pakket
            </span>
            <button
              onClick={() => {
                onClose();
                onSelectPackage(item.packageUsed);
              }}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full metallic-badge text-[#09090B] text-xs font-bold uppercase tracking-widest hover:opacity-95 transition flex items-center justify-center gap-2"
            >
              <span>Kies {item.packageUsed} Pakket</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
