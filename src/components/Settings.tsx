import svgPaths from "../imports/svg-q98ffmnpjl";
import imgEllipse8 from "../assets/profile-avatar.png";
import { StatusBar } from "./StatusBar";
import { motion } from "motion/react";

function EditIcon() {
  return (
    <div className="[grid-area:1_/_1] ml-[69px] mt-[69px] relative size-[31px]" data-name="Edit icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 31">
        <g id="Edit icon">
          <circle cx="15.5" cy="15.5" fill="var(--fill-0, #8C00FF)" id="Ellipse 185" r="15.5" />
          <g id="edit-01">
            <g id="Icon">
              <path clipRule="evenodd" d={svgPaths.p3769cf00} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p26b8ca80} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path d={svgPaths.p30e98b80} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[100px]">
        {/* Pink ring around profile */}
        <div
          className="absolute inset-[-4px] rounded-full"
          style={{
            background: 'linear-gradient(135deg, #FFB6C1 0%, #FFC4B8 50%, #FFDAB9 100%)',
            padding: '3px'
          }}
        >
          <div className="w-full h-full rounded-full overflow-hidden bg-white">
            <img alt="Profile" className="block w-full h-full object-cover" src={imgEllipse8} />
          </div>
        </div>
      </div>
      <EditIcon />
    </div>
  );
}

function Frame4() {
  return (
    <div className="flex gap-[16px] items-center">
      <Group3 />
      <div className="flex flex-col justify-center gap-[4px]">
        <p className="m-0 font-['Space_Grotesk:Bold',sans-serif] font-bold text-[32px] leading-[1.1] text-black">Qi</p>
        <p className="m-0 font-['SF_Pro',sans-serif] text-[15px] leading-normal text-gray-500 font-medium">Free Plan</p>
      </div>
    </div>
  );
}

// Communication Progress Card
function CommunicationProgressCard() {
  return (
    <motion.div
      className="flex flex-row items-center gap-[8px] h-[88px] bg-white rounded-[16px] px-[12px] py-[20px] overflow-hidden"
      style={{ 
        flex: '1 1 0',
        minWidth: 0,
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.08)"
      }}
      whileHover={{
        boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Circle Icon with Chart */}
      <div className="w-[42px] h-[42px] bg-gradient-to-br from-[#E8E0FF] to-[#D4C4FF] rounded-full flex-shrink-0 flex items-center justify-center">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3V21H21" stroke="#8C00FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 14L11 10L15 14L21 8" stroke="#8C00FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center h-[48px] min-w-0 flex-1">
        <p
          className="m-0"
          style={{
            fontFamily: 'SF Pro',
            fontWeight: 700,
            fontSize: '13px',
            lineHeight: '17px',
            color: 'rgba(0, 0, 0, 0.9)'
          }}
        >
          Communication
          <br />
          Progress
        </p>
        <p
          className="m-0 mt-[4px]"
          style={{
            fontFamily: 'SF Pro',
            fontWeight: 400,
            fontSize: '13px',
            lineHeight: '16px',
            color: 'rgba(0, 0, 0, 0.5)'
          }}
        >
          Level 1
        </p>
      </div>
    </motion.div>
  );
}

// Practice History Card
function PracticeHistoryCard() {
  return (
    <motion.div
      className="flex flex-row items-center gap-[8px] h-[88px] bg-white rounded-[16px] px-[12px] py-[20px] overflow-hidden"
      style={{ 
        flex: '1 1 0',
        minWidth: 0,
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.08)"
      }}
      whileHover={{
        boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Circle Icon with History */}
      <div className="w-[42px] h-[42px] bg-gradient-to-br from-[#E0F0FF] to-[#C4DFFF] rounded-full flex-shrink-0 flex items-center justify-center">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="9" stroke="#0066FF" strokeWidth="2" />
          <path d="M12 7V12L15 15" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center h-[48px] min-w-0 flex-1">
        <p
          className="m-0"
          style={{
            fontFamily: 'SF Pro',
            fontWeight: 700,
            fontSize: '13px',
            lineHeight: '17px',
            color: 'rgba(0, 0, 0, 0.9)'
          }}
        >
          Practice
          <br />
          History
        </p>
        <p
          className="m-0 mt-[4px]"
          style={{
            fontFamily: 'SF Pro',
            fontWeight: 400,
            fontSize: '13px',
            lineHeight: '16px',
            color: 'rgba(0, 0, 0, 0.5)'
          }}
        >
          3 Units
        </p>
      </div>
    </motion.div>
  );
}

// Top Cards Container
function Frame5() {
  return (
    <div className="flex flex-row items-center gap-[16px] w-full">
      <CommunicationProgressCard />
      <PracticeHistoryCard />
    </div>
  );
}

