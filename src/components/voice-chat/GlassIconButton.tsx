import { ReactNode } from 'react';

interface GlassIconButtonProps {
  onClick: () => void;
  children: ReactNode;
}

export function GlassIconButton({ onClick, children }: GlassIconButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-row justify-center items-center w-11 h-11 rounded-full relative flex-shrink-0"
      style={{
        background: "rgba(247, 247, 247, 0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "0.5px solid rgba(255, 255, 255, 0.8)",
        boxShadow:
          "0px 4px 12px rgba(0, 0, 0, 0.15), inset 0px 1px 0px rgba(255, 255, 255, 0.4)",
      }}
    >
      {children}
    </button>
  );
}
