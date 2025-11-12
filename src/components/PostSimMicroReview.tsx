import { X, ChevronDown, ChevronUp, Play } from 'lucide-react';
import { StatusBar } from './StatusBar';
import { useState } from 'react';

interface PostSimMicroReviewProps {
  onClose: () => void;
  onStartPractice: () => void;
}

export function PostSimMicroReview({ onClose, onStartPractice }: PostSimMicroReviewProps) {
  const [expandedStructure, setExpandedStructure] = useState<string | null>('bluf');

  const structures = [
    {
      id: 'bluf',
      emoji: '🎯',
      title: 'BLUF + CTA',
      subtitle: 'Bottom Line Up Front + Call to Action',
      bgColor: 'rgba(59, 130, 246, 0.082)',
      selected: true,
      content: [
        { label: 'Ask', text: "I'd like to apply for SWE III in Q3." },
        { label: 'Why', text: 'In the last two quarters, I led {Project X}, deliv' },
        { label: 'Next steps', text: 'Please confirm the review window by this Friday an' }
      ]
    },
    {
      id: 'star',
      emoji: '⭐',
      title: 'STAR Method',
      subtitle: 'Situation, Task, Action, Result',
      bgColor: '#F2EEFC',
      selected: false,
      content: []
    },
    {
      id: 'problem',
      emoji: '💡',
      title: 'Problem-Solution',
      subtitle: 'Clear problem framing with actionable solution',
      bgColor: '#E8F6F3',
      selected: false,
      content: []
    }
  ];

  return (
    <div className="relative w-full min-h-screen bg-[#F5F6FA] overflow-y-auto">
      {/* Top Card - Fixed */}
      <div 
        className="sticky top-0 z-50 bg-white"
        style={{
          boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.05), 0px 6px 15px rgba(0, 0, 0, 0.06)',
          borderRadius: '0px 0px 20px 20px'
        }}
      >
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
        <div className="flex justify-between items-start px-4 pb-[10px] h-[54px]">
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
              Setup
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

        {/* Progress */}
        <div className="flex items-start px-5 gap-1 h-[3px] bg-white">
          <div className="w-[114px] h-[3px] bg-[#3E5FFF] rounded-sm" />
          <div className="w-[114px] h-[3px] bg-[#3E5FFF] rounded-sm" />
          <div className="w-[114px] h-[3px] bg-[#3E5FFF] rounded-sm" />
        </div>

        {/* Instant Recap */}
        <div className="flex flex-col items-start px-5 pt-4 pb-5 gap-3 bg-white">
          <div className="flex justify-between items-start w-full">
            <span
              style={{ 
                fontFamily: 'SF Pro', 
                fontSize: '14px', 
                fontWeight: 510, 
                lineHeight: '20px',
                letterSpacing: '-0.3125px',
                color: 'rgba(0, 0, 0, 0.9)'
              }}
            >
              Review Your Practice Setup
            </span>
          </div>

          {/* Summary Pills */}
          <div className="flex items-start gap-2 flex-wrap">
            <div 
              className="flex items-center px-4 gap-2 h-9 bg-[#F5F6FA] rounded-full"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6" stroke="rgba(0, 0, 0, 0.6)" strokeWidth="1.17"/>
                <circle cx="7" cy="7" r="3.5" stroke="rgba(0, 0, 0, 0.6)" strokeWidth="1.17"/>
                <circle cx="7" cy="7" r="1" stroke="rgba(0, 0, 0, 0.6)" strokeWidth="1.17"/>
              </svg>
              <span
                style={{ 
                  fontFamily: 'SF Pro', 
                  fontSize: '14px', 
                  fontWeight: 510, 
                  lineHeight: '18px',
                  letterSpacing: '-0.150391px',
                  color: 'rgba(0, 0, 0, 0.9)'
                }}
              >
                Goal Type
              </span>
            </div>

            <div 
              className="flex items-center px-4 gap-2 h-9 bg-[#F5F6FA] rounded-full"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1.17 8.75L4.67 1.75L7 8.17L9.92 1.82L11.67 5.83" stroke="rgba(0, 0, 0, 0.6)" strokeWidth="1.17"/>
              </svg>
              <span
                style={{ 
                  fontFamily: 'SF Pro', 
                  fontSize: '14px', 
                  fontWeight: 510, 
                  lineHeight: '18px',
                  letterSpacing: '-0.150391px',
                  color: 'rgba(0, 0, 0, 0.9)'
                }}
              >
                Manager
              </span>
            </div>

            <div 
              className="flex items-center px-4 h-9 bg-[#F5F6FA] rounded-full"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M4.67 1.17V11.67" stroke="rgba(0, 0, 0, 0.6)" strokeWidth="1.17"/>
                <path d="M1.17 3.5H11.67V11.67" stroke="rgba(0, 0, 0, 0.6)" strokeWidth="1.17"/>
              </svg>
              <span
                style={{ 
                  fontFamily: 'SF Pro', 
                  fontSize: '14px', 
                  fontWeight: 510, 
                  lineHeight: '18px',
                  letterSpacing: '-0.150391px',
                  textTransform: 'capitalize',
                  color: 'rgba(0, 0, 0, 0.9)'
                }}
              >
                Work
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="px-5 pt-6 pb-[100px] flex flex-col gap-5">
        {/* Communication Structure */}
        <div className="flex flex-col gap-3">
          <h2
            style={{ 
              fontFamily: 'SF Pro', 
              fontSize: '14px', 
              fontWeight: 590, 
              lineHeight: '20px',
              letterSpacing: '-0.3125px',
              color: 'rgba(0, 0, 0, 0.9)'
            }}
          >
            Communication Structure AI-selected structure for you
          </h2>

          <div className="flex flex-col gap-3">
            {structures.map((structure) => (
              <div
                key={structure.id}
                className="bg-white rounded-2xl"
                style={{
                  boxShadow: '0px 2px 4px -4px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div className="p-4 flex flex-col gap-4">
                  {/* Header */}
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ background: structure.bgColor }}
                      >
                        <span style={{ fontSize: '20px', lineHeight: '28px' }}>
                          {structure.emoji}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span
                          style={{ 
                            fontFamily: 'SF Pro', 
                            fontSize: '16px', 
                            fontWeight: 510, 
                            lineHeight: '24px',
                            letterSpacing: '-0.3125px',
                            color: '#101828'
                          }}
                        >
                          {structure.title}
                        </span>
                        <span
                          style={{ 
                            fontFamily: 'SF Pro', 
                            fontSize: '12px', 
                            fontWeight: 274, 
                            lineHeight: '16px',
                            color: 'rgba(0, 0, 0, 0.6)'
                          }}
                        >
                          {structure.subtitle}
                        </span>
                      </div>
                    </div>

                    {structure.selected ? (
                      <div className="w-5 h-5 rounded-full bg-[#3E5FFF] flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="1.17"/>
                        </svg>
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full border border-[#3E5FFF]" />
                    )}
                  </div>

                  {/* Content - Only show for BLUF */}
                  {structure.id === 'bluf' && expandedStructure === 'bluf' && (
                    <div 
                      className="flex flex-col gap-3 pt-4"
                      style={{
                        borderTop: '0.75px solid #F3F4F6'
                      }}
                    >
                      {structure.content.map((item, idx) => (
                        <div key={idx} className="flex gap-4">
                          <div className="w-6 h-6 rounded-full bg-[#F5F6FA] flex items-center justify-center flex-shrink-0">
                            <div className="w-1.5 h-1.5 rounded-full bg-black/60" />
                          </div>
                          <div className="flex flex-col gap-1 flex-1">
                            <span
                              style={{ 
                                fontFamily: 'SF Pro', 
                                fontSize: '14px', 
                                fontWeight: 590, 
                                lineHeight: '20px',
                                letterSpacing: '-0.150391px',
                                color: 'rgba(0, 0, 0, 0.9)'
                              }}
                            >
                              {item.label}
                            </span>
                            <span
                              style={{ 
                                fontFamily: 'SF Pro', 
                                fontSize: '14px', 
                                fontWeight: 400, 
                                lineHeight: '20px',
                                letterSpacing: '-0.150391px',
                                color: 'rgba(0, 0, 0, 0.9)'
                              }}
                            >
                              {item.text}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Toggle Button */}
                  <button
                    onClick={() => setExpandedStructure(expandedStructure === structure.id ? null : structure.id)}
                    className="flex justify-center items-center py-2 gap-2"
                    style={{
                      borderTop: '0.75px solid #F3F4F6'
                    }}
                  >
                    {expandedStructure === structure.id ? (
                      <ChevronUp className="w-3 h-3 text-black/60" />
                    ) : (
                      <ChevronDown className="w-3 h-3 text-black/60" />
                    )}
                    <span
                      style={{ 
                        fontFamily: 'SF Pro', 
                        fontSize: '12px', 
                        fontWeight: 400, 
                        lineHeight: '20px',
                        letterSpacing: '-0.150391px',
                        color: 'rgba(0, 0, 0, 0.6)'
                      }}
                    >
                      {expandedStructure === structure.id ? 'Hide' : 'See More'}
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-black/[0.078]" />

        {/* Moments to Watch */}
        <div className="flex flex-col gap-3">
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

          <div 
            className="bg-white rounded-[14px] overflow-hidden"
            style={{
              boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)'
            }}
          >
            {/* Video Thumbnail */}
            <div 
              className="relative w-full h-[150px]"
              style={{
                background: 'linear-gradient(135deg, #583EFF 0%, #3E5FFF 100%)'
              }}
            >
              {/* Play Button */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div 
                  className="w-16 h-16 rounded-full bg-white flex items-center justify-center"
                  style={{
                    boxShadow: '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 8px 10px -6px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <Play className="w-6 h-6 text-[#155DFC] fill-[#155DFC] ml-1" />
                </div>
              </div>

              {/* AI Demo Badge */}
              <div 
                className="absolute left-3 top-[14px] flex items-center px-3 h-5 rounded-lg"
                style={{
                  background: 'rgba(255, 255, 255, 0.2)'
                }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="mr-2">
                  <circle cx="6" cy="6" r="5" stroke="white" strokeWidth="1"/>
                  <path d="M4.5 6L5.5 7L7.5 5" stroke="white" strokeWidth="1"/>
                </svg>
                <span
                  style={{ 
                    fontFamily: 'SF Pro', 
                    fontSize: '12px', 
                    fontWeight: 500, 
                    lineHeight: '16px',
                    color: '#FFFFFF'
                  }}
                >
                  AI Demo
                </span>
              </div>

              {/* Duration Badge */}
              <div 
                className="absolute right-[15px] top-3 flex items-center px-3 h-7 rounded-full"
                style={{
                  background: 'rgba(0, 0, 0, 0.4)'
                }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="mr-1.5">
                  <circle cx="6" cy="6" r="5" stroke="white" strokeWidth="1"/>
                  <path d="M6 3V6L8 8" stroke="white" strokeWidth="1"/>
                </svg>
                <span
                  style={{ 
                    fontFamily: 'SF Pro', 
                    fontSize: '12px', 
                    fontWeight: 400, 
                    lineHeight: '16px',
                    color: '#FFFFFF'
                  }}
                >
                  1:00
                </span>
              </div>
            </div>

            {/* Video Info */}
            <div className="p-4 flex flex-col gap-3">
              <div className="flex flex-col">
                <span
                  style={{ 
                    fontFamily: 'SF Pro', 
                    fontSize: '16px', 
                    fontWeight: 510, 
                    lineHeight: '24px',
                    letterSpacing: '-0.3125px',
                    color: '#101828'
                  }}
                >
                  Watch AI Demonstration
                </span>
                <span
                  style={{ 
                    fontFamily: 'SF Pro', 
                    fontSize: '14px', 
                    fontWeight: 400, 
                    lineHeight: '20px',
                    letterSpacing: '-0.150391px',
                    color: '#6A7282'
                  }}
                >
                  See how to approach your manager
                </span>
              </div>

              <button
                className="flex items-center justify-center py-2.5 h-[42px] border rounded-[21px]"
                style={{
                  borderColor: '#F3F4F6',
                  borderWidth: '1.49px'
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mr-2">
                  <circle cx="7" cy="7" r="6" stroke="#101828" strokeWidth="1.33"/>
                  <path d="M5.5 5L9 7L5.5 9V5Z" stroke="#101828" strokeWidth="1.33"/>
                </svg>
                <span
                  style={{ 
                    fontFamily: 'SF Pro', 
                    fontSize: '14px', 
                    fontWeight: 510, 
                    lineHeight: '20px',
                    letterSpacing: '-0.150391px',
                    color: '#101828'
                  }}
                >
                  Watch Video
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 w-full bg-white px-5 py-5">
        <button
          onClick={onStartPractice}
          className="w-full h-12 rounded-[28px] flex items-center justify-center"
          style={{
            backgroundColor: '#3E5FFF'
          }}
        >
          <span
            style={{ 
              fontFamily: 'SF Pro', 
              fontSize: '16px', 
              fontWeight: 590, 
              lineHeight: '20px',
              letterSpacing: '-0.150391px',
              color: '#FFFFFF'
            }}
          >
            Start Practice
          </span>
        </button>
      </div>

      {/* Notch */}
      <div className="fixed w-[150px] h-[37px] left-1/2 -translate-x-1/2 top-0 bg-black rounded-b-[24px] z-50" />
    </div>
  );
}
