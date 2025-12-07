import svgPaths from "../imports/svg-q98ffmnpjl";
import imgEllipse8 from "../assets/profile-avatar.png";
import imgSubtract from "../assets/Subtract.png";
import imgProgress from "../assets/Progress.png";
import { StatusBar } from "./StatusBar";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

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
      <div
        className="[grid-area:1_/_1] ml-0 mt-0 relative size-[100px] rounded-full overflow-hidden bg-white"
        style={{
          border: '2px solid #9810FA',
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <img
          alt="Profile"
          className="block object-cover"
          src={imgEllipse8}
          style={{
            width: '120%',
            height: '120%',
            minWidth: '120%',
            minHeight: '120%'
          }}
        />
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
      {/* Circle Icon with Progress image */}
      <div className="w-[42px] h-[42px] flex-shrink-0 flex items-center justify-center">
        <img src={imgProgress} alt="Progress" className="w-full h-full object-contain" />
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
      {/* Circle Icon with Subtract image */}
      <div className="w-[42px] h-[42px] flex-shrink-0 flex items-center justify-center">
        <img src={imgSubtract} alt="History" className="w-full h-full object-contain" />
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

// Animated Main Content Container
function Frame19Animated() {
  return (
    <>
      {/* Top Cards - Communication Progress and Practice History */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
        }}
      >
        <Frame5 />
      </motion.div>
      
      {/* Reminder Setting */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
        }}
      >
        <Frame />
      </motion.div>
      
      {/* Support */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
        }}
      >
        <Frame9 />
      </motion.div>
    </>
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
  const navigate = useNavigate();
  
  return (
    <div className="relative w-[390px] h-screen mx-auto bg-[#f5f6fa] overflow-hidden flex flex-col">
      <StatusBar variant="dark" />

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
      <motion.div
        className="flex-1 overflow-y-auto flex flex-col gap-[24px]"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.12,
              delayChildren: 0.1,
            },
          },
        }}
        style={{
          paddingLeft: '20px',
          paddingRight: '20px',
          paddingBottom: '100px'
        }}
      >
        {/* Profile Section */}
        <motion.div 
          className="flex justify-between items-center w-full"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
          }}
        >
          <Frame4 />
          <UnlockPro />
        </motion.div>

        {/* Main Content */}
        <Frame19Animated />
      </motion.div>

      {/* Bottom Navigation - Floating */}
      <div
        className="fixed bottom-5 left-1/2 -translate-x-1/2 w-[350px] z-30"
        style={{
          borderRadius: '42px',
          background: 'rgba(247, 247, 247, 0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '0.5px solid rgba(255, 255, 255, 0.8)',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15), inset 0px 1px 0px rgba(255, 255, 255, 0.4)'
        }}
      >
        <div className="flex justify-center items-center py-1 px-5">
          {/* Home */}
          <button onClick={onBack} className="flex flex-col items-center justify-center w-14">
            <div className="w-[30px] h-[30px] relative flex items-center justify-center">
              <svg width="23" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.4034 0.0581172C11.8167 -0.0193988 12.2411 -0.019346 12.6543 0.0581172C13.1241 0.146271 13.5597 0.364329 14.1123 0.641125L20.2735 3.72218C20.3208 3.74585 20.368 3.76849 20.4141 3.79152C21.4655 4.3167 22.1919 4.68099 22.7364 5.23683C23.2159 5.72652 23.5812 6.3165 23.8047 6.96437C24.0584 7.69985 24.0581 8.51281 24.0577 9.688V14.2456C24.0577 15.9377 24.0578 17.2653 23.9707 18.3316C23.882 19.4172 23.6978 20.3145 23.2842 21.1265C22.6042 22.4611 21.5193 23.5459 20.1846 24.2261C19.3727 24.6399 18.4746 24.8249 17.3887 24.9136C16.3227 25.0006 14.9963 25.0005 13.3047 25.0005H10.7539C9.06207 25.0005 7.73518 25.0006 6.66899 24.9136C5.58314 24.8249 4.68504 24.6399 3.87309 24.2261C2.53861 23.546 1.45347 22.461 0.773478 21.1265C0.359854 20.3147 0.175668 19.4172 0.0869544 18.3316C-0.000130579 17.2653 4.02924e-05 15.9376 4.02924e-05 14.2456V9.688C-0.00044075 8.51283 -0.000630081 7.69984 0.25297 6.96437C0.476524 6.31653 0.841855 5.72652 1.32133 5.23683C1.86574 4.68099 2.59222 4.31667 3.64359 3.79152C3.68986 3.76842 3.73768 3.74593 3.7852 3.72218L9.84965 0.688977C9.88192 0.672891 9.91405 0.65685 9.94535 0.641125C10.498 0.364336 10.9338 0.14627 11.4034 0.0581172ZM12.0313 14.3257C11.6585 14.3257 11.3565 14.6277 11.3565 15.0005V20.0005C11.3567 20.3731 11.6587 20.6753 12.0313 20.6753C12.4039 20.6753 12.7058 20.3731 12.7061 20.0005V15.0005C12.7061 14.6277 12.4041 14.3257 12.0313 14.3257Z" fill="#000000" />
              </svg>
            </div>
            <span
              className="text-[#515B70]"
              style={{
                fontFamily: 'SF Pro',
                fontSize: '12px',
                fontWeight: 510,
                lineHeight: '130%'
              }}
            >
              Home
            </span>
          </button>

          {/* Chart */}
          <div className="w-14 h-14" />

          {/* AI Growy - Center with gradient */}
          <button className="relative w-12 h-12" onClick={() => navigate('/ai-chat')}>
            <motion.div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              whileTap={{ scale: 0.9 }}
              style={{
                background: 'linear-gradient(147.61deg, #FC53EB 32.82%, #FFBF00 68.45%, #62E2F5 104.08%)',
                boxShadow: 'inset 0px 8px 12px rgba(236, 232, 255, 0.56)'
              }}
            >
              <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.1387 12.5137C17.4052 12.5139 17.6362 12.698 17.6953 12.958L18.0117 14.3486C18.158 14.9915 18.6599 15.4933 19.3027 15.6396L20.6934 15.9561C20.9535 16.0152 21.1387 16.2469 21.1387 16.5137C21.1384 16.7802 20.9533 17.0112 20.6934 17.0703L19.3027 17.3867C18.6599 17.533 18.158 18.0349 18.0117 18.6777L17.6953 20.0684C17.6362 20.3283 17.4052 20.5134 17.1387 20.5137C16.8719 20.5137 16.6402 20.3285 16.5811 20.0684L16.2646 18.6777C16.1183 18.0349 15.6165 17.533 14.9736 17.3867L13.583 17.0703C13.3231 17.0112 13.1389 16.7802 13.1387 16.5137C13.1387 16.2469 13.3229 16.0152 13.583 15.9561L14.9736 15.6396C15.6165 15.4933 16.1183 14.9915 16.2646 14.3486L16.5811 12.958C16.6402 12.6979 16.8719 12.5137 17.1387 12.5137ZM8.83594 0.375C9.42526 0.375 9.93673 0.782762 10.0674 1.35742L10.7656 4.42871C11.0887 5.84938 12.1984 6.95919 13.6191 7.28223L16.6904 7.98047C17.2648 8.11113 17.6727 8.62183 17.6729 9.21094C17.6729 9.80023 17.265 10.3117 16.6904 10.4424L13.6191 11.1406C12.1984 11.4637 11.0887 12.5734 10.7656 13.9941L10.0674 17.0654C9.9367 17.64 9.42523 18.0479 8.83594 18.0479C8.24683 18.0477 7.73613 17.6398 7.60547 17.0654L6.90723 13.9941C6.58419 12.5734 5.47441 11.4637 4.05371 11.1406L0.982422 10.4424C0.407806 10.3117 0 9.80026 0 9.21094C0.000196601 8.6218 0.407944 8.11109 0.982422 7.98047L4.05371 7.28223C5.47441 6.95919 6.58419 5.84938 6.90723 4.42871L7.60547 1.35742C7.7361 0.78291 8.2468 0.375197 8.83594 0.375ZM16.2402 0C16.6129 0.000123598 16.915 0.302089 16.915 0.674805V2H18.2402C18.6129 2.00012 18.915 2.30209 18.915 2.6748C18.915 3.04749 18.6129 3.34949 18.2402 3.34961H16.915V4.6748C16.915 5.04749 16.6129 5.34949 16.2402 5.34961C15.8675 5.34961 15.5655 5.04757 15.5654 4.6748V3.34961H14.2402C13.8675 3.34961 13.5655 3.04757 13.5654 2.6748C13.5654 2.30201 13.8674 2 14.2402 2H15.5654V0.674805C15.5654 0.302012 15.8674 0 16.2402 0Z" fill="white" />
              </svg>
            </motion.div>
          </button>

          {/* Notify */}
          <div className="w-14 h-14" />

          {/* Settings - Active (Me tab) */}
          <button className="flex flex-col items-center justify-center w-14">
            <div className="w-[30px] h-[30px] relative flex items-center justify-center">
              <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.4521 0C12.2707 7.24412e-05 13.0498 0.190303 13.6455 0.536133L20.1484 4.28223C22.7823 6.05755 22.9385 6.32791 22.9385 9.09961V15.8984C22.9385 18.6764 22.7856 18.9456 20.21 20.6904L13.6816 24.4619C13.0771 24.8091 12.2951 25 11.4697 25C10.6443 25 9.86291 24.8087 9.26953 24.4619L2.79199 20.7285C0.15658 18.952 1.71146e-05 18.6821 0 15.9111V9.10059C0 6.32156 0.152833 6.05204 2.72852 4.30762L9.25781 0.536133C9.85368 0.190226 10.6335 0 11.4521 0ZM11.4746 9.375C9.74872 9.375 8.34961 10.7741 8.34961 12.5C8.34961 14.2259 9.74872 15.625 11.4746 15.625C13.2005 15.625 14.5996 14.2259 14.5996 12.5C14.5996 10.7741 13.2005 9.375 11.4746 9.375Z" fill="#8C00FF" />
              </svg>
            </div>
            <span
              className="text-[#8C00FF]"
              style={{
                fontFamily: 'SF Pro',
                fontSize: '12px',
                fontWeight: 510,
                lineHeight: '130%'
              }}
            >
              Me
            </span>
          </button>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="fixed bottom-2 left-1/2 -translate-x-1/2 w-[134px] h-[5px] bg-black rounded-full z-30" />

      {/* Notch - Black container at top */}
      <div className="absolute w-[150px] h-[37px] left-[126px] top-0 bg-black rounded-b-[24px] pointer-events-none z-50" />
    </div>
  );
}