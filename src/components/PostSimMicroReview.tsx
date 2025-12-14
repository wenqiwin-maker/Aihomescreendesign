import { X, ChevronDown, ChevronUp, Play } from "lucide-react";
import { StatusBar } from "./StatusBar";
import { useState } from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import blufIcon from "../assets/bluf-icon.png";
import starIcon from "../assets/star-icon.png";
import neutralIcon from "../assets/neutral-icon.png";
import imgImageAiCharacter from "../assets/ai-character-static.png";
import { LiquidGlassButton } from "./shared/LiquidGlassButton";
import backIcon from "../assets/back-icon-dark.svg";
import closeIcon from "../assets/close-icon-dark.svg";

interface PostSimMicroReviewProps {
  onClose: () => void;
  onBack: () => void;
  onStartPractice: () => void;
  onWatchVideo?: () => void;
}

export function PostSimMicroReview({
  onClose,
  onBack,
  onStartPractice,
  onWatchVideo,
}: PostSimMicroReviewProps) {
  const [expandedStructure, setExpandedStructure] = useState<
    string | null
  >("bluf");
  const [selectedStructure, setSelectedStructure] =
    useState<string>("bluf");

  const handleSelectStructure = (structureId: string) => {
    setSelectedStructure(structureId);
    setExpandedStructure(structureId);
  };

  const structures = [
    {
      id: "bluf",
      emoji: "🎯",
      icon: blufIcon,
      title: "BLUF + CTA",
      subtitle: "Bottom Line Up Front + Call to Action",
      bgColor: "rgba(59, 130, 246, 0.082)",
      selected: true,
      content: [
        {
          label: "Ask",
          text: "I'd like to apply for SWE III in Q3.",
        },
        {
          label: "Why",
          text: "In the last two quarters, I led {Project X}, delivering key features ahead of schedule.",
        },
        {
          label: "Next steps",
          text: "Please confirm the review window by this Friday and let me know if you need additional documentation.",
        },
      ],
    },
    {
      id: "star",
      emoji: "⭐",
      icon: starIcon,
      title: "STAR Method",
      subtitle: "Situation, Task, Action, Result",
      bgColor: "#F2EEFC",
      selected: false,
      content: [
        {
          label: "Situation",
          text: "Our team was behind on Q2 deliverables with a critical deadline approaching.",
        },
        {
          label: "Task",
          text: "I needed to coordinate with cross-functional teams to get back on track.",
        },
        {
          label: "Action",
          text: "I organized daily standups, redistributed workload, and implemented better tracking.",
        },
        {
          label: "Result",
          text: "We delivered on time with 98% quality score and improved team velocity by 30%.",
        },
      ],
    },
    {
      id: "problem",
      emoji: "💡",
      icon: neutralIcon,
      title: "Problem-Solution",
      subtitle:
        "Clear problem framing with actionable solution",
      bgColor: "#E8F6F3",
      selected: false,
      content: [
        {
          label: "Problem",
          text: "Current deployment process takes 3 hours and blocks the team from shipping updates quickly.",
        },
        {
          label: "Impact",
          text: "This delays customer-facing features and reduces our competitive advantage.",
        },
        {
          label: "Solution",
          text: "Implement automated CI/CD pipeline to reduce deployment time to under 20 minutes.",
        },
        {
          label: "Benefits",
          text: "Team can ship 5x more frequently, faster iteration cycles, and improved developer experience.",
        },
      ],
    },
  ];

  return (
    <div className="relative w-[390px] min-h-screen bg-[#F5F6FA] mx-auto">
      {/* Top Card - Sticky */}
      <div
        className="sticky top-0 z-50 bg-white overflow-hidden"
        style={{
          boxShadow:
            "0px 2px 6px rgba(0, 0, 0, 0.05), 0px 6px 15px rgba(0, 0, 0, 0.06)",
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
        }}
      >
        <StatusBar variant="dark" />

        {/* Toolbar */}
        <div className="flex justify-between items-start px-4 pb-[10px] h-[54px]">
          {/* Back Button */}
          <LiquidGlassButton onClick={onBack} size={44} className="flex-shrink-0">
            <img src={backIcon} alt="Back" className="w-[36px] h-[36px]" />
          </LiquidGlassButton>

          {/* Title */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <h1
              className="text-[#333333] text-center"
              style={{
                fontSize: "17px",
                fontWeight: 590,
                lineHeight: "22px",
                letterSpacing: "-0.43px",
              }}
            >
              Setup
            </h1>
          </div>

          {/* Close Button */}
          <LiquidGlassButton onClick={onClose} size={44} className="flex-shrink-0">
            <img src={closeIcon} alt="Close" className="w-[36px] h-[36px]" />
          </LiquidGlassButton>
        </div>

        {/* Progress */}
        <div className="flex items-start px-5 gap-1 h-[3px] bg-white">
          {/* Step 1 - Already filled */}
          <div
            className="w-[114px] h-[3px] rounded-sm"
            style={{
              background:
                "linear-gradient(90deg, #3E5FFF 41.06%, #00AEFF 100%)",
            }}
          />
          {/* Step 2 - Already filled */}
          <div
            className="w-[114px] h-[3px] rounded-sm"
            style={{
              background:
                "linear-gradient(90deg, #00AEFF 62.5%, #FF2AB4 100%)",
            }}
          />
          {/* Step 3 - Animated fill */}
          <div className="w-[114px] h-[3px] bg-[#E9EBF3] rounded-sm overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full h-full rounded-sm origin-left"
              style={{
                background:
                  "linear-gradient(90deg, #FF2AB4 0%, #FFB800 100%)",
              }}
            />
          </div>
        </div>

        {/* Instant Recap */}
        <motion.div 
          className="flex flex-col items-start px-5 pt-4 pb-5 gap-3 bg-white"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
        >
          <div className="flex justify-between items-start w-full">
            <span
              style={{
                fontSize: "17px",
                fontWeight: 600,
                lineHeight: "22px",
                color: "#333333",
              }}
            >
              Review Your Practice Setup
            </span>
          </div>

          {/* Summary Pills */}
          <div className="flex items-start gap-2 flex-wrap">
            <div className="flex items-center px-4 gap-2 h-9 bg-[#F5F6FA] rounded-full">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6 4.32C5.07216 4.32 4.32 5.07216 4.32 6C4.32 6.92784 5.07216 7.68 6 7.68C6.92784 7.68 7.68 6.92784 7.68 6C7.68 5.07216 6.92784 4.32 6 4.32ZM0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6Z"
                  fill="black"
                />
              </svg>
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: 510,
                  lineHeight: "18px",
                  letterSpacing: "-0.150391px",
                  color: "rgba(0, 0, 0, 0.9)",
                }}
              >
                Goal Type
              </span>
            </div>

            <div className="flex items-center px-4 gap-2 h-9 bg-[#F5F6FA] rounded-full">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.75736 10.2426C0.632141 9.11742 6.21849e-07 7.59129 6.91407e-07 5.99998L5.9865 5.99998C4.33585 5.99271 3 4.65236 3 3.00001C3 1.34315 4.34315 -2.62268e-07 6 -2.62268e-07C7.65686 -2.62268e-07 9 1.34315 9 3.00001C9 4.65236 7.66415 5.99271 6.0135 5.99998L12 5.99999C12 7.59129 11.3679 9.11742 10.2426 10.2426C9.11742 11.3679 7.5913 12 6 12C4.4087 12 2.88258 11.3679 1.75736 10.2426Z"
                  fill="#050505"
                />
              </svg>
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: 510,
                  lineHeight: "18px",
                  letterSpacing: "-0.150391px",
                  color: "rgba(0, 0, 0, 0.9)",
                }}
              >
                Manager
              </span>
            </div>

            <div className="flex items-center px-4 gap-2 h-9 bg-[#F5F6FA] rounded-full">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.61328 2.30469V3.00684H12.001V12H0V3.00684H2.50195V2.0752L4.50195 0H7.3916L9.61328 2.30469ZM4.28027 3.00684H7.83496V1.84473H4.28027V3.00684Z"
                  fill="#050505"
                />
              </svg>
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: 510,
                  lineHeight: "18px",
                  letterSpacing: "-0.150391px",
                  color: "rgba(0, 0, 0, 0.9)",
                }}
              >
                Work
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scrollable Content */}
      <motion.div 
        className="px-5 pt-6 pb-9 flex flex-col gap-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.12,
              delayChildren: 0.25,
            },
          },
        }}
      >
        {/* Communication Structure */}
        <motion.div 
          className="flex flex-col gap-3"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
          }}
        >
          <h2
            style={{
              fontSize: "28px",
              fontWeight: 600,
              lineHeight: "34px",
              color: "#333333",
            }}
          >
            AI-selected structure
          </h2>

          <div className="flex flex-col gap-3">
            {structures.map((structure) => (
              <button
                key={structure.id}
                onClick={() =>
                  handleSelectStructure(structure.id)
                }
                className="bg-white rounded-2xl text-left w-full"
                style={{
                  boxShadow:
                    "0px 2px 4px -4px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="p-4 flex flex-col gap-4">
                  {/* Header */}
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{
                          background: structure.icon
                            ? "transparent"
                            : structure.bgColor,
                        }}
                      >
                        {structure.icon ? (
                          <ImageWithFallback
                            src={structure.icon}
                            alt={structure.title}
                            className="w-full h-full rounded-lg object-cover"
                          />
                        ) : (
                          <span
                            style={{
                              fontSize: "20px",
                              lineHeight: "28px",
                            }}
                          >
                            {structure.emoji}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col">
                        <span
                          style={{
                            fontSize: "16px",
                            fontWeight: 510,
                            lineHeight: "24px",
                            letterSpacing: "-0.3125px",
                            color: "#101828",
                          }}
                        >
                          {structure.title}
                        </span>
                        <span
                          style={{
                            fontSize: "12px",
                            fontWeight: 274,
                            lineHeight: "16px",
                            color: "rgba(0, 0, 0, 0.6)",
                          }}
                        >
                          {structure.subtitle}
                        </span>
                      </div>
                    </div>

                    {selectedStructure === structure.id ? (
                      <div className="w-5 h-5 rounded-full bg-[#000000] flex items-center justify-center">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <path
                            d="M2 6L5 9L10 3"
                            stroke="white"
                            strokeWidth="1.17"
                          />
                        </svg>
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full border border-[#000000]" />
                    )}
                  </div>

                  {/* Content - Show when expanded */}
                  {expandedStructure === structure.id &&
                    structure.content.length > 0 && (
                      <div
                        className="flex flex-col gap-3 pt-4"
                        style={{
                          borderTop: "0.75px solid #F3F4F6",
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
                                  fontSize: "14px",
                                  fontWeight: 590,
                                  lineHeight: "20px",
                                  letterSpacing: "-0.150391px",
                                  color: "rgba(0, 0, 0, 0.9)",
                                }}
                              >
                                {item.label}
                              </span>
                              <span
                                style={{
                                  fontSize: "14px",
                                  fontWeight: 400,
                                  lineHeight: "20px",
                                  letterSpacing: "-0.150391px",
                                  color: "rgba(0, 0, 0, 0.9)",
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
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedStructure(
                        expandedStructure === structure.id
                          ? null
                          : structure.id,
                      );
                    }}
                    className="flex justify-center items-center py-2 gap-2 cursor-pointer"
                    style={{
                      borderTop: "0.75px solid #F3F4F6",
                    }}
                  >
                    {expandedStructure === structure.id ? (
                      <ChevronUp className="w-3 h-3 text-black/60" />
                    ) : (
                      <ChevronDown className="w-3 h-3 text-black/60" />
                    )}
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 400,
                        lineHeight: "20px",
                        letterSpacing: "-0.150391px",
                        color: "rgba(0, 0, 0, 0.6)",
                      }}
                    >
                      {expandedStructure === structure.id
                        ? "Hide"
                        : "See More"}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div 
          className="h-px bg-black/[0.078]"
          variants={{
            hidden: { opacity: 0, scaleX: 0 },
            visible: { opacity: 1, scaleX: 1, transition: { duration: 0.4, ease: "easeOut" } }
          }}
        />

        {/* Moments to Watch */}
        <motion.div 
          className="flex flex-col gap-3"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
          }}
        >
          <h2
            style={{
              fontSize: "14px",
              fontWeight: 510,
              lineHeight: "20px",
              letterSpacing: "-0.3125px",
              color: "rgba(0, 0, 0, 0.9)",
            }}
          >
            Moments to Watch
          </h2>

          <div
            className="bg-white rounded-[14px] overflow-hidden"
            style={{
              boxShadow:
                "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* Video Thumbnail */}
            <div
              onClick={onWatchVideo}
              className="relative w-full h-[150px] cursor-pointer overflow-hidden"
            >
              {/* Background Image */}
              <ImageWithFallback
                src={imgImageAiCharacter}
                alt="AI Character Preview"
                className="absolute inset-0 w-full h-full object-cover p-[0px] m-[0px]"
                style={{ objectPosition: "center -180px" }}
              />

              {/* Play Button */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div
                  className="w-16 h-16 rounded-full bg-white flex items-center justify-center"
                  style={{
                    boxShadow:
                      "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 8px 10px -6px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Play className="w-6 h-6 text-[#155DFC] fill-[#155DFC] ml-1" />
                </div>
              </div>

              {/* AI Demo Badge */}
              <div
                className="absolute left-3 top-[14px] flex items-center px-3 h-5 rounded-lg z-10"
                style={{
                  background: "rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(4px)",
                }}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="mr-2"
                >
                  <circle
                    cx="6"
                    cy="6"
                    r="5"
                    stroke="white"
                    strokeWidth="1"
                  />
                  <path
                    d="M4.5 6L5.5 7L7.5 5"
                    stroke="white"
                    strokeWidth="1"
                  />
                </svg>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 500,
                    lineHeight: "16px",
                    color: "#FFFFFF",
                  }}
                >
                  AI Demo
                </span>
              </div>

              {/* Duration Badge */}
              <div
                className="absolute right-[15px] top-3 flex items-center px-3 h-7 rounded-full z-10"
                style={{
                  background: "rgba(0, 0, 0, 0.4)",
                  backdropFilter: "blur(4px)",
                }}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="mr-1.5"
                >
                  <circle
                    cx="6"
                    cy="6"
                    r="5"
                    stroke="white"
                    strokeWidth="1"
                  />
                  <path
                    d="M6 3V6L8 8"
                    stroke="white"
                    strokeWidth="1"
                  />
                </svg>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 400,
                    lineHeight: "16px",
                    color: "#FFFFFF",
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
                    fontSize: "16px",
                    fontWeight: 510,
                    lineHeight: "24px",
                    letterSpacing: "-0.3125px",
                    color: "#101828",
                  }}
                >
                  Watch AI Demonstration
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "20px",
                    letterSpacing: "-0.150391px",
                    color: "#6A7282",
                  }}
                >
                  See how to approach your manager
                </span>
              </div>

              <button
                onClick={onWatchVideo}
                className="flex items-center justify-center py-2.5 h-[42px] border rounded-[21px]"
                style={{
                  borderColor: "#F3F4F6",
                  borderWidth: "1.49px",
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="mr-2"
                >
                  <circle
                    cx="7"
                    cy="7"
                    r="6"
                    stroke="#101828"
                    strokeWidth="1.33"
                  />
                  <path
                    d="M5.5 5L9 7L5.5 9V5Z"
                    stroke="#101828"
                    strokeWidth="1.33"
                  />
                </svg>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 510,
                    lineHeight: "20px",
                    letterSpacing: "-0.150391px",
                    color: "#101828",
                  }}
                >
                  Watch Video
                </span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Start Practice Button - Scrolls with content */}
        <motion.button
          onClick={onStartPractice}
          className="w-full h-12 rounded-[28px] flex items-center justify-center"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
          }}
          style={{
            backgroundColor: "#000000",
          }}
        >
          <span
            style={{
              fontSize: "16px",
              fontWeight: 590,
              lineHeight: "20px",
              letterSpacing: "-0.150391px",
              color: "#FFFFFF",
            }}
          >
            Start Practice
          </span>
        </motion.button>
      </motion.div>

    </div>
  );
}