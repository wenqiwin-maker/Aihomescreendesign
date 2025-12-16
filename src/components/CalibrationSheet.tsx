import React, { useState } from "react";
import { StatusBar } from "./StatusBar";
import { motion } from "motion/react";
import { LiquidGlassButton } from "./shared/LiquidGlassButton";
import closeIcon from "../assets/close-icon-dark.svg";

// Design tokens from Figma
const tokens = {
  colors: {
    sheetBackground: "#FFFFFF",
    screenBackground: "#FFFFFF",
    grabber: "#CCCCCC",
    closeButtonBg: "rgba(120, 120, 128, 0.16)",
    closeButtonIcon: "#999999",
    titleText: "#333333",
    labelSecondary: "#45556C",
    labelTertiary: "#62748E",
    textPrimary: "#0F172B",
    metricsCardBg: "#F5F6FA",
    brandPrimary: "#8C00FF",
    badgeBg: "#DCFCE7",
    badgeBorder: "#B9F8CF",
    badgeText: "#008236",
  },
  typography: {
    headline: {
      fontWeight: 590,
      fontSize: "17px",
      lineHeight: "22px",
      letterSpacing: "-0.43px",
    },
    body: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "-0.15px",
    },
    metricsValue: {
      fontWeight: 400,
      fontSize: "24px",
      lineHeight: "32px",
      letterSpacing: "0.07px",
    },
    metricsUnit: {
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "16px",
    },
    caption: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "-0.31px",
    },
    button: {
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "-0.15px",
    },
  },
};

// Grabber component (iOS sheet grabber)
function Grabber() {
  return (
    <div className="flex justify-center pt-[5px] pb-[11px]">
      <div
        className="w-[36px] h-[5px] rounded-[100px]"
        style={{ backgroundColor: tokens.colors.grabber }}
      />
    </div>
  );
}


// Individual Metric Card
function MetricCard({
  label,
  value,
  unit,
  position,
}: {
  label: string;
  value: string;
  unit: string;
  position: "left" | "center" | "right";
}) {
  const borderRadius =
    position === "left"
      ? "10px 0 0 10px"
      : position === "right"
      ? "0 10px 10px 0"
      : "0";

  return (
    <div
      className="flex flex-col items-center gap-[4px] py-[16px] px-[16px] flex-1"
      style={{
        backgroundColor: tokens.colors.metricsCardBg,
        borderRadius,
      }}
    >
      {/* Label */}
      <p
        className="m-0 text-center"
        style={{
          fontWeight: tokens.typography.body.fontWeight,
          fontSize: tokens.typography.body.fontSize,
          lineHeight: tokens.typography.body.lineHeight,
          color: tokens.colors.labelSecondary,
        }}
      >
        {label}
      </p>

      {/* Value */}
      <p
        className="m-0 text-center"
        style={{
          fontWeight: tokens.typography.metricsValue.fontWeight,
          fontSize: tokens.typography.metricsValue.fontSize,
          lineHeight: tokens.typography.metricsValue.lineHeight,
          letterSpacing: tokens.typography.metricsValue.letterSpacing,
          color: tokens.colors.textPrimary,
        }}
      >
        {value}
      </p>

      {/* Unit */}
      <p
        className="m-0 text-center"
        style={{
          fontWeight: tokens.typography.metricsUnit.fontWeight,
          fontSize: tokens.typography.metricsUnit.fontSize,
          lineHeight: tokens.typography.metricsUnit.lineHeight,
          color: tokens.colors.labelTertiary,
        }}
      >
        {unit}
      </p>
    </div>
  );
}

// Good badge
function GoodBadge() {
  return (
    <div
      className="flex items-center justify-center px-[8px] py-[2px] rounded-[8px]"
      style={{
        backgroundColor: tokens.colors.badgeBg,
        border: `0.66px solid ${tokens.colors.badgeBorder}`,
      }}
    >
      <span
        style={{
          fontWeight: 500,
          fontSize: "12px",
          lineHeight: "16px",
          color: tokens.colors.badgeText,
        }}
      >
        Good
      </span>
    </div>
  );
}

// Calibration Record type
interface CalibrationRecord {
  id: string;
  date: string;
  pace: string;
  volume: string;
  hrv: string;
}

