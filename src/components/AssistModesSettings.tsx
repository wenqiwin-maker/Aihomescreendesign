import { useState } from "react";
import { StatusBar } from "./StatusBar";
import { motion } from "motion/react";

// Design tokens from Figma
const tokens = {
  colors: {
    labelsPrimary: "#000000",
    labelsSecondary: "rgba(60, 60, 67, 0.6)", // #3c3c4399
    labelsVibrantPrimary: "#333333",
    labelsVibrantControlsPrimary: "#404040",
    separatorsVibrant: "#e6e6e6",
    fillsPrimary: "rgba(120, 120, 120, 0.2)", // #78787833
    backgroundsGroupedSecondary: "#ffffff",
    accentPurple: "#8c00ff",
    screenBackground: "#f5f6fa",
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
  },
};

// Separator line matching Figma
function Separator() {
  return (
    <div
      className="w-full shrink-0"
      style={{
        height: "1px",
        borderTop: `1px solid ${tokens.colors.separatorsVibrant}`,
      }}
    />
  );
}

// iOS-style radio button matching Figma (20px size, 44px touch target)
function RadioButton({
  selected,
  onChange,
}: {
  selected: boolean;
  onChange: () => void;
}) {
  return (
    <button
      onClick={onChange}
      className="relative shrink-0 size-[20px] flex items-center justify-center"
    >
      {/* Touch target - 44px */}
      <div className="absolute size-[44px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      {/* Radio circle */}
      <div
        className="size-[20px] rounded-full flex items-center justify-center transition-all duration-200"
        style={{
          border: selected ? "none" : "1.5px solid rgba(60, 60, 67, 0.3)",
          backgroundColor: selected ? tokens.colors.accentPurple : "transparent",
        }}
      >
        {selected && <div className="size-[8px] rounded-full bg-white" />}
      </div>
    </button>
  );
}

// Toggle switch matching Figma: 64px wide, 2px padding, 39x24px knob
function ToggleSwitch({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <motion.button
      onClick={() => onChange(!checked)}
      className="relative flex-shrink-0 flex items-center justify-between overflow-hidden"
      style={{
        width: "64px",
        height: "28px",
        borderRadius: "100px",
        padding: "2px",
      }}
      animate={{
        backgroundColor: checked
          ? tokens.colors.accentPurple
          : "rgba(120, 120, 128, 0.16)",
      }}
      transition={{ duration: 0.2 }}
    >
      {/* On indicator - white vertical line (AX Label) */}
      <div className="flex-1 flex items-center justify-center">
        <div
          className="bg-white shrink-0"
          style={{
            width: "1px",
            height: "10px",
            opacity: checked ? 1 : 0,
          }}
        />
      </div>
      {/* Knob - 39px wide, 24px tall */}
      <motion.div
        className="bg-white rounded-[100px] shrink-0"
        style={{
          width: "39px",
          height: "24px",
          boxShadow:
            "0px 3px 8px rgba(0, 0, 0, 0.15), 0px 3px 1px rgba(0, 0, 0, 0.06)",
        }}
        animate={{
          marginLeft: checked ? "auto" : "0px",
          marginRight: checked ? "0px" : "auto",
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </motion.button>
  );
}

// Slider Track component matching Figma
function Track() {
  return (
    <div className="absolute h-[6px] left-0 right-0 top-1/2 -translate-y-1/2">
      <div
        className="absolute h-[6px] left-0 right-0 rounded-[3px] top-1/2 -translate-y-1/2"
        style={{ backgroundColor: tokens.colors.fillsPrimary }}
      />
    </div>
  );
}

// Slider Knob component matching Figma: 38px × 24px
function Knob({ position }: { position: number }) {
  return (
    <div
      className="absolute h-[24px] top-1/2 -translate-y-1/2 flex items-center justify-center"
      style={{
        left: `calc(${position}% - ${(position / 100) * 38}px)`,
      }}
    >
      <div
        className="bg-white rounded-[100px]"
        style={{
          width: "38px",
          height: "24px",
          boxShadow:
            "0px 0.5px 4px 0px rgba(0, 0, 0, 0.12), 0px 6px 13px 0px rgba(0, 0, 0, 0.12)",
        }}
      />
    </div>
  );
}

// Custom slider component matching Figma exactly
function SensitivitySlider({
  value,
  onChange,
}: {
  value: number;
  onChange: (value: number) => void;
}) {
  const percentage = ((value - 0) / (100 - 0)) * 100;

  return (
    <div className="relative w-full h-full flex items-center">
      {/* Track background */}
      <Track />
      {/* Track fill - purple */}
      <div
        className="absolute h-[6px] left-0 top-1/2 -translate-y-1/2"
        style={{ right: `${100 - percentage}%` }}
      >
        <div
          className="absolute h-[6px] left-0 right-0 rounded-[3px] top-1/2 -translate-y-1/2"
          style={{ backgroundColor: tokens.colors.accentPurple }}
        />
      </div>
      {/* Knob */}
      <Knob position={percentage} />
      {/* Hidden range input for interaction */}
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="absolute w-full h-full opacity-0 cursor-pointer z-10"
      />
    </div>
  );
}

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
      className="relative flex items-center justify-center rounded-[296px] overflow-hidden bg-white mix-blend-multiply"
      style={{
        height: "44px",
        minWidth: "44px",
        padding: "0 2px",
      }}
    >
      {/* Glass effect layers */}
      <div className="absolute inset-[-26px] opacity-[0.67]">
        <div
          className="absolute inset-[28px_26px_24px_26px] rounded-[1000px]"
          style={{
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            backgroundColor: "rgba(0, 0, 0, 0.04)",
            filter: "blur(10px)",
            mixBlendMode: "hard-light",
          }}
        />
      </div>
      <div className="absolute inset-0 rounded-[296px]">
        <div className="absolute inset-0 rounded-[296px] bg-[#333333] mix-blend-color-dodge" />
        <div
          className="absolute inset-0 rounded-[296px]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(247, 247, 247) 0%, rgb(247, 247, 247) 100%)",
          }}
        />
      </div>
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

