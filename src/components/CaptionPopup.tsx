import { motion, AnimatePresence } from "motion/react";
import { X, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

interface CaptionPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CaptionPopup({
  isOpen,
  onClose,
}: CaptionPopupProps) {
  const [loadingPhase, setLoadingPhase] = useState<'icon' | 'text' | 'complete'>('icon');

  useEffect(() => {
    if (isOpen) {
      // Reset to icon phase when popup opens
      setLoadingPhase('icon');
      
      // Phase 1: Icon rotation (0-1.5s)
      const textTimer = setTimeout(() => {
        setLoadingPhase('text');
      }, 1500);
      
      // Phase 2: Text fade in (1.5-2.5s)
      const completeTimer = setTimeout(() => {
        setLoadingPhase('complete');
      }, 2500);
      
      return () => {
        clearTimeout(textTimer);
        clearTimeout(completeTimer);
      };
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
            {/* Loading State */}
            {loadingPhase !== 'complete' && (
              <div className="flex flex-col items-center justify-center gap-6 pt-20">
                {/* Rotating Icon */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-white/50 shadow-lg"
                >
                  <Sparkles size={24} className="text-[#8C00FF]" fill="#8C00FF" />
                </motion.div>

                {/* Loading Text */}
                {loadingPhase === 'text' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span
                      style={{
                        fontFamily: "SF Pro",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "22px",
                        color: "#666666",
                      }}
                    >
                      AI正在生成对话...
                    </span>
                  </motion.div>
                )}
              </div>
            )}

            {/* Content - Only show when loading is complete */}
            {loadingPhase === 'complete' && (
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
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.5 }}
                        className="flex flex-row items-start gap-3 self-start"
                        style={{
                          maxWidth: "100%",
                          padding: "0px",
                          background: "transparent",
                        }}
                      >
                        <div className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-white flex items-center justify-center border border-white/50 shadow-sm">
                          <Sparkles size={14} className="text-[#8C00FF]" fill="#8C00FF" />
                        </div>
                        <span
                          style={{
                            fontFamily: "SF Pro",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "22px",
                            letterSpacing: "-0.150391px",
                            color: "#0A0A0A",
                          }}
                        >
                          I'd like to discuss your promotion
                          timeline. What are you thinking?
                        </span>
                      </motion.div>

                      {/* chat-bubble-user 1 */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.8 }}
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
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 1.1 }}
                        className="flex flex-row items-start gap-3 self-start"
                        style={{
                          maxWidth: "100%",
                          padding: "0px",
                          background: "transparent",
                        }}
                      >
                        <div className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-white flex items-center justify-center border border-white/50 shadow-sm">
                          <Sparkles size={14} className="text-[#8C00FF]" fill="#8C00FF" />
                        </div>
                        <span
                          style={{
                            fontFamily: "SF Pro",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "22px",
                            letterSpacing: "-0.150391px",
                            color: "#0A0A0A",
                          }}
                        >
                          That sounds like a great goal. Tell me why
                          you think you're ready.
                        </span>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Section 2: Evidence-Why */}
                <div className="mb-1 pb-[10px]">
                  {/* Title with dot */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 1.5 }}
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
                          duration: 1.8,
                          delay: 1.7,
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
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 1.7 }}
                        className="flex flex-row items-start gap-3 self-start"
                        style={{
                          maxWidth: "100%",
                          padding: "0px",
                          background: "transparent",
                        }}
                      >
                        <div className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-white flex items-center justify-center border border-white/50 shadow-sm">
                          <Sparkles size={14} className="text-[#8C00FF]" fill="#8C00FF" />
                        </div>
                        <span
                          style={{
                            fontFamily: "SF Pro",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "22px",
                            letterSpacing: "-0.150391px",
                            color: "#0A0A0A",
                          }}
                        >
                          Can you walk me through your key projects?
                        </span>
                      </motion.div>

                      {/* chat-bubble-user 1 */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 2.0 }}
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
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 2.3 }}
                        className="flex flex-row items-start gap-3 self-start"
                        style={{
                          maxWidth: "100%",
                          padding: "0px",
                          background: "transparent",
                        }}
                      >
                        <div className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-white flex items-center justify-center border border-white/50 shadow-sm">
                          <Sparkles size={14} className="text-[#8C00FF]" fill="#8C00FF" />
                        </div>
                        <span
                          style={{
                            fontFamily: "SF Pro",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "22px",
                            letterSpacing: "-0.150391px",
                            color: "#0A0A0A",
                          }}
                        >
                          What were the results?
                        </span>
                      </motion.div>

                      {/* chat-bubble-user 2 */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 2.6 }}
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
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 2.9 }}
                        className="flex flex-row items-start gap-3 self-start"
                        style={{
                          maxWidth: "100%",
                          padding: "0px",
                          background: "transparent",
                        }}
                      >
                        <div className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-white flex items-center justify-center border border-white/50 shadow-sm">
                          <Sparkles size={14} className="text-[#8C00FF]" fill="#8C00FF" />
                        </div>
                        <span
                          style={{
                            fontFamily: "SF Pro",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "22px",
                            letterSpacing: "-0.150391px",
                            color: "#0A0A0A",
                          }}
                        >
                          What about cross-functional impact?
                        </span>
                      </motion.div>

                      {/* chat-bubble-user 3 */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 3.2 }}
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
                    transition={{ duration: 0.3, delay: 3.6 }}
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
                          duration: 1.5,
                          delay: 3.8,
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
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 3.8 }}
                        className="flex flex-row items-start gap-3 self-start"
                        style={{
                          maxWidth: "100%",
                          padding: "0px",
                          background: "transparent",
                        }}
                      >
                        <div className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-white flex items-center justify-center border border-white/50 shadow-sm">
                          <Sparkles size={14} className="text-[#8C00FF]" fill="#8C00FF" />
                        </div>
                        <span
                          style={{
                            fontFamily: "SF Pro",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "22px",
                            letterSpacing: "-0.150391px",
                            color: "#0A0A0A",
                          }}
                        >
                          Let's start with the formal review
                          process. When would you like to submit?
                        </span>
                      </motion.div>

                      {/* chat-bubble-user 1 */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 4.1 }}
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
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 4.4 }}
                        className="flex flex-row items-start gap-3 self-start"
                        style={{
                          maxWidth: "100%",
                          padding: "0px",
                          background: "transparent",
                        }}
                      >
                        <div className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-white flex items-center justify-center border border-white/50 shadow-sm">
                          <Sparkles size={14} className="text-[#8C00FF]" fill="#8C00FF" />
                        </div>
                        <span
                          style={{
                            fontFamily: "SF Pro",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "22px",
                            letterSpacing: "-0.150391px",
                            color: "#0A0A0A",
                          }}
                        >
                          That works. You'll need to prepare your
                          packet and get peer reviews.
                        </span>
                      </motion.div>

                      {/* chat-bubble-user 2 */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 4.7 }}
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
