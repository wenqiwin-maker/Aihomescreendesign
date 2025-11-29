interface HeroSectionProps {
  onStartConversation: () => void;
}

export function HeroSection({ onStartConversation }: HeroSectionProps) {
  return (
    <div className="px-[25px] pt-4 pb-[27px]">
      {/* Title */}
      <h2 
        style={{ 
          fontFamily: 'SF Pro', 
          fontSize: '28px', 
          fontWeight: 600, 
          lineHeight: '34px' 
        }}
      >
        I'm SimTalk
      </h2>
      
      {/* Subtitle */}
      <p 
        className="text-white mb-6"
        style={{ 
          fontFamily: 'Space Grotesk', 
          fontSize: '14px', 
          fontWeight: 400, 
          lineHeight: '135%' 
        }}
      >
        AI enhance............
      </p>
      
      {/* CTA Button */}
      <button 
        onClick={onStartConversation}
        className="flex items-center justify-center gap-3 px-5 pl-4 py-3 bg-white rounded-full shadow-inner w-[274px] h-[45px]"
      >
        <span 
          className="text-[#8C00FF]"
          style={{ 
            fontFamily: 'SF Pro', 
            fontSize: '16px', 
            fontWeight: 700, 
            lineHeight: '135%' 
          }}
        >
          Start a conversation
        </span>
        
        {/* AI Icon */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="2" width="13" height="13" rx="2" fill="#8C00FF"/>
          <rect x="14" y="14" width="8" height="8" rx="1.5" fill="#FF52EC"/>
          <circle cx="19" cy="4" r="2" fill="#FFB300"/>
          <circle cx="17" cy="6" r="1" fill="#FFB300"/>
        </svg>
      </button>
    </div>
  );
}