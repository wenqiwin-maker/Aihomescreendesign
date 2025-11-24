import { Battery, Wifi, Signal } from 'lucide-react';

export function StatusBar() {
  return (
    <div className="flex justify-between items-center px-4 py-[11px] h-[47px] gap-[200px]">
      {/* Time */}
      <div className="text-white" style={{ fontSize: '12px' }}>9:41</div>
      
      {/* Right Side Icons */}
      <div className="flex items-center gap-1.5">
        <Signal className="w-[15px] h-3 text-white" />
        <Wifi className="w-[15px] h-3 text-white" />
        <Battery className="w-[24px] h-3 text-white" />
      </div>
    </div>
  );
}
