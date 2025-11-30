import image_e71456bb150803a8c03bf60185c7a4ea96da27af from "figma:asset/e71456bb150803a8c03bf60185c7a4ea96da27af.png";
import imgImageAiCharacter1 from "figma:asset/81a9b3f706537a64e0f7ec2695020b5210851cfc.png";
import {
  X,
  Mic,
  Sparkles,
  Keyboard,
  Captions,
  ArrowUp,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChatBubblePopup } from "./ChatBubblePopup";
import { KeyboardInput } from "./KeyboardInput";
import { CaptionPopup } from "./CaptionPopup";
import { TagPopup } from "./TagPopup";
import { UploadPopup } from "./UploadPopup";
import Keynote1 from "../imports/Keynote";
import { toast } from "sonner@2.0.3";

interface VoiceChatProps {
  onClose: () => void;
  onBack: () => void;
  isDemo?: boolean;
}

export interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

export interface Tag {
  position: number;
  text: string;
  timestamp: string;
}

export function VoiceChat({
  onClose,
  onBack,
  isDemo = false,
}: VoiceChatProps) {
  const [speed, setSpeed] = useState("1x");
  const [isChatPopupOpen, setIsChatPopupOpen] = useState(false);
  const [isCaptionPopupOpen, setIsCaptionPopupOpen] =
    useState(false);
  const [isTagPopupOpen, setIsTagPopupOpen] = useState(false);
  const [isTagKeyboardOpen, setIsTagKeyboardOpen] =
    useState(false);
  const [isUploadPopupOpen, setIsUploadPopupOpen] =
    useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [currentTagText, setCurrentTagText] = useState("");
  const [activeTagIndex, setActiveTagIndex] = useState<
    number | null
  >(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [isVideoOn, setIsVideoOn] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // New state for Demo
  const [isAiSpeaking, setIsAiSpeaking] = useState(false);

  const totalDuration = 120;

  // Auto-play progress (existing)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime((prev) => {
        if (prev >= totalDuration) {
          clearInterval(interval);
          return totalDuration;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Scroll to bottom of chat
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [messages]);

  // Demo Logic
  useEffect(() => {
    if (!isDemo) return;

    let isCancelled = false;

    const script = [
      {
        type: "ai",
        text: "Hi there! I noticed you want to practice for a Product Manager role. I can help you prepare for your upcoming interview. Shall we start with a quick introduction?",
        delayBefore: 800,
      },
      {
        type: "user",
        text: "That sounds great. I'm ready to start.",
        delayBefore: 1500,
      },
      {
        type: "ai",
        text: "Excellent. To begin, could you tell me about a time you had to manage conflicting priorities from different stakeholders? This is a common behavioral question.",
        delayBefore: 1000,
      },
      {
        type: "user",
        text: "Sure. In my previous role, I was leading a product launch where Marketing wanted to release early to match an event, but Engineering needed two more weeks for QA.",
        delayBefore: 2000,
      },
      {
        type: "ai",
        text: "That's a classic scenario. How did you approach the situation? Did you facilitate a compromise or prioritize one side?",
        delayBefore: 1000,
      },
      {
        type: "user",
        text: "I organized a meeting with both leads. We agreed to a soft launch for a beta group, satisfying Marketing's need for buzz while giving Engineering time to fix critical bugs.",
        delayBefore: 2500,
      },
      {
        type: "ai",
        text: "That sounds like a solid strategy. Prioritizing data and quality usually wins over stakeholders. Did you face any pushback during the beta phase?",
        delayBefore: 1200,
      },
      {
        type: "user",
        text: "A little, but the data we gathered helped justify the full release timeline to leadership.",
        delayBefore: 2000,
      },
      {
        type: "ai",
        text: "Great example of data-driven decision making. It's important to highlight that impact. Let's move to the next topic: metrics. How do you define success for a new feature?",
        delayBefore: 1500,
      },
      {
        type: "user",
        text: "I usually start with the user problem and map it to business goals. For example, if we want to increase engagement, I'd look at Daily Active Users and retention rates.",
        delayBefore: 2200,
      },
      {
        type: "ai",
        text: "Those are good high-level metrics. Can you give me an example of a 'counter-metric' you would monitor to ensure you aren't hurting the ecosystem?",
        delayBefore: 1200,
      },
      {
        type: "user",
        text: "Definitely. If we're optimizing for clicks, I'd watch out for 'bounce rate' or 'time spent' to ensure we aren't just creating clickbait that users abandon quickly.",
        delayBefore: 2500,
      },
      {
        type: "ai",
        text: "Spot on. Balancing growth with quality is key. You're doing great! Do you want to try a technical system design question next?",
        delayBefore: 1500,
      },
    ];

    const runScript = async () => {
      for (const step of script) {
        if (isCancelled) return;

        await new Promise((r) =>
          setTimeout(r, step.delayBefore),
        );
        if (isCancelled) return;

        const newMsgId =
          Date.now().toString() + Math.random().toString();

        if (step.type === "user") {
          setMessages((prev) => [
            ...prev,
            {
              id: newMsgId,
              text: step.text,
              sender: "user",
              timestamp: new Date(),
            },
          ]);
        } else {
          // AI Message
          setMessages((prev) => [
            ...prev,
            {
              id: newMsgId,
              text: "",
              sender: "ai",
              timestamp: new Date(),
            },
          ]);
          setIsAiSpeaking(true);

          const words = step.text.split(" ");
          let currentText = "";
          for (let i = 0; i < words.length; i++) {
            if (isCancelled) break;
            currentText += (i > 0 ? " " : "") + words[i];

            setMessages((prev) => {
              const newArr = [...prev];
              const lastIdx = newArr.findIndex(
                (m) => m.id === newMsgId,
              );
              if (lastIdx !== -1) {
                newArr[lastIdx] = {
                  ...newArr[lastIdx],
                  text: currentText,
                };
              }
              return newArr;
            });

            await new Promise((r) =>
              setTimeout(r, 100 + Math.random() * 50),
            );
          }
          setIsAiSpeaking(false);
        }
      }
    };

    runScript();

    return () => {
      isCancelled = true;
    };
  }, [isDemo]);

  const toggleSpeed = () => {
    const speeds = ["1x", "1.25x", "1.5x", "2x"];
    const currentIndex = speeds.indexOf(speed);
    setSpeed(speeds[(currentIndex + 1) % speeds.length]);
  };

  const handleAddTag = () => {
    const newTagPosition = (currentTime / totalDuration) * 100;

    const minutes = Math.floor(currentTime / 60);
    const seconds = currentTime % 60;
    const timeString = `${minutes}:${seconds.toString().padStart(2, "0")}`;

    const newTag: Tag = {
      position: newTagPosition,
      text: "",
      timestamp: timeString,
    };

    const newTags = [...tags, newTag];
    setTags(newTags);
    setActiveTagIndex(newTags.length - 1);

    setIsTagPopupOpen(true);
    setCurrentTagText("");
  };

  const handleTagTextChange = (text: string) => {
    if (text.length <= 500) {
      setCurrentTagText(text);
    }
  };

  const handleSendTagNote = (text: string) => {
    if (text.trim() && activeTagIndex !== null) {
      const newTags = [...tags];
      newTags[activeTagIndex] = {
        ...newTags[activeTagIndex],
        text: text,
      };
      setTags(newTags);

      toast.success(
        `Tag saved at ${newTags[activeTagIndex].timestamp}`,
        {
          duration: 3000,
          style: {
            fontFamily: "SF Pro",
            fontSize: "15px",
            fontWeight: 510,
          },
        },
      );

      setIsTagPopupOpen(false);
      setIsTagKeyboardOpen(false);
      setCurrentTagText("");
      setActiveTagIndex(null);
    }
  };

  const handleCloseTagPopup = () => {
    setIsTagPopupOpen(false);
    setIsTagKeyboardOpen(false);
    setCurrentTagText("");
    setActiveTagIndex(null);
  };

  const handleTagInputFocus = () => {
    setIsTagKeyboardOpen(true);
  };

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);

    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "Got it! Let me help you with that.",
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="absolute inset-0 w-[390px] h-[844px] overflow-hidden"
      style={{ background: "#F9FAFB" }}
    >
      {/* Video/Image Background Layer - Dynamic Height */}
      <motion.div
        className="absolute inset-0 w-full origin-bottom"
        animate={{
          height: isCaptionPopupOpen ? "400px" : "844px",
          ...(isDemo && isAiSpeaking
            ? {
                y: [0, 2, 0, 1, 0],
                scaleY: [1, 1.03, 0.98, 1.02, 1],
              }
            : {
                y: 0,
                scaleY: 1,
              }),
        }}
        transition={{
          height: { duration: 0.3 },
          y: {
            duration: 0.25,
            repeat: Infinity,
            ease: "linear",
          },
          scaleY: {
            duration: 0.25,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        <ImageWithFallback
          src={image_e71456bb150803a8c03bf60185c7a4ea96da27af}
          alt="AI Character"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center top" }}
        />
      </motion.div>

      {/* User Picture (PiP) - Only shown when video is ON */}
      {isVideoOn && (
        <div
          className="absolute h-[153px] left-[252px] rounded-[24px] top-[500px] w-[118px] z-20"
          style={{
            boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.12)",
          }}
        >
          <img
            alt="User"
            className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full"
            src={imgImageAiCharacter1}
          />
          <div className="h-[153px] overflow-clip rounded-[inherit] w-[118px]" />
          <div
            aria-hidden="true"
            className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[24px]"
          />
        </div>
      )}

      {/* Demo Chat Sheet */}
      {isDemo && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: messages.length > 0 ? 0 : "100%" }}
          transition={{
            type: "spring",
            damping: 25,
            stiffness: 200,
          }}
          className="absolute bottom-0 left-0 right-0 h-[350px] z-30 rounded-t-[24px] overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, #F3F4F6 0.59%, #ECEEF1 100%)",
            boxShadow: "0px -4px 20px rgba(0,0,0,0.1)",
          }}
        >
          {/* Handle Bar */}
          <div className="w-full flex justify-center pt-3 pb-1">
            <div className="w-9 h-1.5 bg-gray-300 rounded-full opacity-50" />
          </div>

          <div className="px-6 py-4 flex flex-col gap-4 h-full overflow-y-auto pb-20">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${message.sender === "user" ? "flex-col items-end ml-auto" : "flex-row items-start gap-3"} mb-3`}
                style={{
                  maxWidth:
                    message.sender === "user"
                      ? "285px"
                      : "100%",
                  width:
                    message.sender === "user"
                      ? "fit-content"
                      : "100%",
                }}
              >
                {message.sender === "ai" && (
                  <div className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-full bg-white flex items-center justify-center border border-white/50 shadow-sm">
                    <Sparkles
                      size={16}
                      className="text-[#8C00FF]"
                      fill="#8C00FF"
                    />
                  </div>
                )}
                <div
                  style={{
                    padding:
                      message.sender === "user"
                        ? "10px 12px"
                        : "0px",
                    background:
                      message.sender === "user"
                        ? "rgba(131, 68, 204, 0.1)"
                        : "transparent",
                    borderRadius:
                      message.sender === "user"
                        ? "18px 18px 0px 18px"
                        : "0px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "SF Pro",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "22px",
                      letterSpacing: "-0.150391px",
                      color: "#0A0A0A",
                      textAlign: "left",
                    }}
                  >
                    {message.text}
                  </span>
                </div>
              </motion.div>
            ))}
            <div ref={messagesEndRef} className="h-4" />
          </div>
        </motion.div>
      )}

      {/* Top Section - Fixed */}
      <div className="absolute top-0 left-0 w-[390px] flex flex-col z-20">
        {/* Status Bar */}
        <div className="flex justify-between items-center px-4 py-[11px] h-[47px]">
          {/* Time */}
          <div className="flex items-center">
            <span
              className="text-white"
              style={{
                fontFamily: "SF Pro",
                fontSize: "17px",
                fontWeight: 590,
                lineHeight: "22px",
              }}
            >
              9:41
            </span>
          </div>

          {/* Right Side - Signal, WiFi, Battery */}
          <div className="flex items-center gap-[7px]">
            {/* Mobile Signal */}
            <svg
              width="19"
              height="12"
              viewBox="0 0 19 12"
              fill="none"
            >
              <rect
                x="0"
                y="8"
                width="4"
                height="4"
                rx="0.5"
                fill="white"
              />
              <rect
                x="5"
                y="6"
                width="4"
                height="6"
                rx="0.5"
                fill="white"
              />
              <rect
                x="10"
                y="3"
                width="4"
                height="9"
                rx="0.5"
                fill="white"
              />
              <rect
                x="15"
                y="0"
                width="4"
                height="12"
                rx="0.5"
                fill="white"
              />
            </svg>

            {/* WiFi */}
            <svg
              width="17"
              height="12"
              viewBox="0 0 17 12"
              fill="none"
            >
              <path
                d="M8.5 12C9.163 12 9.7 11.463 9.7 10.8C9.7 10.137 9.163 9.6 8.5 9.6C7.837 9.6 7.3 10.137 7.3 10.8C7.3 11.463 7.837 12 8.5 12Z"
                fill="white"
              />
              <path
                d="M8.5 7.2C10.433 7.2 12.1 8.867 12.1 10.8"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M8.5 3.6C12.642 3.6 16 6.958 16 11.1"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>

            {/* Battery */}
            <div className="relative w-[27.33px] h-[13px]">
              <div
                className="absolute inset-0 border border-white/35 rounded-[4.3px]"
                style={{ width: "25px", height: "13px" }}
              />
              <div className="absolute right-0 top-[4.5px] w-[1.33px] h-[4px] bg-white/40 rounded-r-sm" />
              <div className="absolute left-[2px] top-[2px] w-[21px] h-[9px] bg-white rounded-[2.5px]" />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center px-4 pb-2 gap-3 h-[56px]">
          {/* Back Button with Glass Effect */}
          <button
            onClick={onBack}
            className="flex flex-row justify-center items-center w-11 h-11 rounded-full relative flex-shrink-0"
            style={{
              background: "rgba(247, 247, 247, 0.85)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "0.5px solid rgba(255, 255, 255, 0.8)",
              boxShadow:
                "0px 4px 12px rgba(0, 0, 0, 0.15), inset 0px 1px 0px rgba(255, 255, 255, 0.4)",
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
              􀯶
            </span>
          </button>

          {/* Progress Bar Container */}
          <div className="flex-1 relative px-2">
            {/* Time Labels */}
            <div className="absolute -top-5 left-0 right-0 flex justify-between px-1">
              <span
                style={{
                  fontFamily: "SF Pro",
                  fontSize: "11px",
                  fontWeight: 510,
                  color: "white",
                }}
              >
                0:00
              </span>
              <span
                style={{
                  fontFamily: "SF Pro",
                  fontSize: "11px",
                  fontWeight: 510,
                  color: "white",
                }}
              >
                2:00
              </span>
            </div>
            {/* Tags on Progress Bar */}
            {tags.map((tag, index) => (
              <div
                key={index}
                className="absolute cursor-pointer"
                style={{
                  left: `${tag.position}%`,
                  top: "-27px",
                  transform: "translateX(-50%)",
                  zIndex: 30,
                }}
                onClick={() => {
                  setActiveTagIndex(index);
                  setCurrentTagText(tag.text);
                  setIsTagPopupOpen(true);
                }}
              >
                <svg
                  width="21"
                  height="23"
                  viewBox="0 0 21 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 10.5C21 13.9952 19.2923 17.0914 16.6657 19C14.9344 20.258 10.5 23 10.5 23C10.5 23 6.06563 20.258 4.33431 19C1.70773 17.0914 0 13.9952 0 10.5C0 4.70101 4.70101 0 10.5 0C16.299 0 21 4.70101 21 10.5Z"
                    fill="#8C00FF"
                  />
                  <path
                    d="M7.26926 8.31886L7.26921 6.17476C7.26925 5.89045 7.38221 5.61779 7.58324 5.41676C7.78428 5.21572 8.05693 5.10277 8.34124 5.10273L12.6302 5.10359C12.9145 5.10364 13.1872 5.2166 13.3882 5.41765C13.5893 5.61869 13.7022 5.89135 13.7023 6.17566L13.7031 8.319L7.27002 8.31961L7.26926 8.31886ZM7.26929 9.39242L6.19724 9.3924C5.91293 9.39244 5.64027 9.50539 5.43924 9.70642C5.2382 9.90746 5.12525 10.1801 5.12521 10.4644L5.12377 13.6791C5.12369 13.82 5.15139 13.9595 5.20528 14.0897C5.25917 14.2199 5.33819 14.3382 5.43783 14.4378C5.53746 14.5375 5.65576 14.6165 5.78596 14.6704C5.91615 14.7243 6.05569 14.752 6.1966 14.7519L9.94953 14.752L9.94884 17.9689C9.94895 18.1111 10.0056 18.2475 10.1062 18.3481C10.2069 18.4486 10.3434 18.505 10.4856 18.5049C10.6279 18.5048 10.7643 18.4482 10.8648 18.3475C10.9653 18.2469 11.0218 18.1104 11.0217 17.9681L11.0216 14.7535L14.7745 14.7521C15.0588 14.752 15.3315 14.6391 15.5325 14.4381C15.7335 14.237 15.8465 13.9644 15.8465 13.6801L15.8465 10.4639C15.8465 10.323 15.8188 10.1835 15.765 10.0533C15.7111 9.92307 15.632 9.80477 15.5324 9.70513C15.4328 9.6055 15.3145 9.52647 15.1843 9.47259C15.0541 9.4187 14.9145 9.391 14.7736 9.39107L13.7016 9.39105L7.27004 9.39166L7.26929 9.39242Z"
                    fill="white"
                  />
                </svg>
                {/* Progress Dot */}
                <div
                  className="absolute w-2 h-2 rounded-full bg-[#8C00FF] border-2 border-white"
                  style={{
                    left: "50%",
                    top: "23px",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </div>
            ))}

            {/* Progress Bar Background - Segmented */}
            <div className="relative w-full h-1">
              {(() => {
                const currentProgress =
                  (currentTime / totalDuration) * 100;
                const uniqueTags = [
                  ...new Set(tags.map((t) => t.position)),
                ].sort((a, b) => a - b);
                const segments: Array<{
                  start: number;
                  end: number;
                  isActive: boolean;
                }> = [];
                let prevPosition = 0;
                uniqueTags.forEach((tagPos) => {
                  if (tagPos > 0) {
                    segments.push({
                      start: prevPosition,
                      end: tagPos,
                      isActive: tagPos <= currentProgress,
                    });
                  }
                  prevPosition = tagPos;
                });
                if (prevPosition < 100) {
                  segments.push({
                    start: prevPosition,
                    end: 100,
                    isActive: prevPosition < currentProgress,
                  });
                }
                if (segments.length === 0) {
                  segments.push({
                    start: 0,
                    end: 100,
                    isActive: true,
                  });
                }

                return segments.map((segment, index) => {
                  const segmentWidth =
                    segment.end - segment.start;
                  const gapWidth = 4;
                  const containerWidth = 300;
                  const gapPercentage =
                    (gapWidth / containerWidth) * 100;

                  return (
                    <div
                      key={index}
                      className="absolute h-1 rounded-full"
                      style={{
                        left: `${segment.start}%`,
                        width: `calc(${segmentWidth}% - ${gapPercentage}%)`,
                        background: "rgba(0, 0, 0, 0.6)",
                      }}
                    >
                      {segment.isActive && (
                        <div
                          className="absolute h-1 rounded-full bg-[#8C00FF]"
                          style={{
                            width:
                              segment.end <= currentProgress
                                ? "100%"
                                : `${((currentProgress - segment.start) / segmentWidth) * 100}%`,
                          }}
                        />
                      )}
                    </div>
                  );
                });
              })()}
            </div>
          </div>

          {/* Close Button - Hidden in Demo */}
          {!isDemo && (
            <button
              onClick={onClose}
              className="flex flex-row justify-center items-center w-11 h-11 rounded-full relative flex-shrink-0"
              style={{
                background: "rgba(247, 247, 247, 0.85)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "0.5px solid rgba(255, 255, 255, 0.8)",
                boxShadow:
                  "0px 4px 12px rgba(0, 0, 0, 0.15), inset 0px 1px 0px rgba(255, 255, 255, 0.4)",
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
          )}
        </div>
      </div>

      {/* Body Section - Fixed at Bottom - Disabled in Demo */}
      <div
        className={`absolute left-0 w-[390px] h-[246px] z-10 ${isDemo ? "opacity-50 pointer-events-none" : ""}`}
        style={{ top: "564px" }}
      >
        {/* Actions */}
        <div
          className="absolute left-4 w-[358px] h-[88px]"
          style={{ top: "193px" }}
        >
          {/* Button Groups */}
          <div className="flex justify-center items-center gap-4 px-8 h-12">
            {/* Video/Record Button */}
            <button
              onClick={() => setIsVideoOn(!isVideoOn)}
              className="flex items-center justify-center rounded-full bg-white"
              style={{
                width: "48px",
                height: "48px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
              }}
            >
              <svg
                width={isVideoOn ? "26" : "24"}
                height={isVideoOn ? "16" : "15"}
                viewBox={isVideoOn ? "0 0 26 16" : "0 0 24 15"}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isVideoOn ? (
                  <g>
                    <g>
                      <path
                        d="M17.4666 9.06682L23.7343 13.2452C23.8246 13.3054 23.9296 13.3399 24.038 13.3451C24.1464 13.3502 24.2542 13.3259 24.3499 13.2747C24.4455 13.2235 24.5255 13.1472 24.5813 13.0542C24.6371 12.9611 24.6666 12.8546 24.6667 12.746V2.91078C24.6667 2.80521 24.6389 2.7015 24.586 2.61012C24.5331 2.51874 24.4571 2.44293 24.3655 2.39034C24.274 2.33775 24.1702 2.31025 24.0646 2.31061C23.959 2.31097 23.8554 2.33917 23.7643 2.39238L17.4666 6.0668"
                        fill="#3E5FFF"
                      />
                      <path
                        d="M17.4666 9.06682L23.7343 13.2452C23.8246 13.3054 23.9296 13.3399 24.038 13.3451C24.1464 13.3502 24.2542 13.3259 24.3499 13.2747C24.4455 13.2235 24.5255 13.1472 24.5813 13.0542C24.6371 12.9611 24.6666 12.8546 24.6667 12.746V2.91078C24.6667 2.80521 24.6389 2.7015 24.586 2.61012C24.5331 2.51874 24.4571 2.44293 24.3655 2.39034C24.274 2.33775 24.1702 2.31025 24.0646 2.31061C23.959 2.31097 23.8554 2.33917 23.7643 2.39238L17.4666 6.0668"
                        stroke="#3E5FFF"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.33333"
                      />
                    </g>
                    <path
                      d="M15.0668 0.666667H3.0667C1.7412 0.666667 0.666667 1.74119 0.666667 3.06668V12.6667C0.666667 13.9922 1.7412 15.0668 3.0667 15.0668H15.0668C16.3923 15.0668 17.4669 13.9922 17.4669 12.6667V3.06668C17.4669 1.74119 16.3923 0.666667 15.0668 0.666667Z"
                      fill="#3E5FFF"
                      stroke="#3E5FFF"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.33333"
                    />
                  </g>
                ) : (
                  <path
                    d="M13.8672 0C15.4502 0.00019382 16.7334 1.28408 16.7334 2.86719V4.45508L21.5029 1.67285L21.6465 1.60156C21.7935 1.54001 21.9519 1.50741 22.1123 1.50684L22.2715 1.51758C22.3771 1.53115 22.4806 1.55817 22.5791 1.59863L22.7227 1.66895L22.8555 1.75781C22.9397 1.82227 23.0153 1.89742 23.0801 1.98145L23.1699 2.11426L23.2402 2.25781C23.3013 2.40501 23.333 2.56324 23.333 2.72363V11.7402C23.3328 11.9602 23.2732 12.1765 23.1602 12.3652C23.047 12.5538 22.8843 12.7077 22.6904 12.8115C22.4966 12.9153 22.2782 12.9655 22.0586 12.9551C21.8938 12.9472 21.7324 12.9055 21.585 12.834L21.4424 12.752L16.7334 9.6123V11.667C16.7334 13.2501 15.4502 14.534 13.8672 14.5342H2.86719C1.28396 14.5342 0 13.2502 0 11.667V2.86719C0 1.28396 1.28396 0 2.86719 0H13.8672ZM2.86719 1.33398C2.02034 1.33398 1.33398 2.02034 1.33398 2.86719V11.667C1.33398 12.5138 2.02034 13.2002 2.86719 13.2002H13.8672C14.7139 13.2 15.4004 12.5137 15.4004 11.667V8.37891C15.4003 8.3724 15.4003 8.36589 15.4004 8.35938V2.86719C15.4004 2.02046 14.7139 1.33418 13.8672 1.33398H2.86719ZM16.7334 5.99902V8.00977L22 11.5215V2.92578L16.7334 5.99902Z"
                    fill="black"
                  />
                )}
              </svg>
            </button>

            {/* Captions Button */}
            <button
              onClick={() =>
                setIsCaptionPopupOpen(!isCaptionPopupOpen)
              }
              className="flex items-center justify-center rounded-full bg-white"
              style={{
                width: "48px",
                height: "48px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 1C13.4445 1 14.8754 1.28411 16.21 1.83691C17.5445 2.38971 18.7569 3.20029 19.7783 4.22168C20.7997 5.24306 21.6103 6.45555 22.1631 7.79004C22.7159 9.12462 23 10.5555 23 12C23 13.4445 22.7159 14.8754 22.1631 16.21L21.9434 16.7041C21.404 17.8442 20.6721 18.8846 19.7783 19.7783L19.3867 20.1514C18.4521 20.9983 17.3777 21.6794 16.21 22.1631L15.7051 22.3574C14.5174 22.7823 13.2641 23 12 23C10.7359 23 9.48261 22.7823 8.29492 22.3574L7.79004 22.1631C6.62231 21.6794 5.5479 20.9983 4.61328 20.1514L4.22168 19.7783C3.32791 18.8846 2.59603 17.8442 2.05664 16.7041L1.83691 16.21C1.28411 14.8754 1 13.4445 1 12C1 10.5555 1.28411 9.12462 1.83691 7.79004C2.38971 6.45555 3.20029 5.24306 4.22168 4.22168C5.24306 3.20029 6.45555 2.38971 7.79004 1.83691C9.12462 1.28411 10.5555 1 12 1ZM12 2.33008C10.7302 2.33008 9.47297 2.58049 8.2998 3.06641C7.12659 3.55237 6.06005 4.26417 5.16211 5.16211C4.26417 6.06005 3.55237 7.12659 3.06641 8.2998C2.58049 9.47297 2.33008 10.7302 2.33008 12C2.33008 13.2698 2.58049 14.527 3.06641 15.7002C3.55237 16.8734 4.26417 17.9399 5.16211 18.8379C6.06005 19.7358 7.12659 20.4476 8.2998 20.9336C9.47297 21.4195 10.7302 21.6699 12 21.6699C13.2698 21.6699 14.527 21.4195 15.7002 20.9336C16.8734 20.4476 17.9399 19.7358 18.8379 18.8379C19.7358 17.9399 20.4476 16.8734 20.9336 15.7002C21.4195 14.527 21.6699 13.2698 21.6699 12C21.6699 10.7302 21.4195 9.47297 20.9336 8.2998C20.4476 7.12659 19.7358 6.06005 18.8379 5.16211C17.9399 4.26417 16.8734 3.55237 15.7002 3.06641C14.527 2.58049 13.2698 2.33008 12 2.33008ZM9.31055 9C10.065 9.00351 10.7951 9.24178 11.3789 9.6748L10.5518 10.6133C10.2029 10.3577 9.77855 10.2002 9.31055 10.2002C8.20622 10.2002 7.32422 10.9992 7.32422 12C7.32422 13.0008 8.20622 13.7998 9.31055 13.7998C9.77855 13.7998 10.2029 13.6423 10.5518 13.3867L11.3789 14.3252C10.7951 14.7582 10.065 14.9965 9.31055 15C7.48986 15 6 13.65 6 12C6 10.35 7.48986 9 9.31055 9ZM15.9307 9C16.6853 9.00347 17.4161 9.24162 18 9.6748L17.1729 10.6133C16.8239 10.3577 16.3987 10.2002 15.9307 10.2002C14.8265 10.2004 13.9453 10.9993 13.9453 12C13.9453 13.0007 14.8265 13.7996 15.9307 13.7998C16.3987 13.7998 16.8239 13.6423 17.1729 13.3867L18 14.3252C17.4161 14.7584 16.6853 14.9965 15.9307 15C14.1101 14.9998 12.6211 13.6499 12.6211 12C12.6211 10.3501 14.1101 9.00018 15.9307 9Z"
                  fill="black"
                />
              </svg>
            </button>

            {/* Keyboard Button */}
            <button
              onClick={() => setIsChatPopupOpen(true)}
              className="flex items-center justify-center rounded-full bg-white"
              style={{
                width: "48px",
                height: "48px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
              }}
            >
              <Keyboard
                size={24}
                color="#000"
                strokeWidth={1.5}
              />
            </button>

            {/* Upload Button */}
            <button
              onClick={() => setIsUploadPopupOpen(true)}
              className="flex items-center justify-center rounded-full bg-white"
              style={{
                width: "48px",
                height: "48px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1C13.4445 1 14.8754 1.28411 16.21 1.83691C17.5445 2.38971 18.7569 3.20029 19.7783 4.22168C20.7997 5.24306 21.6103 6.45555 22.1631 7.79004C22.7159 9.12462 23 10.5555 23 12C23 13.4445 22.7159 14.8754 22.1631 16.21L21.9434 16.7041C21.404 17.8442 20.6721 18.8846 19.7783 19.7783L19.3867 20.1514C18.4521 20.9983 17.3777 21.6794 16.21 22.1631L15.7051 22.3574C14.5174 22.7823 13.2641 23 12 23C10.7359 23 9.48261 22.7823 8.29492 22.3574L7.79004 22.1631C6.62231 21.6794 5.5479 20.9983 4.61328 20.1514L4.22168 19.7783C3.32791 18.8846 2.59603 17.8442 2.05664 16.7041L1.83691 16.21C1.28411 14.8754 1 13.4445 1 12C1 10.5555 1.28411 9.12462 1.83691 7.79004C2.38971 6.45555 3.20029 5.24306 4.22168 4.22168C5.24306 3.20029 6.45555 2.38971 7.79004 1.83691C9.12462 1.28411 10.5555 1 12 1ZM12 2.33008C10.7302 2.33008 9.47297 2.58049 8.2998 3.06641C7.12659 3.55237 6.06005 4.26417 5.16211 5.16211C4.26417 6.06005 3.55237 7.12659 3.06641 8.2998C2.58049 9.47297 2.33008 10.7302 2.33008 12C2.33008 13.2698 2.58049 14.527 3.06641 15.7002C3.55237 16.8734 4.26417 17.9399 5.16211 18.8379C6.06005 19.7358 7.12659 20.4476 8.2998 20.9336C9.47297 21.4195 10.7302 21.6699 12 21.6699C13.2698 21.6699 14.527 21.4195 15.7002 20.9336C16.8734 20.4476 17.9399 19.7358 18.8379 18.8379C19.7358 17.9399 20.4476 16.8734 20.9336 15.7002C21.4195 14.527 21.6699 13.2698 21.6699 12C21.6699 10.7302 21.4195 9.47297 20.9336 8.2998C20.4476 7.12659 19.7358 6.06005 18.8379 5.16211C17.9399 4.26417 16.8734 3.55237 15.7002 3.06641C14.527 2.58049 13.2698 2.33008 12 2.33008ZM16.75 10.957L15.8096 11.8975L12.8301 8.91797V16H11.5V8.73242L8.33594 11.8975L7.39551 10.957L12.0723 6.2793L16.75 10.957Z" fill="black" />
              </svg>
            </button>
          </div>

          {/* Mention - Bottom spacing */}
          <div className="w-[358px] h-6 mt-4" />
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 w-[390px] h-[34px] flex justify-center items-center z-10">
        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[134px] h-[5px] bg-white rounded-full" />
      </div>

      {/* Speed Button - Floating Bottom Right */}
      <button
        onClick={handleAddTag}
        className="absolute flex items-center justify-center border border-white z-20 transition-all"
        style={{
          left: "326px",
          top: "689px",
          width: "64px",
          height: "46px",
          borderRadius: "23px 0px 0px 23px",
          padding: "12px 13px",
          backgroundColor: isTagPopupOpen
            ? "#FFFFFF"
            : "transparent",
          boxShadow: isTagPopupOpen
            ? "0px 2px 4px rgba(0, 0, 0, 0.2)"
            : "none",
          filter: isTagPopupOpen
            ? "none"
            : "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.2))",
        }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.13574 3.28125C6.52427 3.28133 6.89709 3.43622 7.17188 3.71094L8.70801 5.24707H8.70996L16.9014 13.4375L18.291 14.8271H18.292C18.4281 14.9632 18.5356 15.125 18.6094 15.3027C18.6831 15.4807 18.7217 15.6716 18.7217 15.8643C18.7217 16.0569 18.6831 16.2478 18.6094 16.4258C18.5356 16.6035 18.4281 16.7653 18.292 16.9014H18.291L14.1221 21.0713C13.8472 21.3459 13.4744 21.5 13.0859 21.5C12.6974 21.5 12.3246 21.3459 12.0498 21.0713V21.0703L7.18262 16.207L6.8291 15.8545L2.30859 20.375C2.21805 20.4657 2.09491 20.5174 1.9668 20.5176C1.83873 20.5177 1.71569 20.4664 1.625 20.376C1.53432 20.2854 1.48256 20.1623 1.48242 20.0342C1.48235 19.9381 1.51101 19.8445 1.56348 19.7656L1.62402 19.6924L5.79492 15.5234L6.14844 15.1699L5.79492 14.8154L0.929688 9.9502C0.793499 9.8141 0.685056 9.65247 0.611328 9.47461C0.537614 9.29672 0.5 9.10565 0.5 8.91309C0.500034 8.72055 0.5376 8.52943 0.611328 8.35156C0.685087 8.17372 0.79348 8.01204 0.929688 7.87598L5.09863 3.71094H5.09961C5.37446 3.4362 5.74714 3.28125 6.13574 3.28125ZM14.4756 0.5C14.864 0.5 15.2369 0.654161 15.5117 0.928711L21.0713 6.49023C21.3459 6.76505 21.5 7.13785 21.5 7.52637C21.5 7.91487 21.3458 8.28767 21.0713 8.5625H21.0703L18.6465 10.9883L11.0117 3.35547L13.4395 0.928711C13.7142 0.654074 14.0871 0.500059 14.4756 0.5Z"
            stroke="white"
          />
        </svg>
      </button>

      {/* Notch */}
      <div className="absolute w-[150px] h-[37px] left-[120px] top-0 bg-black rounded-b-[24px] z-30" />

      <CaptionPopup
        isOpen={isCaptionPopupOpen}
        onClose={() => setIsCaptionPopupOpen(false)}
      />
      <ChatBubblePopup
        isOpen={isChatPopupOpen}
        onClose={() => setIsChatPopupOpen(false)}
        messages={messages}
      />
      <KeyboardInput
        isOpen={isChatPopupOpen}
        onSendMessage={handleSendMessage}
        onClose={() => setIsChatPopupOpen(false)}
      />
      <TagPopup
        isOpen={isTagPopupOpen}
        onClose={handleCloseTagPopup}
        tags={tags}
        currentTagText={currentTagText}
        onTagTextChange={handleTagTextChange}
        onTagInputFocus={handleTagInputFocus}
        isTagKeyboardOpen={isTagKeyboardOpen}
        onSendTagNote={handleSendTagNote}
        onUpload={() => setIsUploadPopupOpen(true)}
      />
      <KeyboardInput
        isOpen={isTagKeyboardOpen}
        onSendMessage={handleSendTagNote}
        onClose={() => setIsTagKeyboardOpen(false)}
        showInput={false}
      />
      <UploadPopup
        isOpen={isUploadPopupOpen}
        onClose={() => setIsUploadPopupOpen(false)}
      />
    </motion.div>
  );
}