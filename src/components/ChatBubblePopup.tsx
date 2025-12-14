import { motion, AnimatePresence, useAnimation } from 'motion/react';
import { X, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState, useCallback } from 'react';
import { LiquidGlassButton } from './shared/LiquidGlassButton';
import closeIcon from '../assets/close-icon-dark.svg';

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
  isWaitingForAI?: boolean;
  onAIResponseComplete?: () => void;
}

// Typewriter component for AI messages
interface TypewriterTextProps {
  text: string;
  delay: number; // delay before starting (in seconds)
  typingSpeed?: number; // ms per character
  onComplete?: () => void;
  isActive: boolean; // whether this message should start animating
}

function TypewriterText({ text, delay, typingSpeed = 30, onComplete, isActive }: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isThinking, setIsThinking] = useState(true);
  const [shouldStart, setShouldStart] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const thinkingDuration = 800; // ms for thinking animation
  const onCompleteRef = useRef(onComplete);
  
  // Keep the ref updated
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    if (!isActive) {
      setDisplayedText("");
      setIsThinking(true);
      setShouldStart(false);
      setIsComplete(false);
      return;
    }

    // Start after delay
    const startTimer = setTimeout(() => {
      setShouldStart(true);
    }, delay * 1000);

    return () => clearTimeout(startTimer);
  }, [isActive, delay]);

  useEffect(() => {
    if (!shouldStart) return;

    // First show thinking animation
    const thinkingTimer = setTimeout(() => {
      setIsThinking(false);
    }, thinkingDuration);

    return () => clearTimeout(thinkingTimer);
  }, [shouldStart]);

  useEffect(() => {
    if (!shouldStart || isThinking || isComplete) return;

    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(intervalId);
        setIsComplete(true);
        onCompleteRef.current?.();
      }
    }, typingSpeed);

    return () => clearInterval(intervalId);
  }, [shouldStart, isThinking, text, typingSpeed, isComplete]);

  if (!shouldStart) {
    return null;
  }

  if (isThinking) {
    return (
      <div className="flex items-center gap-2">
        <motion.div
          className="flex gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-2 h-2 rounded-full"
              style={{ background: "linear-gradient(135deg, #8C00FF 0%, #B366FF 100%)" }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </div>
    );
  }

  return (
    <span>
      {displayedText}
      {displayedText.length < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          style={{ marginLeft: "1px" }}
        >
          |
        </motion.span>
      )}
    </span>
  );
}

// Typewriter for user bubble (purple) - simpler version without thinking dots
interface UserTypewriterTextProps {
  text: string;
  typingSpeed?: number;
  onComplete?: () => void;
  isActive: boolean;
}

function UserTypewriterText({ text, typingSpeed = 25, onComplete, isActive }: UserTypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const onCompleteRef = useRef(onComplete);
  
  // Keep the ref updated
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    if (!isActive) {
      setDisplayedText("");
      setIsComplete(false);
      return;
    }
    
    // If already complete, don't restart
    if (isComplete) return;

    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(intervalId);
        setIsComplete(true);
        onCompleteRef.current?.();
      }
    }, typingSpeed);

    return () => clearInterval(intervalId);
  }, [isActive, text, typingSpeed, isComplete]);

  if (!isActive) return null;

  // Show full text if complete, otherwise show animated text
  const textToShow = isComplete ? text : displayedText;

  return (
    <span>
      {textToShow}
      {!isComplete && displayedText.length < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          style={{ marginLeft: "1px" }}
        >
          |
        </motion.span>
      )}
    </span>
  );
}

// AI Chat Bubble with typewriter effect
interface AIChatBubbleProps {
  text: string;
  delay: number;
  isActive: boolean;
  onComplete?: () => void;
}

