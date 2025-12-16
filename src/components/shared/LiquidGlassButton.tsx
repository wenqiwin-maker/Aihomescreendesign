import React, { ReactNode } from 'react';

interface LiquidGlassButtonProps {
  children: ReactNode;
  size?: number;
  width?: number;
  height?: number;
  onClick?: () => void;
  className?: string;
  variant?: 'default' | 'blue' | 'onDark';
  shape?: 'circle' | 'pill';
}

/**
 * Apple Liquid Glass effect button (iOS 26 style)
 * Clean glass morphism without distortion for crisp edges
 * Variants:
 * - 'default': For use on varied/light backgrounds (blur creates milky effect)
 * - 'blue': Blue tinted button
 * - 'onDark': For use on solid dark backgrounds (higher opacity to simulate milky look)
 * Supports 'circle' (default) and 'pill' shapes
 */
export function LiquidGlassButton({
  children,
  size = 60,
  width,
  height,
  onClick,
  className,
  variant = 'default',
  shape = 'circle',
}: LiquidGlassButtonProps) {
  const isBlue = variant === 'blue';
  const isOnDark = variant === 'onDark';
  const isPill = shape === 'pill';
  
  // For pill shape, use width/height; for circle, use size
  const buttonWidth = isPill ? (width ?? 350) : size;
  const buttonHeight = isPill ? (height ?? 64) : size;
  const borderRadius = isPill ? '42px' : '50%';
  
  return (
    <button
      onClick={onClick}
      className={className}
      style={{
        width: buttonWidth,
        height: buttonHeight,
        borderRadius,
        background: isBlue 
          ? 'linear-gradient(135deg, rgba(0, 136, 255, 0.9) 0%, rgba(0, 100, 200, 0.85) 100%)'
          : isOnDark
            ? 'linear-gradient(135deg, rgba(200, 200, 200, 0.5) 0%, rgba(180, 180, 180, 0.4) 100%)'
            : 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        border: 'none',
        boxShadow: isBlue
          ? `
            inset 0 0.5px 0.5px rgba(255, 255, 255, 0.4),
            inset 0 -0.5px 0.5px rgba(0, 0, 0, 0.1),
            0 4px 16px rgba(0, 0, 0, 0.15),
            0 1px 3px rgba(0, 0, 0, 0.1)
          `
          : isOnDark
            ? `
              inset 0 1px 1px rgba(255, 255, 255, 0.6),
              inset 0 -0.5px 0.5px rgba(0, 0, 0, 0.1),
              0 4px 16px rgba(0, 0, 0, 0.25),
              0 1px 3px rgba(0, 0, 0, 0.15)
            `
            : `
              inset 0 0.5px 0.5px rgba(255, 255, 255, 0.5),
              inset 0 -0.5px 0.5px rgba(0, 0, 0, 0.05),
              0 4px 16px rgba(0, 0, 0, 0.1),
              0 1px 3px rgba(0, 0, 0, 0.08)
            `,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        padding: 0,
        outline: 'none',
        overflow: 'hidden',
      }}
    >
      {children}
    </button>
  );
}