// Single Calibration Record Card
function CalibrationRecordCard({
  record,
  isFirst,
  isSecond,
}: {
  record: CalibrationRecord;
  isFirst: boolean;
  isSecond: boolean;
}) {
  // Only show label for "Last calibration" (first) and "Previous calibration" (second only)
  const showLabel = isFirst || isSecond;
  const labelText = isFirst ? "Last calibration" : "Previous calibration";

  return (
    <motion.div
      className="flex flex-col gap-[8px] w-[350px]"
      initial={isFirst ? { opacity: 0, y: -20 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Header row - only show for first and second records */}
      {showLabel && (
        <div className="flex items-center justify-between">
          <p
            className="m-0"
            style={{
              fontWeight: tokens.typography.body.fontWeight,
              fontSize: tokens.typography.body.fontSize,
              lineHeight: tokens.typography.body.lineHeight,
              letterSpacing: "-0.15px",
              color: tokens.colors.labelSecondary,
            }}
          >
            {labelText}
          </p>
        </div>
      )}

      {/* Date and badge row */}
      <div className="flex items-center justify-between">
        <p
          className="m-0"
          style={{
            fontWeight: tokens.typography.caption.fontWeight,
            fontSize: tokens.typography.caption.fontSize,
            lineHeight: tokens.typography.caption.lineHeight,
            letterSpacing: tokens.typography.caption.letterSpacing,
            color: tokens.colors.textPrimary,
          }}
        >
          {record.date}
        </p>
        <GoodBadge />
      </div>

      {/* Metrics cards row */}
      <div className="flex w-full">
        <MetricCard
          label="Pace"
          value={record.pace}
          unit="words/min"
          position="left"
        />
        <MetricCard
          label="Volume"
          value={record.volume}
          unit="dB"
          position="center"
        />
        <MetricCard
          label="HRV"
          value={record.hrv}
          unit="ms"
          position="right"
        />
      </div>
    </motion.div>
  );
}

// Calibration Records Section
function CalibrationRecordsSection({
  records,
}: {
  records: CalibrationRecord[];
}) {
  return (
    <motion.div
      className="flex flex-col gap-[24px]"
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease: "easeOut" },
        },
      }}
    >
      {records.map((record, index) => (
        <CalibrationRecordCard
          key={record.id}
          record={record}
          isFirst={index === 0}
          isSecond={index === 1}
        />
      ))}
    </motion.div>
  );
}

