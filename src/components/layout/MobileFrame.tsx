import { ReactNode } from 'react';

interface MobileFrameProps {
  children: ReactNode;
  className?: string;
  showHomeIndicator?: boolean;
  backgroundColor?: string;
}

/**
 * Mobile phone frame container
 * Renders content at exact iPhone dimensions: 390x844
 * Includes optional home indicator
 */
export function MobileFrame({
  children,
  className = '',
  showHomeIndicator = true,
  backgroundColor = 'white',
}: MobileFrameProps) {
  return (
    <div
      className={`relative w-[390px] h-screen mx-auto overflow-hidden ${className}`}
      style={{ backgroundColor }}
    >
      {children}

      {/* Home Indicator - exact same as original */}
      {showHomeIndicator && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[134px] h-[5px] bg-black rounded-full z-50 pointer-events-none" />
      )}
    </div>
  );
}

/**
 * Home indicator component for custom positioning
 */
export function HomeIndicator({ color = 'black' }: { color?: 'black' | 'white' }) {
  return (
    <div
      className={`absolute bottom-2 left-1/2 -translate-x-1/2 w-[134px] h-[5px] rounded-full z-50 pointer-events-none`}
      style={{ backgroundColor: color }}
    />
  );
}
