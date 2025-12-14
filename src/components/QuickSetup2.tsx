import {
  X,
  ChevronLeft,
  Calendar as CalendarIcon,
} from "lucide-react";
import { StatusBar } from "./StatusBar";
import { useState, useEffect } from "react";
import { Calendar } from "./ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import { format } from "date-fns";
import { motion } from "motion/react";
import optionButtonBg from "../assets/gradient-pill-bg.png";
import { LiquidGlassButton } from "./shared/LiquidGlassButton";
import backIcon from "../assets/back-icon-dark.svg";
import closeIcon from "../assets/close-icon-dark.svg";

interface Setup2FormData {
  goal: string;
  selectedPerson: string | null;
  date: Date | undefined;
}

interface QuickSetup2Props {
  onClose: () => void;
  onBack: () => void;
  onNext: () => void;
  onAdvancedSetup: () => void;
  initialData?: Setup2FormData;
  onDataChange?: (data: Setup2FormData) => void;
}

export function QuickSetup2({
  onClose,
  onBack,
  onNext,
  onAdvancedSetup,
  initialData,
  onDataChange,
}: QuickSetup2Props) {
  const [goal, setGoal] = useState(initialData?.goal || "");
  const [selectedPerson, setSelectedPerson] = useState<
    string | null
  >(initialData?.selectedPerson || null);
  const [date, setDate] = useState<Date | undefined>(
    initialData?.date,
  );
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const isFormValid =
    goal.trim() !== "" && selectedPerson !== null;

  // Update parent component when form data changes
  useEffect(() => {
    if (onDataChange) {
      onDataChange({ goal, selectedPerson, date });
    }
  }, [goal, selectedPerson, date, onDataChange]);

  return (
    <div className="relative w-[390px] h-screen bg-white mx-auto">
      <StatusBar variant="dark" />

      {/* Toolbar */}
      <div className="flex justify-between items-center px-4 pb-[10px] h-[54px]">
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

      {/* Progress Indicator */}
      <div className="flex items-start px-5 gap-1 h-[3px]">
        {/* Step 1 - Already filled */}
        <div
          className="w-[114px] h-[3px] rounded-sm"
          style={{
            background:
              "linear-gradient(90deg, #3E5FFF 41.06%, #00AEFF 100%)",
          }}
        />
        {/* Step 2 - Animated fill */}
        <div className="w-[114px] h-[3px] bg-[#E9EBF3] rounded-sm overflow-hidden">
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
        </div>
        {/* Step 3 - Not filled */}
        <div className="w-[114px] h-[3px] bg-[#E9EBF3] rounded-sm" />
      </div>

      {/* Content */}
      <div
        className="flex flex-col pt-8 px-5 gap-10"
        style={{ paddingBottom: "36px" }}
      >
        {/* Title */}
        <motion.div
          className="flex flex-col"
          style={{ gap: "4px" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
        >
          <h2
            style={{
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
              fontSize: "15px",
              fontWeight: 350,
              lineHeight: "20px",
              color: "#333333",
            }}
          >
            AI will play your manager, client, or partner to
            help you practice before the real talk
          </p>
        </motion.div>

        {/* Form Fields */}
        <motion.div
          className="flex flex-col gap-[42px]"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.3,
              },
            },
          }}
        >
          {/* What do you want to achieve? */}
          <motion.div 
            className="flex flex-col gap-3"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
            }}
          >
            <label
              style={{
                fontSize: "15px",
                fontWeight: 600,
                lineHeight: "20px",
                color: "#333333",
              }}
            >
              What do you want to achieve?
            </label>
            <input
              type="text"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="e.g., Ask for a raise, Set boundaries..."
              className="w-full h-12 px-5 border border-[#E9EBF3] rounded-[26px] outline-none"
              style={{
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "20px",
                letterSpacing: "-0.150391px",
                color: goal ? "#0A0A0A" : "#717182",
              }}
            />
          </motion.div>

          {/* Who are you talking to? */}
          <motion.div 
            className="flex flex-col gap-3"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
            }}
          >
            <label
              style={{
                fontSize: "15px",
                fontWeight: 600,
                lineHeight: "20px",
                color: "#333333",
              }}
            >
              Who are you talking to?
            </label>
            <div className="flex flex-wrap gap-2.5">
              {[
                "Manager",
                "Peer",
                "Direct Report",
                "Client",
              ].map((person) => (
                <motion.button
                  key={person}
                  onClick={() => setSelectedPerson(person)}
                  className="flex justify-center items-center px-3.5 py-3.5 h-[47px] rounded-3xl border transition-all overflow-hidden relative"
                  whileTap={{ scale: 0.97 }}
                  style={{
                    borderColor:
                      selectedPerson === person
                        ? "transparent"
                        : "#E9EBF3",
                    backgroundColor: "#FFFFFF",
                    width: "170px",
                  }}
                >
                  {/* Animated Background */}
                  {selectedPerson === person && (
                    <motion.div
                      className="absolute inset-0"
                      initial={{ clipPath: "polygon(0 100%, 0 100%, 0 100%)" }}
                      animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      style={{
                        backgroundImage: `url(${optionButtonBg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                  )}
                  <span
                    className="relative z-10"
                    style={{
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "21px",
                      color:
                        selectedPerson === person
                          ? "#FFFFFF"
                          : "rgba(0, 0, 0, 0.9)",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {person}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Date (Optional) */}
          <motion.div 
            className="flex flex-col gap-3"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
            }}
          >
            <label
              style={{
                fontSize: "15px",
                fontWeight: 600,
                lineHeight: "20px",
                color: "#333333",
              }}
            >
              Date (Optional)
            </label>
            <Popover
              open={isCalendarOpen}
              onOpenChange={setIsCalendarOpen}
            >
              <PopoverTrigger asChild>
                <div className="flex items-center px-5 py-3.5 h-12 border border-[#E9EBF3] rounded-[26px] gap-2.5 cursor-pointer">
                  <CalendarIcon
                    className="w-5 h-5 text-[#99A1AF]"
                    strokeWidth={1.67}
                  />
                  <input
                    type="text"
                    value={date ? format(date, "PPP") : ""}
                    readOnly
                    placeholder="Select date"
                    className="flex-1 outline-none bg-transparent cursor-pointer placeholder:text-[#99A1AF]"
                    style={{
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "20px",
                      letterSpacing: "-0.150391px",
                      color: "#0A0A0A",
                    }}
                  />
                </div>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto p-0"
                align="start"
              >
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(selectedDate) => {
                    setDate(selectedDate);
                    setIsCalendarOpen(false);
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </motion.div>

          {/* Advanced Setup Module */}
          <motion.div
            className="flex flex-col items-center gap-2"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
            }}
            style={{
              padding: "0px",
              width: "350px",
              height: "76px",
              alignSelf: "stretch",
            }}
          >
            <button
              disabled={!isFormValid}
              onClick={onAdvancedSetup}
              className="flex justify-center items-center rounded-[22px] transition-opacity"
              style={{
                boxSizing: "border-box",
                padding: "10px 69px",
                gap: "10px",
                width: "351px",
                height: "44px",
                border: "1px solid #000000",
                background: "transparent",
                opacity: isFormValid ? 1 : 0.5,
                cursor: isFormValid ? "pointer" : "not-allowed",
              }}
            >
              <span
                style={{
                  fontStyle: "normal",
                  fontWeight: 510,
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "-0.3125px",
                  color: "#000000",
                  whiteSpace: "nowrap",
                }}
              >
                + Advanced Setup (optional)
              </span>
            </button>
            <p
              style={{
                fontStyle: "normal",
                fontWeight: 274,
                fontSize: "14px",
                lineHeight: "24px",
                textAlign: "center",
                letterSpacing: "-0.3125px",
                color: "rgba(0, 0, 0, 0.6)",
                width: "327px",
                height: "24px",
              }}
            >
              Fine-tune your practice session for maximum impact
            </p>
          </motion.div>
        </motion.div>

        {/* Start Practice Button */}
        <motion.button
          disabled={!isFormValid}
          onClick={onNext}
          className="flex justify-center items-center h-12 rounded-[28px] transition-opacity mt-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.78 }}
          style={{
            width: "350px",
            padding: "14px 113px",
            background: "#000000",
            opacity: isFormValid ? 1 : 0.5,
          }}
        >
          <span
            className="text-white text-center"
            style={{
              fontSize: "16px",
              fontWeight: 590,
              lineHeight: "20px",
              letterSpacing: "-0.150391px",
            }}
          >
            Next
          </span>
        </motion.button>
      </div>

    </div>
  );
}