// Animated Calibration Illustration - AI Listening Effect
function CalibrationIllustration({ isAnimating }: { isAnimating: boolean }) {
  return (
    <div className="flex flex-col items-center gap-[0px]">
      <div className="w-[174px] h-[168px] relative">
        <svg
          width="162"
          height="154"
          viewBox="0 0 162 154"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <filter
              id="filter0_f_227_23360"
              x="0"
              y="3.75562"
              width="162"
              height="145"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="4.5"
                result="effect1_foregroundBlur_227_23360"
              />
            </filter>
            <filter
              id="filter1_d_227_23360"
              x="12.2467"
              y="0"
              width="137.104"
              height="153.993"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="4" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0437326 0 0 0 0 0.407906 0 0 0 0 0.954167 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_227_23360"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_227_23360"
                result="shape"
              />
            </filter>
            <filter
              id="filter2_f_227_23360"
              x="1.30298"
              y="2.09107"
              width="158.241"
              height="146.482"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="4.5"
                result="effect1_foregroundBlur_227_23360"
              />
            </filter>
            <linearGradient
              id="paint0_linear_227_23360"
              x1="81.7701"
              y1="17.7556"
              x2="81.7701"
              y2="134.756"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#A056F7" />
              <stop offset="1" stopColor="#20C1E4" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_227_23360"
              x1="21.3161"
              y1="75.8733"
              x2="130.823"
              y2="122.308"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0104167" stopColor="#0A05F8" stopOpacity="0.33" />
              <stop offset="1" stopColor="white" stopOpacity="0.15" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_227_23360"
              x1="22.629"
              y1="72.669"
              x2="139.314"
              y2="80.7489"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.338542" stopColor="#B522FF" />
              <stop offset="1" stopColor="#0BC9F2" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_227_23360"
              x1="109.624"
              y1="127.786"
              x2="51.1415"
              y2="26.492"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#A056F7" />
              <stop offset="1" stopColor="#20C1E4" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_227_23360"
              x1="132.699"
              y1="47.3756"
              x2="15.1116"
              y2="62.0337"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0104167" stopColor="#0A05F8" stopOpacity="0.33" />
              <stop offset="1" stopColor="white" stopOpacity="0.15" />
            </linearGradient>
          </defs>

          {/* Layer 1 - Static main ring with shadow (very back) */}
          <g filter="url(#filter1_d_227_23360)">
            <path
              d="M93.6294 10.1089C125.851 12.3401 141.554 48.3988 139.102 83.8014C136.651 119.204 108.543 146.095 76.3212 143.864C44.0996 141.632 19.9662 111.124 22.4176 75.7215C24.8691 40.3189 61.4078 7.87769 93.6294 10.1089Z"
              stroke="url(#paint2_linear_227_23360)"
              strokeWidth="4"
            />
          </g>

          {/* Layer 2 - Fastest rotation (middle) */}
          <motion.g
            filter="url(#filter2_f_227_23360)"
            style={{ transformOrigin: "81px 77px" }}
            animate={isAnimating ? { rotate: 360 } : { rotate: 0 }}
            transition={
              isAnimating
                ? {
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                  }
                : { duration: 0.3 }
            }
          >
            <path
              d="M20.7928 105.805C4.6434 77.8339 22.9927 42.7438 53.7975 24.9586C84.6024 7.17334 122.666 15.431 138.816 43.4026C154.965 71.3742 143.085 108.467 112.28 126.253C81.4748 144.038 36.9422 133.777 20.7928 105.805Z"
              stroke="url(#paint3_linear_227_23360)"
              strokeWidth="9"
            />
            <path
              d="M20.7928 105.805C4.6434 77.8339 22.9927 42.7438 53.7975 24.9586C84.6024 7.17334 122.666 15.431 138.816 43.4026C154.965 71.3742 143.085 108.467 112.28 126.253C81.4748 144.038 36.9422 133.777 20.7928 105.805Z"
              stroke="url(#paint4_linear_227_23360)"
              strokeOpacity="0.2"
              strokeWidth="9"
            />
          </motion.g>

          {/* Layer 3 - Slowest rotation (on top) */}
          <motion.g
            filter="url(#filter0_f_227_23360)"
            style={{ transformOrigin: "81px 77px" }}
            animate={isAnimating ? { rotate: 360 } : { rotate: 0 }}
            transition={
              isAnimating
                ? {
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }
                : { duration: 0.3 }
            }
          >
            <path
              d="M148 81.2262C148 113.535 114.417 134.756 78.6897 134.756C42.9626 134.756 14 108.564 14 76.2556C14 43.947 42.9626 17.7556 78.6897 17.7556C114.417 17.7556 148 48.9176 148 81.2262Z"
              stroke="url(#paint0_linear_227_23360)"
              strokeWidth="10"
            />
            <path
              d="M148 81.2262C148 113.535 114.417 134.756 78.6897 134.756C42.9626 134.756 14 108.564 14 76.2556C14 43.947 42.9626 17.7556 78.6897 17.7556C114.417 17.7556 148 48.9176 148 81.2262Z"
              stroke="url(#paint1_linear_227_23360)"
              strokeWidth="10"
            />
          </motion.g>
        </svg>
      </div>
      <p
        className="m-0 text-center whitespace-pre-line"
        style={{
          fontWeight: tokens.typography.body.fontWeight,
          fontSize: tokens.typography.body.fontSize,
          lineHeight: tokens.typography.body.lineHeight,
          color: tokens.colors.labelSecondary,
        }}
      >
        {`Say

"Good morning, how are you?
I'm glad to see you again"

to your iPhone`}
      </p>
    </div>
  );
}

// Start/Stop Calibrate Button
function CalibrateButton({
  onClick,
  isCalibrating,
}: {
  onClick: () => void;
  isCalibrating: boolean;
}) {
  return (
    <motion.button
      onClick={onClick}
      className="flex items-center justify-center w-[308px] h-[36px] rounded-[18px]"
      style={{
        backgroundColor: isCalibrating
          ? tokens.colors.brandPrimary
          : "#000000",
      }}
      whileTap={{ scale: 0.98 }}
      whileHover={{ opacity: 0.9 }}
    >
      <span
        style={{
          fontWeight: tokens.typography.button.fontWeight,
          fontSize: tokens.typography.button.fontSize,
          lineHeight: tokens.typography.button.lineHeight,
          letterSpacing: tokens.typography.button.letterSpacing,
          color: "#FFFFFF",
        }}
      >
        {isCalibrating ? "Stop" : "Start to Calibrate"}
      </span>
    </motion.button>
  );
}

