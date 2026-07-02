import { Skin } from '../types';

interface SnakeHeadPreviewProps {
  skin: Skin;
  size?: number;
  className?: string;
}

export default function SnakeHeadPreview({ skin, size = 64, className = '' }: SnakeHeadPreviewProps) {
  const { id, primaryColor, secondaryColor, eyeColor, accessory, pattern } = skin;

  // Define unique IDs for SVG gradients so they don't collide
  const gradId = `grad-${id}`;
  const clipId = `clip-${id}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none drop-shadow-md ${className}`}
    >
      <defs>
        {/* Glow / Radial Gradient pattern */}
        <radialGradient id={gradId} cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor={primaryColor} />
          <stop offset="100%" stopColor={secondaryColor} />
        </radialGradient>

        {/* Clip path for pattern masking inside the head */}
        <clipPath id={clipId}>
          <circle cx="32" cy="32" r="20" />
        </clipPath>
      </defs>

      {/* 1. Tongue */}
      <path
        d="M32 48 C30 54, 28 58, 28 58 M32 48 C34 54, 36 58, 36 58 M32 48 L32 55"
        stroke="#F43F5E"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* 2. Main Head Circle */}
      <circle
        cx="32"
        cy="32"
        r="20"
        fill={pattern === 'GLOW' ? `url(#${gradId})` : primaryColor}
        stroke="#0F172A"
        strokeWidth="2.5"
      />

      {/* 3. Patterns clipped inside head */}
      <g clipPath={`url(#${clipId})`}>
        {pattern === 'STRIPES' && (
          <>
            {/* Draw curved stripes */}
            <path
              d="M12 24 C18 20, 24 24, 32 20 C40 16, 46 20, 52 24"
              stroke={secondaryColor}
              strokeWidth="4"
              fill="none"
              opacity="0.85"
            />
            <path
              d="M10 34 C18 30, 24 34, 32 30 C40 26, 46 30, 54 34"
              stroke={secondaryColor}
              strokeWidth="4"
              fill="none"
              opacity="0.85"
            />
            <path
              d="M12 44 C18 40, 24 44, 32 40 C40 36, 46 40, 52 44"
              stroke={secondaryColor}
              strokeWidth="4"
              fill="none"
              opacity="0.85"
            />
          </>
        )}

        {pattern === 'SPOTS' && (
          <>
            {/* Draw spots */}
            <circle cx="20" cy="24" r="3.5" fill={secondaryColor} opacity="0.9" />
            <circle cx="44" cy="24" r="3.5" fill={secondaryColor} opacity="0.9" />
            <circle cx="32" cy="40" r="4.5" fill={secondaryColor} opacity="0.9" />
            <circle cx="16" cy="36" r="2.5" fill={secondaryColor} opacity="0.9" />
            <circle cx="48" cy="36" r="2.5" fill={secondaryColor} opacity="0.9" />
          </>
        )}
      </g>

      {/* 4. Eyes */}
      <g>
        {/* Left Eye */}
        <circle cx="21" cy="26" r="6" fill={eyeColor} stroke="#0F172A" strokeWidth="2" />
        <circle cx="21" cy="26" r="2.5" fill="#000000" />
        <circle cx="19.5" cy="24.5" r="1" fill="#FFFFFF" />

        {/* Right Eye */}
        <circle cx="43" cy="26" r="6" fill={eyeColor} stroke="#0F172A" strokeWidth="2" />
        <circle cx="43" cy="26" r="2.5" fill="#000000" />
        <circle cx="41.5" cy="24.5" r="1" fill="#FFFFFF" />
      </g>

      {/* 5. Accessories */}
      {accessory === 'CROWN' && (
        <g>
          {/* Gold Crown */}
          <path
            d="M18 16 L14 6 L23 11 L32 2 L41 11 L50 6 L46 16 Z"
            fill="#FACC15"
            stroke="#92400E"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          {/* Crown Jewels */}
          <circle cx="14" cy="6" r="1.5" fill="#EF4444" />
          <circle cx="32" cy="2" r="1.5" fill="#3B82F6" />
          <circle cx="50" cy="6" r="1.5" fill="#EF4444" />
          <circle cx="32" cy="11" r="1" fill="#10B981" />
        </g>
      )}

      {accessory === 'SUNGLASSES' && (
        <g>
          {/* Cool Sunglasses */}
          <path
            d="M12 25 C12 21, 28 21, 28 25 L28 28 C28 32, 12 32, 12 28 Z"
            fill="#0F172A"
            stroke="#FFFFFF"
            strokeWidth="1"
          />
          <path
            d="M36 25 C36 21, 52 21, 52 25 L52 28 C52 32, 36 32, 36 28 Z"
            fill="#0F172A"
            stroke="#FFFFFF"
            strokeWidth="1"
          />
          {/* Sunglasses bridge */}
          <rect x="27" y="24" width="10" height="2" fill="#0F172A" stroke="#FFFFFF" strokeWidth="0.5" />
          {/* Reflection gloss */}
          <line x1="15" y1="26" x2="21" y2="30" stroke="#FFFFFF" strokeWidth="1" opacity="0.6" strokeLinecap="round" />
          <line x1="39" y1="26" x2="45" y2="30" stroke="#FFFFFF" strokeWidth="1" opacity="0.6" strokeLinecap="round" />
        </g>
      )}

      {accessory === 'BANDANA' && (
        <g>
          {/* Bandana covering head top */}
          <path
            d="M14 20 Q32 12 50 20 L48 14 Q32 8 16 14 Z"
            fill="#EF4444"
            stroke="#991B1B"
            strokeWidth="1.5"
          />
          {/* Bandana knot ties on left */}
          <path
            d="M14 17 L5 11 L10 22 Z"
            fill="#EF4444"
            stroke="#991B1B"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
          <path
            d="M14 17 L4 18 L11 25 Z"
            fill="#EF4444"
            stroke="#991B1B"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </g>
      )}

      {accessory === 'MUSTACHE' && (
        <g>
          {/* Vintage Handlebar Mustache below the nose */}
          <path
            d="M32 37 Q24 33 18 39 Q16 41 18 43 Q22 41 27 38 Q30 38 32 39 Q34 38 37 38 Q42 41 46 43 Q48 41 46 39 Q40 33 32 37 Z"
            fill="#78350F"
            stroke="#000000"
            strokeWidth="1"
            strokeLinejoin="round"
          />
        </g>
      )}
    </svg>
  );
}