function AIChatBubble({ text, delay, isActive, onComplete }: AIChatBubbleProps) {
  const [showContent, setShowContent] = useState(false);
  const [isIconSpinning, setIsIconSpinning] = useState(true);

  useEffect(() => {
    if (!isActive) {
      setShowContent(false);
      setIsIconSpinning(true);
      return;
    }

    const showTimer = setTimeout(() => {
      setShowContent(true);
    }, delay * 1000);

    // Stop spinning after thinking phase ends
    const stopSpinTimer = setTimeout(() => {
      setIsIconSpinning(false);
    }, delay * 1000 + 800); // delay + thinking duration

    return () => {
      clearTimeout(showTimer);
      clearTimeout(stopSpinTimer);
    };
  }, [isActive, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 10 }}
      transition={{ duration: 0.3 }}
      className="flex flex-row items-start gap-3 self-start mb-3"
      style={{
        maxWidth: "100%",
        padding: "0px",
        background: "transparent",
      }}
    >
      <div className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-white flex items-center justify-center border border-white/50 shadow-sm overflow-hidden">
        {showContent && isIconSpinning ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex items-center justify-center"
          >
            <Sparkles size={14} className="text-[#8C00FF]" fill="#8C00FF" />
          </motion.div>
        ) : (
          <Sparkles size={14} className="text-[#8C00FF]" fill="#8C00FF" />
        )}
      </div>
      <span
        style={{
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "22px",
          letterSpacing: "-0.150391px",
          color: "#0A0A0A",
          minHeight: "22px",
          textAlign: "left",
        }}
      >
        <TypewriterText
          text={text}
          delay={0}
          isActive={showContent}
          onComplete={onComplete}
        />
      </span>
    </motion.div>
  );
}

// User Bubble with typewriter effect
interface UserBubbleProps {
  text: string;
  delay: number;
  isActive: boolean;
  onComplete?: () => void;
}

function UserBubble({ text, delay, isActive, onComplete }: UserBubbleProps) {
  const [showContent, setShowContent] = useState(false);
  const textRef = useRef<HTMLSpanElement>(null);
  const [bubbleWidth, setBubbleWidth] = useState<number | null>(null);

  // Calculate the final width of the text
  useEffect(() => {
    if (showContent && !bubbleWidth) {
      // Create a temporary span to measure the full text width
      const tempSpan = document.createElement('span');
      tempSpan.style.fontFamily = 'inherit';
      tempSpan.style.fontWeight = '400';
      tempSpan.style.fontSize = '16px';
      tempSpan.style.lineHeight = '22px';
      tempSpan.style.letterSpacing = '-0.150391px';
      tempSpan.style.visibility = 'hidden';
      tempSpan.style.position = 'absolute';
      tempSpan.style.whiteSpace = 'pre-wrap';
      tempSpan.style.maxWidth = '261px'; // 285px - 24px padding
      tempSpan.innerText = text;
      document.body.appendChild(tempSpan);
      const width = Math.min(tempSpan.offsetWidth + 24, 285); // Add padding back
      document.body.removeChild(tempSpan);
      setBubbleWidth(width);
    }
  }, [showContent, text, bubbleWidth]);

  useEffect(() => {
    if (!isActive) {
      setShowContent(false);
      setBubbleWidth(null);
      return;
    }

    const showTimer = setTimeout(() => {
      setShowContent(true);
    }, delay * 1000);

    return () => clearTimeout(showTimer);
  }, [isActive, delay]);

  if (!showContent) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col justify-center items-end mb-3 ml-auto"
      style={{
        maxWidth: '285px',
        padding: '10px 12px',
        gap: '8px',
        background: 'rgba(131, 68, 204, 0.1)',
        borderRadius: '18px 18px 0px 18px',
        width: bubbleWidth ? `${bubbleWidth}px` : 'auto',
        minWidth: '60px'
      }}
    >
      <span
        ref={textRef}
        style={{
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '22px',
          letterSpacing: '-0.150391px',
          color: '#0A0A0A',
          textAlign: 'left',
          width: '100%'
        }}
      >
        <UserTypewriterText
          text={text}
          isActive={showContent}
          onComplete={onComplete}
        />
      </span>
    </motion.div>
  );
}

