import { X, ChevronDown, ChevronUp, Play } from "lucide-react";
import { StatusBar } from "./StatusBar";
import { useState } from "react";
import { motion } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import blufIcon from "figma:asset/c152f6ddc8f8cc8dd8ffc69c0a41a52dff0c6f72.png";
import starIcon from "figma:asset/b263585bdaba08a84842c9aaa8c1a9b4d330bda8.png";
import problemIcon from "figma:asset/85cf8a2e0bb1f20d8c8750e2e7d5f7cca09e5fc3.png";

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
      icon: problemIcon,
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
    <div className="relative w-full min-h-screen bg-[#F5F6FA]">
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
        {/* Status Bar */}
        <div
          className="flex justify-center items-center px-4 pt-[21px] pb-[19px] h-[62px]"
          style={{ gap: "154px" }}
        >
          {/* Time */}
          <div
            className="flex flex-row justify-center items-center"
            style={{
              padding: "2px 0px 0px",
              gap: "10px",
              width: "102px",
              height: "22px",
              flex: "none",
              order: 0,
              flexGrow: 1,
            }}
          >
            <span
              className="text-black text-center"
              style={{
                width: "37px",
                height: "22px",
                fontFamily: "SF Pro",
                fontStyle: "normal",
                fontSize: "17px",
                fontWeight: 590,
                lineHeight: "22px",
                color: "#000000",
                flex: "none",
                order: 0,
                flexGrow: 0,
              }}
            >
              9:41
            </span>
          </div>

          {/* Status Icons */}
          <div
            className="flex flex-row items-center pr-4"
            style={{
              gap: "7px",
              width: "102px",
              height: "22px",
              flex: "none",
              order: 1,
              flexGrow: 1,
            }}
          >
            <svg
              width="102"
              height="22"
              viewBox="0 0 102 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M31.365 6.53295C31.365 5.8999 30.8875 5.38672 30.2984 5.38672H29.2317C28.6426 5.38672 28.165 5.8999 28.165 6.53295V16.4669C28.165 17.0999 28.6426 17.6131 29.2317 17.6131H30.2984C30.8875 17.6131 31.365 17.0999 31.365 16.4669V6.53295ZM23.9309 7.832H24.9976C25.5867 7.832 26.0643 8.3575 26.0643 9.00574V16.4394C26.0643 17.0876 25.5867 17.6131 24.9976 17.6131H23.9309C23.3418 17.6131 22.8643 17.0876 22.8643 16.4394V9.00574C22.8643 8.3575 23.3418 7.832 23.9309 7.832ZM19.5992 10.481H18.5325C17.9434 10.481 17.4658 11.0132 17.4658 11.6697V16.4244C17.4658 17.0809 17.9434 17.6131 18.5325 17.6131H19.5992C20.1883 17.6131 20.6658 17.0809 20.6658 16.4244V11.6697C20.6658 11.0132 20.1883 10.481 19.5992 10.481ZM14.2984 12.9263H13.2317C12.6426 12.9263 12.165 13.4509 12.165 14.098V16.4414C12.165 17.0885 12.6426 17.6131 13.2317 17.6131H14.2984C14.8875 17.6131 15.365 17.0885 15.365 16.4414V14.098C15.365 13.4509 14.8875 12.9263 14.2984 12.9263Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M46.9365 7.80222C49.4236 7.80232 51.8157 8.72441 53.6182 10.3779C53.7539 10.5055 53.9709 10.5039 54.1045 10.3743L55.402 9.11081C55.4697 9.04505 55.5075 8.95597 55.5069 8.86329C55.5063 8.77061 55.4675 8.68197 55.399 8.61697C50.668 4.24226 43.2043 4.24226 38.4733 8.61697C38.4048 8.68192 38.3659 8.77054 38.3652 8.86322C38.3646 8.9559 38.4023 9.045 38.4699 9.11081L39.7678 10.3743C39.9014 10.5041 40.1185 10.5057 40.2542 10.3779C42.0569 8.7243 44.4492 7.80221 46.9365 7.80222ZM46.9332 12.0225C48.2905 12.0224 49.5994 12.5342 50.6055 13.4583C50.7416 13.5894 50.9559 13.5866 51.0886 13.4519L52.3759 12.1326C52.4437 12.0634 52.4813 11.9695 52.4803 11.8719C52.4793 11.7744 52.4398 11.6813 52.3707 11.6135C49.3068 8.72266 44.5621 8.72266 41.4983 11.6135C41.4291 11.6813 41.3896 11.7744 41.3887 11.872C41.3878 11.9696 41.4255 12.0635 41.4935 12.1326L42.7804 13.4519C42.913 13.5866 43.1274 13.5894 43.2635 13.4583C44.2689 12.5348 45.5768 12.0231 46.9332 12.0225ZM49.4576 14.816C49.4595 14.9214 49.4225 15.023 49.3552 15.0968L47.1785 17.5515C47.1147 17.6236 47.0277 17.6642 46.9369 17.6642C46.8462 17.6642 46.7592 17.6236 46.6954 17.5515L44.5183 15.0968C44.4511 15.0229 44.4141 14.9213 44.4161 14.816C44.4181 14.7106 44.4589 14.6108 44.5289 14.5402C45.919 13.2263 47.9549 13.2263 49.345 14.5402C49.4149 14.6109 49.4557 14.7107 49.4576 14.816Z"
                fill="black"
              />
              <path
                d="M81.0068 5C83.0573 5 84.0827 5.00026 84.8887 5.34277C85.9131 5.77816 86.7287 6.59373 87.1641 7.61816C87.5066 8.42416 87.5068 9.4495 87.5068 11.5C87.5068 13.5505 87.5066 14.5758 87.1641 15.3818L87.0781 15.5713C86.626 16.5067 85.8491 17.249 84.8887 17.6572L84.7344 17.7178C83.9501 17.9999 82.929 18 81.0068 18H69.0068L67.6484 17.9951C66.4573 17.9791 65.7295 17.9141 65.125 17.6572C64.1645 17.249 63.3876 16.5067 62.9355 15.5713L62.8496 15.3818C62.5071 14.5758 62.5068 13.5505 62.5068 11.5C62.5068 9.57788 62.5069 8.55669 62.7891 7.77246L62.8496 7.61816C63.2578 6.65771 64.0002 5.88081 64.9355 5.42871L65.125 5.34277C65.7295 5.0859 66.4573 5.02094 67.6484 5.00488L69.0068 5H81.0068ZM69.0068 6C67.9676 6 67.2394 6.00022 66.6689 6.04004C66.108 6.07919 65.7746 6.15311 65.5166 6.2627C64.7303 6.59683 64.1037 7.22347 63.7695 8.00977C63.6599 8.2678 63.586 8.6012 63.5469 9.16211C63.5071 9.73258 63.5068 10.4608 63.5068 11.5C63.5068 12.5392 63.5071 13.2674 63.5469 13.8379C63.586 14.3988 63.6599 14.7322 63.7695 14.9902C64.1037 15.7765 64.7303 16.4032 65.5166 16.7373C65.7746 16.8469 66.108 16.9208 66.6689 16.96C67.2394 16.9998 67.9676 17 69.0068 17H81.0068C82.0461 17 82.7743 16.9998 83.3447 16.96C83.9056 16.9208 84.239 16.8469 84.4971 16.7373C85.2834 16.4032 85.91 15.7765 86.2441 14.9902C86.3537 14.7322 86.4276 14.3988 86.4668 13.8379C86.5066 13.2674 86.5068 12.5392 86.5068 11.5C86.5068 10.4608 86.5066 9.73258 86.4668 9.16211C86.4276 8.6012 86.3537 8.2678 86.2441 8.00977C85.91 7.22347 85.2834 6.59683 84.4971 6.2627C84.239 6.15311 83.9056 6.07919 83.3447 6.04004C82.7743 6.00022 82.0461 6 81.0068 6H69.0068ZM81.5068 7C82.9068 7 83.6068 7.00007 84.1416 7.27246C84.612 7.51214 84.9947 7.89483 85.2344 8.36523C85.5068 8.89999 85.5068 9.60002 85.5068 11V12C85.5068 13.4 85.5068 14.1 85.2344 14.6348C84.9947 15.1052 84.612 15.4879 84.1416 15.7275C83.6068 15.9999 82.9068 16 81.5068 16H68.5068C67.1069 16 66.4068 15.9999 65.8721 15.7275C65.4017 15.4879 65.019 15.1052 64.7793 14.6348C64.5069 14.1 64.5068 13.4 64.5068 12V11C64.5068 9.60002 64.5069 8.89999 64.7793 8.36523C65.019 7.89483 65.4017 7.51214 65.8721 7.27246C66.4068 7.00007 67.1069 7 68.5068 7H81.5068ZM88.5068 9.78125C89.3116 10.1264 89.835 10.9297 89.835 11.8193C89.8348 12.7088 89.3114 13.5113 88.5068 13.8564V9.78125Z"
                fill="black"
              />
            </svg>
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex justify-between items-start px-4 pb-[10px] h-[54px]">
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

          {/* Title */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <h1
              className="text-[#333333] text-center"
              style={{
                fontFamily: "SF Pro",
                fontSize: "17px",
                fontWeight: 590,
                lineHeight: "22px",
                letterSpacing: "-0.43px",
              }}
            >
              Setup
            </h1>
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
        <div className="flex flex-col items-start px-5 pt-4 pb-5 gap-3 bg-white">
          <div className="flex justify-between items-start w-full">
            <span
              style={{
                fontFamily: "SF Pro",
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
                  fontFamily: "SF Pro",
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
                  fontFamily: "SF Pro",
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
                  fontFamily: "SF Pro",
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
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="px-5 pt-6 pb-9 flex flex-col gap-10">
        {/* Communication Structure */}
        <div className="flex flex-col gap-3">
          <h2
            style={{
              fontFamily: "SF Pro",
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
                            fontFamily: "SF Pro",
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
                            fontFamily: "SF Pro",
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
                                  fontFamily: "SF Pro",
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
                                  fontFamily: "SF Pro",
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
                        fontFamily: "SF Pro",
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
        </div>

        {/* Divider */}
        <div className="h-px bg-black/[0.078]" />

        {/* Moments to Watch */}
        <div className="flex flex-col gap-3">
          <h2
            style={{
              fontFamily: "SF Pro",
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
              className="relative w-full h-[150px]"
              style={{
                background:
                  "linear-gradient(135deg, #583EFF 0%, #3E5FFF 100%)",
              }}
            >
              {/* Play Button */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
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
                className="absolute left-3 top-[14px] flex items-center px-3 h-5 rounded-lg"
                style={{
                  background: "rgba(255, 255, 255, 0.2)",
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
                    fontFamily: "SF Pro",
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
                className="absolute right-[15px] top-3 flex items-center px-3 h-7 rounded-full"
                style={{
                  background: "rgba(0, 0, 0, 0.4)",
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
                    fontFamily: "SF Pro",
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
                    fontFamily: "SF Pro",
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
                    fontFamily: "SF Pro",
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
                    fontFamily: "SF Pro",
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
        </div>

        {/* Start Practice Button - Scrolls with content */}
        <button
          onClick={onStartPractice}
          className="w-full h-12 rounded-[28px] flex items-center justify-center"
          style={{
            backgroundColor: "#000000",
          }}
        >
          <span
            style={{
              fontFamily: "SF Pro",
              fontSize: "16px",
              fontWeight: 590,
              lineHeight: "20px",
              letterSpacing: "-0.150391px",
              color: "#FFFFFF",
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