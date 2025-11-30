import image_e71456bb150803a8c03bf60185c7a4ea96da27af from "figma:asset/e71456bb150803a8c03bf60185c7a4ea96da27af.png";
import { X, Mic } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChatBubblePopup } from "./ChatBubblePopup";
import { KeyboardInput } from "./KeyboardInput";
import { CaptionPopup } from "./CaptionPopup";
import { TagPopup } from "./TagPopup";
import { UploadPopup } from "./UploadPopup";
import Keynote1 from "../imports/Keynote";

interface VoiceChatProps {
  onClose: () => void;
  onBack: () => void;
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

export function VoiceChat({ onClose, onBack }: VoiceChatProps) {
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
  const [tags, setTags] = useState<Tag[]>([]); // Tag objects with position and text
  const [currentTagText, setCurrentTagText] = useState("");
  const [activeTagIndex, setActiveTagIndex] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState(0); // Current playback time in seconds (0-120)

  const totalDuration = 120; // 2 minutes in seconds

  // Auto-play progress
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime((prev) => {
        if (prev >= totalDuration) {
          clearInterval(interval);
          return totalDuration;
        }
        return prev + 1;
      });
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  const toggleSpeed = () => {
    const speeds = ["1x", "1.25x", "1.5x", "2x"];
    const currentIndex = speeds.indexOf(speed);
    setSpeed(speeds[(currentIndex + 1) % speeds.length]);
  };

  const handleAddTag = () => {
    // Add a tag at current progress position
    const newTagPosition = (currentTime / totalDuration) * 100;
    
    const minutes = Math.floor(currentTime / 60);
    const seconds = currentTime % 60;
    const timeString = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    const newTag: Tag = {
      position: newTagPosition,
      text: "",
      timestamp: timeString
    };

    const newTags = [...tags, newTag];
    setTags(newTags);
    setActiveTagIndex(newTags.length - 1);

    setIsTagPopupOpen(true);
    setCurrentTagText(""); // Reset text for new tag
  };

  const handleTagTextChange = (text: string) => {
    // Limit to 500 characters
    if (text.length <= 500) {
      setCurrentTagText(text);
    }
  };

  const handleSendTagNote = (text: string) => {
    if (text.trim() && activeTagIndex !== null) {
      // Update the specific tag
      const newTags = [...tags];
      newTags[activeTagIndex] = {
        ...newTags[activeTagIndex],
        text: text
      };
      setTags(newTags);

      // Show toast notification
      toast.success(`Tag saved at ${newTags[activeTagIndex].timestamp}`, {
        duration: 3000,
        style: {
          fontFamily: "SF Pro",
          fontSize: "15px",
          fontWeight: 510,
        },
      });

      // Close popup and keyboard
      setIsTagPopupOpen(false);
      setIsTagKeyboardOpen(false);
      setCurrentTagText("");
      setActiveTagIndex(null);
    }
  };

  const handleCloseTagPopup = () => {
    setIsTagPopupOpen(false);
    setIsTagKeyboardOpen(false);
    setCurrentTagText(""); // Reset text when closing
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

    // Simulate AI response after a short delay
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
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ type: "tween", duration: 0.4 }}
      className="fixed inset-0 w-[390px] h-[844px] overflow-hidden"
      style={{ background: "#F9FAFB" }}
    >
      {/* Video/Image Background Layer - Dynamic Height */}
      <div
        className="absolute inset-0 w-full transition-all duration-300"
        style={{
          height: isCaptionPopupOpen ? "400px" : "844px",
        }}
      >
        <ImageWithFallback
          src={image_e71456bb150803a8c03bf60185c7a4ea96da27af}
          alt="AI Character"
          className="w-full h-full object-cover"
        />
      </div>

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
                  zIndex: 30 // Ensure clickable above other elements
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
                {/* Progress Dot at Tag Position */}
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
              {/* Get unique sorted tag positions */}
              {(() => {
                const currentProgress =
                  (currentTime / totalDuration) * 100;
                const uniqueTags = [...new Set(tags.map(t => t.position))].sort(
                  (a, b) => a - b,
                );
                const segments: Array<{
                  start: number;
                  end: number;
                  isActive: boolean;
                }> = [];

                // Create segments between tags
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

                // Add final segment from last tag to 100%
                if (prevPosition < 100) {
                  segments.push({
                    start: prevPosition,
                    end: 100,
                    isActive: prevPosition < currentProgress,
                  });
                }

                // If no tags, show full bar
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
                  const gapWidth = 4; // 4px gap in percentage of container width
                  const containerWidth = 300; // approximate width in px
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
                      {/* Active progress within this segment */}
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

          {/* Close Button with Glass Effect */}
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
        </div>
      </div>

      {/* Body Section - Fixed at Bottom */}
      <div
        className="absolute left-0 w-[390px] h-[246px] z-10"
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
              className="flex items-center justify-center rounded-full bg-white"
              style={{
                width: "48px",
                height: "48px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
              }}
            >
              <svg
                width="24"
                height="15"
                viewBox="0 0 24 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.8672 0C15.4502 0.00019382 16.7334 1.28408 16.7334 2.86719V4.45508L21.5029 1.67285L21.6465 1.60156C21.7935 1.54001 21.9519 1.50741 22.1123 1.50684L22.2715 1.51758C22.3771 1.53115 22.4806 1.55817 22.5791 1.59863L22.7227 1.66895L22.8555 1.75781C22.9397 1.82227 23.0153 1.89742 23.0801 1.98145L23.1699 2.11426L23.2402 2.25781C23.3013 2.40501 23.333 2.56324 23.333 2.72363V11.7402C23.3328 11.9602 23.2732 12.1765 23.1602 12.3652C23.047 12.5538 22.8843 12.7077 22.6904 12.8115C22.4966 12.9153 22.2782 12.9655 22.0586 12.9551C21.8938 12.9472 21.7324 12.9055 21.585 12.834L21.4424 12.752L16.7334 9.6123V11.667C16.7334 13.2501 15.4502 14.534 13.8672 14.5342H2.86719C1.28396 14.5342 0 13.2502 0 11.667V2.86719C0 1.28396 1.28396 0 2.86719 0H13.8672ZM2.86719 1.33398C2.02034 1.33398 1.33398 2.02034 1.33398 2.86719V11.667C1.33398 12.5138 2.02034 13.2002 2.86719 13.2002H13.8672C14.7139 13.2 15.4004 12.5137 15.4004 11.667V8.37891C15.4003 8.3724 15.4003 8.36589 15.4004 8.35938V2.86719C15.4004 2.02046 14.7139 1.33418 13.8672 1.33398H2.86719ZM16.7334 5.99902V8.00977L22 11.5215V2.92578L16.7334 5.99902Z"
                  fill="black"
                />
              </svg>
            </button>

            {/* CC/Subtitles Button */}
            <button
              onClick={() => setIsCaptionPopupOpen(true)}
              className="flex items-center justify-center rounded-full bg-white"
              style={{
                width: "48px",
                height: "48px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="132 15 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M143 15C144.445 15 145.875 15.2841 147.21 15.8369C148.544 16.3897 149.757 17.2003 150.778 18.2217C151.8 19.2431 152.61 20.4555 153.163 21.79C153.716 23.1246 154 24.5555 154 26C154 27.4445 153.716 28.8754 153.163 30.21L152.943 30.7041C152.404 31.8442 151.672 32.8846 150.778 33.7783L150.387 34.1514C149.452 34.9983 148.378 35.6794 147.21 36.1631L146.705 36.3574C145.517 36.7823 144.264 37 143 37C141.736 37 140.483 36.7823 139.295 36.3574L138.79 36.1631C137.622 35.6794 136.548 34.9983 135.613 34.1514L135.222 33.7783C134.328 32.8846 133.596 31.8442 133.057 30.7041L132.837 30.21C132.284 28.8754 132 27.4445 132 26C132 24.5555 132.284 23.1246 132.837 21.79C133.39 20.4555 134.2 19.2431 135.222 18.2217C136.243 17.2003 137.456 16.3897 138.79 15.8369C140.125 15.2841 141.555 15 143 15ZM143 16.3301C141.73 16.3301 140.473 16.5805 139.3 17.0664C138.127 17.5524 137.06 18.2642 136.162 19.1621C135.264 20.0601 134.552 21.1266 134.066 22.2998C133.58 23.473 133.33 24.7302 133.33 26C133.33 27.2698 133.58 28.527 134.066 29.7002C134.552 30.8734 135.264 31.9399 136.162 32.8379C137.06 33.7358 138.127 34.4476 139.3 34.9336C140.473 35.4195 141.73 35.6699 143 35.6699C144.27 35.6699 145.527 35.4195 146.7 34.9336C147.873 34.4476 148.94 33.7358 149.838 32.8379C150.736 31.9399 151.448 30.8734 151.934 29.7002C152.42 28.527 152.67 27.2698 152.67 26C152.67 24.7302 152.42 23.473 151.934 22.2998C151.448 21.1266 150.736 20.0601 149.838 19.1621C148.94 18.2642 147.873 17.5524 146.7 17.0664C145.527 16.5805 144.27 16.3301 143 16.3301ZM140.311 23C141.065 23.0035 141.795 23.2418 142.379 23.6748L141.552 24.6133C141.203 24.3577 140.779 24.2002 140.311 24.2002C139.206 24.2002 138.324 24.9992 138.324 26C138.324 27.0008 139.206 27.7998 140.311 27.7998C140.779 27.7998 141.203 27.6423 141.552 27.3867L142.379 28.3252C141.795 28.7582 141.065 28.9965 140.311 29C138.49 29 137 27.65 137 26C137 24.35 138.49 23 140.311 23ZM146.931 23C147.685 23.0035 148.416 23.2416 149 23.6748L148.173 24.6133C147.824 24.3577 147.399 24.2002 146.931 24.2002C145.827 24.2004 144.945 24.9993 144.945 26C144.945 27.0007 145.827 27.7996 146.931 27.7998C147.399 27.7998 147.824 27.6423 148.173 27.3867L149 28.3252C148.416 28.7584 147.685 28.9965 146.931 29C145.11 28.9998 143.621 27.6499 143.621 26C143.621 24.3501 145.11 23.0002 146.931 23Z"
                  fill="black"
                />
              </svg>
            </button>

            {/* Keyboard/Text Button */}
            <button
              onClick={() => setIsChatPopupOpen(true)}
              className="flex items-center justify-center rounded-full bg-white"
              style={{
                width: "48px",
                height: "48px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="203.996 14.9961 22.008 22.0078"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M215 14.9961C221.077 14.9962 226.004 19.9229 226.004 26C226.004 32.0771 221.077 37.0038 215 37.0039C208.923 37.0038 203.996 32.0771 203.996 26C203.996 19.9229 208.923 14.9962 215 14.9961ZM215 16.5752C209.795 16.5753 205.575 20.7952 205.575 26C205.575 31.2048 209.795 35.4247 215 35.4248C220.205 35.4247 224.425 31.2048 224.425 26C224.425 20.7952 220.205 16.5753 215 16.5752ZM219.653 29.1045C219.847 29.1046 220.032 29.1817 220.169 29.3184C220.305 29.4551 220.382 29.6408 220.382 29.834C220.382 30.027 220.305 30.212 220.169 30.3486C220.032 30.4853 219.847 30.5624 219.653 30.5625H210.416C210.223 30.5625 210.037 30.4853 209.9 30.3486C209.764 30.212 209.687 30.027 209.687 29.834C209.687 29.6407 209.764 29.4551 209.9 29.3184C210.037 29.1816 210.223 29.1045 210.416 29.1045H219.653ZM210.659 25.2148V27.1602H208.714V25.2148H210.659ZM214.224 25.2139V27.1602H212.279V25.2139H214.224ZM217.789 25.2139V27.1602H215.845V25.2139H217.789ZM221.354 25.2139V27.1602H219.41V25.2139H221.354ZM210.659 21.3262V23.2705H208.714V21.3262H210.659ZM214.224 21.3262V23.2705H212.279V21.3262H214.224ZM217.789 21.3262V23.2705H215.845V21.3262H217.789ZM221.354 21.3262V23.2705H219.41V21.3262H221.354Z"
                  fill="black"
                />
              </svg>
            </button>

            {/* Upload Button */}
            <button
              onClick={() => setIsUploadPopupOpen(true)}
              className="flex items-center justify-center rounded-full bg-white"
              style={{
                width: "48px",
                height: "48px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                padding: 0
              }}
            >
              <div className="w-full h-full">
                <Keynote1 />
              </div>
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

      {/* Caption Popup */}
      <CaptionPopup
        isOpen={isCaptionPopupOpen}
        onClose={() => setIsCaptionPopupOpen(false)}
      />

      {/* Chat Bubble Popup */}
      <ChatBubblePopup
        isOpen={isChatPopupOpen}
        onClose={() => setIsChatPopupOpen(false)}
        messages={messages}
      />

      {/* Keyboard Input - Above Chat Popup */}
      <KeyboardInput
        isOpen={isChatPopupOpen}
        onSendMessage={handleSendMessage}
        onClose={() => setIsChatPopupOpen(false)}
      />

      {/* Tag Popup */}
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

      {/* Keyboard Input for Tag - When Tag Popup is open */}
      <KeyboardInput
        isOpen={isTagKeyboardOpen}
        onSendMessage={handleSendTagNote}
        onClose={() => setIsTagKeyboardOpen(false)}
        showInput={false}
      />

      {/* Upload Popup */}
      <UploadPopup
        isOpen={isUploadPopupOpen}
        onClose={() => setIsUploadPopupOpen(false)}
      />
    </motion.div>
  );
}