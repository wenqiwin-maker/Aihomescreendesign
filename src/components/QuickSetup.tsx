import { X } from 'lucide-react';
import { StatusBar } from './StatusBar';
import { useState } from 'react';

interface QuickSetupProps {
  onClose: () => void;
  onNext: () => void;
}

export function QuickSetup({ onClose, onNext }: QuickSetupProps) {
  const [selectedOption, setSelectedOption] = useState<'work' | 'life' | null>(null);

  return (
    <div className="relative w-[390px] h-[844px] bg-white">
      {/* Status Bar */}
      <div className="flex justify-center items-center px-4 pt-[21px] pb-[19px] gap-[154px] h-[62px]">
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
      <div className="flex justify-between items-center px-4 pb-[10px] h-[54px]">
        {/* Leading - empty space */}
        <div className="w-11 h-11" />
        
        {/* Title */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <h1 
            className="text-[#333333] text-center"
            style={{ 
              fontFamily: 'SF Pro', 
              fontSize: '17px', 
              fontWeight: 590, 
              lineHeight: '22px',
              letterSpacing: '-0.43px'
            }}
          >
            Setup
          </h1>
        </div>
        
        {/* Close Button */}
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

      {/* Progress Indicator */}
      <div className="flex items-start px-5 gap-1 h-[3px]">
        <div className="w-[114px] h-[3px] bg-[#3E5FFF] rounded-sm" />
        <div className="w-[114px] h-[3px] bg-[#E9EBF3] rounded-sm" />
        <div className="w-[114px] h-[3px] bg-[#E9EBF3] rounded-sm" />
      </div>

      {/* Content */}
      <div className="flex flex-col pt-[42px] px-5">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-[359px]">
            {/* Main Content */}
            <div className="flex flex-col gap-8">
              {/* Title */}
              <h2 
                className="text-[#0A0A0A]"
                style={{ 
                  fontFamily: 'SF Pro', 
                  fontSize: '24px', 
                  fontWeight: 590, 
                  lineHeight: '24px',
                  letterSpacing: '-0.150391px'
                }}
              >
                Set your real situation AI will play your manager, client, or partner to help you practice before the real talk
              </h2>

              {/* Option Buttons */}
              <div className="flex gap-4">
                {/* Work Button */}
                <button
                  onClick={() => setSelectedOption('work')}
                  className="flex flex-col items-start p-5 pt-10 gap-1 w-[167px] h-[128px] rounded-2xl border transition-all"
                  style={{
                    borderColor: selectedOption === 'work' ? '#3E5FFF' : '#E9EBF3',
                    backgroundColor: '#FFFFFF'
                  }}
                >
                  <div 
                    className="text-[#0A0A0A]"
                    style={{ 
                      fontFamily: 'SF Pro', 
                      fontSize: '24px', 
                      fontWeight: 500, 
                      lineHeight: '24px',
                      letterSpacing: '0.0703125px'
                    }}
                  >
                    💼
                  </div>
                  <div 
                    className="text-[#0A0A0A]"
                    style={{ 
                      fontFamily: 'SF Pro', 
                      fontSize: '16px', 
                      fontWeight: 500, 
                      lineHeight: '20px',
                      letterSpacing: '-0.3125px'
                    }}
                  >
                    Work
                  </div>
                </button>

                {/* Life Button */}
                <button
                  onClick={() => setSelectedOption('life')}
                  className="flex flex-col items-start p-5 pt-10 gap-1 w-[167px] h-[128px] rounded-2xl border transition-all"
                  style={{
                    borderColor: selectedOption === 'life' ? '#3E5FFF' : '#E9EBF3',
                    backgroundColor: '#FFFFFF'
                  }}
                >
                  <div 
                    className="text-[#0A0A0A]"
                    style={{ 
                      fontFamily: 'SF Pro', 
                      fontSize: '24px', 
                      fontWeight: 500, 
                      lineHeight: '24px',
                      letterSpacing: '0.0703125px'
                    }}
                  >
                    🏠
                  </div>
                  <div 
                    className="text-[#0A0A0A]"
                    style={{ 
                      fontFamily: 'SF Pro', 
                      fontSize: '16px', 
                      fontWeight: 500, 
                      lineHeight: '20px',
                      letterSpacing: '-0.3125px'
                    }}
                  >
                    Life
                  </div>
                </button>
              </div>
            </div>

            {/* Next Button */}
            <button
              disabled={!selectedOption}
              onClick={onNext}
              className="flex justify-center items-center px-[132px] py-[14px] h-12 rounded-[28px] transition-opacity"
              style={{
                backgroundColor: '#3E5FFF',
                opacity: selectedOption ? 1 : 0.5
              }}
            >
              <span 
                className="text-white text-center"
                style={{ 
                  fontFamily: 'SF Pro', 
                  fontSize: '16px', 
                  fontWeight: 590, 
                  lineHeight: '20px',
                  letterSpacing: '-0.150391px'
                }}
              >
                Next
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Notch - Black container at top */}
      <div className="absolute w-[150px] h-[37px] left-[126px] top-0 bg-black rounded-b-[24px]" />
    </div>
  );
}
