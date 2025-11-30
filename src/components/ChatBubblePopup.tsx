import { motion, AnimatePresence, useAnimation } from 'motion/react';
import { X, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

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
  const [hasAnimated, setHasAnimated] = useState(false);
  const lineControls = useAnimation();

  // Reset animation state when popup closes
  useEffect(() => {
    if (!isOpen) {
      setHasAnimated(false);
      lineControls.set({ height: '0px' });
    }
  }, [isOpen, lineControls]);

  // Initial animation for bubbles when popup opens
  useEffect(() => {
    if (isOpen && !hasAnimated) {
      setHasAnimated(true);
      // Animate line starting with first bubble
      setTimeout(() => {
        lineControls.start({
          height: '283px',
          transition: { duration: 1.2, ease: 'easeOut' }
        });
      }, 200); // Start with first bubble
    }
  }, [isOpen, hasAnimated, lineControls]);

  // Extend line when new messages arrive
  useEffect(() => {
    if (messages.length > 0 && hasAnimated) {
      const newHeight = 283 + (messages.length * 70);
      lineControls.start({
        height: `${newHeight}px`,
        transition: { duration: 0.4, ease: 'easeOut' }
      });
    }
  }, [messages.length, hasAnimated, lineControls]);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollContainerRef.current && messages.length > 0) {
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
          {/* Fixed Header with higher z-index */}
          <div 
            className="flex flex-col items-center"
            style={{
              position: 'sticky',
              width: '390px',
              height: '70px',
              left: '0px',
              top: '0px',
              padding: '0px 0px 10px',
              zIndex: 50,
              background: 'rgb(242, 243, 245)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
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
                  background: 'rgba(247, 247, 247, 0.85)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '0.5px solid rgba(255, 255, 255, 0.8)',
                  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15), inset 0px 1px 0px rgba(255, 255, 255, 0.4)',
                  isolation: 'isolate'
                }}
              >
                <span 
                  className="flex items-center justify-center"
                  style={{ 
                    fontFamily: 'SF Pro', 
                    fontSize: '17px', 
                    fontWeight: 510,
                    lineHeight: '20px',
                    color: '#404040',
                    fontFeatureSettings: "'ss16' on"
                  }}
                >
                  ✕
                </span>
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
                    letterSpacing: "-0.43px",
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
            {/* Static Section Labels */}
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

            {/* Container for line and bubbles */}
            <div className="relative" style={{ marginTop: '12px', marginBottom: '12px' }}>
              {/* Animated Vertical Line - positioned absolutely */}
              <motion.div
                initial={{ height: '0px' }}
                animate={lineControls}
                style={{
                  position: 'absolute',
                  left: '29px',
                  top: '0px',
                  width: '0px',
                  borderLeft: '2px solid rgba(0, 0, 0, 0.1)',
                  pointerEvents: 'none'
                }}
              />

              {/* Static Demo Chat Bubbles Container with iMessage-style animation */}
              <div className="w-full pl-[45px] pr-[20px]">
                {/* Chat Bubble 1 - AI (Left, No Bubble, Icon) */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="flex flex-row items-start gap-3 mb-3"
                  style={{
                    maxWidth: '100%',
                    padding: '0px',
                    background: 'transparent'
                  }}
                >
                  <div className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-white flex items-center justify-center border border-white/50 shadow-sm">
                    <Sparkles size={14} className="text-[#8C00FF]" fill="#8C00FF" />
                  </div>
                  <span
                    style={{
                      fontFamily: 'SF Pro',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '22px',
                      letterSpacing: '-0.150391px',
                      color: '#0A0A0A',
                      textAlign: 'left'
                    }}
                  >
                    Let's start with opening
                  </span>
                </motion.div>

                {/* Chat Bubble 2 - User (Right, Bubble, Left-aligned text) */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className="flex flex-col justify-center items-end mb-3 ml-auto"
                  style={{
                    maxWidth: '285px',
                    padding: '10px 12px',
                    gap: '8px',
                    background: 'rgba(131, 68, 204, 0.1)',
                    borderRadius: '18px 18px 0px 18px',
                    width: 'fit-content'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'SF Pro',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '22px',
                      letterSpacing: '-0.150391px',
                      color: '#0A0A0A',
                      textAlign: 'left'
                    }}
                  >
                    Ok, Let's start
                  </span>
                </motion.div>

                {/* Chat Bubble 3 - AI (Left, No Bubble, Icon) */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                  className="flex flex-row items-start gap-3 mb-3"
                  style={{
                    maxWidth: '100%',
                    padding: '0px',
                    background: 'transparent'
                  }}
                >
                   <div className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-white flex items-center justify-center border border-white/50 shadow-sm">
                    <Sparkles size={14} className="text-[#8C00FF]" fill="#8C00FF" />
                  </div>
                  <span
                    style={{
                      fontFamily: 'SF Pro',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '22px',
                      letterSpacing: '-0.150391px',
                      color: '#0A0A0A',
                      textAlign: 'left'
                    }}
                  >
                    First, you should post your request
                  </span>
                </motion.div>

                {/* Chat Bubble 4 - User (Right, Bubble, Left-aligned text) */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 1.1 }}
                  className="flex flex-col justify-center items-end mb-3 ml-auto"
                  style={{
                    maxWidth: '285px',
                    padding: '10px 12px',
                    gap: '8px',
                    background: 'rgba(131, 68, 204, 0.1)',
                    borderRadius: '18px 18px 0px 18px',
                    width: 'fit-content'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'SF Pro',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '22px',
                      letterSpacing: '-0.150391px',
                      color: '#0A0A0A',
                      textAlign: 'left'
                    }}
                  >
                    I'd like to apply for Promotion from Senior Eng to Staff Eng in Q3.
                  </span>
                </motion.div>

                {/* Dynamic Messages from User Input */}
                {messages.map((message, index) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${message.sender === 'user' ? 'flex-col items-end ml-auto' : 'flex-row items-start gap-3'} mb-3`}
                    style={{
                      maxWidth: message.sender === 'user' ? '285px' : '100%',
                      padding: message.sender === 'user' ? '10px 12px' : '0px',
                      gap: message.sender === 'user' ? '8px' : '12px',
                      background: message.sender === 'user' ? 'rgba(131, 68, 204, 0.1)' : 'transparent',
                      borderRadius: message.sender === 'user' ? '18px 18px 0px 18px' : '0px',
                      width: message.sender === 'user' ? 'fit-content' : '100%'
                    }}
                  >
                    {message.sender === 'ai' && (
                      <div className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-white flex items-center justify-center border border-white/50 shadow-sm">
                        <Sparkles size={14} className="text-[#8C00FF]" fill="#8C00FF" />
                      </div>
                    )}
                    <span
                      style={{
                        fontFamily: 'SF Pro',
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '22px',
                        letterSpacing: '-0.150391px',
                        color: '#0A0A0A',
                        textAlign: 'left'
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
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
