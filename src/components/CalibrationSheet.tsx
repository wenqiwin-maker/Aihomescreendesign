import { StatusBar } from "./StatusBar";
import { motion } from "motion/react";
import calibrationIllustration from "../assets/calibration-illustration.svg";

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
      fontFamily: "SF Pro",
      fontWeight: 590,
      fontSize: "17px",
      lineHeight: "22px",
      letterSpacing: "-0.43px",
    },
    body: {
      fontFamily: "Inter",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "-0.15px",
    },
    metricsValue: {
      fontFamily: "SF Pro",
      fontWeight: 400,
      fontSize: "24px",
      lineHeight: "32px",
      letterSpacing: "0.07px",
    },
    metricsUnit: {
      fontFamily: "Inter",
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "16px",
    },
    caption: {
      fontFamily: "Inter",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "-0.31px",
    },
    button: {
      fontFamily: "Inter",
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

// Close button (X button in circle)
function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-[44px] h-[44px] rounded-full"
      style={{ backgroundColor: tokens.colors.closeButtonBg }}
    >
      <span
        style={{
          fontFamily: "SF Pro",
          fontWeight: 510,
          fontSize: "17px",
          color: tokens.colors.closeButtonIcon,
        }}
      >
        􀆄
      </span>
    </button>
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
          fontFamily: tokens.typography.body.fontFamily,
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
          fontFamily: tokens.typography.metricsValue.fontFamily,
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
          fontFamily: tokens.typography.metricsUnit.fontFamily,
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
          fontFamily: "Inter",
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

// Last Calibration Section
function LastCalibrationSection() {
  return (
    <motion.div
      className="flex flex-col gap-[8px] w-[350px]"
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease: "easeOut" },
        },
      }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <p
          className="m-0"
          style={{
            fontFamily: tokens.typography.body.fontFamily,
            fontWeight: tokens.typography.body.fontWeight,
            fontSize: tokens.typography.body.fontSize,
            lineHeight: tokens.typography.body.lineHeight,
            letterSpacing: "-0.15px",
            color: tokens.colors.labelSecondary,
          }}
        >
          Last calibration
        </p>
      </div>

      {/* Date and badge row */}
      <div className="flex items-center justify-between">
        <p
          className="m-0"
          style={{
            fontFamily: tokens.typography.caption.fontFamily,
            fontWeight: tokens.typography.caption.fontWeight,
            fontSize: tokens.typography.caption.fontSize,
            lineHeight: tokens.typography.caption.lineHeight,
            letterSpacing: tokens.typography.caption.letterSpacing,
            color: tokens.colors.textPrimary,
          }}
        >
          Today, 9:30 AM
        </p>
        <GoodBadge />
      </div>

      {/* Metrics cards row */}
      <div className="flex w-full">
        <MetricCard label="Pace" value="145" unit="words/min" position="left" />
        <MetricCard label="Volume" value="65" unit="dB" position="center" />
        <MetricCard label="HRV" value="58" unit="ms" position="right" />
      </div>
    </motion.div>
  );
}

// Calibration Illustration
function CalibrationIllustration() {
  return (
    <div className="flex flex-col items-center gap-[0px]">
      <img
        src={calibrationIllustration}
        alt="Calibration"
        className="w-[174px] h-[168px]"
      />
      <p
        className="m-0 text-center whitespace-pre-line"
        style={{
          fontFamily: tokens.typography.body.fontFamily,
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

// Start Calibrate Button
function StartCalibrateButton({ onClick }: { onClick: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      className="flex items-center justify-center w-[308px] h-[36px] rounded-[18px]"
      style={{ backgroundColor: tokens.colors.brandPrimary }}
      whileTap={{ scale: 0.98 }}
      whileHover={{ opacity: 0.9 }}
    >
      <span
        style={{
          fontFamily: tokens.typography.button.fontFamily,
          fontWeight: tokens.typography.button.fontWeight,
          fontSize: tokens.typography.button.fontSize,
          lineHeight: tokens.typography.button.lineHeight,
          letterSpacing: tokens.typography.button.letterSpacing,
          color: "#FFFFFF",
        }}
      >
        Start to Calibrate
      </span>
    </motion.button>
  );
}

interface CalibrationSheetProps {
  onBack: () => void;
}

export function CalibrationSheet({ onBack }: CalibrationSheetProps) {
  return (
    <div
      className="relative w-[390px] h-screen mx-auto overflow-hidden flex flex-col"
      style={{ backgroundColor: tokens.colors.screenBackground }}
    >
      <StatusBar variant="dark" />

      {/* Sheet Modal */}
      <div
        className="flex-1 flex flex-col"
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
          <CloseButton onClick={onBack} />

          {/* Title - centered */}
          <p
            className="absolute left-1/2 -translate-x-1/2 m-0 whitespace-nowrap"
            style={{
              fontFamily: tokens.typography.headline.fontFamily,
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
          className="flex-1 flex flex-col items-center pt-[20px] px-[20px] gap-[40px]"
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
            <CalibrationIllustration />
          </motion.div>

          {/* Start Calibrate Button */}
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
            <StartCalibrateButton
              onClick={() => {
                console.log("Starting calibration...");
              }}
            />
          </motion.div>

          {/* Last Calibration Section */}
          <LastCalibrationSection />
        </motion.div>
      </div>

      {/* Notch */}
      <div className="absolute w-[150px] h-[37px] left-[126px] top-0 bg-black rounded-b-[24px] pointer-events-none z-50" />
    </div>
  );
}
