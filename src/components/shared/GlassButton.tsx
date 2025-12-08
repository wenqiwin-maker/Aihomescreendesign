import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

export interface GlassButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Glass morphism button component
 * Exact same styles as used throughout the app
 */
export function GlassButton({
  children,
  size = 'md',
  className,
  style,
  ...props
}: GlassButtonProps) {
  const sizeClasses = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11',
    lg: 'w-14 h-14',
  };

  return (
    <button
      className={cn(
        'flex flex-row justify-center items-center rounded-full relative flex-shrink-0',
        sizeClasses[size],
        className
      )}
      style={{
        background: 'rgba(247, 247, 247, 0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '0.5px solid rgba(255, 255, 255, 0.8)',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15), inset 0px 1px 0px rgba(255, 255, 255, 0.4)',
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
}

export interface GlassIconButtonProps extends Omit<GlassButtonProps, 'children'> {
  icon: string;
}

/**
 * Glass button with SF Symbol icon
 * Used for back, close, etc.
 */
export function GlassIconButton({
  icon,
  size = 'md',
  ...props
}: GlassIconButtonProps) {
  return (
    <GlassButton size={size} {...props}>
      <span
        className="flex items-center justify-center"
        style={{
          fontFamily: 'SF Pro',
          fontSize: '20px',
          fontWeight: 400,
          lineHeight: '20px',
          color: '#404040',
        }}
      >
        {icon}
      </span>
    </GlassButton>
  );
}

// Common icons used throughout the app
export const ICONS = {
  back: '􀯶',
  close: '􀆄',
  chevronRight: '􀆊',
  checkmark: '􀆅',
} as const;