// Arrow Icon
function ArrowBackSimple() {
  return (
    <div className="w-[17px] h-[17px] flex items-center justify-center" style={{ transform: 'matrix(-1, 0, 0, 1, 0, 0)' }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <path d={svgPaths.p365e80} stroke="rgba(0, 0, 0, 0.54)" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

// Reminder Setting Section
function Frame() {
  return (
    <div className="flex flex-col items-start gap-[8px] w-full">
      {/* Title */}
      <h2
        className="m-0 w-full mb-[4px]"
        style={{
          fontFamily: 'SF Pro',
          fontWeight: 600,
          fontSize: '17px',
          lineHeight: '22px',
          color: '#000000'
        }}
      >
        Reminder Setting
      </h2>

      {/* White Card */}
      <div className="relative w-full">
        <motion.div
          className="flex flex-col items-start gap-[7px] w-full bg-white rounded-[20px] p-[20px]"
          whileHover={{
            boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.98 }}
          style={{
            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.08)"
          }}
        >
          {/* Assist Mode & Sensitivity */}
          <div className="flex flex-col w-full gap-[0px]">
            <div className="flex flex-row justify-between items-center w-full h-[54px] cursor-pointer">
              <p
                className="m-0"
                style={{
                  fontFamily: 'SF Pro',
                  fontWeight: 500,
                  fontSize: '16px',
                  color: '#000000',
                  whiteSpace: 'nowrap'
                }}
              >
                Assist Mode & Sensitivity
              </p>
              <ArrowBackSimple />
            </div>

            {/* Line */}
            <div className="w-full h-[1px] bg-[#F2F2F7]" />
          </div>

          {/* Calibrate in 20 Seconds */}
          <div className="flex flex-col w-full gap-[0px]">
            <div className="flex flex-row justify-between items-center w-full h-[54px] cursor-pointer">
              <p
                className="m-0"
                style={{
                  fontFamily: 'SF Pro',
                  fontWeight: 500,
                  fontSize: '16px',
                  color: '#000000',
                  whiteSpace: 'nowrap'
                }}
              >
                Calibrate in 20 Seconds
              </p>
              <ArrowBackSimple />
            </div>

            {/* Line */}
            <div className="w-full h-[1px] bg-[#F2F2F7]" />
          </div>

          {/* Nudges & Delivery */}
          <div className="flex flex-row justify-between items-center w-full h-[54px] cursor-pointer">
            <p
              className="m-0"
              style={{
                fontFamily: 'SF Pro',
                fontWeight: 500,
                fontSize: '16px',
                color: '#000000',
                whiteSpace: 'nowrap'
              }}
            >
              Nudges & Delivery
            </p>

            <div className="flex flex-row items-center gap-[8px]">
              <p
                className="m-0"
                style={{
                  fontFamily: 'SF Pro',
                  fontWeight: 400,
                  fontSize: '15px',
                  color: 'rgba(60, 60, 67, 0.6)',
                  whiteSpace: 'nowrap'
                }}
              >
                Medium
              </p>
              <ArrowBackSimple />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Support Section
function Frame9() {
  return (
    <div className="flex flex-col items-start gap-[8px] w-full">
      {/* Title */}
      <h2
        className="m-0 w-full mb-[4px]"
        style={{
          fontFamily: 'SF Pro',
          fontWeight: 600,
          fontSize: '17px',
          lineHeight: '22px',
          color: '#000000'
        }}
      >
        Support
      </h2>

      {/* White Card */}
      <div className="relative w-full">
        <motion.div
          className="flex flex-col items-start gap-[7px] w-full bg-white rounded-[20px] p-[20px]"
          whileHover={{
            boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.98 }}
          style={{
            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.08)"
          }}
        >
          {/* Terms Of Service */}
          <div className="flex flex-col w-full gap-[0px]">
            <div className="flex flex-row justify-between items-center w-full h-[54px] cursor-pointer">
              <p
                className="m-0"
                style={{
                  fontFamily: 'SF Pro',
                  fontWeight: 500,
                  fontSize: '16px',
                  color: '#000000',
                  whiteSpace: 'nowrap'
                }}
              >
                Terms Of Service
              </p>
              <ArrowBackSimple />
            </div>

            {/* Line */}
            <div className="w-full h-[1px] bg-[#F2F2F7]" />
          </div>

          {/* Privacy Policy */}
          <div className="flex flex-col w-full gap-[0px]">
            <div className="flex flex-row justify-between items-center w-full h-[54px] cursor-pointer">
              <p
                className="m-0"
                style={{
                  fontFamily: 'SF Pro',
                  fontWeight: 500,
                  fontSize: '16px',
                  color: '#000000',
                  whiteSpace: 'nowrap'
                }}
              >
                Privacy Policy
              </p>
              <ArrowBackSimple />
            </div>

            {/* Line */}
            <div className="w-full h-[1px] bg-[#F2F2F7]" />
          </div>

          {/* Contact Support */}
          <div className="flex flex-col w-full gap-[0px]">
            <div className="flex flex-row justify-between items-center w-full h-[54px] cursor-pointer">
              <p
                className="m-0"
                style={{
                  fontFamily: 'SF Pro',
                  fontWeight: 500,
                  fontSize: '16px',
                  color: '#000000',
                  whiteSpace: 'nowrap'
                }}
              >
                Contact Support
              </p>
              <ArrowBackSimple />
            </div>

            {/* Line */}
            <div className="w-full h-[1px] bg-[#F2F2F7]" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Main Content Container
function Frame19() {
  return (
    <div className="flex flex-col gap-[24px] items-start w-full">
      <Frame5 />
      <Frame />
      <Frame9 />
    </div>
  );
}

function Yellow() {
  return (
    <div className="absolute inset-[20.83%_12.5%_18.58%_12.5%]" data-name="yellow">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 15">
        <g id="yellow">
          <path d={svgPaths.p295be600} fill="var(--fill-0, #FFB04C)" id="Vector" />
          <path d={svgPaths.pd9fc100} fill="var(--fill-0, #FFDB6C)" id="Vector_2" />
          <path d={svgPaths.p17904700} fill="var(--fill-0, #FFC866)" id="Vector_3" />
          <path d={svgPaths.p2eb0b880} fill="var(--fill-0, #F7A05E)" id="Vector_4" />
          <path d={svgPaths.p115e6d80} fill="var(--fill-0, #FFDB6C)" id="Vector_5" />
          <path d={svgPaths.p3e70580} fill="var(--fill-0, #FFF2BB)" id="Vector_6" />
          <path d={svgPaths.p23be8300} fill="var(--fill-0, #FFEB8A)" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

function DiamondYellow() {
  return (
    <div className="overflow-clip relative shadow-[0px_56px_16px_0px_rgba(18,32,56,0),0px_36px_14px_0px_rgba(18,32,56,0.01),0px_20px_12px_0px_rgba(18,32,56,0.05),0px_9px_9px_0px_rgba(18,32,56,0.09),0px_2px_5px_0px_rgba(18,32,56,0.1)] shrink-0 size-[24px]" data-name="diamond-yellow">
      <Yellow />
    </div>
  );
}

function PlanPro() {
  return (
    <div className="bg-[#112038] box-border content-stretch flex gap-[8px] items-center justify-center p-[4px] relative rounded-[100px] shrink-0" data-name="plan pro">
      <DiamondYellow />
    </div>
  );
}

function LeftTitle() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative rounded-[1000px] shrink-0" data-name="left title">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-[1.3] whitespace-pre">Upgrade</p>
      </div>
    </div>
  );
}

function UnlockPro() {
  return (
    <motion.div
      className="bg-black box-border content-stretch flex gap-[8px] items-center pl-[4px] pr-[12px] py-[4px] rounded-[100px]"
      data-name="unlock Pro"
      whileHover={{
        boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
      style={{
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.08)"
      }}
    >
      <PlanPro />
      <LeftTitle />
    </motion.div>
  );
}

interface SettingsProps {
  onBack: () => void;
}

export function Settings({ onBack }: SettingsProps) {
  return (
    <div className="relative w-[390px] h-[844px] mx-auto bg-[#f5f6fa] overflow-hidden flex flex-col">
      {/* Status Bar */}
      <div className="h-[44px] w-full flex justify-between items-center px-[24px] pt-[12px] shrink-0 z-20">
        <span
          className="text-black"
          style={{
            fontFamily: "SF Pro",
            fontSize: "15px",
            fontWeight: 600,
            lineHeight: "20px",
          }}
        >
          9:41
        </span>
        <StatusBar variant="dark" />
      </div>

      {/* Header with Back Button */}
      <div 
        className="w-full pt-[18px] pb-[10px] shrink-0 z-10"
        style={{ paddingLeft: '20px', paddingRight: '20px' }}
      >
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
      </div>

      {/* Scrollable Content */}
      <div 
        className="flex-1 overflow-y-auto pb-[40px] flex flex-col gap-[24px]"
        style={{ paddingLeft: '20px', paddingRight: '20px' }}
      >
        {/* Profile Section */}
        <div className="flex justify-between items-center w-full">
          <Frame4 />
          <UnlockPro />
        </div>

        {/* Main Content */}
        <Frame19 />
      </div>

      {/* Notch - Black container at top */}
      <div className="absolute w-[150px] h-[37px] left-[126px] top-0 bg-black rounded-b-[24px] pointer-events-none z-50" />
    </div>
  );
}