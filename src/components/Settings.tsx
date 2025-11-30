import svgPaths from "../imports/svg-q98ffmnpjl";
import imgEllipse8 from "figma:asset/76adeb644b64864ede1a03b297c97a918e9a052a.png";
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
        <div className="absolute inset-[-2%]">
          <img alt="" className="block max-w-none size-full" height="104" src={imgEllipse8} width="104" />
        </div>
      </div>
      <EditIcon />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center leading-[0] left-[20px] top-[87px]">
      <Group3 />
      <div className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[0px] text-black text-nowrap whitespace-pre">
        <p className="mb-0 text-[24px]">Qi</p>
        <p className="text-[12px]">Free Plan</p>
      </div>
    </div>
  );
}

// Communication Progress Card
function CommunicationProgressCard() {
  return (
    <motion.div 
      className="flex flex-row items-center gap-[8px] w-[167px] h-[88px] bg-white rounded-[16px] px-[12px] py-[20px]"
      whileHover={{ 
        boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
        transition: { duration: 0.2 } 
      }}
      whileTap={{ scale: 0.98 }}
      style={{
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.08)"
      }}
    >
      {/* Circle Icon */}
      <div className="w-[42px] h-[42px] bg-[#E8E8F0] rounded-full flex-shrink-0" />
      
      {/* Text */}
      <div className="w-[95px] h-[48px]">
        <p 
          className="m-0"
          style={{ 
            fontFamily: 'SF Pro',
            fontWeight: 700,
            fontSize: '12px',
            lineHeight: '16px',
            color: 'rgba(0, 0, 0, 0.9)'
          }}
        >
          Communication
        </p>
        <p 
          className="m-0"
          style={{ 
            fontFamily: 'SF Pro',
            fontWeight: 700,
            fontSize: '12px',
            lineHeight: '16px',
            color: 'rgba(0, 0, 0, 0.9)'
          }}
        >
          Progress
        </p>
        <p 
          className="m-0"
          style={{ 
            fontFamily: 'SF Pro',
            fontWeight: 274,
            fontSize: '12px',
            lineHeight: '16px',
            color: 'rgba(0, 0, 0, 0.6)'
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
      className="flex flex-col items-start gap-[8px] w-[167px] h-[88px] bg-white rounded-[16px] px-[12px] py-[20px]"
      whileHover={{ 
        boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
        transition: { duration: 0.2 } 
      }}
      whileTap={{ scale: 0.98 }}
      style={{
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.08)"
      }}
    >
      {/* Content Row */}
      <div className="flex flex-row items-center gap-[8px] w-[101px] h-[48px]">
        {/* Circle Icon */}
        <div className="w-[42px] h-[42px] bg-[#E8E8F0] rounded-full flex-shrink-0" />
        
        {/* Text */}
        <div className="w-[51px] h-[48px]">
          <p 
            className="m-0"
            style={{ 
              fontFamily: 'SF Pro',
              fontWeight: 700,
              fontSize: '12px',
              lineHeight: '16px',
              color: 'rgba(0, 0, 0, 0.9)'
            }}
          >
            Practice
          </p>
          <p 
            className="m-0"
            style={{ 
              fontFamily: 'SF Pro',
              fontWeight: 700,
              fontSize: '12px',
              lineHeight: '16px',
              color: 'rgba(0, 0, 0, 0.9)'
            }}
          >
            History
          </p>
          <p 
            className="m-0"
            style={{ 
              fontFamily: 'SF Pro',
              fontWeight: 274,
              fontSize: '12px',
              lineHeight: '16px',
              color: 'rgba(0, 0, 0, 0.6)'
            }}
          >
            3 Units
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// Top Cards Container
function Frame5() {
  return (
    <div className="flex flex-row items-center gap-[16px] w-[350px] h-[88px]">
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
    <div className="flex flex-col items-start gap-[8px] w-[350px] h-[199px]">
      {/* Title */}
      <h2 
        className="m-0 w-[350px] h-[14px]"
        style={{ 
          fontFamily: 'SF Pro',
          fontWeight: 590,
          fontSize: '14px',
          lineHeight: '14px',
          color: '#000000'
        }}
      >
        Reminder Setting
      </h2>
      
      {/* White Card */}
      <div className="relative w-[350px] h-[177px]">
        <motion.div 
          className="absolute left-0 top-[22px] flex flex-col items-start gap-[7px] w-[350px] h-[177px] bg-white rounded-[20px] p-[20px]"
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
          <div className="flex flex-row flex-wrap items-center content-start gap-[7px_133px] w-[310px] h-[43px]">
            <div className="flex flex-row justify-between items-center gap-[133px] w-[310px] h-[36px]">
              <p 
                className="m-0 w-[187px] h-[36px]"
                style={{ 
                  fontFamily: 'SF Pro',
                  fontWeight: 590,
                  fontSize: '15px',
                  lineHeight: '36px',
                  color: 'rgba(0, 0, 0, 0.9)',
                  whiteSpace: 'nowrap'
                }}
              >
                Assist Mode & Sensitivity
              </p>
              <ArrowBackSimple />
            </div>
            
            {/* Line */}
            <div className="w-[314px] h-0 border-t border-[rgba(0,0,0,0.12)]" />
          </div>
          
          {/* Calibrate in 20 Seconds */}
          <div className="flex flex-row flex-wrap items-center content-start gap-[8px_196px] w-[310px] h-[44px]">
            <div className="flex flex-row justify-between items-center gap-[203px] w-[310px] h-[36px]">
              <p 
                className="m-0 w-[288px] h-[36px]"
                style={{ 
                  fontFamily: 'SF Pro',
                  fontWeight: 590,
                  fontSize: '15px',
                  lineHeight: '36px',
                  color: 'rgba(0, 0, 0, 0.9)',
                  whiteSpace: 'nowrap'
                }}
              >
                Calibrate in 20 Seconds
              </p>
              <ArrowBackSimple />
            </div>
            
            {/* Line */}
            <div className="w-[314px] h-0 border-t border-[rgba(0,0,0,0.12)]" />
          </div>
          
          {/* Nudges & Delivery */}
          <div className="flex flex-row justify-between items-center gap-[175px] w-[310px] h-[36px]">
            <p 
              className="m-0 w-[136px] h-[36px]"
              style={{ 
                fontFamily: 'SF Pro',
                fontWeight: 590,
                fontSize: '15px',
                lineHeight: '36px',
                color: 'rgba(0, 0, 0, 0.9)',
                whiteSpace: 'nowrap'
              }}
            >
              Nudges & Delivery
            </p>
            
            <div className="flex flex-row items-center gap-[4px] w-[66px] h-[36px]">
              <p 
                className="m-0 w-[45px] h-[36px]"
                style={{ 
                  fontFamily: 'SF Pro',
                  fontWeight: 274,
                  fontSize: '12px',
                  lineHeight: '36px',
                  color: 'rgba(0, 0, 0, 0.6)',
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
    <div className="flex flex-col items-start gap-[8px] w-[350px] h-[207px]">
      {/* Title */}
      <h2 
        className="m-0 w-[350px] h-[14px]"
        style={{ 
          fontFamily: 'SF Pro',
          fontWeight: 590,
          fontSize: '14px',
          lineHeight: '14px',
          color: '#000000'
        }}
      >
        Support
      </h2>
      
      {/* White Card */}
      <div className="relative w-[350px] h-[185px]">
        <motion.div 
          className="absolute left-0 top-[22px] flex flex-col items-start gap-[7px] w-[350px] h-[185px] bg-white rounded-[20px] p-[20px]"
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
          <div className="flex flex-row flex-wrap items-center content-start gap-[7px_133px] w-[310px] h-[43px]">
            <div className="flex flex-row justify-between items-center gap-[133px] w-[314px] h-[36px]">
              <p 
                className="m-0 w-[127px] h-[36px]"
                style={{ 
                  fontFamily: 'SF Pro',
                  fontWeight: 590,
                  fontSize: '15px',
                  lineHeight: '36px',
                  color: '#000000',
                  whiteSpace: 'nowrap'
                }}
              >
                Terms Of Service
              </p>
              <div className="w-[17px] h-[17px] flex items-center justify-center" style={{ transform: 'matrix(-1, 0, 0, 1, 0, 0)' }}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                  <path d={svgPaths.p365e80} stroke="rgba(255, 255, 255, 0.54)" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            
            {/* Line */}
            <div className="w-[314px] h-0 border-t border-[rgba(0,0,0,0.12)]" />
          </div>
          
          {/* Privacy Policy */}
          <div className="flex flex-row flex-wrap items-center content-start gap-[8px_196px] w-[310px] h-[44px]">
            <div className="relative w-[314px] h-[36px]">
              <p 
                className="absolute left-0 top-0 m-0 w-[121px] h-[36px]"
                style={{ 
                  fontFamily: 'SF Pro',
                  fontWeight: 590,
                  fontSize: '15px',
                  lineHeight: '36px',
                  color: '#000000',
                  whiteSpace: 'nowrap'
                }}
              >
                Privacy Policy
              </p>
              <div className="absolute left-[296.21px] top-[9.5px] w-[17.79px] h-[17px] flex items-center justify-center" style={{ transform: 'matrix(-1, 0, 0, 1, 0, 0)' }}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 17">
                  <path d={svgPaths.p35a4b300} stroke="rgba(255, 255, 255, 0.54)" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            
            {/* Line */}
            <div className="w-[314px] h-0 border-t border-[rgba(0,0,0,0.12)]" />
          </div>
          
          {/* Contact Support */}
          <div className="flex flex-row flex-wrap items-center content-start gap-[8px_196px] w-[310px] h-[44px]">
            <div className="relative w-[314px] h-[36px]">
              <p 
                className="absolute left-0 top-0 m-0 w-[124px] h-[36px]"
                style={{ 
                  fontFamily: 'SF Pro',
                  fontWeight: 700,
                  fontSize: '15px',
                  lineHeight: '36px',
                  color: '#000000',
                  whiteSpace: 'nowrap'
                }}
              >
                Contact Support
              </p>
              <div className="absolute left-[296.21px] top-[9.5px] w-[17.79px] h-[17px] flex items-center justify-center" style={{ transform: 'matrix(-1, 0, 0, 1, 0, 0)' }}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 17">
                  <path d={svgPaths.p35a4b300} stroke="rgba(255, 255, 255, 0.54)" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            
            {/* Line */}
            <div className="w-[314px] h-0 border-t border-[rgba(0,0,0,0.12)]" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Main Content Container
function Frame19() {
  return (
    <div className="absolute flex flex-col gap-[24px] items-start left-[20px] top-[229px] w-[350px]">
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
      className="absolute bg-black box-border content-stretch flex gap-[8px] items-center left-[268px] pl-[4px] pr-[12px] py-[4px] rounded-[100px] top-[117px]" 
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
    <div className="relative w-[390px] h-[844px] bg-[#f5f6fa] overflow-hidden">
      {/* Status Bar */}
      <div className="absolute h-[44px] left-0 top-0 w-[390px] flex justify-center items-center px-4 pt-[21px] pb-[19px]">
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

      {/* Back Button */}
      <button
        onClick={onBack}
        className="absolute left-[20px] top-[62px] flex items-center justify-center w-11 h-11 rounded-full z-50"
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

      <Frame4 />
      <Frame19 />
      <UnlockPro />

      {/* Notch - Black container at top */}
      <div className="absolute w-[150px] h-[37px] left-[126px] top-0 bg-black rounded-b-[24px]" />
    </div>
  );
}