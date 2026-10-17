import React, { useState } from 'react';
import { PackageTier } from '../utils/pricing.ts';
import { useLanguage } from '../context/LanguageContext.tsx';
import { X, Calendar, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

interface StrategyModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedTier?: PackageTier;
}

export const StrategyModal: React.FC<StrategyModalProps> = ({
  isOpen,
  onClose,
  preselectedTier
}) => {
  const { t } = useLanguage();

  const [date, setDate] = useState<string>(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [time, setTime] = useState<string>('10:00 - 10:30');
  const [selectedPkg, setSelectedPkg] = useState<string>(
    preselectedTier
      ? preselectedTier === 'PREMIUM'
        ? 'PREMIUM (€2.450 tot €3.000 p/m)'
        : preselectedTier === 'GOAT'
        ? 'GOAT (€3.250 tot €3.500 p/m)'
        : 'PLATINUM (€1.750 p/m)'
      : 'PREMIUM (€2.450 tot €3.000 p/m)'
  );
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !email) return;
    setIsBooked(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-[#09090B] border border-zinc-800 text-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 text-zinc-300 hover:text-white flex items-center justify-center transition"
          aria-label="Sluit modal"
        >
          <X className="w-5 h-5" />
        </button>

        <span className="text-xs uppercase tracking-widest text-[#C6A868] font-bold block mb-1">
          {t('modalBadge')}
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold">
          {t('modalTitle')}
        </h3>
        <p className="text-xs text-zinc-400 mt-1">
          {t('modalSubtitle')}
        </p>

        {isBooked ? (
          <div className="mt-6 p-6 rounded-2xl bg-zinc-900 border border-[#C6A868]">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-[#C6A868] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif text-xl font-bold text-[#C6A868]">
                  {t('modalBookedTitle')}
                </h4>
                <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
                  Beste <strong>{name}</strong>, je sessie staat ingepland op{' '}
                  <strong>{date} om {time}</strong> (Focus: {selectedPkg}).
                  De agenda uitnodiging is verstuurd naar <strong className="text-white">{email}</strong>.
                </p>
                <button
                  onClick={onClose}
                  className="mt-5 px-6 py-2.5 rounded-xl metallic-badge text-[#09090B] text-xs font-bold uppercase tracking-wider hover:opacity-95"
                >
                  {t('modalBookedClose')}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1.5 font-semibold">
                {t('modalFocusLabel')}
              </label>
              <select
                value={selectedPkg}
                onChange={(e) => setSelectedPkg(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-sm text-white focus:outline-none focus:border-[#C6A868]"
              >
                <option value="PREMIUM (€2.450 tot €3.000 p/m)">
                  PREMIUM (€2.450 tot €3.000 p/m) — Meest gekozen
                </option>
                <option value="PLATINUM (€1.750 p/m)">PLATINUM (€1.750 p/m)</option>
                <option value="GOAT (€3.250 tot €3.500 p/m)">
                  GOAT (€3.250 tot €3.500 p/m) — Top tier
                </option>
                <option value="Algemeen Strategiegesprek">
                  Nog niet zeker — Vrijblijvend advies op maat
                </option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1.5 font-semibold flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#C6A868]" />
                  <span>{t('modalDateLabel')}</span>
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-sm text-white focus:outline-none focus:border-[#C6A868]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1.5 font-semibold flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#C6A868]" />
                  <span>{t('modalTimeLabel')}</span>
                </label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-sm text-white focus:outline-none focus:border-[#C6A868]"
                >
                  <option>09:30 - 10:00</option>
                  <option>10:00 - 10:30</option>
                  <option>11:30 - 12:00</option>
                  <option>14:00 - 14:30</option>
                  <option>15:30 - 16:00</option>
                  <option>16:30 - 17:00</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t('contactNameLabel')}
                className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-sm text-white focus:outline-none focus:border-[#C6A868]"
              />
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={t('contactPhoneLabel')}
                className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-sm text-white focus:outline-none focus:border-[#C6A868]"
              />
            </div>

            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('contactEmailLabel')}
              className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-sm text-white focus:outline-none focus:border-[#C6A868]"
            />

            <button
              type="submit"
              className="w-full py-4 rounded-xl metallic-badge text-[#09090B] font-extrabold text-xs uppercase tracking-widest hover:opacity-95 transition shadow-lg flex items-center justify-center gap-2"
            >
              <span>{t('modalConfirmBtn')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
