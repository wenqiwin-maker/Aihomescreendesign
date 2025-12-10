import { useState } from "react";
import { StatusBar } from "./StatusBar";
import { motion } from "motion/react";

// Design tokens from Figma
const tokens = {
  colors: {
    labelsPrimary: "#000000",
    labelsSecondary: "rgba(60, 60, 67, 0.6)",
    labelsVibrantPrimary: "#333333",
    labelsVibrantControlsPrimary: "#404040",
    separatorsVibrant: "#e6e6e6",
    backgroundsGroupedSecondary: "#ffffff",
    accentPurple: "#8c00ff",
    screenBackground: "#f5f6fa",
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
      fontSize: "17px",
      lineHeight: "22px",
      letterSpacing: "-0.43px",
    },
    subheadline: {
      fontWeight: 400,
      fontSize: "15px",
      lineHeight: "20px",
      letterSpacing: "-0.23px",
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

// Toggle switch matching Figma: 64px wide, 2px padding, 39x24px knob
function ToggleSwitch({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  const knobTravel = 21;

  return (
    <motion.button
      onClick={() => onChange(!checked)}
      className="relative flex-shrink-0 flex items-center overflow-hidden"
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
      {/* On indicator - white vertical line */}
      <motion.div
        className="absolute left-[10px] flex items-center justify-center"
        animate={{ opacity: checked ? 1 : 0 }}
        transition={{ duration: 0.15 }}
      >
        <div
          className="bg-white shrink-0"
          style={{
            width: "1px",
            height: "10px",
          }}
        />
      </motion.div>
      {/* Knob */}
      <motion.div
        className="bg-white rounded-[100px] shrink-0"
        style={{
          width: "39px",
          height: "24px",
          boxShadow:
            "0px 3px 8px rgba(0, 0, 0, 0.15), 0px 3px 1px rgba(0, 0, 0, 0.06)",
        }}
        animate={{
          x: checked ? knobTravel : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </motion.button>
  );
}


// Try button matching Figma design
function TryButton({ onTry }: { onTry: () => void }) {
  return (
    <motion.button
      onClick={onTry}
      className="flex items-center justify-center"
      style={{
        width: "318px",
        height: "36px",
        borderRadius: "18px",
        border: `1px solid ${tokens.colors.accentPurple}`,
        backgroundColor: "transparent",
      }}
      whileTap={{ scale: 0.98 }}
    >
      <span
        style={{
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "20px",
          letterSpacing: "-0.15px",
          color: tokens.colors.accentPurple,
        }}
      >
        Try
      </span>
    </motion.button>
  );
}

// Haptic row item
interface HapticRowProps {
  title: string;
  subtitle: string;
  enabled: boolean;
  onToggle: (enabled: boolean) => void;
  onTry: () => void;
  showTryButton?: boolean;
}

function HapticRow({ title, subtitle, enabled, onToggle, onTry, showTryButton = true }: HapticRowProps) {
  return (
    <div
      className="flex flex-col w-full"
      style={{ padding: "0 16px 20px 16px" }}
    >
      <div className="flex flex-col w-full">
        <Separator />
        <div
          className="flex items-center w-full"
          style={{ padding: "12px 0 8px 0" }}
        >
          {/* Title and Subtitle */}
          <div className="flex flex-col justify-center flex-1">
            <p
              style={{
                fontWeight: tokens.typography.body.fontWeight,
                fontSize: tokens.typography.body.fontSize,
                lineHeight: tokens.typography.body.lineHeight,
                letterSpacing: tokens.typography.body.letterSpacing,
                color: tokens.colors.labelsPrimary,
              }}
            >
              {title}
            </p>
            <p
              style={{
                fontWeight: tokens.typography.subheadline.fontWeight,
                fontSize: tokens.typography.subheadline.fontSize,
                lineHeight: tokens.typography.subheadline.lineHeight,
                letterSpacing: tokens.typography.subheadline.letterSpacing,
                color: tokens.colors.labelsSecondary,
              }}
            >
              {subtitle}
            </p>
          </div>
          {/* Toggle */}
          <ToggleSwitch checked={enabled} onChange={onToggle} />
        </div>
        {/* Try Button */}
        {showTryButton && <TryButton onTry={onTry} />}
      </div>
    </div>
  );
}

// Reminder row item (without Try button)
interface ReminderRowProps {
  title: string;
  subtitle: string;
  enabled: boolean;
  onToggle: (enabled: boolean) => void;
  showTryButton?: boolean;
  onTry?: () => void;
}

function ReminderRow({ title, subtitle, enabled, onToggle, showTryButton = false, onTry }: ReminderRowProps) {
  return (
    <div
      className="flex flex-col w-full"
      style={{ padding: showTryButton ? "0 16px 20px 16px" : "0 16px" }}
    >
      <div className="flex flex-col w-full">
        <Separator />
        <div
          className="flex items-center w-full"
          style={{ padding: "12px 0 8px 0" }}
        >
          {/* Title and Subtitle */}
          <div className="flex flex-col justify-center flex-1">
            <p
              style={{
                fontWeight: tokens.typography.body.fontWeight,
                fontSize: tokens.typography.body.fontSize,
                lineHeight: tokens.typography.body.lineHeight,
                letterSpacing: tokens.typography.body.letterSpacing,
                color: tokens.colors.labelsPrimary,
              }}
            >
              {title}
            </p>
            <p
              style={{
                fontWeight: tokens.typography.subheadline.fontWeight,
                fontSize: tokens.typography.subheadline.fontSize,
                lineHeight: tokens.typography.subheadline.lineHeight,
                letterSpacing: tokens.typography.subheadline.letterSpacing,
                color: tokens.colors.labelsSecondary,
              }}
            >
              {subtitle}
            </p>
          </div>
          {/* Toggle */}
          <ToggleSwitch checked={enabled} onChange={onToggle} />
        </div>
        {/* Try Button */}
        {showTryButton && onTry && <TryButton onTry={onTry} />}
      </div>
    </div>
  );
}

interface NudgesDeliverySettingsProps {
  onBack: () => void;
}

export function NudgesDeliverySettings({ onBack }: NudgesDeliverySettingsProps) {
  // Haptics state
  const [haptic1Short, setHaptic1Short] = useState(true);
  const [haptic2Short, setHaptic2Short] = useState(true);
  const [haptic1Long, setHaptic1Long] = useState(true);

  // Reminders state
  const [lockScreenTip, setLockScreenTip] = useState(true);
  const [assistingStatusBar, setAssistingStatusBar] = useState(true);
  const [showHapticLegend, setShowHapticLegend] = useState(true);

  const handleTryHaptic = (type: string) => {
    // Trigger haptic feedback if supported
    if ('vibrate' in navigator) {
      switch (type) {
        case '1short':
          navigator.vibrate(100);
          break;
        case '2short':
          navigator.vibrate([100, 50, 100]);
          break;
        case '1long':
          navigator.vibrate(300);
          break;
      }
    }
  };

  return (
    <div
      className="relative w-[390px] h-screen mx-auto overflow-hidden flex flex-col items-center"
      style={{ backgroundColor: tokens.colors.screenBackground }}
    >
      <StatusBar variant="dark" />

      {/* Toolbar - Top */}
      <div className="relative flex items-center justify-between w-[390px] pt-0 pb-[10px] px-[20px] shrink-0">
        {/* Leading - Back button */}
        <button
          onClick={onBack}
          className="flex items-center justify-center w-11 h-11 rounded-full"
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
            style={{
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "#404040",
            }}
          >
            􀯶
          </span>
        </button>

        {/* Title - Centered absolutely */}
        <div className="absolute h-[22px] left-1/2 top-[13px] -translate-x-1/2">
          <p
            className="text-center whitespace-nowrap"
            style={{
              fontWeight: tokens.typography.headline.fontWeight,
              fontSize: tokens.typography.headline.fontSize,
              lineHeight: tokens.typography.headline.lineHeight,
              letterSpacing: tokens.typography.headline.letterSpacing,
              color: tokens.colors.labelsVibrantPrimary,
            }}
          >
            Nudges & Delivery
          </p>
        </div>

        {/* Spacer for layout balance */}
        <div className="w-11 h-11" />
      </div>

      {/* Content Area */}
      <motion.div
        className="flex-1 flex flex-col gap-[30px] py-[10px] items-start overflow-y-auto w-full"
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
        style={{ paddingBottom: "20px" }}
      >
        {/* Haptics Section */}
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
          {/* Section Header */}
          <div className="flex items-center gap-[4px] mb-[10px]">
            <p
              style={{
                fontWeight: tokens.typography.body.fontWeight,
                fontSize: tokens.typography.body.fontSize,
                lineHeight: tokens.typography.body.lineHeight,
                letterSpacing: tokens.typography.body.letterSpacing,
                color: tokens.colors.labelsPrimary,
              }}
            >
              Haptics
            </p>
          </div>

          {/* Haptics Card */}
          <div
            className="flex flex-col w-[350px] rounded-[26px] overflow-hidden"
            style={{ backgroundColor: tokens.colors.backgroundsGroupedSecondary }}
          >
            <HapticRow
              title="1 Short"
              subtitle="Back to the Point"
              enabled={haptic1Short}
              onToggle={setHaptic1Short}
              onTry={() => handleTryHaptic('1short')}
            />
            <HapticRow
              title="2 Short"
              subtitle="Make the Ask"
              enabled={haptic2Short}
              onToggle={setHaptic2Short}
              onTry={() => handleTryHaptic('2short')}
            />
            <HapticRow
              title="1 Long"
              subtitle="De-Escalate"
              enabled={haptic1Long}
              onToggle={setHaptic1Long}
              onTry={() => handleTryHaptic('1long')}
            />
          </div>
        </motion.div>

        {/* Reminders Section */}
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
          {/* Section Header */}
          <div className="flex items-center gap-[4px] mb-[10px]">
            <p
              style={{
                fontWeight: tokens.typography.body.fontWeight,
                fontSize: tokens.typography.body.fontSize,
                lineHeight: tokens.typography.body.lineHeight,
                letterSpacing: tokens.typography.body.letterSpacing,
                color: tokens.colors.labelsPrimary,
              }}
            >
              Reminders
            </p>
          </div>

          {/* Reminders Card */}
          <div
            className="flex flex-col w-[350px] rounded-[26px] overflow-hidden"
            style={{ backgroundColor: tokens.colors.backgroundsGroupedSecondary }}
          >
            <ReminderRow
              title="Lock-screen tip"
              subtitle="Silent tip on lock screen"
              enabled={lockScreenTip}
              onToggle={setLockScreenTip}
            />
            <ReminderRow
              title="Assisting status bar"
              subtitle="Quick Mute/End controls"
              enabled={assistingStatusBar}
              onToggle={setAssistingStatusBar}
            />
            <ReminderRow
              title="Show haptic legend on first run"
              subtitle="Explain patterns to new users"
              enabled={showHapticLegend}
              onToggle={setShowHapticLegend}
              showTryButton={true}
              onTry={() => {
                // Could show haptic legend modal
              }}
            />
          </div>
        </motion.div>
      </motion.div>

    </div>
  );
}
