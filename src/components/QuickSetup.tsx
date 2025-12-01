import { X } from "lucide-react";
import { StatusBar } from "./StatusBar";
import { useState } from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import optionButtonBg from "../assets/gradient-pill-bg.png";
import workIcon from "../assets/work-icon.png";
import lifeIcon from "../assets/life-icon.png";
import workBgHighlighted from "../assets/gradient-bg-blue.png";
import lifeBgHighlighted from "../assets/gradient-bg-pink.png";

interface QuickSetupProps {
  onClose: () => void;
  onNext: () => void;
  step?: number; // 1, 2, or 3 for different pages
}

export function QuickSetup({
  onClose,
  onNext,
  step = 1,
}: QuickSetupProps) {
  const [selectedOption, setSelectedOption] = useState<
    "work" | "life" | null
  >(null);

  return (
    <div className="relative w-[390px] h-screen bg-white mx-auto">
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

      {/* Toolbar */}
      <div className="flex justify-between items-center px-4 pb-[10px] h-[54px]">
        {/* Leading - empty space */}
        <div className="w-11 h-11" />

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

        {/* Close Button */}
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

      {/* Progress Indicator */}
      <div className="flex items-start px-5 gap-1 h-[3px]">
        {/* Step 1 Progress Bar */}
        <div className="w-[114px] h-[3px] bg-[#E9EBF3] rounded-sm overflow-hidden">
          {step >= 1 && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full h-full rounded-sm origin-left"
              style={{
                background:
                  "linear-gradient(90deg, #3E5FFF 41.06%, #00AEFF 100%)",
              }}
            />
          )}
        </div>
        {/* Step 2 Progress Bar */}
        <div className="w-[114px] h-[3px] bg-[#E9EBF3] rounded-sm overflow-hidden">
          {step >= 2 && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full h-full rounded-sm origin-left"
              style={{
                background:
                  "linear-gradient(90deg, #00AEFF 62.5%, #FF2AB4 100%)",
              }}
            />
          )}
        </div>
        {/* Step 3 Progress Bar */}
        <div className="w-[114px] h-[3px] bg-[#E9EBF3] rounded-sm overflow-hidden">
          {step >= 3 && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full h-full rounded-sm origin-left"
              style={{
                background:
                  "linear-gradient(90deg, #FF2AB4 37.02%, #FFB52D 79.81%, #FF7700 98.56%)",
              }}
            />
          )}
        </div>
      </div>

      {/* Content */}
      <div
        className="flex flex-col pt-[42px] px-5"
        style={{ paddingBottom: "36px" }}
      >
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-[359px]">
            {/* Main Content */}
            <motion.div
              className="flex flex-col gap-10"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.1
                  }
                }
              }}
            >
              {/* Title Section */}
              <motion.div
                className="flex flex-col"
                style={{ gap: "4px" }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
                }}
              >
                <h2
                  style={{
                    fontFamily: "SF Pro",
                    fontSize: "28px",
                    fontWeight: 600,
                    lineHeight: "34px",
                    color: "#333333",
                  }}
                >
                  Set your real situation
                </h2>
                <p
                  style={{
                    fontFamily: "SF Pro",
                    fontSize: "15px",
                    fontWeight: 350,
                    lineHeight: "20px",
                    color: "#333333",
                  }}
                >
                  Tell AI about your real communication
                  situation
                </p>
              </motion.div>

              {/* Option Buttons */}
              <motion.div
                className="flex gap-4"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
                }}
              >
                {/* Work Button */}
                <motion.button
                  onClick={() => setSelectedOption("work")}
                  className="flex flex-col items-start rounded-2xl transition-all overflow-hidden relative"
                  whileTap={{ scale: 0.97 }}
                  whileHover={{ 
                    boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
                    transition: { duration: 0.2 } 
                  }}
                  style={{
                    width: "167px",
                    padding: "24px 20px",
                    border:
                      selectedOption === "work"
                        ? "none"
                        : "1px solid #E9EBF3",
                    backgroundColor: "#FFFFFF",
                    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.08)",
                  }}
                >
                  {/* Animated Background */}
                  {selectedOption === "work" && (
                    <motion.div
                      className="absolute inset-0 rounded-2xl"
                      initial={{ clipPath: "polygon(0 100%, 0 100%, 0 100%)" }}
                      animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      style={{
                        backgroundImage: `url(${workBgHighlighted})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                  )}
                  <div className="flex flex-col items-start gap-2 relative z-10">
                    {/* Icon Box */}
                    <div
                      className="flex items-center justify-center"
                      style={{ width: "60px", height: "60px" }}
                    >
                      <ImageWithFallback
                        src={workIcon}
                        alt="Work Icon"
                        style={{
                          width: "52px",
                          height: "54px",
                          filter:
                            selectedOption === "work"
                              ? "brightness(0) invert(1)"
                              : "none",
                          transition: "filter 0.3s ease",
                        }}
                      />
                    </div>
                    {/* Text */}
                    <div
                      style={{
                        fontFamily: "SF Pro",
                        fontSize: "16px",
                        fontWeight: 590,
                        lineHeight: "20px",
                        letterSpacing: "-0.3125px",
                        color:
                          selectedOption === "work"
                            ? "#FFFFFF"
                            : "#0A0A0A",
                        width: "60px",
                        textAlign: "center",
                        transition: "color 0.3s ease",
                      }}
                    >
                      Work
                    </div>
                  </div>
                </motion.button>

                {/* Life Button */}
                <motion.button
                  onClick={() => setSelectedOption("life")}
                  className="flex flex-col items-start rounded-2xl transition-all overflow-hidden relative"
                  whileTap={{ scale: 0.97 }}
                  whileHover={{ 
                    boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
                    transition: { duration: 0.2 } 
                  }}
                  style={{
                    width: "167px",
                    padding: "24px 20px",
                    border:
                      selectedOption === "life"
                        ? "none"
                        : "1px solid #E9EBF3",
                    backgroundColor: "#FFFFFF",
                    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.08)",
                  }}
                >
                  {/* Animated Background */}
                  {selectedOption === "life" && (
                    <motion.div
                      className="absolute inset-0 rounded-2xl"
                      initial={{ clipPath: "polygon(0 100%, 0 100%, 0 100%)" }}
                      animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      style={{
                        backgroundImage: `url(${lifeBgHighlighted})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                  )}
                  <div className="flex flex-col items-start gap-2 relative z-10">
                    {/* Icon Box */}
                    <div
                      className="flex items-center justify-center"
                      style={{ width: "60px", height: "60px" }}
                    >
                      <ImageWithFallback
                        src={lifeIcon}
                        alt="Life Icon"
                        style={{
                          width: "58px",
                          height: "58px",
                          filter:
                            selectedOption === "life"
                              ? "brightness(0) invert(1)"
                              : "none",
                          transition: "filter 0.3s ease",
                        }}
                      />
                    </div>
                    {/* Text */}
                    <div
                      style={{
                        fontFamily: "SF Pro",
                        fontSize: "16px",
                        fontWeight: 590,
                        lineHeight: "20px",
                        letterSpacing: "-0.3125px",
                        color:
                          selectedOption === "life"
                            ? "#FFFFFF"
                            : "#0A0A0A",
                        width: "60px",
                        textAlign: "center",
                        transition: "color 0.3s ease",
                      }}
                    >
                      Life
                    </div>
                  </div>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Next Button */}
            <button
              disabled={!selectedOption}
              onClick={onNext}
              className="flex justify-center items-center h-12 rounded-[28px] transition-opacity"
              style={{
                width: "350px",
                padding: "14px 113px",
                background: "#000000",
                opacity: selectedOption ? 1 : 0.5,
              }}
            >
              <span
                className="text-white text-center"
                style={{
                  fontFamily: "SF Pro",
                  fontSize: "16px",
                  fontWeight: 590,
                  lineHeight: "20px",
                  letterSpacing: "-0.150391px",
                }}
              >
                Next
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Notch - Black container at top */}
      <div className="absolute w-[150px] h-[37px] left-[126px] top-0 bg-black rounded-b-[24px]" />
    </div>
  );
}