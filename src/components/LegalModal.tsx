import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { X } from 'lucide-react';

interface LegalModalProps {
  type: 'voorwaarden' | 'privacy' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  const { language } = useLanguage();
  const isEn = language === 'EN';

  useEffect(() => {
    if (!type) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-[#09090B] border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl max-h-[85vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-950 flex items-center justify-center transition cursor-pointer"
          aria-label="Close legal modal"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'voorwaarden' ? (
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">
              {isEn
                ? 'Terms & Conditions · TipTop Marketing'
                : 'Algemene Voorwaarden · TipTop Marketing'}
            </h3>
            <div className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 space-y-4 leading-relaxed">
              {isEn ? (
                <>
                  <p>
                    <strong>1. Applicability:</strong> These terms and conditions apply to all proposals, agreements, and monthly marketing retainers (PLATINUM, PREMIUM, and GOAT) provided by TipTop Marketing.
                  </p>
                  <p>
                    <strong>2. Monthly Retainers &amp; Production:</strong> Video production days, photo shoots, and monthly content calendars are scheduled in consultation with the client. Monthly video volumes (8 to 12, 12 to 16, or 16 to 20) are produced and edited within the respective calendar month.
                  </p>
                  <p>
                    <strong>3. Intellectual Property:</strong> Upon full payment of the monthly invoice, the client receives exclusive and unlimited usage rights to all delivered videos, photos, social copy, campaign assets, and developed website/webshop files.
                  </p>
                  <p>
                    <strong>4. Payment &amp; Notice Period:</strong> Retainer packages are invoiced monthly in advance with a 14-day payment term. Cancellations or tier adjustments must be communicated in writing at least 30 days prior to the next billing cycle.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>1. Toepasselijkheid:</strong> Deze algemene voorwaarden zijn van toepassing op alle offertes, overeenkomsten en maandelijkse marketingretainers (PLATINUM, PREMIUM en GOAT) geleverd door TipTop Marketing.
                  </p>
                  <p>
                    <strong>2. Maandelijkse Retainers &amp; Productie:</strong> Videoproducties, fotodagen en contentmaanden worden in goed overleg met de opdrachtgever vastgelegd. Maandelijkse video aantallen (8 tot 12, 12 tot 16 of 16 tot 20) worden binnen de betreffende kalendermaand geproduceerd en gemonteerd.
                  </p>
                  <p>
                    <strong>3. Intellectueel Eigendom:</strong> Na volledige voldoening van de maandelijkse factuur verkrijgt opdrachtgever het exclusieve en onbeperkte gebruiksrecht op alle opgeleverde video's, foto's, social copy, campagnematerialen en ontwikkelde website/webshop bronbestanden.
                  </p>
                  <p>
                    <strong>4. Betalingstermijn:</strong> Pakketten worden maandelijks vooraf gefactureerd met een betalingstermijn van 14 dagen. Opzeggingen of wijzigingen in pakketkeuze dienen uiterlijk 30 dagen voor de nieuwe maandperiode schriftelijk te worden gecommuniceerd.
                  </p>
                </>
              )}
            </div>
          </div>
        ) : (
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">
              {isEn ? 'Privacy Policy · TipTop Marketing' : 'Privacybeleid · TipTop Marketing'}
            </h3>
            <div className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 space-y-4 leading-relaxed">
              {isEn ? (
                <>
                  <p>
                    <strong>1. Data Processing:</strong> TipTop Marketing processes personal and company data exclusively for executing marketing services, preparing proposals, and scheduling strategy sessions.
                  </p>
                  <p>
                    <strong>2. Security &amp; Confidentiality:</strong> We never share client information, performance metrics, growth strategies, or media assets with third parties without explicit prior written consent.
                  </p>
                  <p>
                    <strong>3. Your Rights:</strong> You have the right at any time to view, correct, or request deletion of your stored details via our contact channels.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>1. Verwerking van Persoonsgegevens:</strong> TipTop Marketing verwerkt persoons en bedrijfsgegevens uitsluitend voor het uitvoeren van marketingdiensten, het opstellen van offertes en het inplannen van strategiegesprekken.
                  </p>
                  <p>
                    <strong>2. Beveiliging &amp; Vertrouwelijkheid:</strong> Wij delen nooit informatie over klanten, statistieken, strategieën of beeldmateriaal met derden zonder expliciete voorafgaande schriftelijke toestemming.
                  </p>
                  <p>
                    <strong>3. Rechten van Betrokkenen:</strong> U heeft te allen tijde het recht om uw opgeslagen gegevens in te zien, te corrigeren of te laten verwijderen via onze officiële contactkanalen.
                  </p>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
