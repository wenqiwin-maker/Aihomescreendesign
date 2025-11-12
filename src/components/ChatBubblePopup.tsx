import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

interface ChatBubblePopupProps {
  isOpen: boolean;
  onClose: () => void;
  messages: Message[];
}

export function ChatBubblePopup({ isOpen, onClose, messages }: ChatBubblePopupProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollContainerRef.current && messages.length > 0) {
      // Small delay to ensure DOM is updated and animation completes
      setTimeout(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollTo({
            top: scrollContainerRef.current.scrollHeight,
            behavior: 'smooth'
          });
        }
      }, 150);
    }
  }, [messages]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={scrollContainerRef}
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'tween', duration: 0.3 }}
          className="absolute left-0 w-[390px] h-[790px] z-40 overflow-y-auto"
          style={{
            top: '53px',
            background: 'linear-gradient(180deg, #F3F4F6 0.59%, #ECEEF1 100%)',
            borderRadius: '24px 24px 0px 0px'
          }}
        >
          {/* Toolbar */}
          <div 
            className="flex flex-col items-center"
            style={{
              position: 'sticky',
              width: '390px',
              height: '70px',
              left: '0px',
              top: '0px',
              padding: '0px 0px 10px',
              zIndex: 10,
              background: 'linear-gradient(180deg, #F3F4F6 0.59%, #ECEEF1 100%)'
            }}
          >
            {/* Grabber */}
            <div 
              className="flex flex-col items-start"
              style={{
                padding: '5px 0px 0px',
                width: '36px',
                height: '16px'
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '5px',
                  background: '#CCCCCC',
                  mixBlendMode: 'plus-darker',
                  borderRadius: '100px'
                }}
              />
            </div>

            {/* Title and Controls */}
            <div 
              className="flex flex-row justify-between items-center"
              style={{
                padding: '0px 16px',
                gap: '66px',
                isolation: 'isolate',
                width: '390px',
                height: '44px'
              }}
            >
              {/* Leading Button (Close) */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                className="flex flex-row justify-center items-center relative flex-shrink-0"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '296px',
                  isolation: 'isolate'
                }}
              >
                {/* BG */}
                <div
                  style={{
                    position: 'absolute',
                    width: '44px',
                    height: '44px',
                    left: 'calc(50% - 44px/2)',
                    top: 'calc(50% - 44px/2)',
                    background: 'linear-gradient(0deg, #F7F7F7, #F7F7F7), linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), #333333',
                    borderRadius: '50%'
                  }}
                />
                {/* X Icon */}
                <X 
                  className="relative z-10"
                  style={{
                    width: '20px',
                    height: '20px',
                    color: '#404040',
                    mixBlendMode: 'plus-darker'
                  }}
                  strokeWidth={2}
                />
              </button>

              {/* Spacer */}
              <div style={{ margin: '0 auto', width: '8px', height: '44px' }} />

              {/* Title */}
              <div
                style={{
                  position: 'absolute',
                  left: 'calc(50% - 18px)',
                  top: '13px',
                  height: '22px'
                }}
              >
                <span
                  style={{
                    fontFamily: 'SF Pro',
                    fontWeight: 590,
                    fontSize: '17px',
                    lineHeight: '22px',
                    textAlign: 'center',
                    letterSpacing: '-0.43px',
                    color: '#333333',
                    mixBlendMode: 'plus-darker',
                    whiteSpace: 'nowrap'
                  }}
                >
                  Script
                </span>
              </div>
            </div>
          </div>

          {/* Content - adjusted for 70px header */}
          <div 
            ref={contentRef}
            className="relative"
            onClick={(e) => e.stopPropagation()}
            style={{ paddingBottom: '420px' }}
          >
            {/* Static Section Labels (for reference) */}
            <div className="flex flex-row items-center gap-3 px-[27px] pt-[13px]">
              <div className="w-1.5 h-1.5 bg-black rounded-full" />
              <span
                style={{
                  fontFamily: 'SF Pro',
                  fontWeight: 510,
                  fontSize: '16px',
                  lineHeight: '20px',
                  letterSpacing: '-0.150391px',
                  color: '#0A0A0A'
                }}
              >
                Opening-Ask
              </span>
            </div>

            {/* Horizontal Line 1 */}
            <div
              className="relative left-[29px] my-3"
              style={{
                width: '283px',
                height: '0px',
                border: '2px solid rgba(0, 0, 0, 0.1)',
                transform: 'rotate(90deg)',
                transformOrigin: 'top left'
              }}
            />

            {/* Static Demo Chat Bubbles Container */}
            <div className="w-[325px] mx-auto px-[20px]">
              {/* Chat Bubble 1 - User */}
              <div
                className="flex flex-col justify-center items-start mb-3"
                style={{
                  width: '176px',
                  padding: '8px 12px',
                  gap: '8px',
                  background: '#FFFFFF',
                  borderRadius: '0px 18px 18px 18px'
                }}
              >
                <span
                  style={{
                    fontFamily: 'SF Pro',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '20px',
                    letterSpacing: '-0.150391px',
                    color: '#0A0A0A',
                    textAlign: 'left'
                  }}
                >
                  Let's start with opening
                </span>
              </div>

              {/* Chat Bubble 2 - AI */}
              <div
                className="flex flex-col justify-center items-end ml-auto mb-3"
                style={{
                  width: '115px',
                  padding: '8px 12px',
                  gap: '8px',
                  background: 'rgba(62, 95, 255, 0.1)',
                  borderRadius: '18px 18px 0px 18px'
                }}
              >
                <span
                  style={{
                    fontFamily: 'SF Pro',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '20px',
                    letterSpacing: '-0.150391px',
                    color: '#0A0A0A',
                    textAlign: 'right'
                  }}
                >
                  Ok, Let's start
                </span>
              </div>

              {/* Chat Bubble 3 - User */}
              <div
                className="flex flex-col justify-center items-start mb-3"
                style={{
                  width: '249px',
                  padding: '8px 12px',
                  gap: '8px',
                  background: '#FFFFFF',
                  borderRadius: '0px 18px 18px 18px'
                }}
              >
                <span
                  style={{
                    fontFamily: 'SF Pro',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '20px',
                    letterSpacing: '-0.150391px',
                    color: '#0A0A0A',
                    textAlign: 'left'
                  }}
                >
                  First, you should post your request
                </span>
              </div>

              {/* Chat Bubble 4 - AI */}
              <div
                className="flex flex-col justify-center items-end ml-auto mb-3"
                style={{
                  width: '302px',
                  padding: '8px 12px',
                  gap: '8px',
                  background: 'rgba(62, 95, 255, 0.1)',
                  borderRadius: '18px 18px 0px 18px'
                }}
              >
                <span
                  style={{
                    fontFamily: 'SF Pro',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '20px',
                    letterSpacing: '-0.150391px',
                    color: '#0A0A0A',
                    textAlign: 'right'
                  }}
                >
                  I'd like to apply for Promotion from Senior Eng to Staff Eng in Q3.
                </span>
              </div>

              {/* Dynamic Messages from User Input */}
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex flex-col justify-center mb-3 ${message.sender === 'user' ? 'items-end ml-auto' : 'items-start'}`}
                  style={{
                    maxWidth: '302px',
                    padding: '8px 12px',
                    gap: '8px',
                    background: message.sender === 'user' ? 'rgba(62, 95, 255, 0.1)' : '#FFFFFF',
                    borderRadius: message.sender === 'user' ? '18px 18px 0px 18px' : '0px 18px 18px 18px'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'SF Pro',
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '20px',
                      letterSpacing: '-0.150391px',
                      color: '#0A0A0A',
                      textAlign: message.sender === 'user' ? 'right' : 'left'
                    }}
                  >
                    {message.text}
                  </span>
                </motion.div>
              ))}
              
              {/* Invisible anchor for auto-scrolling */}
              <div ref={messagesEndRef} style={{ height: '1px' }} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}