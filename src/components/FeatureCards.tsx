import { FileText, MessageSquare } from 'lucide-react';

export function FeatureCards() {
  return (
    <div className="mb-[30px]">
      {/* Section Title */}
      <h2 
        className="mb-3 text-black/90"
        style={{ 
          fontFamily: 'SF Pro', 
          fontSize: '16px', 
          fontWeight: 500, 
          lineHeight: '135%' 
        }}
      >
        Top Practice
      </h2>
      
      {/* Cards Grid */}
      <div className="flex gap-4">
        {/* Generate CV Card */}
        <div className="w-[167px] h-[162px] rounded-2xl overflow-hidden relative">
          <div className="absolute inset-0 bg-[#7B1017]" />
          <div className="relative z-10 p-4 flex flex-col h-full">
            <FileText className="w-[58px] h-[58px] text-white mb-2" strokeWidth={1.5} />
            <div 
              className="text-white mt-auto"
              style={{ 
                fontFamily: 'SF Pro', 
                fontSize: '16px', 
                fontWeight: 700, 
                lineHeight: '135%' 
              }}
            >
              Generate CV
            </div>
          </div>
        </div>
        
        {/* Chat with AI Card */}
        <div className="flex-1 h-[162px] rounded-2xl overflow-hidden relative">
          <div className="absolute inset-0 bg-[#8C00FF]" />
          <div className="relative z-10 p-4 flex flex-col h-full">
            <MessageSquare className="w-[58px] h-[58px] text-white mb-2" strokeWidth={1.5} />
            <div 
              className="text-white mt-auto"
              style={{ 
                fontFamily: 'SF Pro', 
                fontSize: '16px', 
                fontWeight: 700, 
                lineHeight: '140%' 
              }}
            >
              Chat with AI
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}