interface CalibrationSheetProps {
  onBack: () => void;
}

// Helper to generate random metrics
function generateRandomMetrics() {
  return {
    pace: String(Math.floor(Math.random() * 40) + 130), // 130-170
    volume: String(Math.floor(Math.random() * 20) + 55), // 55-75
    hrv: String(Math.floor(Math.random() * 30) + 45), // 45-75
  };
}

// Helper to format current time
function formatCurrentTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const period = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes.toString().padStart(2, "0");
  return `Today, ${formattedHours}:${formattedMinutes} ${period}`;
}

export function CalibrationSheet({ onBack }: CalibrationSheetProps) {
  const [isCalibrating, setIsCalibrating] = useState(false);
  const [calibrationRecords, setCalibrationRecords] = useState<
    CalibrationRecord[]
  >([
    {
      id: "initial",
      date: "Today, 9:30 AM",
      pace: "145",
      volume: "65",
      hrv: "58",
    },
  ]);

  const handleToggleCalibration = () => {
    if (isCalibrating) {
      // Stopping - add a new record
      const metrics = generateRandomMetrics();
      const newRecord: CalibrationRecord = {
        id: `record-${Date.now()}`,
        date: formatCurrentTime(),
        ...metrics,
      };
      setCalibrationRecords((prev) => [newRecord, ...prev]);
    }
    setIsCalibrating(!isCalibrating);
  };

  return (
    <div
      className="relative w-[390px] h-screen mx-auto overflow-hidden flex flex-col"
      style={{ backgroundColor: tokens.colors.screenBackground }}
    >
      <StatusBar variant="dark" />

      {/* Sheet Modal */}
      <div
        className="flex-1 flex flex-col overflow-hidden"
        style={{
          backgroundColor: tokens.colors.sheetBackground,
          borderRadius: "38px 38px 0 0",
          boxShadow: "0px 15px 75px 0px rgba(0, 0, 0, 0.18)",
          marginTop: "6px",
        }}
      >
        {/* Grabber */}
        <Grabber />

        {/* Toolbar */}
        <div className="flex items-center justify-between px-[16px] pb-[10px]">
          {/* Close button */}
          <LiquidGlassButton onClick={onBack} size={44} className="flex-shrink-0">
            <img src={closeIcon} alt="Close" className="w-[36px] h-[36px]" />
          </LiquidGlassButton>

          {/* Title - centered */}
          <p
            className="absolute left-1/2 -translate-x-1/2 m-0 whitespace-nowrap"
            style={{
              fontWeight: tokens.typography.headline.fontWeight,
              fontSize: tokens.typography.headline.fontSize,
              lineHeight: tokens.typography.headline.lineHeight,
              letterSpacing: tokens.typography.headline.letterSpacing,
              color: tokens.colors.titleText,
            }}
          >
            Calibration
          </p>

          {/* Spacer for symmetry */}
          <div className="w-[44px]" />
        </div>

        {/* Content */}
        <motion.div
          className="flex-1 flex flex-col items-center pt-[20px] px-[20px] gap-[40px] overflow-y-auto"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.05,
              },
            },
          }}
        >
          {/* Calibration Illustration and Text */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, ease: "easeOut" },
              },
            }}
          >
            <CalibrationIllustration isAnimating={isCalibrating} />
          </motion.div>

          {/* Start/Stop Calibrate Button */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, ease: "easeOut" },
              },
            }}
          >
            <CalibrateButton
              onClick={handleToggleCalibration}
              isCalibrating={isCalibrating}
            />
          </motion.div>

          {/* Calibration Records Section */}
          <CalibrationRecordsSection records={calibrationRecords} />

          {/* Bottom padding for scroll */}
          <div className="h-[20px] flex-shrink-0" />
        </motion.div>
      </div>

    </div>
  );
}