interface AssistModesSettingsProps {
  onBack: () => void;
}

export function AssistModesSettings({ onBack }: AssistModesSettingsProps) {
  const [assistMode, setAssistMode] = useState<"on-device" | "manual">(
    "on-device"
  );
  const [sensitivity, setSensitivity] = useState(50);
  const [whisperOnPause, setWhisperOnPause] = useState(true);

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
            Assist Modes & Sensitivity
          </p>
        </div>
      </div>

      {/* Content Area */}
      <motion.div
        className="flex-1 flex flex-col gap-[30px] py-[10px] items-start overflow-y-auto"
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
        {/* Assist Mode Section */}
        <motion.div
          className="flex flex-col gap-[10px] items-start mx-[20px]"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, ease: "easeOut" },
            },
          }}
        >
          {/* Section Label */}
          <p
            style={{
              fontFamily: tokens.typography.body.fontFamily,
              fontWeight: tokens.typography.body.fontWeight,
              fontSize: tokens.typography.body.fontSize,
              lineHeight: tokens.typography.body.lineHeight,
              letterSpacing: tokens.typography.body.letterSpacing,
              color: tokens.colors.labelsPrimary,
            }}
          >
            Assist Mode
          </p>

          {/* Radio Options Card - 350px wide */}
          <div className="flex flex-col w-[350px] rounded-[26px] overflow-hidden">
            {/* Option 1 - On-device detection */}
            <div
              className="flex flex-col justify-center items-start w-[350px] h-[52px] px-[16px] gap-[10px] cursor-pointer"
              style={{
                backgroundColor: tokens.colors.backgroundsGroupedSecondary,
              }}
              onClick={() => setAssistMode("on-device")}
            >
              <div className="flex gap-[12px] items-center">
                <RadioButton
                  selected={assistMode === "on-device"}
                  onChange={() => setAssistMode("on-device")}
                />
                <p
                  style={{
                    fontFamily: tokens.typography.body.fontFamily,
                    fontWeight: tokens.typography.body.fontWeight,
                    fontSize: tokens.typography.body.fontSize,
                    lineHeight: "20px",
                    color: "#282828",
                  }}
                >
                  On-device detection (privacy-safe)
                </p>
              </div>
            </div>

            {/* Option 2 - Manual only */}
            <div
              className="flex flex-col justify-center items-start w-[350px] h-[52px] px-[16px] gap-[10px] cursor-pointer"
              style={{
                backgroundColor: tokens.colors.backgroundsGroupedSecondary,
              }}
              onClick={() => setAssistMode("manual")}
            >
              <div className="flex gap-[12px] items-center">
                <RadioButton
                  selected={assistMode === "manual"}
                  onChange={() => setAssistMode("manual")}
                />
                <p
                  style={{
                    fontFamily: tokens.typography.body.fontFamily,
                    fontWeight: tokens.typography.body.fontWeight,
                    fontSize: tokens.typography.body.fontSize,
                    lineHeight: "20px",
                    color: "#282828",
                  }}
                >
                  Manual only (press to nudge)
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Sensitivity Section */}
        <motion.div
          className="flex flex-col gap-[10px] items-start mx-[20px]"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, ease: "easeOut" },
            },
          }}
        >
          {/* Sensitivity Label */}
          <p
            style={{
              fontFamily: tokens.typography.body.fontFamily,
              fontWeight: tokens.typography.body.fontWeight,
              fontSize: tokens.typography.body.fontSize,
              lineHeight: tokens.typography.body.lineHeight,
              letterSpacing: tokens.typography.body.letterSpacing,
              color: tokens.colors.labelsPrimary,
            }}
          >
            Sensitivity
          </p>

          {/* Sensitivity Grouped Card (Slider + Cooldown) */}
          <div className="flex flex-col w-[350px] rounded-[26px] overflow-hidden">
            {/* Slider Row */}
            <div
              className="flex items-center h-[52px] w-full px-[16px]"
              style={{
                backgroundColor: tokens.colors.backgroundsGroupedSecondary,
              }}
            >
              <div className="flex-1 flex gap-[12px] items-center w-full">
                {/* Low label */}
                <p
                  className="whitespace-nowrap shrink-0"
                  style={{
                    fontFamily: tokens.typography.headline.fontFamily,
                    fontWeight: tokens.typography.headline.fontWeight,
                    fontSize: tokens.typography.headline.fontSize,
                    lineHeight: tokens.typography.headline.lineHeight,
                    color: tokens.colors.labelsSecondary,
                  }}
                >
                  Low
                </p>
                {/* Slider */}
                <div className="flex-1 h-full relative">
                  <SensitivitySlider
                    value={sensitivity}
                    onChange={setSensitivity}
                  />
                </div>
                {/* High label */}
                <p
                  className="whitespace-nowrap shrink-0 text-right"
                  style={{
                    fontFamily: tokens.typography.headline.fontFamily,
                    fontWeight: tokens.typography.headline.fontWeight,
                    fontSize: tokens.typography.headline.fontSize,
                    lineHeight: tokens.typography.headline.lineHeight,
                    color: tokens.colors.labelsSecondary,
                  }}
                >
                  High
                </p>
              </div>
            </div>

            {/* Separator between slider and cooldown */}
            <div
              className="w-full px-[16px]"
              style={{ backgroundColor: tokens.colors.backgroundsGroupedSecondary }}
            >
              <Separator />
            </div>

            {/* Cooldown Row */}
            <div
              className="flex items-center h-[52px] w-full px-[16px]"
              style={{
                backgroundColor: tokens.colors.backgroundsGroupedSecondary,
              }}
            >
              {/* Title */}
              <p
                className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap"
                style={{
                  fontFamily: tokens.typography.body.fontFamily,
                  fontWeight: tokens.typography.body.fontWeight,
                  fontSize: tokens.typography.body.fontSize,
                  lineHeight: tokens.typography.body.lineHeight,
                  letterSpacing: tokens.typography.body.letterSpacing,
                  color: tokens.colors.labelsPrimary,
                }}
              >
                Cooldown
              </p>
              {/* Trailing - Value + Chevron */}
              <div
                className="flex items-center justify-end gap-[10px]"
                style={{
                  fontFamily: tokens.typography.body.fontFamily,
                  fontWeight: tokens.typography.body.fontWeight,
                  fontSize: tokens.typography.body.fontSize,
                  lineHeight: tokens.typography.body.lineHeight,
                  color: tokens.colors.labelsSecondary,
                }}
              >
                <span className="whitespace-nowrap">25s</span>
                <span className="whitespace-nowrap">􀆏</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Whisper on pause Section - Separate grouped list */}
        <motion.div
          className="flex flex-col items-start mx-[20px]"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, ease: "easeOut" },
            },
          }}
        >
          <div
            className="flex items-center h-[52px] w-[350px] px-[16px] rounded-[26px]"
            style={{
              backgroundColor: tokens.colors.backgroundsGroupedSecondary,
            }}
          >
            {/* Title */}
            <p
              className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap"
              style={{
                fontFamily: tokens.typography.body.fontFamily,
                fontWeight: tokens.typography.body.fontWeight,
                fontSize: tokens.typography.body.fontSize,
                lineHeight: tokens.typography.body.lineHeight,
                letterSpacing: tokens.typography.body.letterSpacing,
                color: tokens.colors.labelsPrimary,
              }}
            >
              Whisper on pause
            </p>
            {/* Toggle */}
            <ToggleSwitch
              checked={whisperOnPause}
              onChange={setWhisperOnPause}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Notch */}
      <div className="absolute w-[150px] h-[37px] left-[126px] top-0 bg-black rounded-b-[24px] pointer-events-none z-50" />
    </div>
  );
}
