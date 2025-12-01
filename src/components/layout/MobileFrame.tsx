import { ReactNode } from 'react';

interface MobileFrameProps {
  children: ReactNode;
  className?: string;
  showNotch?: boolean;
  showHomeIndicator?: boolean;
  backgroundColor?: string;
}

/**
 * Mobile phone frame container
 * Renders content at exact iPhone dimensions: 390x844
 * Includes optional notch and home indicator
 */
export function MobileFrame({
  children,
  className = '',
  showNotch = true,
  showHomeIndicator = true,
  backgroundColor = 'white',
}: MobileFrameProps) {
  return (
    <div
      className={`relative w-[390px] h-[844px] mx-auto overflow-hidden ${className}`}
      style={{ backgroundColor }}
    >
      {children}

      {/* Notch - exact same as original */}
      {showNotch && (
        <div className="absolute w-[150px] h-[37px] left-[120px] top-0 bg-black rounded-b-[24px] z-50 pointer-events-none" />
      )}

      {/* Home Indicator - exact same as original */}
      {showHomeIndicator && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[134px] h-[5px] bg-black rounded-full z-50 pointer-events-none" />
      )}
    </div>
  );
}

/**
 * Notch component for custom positioning
 */
export function Notch() {
  return (
    <div className="absolute w-[150px] h-[37px] left-[120px] top-0 bg-black rounded-b-[24px] z-50 pointer-events-none" />
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
