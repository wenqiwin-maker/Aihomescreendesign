import { X } from 'lucide-react';
import { motion } from 'motion/react';
import { StatusBar } from './StatusBar';

interface SimulationSummaryProps {
  onClose: () => void;
}

export function SimulationSummary({ onClose }: SimulationSummaryProps) {
  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ type: 'tween', duration: 0.4 }}
      className="fixed inset-0 w-[390px] h-[844px] bg-white overflow-y-auto"
    >
      {/* Status Bar */}
      <div className="flex justify-center items-center px-4 pt-[21px] pb-[19px] gap-[154px] h-[62px] bg-white">
        <div className="flex-1 flex justify-center items-center">
          <span 
            className="text-black text-center"
            style={{ 
              fontFamily: 'SF Pro', 
              fontSize: '17px', 
              fontWeight: 590, 
              lineHeight: '22px' 
            }}
          >
            9:41
          </span>
        </div>
        <StatusBar />
      </div>

      {/* Toolbar */}
      <div className="flex justify-between items-start px-4 pb-[10px] h-[54px] bg-white">
        <div className="w-11 h-11" />
        
        <div className="absolute left-1/2 -translate-x-1/2 top-[75px]">
          <h1 
            className="text-[#333333] text-center"
            style={{ 
              fontFamily: 'SF Pro', 
              fontSize: '17px', 
              fontWeight: 590, 
              lineHeight: '22px',
              letterSpacing: '-0.43px',
              mixBlendMode: 'plus-darker'
            }}
          >
            Recap
          </h1>
        </div>
        
        <button 
          onClick={onClose}
          className="w-11 h-11 rounded-full flex items-center justify-center"
          style={{
            background: 'linear-gradient(0deg, #F7F7F7, #F7F7F7), linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), #333333'
          }}
        >
          <X className="w-5 h-5 text-[#404040]" strokeWidth={2} />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-start px-5 pt-4 pb-[180px] gap-5">
        {/* Instant Recap Section */}
        <div className="flex flex-col items-start gap-5 w-full">
          <div className="flex flex-col items-start gap-3">
            <h2
              style={{ 
                fontFamily: 'SF Pro', 
                fontSize: '14px', 
                fontWeight: 510, 
                lineHeight: '20px',
                letterSpacing: '-0.3125px',
                color: 'rgba(0, 0, 0, 0.9)'
              }}
            >
              Instant Recap
            </h2>

            {/* Cards Grid */}
            <div className="flex flex-col items-start gap-[10px] w-full">
              {/* Row 1 */}
              <div className="flex items-center gap-[10px] w-full">
                {/* Clarity Card */}
                <div className="flex items-center p-3 gap-2 w-[170px] h-[77px] bg-[rgba(0,166,62,0.05)] rounded-[14px]">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <circle cx="18" cy="18" r="13.5" stroke="#000000" strokeWidth="2"/>
                    <circle cx="18" cy="18" r="6" fill="#000000"/>
                  </svg>
                  <div className="flex flex-col items-start">
                    <div className="flex items-start gap-1">
                      <span style={{ fontFamily: 'SF Pro', fontSize: '12px', fontWeight: 400, lineHeight: '14px', letterSpacing: '-0.150391px', color: 'rgba(0, 0, 0, 0.6)' }}>
                        Clarity
                      </span>
                      <div className="w-2 h-2 bg-[#00C950] rounded-full" />
                    </div>
                    <span style={{ fontFamily: 'SF Pro', fontSize: '14px', fontWeight: 590, lineHeight: '20px', color: '#08A75E' }}>
                      Good
                    </span>
                  </div>
                </div>

                {/* Tone Steady Card */}
                <div className="flex items-center p-3 gap-2 w-[170px] h-[77px] bg-[rgba(62,95,255,0.05)] rounded-[14px]">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <circle cx="18" cy="18" r="14" stroke="#000000" strokeWidth="2"/>
                    <circle cx="18" cy="20" r="2" fill="#000000"/>
                  </svg>
                  <div className="flex flex-col items-start">
                    <div className="flex items-start gap-1">
                      <span style={{ fontFamily: 'SF Pro', fontSize: '12px', fontWeight: 400, lineHeight: '14px', letterSpacing: '-0.150391px', color: 'rgba(0, 0, 0, 0.6)' }}>
                        Tone Steady
                      </span>
                      <div className="w-2 h-2 bg-[#3E5FFF] rounded-full" />
                    </div>
                    <span style={{ fontFamily: 'SF Pro', fontSize: '14px', fontWeight: 590, lineHeight: '20px', color: '#3E5FFF' }}>
                      Strong
                    </span>
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex items-center gap-[10px] w-full">
                {/* Boundaries Card */}
                <div className="flex items-center p-3 gap-2 w-[170px] h-[77px] bg-[rgba(238,44,0,0.05)] rounded-[14px]">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <rect x="6" y="5.4" width="24" h="24" stroke="#000000" strokeWidth="2"/>
                    <circle cx="3.6" cy="3" r="2" fill="#000000"/>
                    <circle cx="27.6" cy="3" r="2" fill="#000000"/>
                    <circle cx="27.6" cy="27" r="2" fill="#000000"/>
                    <circle cx="3.6" cy="27" r="2" fill="#000000"/>
                  </svg>
                  <div className="flex flex-col items-start">
                    <div className="flex items-start gap-1">
                      <span style={{ fontFamily: 'SF Pro', fontSize: '12px', fontWeight: 400, lineHeight: '14px', letterSpacing: '-0.150391px', color: 'rgba(0, 0, 0, 0.6)' }}>
                        Boundaries clear
                      </span>
                      <div className="w-2 h-2 bg-[#EE2C00] rounded-full" />
                    </div>
                    <span style={{ fontFamily: 'SF Pro', fontSize: '14px', fontWeight: 590, lineHeight: '20px', color: '#EE2C00' }}>
                      Needs work
                    </span>
                  </div>
                </div>

                {/* Actionable Ask Card */}
                <div className="flex items-center p-3 gap-2 w-[170px] h-[77px] bg-[rgba(0,166,62,0.05)] rounded-[14px]">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <path d="M10 2.5L26 18L10 33.5" stroke="#000000" strokeWidth="2"/>
                  </svg>
                  <div className="flex flex-col items-start">
                    <div className="flex items-start gap-1">
                      <span style={{ fontFamily: 'SF Pro', fontSize: '12px', fontWeight: 400, lineHeight: '14px', letterSpacing: '-0.150391px', color: 'rgba(0, 0, 0, 0.6)' }}>
                        Actionable ask
                      </span>
                      <div className="w-2 h-2 bg-[#00C950] rounded-full" />
                    </div>
                    <span style={{ fontFamily: 'SF Pro', fontSize: '14px', fontWeight: 590, lineHeight: '20px', color: '#08A75E' }}>
                      Good
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="flex flex-col items-start gap-3 w-full">
            {/* Keep Card */}
            <div className="flex items-start p-4 gap-2 w-full bg-white border border-[rgba(0,0,0,0.0784314)] rounded-[14px]">
              <div className="flex flex-col items-start gap-1 flex-1">
                <span style={{ fontFamily: 'SF Pro', fontSize: '16px', fontWeight: 510, lineHeight: '22px', letterSpacing: '-0.439453px', color: '#101828' }}>
                  You stated a clear time frame
                </span>
                <span style={{ fontFamily: 'SF Pro', fontSize: '14px', fontWeight: 400, lineHeight: '20px', letterSpacing: '-0.3125px', color: 'rgba(0, 0, 0, 0.6)' }}>
                  You established context in the first 15 seconds and maintained clarity throughout
                </span>
              </div>
              <div className="flex items-center px-1 h-5 border border-[#00A63E] rounded-xl">
                <span style={{ fontFamily: 'SF Pro', fontSize: '12px', fontWeight: 400, lineHeight: '14px', color: '#00A63E' }}>
                  Keep
                </span>
              </div>
            </div>

            {/* Improve Card */}
            <div className="flex items-start p-4 gap-2 w-full bg-white border border-[rgba(0,0,0,0.0784314)] rounded-[14px]">
              <div className="flex flex-col items-start gap-1 flex-1">
                <span style={{ fontFamily: 'SF Pro', fontSize: '16px', fontWeight: 510, lineHeight: '22px', letterSpacing: '-0.439453px', color: '#101828' }}>
                  Add one line about the impact
                </span>
                <span style={{ fontFamily: 'SF Pro', fontSize: '14px', fontWeight: 400, lineHeight: '20px', letterSpacing: '-0.3125px', color: 'rgba(0, 0, 0, 0.6)' }}>
                  You established context in the first 15 seconds and maintained clarity throughout
                </span>
              </div>
              <div className="flex items-center px-1 h-5 border border-[#EE2C00] rounded-xl">
                <span style={{ fontFamily: 'SF Pro', fontSize: '12px', fontWeight: 400, lineHeight: '14px', color: '#EE2C00' }}>
                  Improve
                </span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px border-t border-[rgba(0,0,0,0.0784314)]" />

          {/* Stronger Alternatives Section */}
          <div className="flex flex-col items-start gap-3 w-full">
            <h2
              style={{ 
                fontFamily: 'SF Pro', 
                fontSize: '14px', 
                fontWeight: 510, 
                lineHeight: '20px',
                letterSpacing: '-0.3125px',
                color: 'rgba(0, 0, 0, 0.9)'
              }}
            >
              Stronger Alternatives
            </h2>

            {/* Alternative Card 1 */}
            <div className="flex flex-col items-start p-4 gap-4 w-full bg-[rgba(62,95,255,0.05)] border border-[rgba(140,0,255,0.05)] rounded-[14px]">
              <span style={{ fontFamily: 'SF Pro', fontSize: '14px', fontWeight: 510, lineHeight: '20px', letterSpacing: '-0.150391px', color: 'rgba(0, 0, 0, 0.9)' }}>
                Alternatives
              </span>

              <div className="flex flex-col items-start gap-3 w-full">
                <div className="flex items-center gap-2">
                  <span style={{ fontFamily: 'SF Pro', fontSize: '14px', fontWeight: 400, lineHeight: '20px', letterSpacing: '-0.150391px', color: 'rgba(0, 0, 0, 0.6)' }}>
                    Tone:
                  </span>
                  <div className="flex items-center px-1 h-[22px] bg-[#3E5FFF] rounded-[11px]">
                    <span style={{ fontFamily: 'SF Pro', fontSize: '12px', fontWeight: 400, lineHeight: '14px', color: '#FFFFFF' }}>
                      Neutral
                    </span>
                  </div>
                  <div className="flex items-center px-1 h-[22px] border border-[rgba(0,0,0,0.1)] rounded-[11px]">
                    <span style={{ fontFamily: 'SF Pro', fontSize: '12px', fontWeight: 400, lineHeight: '14px', color: '#0A0A0A' }}>
                      Firm-polite
                    </span>
                  </div>
                  <div className="flex items-center px-1 h-[22px] border border-[rgba(0,0,0,0.1)] rounded-[11px]">
                    <span style={{ fontFamily: 'SF Pro', fontSize: '12px', fontWeight: 400, lineHeight: '14px', color: '#0A0A0A' }}>
                      Caring
                    </span>
                  </div>
                </div>

                <div className="flex items-start p-3 gap-2 w-full bg-white rounded-[10px]">
                  <span style={{ fontFamily: 'SF Pro', fontSize: '16px', fontWeight: 400, lineHeight: '22px', letterSpacing: '-0.3125px', color: '#101828' }}>
                    "I'd like to decide X by next Wednesday. If that works for you, please confirm by Friday."
                  </span>
                </div>

                <div className="flex flex-col items-start gap-1">
                  <span style={{ fontFamily: 'SF Pro', fontSize: '14px', fontWeight: 400, lineHeight: '20px', letterSpacing: '-0.150391px', color: 'rgba(0, 0, 0, 0.6)' }}>
                    You said:
                  </span>
                  <span style={{ fontFamily: 'SF Pro', fontSize: '14px', fontWeight: 400, fontStyle: 'italic', lineHeight: '24px', letterSpacing: '-0.3125px', color: 'rgba(0, 0, 0, 0.9)' }}>
                    "I want to make this decision by next Wednesday."
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Divider */}
          <div className="w-full h-px border-t border-[#E5E7EB]" />

          {/* Moments to Watch Section */}
          <div className="flex flex-col items-start gap-3 w-full">
            <h2
              style={{ 
                fontFamily: 'SF Pro', 
                fontSize: '14px', 
                fontWeight: 510, 
                lineHeight: '20px',
                letterSpacing: '-0.3125px',
                color: 'rgba(0, 0, 0, 0.9)'
              }}
            >
              Moments to Watch
            </h2>

            {/* Card */}
            <div className="flex flex-row items-start p-3 gap-3 w-full bg-white border border-[rgba(0,0,0,0.0784314)] rounded-[14px]">
              {/* Left Column - Timeline Dots */}
              <div className="flex flex-col items-start pt-[26px] gap-2 w-[6px]">
                {/* Dot 1 with Line */}
                <div className="flex flex-col items-center gap-1 w-[6px]">
                  <div className="w-[6px] h-[6px] bg-black rounded-full" />
                  <div className="w-0 h-[47px] border-l-2 border-[rgba(0,0,0,0.1)]" />
                </div>
                {/* Dot 2 with Line */}
                <div className="flex flex-col items-center gap-1 w-[6px]">
                  <div className="w-[6px] h-[6px] bg-black rounded-full" />
                  <div className="w-0 h-[47px] border-l-2 border-[rgba(0,0,0,0.1)]" />
                </div>
                {/* Dot 3 with Line */}
                <div className="flex flex-col items-center gap-1 w-[6px]">
                  <div className="w-[6px] h-[6px] bg-black rounded-full" />
                  <div className="w-0 h-[47px] border-l-2 border-[rgba(0,0,0,0.1)]" />
                </div>
                {/* Dot 4 (no line) */}
                <div className="flex flex-col items-center w-[6px]">
                  <div className="w-[6px] h-[6px] bg-black rounded-full" />
                </div>
              </div>

              {/* Right Column - Moments List */}
              <div className="flex flex-col items-start gap-2 flex-1">
                {/* Moment 1 - Your bookmark */}
                <div className="flex flex-row justify-between items-center py-2 w-full">
                  <div className="flex flex-row items-center gap-3">
                    <div className="flex flex-row justify-center items-center w-8 h-8 border border-[#8C00FF] rounded-full">
                      <span style={{ fontFamily: 'Inter', fontSize: '16px', fontWeight: 400, lineHeight: '24px', letterSpacing: '-0.3125px' }}>
                        📌
                      </span>
                    </div>
                    <div className="flex flex-col items-start">
                      <span style={{ fontFamily: 'SF Pro', fontSize: '12px', fontWeight: 400, lineHeight: '16px', color: 'rgba(0, 0, 0, 0.6)' }}>
                        00:23
                      </span>
                      <span style={{ fontFamily: 'SF Pro', fontSize: '14px', fontWeight: 400, lineHeight: '20px', letterSpacing: '-0.3125px', color: '#101828' }}>
                        Your bookmark
                      </span>
                    </div>
                  </div>
                  <button className="flex justify-center items-center w-8 h-8 rounded-full">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3.33398 2.66667L12.6673 8L3.33398 13.3333V2.66667Z" stroke="#8C00FF" strokeWidth="1.33333"/>
                    </svg>
                  </button>
                </div>

                {/* Moment 2 - Hesitation detected */}
                <div className="flex flex-row justify-between items-center py-2 w-full">
                  <div className="flex flex-row items-center gap-3">
                    <div className="flex flex-row justify-center items-center w-8 h-8 border border-[#F0B100] rounded-full">
                      <span style={{ fontFamily: 'Inter', fontSize: '16px', fontWeight: 400, lineHeight: '24px', letterSpacing: '-0.3125px' }}>
                        ⏸️
                      </span>
                    </div>
                    <div className="flex flex-col items-start">
                      <span style={{ fontFamily: 'SF Pro', fontSize: '12px', fontWeight: 400, lineHeight: '16px', color: 'rgba(0, 0, 0, 0.6)' }}>
                        00:45
                      </span>
                      <span style={{ fontFamily: 'SF Pro', fontSize: '14px', fontWeight: 400, lineHeight: '20px', letterSpacing: '-0.3125px', color: '#101828' }}>
                        Hesitation detected
                      </span>
                    </div>
                  </div>
                  <button className="flex justify-center items-center w-8 h-8 rounded-full">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3.33398 2.66667L12.6673 8L3.33398 13.3333V2.66667Z" stroke="#8C00FF" strokeWidth="1.33333"/>
                    </svg>
                  </button>
                </div>

                {/* Moment 3 - Your bookmark */}
                <div className="flex flex-row justify-between items-center py-2 w-full">
                  <div className="flex flex-row items-center gap-3">
                    <div className="flex flex-row justify-center items-center w-8 h-8 border border-[#8C00FF] rounded-full">
                      <span style={{ fontFamily: 'Inter', fontSize: '16px', fontWeight: 400, lineHeight: '24px', letterSpacing: '-0.3125px' }}>
                        📌
                      </span>
                    </div>
                    <div className="flex flex-col items-start">
                      <span style={{ fontFamily: 'SF Pro', fontSize: '12px', fontWeight: 400, lineHeight: '16px', color: 'rgba(0, 0, 0, 0.6)' }}>
                        01:12
                      </span>
                      <span style={{ fontFamily: 'SF Pro', fontSize: '14px', fontWeight: 400, lineHeight: '20px', letterSpacing: '-0.3125px', color: '#101828' }}>
                        Your bookmark
                      </span>
                    </div>
                  </div>
                  <button className="flex justify-center items-center w-8 h-8 rounded-full">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3.33398 2.66667L12.6673 8L3.33398 13.3333V2.66667Z" stroke="#8C00FF" strokeWidth="1.33333"/>
                    </svg>
                  </button>
                </div>

                {/* Moment 4 - Rising emotion */}
                <div className="flex flex-row justify-between items-center py-2 w-full">
                  <div className="flex flex-row items-center gap-3">
                    <div className="flex flex-row justify-center items-center w-8 h-8 border border-[#FB2C36] rounded-full">
                      <span style={{ fontFamily: 'Inter', fontSize: '16px', fontWeight: 400, lineHeight: '24px', letterSpacing: '-0.3125px' }}>
                        📈
                      </span>
                    </div>
                    <div className="flex flex-col items-start">
                      <span style={{ fontFamily: 'SF Pro', fontSize: '12px', fontWeight: 400, lineHeight: '16px', color: 'rgba(0, 0, 0, 0.6)' }}>
                        01:38
                      </span>
                      <span style={{ fontFamily: 'SF Pro', fontSize: '14px', fontWeight: 400, lineHeight: '20px', letterSpacing: '-0.3125px', color: '#101828' }}>
                        Rising emotion
                      </span>
                    </div>
                  </div>
                  <button className="flex justify-center items-center w-8 h-8 rounded-full">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3.33398 2.66667L12.6673 8L3.33398 13.3333V2.66667Z" stroke="#8C00FF" strokeWidth="1.33333"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Divider before Adjust Plan */}
          <div className="w-full h-px border-t border-[#E5E7EB]" />

          {/* Adjust Plan Section */}
          <div className="flex flex-col items-start gap-3 w-full">
            <div className="flex justify-between items-center w-full">
              <h2
                style={{ 
                  fontFamily: 'SF Pro', 
                  fontSize: '14px', 
                  fontWeight: 510, 
                  lineHeight: '20px',
                  letterSpacing: '-0.3125px',
                  color: 'rgba(0, 0, 0, 0.9)'
                }}
              >
                Adjust Plan
              </h2>
              <button className="flex items-center gap-2 px-2 h-7 rounded-lg">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 10L6 14M6 14L10 10M6 14V2" stroke="#8C00FF" strokeWidth="1.33"/>
                </svg>
                <span style={{ fontFamily: 'SF Pro', fontSize: '14px', fontWeight: 500, lineHeight: '20px', letterSpacing: '-0.150391px', color: '#8C00FF' }}>
                  Edit
                </span>
              </button>
            </div>

            <div className="flex flex-col items-start p-4 gap-3 w-full bg-[rgba(140,0,255,0.04)] border border-[rgba(140,0,255,0.05)] rounded-[14px]">
              <div className="flex flex-col items-start gap-3 w-full">
                <div className="relative">
                  <div className="flex items-center px-2 h-[22px] bg-[#8C00FF] rounded-lg absolute top-0 left-0">
                    <span style={{ fontFamily: 'SF Pro', fontSize: '12px', fontWeight: 500, lineHeight: '16px', color: '#FFFFFF' }}>
                      BLUF + Ask
                    </span>
                  </div>
                  <div style={{ paddingTop: '32.5px' }}>
                    <span style={{ fontFamily: 'SF Pro', fontSize: '14px', fontWeight: 400, lineHeight: '20px', letterSpacing: '-0.150391px', color: 'rgba(0, 0, 0, 0.6)' }}>
                      Conclusion/Ask:
                    </span>
                  </div>
                  <span style={{ fontFamily: 'SF Pro', fontSize: '16px', fontWeight: 510, lineHeight: '22px', letterSpacing: '-0.3125px', color: '#101828' }}>
                    Apply for promotion to SWE III in Q3
                  </span>
                </div>

                <div className="flex flex-col items-start">
                  <span style={{ fontFamily: 'SF Pro', fontSize: '14px', fontWeight: 400, lineHeight: '20px', letterSpacing: '-0.150391px', color: 'rgba(0, 0, 0, 0.6)' }}>
                    Reasons (Evidence):
                  </span>
                  <span style={{ fontFamily: 'SF Pro', fontSize: '16px', fontWeight: 510, lineHeight: '22px', letterSpacing: '-0.3125px', color: '#101828' }}>
                    Past two quarters: Led Project X, delivered Impact Y
                  </span>
                </div>

                <div className="flex flex-col items-start">
                  <span style={{ fontFamily: 'SF Pro', fontSize: '14px', fontWeight: 400, lineHeight: '20px', letterSpacing: '-0.150391px', color: 'rgba(0, 0, 0, 0.6)' }}>
                    Action/When:
                  </span>
                  <span style={{ fontFamily: 'SF Pro', fontSize: '16px', fontWeight: 510, lineHeight: '22px', letterSpacing: '-0.3125px', color: '#101828' }}>
                    Confirm review window by this Friday and align on next steps
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 w-[390px] flex flex-col items-start px-4 pt-4 pb-10 gap-2 bg-white border-t border-[rgba(0,0,0,0.1)] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
        <button className="flex items-center justify-center w-full h-10 bg-white border border-[rgba(0,0,0,0.1)] rounded-lg">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mr-3.5">
            <circle cx="8" cy="8" r="6.67" stroke="#0A0A0A" strokeWidth="1.33"/>
            <path d="M8 2V8" stroke="#0A0A0A" strokeWidth="1.33"/>
          </svg>
          <span style={{ fontFamily: 'SF Pro', fontSize: '14px', fontWeight: 500, lineHeight: '20px', letterSpacing: '-0.150391px', color: '#0A0A0A' }}>
            Enable Live Assist
          </span>
        </button>

        <button 
          onClick={onClose}
          className="flex items-center justify-center w-full h-[42px] bg-[#3E5FFF] rounded-[22px]"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mr-2">
            <path d="M8 2L8 14M14 8L2 8" stroke="#FFFFFF" strokeWidth="1.33"/>
          </svg>
          <span style={{ fontFamily: 'SF Pro', fontSize: '16px', fontWeight: 510, lineHeight: '20px', letterSpacing: '-0.150391px', color: '#FFFFFF' }}>
            Re-run 30s
          </span>
        </button>
      </div>
    </motion.div>
  );
}
