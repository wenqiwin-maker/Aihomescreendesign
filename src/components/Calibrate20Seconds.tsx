import { StatusBar } from "./StatusBar";
import { motion } from "motion/react";
import questionIcon from "../assets/question.svg";

// Design tokens from Figma
const tokens = {
  colors: {
    labelsPrimary: "#000000",
    labelsSecondary: "rgba(60, 60, 67, 0.6)",
    labelsVibrantPrimary: "rgba(0, 0, 0, 0.9)",
    labelsVibrantControlsPrimary: "#404040",
    accentPurple: "#8c00ff",
    screenBackground: "#f5f6fa",
    backgroundsGroupedSecondary: "#ffffff",
    drillInChevron: "rgba(60, 60, 67, 0.3)",
    textDark: "#0F172B",
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
      fontFamily: "SF Pro",
      fontWeight: 400,
      fontSize: "17px",
      lineHeight: "22px",
      letterSpacing: "-0.43px",
    },
    subheadline: {
      fontFamily: "SF Pro",
      fontWeight: 400,
      fontSize: "15px",
      lineHeight: "20px",
      letterSpacing: "-0.23px",
    },
  },
};

// Liquid Glass button effect matching Figma
function LiquidGlassButton({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className="relative flex items-center justify-center rounded-[296px] overflow-hidden"
      style={{
        height: "44px",
        minWidth: "44px",
        padding: "0 2px",
        background: "rgba(247, 247, 247, 0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "0.5px solid rgba(255, 255, 255, 0.8)",
        boxShadow:
          "0px 4px 12px rgba(0, 0, 0, 0.15), inset 0px 1px 0px rgba(255, 255, 255, 0.4)",
      }}
    >
      {/* Content */}
      <div
        className="relative z-10 flex items-center justify-center h-[36px] min-w-[36px] px-[8px] rounded-[100px]"
        style={{
          fontFamily: tokens.typography.headline.fontFamily,
          fontWeight: 510,
          fontSize: "17px",
          color: tokens.colors.labelsVibrantControlsPrimary,
        }}
      >
        {children}
      </div>
    </button>
  );
}

// Question icon
function QuestionIcon() {
  return (
    <img src={questionIcon} alt="Question" width={20} height={20} />
  );
}

// Drill-in chevron (SF Symbol: chevron.right)
function DrillInChevron() {
  return (
    <span
      style={{
        fontFamily: "SF Pro",
        fontWeight: 590,
        fontSize: "17px",
        lineHeight: "22px",
        color: tokens.colors.drillInChevron,
        width: "8px",
      }}
    >
      􀆊
    </span>
  );
}

// Row component matching iOS settings pattern
function SettingsRow({
  title,
  subtitle,
  onPress,
}: {
  title: string;
  subtitle?: string;
  onPress?: () => void;
}) {
  return (
    <motion.button
      onClick={onPress}
      className="flex items-center w-full h-[68px] px-[16px] cursor-pointer"
      style={{
        backgroundColor: tokens.colors.backgroundsGroupedSecondary,
        borderRadius: "34px",
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Contents */}
      <div className="flex flex-col justify-center flex-1 py-[1px]">
        {/* Title */}
        <p
          className="text-left"
          style={{
            fontFamily: tokens.typography.body.fontFamily,
            fontWeight: tokens.typography.body.fontWeight,
            fontSize: tokens.typography.body.fontSize,
            lineHeight: tokens.typography.body.lineHeight,
            color: tokens.colors.textDark,
          }}
        >
          {title}
        </p>
        {/* Subtitle */}
        {subtitle && (
          <p
            className="text-left"
            style={{
              fontFamily: tokens.typography.subheadline.fontFamily,
              fontWeight: tokens.typography.subheadline.fontWeight,
              fontSize: tokens.typography.subheadline.fontSize,
              lineHeight: tokens.typography.subheadline.lineHeight,
              color: tokens.colors.labelsSecondary,
            }}
          >
            {subtitle}
          </p>
        )}
      </div>

      {/* Trailing accessories */}
      <div className="flex items-center justify-end gap-[16px]">
        <DrillInChevron />
      </div>
    </motion.button>
  );
}

interface Calibrate20SecondsProps {
  onBack: () => void;
  onCalibrate: () => void;
}

export function Calibrate20Seconds({ onBack, onCalibrate }: Calibrate20SecondsProps) {
  return (
    <div
      className="relative w-[390px] h-screen mx-auto overflow-hidden flex flex-col items-center"
      style={{ backgroundColor: tokens.colors.screenBackground }}
    >
      <StatusBar variant="dark" />

      {/* Toolbar - Top - iPhone */}
      <div className="relative flex items-start justify-between w-[390px] pt-0 pb-[10px] px-[16px] shrink-0">
        {/* Leading - Back button */}
        <div className="flex gap-[10px] items-center shrink-0">
          <LiquidGlassButton onClick={onBack}>
            <span style={{ lineHeight: "normal" }}>􀯶</span>
          </LiquidGlassButton>
        </div>

        {/* Spacer */}
        <div className="w-[8px] self-stretch shrink-0" />

        {/* Title - Centered absolutely */}
        <div className="absolute h-[22px] left-1/2 top-[13px] -translate-x-1/2">
          <p
            className="text-center whitespace-nowrap"
            style={{
              fontFamily: tokens.typography.headline.fontFamily,
              fontWeight: tokens.typography.headline.fontWeight,
              fontSize: tokens.typography.headline.fontSize,
              lineHeight: tokens.typography.headline.lineHeight,
              letterSpacing: tokens.typography.headline.letterSpacing,
              color: tokens.colors.labelsVibrantPrimary,
            }}
          >
            Calibrate in 20 Seconds
          </p>
        </div>
      </div>

      {/* Content Area */}
      <motion.div
        className="flex-1 flex flex-col gap-[30px] py-[10px] items-center overflow-y-auto w-full"
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
        {/* Section Group */}
        <motion.div
          className="flex flex-col gap-[0px] items-start w-[350px]"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, ease: "easeOut" },
            },
          }}
        >
          {/* Section Header: 20s Baseline with question icon */}
          <div className="flex items-center justify-between w-full mb-[10px]">
            <p
              className="text-left"
              style={{
                fontFamily: tokens.typography.body.fontFamily,
                fontWeight: tokens.typography.body.fontWeight,
                fontSize: tokens.typography.body.fontSize,
                lineHeight: tokens.typography.body.lineHeight,
                color: tokens.colors.labelsPrimary,
              }}
            >
              20s Baseline
            </p>
            <QuestionIcon />
          </div>

          {/* Calibration Row */}
          <SettingsRow
            title="Calibrate"
            subtitle="20s Pace/volume + HRV"
            onPress={onCalibrate}
          />
        </motion.div>
      </motion.div>

    </div>
  );
}
