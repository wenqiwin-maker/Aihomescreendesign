import { Battery, Wifi, Signal } from 'lucide-react';

interface StatusBarProps {
  variant?: 'light' | 'dark';
}

export function StatusBar({ variant = 'dark' }: StatusBarProps) {
  const colorClass = variant === 'dark' ? 'text-black' : 'text-white';
  
  return (
    <div className="flex items-center gap-1.5">
      <Signal className={`w-[17px] h-[11px] ${colorClass}`} />
      <Wifi className={`w-[15px] h-[11px] ${colorClass}`} />
      <Battery className={`w-[25px] h-[11px] ${colorClass}`} />
    </div>
  );
}
