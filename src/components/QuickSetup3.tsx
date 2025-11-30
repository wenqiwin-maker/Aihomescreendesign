import { Sparkles, Plus, AlertCircle, X } from "lucide-react";
import { StatusBar } from "./StatusBar";
import { useState, useRef } from "react";
import { motion } from "motion/react";
import { Textarea } from "./ui/textarea";
import selectedBg from "figma:asset/71f51ddbf8b2b5d764325230f5ad1453eab75503.png";
import visualStyleSelectedBg from "figma:asset/71f51ddbf8b2b5d764325230f5ad1453eab75503.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import cooperativeIconImg from "figma:asset/cd2bbe5fa8213b135a606881b5a27264dc9e1c6c.png";
import cooperativeIconWhite from "figma:asset/cooperative-icon-white.png";
import neutralIconImg from "figma:asset/35145143825e4bf11d0c403ae2e5cf77e43e5169.png";
import neutralIconWhite from "figma:asset/neutral-icon-white.png";
import defensiveIconImg from "figma:asset/aecda9bb676725ffc4c0bd9e0e5d4473c68050da.png";
import defensiveIconWhite from "figma:asset/defensive-icon-white.png";
import cooperativeGradientBgImg from "figma:asset/062ce7dcfc49abadde2a266df1690c5121ad114d.png";
import neutralGradientBgImg from "figma:asset/8ff5c1824480bd6fb5a82d90de695f4904a871ce.png";
import defensiveGradientBgImg from "figma:asset/41c04c22b2cb16a5bf232723ddbff33e3094d360.png";

const cooperativeIcon = cooperativeIconImg;
const neutralIcon = neutralIconImg;
const defensiveIcon = defensiveIconImg;

// Gradient backgrounds for each relationship state
const cooperativeGradientBg = cooperativeGradientBgImg;
const neutralGradientBg = neutralGradientBgImg;
const defensiveGradientBg = defensiveGradientBgImg;

interface QuickSetup3Props {
  onClose: () => void;
  onBack: () => void;
  onStartPractice: () => void;
}