// Dynamic AI Chat Bubble - auto-starts animation when mounted
interface DynamicAIChatBubbleProps {
  text: string;
  onComplete?: () => void;
  delay?: number; // delay in seconds before showing (for replay)
  isReplay?: boolean; // whether this is a replay of existing message
}

function DynamicAIChatBubble({ text, onComplete, delay = 0, isReplay = false }: DynamicAIChatBubbleProps) {
  const [showContent, setShowContent] = useState(delay === 0);
  const [isIconSpinning, setIsIconSpinning] = useState(true);
  const [isThinking, setIsThinking] = useState(true);
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  // Handle delay before showing
  useEffect(() => {
    if (delay > 0) {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [delay]);

  useEffect(() => {
    if (!showContent) return;
    
    // Stop spinning and thinking after 800ms
    const thinkingTimer = setTimeout(() => {
      setIsThinking(false);
      setIsIconSpinning(false);
    }, 800);

    return () => clearTimeout(thinkingTimer);
  }, [showContent]);

  // Reset states when showContent becomes true (for replay)
  useEffect(() => {
    if (showContent && delay > 0) {
      setIsIconSpinning(true);
      setIsThinking(true);
      setDisplayedText("");
      setIsComplete(false);
    }
  }, [showContent, delay]);

  // Typewriter effect
  useEffect(() => {
    if (!showContent || isThinking || isComplete) return;

    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(intervalId);
        setIsComplete(true);
        onCompleteRef.current?.();
      }
    }, 30);

    return () => clearInterval(intervalId);
  }, [showContent, isThinking, text, isComplete]);

  if (!showContent) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-row items-start gap-3 self-start mb-3"
      style={{
        maxWidth: "100%",
        padding: "0px",
        background: "transparent",
      }}
    >
      <div className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-white flex items-center justify-center border border-white/50 shadow-sm overflow-hidden">
        {isIconSpinning ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex items-center justify-center"
          >
            <Sparkles size={14} className="text-[#8C00FF]" fill="#8C00FF" />
          </motion.div>
        ) : (
          <Sparkles size={14} className="text-[#8C00FF]" fill="#8C00FF" />
        )}
      </div>
      <span
        style={{
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "22px",
          letterSpacing: "-0.150391px",
          color: "#0A0A0A",
          minHeight: "22px",
          textAlign: "left",
        }}
      >
        {isThinking ? (
          <div className="flex items-center gap-2">
            <motion.div
              className="flex gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-2 h-2 rounded-full"
                  style={{ background: "linear-gradient(135deg, #8C00FF 0%, #B366FF 100%)" }}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </div>
        ) : (
          <>
            {displayedText}
            {!isComplete && displayedText.length < text.length && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                style={{ marginLeft: "1px" }}
              >
                |
              </motion.span>
            )}
          </>
        )}
      </span>
    </motion.div>
  );
}

// Dynamic User Bubble - for user input messages with fixed width
interface DynamicUserBubbleProps {
  text: string;
  delay?: number; // delay in seconds before showing (for replay)
}

function DynamicUserBubble({ text, delay = 0 }: DynamicUserBubbleProps) {
  const [showContent, setShowContent] = useState(delay === 0);

  // Handle delay before showing
  useEffect(() => {
    if (delay > 0) {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [delay]);

  if (!showContent) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
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
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '22px',
          letterSpacing: '-0.150391px',
          color: '#0A0A0A',
          textAlign: 'left'
        }}
      >
        {text}
      </span>
    </motion.div>
  );
}

