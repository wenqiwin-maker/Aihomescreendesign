import svgPaths from "./svg-q98ffmnpjl";
import imgEllipse8 from "figma:asset/76adeb644b64864ede1a03b297c97a918e9a052a.png";

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

function Frame7() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] items-center px-[12px] py-[20px] relative rounded-[16px] shrink-0 w-[167px]">
      <div className="relative shrink-0 size-[42px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
          <circle cx="21" cy="21" fill="var(--fill-0, #E8E8F0)" id="Ellipse 317" r="21" />
        </svg>
      </div>
      <div className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.9)] text-nowrap whitespace-pre">
        <p className="font-['SF_Pro:Bold',sans-serif] mb-0" style={{ fontVariationSettings: "'wdth' 100" }}>
          Communication
        </p>
        <p className="font-['SF_Pro:Bold',sans-serif] mb-0" style={{ fontVariationSettings: "'wdth' 100" }}>
          Progress
        </p>
        <p className="font-['SF_Pro:Light',sans-serif] font-[274.315] text-[rgba(0,0,0,0.6)]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Level 1
        </p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[42px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
          <circle cx="21" cy="21" fill="var(--fill-0, #E8E8F0)" id="Ellipse 317" r="21" />
        </svg>
      </div>
      <div className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.9)] text-nowrap whitespace-pre">
        <p className="font-['SF_Pro:Bold',sans-serif] mb-0" style={{ fontVariationSettings: "'wdth' 100" }}>
          Practice
        </p>
        <p className="font-['SF_Pro:Bold',sans-serif] mb-0" style={{ fontVariationSettings: "'wdth' 100" }}>
          History
        </p>
        <p className="font-['SF_Pro:Light',sans-serif] font-[274.315] text-[rgba(0,0,0,0.6)]" style={{ fontVariationSettings: "'wdth' 100" }}>
          3 Unites
        </p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[8px] items-start px-[12px] py-[20px] relative rounded-[16px] shrink-0 w-[167px]">
      <Frame3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function ArrowBackSimple() {
  return (
    <div className="relative size-[17px]" data-name="arrow-back-simple">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="arrow-back-simple">
          <path d={svgPaths.p365e80} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.54" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[310px]">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[35.598px] relative shrink-0 text-[15px] text-[rgba(0,0,0,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{`Assist Mode & Sensitivity`}</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <ArrowBackSimple />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-center flex flex-wrap gap-[133px] items-center relative shrink-0 w-[310px]">
      <Frame2 />
      <div className="h-0 relative shrink-0 w-[314px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 314 1">
            <line id="Line 34" stroke="var(--stroke-0, black)" strokeOpacity="0.12" x2="314" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ArrowBackSimple1() {
  return (
    <div className="h-[17px] relative w-[17.567px]" data-name="arrow-back-simple">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 17">
        <g id="arrow-back-simple">
          <path d={svgPaths.p26c44eef} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.54" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[310px]">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[35.598px] relative shrink-0 text-[15px] text-[rgba(0,0,0,0.9)] w-[288px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Calibrate in 20 Seconds
      </p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <ArrowBackSimple1 />
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-center flex flex-wrap gap-[196px] items-center relative shrink-0 w-[310px]">
      <Frame6 />
      <div className="h-0 relative shrink-0 w-[314px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 314 1">
            <line id="Line 34" stroke="var(--stroke-0, black)" strokeOpacity="0.12" x2="314" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ArrowBackSimple2() {
  return (
    <div className="relative size-[17px]" data-name="arrow-back-simple">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="arrow-back-simple">
          <path d={svgPaths.p365e80} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.54" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['SF_Pro:Light',sans-serif] font-[274.315] leading-[35.598px] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.6)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Medium
      </p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <ArrowBackSimple2 />
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[310px]">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[35.598px] relative shrink-0 text-[15px] text-[rgba(0,0,0,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{`Nudges & Delivery`}</p>
      <Frame11 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="[grid-area:1_/_1] bg-white box-border content-stretch flex flex-col gap-[7px] items-start ml-0 mt-0 p-[20px] relative rounded-[20px]">
      <Frame1 />
      <Frame10 />
      <Frame12 />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame13 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[14px] min-w-full relative shrink-0 text-[14px] text-black w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Reminder Setting
      </p>
      <Group />
    </div>
  );
}

function ArrowBackSimple3() {
  return (
    <div className="relative size-[17px]" data-name="arrow-back-simple">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="arrow-back-simple">
          <path d={svgPaths.p365e80} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.54" />
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[314px]">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[35.598px] relative shrink-0 text-[15px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Terms Of Service
      </p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <ArrowBackSimple3 />
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-center flex flex-wrap gap-[133px] items-center relative shrink-0 w-[310px]">
      <Frame14 />
      <div className="h-0 relative shrink-0 w-[314px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 314 1">
            <line id="Line 34" stroke="var(--stroke-0, black)" strokeOpacity="0.12" x2="314" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ArrowBackSimple4() {
  return (
    <div className="h-[17px] relative w-[17.793px]" data-name="arrow-back-simple">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 17">
        <g id="arrow-back-simple">
          <path d={svgPaths.p35a4b300} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.54" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <p className="[grid-area:1_/_1] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[35.598px] ml-0 mt-0 relative text-[15px] text-black w-[121px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Privacy Policy
      </p>
      <div className="[grid-area:1_/_1] flex h-[17px] items-center justify-center ml-[296.21px] mt-[9.5px] relative w-[17.793px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <ArrowBackSimple4 />
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-center flex flex-wrap gap-[196px] items-center relative shrink-0 w-[310px]">
      <Group2 />
      <div className="h-0 relative shrink-0 w-[314px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 314 1">
            <line id="Line 34" stroke="var(--stroke-0, black)" strokeOpacity="0.12" x2="314" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ArrowBackSimple5() {
  return (
    <div className="h-[17px] relative w-[17.793px]" data-name="arrow-back-simple">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 17">
        <g id="arrow-back-simple">
          <path d={svgPaths.p35a4b300} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.54" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <p className="[grid-area:1_/_1] font-['SF_Pro:Bold',sans-serif] font-bold leading-[35.598px] ml-0 mt-0 relative text-[15px] text-black w-[124px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Privacy Policy
      </p>
      <div className="[grid-area:1_/_1] flex h-[17px] items-center justify-center ml-[296.21px] mt-[9.5px] relative w-[17.793px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <ArrowBackSimple5 />
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-center flex flex-wrap gap-[196px] items-center relative shrink-0 w-[310px]">
      <Group4 />
      <div className="h-0 relative shrink-0 w-[314px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 314 1">
            <line id="Line 34" stroke="var(--stroke-0, black)" strokeOpacity="0.12" x2="314" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="[grid-area:1_/_1] bg-white box-border content-stretch flex flex-col gap-[7px] items-start ml-0 mt-0 p-[20px] relative rounded-[20px]">
      <Frame15 />
      <Frame16 />
      <Frame17 />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame18 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[14px] min-w-full relative shrink-0 text-[14px] text-black w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Support
      </p>
      <Group1 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[20px] top-[229px] w-[354.305px]">
      <Frame5 />
      <Frame />
      <Frame9 />
    </div>
  );
}

function Battery() {
  return (
    <div className="absolute h-[11.333px] right-[14.34px] top-[calc(50%+1px)] translate-y-[-50%] w-[24.328px]" data-name="Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 12">
        <g id="Battery">
          <rect height="10.3333" id="Border" opacity="0.35" rx="2.16667" stroke="var(--stroke-0, black)" width="21" x="0.5" y="0.5" />
          <path d={svgPaths.p9ed9280} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, black)" height="7.33333" id="Capacity" rx="1.33333" width="18" x="2" y="2" />
        </g>
      </svg>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="absolute h-[44px] left-0 top-0 w-[390px]" data-name="☼ ️Status Bar">
      <p className="absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[normal] left-[48px] not-italic text-[15px] text-black text-center top-[calc(50%-8px)] tracking-[-0.3px] translate-x-[-50%] w-[54px]">9:41</p>
      <Battery />
      <div className="absolute h-[11px] right-[43.67px] top-[calc(50%+0.83px)] translate-y-[-50%] w-[15.333px]" data-name="Wifi">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 11">
          <path d={svgPaths.p39712400} fill="var(--fill-0, black)" id="Wifi" />
        </svg>
      </div>
      <div className="absolute h-[10.667px] right-[64px] top-[calc(50%+1px)] translate-y-[-50%] w-[17px]" data-name="Cellular Connection">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 11">
          <path d={svgPaths.p26d17600} fill="var(--fill-0, black)" id="Cellular Connection" />
        </svg>
      </div>
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
    <div className="absolute bg-black box-border content-stretch flex gap-[8px] items-center left-[268px] pl-[4px] pr-[12px] py-[4px] rounded-[100px] top-[117px]" data-name="unlock Pro">
      <PlanPro />
      <LeftTitle />
    </div>
  );
}

export default function Settings() {
  return (
    <div className="bg-[#f5f6fa] relative size-full" data-name="Settings">
      <Frame4 />
      <Frame19 />
      <StatusBar />
      <UnlockPro />
    </div>
  );
}