export function QuickSetup3({
  onClose,
  onBack,
  onStartPractice,
}: QuickSetup3Props) {
  const [selectedGoalType, setSelectedGoalType] = useState<
    string | null
  >(null);
  const [customGoal, setCustomGoal] = useState("");
  const [selectedConstraint, setSelectedConstraint] = useState<
    string | null
  >(null);
  const [evidence, setEvidence] = useState("");
  const [directness, setDirectness] = useState(50);
  const [supportiveness, setSupportiveness] = useState(50);
  const [timePressure, setTimePressure] = useState(50);
  const [relationshipState, setRelationshipState] =
    useState<string>("neutral");
  const [avatarChoice, setAvatarChoice] =
    useState<string>("default");
  const [visualStyle, setVisualStyle] = useState<string>(
    "soft-professional",
  );
  const [showPhotoSheet, setShowPhotoSheet] = useState(false);
  const [uploadedPhoto, setUploadedPhoto] = useState<
    string | null
  >(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const goalTypes = [
    "Promotion",
    "Compensation",
    "Resources",
    "Priority",
    "Annual Review",
    "Repair Relationship",
  ];
  const constraints = [
    "Keep Relationship",
    "Keep Trust",
    "Focus Issues",
    "Private Setting",
  ];

  const handleChooseFromPhotos = () => {
    setShowPhotoSheet(false);
    fileInputRef.current?.click();
  };

  const handleTakePhoto = () => {
    setShowPhotoSheet(false);
    cameraInputRef.current?.click();
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedPhoto(reader.result as string);
        setAvatarChoice("upload");
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative w-[390px] h-[844px] bg-white overflow-hidden mx-auto">
      {/* Status Bar */}
      <div className="flex justify-center items-center px-4 pt-[21px] pb-[19px] gap-[154px] h-[62px]">
        <div className="flex-1 flex justify-center items-center">
          <span
            className="text-black text-center"
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
        <StatusBar />
      </div>

      {/* Sheet Container */}
      <div
        className="absolute left-0 right-0 overflow-y-auto"
        style={{
          top: "62px",
          bottom: "0px",
          backgroundColor: "#F5F6FA",
          boxShadow: "0px 15px 75px rgba(0, 0, 0, 0.18)",
          borderRadius: "38px 38px 0px 0px",
        }}
      >
        {/* Toolbar */}
        <div className="flex flex-col items-center pb-2.5 w-full">
          {/* Grabber */}
          <div className="flex flex-col items-start pt-[5px] w-9 h-4">
            <div
              className="w-9 h-[5px] rounded-full"
              style={{
                background: "#CCCCCC",
                mixBlendMode: "plus-darker",
              }}
            />
          </div>

          {/* Title and Controls */}
          <div className="flex justify-between items-center px-4 gap-[66px] w-full h-11 mt-2">
            {/* Leading Button */}
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

            {/* Spacer */}
            <div className="w-2 h-11" />

            {/* Title */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[13px]">
              <h1
                className="text-[#333333] text-center"
                style={{
                  fontFamily: "SF Pro",
                  fontSize: "17px",
                  fontWeight: 590,
                  lineHeight: "22px",
                  letterSpacing: "-0.43px",
                  mixBlendMode: "plus-darker",
                }}
              >
                Setup
              </h1>
            </div>
          </div>
        </div>

        {/* QuickSetup Content */}
        <div className="flex flex-col items-start pt-8 px-5 gap-10 pb-[30px]">
          {/* Title */}
          <div className="flex flex-col gap-2">
            <h2
              style={{
                fontFamily: "SF Pro",
                fontSize: "28px",
                fontWeight: 600,
                lineHeight: "34px",
                color: "#333333",
              }}
            >
              Advanced Setup
            </h2>
            <p
              style={{
                fontFamily: "SF Pro",
                fontSize: "15px",
                fontWeight: 400,
                lineHeight: "20px",
                color: "rgba(60, 60, 67, 0.6)",
              }}
            >
              AI will play your manager, client, or partner to
              help you practice before the real talk
            </p>
          </div>

          {/* Form Container */}
          <div className="flex flex-col gap-10 w-full">
            {/* GOAL TYPE SECTION */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col">
                <h3
                  style={{
                    fontFamily: "SF Pro",
                    fontSize: "15px",
                    fontWeight: 600,
                    lineHeight: "20px",
                    color: "#333333",
                  }}
                >
                  Goal Type
                </h3>
                <p
                  style={{
                    fontFamily: "SF Pro",
                    fontSize: "15px",
                    fontWeight: 400,
                    lineHeight: "20px",
                    color: "rgba(60, 60, 67, 0.6)",
                  }}
                >
                  What do you want to achieve in this
                  conversation
                </p>
              </div>
              <div
                className="rounded-xl px-4 pt-5 pb-6"
                style={{
                  backgroundColor: "#FFFFFF",
                  boxShadow:
                    "0px 2px 4px 0px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="flex flex-col gap-3">
                  <div className="grid grid-cols-2 gap-3">
                    {goalTypes.map((type) => (
                      <button
                        key={type}
                        onClick={() =>
                          setSelectedGoalType(type)
                        }
                        className="flex justify-center items-center px-3 h-[47px] rounded-3xl border transition-all"
                        style={{
                          borderColor:
                            selectedGoalType === type
                              ? "transparent"
                              : "#E9EBF3",
                          backgroundImage:
                            selectedGoalType === type
                              ? `url(${selectedBg})`
                              : "none",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "SF Pro",
                            fontSize: "16px",
                            fontWeight: 400,
                            lineHeight: "20px",
                            letterSpacing: "-0.3125px",
                            color:
                              selectedGoalType === type
                                ? "#FFFFFF"
                                : "#0A0A0A",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {type}
                        </span>
                      </button>
                    ))}
                  </div>
                  <input
                    type="text"
                    value={customGoal}
                    onChange={(e) =>
                      setCustomGoal(e.target.value)
                    }
                    placeholder="Other, e.g., Ask for a feedback..."
                    className="w-full h-12 pl-5 pr-3 border border-[#E9EBF3] rounded-[26px] outline-none bg-transparent"
                    style={{
                      fontFamily: "SF Pro",
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "20px",
                      letterSpacing: "-0.150391px",
                      color: customGoal ? "#0A0A0A" : "#717182",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* CONSTRAINTS SECTION */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col">
                <h3
                  style={{
                    fontFamily: "SF Pro",
                    fontSize: "15px",
                    fontWeight: 600,
                    lineHeight: "20px",
                    color: "#333333",
                  }}
                >
                  Constraints
                </h3>
                <p
                  style={{
                    fontFamily: "SF Pro",
                    fontSize: "15px",
                    fontWeight: 400,
                    lineHeight: "20px",
                    color: "rgba(60, 60, 67, 0.6)",
                  }}
                >
                  Things you need to be careful about
                </p>
              </div>
              <motion.div
                className="rounded-xl px-4 pt-5 pb-6"
                whileHover={{ 
                  boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
                  transition: { duration: 0.2 } 
                }}
                whileTap={{ scale: 0.98 }}
                style={{
                  backgroundColor: "#FFFFFF",
                  boxShadow:
                    "0px 2px 8px rgba(0, 0, 0, 0.08)",
                }}
              >
                <div className="grid grid-cols-2 gap-3">
                  {constraints.map((constraint) => (
                    <button
                      key={constraint}
                      onClick={() =>
                        setSelectedConstraint(constraint)
                      }
                      className="flex justify-center items-center px-3 h-[47px] rounded-3xl border transition-all"
                      style={{
                        borderColor:
                          selectedConstraint === constraint
                            ? "transparent"
                            : "#E9EBF3",
                        backgroundImage:
                          selectedConstraint === constraint
                            ? `url(${selectedBg})`
                            : "none",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "SF Pro",
                          fontSize: "16px",
                          fontWeight: 400,
                          lineHeight: "20px",
                          letterSpacing: "-0.3125px",
                          color:
                            selectedConstraint === constraint
                              ? "#FFFFFF"
                              : "#0A0A0A",
                          textAlign: "center",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {constraint}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* EVIDENCE SECTION */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col">
                <div
                  className="flex justify-between items-center"
                  style={{ height: "20px" }}
                >
                  <h3
                    style={{
                      fontFamily: "SF Pro",
                      fontSize: "15px",
                      fontWeight: 600,
                      lineHeight: "20px",
                      color: "#333333",
                    }}
                  >
                    Evidence (Optional)
                  </h3>
                  <button className="flex items-center gap-1 px-0 py-1.5 rounded-lg">
                    <Sparkles
                      className="w-4 h-4 text-[#8C00FF]"
                      strokeWidth={1.33}
                    />
                    <span
                      className="text-[#8C00FF]"
                      style={{
                        fontFamily: "SF Pro",
                        fontSize: "14px",
                        fontWeight: 510,
                        lineHeight: "20px",
                        letterSpacing: "-0.150391px",
                      }}
                    >
                      AI Refine
                    </span>
                  </button>
                </div>
                <p
                  style={{
                    fontFamily: "SF Pro",
                    fontSize: "15px",
                    fontWeight: 400,
                    lineHeight: "20px",
                    color: "rgba(60, 60, 67, 0.6)",
                  }}
                >
                  Specific examples to back up your points
                </p>
              </div>
              <motion.div
                className="rounded-xl px-4 pt-5 pb-6"
                whileHover={{ 
                  boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
                  transition: { duration: 0.2 } 
                }}
                whileTap={{ scale: 0.98 }}
                style={{
                  backgroundColor: "#FFFFFF",
                  boxShadow:
                    "0px 2px 8px rgba(0, 0, 0, 0.08)",
                }}
              >
                <div className="flex flex-col gap-4">
                  <Textarea
                    value={evidence}
                    onChange={(e) =>
                      setEvidence(e.target.value)
                    }
                    placeholder="Situation: When..., Behavior: You..., Impact: It resulted in..."
                    className="min-h-[100px] border-[#E9EBF3] bg-transparent rounded-2xl resize-none pl-5 pr-3 py-3"
                    style={{
                      fontFamily: "SF Pro",
                      fontSize: "14px",
                      fontWeight: 400,
                      lineHeight: "19px",
                      letterSpacing: "-0.150391px",
                      color: evidence ? "#0A0A0A" : "#717182",
                    }}
                  />
                  <button className="flex justify-center items-center gap-1 py-3.5 h-12 border border-black/10 rounded-3xl bg-transparent">
                    <Plus
                      className="w-4 h-4 text-[#0A0A0A]"
                      strokeWidth={1.33}
                    />
                    <span
                      style={{
                        fontFamily: "SF Pro",
                        fontSize: "14px",
                        fontWeight: 510,
                        lineHeight: "20px",
                        letterSpacing: "-0.150391px",
                        color: "#0A0A0A",
                      }}
                    >
                      Add Evidence
                    </span>
                  </button>
                </div>
              </motion.div>
            </div>

            {/* CONVERSATION DYNAMICS SECTION */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col">
                <h3
                  style={{
                    fontFamily: "SF Pro",
                    fontSize: "15px",
                    fontWeight: 600,
                    lineHeight: "20px",
                    color: "#333333",
                  }}
                >
                  Conversation Dynamics
                </h3>
                <p
                  style={{
                    fontFamily: "SF Pro",
                    fontSize: "15px",
                    fontWeight: 400,
                    lineHeight: "20px",
                    color: "rgba(60, 60, 67, 0.6)",
                  }}
                >
                  Set the tone and difficulty of the practice
                </p>
              </div>
              <motion.div
                className="rounded-xl px-4 pt-5 pb-6"
                whileHover={{ 
                  boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
                  transition: { duration: 0.2 } 
                }}
                whileTap={{ scale: 0.98 }}
                style={{
                  backgroundColor: "#FFFFFF",
                  boxShadow:
                    "0px 2px 8px rgba(0, 0, 0, 0.08)",
                }}
              >
                <div className="flex flex-col gap-6">
                  {/* Relationship State */}
                  <div className="flex flex-col gap-3">
                    <label
                      style={{
                        fontFamily: "SF Pro",
                        fontSize: "15px",
                        fontWeight: 600,
                        lineHeight: "20px",
                        color: "#333333",
                      }}
                    >
                      1. Relationship State
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        {
                          id: "cooperative",
                          label: "Cooperative",
                        },
                        { id: "neutral", label: "Neutral" },
                        { id: "defensive", label: "Defensive" },
                      ].map((state) => (
                        <button
                          key={state.id}
                          onClick={() =>
                            setRelationshipState(state.id)
                          }
                          className="flex flex-col items-center justify-center gap-2 rounded-[10px] border transition-all"
                          style={{
                            height: "84px",
                            borderColor:
                              relationshipState === state.id
                                ? "transparent"
                                : "#E5E7EB",
                            borderWidth:
                              relationshipState === state.id
                                ? "0"
                                : "1px",
                            backgroundImage:
                              relationshipState === state.id
                                ? state.id === "cooperative"
                                  ? `url(${cooperativeGradientBg})`
                                  : state.id === "neutral"
                                    ? `url(${neutralGradientBg})`
                                    : `url(${defensiveGradientBg})`
                                : "none",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        >
                          {state.id === "cooperative" && (
                            <img
                              src={cooperativeIcon}
                              alt="Cooperative"
                              className="w-6 h-6 object-contain"
                              style={{
                                filter:
                                  relationshipState === state.id
                                    ? "brightness(0) invert(1)"
                                    : "none",
                              }}
                            />
                          )}
                          {state.id === "neutral" && (
                            <img
                              src={neutralIcon}
                              alt="Neutral"
                              className="w-6 h-6 object-contain"
                              style={{
                                filter:
                                  relationshipState === state.id
                                    ? "brightness(0) invert(1)"
                                    : "none",
                              }}
                            />
                          )}
                          {state.id === "defensive" && (
                            <img
                              src={defensiveIcon}
                              alt="Defensive"
                              className="w-6 h-6 object-contain"
                              style={{
                                filter:
                                  relationshipState === state.id
                                    ? "brightness(0) invert(1)"
                                    : "none",
                              }}
                            />
                          )}
                          <span
                            style={{
                              fontFamily: "SF Pro",
                              fontSize: "14px",
                              fontWeight: 500,
                              lineHeight: "20px",
                              letterSpacing: "-0.150391px",
                              color:
                                relationshipState === state.id
                                  ? "#FFFFFF"
                                  : "#0A0A0A",
                            }}
                          >
                            {state.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Counterpart Style */}
                  <div className="flex flex-col gap-5">
                    <label
                      style={{
                        fontFamily: "SF Pro",
                        fontSize: "14px",
                        fontWeight: 500,
                        lineHeight: "20px",
                        letterSpacing: "-0.150391px",
                        color: "#0A0A0A",
                      }}
                    >
                      2. Counterpart Style
                    </label>

                    {/* Directness Slider */}
                    <div className="flex flex-col">
                      <div
                        className="flex justify-between items-center"
                        style={{ height: "20px" }}
                      >
                        <span
                          style={{
                            fontFamily: "SF Pro",
                            fontSize: "14px",
                            fontWeight: 500,
                            lineHeight: "20px",
                            letterSpacing: "-0.150391px",
                            color: "#0A0A0A",
                          }}
                        >
                          Directness
                        </span>
                        <span
                          style={{
                            fontFamily: "SF Pro",
                            fontSize: "16px",
                            fontWeight: 400,
                            lineHeight: "20px",
                            textAlign: "right",
                            letterSpacing: "-0.3125px",
                            color: "rgba(0, 0, 0, 0.6)",
                          }}
                        >
                          {directness}%
                        </span>
                      </div>
                      <div className="relative w-full h-[12px] mt-1">
                        <div
                          className="absolute w-full h-[12px] bg-[#ECECF0] rounded-full"
                          style={{
                            border:
                              "0.75px solid rgba(0, 0, 0, 0.1)",
                            boxSizing: "border-box",
                          }}
                        />
                        <div
                          className="absolute h-[12px] rounded-l-full rounded-r-full overflow-hidden"
                          style={{
                            width: `${directness}%`,
                          }}
                        >
                          <div
                            className="absolute h-[12px] left-0"
                            style={{
                              width: "320px",
                              background:
                                "linear-gradient(90deg, #3E5FFF 0%, #8C00FF 35%, #D90098 100%)",
                            }}
                          />
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={directness}
                          onChange={(e) =>
                            setDirectness(
                              Number(e.target.value),
                            )
                          }
                          className="absolute w-full h-[12px] opacity-0 cursor-pointer"
                        />
                        <div
                          className="absolute bg-white border rounded-full shadow-sm"
                          style={{
                            width: "6px",
                            height: "6px",
                            left: `calc(${directness}% - 9px)`,
                            top: "3px",
                            borderColor: "#D90098",
                            boxShadow:
                              "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)",
                          }}
                        />
                      </div>
                      <div className="flex justify-between mt-[6px]">
                        <span
                          style={{
                            fontFamily: "SF Pro",
                            fontSize: "12px",
                            lineHeight: "16px",
                            letterSpacing: "-0.3125px",
                            color: "rgba(0, 0, 0, 0.6)",
                          }}
                        >
                          Indirect
                        </span>
                        <span
                          style={{
                            fontFamily: "SF Pro",
                            fontSize: "12px",
                            lineHeight: "16px",
                            textAlign: "right",
                            letterSpacing: "-0.3125px",
                            color: "rgba(0, 0, 0, 0.6)",
                          }}
                        >
                          Very Direct
                        </span>
                      </div>
                    </div>

                    {/* Supportiveness Slider */}
                    <div className="flex flex-col">
                      <div
                        className="flex justify-between items-center"
                        style={{ height: "20px" }}
                      >
                        <span
                          style={{
                            fontFamily: "SF Pro",
                            fontSize: "14px",
                            fontWeight: 500,
                            lineHeight: "14px",
                            letterSpacing: "-0.150391px",
                            color: "#0A0A0A",
                          }}
                        >
                          Supportiveness
                        </span>
                        <span
                          style={{
                            fontFamily: "SF Pro",
                            fontSize: "16px",
                            fontWeight: 400,
                            lineHeight: "24px",
                            textAlign: "right",
                            letterSpacing: "-0.3125px",
                            color: "rgba(0, 0, 0, 0.6)",
                          }}
                        >
                          {supportiveness}%
                        </span>
                      </div>
                      <div className="relative w-full h-[12px] mt-1">
                        <div
                          className="absolute w-full h-[12px] bg-[#ECECF0] rounded-full"
                          style={{
                            border:
                              "0.75px solid rgba(0, 0, 0, 0.1)",
                            boxSizing: "border-box",
                          }}
                        />
                        {/* Dots background */}
                        <div className="absolute w-full h-[12px] flex items-center px-[10px] z-[1]">
                          <div className="w-full h-[4px]">
                            <svg className="w-full h-full" viewBox="0 0 334 4" fill="none" preserveAspectRatio="none">
                              <circle cx="2" cy="2" fill="black" fillOpacity="0.2" r="2" />
                              <circle cx="84.5" cy="2" fill="black" fillOpacity="0.2" r="2" />
                              <circle cx="167" cy="2" fill="black" fillOpacity="0.2" r="2" />
                              <circle cx="249.5" cy="2" fill="black" fillOpacity="0.2" r="2" />
                              <circle cx="332" cy="2" fill="black" fillOpacity="0.2" r="2" />
                            </svg>
                          </div>
                        </div>
                        <div
                          className="absolute h-[12px] rounded-l-full rounded-r-full overflow-hidden z-[2]"
                          style={{
                            width: `${supportiveness}%`,
                          }}
                        >
                          <div
                            className="absolute h-[12px] left-0"
                            style={{
                              width: "320px",
                              background:
                                "linear-gradient(90deg, #3E5FFF 0%, #8C00FF 35%, #D90098 100%)",
                            }}
                          />
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={supportiveness}
                          onChange={(e) =>
                            setSupportiveness(
                              Number(e.target.value),
                            )
                          }
                          className="absolute w-full h-[12px] opacity-0 cursor-pointer z-10"
                        />
                        <div
                          className="absolute bg-white border rounded-full shadow-sm z-[3]"
                          style={{
                            width: "6px",
                            height: "6px",
                            left: `calc(${supportiveness}% - 9px)`,
                            top: "3px",
                            borderColor: "#D90098",
                            boxShadow:
                              "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)",
                          }}
                        />
                      </div>
                      <div className="flex justify-between mt-[6px]">
                        <span
                          style={{
                            fontFamily: "SF Pro",
                            fontSize: "12px",
                            lineHeight: "16px",
                            letterSpacing: "-0.3125px",
                            color: "rgba(0, 0, 0, 0.6)",
                          }}
                        >
                          Very Supportive
                        </span>
                        <span
                          style={{
                            fontFamily: "SF Pro",
                            fontSize: "12px",
                            lineHeight: "16px",
                            letterSpacing: "-0.3125px",
                            color: "rgba(0, 0, 0, 0.6)",
                          }}
                        >
                          Critical
                        </span>
                      </div>
                    </div>

                    {/* Time Pressure Slider */}
                    <div className="flex flex-col">
                      <div
                        className="flex justify-between items-center"
                        style={{ height: "20px" }}
                      >
                        <span
                          style={{
                            fontFamily: "SF Pro",
                            fontSize: "14px",
                            fontWeight: 500,
                            lineHeight: "14px",
                            letterSpacing: "-0.150391px",
                            color: "#0A0A0A",
                          }}
                        >
                          Time Pressure
                        </span>
                        <span
                          style={{
                            fontFamily: "SF Pro",
                            fontSize: "16px",
                            fontWeight: 400,
                            lineHeight: "24px",
                            textAlign: "right",
                            letterSpacing: "-0.3125px",
                            color: "rgba(0, 0, 0, 0.6)",
                          }}
                        >
                          {timePressure}%
                        </span>
                      </div>
                      <div className="relative w-full h-[12px] mt-1">
                        <div
                          className="absolute w-full h-[12px] bg-[#ECECF0] rounded-full"
                          style={{
                            border:
                              "0.75px solid rgba(0, 0, 0, 0.1)",
                            boxSizing: "border-box",
                          }}
                        />
                        <div
                          className="absolute h-[12px] rounded-l-full rounded-r-full overflow-hidden"
                          style={{
                            width: `${timePressure}%`,
                          }}
                        >
                          <div
                            className="absolute h-[12px] left-0"
                            style={{
                              width: "320px",
                              background:
                                "linear-gradient(90deg, #3E5FFF 0%, #8C00FF 35%, #D90098 100%)",
                            }}
                          />
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={timePressure}
                          onChange={(e) =>
                            setTimePressure(
                              Number(e.target.value),
                            )
                          }
                          className="absolute w-full h-[12px] opacity-0 cursor-pointer"
                        />
                        <div
                          className="absolute bg-white border rounded-full shadow-sm"
                          style={{
                            width: "6px",
                            height: "6px",
                            left: `calc(${timePressure}% - 9px)`,
                            top: "3px",
                            borderColor: "#D90098",
                            boxShadow:
                              "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)",
                          }}
                        />
                      </div>
                      <div className="flex justify-between mt-[6px]">
                        <span
                          style={{
                            fontFamily: "SF Pro",
                            fontSize: "12px",
                            lineHeight: "16px",
                            letterSpacing: "-0.3125px",
                            color: "rgba(0, 0, 0, 0.6)",
                          }}
                        >
                          Urgent
                        </span>
                        <span
                          style={{
                            fontFamily: "SF Pro",
                            fontSize: "12px",
                            lineHeight: "16px",
                            letterSpacing: "-0.3125px",
                            color: "rgba(0, 0, 0, 0.6)",
                          }}
                        >
                          Relaxed
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* AVATAR APPEARANCE SECTION */}
              <div className="flex flex-col gap-3 mt-2">
                <div className="flex flex-col">
                  <h3
                    style={{
                      fontFamily: "SF Pro",
                      fontSize: "14px",
                      fontWeight: 500,
                      lineHeight: "20px",
                      letterSpacing: "-0.150391px",
                      color: "rgba(0, 0, 0, 0.9)",
                    }}
                  >
                    Avatar Appearance
                  </h3>
                  <p
                    style={{
                      fontFamily: "SF Pro",
                      fontSize: "14px",
                      fontWeight: 300,
                      lineHeight: "20px",
                      letterSpacing: "-0.150391px",
                      color: "rgba(0, 0, 0, 0.6)",
                    }}
                  >
                    Choose how your counterpart looks
                  </p>
                </div>
                <motion.div
                  className="rounded-xl px-4 pt-5 pb-6"
                  whileHover={{ 
                    boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
                    transition: { duration: 0.2 } 
                  }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    backgroundColor: "#FFFFFF",
                    boxShadow:
                      "0px 2px 8px rgba(0, 0, 0, 0.08)",
                  }}
                >
                  <div className="flex flex-col gap-6">
                    {/* Avatar Choice */}
                    <div className="flex flex-col gap-3">
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          onClick={() =>
                            setAvatarChoice("default")
                          }
                          className="flex flex-col items-center justify-center gap-2 rounded-[10px] border transition-all relative overflow-hidden"
                          style={{
                            height: "84px",
                            borderColor:
                              avatarChoice === "default"
                                ? "transparent"
                                : "#E5E7EB",
                          }}
                        >
                          {avatarChoice === "default" && (
                            <img
                              src={selectedBg}
                              alt=""
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                          )}
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative z-10"
                          >
                            <path
                              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z"
                              fill={
                                avatarChoice === "default"
                                  ? "#FFFFFF"
                                  : "#323333"
                              }
                            />
                          </svg>
                          <span
                            className="relative z-10"
                            style={{
                              fontFamily: "SF Pro",
                              fontSize: "14px",
                              fontWeight: 500,
                              lineHeight: "20px",
                              letterSpacing: "-0.150391px",
                              color:
                                avatarChoice === "default"
                                  ? "#FFFFFF"
                                  : "#0A0A0A",
                            }}
                          >
                            AI Generated
                          </span>
                        </button>

                        <button
                          onClick={() =>
                            setShowPhotoSheet(true)
                          }
                          className="flex flex-col items-center justify-center gap-2 rounded-[10px] border transition-all relative overflow-hidden"
                          style={{
                            height: "84px",
                            borderColor:
                              avatarChoice === "upload"
                                ? "transparent"
                                : "#E5E7EB",
                          }}
                        >
                          {uploadedPhoto ? (
                            <>
                              <img
                                src={uploadedPhoto}
                                alt="Uploaded"
                                className="absolute inset-0 w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-black/20" />
                            </>
                          ) : (
                            <>
                              {avatarChoice === "upload" && (
                                <img
                                  src={selectedBg}
                                  alt=""
                                  className="absolute inset-0 w-full h-full object-cover"
                                />
                              )}
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="relative z-10"
                              >
                                <path
                                  d="M21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19ZM8.5 13.5L11 16.51L14.5 12L19 18H5L8.5 13.5Z"
                                  fill={
                                    avatarChoice === "upload"
                                      ? "#FFFFFF"
                                      : "#323333"
                                  }
                                />
                              </svg>
                              <span
                                className="relative z-10"
                                style={{
                                  fontFamily: "SF Pro",
                                  fontSize: "14px",
                                  fontWeight: 500,
                                  lineHeight: "20px",
                                  letterSpacing: "-0.150391px",
                                  color:
                                    avatarChoice === "upload"
                                      ? "#FFFFFF"
                                      : "#0A0A0A",
                                }}
                              >
                                Upload
                              </span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Visual Style - Only show when photo is uploaded */}
                    {uploadedPhoto && (
                      <div className="flex flex-col gap-3">
                        <label
                          style={{
                            fontFamily: "SF Pro",
                            fontSize: "14px",
                            fontWeight: 500,
                            lineHeight: "20px",
                            letterSpacing: "-0.150391px",
                            color: "#0A0A0A",
                          }}
                        >
                          Visual Style
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            {
                              id: "soft-professional",
                              label: "Soft Professional",
                            },
                            {
                              id: "realistic",
                              label: "Realistic",
                            },
                            { id: "cartoon", label: "Cartoon" },
                            {
                              id: "minimalist",
                              label: "Minimalist",
                            },
                          ].map((style) => (
                            <button
                              key={style.id}
                              onClick={() =>
                                setVisualStyle(style.id)
                              }
                              className="flex justify-center items-center px-3 h-[47px] rounded-3xl border transition-all"
                              style={{
                                borderColor:
                                  visualStyle === style.id
                                    ? "transparent"
                                    : "#E9EBF3",
                                backgroundImage:
                                  visualStyle === style.id
                                    ? `url(${visualStyleSelectedBg})`
                                    : "none",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: "SF Pro",
                                  fontSize: "16px",
                                  fontWeight: 400,
                                  lineHeight: "20px",
                                  letterSpacing: "-0.3125px",
                                  color:
                                    visualStyle === style.id
                                      ? "#FFFFFF"
                                      : "#0A0A0A",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                {style.label}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Start Practice Button */}
          <button
            onClick={onStartPractice}
            className="flex justify-center items-center py-3.5 h-12 rounded-[28px] w-[350px]"
            style={{
              backgroundColor: "#000000",
            }}
          >
            <span
              className="text-white text-center"
              style={{
                fontFamily: "SF Pro",
                fontSize: "16px",
                fontWeight: 510,
                lineHeight: "20px",
                letterSpacing: "-0.150391px",
              }}
            >
              Next
            </span>
          </button>

          {/* Skip Link */}
          <button
            onClick={onStartPractice}
            className="w-full flex justify-center items-center h-5"
            style={{ marginTop: "-20px" }}
          >
            <span
              style={{
                fontFamily: "SF Pro",
                fontSize: "16px",
                fontWeight: 510,
                lineHeight: "20px",
                letterSpacing: "-0.150391px",
                color: "#000000",
              }}
            >
              Skip
            </span>
          </button>
        </div>
      </div>

      {/* Notch - Black container at top */}
      <div className="absolute w-[150px] h-[37px] left-[126px] top-0 bg-black rounded-b-[24px]" />

      {/* Photo Sheet */}
      {showPhotoSheet && (
        <>
          {/* Backdrop */}
          <div
            className="absolute left-0 right-0 top-0 bottom-0 bg-black/40 z-40 transition-opacity"
            onClick={() => setShowPhotoSheet(false)}
          />

          {/* Action Sheet */}
          <div className="absolute left-0 right-0 bottom-0 z-50 px-2 pb-2">
            {/* Options Container */}
            <div
              className="bg-white rounded-[13px] overflow-hidden mb-2"
              style={{
                backdropFilter: "blur(20px)",
                backgroundColor: "rgba(255, 255, 255, 0.94)",
              }}
            >
              {/* Choose from Photos */}
              <button
                onClick={handleChooseFromPhotos}
                className="w-full px-4 h-[57px] flex items-center justify-center border-b"
                style={{
                  borderBottomColor: "rgba(60, 60, 67, 0.29)",
                }}
              >
                <span
                  style={{
                    fontFamily: "SF Pro",
                    fontSize: "20px",
                    fontWeight: 400,
                    lineHeight: "24px",
                    letterSpacing: "-0.45px",
                    color: "#007AFF",
                  }}
                >
                  Choose from Photos
                </span>
              </button>

              {/* Take Photo */}
              <button
                onClick={handleTakePhoto}
                className="w-full px-4 h-[57px] flex items-center justify-center"
              >
                <span
                  style={{
                    fontFamily: "SF Pro",
                    fontSize: "20px",
                    fontWeight: 400,
                    lineHeight: "24px",
                    letterSpacing: "-0.45px",
                    color: "#007AFF",
                  }}
                >
                  Take Photo
                </span>
              </button>
            </div>

            {/* Cancel Button */}
            <div
              className="bg-white rounded-[13px] overflow-hidden"
              style={{
                backdropFilter: "blur(20px)",
                backgroundColor: "rgba(255, 255, 255, 0.94)",
              }}
            >
              <button
                onClick={() => setShowPhotoSheet(false)}
                className="w-full px-4 h-[57px] flex items-center justify-center"
              >
                <span
                  style={{
                    fontFamily: "SF Pro",
                    fontSize: "20px",
                    fontWeight: 600,
                    lineHeight: "24px",
                    letterSpacing: "-0.45px",
                    color: "#007AFF",
                  }}
                >
                  Cancel
                </span>
              </button>
            </div>

            {/* Home Indicator Space */}
            <div className="h-[34px]" />
          </div>
        </>
      )}

      {/* File Input */}
      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Camera Input */}
      <input
        type="file"
        ref={cameraInputRef}
        accept="image/*"
        capture="environment"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}