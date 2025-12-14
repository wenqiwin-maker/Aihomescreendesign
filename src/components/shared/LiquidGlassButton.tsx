import { ReactNode } from 'react';

interface LiquidGlassButtonProps {
  children: ReactNode;
  size?: number;
  onClick?: () => void;
  className?: string;
}

/**
 * Apple Liquid Glass effect button (iOS 26 style)
 * Clean glass morphism without distortion for crisp edges
 */
export function LiquidGlassButton({
  children,
  size = 60,
  onClick,
  className,
}: LiquidGlassButtonProps) {
  return (
    <button
      onClick={onClick}
      className={className}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        border: 'none',
        boxShadow: `
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
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {children}
    </button>
  );
}
