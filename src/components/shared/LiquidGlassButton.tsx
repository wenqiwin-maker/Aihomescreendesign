import { ReactNode, useId } from 'react';

interface LiquidGlassButtonProps {
  children: ReactNode;
  size?: number;
  onClick?: () => void;
  className?: string;
}

/**
 * Apple Liquid Glass effect button (iOS 26 style)
 * Uses SVG filters for refraction/distortion effect
 */
export function LiquidGlassButton({
  children,
  size = 60,
  onClick,
  className,
}: LiquidGlassButtonProps) {
  // Use unique ID to avoid filter conflicts when multiple buttons are rendered
  const filterId = useId();

  return (
    <>
      {/* SVG filter definition for liquid glass effect */}
      <svg
        style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
        aria-hidden="true"
      >
        <defs>
          <filter id={`liquid-glass-${filterId}`} x="-20%" y="-20%" width="140%" height="140%">
            {/* Noise for organic distortion */}
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.015 0.025"
              numOctaves="3"
              seed="42"
              result="noise"
            />
            {/* Blur the noise for smoother displacement */}
            <feGaussianBlur in="noise" stdDeviation="2" result="blurredNoise" />
            {/* Apply displacement for refraction effect */}
            <feDisplacementMap
              in="SourceGraphic"
              in2="blurredNoise"
              scale="6"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displaced"
            />
            {/* Blend with original for subtle effect */}
            <feBlend in="displaced" in2="SourceGraphic" mode="normal" />
          </filter>
        </defs>
      </svg>

      <button
        onClick={onClick}
        className={className}
        style={{
          width: size,
          height: size,
          borderRadius: '1000px',
          background: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(10px) saturate(180%)',
          WebkitBackdropFilter: 'blur(10px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.4)',
          boxShadow: `
            0 8px 32px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.6),
            inset 0 -1px 0 rgba(0, 0, 0, 0.1)
          `.trim().replace(/\s+/g, ' '),
          filter: `url(#liquid-glass-${filterId})`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          padding: 0,
          outline: 'none',
        }}
      >
        {children}
      </button>
    </>
  );
}
