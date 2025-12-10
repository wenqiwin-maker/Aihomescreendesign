export function NavigationTop() {
  return (
    <div className="flex justify-between items-center px-5 py-2 h-14 gap-4">
      {/* User Section */}
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div className="w-10 h-10 bg-[#AAD5E2] rounded-full" />
        
        {/* User Name */}
        <div className="text-white/90" style={{  fontSize: '18px', fontWeight: 700, lineHeight: '135%' }}>
          Hi
        </div>
      </div>
      
      {/* Unlock Pro Button */}
      <button className="flex items-center gap-2 px-3 pl-1 py-1 bg-black rounded-full h-10">
        {/* Diamond Icon Container */}
        <div className="flex items-center justify-center w-8 h-8 bg-[#112038] rounded-full p-1">
          {/* Yellow Diamond SVG */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 5L15 12L12 19L9 12L12 5Z" fill="#FFDB6C"/>
            <path d="M12 5L18 12L12 19L6 12L12 5Z" fill="#FFB04C" fillOpacity="0.7"/>
            <path d="M12 8L14 12L12 16L10 12L12 8Z" fill="#FFF2BB"/>
          </svg>
        </div>
        
        {/* Text */}
        <span className="text-white" style={{  fontSize: '12px', fontWeight: 700, lineHeight: '130%' }}>
          Unlock
        </span>
      </button>
    </div>
  );
}
