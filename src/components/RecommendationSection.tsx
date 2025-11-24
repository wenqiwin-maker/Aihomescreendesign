export function RecommendationSection() {
  return (
    <div className="flex flex-col gap-3">
      {/* Section Header */}
      <div className="flex justify-between items-center">
        <h3 
          className="text-black/90"
          style={{ 
            fontFamily: 'Space Grotesk', 
            fontSize: '16px', 
            fontWeight: 500, 
            lineHeight: '135%' 
          }}
        >
          Recommended for you
        </h3>
        <button 
          className="text-black"
          style={{ 
            fontFamily: 'Space Grotesk', 
            fontSize: '12px', 
            fontWeight: 500, 
            lineHeight: '130%' 
          }}
        >
          View all
        </button>
      </div>
      
      {/* Recommendation Cards */}
      <div className="flex flex-col gap-4">
        {/* Card 1 */}
        <div className="flex gap-3">
          <div className="w-[86px] h-[86px] bg-[#D9D9D9] rounded-xl flex-shrink-0" />
          <p 
            className="text-black/90 flex-1"
            style={{ 
              fontFamily: 'Space Grotesk', 
              fontSize: '16px', 
              fontWeight: 700, 
              lineHeight: '135%' 
            }}
          >
            Complete your Information to enhance AI
          </p>
        </div>
        
        {/* Card 2 */}
        <div className="flex gap-3">
          <div className="w-[86px] h-[86px] bg-[#D9D9D9] rounded-xl flex-shrink-0" />
          <p 
            className="text-black/90 flex-1"
            style={{ 
              fontFamily: 'Space Grotesk', 
              fontSize: '16px', 
              fontWeight: 700, 
              lineHeight: '135%' 
            }}
          >
            Complete your Information to enhance AI
          </p>
        </div>
      </div>
    </div>
  );
}
