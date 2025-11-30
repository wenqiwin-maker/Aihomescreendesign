import { motion, AnimatePresence } from "motion/react";
import { X, Sparkles } from "lucide-react";
import { useState, useEffect, useRef } from "react";

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
  const thinkingDuration = 800; // ms for thinking animation

  useEffect(() => {
    if (!isActive) {
      setDisplayedText("");
      setIsThinking(true);
      setShouldStart(false);
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
    if (!shouldStart || isThinking) return;

    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(intervalId);
        onComplete?.();
      }
    }, typingSpeed);

    return () => clearInterval(intervalId);
  }, [shouldStart, isThinking, text, typingSpeed, onComplete]);

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
      className="flex flex-row items-start gap-3 self-start"
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
          fontFamily: "SF Pro",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "22px",
          letterSpacing: "-0.150391px",
          color: "#0A0A0A",
          minHeight: "22px",
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

interface CaptionPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CaptionPopup({
  isOpen,
  onClose,
}: CaptionPopupProps) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Small delay to ensure smooth animation
      const timer = setTimeout(() => {
        setIsReady(true);
      }, 100);
      
      return () => {
        clearTimeout(timer);
        setIsReady(false);
      };
    } else {
      setIsReady(false);
    }
  }, [isOpen]);

  // Base delay for all animations after loading completes
  const baseDelay = 2.5;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "tween", duration: 0.3 }}
          className="absolute left-0 w-[390px] h-[505px] z-40 overflow-hidden"
          style={{
            top: "339px",
            background:
              "linear-gradient(180deg, #F3F4F6 51.44%, #ECEEF1 100%)",
            borderRadius: "24px 24px 0px 0px",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Toolbar - Fixed Header */}
          <div
            className="flex flex-col items-center"
            style={{
              position: "sticky",
              top: 0,
              width: "390px",
              height: "70px",
              left: "0px",
              padding: "0px 0px 10px",
              zIndex: 10,
              borderRadius: "24ps 24ps 0ps 0ps",
            }}
          >
            {/* Grabber */}
            <div
              className="flex flex-col items-start"
              style={{
                padding: "5px 0px 0px",
                width: "36px",
                height: "16px",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "5px",
                  background: "#CCCCCC",
                  mixBlendMode: "plus-darker",
                  borderRadius: "100px",
                }}
              />
            </div>

            {/* Title and Controls */}
            <div
              className="flex flex-row justify-between items-center"
              style={{
                padding: "0px 16px",
                gap: "66px",
                isolation: "isolate",
                width: "390px",
                height: "44px",
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
                  width: "44px",
                  height: "44px",
                  borderRadius: "296px",
                  background: "rgba(247, 247, 247, 0.85)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border:
                    "0.5px solid rgba(255, 255, 255, 0.8)",
                  boxShadow:
                    "0px 4px 12px rgba(0, 0, 0, 0.15), inset 0px 1px 0px rgba(255, 255, 255, 0.4)",
                  isolation: "isolate",
                }}
              >
                <span
                  className="flex items-center justify-center"
                  style={{
                    fontFamily: "SF Pro",
                    fontSize: "20px",
                    fontWeight: 400,
                    lineHeight: "20px",
                    color: "#404040",
                  }}
                >
                  􀆄
                </span>
              </button>

              {/* Spacer */}
              <div
                style={{
                  margin: "0 auto",
                  width: "8px",
                  height: "44px",
                }}
              />

              {/* Title */}
              <div
                style={{
                  position: "absolute",
                  left: "calc(50% - 28px)",
                  top: "13px",
                  height: "22px",
                }}
              >
                <span
                  style={{
                    fontFamily: "SF Pro",
                    fontWeight: 590,
                    fontSize: "17px",
                    lineHeight: "22px",
                    textAlign: "center",
                    letterSpacing: "-0.43px",
                    color: "#333333",
                    mixBlendMode: "plus-darker",
                    whiteSpace: "nowrap",
                  }}
                >
                  Caption
                </span>
              </div>
            </div>
          </div>

          {/* Content Container - Scrollable */}
          <div
            className="relative w-full overflow-y-auto"
            style={{
              height: "calc(505px - 70px)",
              paddingTop: "29px",
              paddingLeft: "27px",
              paddingRight: "20px",
              paddingBottom: "50px",
            }}
          >
            {/* Content */}
            {isReady && (
              <>
                {/* Section 1: Opening-Ask */}
                <div className="mb-1 pb-[10px]">
                  {/* Title with dot */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className="flex flex-row items-center gap-3 mb-1"
                  >
                    <div
                      style={{
                        width: "6px",
                        height: "6px",
                        background: "#000000",
                        borderRadius: "50%",
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "SF Pro",
                        fontWeight: 510,
                        fontSize: "16px",
                        lineHeight: "20px",
                        letterSpacing: "-0.150391px",
                        color: "#0A0A0A",
                      }}
                    >
                      Opening-Ask
                    </span>
                  </motion.div>

                  {/* Line and bubbles container */}
                  <div className="flex flex-row gap-0">
                    {/* Vertical line */}
                    <div
                      className="relative"
                      style={{ width: "6px", flexShrink: 0 }}
                    >
                      <motion.div
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{
                          duration: 0.9,
                          delay: 0.5,
                          ease: "linear",
                        }}
                        style={{
                          position: "absolute",
                          left: "2px",
                          top: "0px",
                          width: "2px",
                          bottom: "-10px",
                          background: "rgba(233, 235, 243, 1)",
                          transformOrigin: "top",
                        }}
                      />
                    </div>

                    {/* Bubbles */}
                    <div className="flex-1 flex flex-col gap-3 pt-2 pl-4">
                      {/* chat-bubble-AI 1 */}
                      <AIChatBubble
                        text="I'd like to discuss your promotion timeline. What are you thinking?"
                        delay={0.5}
                        isActive={isReady}
                      />

                      {/* chat-bubble-user 1 */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 3.8 }}
                        className="flex flex-col justify-center items-end self-end"
                        style={{
                          maxWidth: "80%",
                          padding: "10px 12px",
                          background: "rgba(131, 68, 204, 0.1)",
                          borderRadius: "18px 18px 0px 18px",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "SF Pro",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "22px",
                            textAlign: "left",
                            letterSpacing: "-0.150391px",
                            color: "#0A0A0A",
                          }}
                        >
                          I'd like to apply for promotion from
                          Senior Engineer to Staff Engineer in Q3.
                        </span>
                      </motion.div>

                      {/* chat-bubble-AI 2 */}
                      <AIChatBubble
                        text="That sounds like a great goal. Tell me why you think you're ready."
                        delay={4.2}
                        isActive={isReady}
                      />
                    </div>
                  </div>
                </div>

                {/* Section 2: Evidence-Why */}
                <div className="mb-1 pb-[10px]">
                  {/* Title with dot */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 7.0 }}
                    className="flex flex-row items-center gap-3 mb-1"
                  >
                    <div
                      style={{
                        width: "6px",
                        height: "6px",
                        background: "#000000",
                        borderRadius: "50%",
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "SF Pro",
                        fontWeight: 510,
                        fontSize: "16px",
                        lineHeight: "20px",
                        letterSpacing: "-0.150391px",
                        color: "#0A0A0A",
                      }}
                    >
                      Evidence-Why
                    </span>
                  </motion.div>

                  {/* Line and bubbles container */}
                  <div className="flex flex-row gap-0">
                    {/* Vertical line */}
                    <div
                      className="relative"
                      style={{ width: "6px", flexShrink: 0 }}
                    >
                      <motion.div
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{
                          duration: 6.0,
                          delay: 7.2,
                          ease: "linear",
                        }}
                        style={{
                          position: "absolute",
                          left: "2px",
                          top: "0px",
                          width: "2px",
                          bottom: "-10px",
                          background: "rgba(233, 235, 243, 1)",
                          transformOrigin: "top",
                        }}
                      />
                    </div>

                    {/* Bubbles */}
                    <div className="flex-1 flex flex-col gap-3 pt-2 pl-4">
                      {/* chat-bubble-AI 1 */}
                      <AIChatBubble
                        text="Can you walk me through your key projects?"
                        delay={7.2}
                        isActive={isReady}
                      />

                      {/* chat-bubble-user 1 */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 9.5 }}
                        className="flex flex-col justify-center items-end self-end"
                        style={{
                          maxWidth: "80%",
                          padding: "10px 12px",
                          background: "rgba(131, 68, 204, 0.1)",
                          borderRadius: "18px 18px 0px 18px",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "SF Pro",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "22px",
                            textAlign: "left",
                            letterSpacing: "-0.150391px",
                            color: "#0A0A0A",
                          }}
                        >
                          In the last two quarters, I led the
                          payment system redesign project.
                        </span>
                      </motion.div>

                      {/* chat-bubble-AI 2 */}
                      <AIChatBubble
                        text="What were the results?"
                        delay={9.8}
                        isActive={isReady}
                      />

                      {/* chat-bubble-user 2 */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 11.5 }}
                        className="flex flex-col justify-center items-end self-end"
                        style={{
                          maxWidth: "80%",
                          padding: "10px 12px",
                          background: "rgba(131, 68, 204, 0.1)",
                          borderRadius: "18px 18px 0px 18px",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "SF Pro",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "22px",
                            textAlign: "left",
                            letterSpacing: "-0.150391px",
                            color: "#0A0A0A",
                          }}
                        >
                          We reduced transaction failures by 40% and
                          increased throughput by 3x.
                        </span>
                      </motion.div>

                      {/* chat-bubble-AI 3 */}
                      <AIChatBubble
                        text="What about cross-functional impact?"
                        delay={11.8}
                        isActive={isReady}
                      />

                      {/* chat-bubble-user 3 */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 13.8 }}
                        className="flex flex-col justify-center items-end self-end"
                        style={{
                          maxWidth: "80%",
                          padding: "10px 12px",
                          background: "rgba(131, 68, 204, 0.1)",
                          borderRadius: "18px 18px 0px 18px",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "SF Pro",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "22px",
                            textAlign: "left",
                            letterSpacing: "-0.150391px",
                            color: "#0A0A0A",
                          }}
                        >
                          I also mentored three junior engineers and
                          they've all been promoted.
                        </span>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Section 3: Next steps */}
                <div className="mb-1 pb-[10px]">
                  {/* Title with dot */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 14.0 }}
                    className="flex flex-row items-center gap-3 mb-1"
                  >
                    <div
                      style={{
                        width: "6px",
                        height: "6px",
                        background: "#000000",
                        borderRadius: "50%",
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "SF Pro",
                        fontWeight: 510,
                        fontSize: "16px",
                        lineHeight: "20px",
                        letterSpacing: "-0.150391px",
                        color: "#0A0A0A",
                      }}
                    >
                      Next steps
                    </span>
                  </motion.div>

                  {/* Line and bubbles container */}
                  <div className="flex flex-row gap-0">
                    {/* Vertical line */}
                    <div
                      className="relative"
                      style={{ width: "6px", flexShrink: 0 }}
                    >
                      <motion.div
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{
                          duration: 7.0,
                          delay: 14.2,
                          ease: "linear",
                        }}
                        style={{
                          position: "absolute",
                          left: "2px",
                          top: "0px",
                          width: "2px",
                          bottom: "-10px",
                          background: "rgba(233, 235, 243, 1)",
                          transformOrigin: "top",
                        }}
                      />
                    </div>

                    {/* Bubbles */}
                    <div className="flex-1 flex flex-col gap-3 pt-2 pl-4">
                      {/* chat-bubble-AI 1 */}
                      <AIChatBubble
                        text="Let's start with the formal review process. When would you like to submit?"
                        delay={14.2}
                        isActive={isReady}
                      />

                      {/* chat-bubble-user 1 */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 17.3 }}
                        className="flex flex-col justify-center items-end self-end"
                        style={{
                          maxWidth: "80%",
                          padding: "10px 12px",
                          background: "rgba(131, 68, 204, 0.1)",
                          borderRadius: "18px 18px 0px 18px",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "SF Pro",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "22px",
                            textAlign: "left",
                            letterSpacing: "-0.150391px",
                            color: "#0A0A0A",
                          }}
                        >
                          I'd like to submit by end of this month
                          for Q3 review.
                        </span>
                      </motion.div>

                      {/* chat-bubble-AI 2 */}
                      <AIChatBubble
                        text="That works. You'll need to prepare your packet and get peer reviews."
                        delay={17.6}
                        isActive={isReady}
                      />

                      {/* chat-bubble-user 2 */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 20.6 }}
                        className="flex flex-col justify-center items-end self-end"
                        style={{
                          maxWidth: "80%",
                          padding: "10px 12px",
                          background: "rgba(131, 68, 204, 0.1)",
                          borderRadius: "18px 18px 0px 18px",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "SF Pro",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "22px",
                            textAlign: "left",
                            letterSpacing: "-0.150391px",
                            color: "#0A0A0A",
                          }}
                        >
                          I'll get started on that this week.
                        </span>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