export function ChatBubblePopup({ isOpen, onClose, messages, isWaitingForAI = false, onAIResponseComplete }: ChatBubblePopupProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [preloadedComplete, setPreloadedComplete] = useState(false);
  const [aiTypingComplete, setAiTypingComplete] = useState(true); // Track if AI finished typing
  const [sessionId, setSessionId] = useState(0); // Increment each time popup opens to reset dynamic messages
  const [initialMessageCount, setInitialMessageCount] = useState(0); // Messages that existed when popup opened
  const lineControls = useAnimation();

  // Reset animation state when popup closes
  useEffect(() => {
    if (!isOpen) {
      setHasAnimated(false);
      setPreloadedComplete(false);
      setAiTypingComplete(true);
      setInitialMessageCount(0);
      lineControls.set({ height: '0px' });
    } else {
      // Increment sessionId when popup opens to force remount of dynamic messages
      setSessionId(prev => prev + 1);
      // Capture how many messages exist at open time - these need replay delay
      setInitialMessageCount(messages.length);
    }
  }, [isOpen, lineControls]); // Intentionally not including messages in deps

  // When new AI message arrives, set typing as not complete
  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1]?.sender === 'ai') {
      setAiTypingComplete(false);
    }
  }, [messages]);

  // Handle AI typing completion
  const handleAITypingComplete = useCallback(() => {
    setAiTypingComplete(true);
    onAIResponseComplete?.();
  }, [onAIResponseComplete]);

  // Track when preloaded conversation completes
  // Last user message starts at 4.5s, text is ~67 chars at 25ms/char = ~1.7s
  // So preloaded completes around 6.2s after animation starts
  useEffect(() => {
    if (hasAnimated && !preloadedComplete) {
      const timer = setTimeout(() => {
        setPreloadedComplete(true);
      }, 6500); // 4.5s delay + ~2s for typing
      return () => clearTimeout(timer);
    }
  }, [hasAnimated, preloadedComplete]);

  // Initial animation for bubbles when popup opens
  useEffect(() => {
    if (isOpen && !hasAnimated) {
      setHasAnimated(true);
      // Animate line starting with first bubble - slower to match typewriter
      setTimeout(() => {
        lineControls.start({
          height: '283px',
          transition: { duration: 5.5, ease: 'easeOut' }
        });
      }, 200); // Start with first bubble
    }
  }, [isOpen, hasAnimated, lineControls]);

  // Extend line when new messages arrive (only for new messages, not replay)
  const prevLineMessageCountRef = useRef(0);
  useEffect(() => {
    if (isOpen) {
      prevLineMessageCountRef.current = messages.length;
    }
  }, [isOpen]); // eslint-disable-line react-hooks/exhaustive-deps
  
  useEffect(() => {
    // Only extend line for messages added AFTER popup opened
    const newMessagesCount = Math.max(0, messages.length - initialMessageCount);
    if (newMessagesCount > 0 && hasAnimated && messages.length > prevLineMessageCountRef.current) {
      const newHeight = 283 + (newMessagesCount * 70);
      lineControls.start({
        height: `${newHeight}px`,
        transition: { duration: 0.4, ease: 'easeOut' }
      });
    }
    prevLineMessageCountRef.current = messages.length;
  }, [messages.length, hasAnimated, lineControls, initialMessageCount]);

  // Scroll to bottom only for NEW messages (not during replay)
  // Track previous message count to detect new messages
  const prevMessageCountRef = useRef(messages.length);
  
  // Reset prev count when popup opens
  useEffect(() => {
    if (isOpen) {
      prevMessageCountRef.current = messages.length;
    }
  }, [isOpen]); // eslint-disable-line react-hooks/exhaustive-deps
  
  useEffect(() => {
    // Only scroll if this is a NEW message added while popup is open (not replay)
    // Check that we have more messages than before AND more than initial count
    if (scrollContainerRef.current && 
        messages.length > prevMessageCountRef.current && 
        prevMessageCountRef.current >= initialMessageCount) {
      setTimeout(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollTo({
            top: scrollContainerRef.current.scrollHeight,
            behavior: 'smooth'
          });
        }
      }, 150);
    }
    prevMessageCountRef.current = messages.length;
  }, [messages.length, initialMessageCount]);

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
              <LiquidGlassButton
                onClick={() => onClose()}
                size={44}
                className="flex-shrink-0"
              >
                <img src={closeIcon} alt="Close" className="w-[36px] h-[36px]" />
              </LiquidGlassButton>

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
                {/* Chat Bubble 1 - AI (Left, No Bubble, Icon) with typewriter */}
                <AIChatBubble
                  text="Let's start with opening"
                  delay={0.2}
                  isActive={hasAnimated}
                />

                {/* Chat Bubble 2 - User (Right, Bubble) with typewriter */}
                <UserBubble
                  text="Ok, Let's start"
                  delay={1.5}
                  isActive={hasAnimated}
                />

                {/* Chat Bubble 3 - AI (Left, No Bubble, Icon) with typewriter */}
                <AIChatBubble
                  text="First, you should post your request"
                  delay={2.8}
                  isActive={hasAnimated}
                />

                {/* Chat Bubble 4 - User (Right, Bubble) with typewriter */}
                <UserBubble
                  text="I'd like to apply for Promotion from Senior Eng to Staff Eng in Q3."
                  delay={4.5}
                  isActive={hasAnimated}
                />

                {/* Dynamic Messages from User Input - appear after preloaded messages */}
                {messages.map((message, index) => {
                  // Messages that existed when popup opened need staggered delays
                  // New messages added while popup is open show immediately
                  const isInitialMessage = index < initialMessageCount;
                  
                  if (isInitialMessage) {
                    // Calculate delay: preloaded ends at ~6.5s, then stagger each message
                    const baseDelay = 6.5; // When preloaded finishes
                    const messageDelay = baseDelay + (index * 1.5); // Stagger by 1.5s per message
                    
                    return message.sender === 'ai' ? (
                      <DynamicAIChatBubble 
                        key={`${sessionId}-${message.id}`}
                        text={message.text}
                        delay={messageDelay}
                        isReplay={true}
                        onComplete={index === messages.length - 1 ? handleAITypingComplete : undefined}
                      />
                    ) : (
                      <DynamicUserBubble 
                        key={`${sessionId}-${message.id}`}
                        text={message.text}
                        delay={messageDelay}
                      />
                    );
                  }
                  
                  // New message added while popup is open - show immediately with animation
                  return message.sender === 'ai' ? (
                    <DynamicAIChatBubble 
                      key={`${sessionId}-${message.id}`}
                      text={message.text}
                      delay={0}
                      isReplay={false}
                      onComplete={index === messages.length - 1 ? handleAITypingComplete : undefined}
                    />
                  ) : (
                    <DynamicUserBubble 
                      key={`${sessionId}-${message.id}`}
                      text={message.text}
                      delay={0}
                    />
                  );
                })}

                {/* Breathing Star - shows when waiting for user input */}
                {/* Shows after preloaded conversation completes OR after dynamic AI finishes typing */}
                <AnimatePresence>
                  {(preloadedComplete && !isWaitingForAI && (
                    // Case 1: No dynamic messages yet, preloaded just finished
                    (messages.length === 0) ||
                    // Case 2: Has messages and AI just finished typing
                    (messages.length > 0 && aiTypingComplete && messages[messages.length - 1]?.sender === 'ai')
                  )) && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                      className="flex justify-start mb-3"
                    >
                      <motion.div
                        animate={{ 
                          scale: [1, 1.15, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="w-6 h-6 rounded-full bg-white flex items-center justify-center border border-white/50 shadow-sm"
                      >
                        <Sparkles size={14} className="text-[#8C00FF]" fill="#8C00FF" />
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Waiting for AI response indicator */}
                <AnimatePresence>
                  {isWaitingForAI && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                      className="flex justify-start mb-3"
                    >
                      <motion.div
                        animate={{ 
                          scale: [1, 1.15, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="w-6 h-6 rounded-full bg-white flex items-center justify-center border border-white/50 shadow-sm"
                      >
                        <Sparkles size={14} className="text-[#8C00FF]" fill="#8C00FF" />
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
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
