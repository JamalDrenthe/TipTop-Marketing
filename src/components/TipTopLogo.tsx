import React from 'react';

interface TipTopLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  textColor?: string;
}

export const TipTopLogo: React.FC<TipTopLogoProps> = ({
  className = '',
  size = 56,
  showText = false,
  textColor = 'text-zinc-900'
}) => {
  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* Circular Emblem recreating the uploaded TipTop Marketing Logo */}
      <div
        style={{ width: size, height: size }}
        className="relative rounded-full bg-white border border-zinc-200/80 shadow-sm flex items-center justify-center p-1 shrink-0 overflow-hidden"
        title="TipTop Marketing Logo"
      >
        <svg
          viewBox="0 0 240 240"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="TipTop Marketing Logo"
        >
          {/* Circular Outer Background */}
          <circle cx="120" cy="120" r="116" fill="#FFFFFF" stroke="#E4E4E7" strokeWidth="1.5" />

          {/* First T (Left, higher) */}
          <path
            d="M 73 48 L 132 48 L 134 68 L 131 68 C 129 56 124 53 114 53 L 109 53 L 109 112 C 109 120 112 123 121 124 L 121 127 L 85 127 L 85 124 C 94 123 97 120 97 112 L 97 53 L 91 53 C 81 53 76 56 74 68 L 71 68 Z"
            fill="#09090B"
          />

          {/* White gap on left T stem where curved swoosh intersects */}
          <path d="M 94 96 L 112 85 L 112 94 L 94 105 Z" fill="#FFFFFF" />

          {/* Second T Stem (Right, lower) */}
          <path
            d="M 134 76 L 146 70 L 146 121 C 146 129 149 132 158 133 L 158 136 L 122 136 L 122 133 C 131 132 134 129 134 121 Z"
            fill="#09090B"
          />

          {/* Dynamic Curved Swoosh Crossbar */}
          <path
            d="M 74 108 C 92 105 110 92 130 78 C 146 67 160 63 173 63 L 176 84 L 173 84 C 169 72 162 67 150 68 C 137 69 121 79 105 90 C 92 99 82 106 74 108 Z"
            fill="#09090B"
          />

          {/* TIP-TOP Classical Serif Typography */}
          <text
            x="120"
            y="166"
            textAnchor="middle"
            fontFamily="'Playfair Display', 'Cormorant Garamond', Georgia, serif"
            fontWeight="700"
            fontSize="32"
            letterSpacing="2.5"
            fill="#09090B"
          >
            TIP-TOP
          </text>

          {/* MARKETING Sans-Serif Typography */}
          <text
            x="122"
            y="190"
            textAnchor="middle"
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
            fontWeight="400"
            fontSize="14"
            letterSpacing="7.5"
            fill="#18181B"
          >
            MARKETING
          </text>

          {/* Bottom Divider Hairlines and 4-Point Star (✦) */}
          <line x1="56" y1="203" x2="109" y2="203" stroke="#09090B" strokeWidth="1.5" />
          <path
            d="M 120 195 Q 120 203 128 203 Q 120 203 120 211 Q 120 203 112 203 Q 120 203 120 195 Z"
            fill="#09090B"
          />
          <line x1="131" y1="203" x2="184" y2="203" stroke="#09090B" strokeWidth="1.5" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <span className={`font-serif font-bold text-xl sm:text-2xl tracking-wider leading-none ${textColor}`}>
            TIP-TOP
          </span>
          <div className="flex items-center gap-1.5 mt-1">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-zinc-500 font-medium">
              MARKETING
            </span>
            <span className="text-[9px] text-[#C6A868]">✦</span>
          </div>
        </div>
      )}
    </div>
  );
};
