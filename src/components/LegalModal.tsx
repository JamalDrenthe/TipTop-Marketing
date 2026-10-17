import React from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
  type: 'voorwaarden' | 'privacy' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-white text-zinc-900 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-zinc-100 text-zinc-700 hover:bg-zinc-900 hover:text-white flex items-center justify-center transition"
          aria-label="Sluit legal Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'voorwaarden' ? (
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">
              Algemene Voorwaarden — TipTop Marketing B.V.
            </h3>
            <div className="text-xs sm:text-sm text-zinc-600 space-y-4 leading-relaxed">
              <p>
                <strong>1. Toepasselijkheid:</strong> Deze algemene voorwaarden zijn van toepassing op alle offertes, overeenkomsten en maandelijkse marketingretainers (PLATINUM, PREMIUM en GOAT) geleverd door TipTop Marketing B.V.
              </p>
              <p>
                <strong>2. Maandelijkse Retainers &amp; Productie:</strong> Videoproducties, fotodagen en contentmaanden worden in goed overleg met de opdrachtgever vastgelegd. Maandelijkse video-aantallen (8-12, 12-16 of 16-20) worden binnen de betreffende kalendermaand geproduceerd en geëdit.
              </p>
              <p>
                <strong>3. Intellectueel Eigendom:</strong> Na volledige voldoening van de maandelijkse factuur verkrijgt opdrachtgever het exclusieve en onbeperkte gebruiksrecht op alle opgeleverde video's, foto's, social copy, campagnematerialen en ontwikkelde website/webshop bronbestanden.
              </p>
              <p>
                <strong>4. Betalingstermijn:</strong> Pakketten worden maandelijks vooraf gefactureerd met een betalingstermijn van 14 dagen. Opzeggingen of wijzigingen in pakketkeuze dienen uiterlijk 30 dagen voor de nieuwe maandperiode schriftelijk te worden gecommuniceerd.
              </p>
            </div>
          </div>
        ) : (
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">
              Privacybeleid — TipTop Marketing B.V.
            </h3>
            <div className="text-xs sm:text-sm text-zinc-600 space-y-4 leading-relaxed">
              <p>
                <strong>1. Verwerking van Persoonsgegevens:</strong> TipTop Marketing verwerkt persoons- en bedrijfsgegevens uitsluitend voor het uitvoeren van marketingdiensten, het opstellen van offertes en het inplannen van strategiegesprekken.
              </p>
              <p>
                <strong>2. Beveiliging &amp; Vertrouwelijkheid:</strong> Wij delen nooit informatie over klanten, statistieken, strategieën of beeldmateriaal met derden zonder expliciete voorafgaande schriftelijke toestemming.
              </p>
              <p>
                <strong>3. Rechten van Betrokkenen:</strong> U heeft te allen tijde het recht om uw opgeslagen gegevens in te zien, te corrigeren of te laten verwijderen door een e-mail te sturen naar info@tiptopmarketing.nl.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
