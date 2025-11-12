import { Home, BarChart2, Bell, Settings } from 'lucide-react';

export function NavigationBottom() {
  return (
    <div className="absolute bottom-0 left-0 right-0 w-[390px] h-[98px] bg-white rounded-t-[20px]">
      {/* Navigation Menu */}
      <div className="flex justify-between items-center px-4 h-16 border-t border-black/[0.08] rounded-t-[20px]">
        {/* Home - Active */}
        <button className="flex flex-col items-center justify-center gap-1 w-14 pt-3 pb-0.5">
          <div className="w-[30px] h-[30px] relative">
            <Home className="w-full h-full text-black" strokeWidth={1.35} />
          </div>
          <span 
            className="text-[#3E5FFF]"
            style={{ 
              fontFamily: 'Space Grotesk', 
              fontSize: '12px', 
              fontWeight: 500, 
              lineHeight: '130%' 
            }}
          >
            Home
          </span>
        </button>
        
        {/* Analysis - Hidden in original but keeping structure */}
        <div className="w-14" />
        
        {/* AI-Growy Center Button */}
        <div className="relative w-12 h-12 -mt-2">
          <button 
            className="w-12 h-12 rounded-full flex items-center justify-center p-3"
            style={{
              background: 'linear-gradient(147.61deg, #FC53EB 32.82%, #FFBF00 68.45%, #62E2F5 104.08%)',
              boxShadow: 'inset 0px 8px 12px rgba(236, 232, 255, 0.56)'
            }}
          >
            {/* AI Icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="mix-blend-hard-light">
              <rect x="2" y="2" width="13" height="13" rx="2" fill="white"/>
              <rect x="14" y="14" width="8" height="8" rx="1.5" fill="white"/>
              <circle cx="19" cy="4" r="2" stroke="white" strokeWidth="1.35" fill="none"/>
              <circle cx="17" cy="6" r="1" stroke="white" strokeWidth="1.35" fill="none"/>
            </svg>
          </button>
        </div>
        
        {/* Notify - Hidden but keeping space */}
        <div className="w-14" />
        
        {/* Settings */}
        <button className="flex flex-col items-center justify-center gap-1 w-14 pt-3 pb-0.5">
          <Settings className="w-[30px] h-[30px] text-black" strokeWidth={1.35} />
          <span 
            className="text-[#515B70]"
            style={{ 
              fontFamily: 'Space Grotesk', 
              fontSize: '12px', 
              fontWeight: 500, 
              lineHeight: '130%' 
            }}
          >
            Settings
          </span>
        </button>
      </div>
      
      {/* Home Indicator */}
      <div className="h-[34px] bg-white relative">
        <div className="absolute w-[134px] h-[5px] bg-black rounded-full left-1/2 -translate-x-1/2 bottom-2" />
      </div>
    </div>
  );
}
