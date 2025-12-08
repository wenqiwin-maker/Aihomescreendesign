import svgPaths from "./svg-rczgobrrth";
import imgPill from "../assets/gradient-pill-bg.png";

function Time() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[10px] grow h-[22px] items-center justify-center min-h-px min-w-px pb-0 pt-[2px] px-0 relative shrink-0" data-name="Time">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-black text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        9:41
      </p>
    </div>
  );
}

function Levels() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[7px] grow h-[22px] items-center justify-center min-h-px min-w-px pb-0 pt-px px-0 relative shrink-0" data-name="Levels">
      <div className="h-[12.226px] relative shrink-0 w-[19.2px]" data-name="Cellular Connection">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 13">
            <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="var(--fill-0, black)" fillRule="evenodd" id="Cellular Connection" />
          </svg>
        </div>
      </div>
      <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-name="Wifi">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 13">
            <path clipRule="evenodd" d={svgPaths.p18b35300} fill="var(--fill-0, black)" fillRule="evenodd" id="Wifi" />
          </svg>
        </div>
      </div>
      <div className="h-[13px] relative shrink-0 w-[27.328px]" data-name="Union">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 13">
            <path d={svgPaths.p153bf700} fill="var(--fill-0, black)" id="Union" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[154px] items-center justify-center pb-[19px] pt-[21px] px-[16px] relative shrink-0 w-[390px]" data-name="Status bar">
      <Time />
      <Levels />
    </div>
  );
}

function Mask() {
  return (
    <div className="absolute bg-white inset-[-50px]" data-name="Mask">
      <div className="absolute bg-black inset-[76px] rounded-[1000px]" data-name="Shape" />
    </div>
  );
}

function Blur() {
  return <div className="absolute backdrop-blur-[20px] backdrop-filter bg-[rgba(0,0,0,0.04)] blur-[10px] filter inset-[28px_26px_24px_26px] mix-blend-hard-light rounded-[1000px]" data-name="Blur" />;
}

function Blur1() {
  return (
    <div className="absolute inset-[-26px] opacity-[0.67]" data-name="Blur">
      <Mask />
      <Blur />
    </div>
  );
}

function Fill() {
  return (
    <div className="absolute inset-0 rounded-[296px]" data-name="Fill">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[296px]">
        <div className="absolute bg-[#333333] inset-0 mix-blend-color-dodge rounded-[296px]" />
        <div className="absolute inset-0 rounded-[296px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(247, 247, 247) 0%, rgb(247, 247, 247) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.5) 100%)" }} />
      </div>
    </div>
  );
}

function GlassEffect() {
  return <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[296px]" data-name="Glass Effect" />;
}

function Bg() {
  return (
    <div className="absolute h-[44px] left-0 right-0 top-1/2 translate-y-[-50%]" data-name="BG">
      <Blur1 />
      <Fill />
      <GlassEffect />
    </div>
  );
}

function Symbol() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[100px] shrink-0 size-[36px]" data-name="Symbol 1">
      <div className="basis-0 flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[17px] text-center text-neutral-700 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">􀆄</p>
      </div>
    </div>
  );
}

function Close() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[12px] h-[44px] items-center justify-center mix-blend-multiply px-[4px] py-0 relative rounded-[296px] shrink-0" data-name="Close">
      <Bg />
      <Symbol />
    </div>
  );
}

function CloseButton() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-start justify-center pb-[10px] pt-0 px-[16px] relative shrink-0 size-[44px]" data-name="Close Button">
      <Close />
    </div>
  );
}

function Leading() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Leading">
      <CloseButton />
    </div>
  );
}

function Spacer() {
  return <div className="self-stretch shrink-0 w-[8px]" data-name="Spacer" />;
}

function Mask1() {
  return (
    <div className="absolute bg-white inset-[-50px]" data-name="Mask">
      <div className="absolute bg-black inset-[76px] rounded-[1000px]" data-name="Shape" />
    </div>
  );
}

function Blur2() {
  return <div className="absolute backdrop-blur-[20px] backdrop-filter bg-[rgba(0,0,0,0.04)] blur-[10px] filter inset-[28px_26px_24px_26px] mix-blend-hard-light rounded-[1000px]" data-name="Blur" />;
}

function Blur3() {
  return (
    <div className="absolute inset-[-26px] opacity-[0.67]" data-name="Blur">
      <Mask1 />
      <Blur2 />
    </div>
  );
}

function Fill1() {
  return (
    <div className="absolute inset-0 rounded-[296px]" data-name="Fill">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[296px]">
        <div className="absolute bg-[#333333] inset-0 mix-blend-color-dodge rounded-[296px]" />
        <div className="absolute inset-0 rounded-[296px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(247, 247, 247) 0%, rgb(247, 247, 247) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.5) 100%)" }} />
      </div>
    </div>
  );
}

function GlassEffect1() {
  return <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[296px]" data-name="Glass Effect" />;
}

function Bg1() {
  return (
    <div className="absolute h-[44px] left-0 right-0 top-1/2 translate-y-[-50%]" data-name="BG">
      <Blur3 />
      <Fill1 />
      <GlassEffect1 />
    </div>
  );
}

function Group4() {
  return (
    <div className="h-[16.082px] relative shrink-0 w-[14.341px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 17">
        <g id="Group 19130">
          <path d={svgPaths.p3ab71f00} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.pd27c000} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p158e2d80} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Symbol1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[36px]" data-name="Symbol 1">
      <Group4 />
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[12px] h-[44px] items-center justify-center mix-blend-multiply px-[4px] py-0 relative rounded-[296px] shrink-0" data-name="Button Group 4">
      <Bg1 />
      <Symbol1 />
    </div>
  );
}

function Mask2() {
  return (
    <div className="absolute bg-white inset-[-50px]" data-name="Mask">
      <div className="absolute bg-black inset-[76px] rounded-[1000px]" data-name="Shape" />
    </div>
  );
}

function Blur4() {
  return <div className="absolute backdrop-blur-[20px] backdrop-filter bg-[rgba(0,0,0,0.04)] blur-[10px] filter inset-[28px_26px_24px_26px] mix-blend-hard-light rounded-[1000px]" data-name="Blur" />;
}

function Blur5() {
  return (
    <div className="absolute inset-[-26px] opacity-[0.67]" data-name="Blur">
      <Mask2 />
      <Blur4 />
    </div>
  );
}

function Fill2() {
  return (
    <div className="absolute inset-0 rounded-[296px]" data-name="Fill">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[296px]">
        <div className="absolute bg-[#333333] inset-0 mix-blend-color-dodge rounded-[296px]" />
        <div className="absolute inset-0 rounded-[296px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(247, 247, 247) 0%, rgb(247, 247, 247) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.5) 100%)" }} />
      </div>
    </div>
  );
}

function GlassEffect2() {
  return <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[296px]" data-name="Glass Effect" />;
}

function Bg2() {
  return (
    <div className="absolute h-[44px] left-0 right-0 top-1/2 translate-y-[-50%]" data-name="BG">
      <Blur5 />
      <Fill2 />
      <GlassEffect2 />
    </div>
  );
}

function Component() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="聊天记录 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="èå¤©è®°å½ 1">
          <path d={svgPaths.p770a200} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p1203c080} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p1fc51b80} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Symbol2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[36px]" data-name="Symbol 1">
      <Component />
    </div>
  );
}

function ButtonGroup1() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[12px] h-[44px] items-center justify-center mix-blend-multiply px-[4px] py-0 relative rounded-[296px] shrink-0" data-name="Button Group 5">
      <Bg2 />
      <Symbol2 />
    </div>
  );
}

function Trailing() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-end relative shrink-0" data-name="Trailing">
      <ButtonGroup />
      <ButtonGroup1 />
    </div>
  );
}

function Title() {
  return (
    <div className="absolute h-[22px] left-1/2 top-[13px] translate-x-[-50%] w-[36px]" data-name="Title">
      <p className="absolute font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] left-[-42px] right-[-42px] text-[#333333] text-[17px] text-center text-nowrap top-0 tracking-[-0.43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Practice Recap
      </p>
    </div>
  );
}

function ToolbarTopIPhone() {
  return (
    <div className="box-border content-stretch flex items-start justify-between pb-[10px] pt-0 px-[16px] relative shrink-0 w-[390px]" data-name="Toolbar - Top - iPhone">
      <Leading />
      <Spacer />
      <Trailing />
      <Title />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[4.35%]" data-name="Group">
      <div className="absolute inset-[-4.29%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 114 114">
          <g id="Group">
            <path d={svgPaths.p19b55800} id="Vector" stroke="var(--stroke-0, #E8EBF6)" strokeWidth="9" />
            <path d={svgPaths.p20216a80} id="Vector_2" opacity="0.9" stroke="var(--stroke-0, #FA2CBC)" strokeLinecap="round" strokeWidth="9" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[13.91%]" data-name="Group">
      <div className="absolute inset-[-5.42%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 92 92">
          <g id="Group">
            <path d={svgPaths.p35b0bd00} id="Vector" stroke="var(--stroke-0, #E8EBF6)" strokeWidth="9" />
            <path d={svgPaths.p1afaa820} id="Vector_2" opacity="0.9" stroke="var(--stroke-0, #06B6FF)" strokeLinecap="round" strokeWidth="9" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[23.48%]" data-name="Group">
      <div className="absolute inset-[-7.38%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 70">
          <g id="Group">
            <path d={svgPaths.p3f9eaff0} id="Vector" stroke="var(--stroke-0, #E8EBF6)" strokeWidth="9" />
            <path d={svgPaths.p16458f80} id="Vector_2" opacity="0.9" stroke="var(--stroke-0, #FF7B00)" strokeLinecap="round" strokeWidth="9" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[33.04%]" data-name="Group">
      <div className="absolute inset-[-11.54%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
          <g id="Group">
            <path d={svgPaths.p2f204600} id="Vector" stroke="var(--stroke-0, #E8EBF6)" strokeWidth="9" />
            <path d={svgPaths.pd834880} id="Vector_2" opacity="0.9" stroke="var(--stroke-0, #17DAD5)" strokeLinecap="round" strokeWidth="9" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[4.35%]">
      <Group />
      <Group1 />
      <Group2 />
      <Group3 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[115px]">
      <Group5 />
      <div className="absolute flex items-center justify-center left-[109px] size-[2px] top-[56px]" style={{ "--transform-inner-width": "2", "--transform-inner-height": "2" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="relative size-[2px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
              <circle cx="1" cy="1" fill="var(--fill-0, white)" id="Ellipse 331" opacity="0.6" r="1" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[98px] size-[2px] top-[56px]" style={{ "--transform-inner-width": "2", "--transform-inner-height": "2" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="relative size-[2px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
              <circle cx="1" cy="1" fill="var(--fill-0, white)" id="Ellipse 331" opacity="0.6" r="1" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[87px] size-[2px] top-[56px]" style={{ "--transform-inner-width": "2", "--transform-inner-height": "2" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="relative size-[2px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
              <circle cx="1" cy="1" fill="var(--fill-0, white)" id="Ellipse 331" opacity="0.6" r="1" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[76px] size-[2px] top-[56px]" style={{ "--transform-inner-width": "2", "--transform-inner-height": "2" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="relative size-[2px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
              <circle cx="1" cy="1" fill="var(--fill-0, white)" id="Ellipse 331" opacity="0.6" r="1" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function PostSimMicroReview() {
  return <div className="bg-[#2cdcd8] rounded-[1.67772e+07px] size-[4px]" data-name="PostSimMicroReview" />;
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0 w-[16px]">
      <div className="flex items-center justify-center relative shrink-0 size-[4px]" style={{ "--transform-inner-width": "4", "--transform-inner-height": "4" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <PostSimMicroReview />
        </div>
      </div>
      <div className="flex h-[164px] items-center justify-center relative shrink-0 w-[18px]" style={{ "--transform-inner-width": "154.8125", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[18px] relative text-[#333333] text-[13px] text-nowrap tracking-[-0.08px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Actionable ask: 75%, Good
          </p>
        </div>
      </div>
    </div>
  );
}

function PostSimMicroReview1() {
  return <div className="bg-[#ff7b00] rounded-[1.67772e+07px] size-[4px]" data-name="PostSimMicroReview" />;
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0 w-[16px]">
      <div className="flex items-center justify-center relative shrink-0 size-[4px]" style={{ "--transform-inner-width": "4", "--transform-inner-height": "4" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <PostSimMicroReview1 />
        </div>
      </div>
      <div className="flex h-[164px] items-center justify-center relative shrink-0 w-[18px]" style={{ "--transform-inner-width": "150.5625", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[18px] relative text-[#333333] text-[0px] text-[13px] text-nowrap tracking-[-0.08px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            <span style={{ fontVariationSettings: "'wdth' 100" }}>{`Boundaries: `}</span>
            <span className="font-['SF_Pro:Semibold',sans-serif] font-[590] text-[#e7000b]" style={{ fontVariationSettings: "'wdth' 100" }}>
              45%, improve
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

function PostSimMicroReview2() {
  return <div className="bg-[#06b6ff] rounded-[1.67772e+07px] size-[4px]" data-name="PostSimMicroReview" />;
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0 w-[16px]">
      <div className="flex items-center justify-center relative shrink-0 size-[4px]" style={{ "--transform-inner-width": "4", "--transform-inner-height": "4" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <PostSimMicroReview2 />
        </div>
      </div>
      <div className="flex h-[113px] items-center justify-center relative shrink-0 w-[18px]" style={{ "--transform-inner-width": "105.59375", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[18px] relative text-[#333333] text-[13px] text-nowrap tracking-[-0.08px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Tone: 90%, Strong
          </p>
        </div>
      </div>
    </div>
  );
}

function PostSimMicroReview3() {
  return <div className="bg-[#d000c3] rounded-[1.67772e+07px] size-[4px]" data-name="PostSimMicroReview" />;
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[16px]">
      <div className="flex items-center justify-center relative shrink-0 size-[4px]" style={{ "--transform-inner-width": "4", "--transform-inner-height": "4" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <PostSimMicroReview3 />
        </div>
      </div>
      <div className="flex h-[114px] items-center justify-center relative shrink-0 w-[18px]" style={{ "--transform-inner-width": "107.65625", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[18px] relative text-[#333333] text-[13px] text-nowrap tracking-[-0.08px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Clarity: 75%, Good
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <Frame6 />
      <Frame4 />
      <Frame5 />
      <Frame7 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex items-start ml-[2px] mt-[131px] relative w-[110px]">
      <Frame8 />
      <div className="flex h-[72px] items-center justify-center relative shrink-0 w-[41px]" style={{ "--transform-inner-width": "69.25", "--transform-inner-height": "41" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[41px] relative text-[#333333] text-[34px] text-nowrap tracking-[0.4px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            73%
          </p>
        </div>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative">
      <Frame11 />
      <Frame9 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative rounded-[14px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[0.5px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] items-start pb-[30px] pt-[20px] px-[16px] relative w-full">
          <p className="font-['SF_Pro_Display:Semibold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#333333] text-[17px] text-nowrap whitespace-pre">Overall Practice Score</p>
          <div className="flex h-[115px] items-center justify-center leading-[0] relative shrink-0 w-[302px]" style={{ "--transform-inner-width": "115", "--transform-inner-height": "302" } as React.CSSProperties}>
            <div className="flex-none rotate-[270deg]">
              <Group6 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Pill() {
  return (
    <div className="bg-[#f5f6fa] h-[35.99px] relative rounded-[2.5061e+07px] shrink-0" data-name="Pill">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[35.99px] items-center pl-[15.999px] pr-[16px] py-0 relative">
        <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[18px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.9)] text-nowrap tracking-[-0.1504px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          <span>{`Clarity `}</span>
          <span className="text-[rgba(60,60,67,0.6)]">75%</span>
        </p>
      </div>
    </div>
  );
}

function Pill1() {
  return (
    <div className="bg-[#f5f6fa] h-[35.99px] relative rounded-[2.5061e+07px] shrink-0" data-name="Pill">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[35.99px] items-center pl-[15.999px] pr-[16px] py-0 relative">
        <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[18px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.9)] text-nowrap tracking-[-0.1504px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          <span>{`Tone `}</span>
          <span className="text-[rgba(60,60,67,0.6)]">90%</span>
        </p>
      </div>
    </div>
  );
}

function Pill2() {
  return (
    <div className="h-[35.99px] relative rounded-[2.5061e+07px] shrink-0" data-name="Pill">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[2.5061e+07px] size-full" src={imgPill} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[35.99px] items-center px-[16px] py-0 relative">
        <p className="capitalize font-['SF_Pro:Medium',sans-serif] font-[510] leading-[18px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap tracking-[-0.1504px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          <span>{`Boundaries `}</span>
          <span className="text-[rgba(255,255,255,0.6)]">45%</span>
        </p>
      </div>
    </div>
  );
}

function PostSimMicroReview4() {
  return (
    <div className="bg-[#3e5fff] relative rounded-[1.67772e+07px] shrink-0 size-[10px]" data-name="PostSimMicroReview">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10px]" />
    </div>
  );
}

function Pill3() {
  return (
    <div className="bg-[#f5f6fa] h-[35.99px] relative rounded-[2.5061e+07px] shrink-0" data-name="Pill">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[35.99px] items-center px-[16px] py-0 relative">
        <PostSimMicroReview4 />
        <p className="capitalize font-['SF_Pro:Medium',sans-serif] font-[510] leading-[18px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.9)] text-nowrap tracking-[-0.1504px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Actions
        </p>
      </div>
    </div>
  );
}

function Summary() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-x-auto overflow-y-hidden relative w-full max-w-full" data-name="Summary" style={{ scrollbarWidth: 'none' }}>
      <style>{`div[data-name="Summary"]::-webkit-scrollbar { display: none; }`}</style>
      <Pill />
      <Pill1 />
      <Pill2 />
      <Pill3 />
    </div>
  );
}

function InstantRecap() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Instant Recap">
      <Summary />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[35.99px] items-start justify-end relative shrink-0 w-full max-w-full overflow-hidden">
      <InstantRecap />
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#ee2c00] relative rounded-[12px] shrink-0" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] items-center justify-end overflow-clip px-[5px] py-[2px] relative rounded-[inherit]">
        <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[14px] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Improve
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ee2c00] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[326px]">
      <Badge />
      <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[21px] relative shrink-0 text-[#101828] text-[16px] tracking-[-0.4395px] w-[264px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Add one line about the impact `}</p>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-[325px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] items-start relative w-[325px]">
        <Frame12 />
        <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-[rgba(60,60,67,0.6)] tracking-[-0.3125px] w-[325px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Present 1-2 key outcomes immediately after your request to strengthen credibility and show mutual value.
        </p>
      </div>
    </div>
  );
}

function Improve() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="Improve">
      <div aria-hidden="true" className="absolute border-[0.75px] border-[rgba(219,61,25,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[8px] items-start p-[16.75px] relative w-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

function Details() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Details">
      <Improve />
    </div>
  );
}

function Tips() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Tips">
      <Details />
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-white h-[442px] relative rounded-bl-[20px] rounded-br-[20px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.05),0px_6px_16px_0px_rgba(0,0,0,0.06)] shrink-0 w-full">
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[20px] h-[442px] items-start px-[16px] py-[20px] relative w-full">
          <Frame10 />
          <Frame1 />
          <Tips />
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['SF_Pro:Medium',sans-serif] font-[510] leading-[20px] left-0 text-[15px] text-[rgba(0,0,0,0.9)] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Stronger Alternatives
      </p>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[35.352px]" data-name="Text">
      <p className="absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-[rgba(60,60,67,0.6)] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tone:
      </p>
    </div>
  );
}

function Badge1() {
  return (
    <div className="h-[22px] relative rounded-[11px] shrink-0 w-[60.453px]" data-name="Badge">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[11px] size-full" src={imgPill} />
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[5px] py-[3px] relative rounded-[inherit] w-[60.453px]">
        <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Neutral
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[11px]" />
    </div>
  );
}

function Badge2() {
  return (
    <div className="h-[22px] relative rounded-[11px] shrink-0 w-[81.844px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[5px] py-[3px] relative rounded-[inherit] w-[81.844px]">
        <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[12px] text-neutral-950 text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Firm-polite
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[11px]" />
    </div>
  );
}

function Badge3() {
  return (
    <div className="h-[22px] relative rounded-[11px] shrink-0 w-[56.016px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[5px] py-[3px] relative rounded-[inherit] w-[56.016px]">
        <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[12px] text-neutral-950 text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Caring
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[11px]" />
    </div>
  );
}

function PostSimMicroReview5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="PostSimMicroReview">
      <Text />
      <Badge1 />
      <Badge2 />
      <Badge3 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_8043_1397)" id="Icon">
          <path d={svgPaths.p577d580} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p11ff8500} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_8043_1397">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-start justify-end relative rounded-[8px] shrink-0 size-[20px]" data-name="Button">
      <Icon />
    </div>
  );
}

function PostSimMicroReview6() {
  return (
    <div className="bg-[#f5f6fa] box-border content-stretch flex gap-[8px] items-start pb-[16px] pt-[12px] px-[16px] relative rounded-[10px] shrink-0 w-[314px]" data-name="PostSimMicroReview">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#101828] text-[16px] tracking-[-0.3125px] w-[254px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`"I'd like to decide X by next Wednesday. If that works, I can do Y to support it."`}</p>
      <Button />
    </div>
  );
}

function ToneCards() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="Tone-cards">
      <PostSimMicroReview5 />
      <PostSimMicroReview6 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-[326px]" data-name="Paragraph">
      <p className="absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-[rgba(60,60,67,0.6)] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        You said:
      </p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[42px] relative shrink-0 w-[326px]" data-name="Paragraph">
      <p className="absolute font-['SF_Pro:Regular_Italic',sans-serif] font-normal italic leading-[21px] left-0 text-[16px] text-[rgba(0,0,0,0.9)] top-0 tracking-[-0.3125px] w-[326px]" style={{ fontVariationSettings: "'YAXS' 400" }}>{`"I want to make this decision by next Wednesday."`}</p>
    </div>
  );
}

function PostSimMicroReview7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[326px]" data-name="PostSimMicroReview">
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(140,0,255,0.05)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[16px] px-[16px] relative w-full">
          <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[19px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.9)] text-nowrap tracking-[-0.1504px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Alternatives
          </p>
          <ToneCards />
          <PostSimMicroReview7 />
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[35.352px]" data-name="Text">
      <p className="absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-[rgba(60,60,67,0.6)] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tone:
      </p>
    </div>
  );
}

function Badge4() {
  return (
    <div className="h-[22px] relative rounded-[11px] shrink-0 w-[60.453px]" data-name="Badge">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[11px] size-full" src={imgPill} />
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[5px] py-[3px] relative rounded-[inherit] w-[60.453px]">
        <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Neutral
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[11px]" />
    </div>
  );
}

function Badge5() {
  return (
    <div className="h-[22px] relative rounded-[11px] shrink-0 w-[81.844px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[5px] py-[3px] relative rounded-[inherit] w-[81.844px]">
        <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[12px] text-neutral-950 text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Firm-polite
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[11px]" />
    </div>
  );
}

function Badge6() {
  return (
    <div className="h-[22px] relative rounded-[11px] shrink-0 w-[56.016px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[5px] py-[3px] relative rounded-[inherit] w-[56.016px]">
        <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[12px] text-neutral-950 text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Caring
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[11px]" />
    </div>
  );
}

function PostSimMicroReview8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="PostSimMicroReview">
      <Text1 />
      <Badge4 />
      <Badge5 />
      <Badge6 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_8043_1397)" id="Icon">
          <path d={svgPaths.p577d580} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p11ff8500} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_8043_1397">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-start justify-end relative rounded-[8px] shrink-0 size-[20px]" data-name="Button">
      <Icon1 />
    </div>
  );
}

function PostSimMicroReview9() {
  return (
    <div className="bg-[#f5f6fa] box-border content-stretch flex gap-[8px] items-start pb-[16px] pt-[12px] px-[16px] relative rounded-[10px] shrink-0 w-[314px]" data-name="PostSimMicroReview">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#101828] text-[16px] tracking-[-0.3125px] w-[250px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`"If that's not realistic, what's the earliest date we can set? I'll adjust my plan."`}</p>
      <Button1 />
    </div>
  );
}

function ToneCards1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="Tone-cards">
      <PostSimMicroReview8 />
      <PostSimMicroReview9 />
    </div>
  );
}

function PostSimMicroReview10() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[4px] items-start relative shrink-0 w-[326px]" data-name="PostSimMicroReview">
      <p className="font-['SF_Pro:Regular',sans-serif] leading-[20px] relative shrink-0 text-[14px] text-[rgba(60,60,67,0.6)] text-nowrap tracking-[-0.1504px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        You said:
      </p>
      <p className="font-['SF_Pro:Regular_Italic',sans-serif] italic leading-[24px] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.9)] tracking-[-0.3125px] w-[326px]" style={{ fontVariationSettings: "'YAXS' 400" }}>{`"That timing doesn't work."`}</p>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(140,0,255,0.05)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[16px] px-[16px] relative w-full">
          <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[19px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.9)] text-nowrap tracking-[-0.1504px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Alternatives
          </p>
          <ToneCards1 />
          <PostSimMicroReview10 />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Card />
      <Card1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Container1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['SF_Pro:Medium',sans-serif] font-[510] leading-[20px] left-0 text-[15px] text-[rgba(0,0,0,0.9)] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Moments to Watch
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[6px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, black)" fillOpacity="0.6" id="Ellipse 319" r="3" />
        </svg>
      </div>
      <div className="flex h-[47px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "47", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[47px]">
            <div className="absolute bottom-[-7.36px] left-0 right-[-2.13%] top-[-7.36px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 15">
                <path d={svgPaths.p37c5bd40} fill="var(--stroke-0, black)" fillOpacity="0.1" id="Arrow 1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[6px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, black)" fillOpacity="0.6" id="Ellipse 319" r="3" />
        </svg>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-[6px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] items-start pb-0 pt-[26px] px-0 relative w-[6px]">
        {[...Array(3).keys()].map((_, i) => (
          <Frame key={i} />
        ))}
        <Frame2 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Container">
          <path d={svgPaths.p1657e380} stroke="var(--stroke-0, black)" />
          <path d={svgPaths.p9928380} fill="var(--fill-0, black)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[40px] items-start relative text-nowrap w-full whitespace-pre">
        <p className="leading-[16px] relative shrink-0 text-[12px] text-[rgba(60,60,67,0.6)]" style={{ fontVariationSettings: "'wdth' 100" }}>
          00:23
        </p>
        <p className="leading-[20px] relative shrink-0 text-[#101828] text-[14px] tracking-[-0.3125px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Your bookmark
        </p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[40px] relative shrink-0 w-[153.43px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[40px] items-center relative w-[153.43px]">
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3d838b80} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon2 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex h-[56px] items-center justify-between relative rounded-[10px] shrink-0 w-[298px]" data-name="Container">
      <Container5 />
      <Button2 />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-px relative size-[32px]">
        <div className="h-[11px] relative shrink-0 w-[18px]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 11">
            <g id="Vector">
              <path d="M3.6 5.5V11L0 5.5L3.6 0V5.5Z" fill="var(--fill-0, black)" />
              <path d={svgPaths.p3caaccc0} fill="var(--fill-0, black)" />
              <path d={svgPaths.p27b99570} fill="var(--fill-0, black)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[40px] items-start relative text-nowrap w-full whitespace-pre">
        <p className="leading-[16px] relative shrink-0 text-[12px] text-[rgba(60,60,67,0.6)]" style={{ fontVariationSettings: "'wdth' 100" }}>
          00:45
        </p>
        <p className="leading-[20px] relative shrink-0 text-[#101828] text-[14px] tracking-[-0.3125px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Hesitation detected
        </p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[40px] relative shrink-0 w-[186.68px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[40px] items-center relative w-[186.68px]">
        <Container7 />
        <Container8 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3d838b80} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon3 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex h-[56px] items-center justify-between relative rounded-[10px] shrink-0 w-[298px]" data-name="Container">
      <Container9 />
      <Button3 />
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Container">
          <path d={svgPaths.p1657e380} stroke="var(--stroke-0, black)" />
          <path d={svgPaths.p9928380} fill="var(--fill-0, black)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[40px] items-start relative text-nowrap w-full whitespace-pre">
        <p className="leading-[16px] relative shrink-0 text-[12px] text-[rgba(60,60,67,0.6)]" style={{ fontVariationSettings: "'wdth' 100" }}>
          01:12
        </p>
        <p className="leading-[20px] relative shrink-0 text-[#101828] text-[14px] tracking-[-0.3125px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Your bookmark
        </p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[40px] relative shrink-0 w-[153.43px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[40px] items-center relative w-[153.43px]">
        <Container11 />
        <Container12 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3d838b80} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon4 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex h-[56px] items-center justify-between relative rounded-[10px] shrink-0 w-[298px]" data-name="Container">
      <Container13 />
      <Button4 />
    </div>
  );
}

function Container15() {
  return (
    <div className="relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-px relative size-[32px]">
        <div className="relative shrink-0 size-[17px]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
            <path d={svgPaths.p198b5c00} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[40px] items-start relative text-nowrap w-full whitespace-pre">
        <p className="leading-[16px] relative shrink-0 text-[12px] text-[rgba(60,60,67,0.6)]" style={{ fontVariationSettings: "'wdth' 100" }}>
          01:38
        </p>
        <p className="leading-[20px] relative shrink-0 text-[#101828] text-[14px] tracking-[-0.3125px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Rising emotion
        </p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[40px] relative shrink-0 w-[151.016px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[40px] items-center relative w-[151.016px]">
        <Container15 />
        <Container16 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3d838b80} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon5 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex h-[56px] items-center justify-between relative rounded-[10px] shrink-0 w-[298px]" data-name="Container">
      <Container17 />
      <Button5 />
    </div>
  );
}

function PostSimMicroReview11() {
  return (
    <div className="h-full relative shrink-0 w-[306px]" data-name="PostSimMicroReview">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-full items-start relative w-[306px]">
        <Container6 />
        <Container10 />
        <Container14 />
        <Container18 />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white h-[274px] relative rounded-[14px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Card">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[274px] items-start px-[16px] py-[12px] relative w-full">
          <Frame3 />
          <PostSimMicroReview11 />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[310px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Card2 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[81px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[81px]">
        <p className="absolute font-['SF_Pro:Medium',sans-serif] font-[510] leading-[20px] left-0 text-[15px] text-[rgba(0,0,0,0.9)] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Adjust Plan
        </p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[6px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_8043_1373)" id="Icon">
          <path d={svgPaths.pd0ccf80} id="Vector" stroke="var(--stroke-0, #8C00FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_8043_1373">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="h-[28px] relative rounded-[8px] shrink-0 w-[71.594px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[71.594px]">
        <Icon6 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[36px] not-italic text-[#8c00ff] text-[14px] text-nowrap top-[4.5px] tracking-[-0.1504px] whitespace-pre">Edit</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Button6 />
    </div>
  );
}

function Badge7() {
  return (
    <div className="absolute h-[22px] left-0 rounded-[8px] top-[2.5px] w-[84.289px]" data-name="Badge">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgPill} />
      <div className="h-[22px] overflow-clip relative rounded-[inherit] w-[84.289px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[9px] not-italic text-[12px] text-nowrap text-white top-[4px] whitespace-pre">BLUF + Ask</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[20px] left-0 top-[32.5px] w-[336px]" data-name="Paragraph">
      <p className="absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-[rgba(60,60,67,0.6)] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Conclusion/Ask:
      </p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[24px] left-0 top-[52.5px] w-[336px]" data-name="Paragraph">
      <p className="absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#101828] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Apply for promotion to SWE III in Q3
      </p>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[76.5px] relative shrink-0 w-full" data-name="Container">
      <Badge7 />
      <Paragraph2 />
      <Paragraph3 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-[rgba(60,60,67,0.6)] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Reasons (Evidence):
      </p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#101828] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[308px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Past two quarters: Led Project X, delivered Impact Y, completed Milestone `}</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph4 />
      <Paragraph5 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-[rgba(60,60,67,0.6)] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Action/When:
      </p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#101828] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[306px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Confirm review window by this Friday and align on required materials and milestones
      </p>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph6 />
      <Paragraph7 />
    </div>
  );
}

function PostSimMicroReview12() {
  return (
    <div className="relative shrink-0 w-[316px]" data-name="PostSimMicroReview">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[12px] items-start relative w-[316px]">
        <Container21 />
        <Container22 />
        <Container23 />
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-white relative rounded-[14px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Card">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-[20px] pt-[16px] px-[16px] relative w-full">
          <PostSimMicroReview12 />
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <Card3 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6.66667 7.33333V11.3333" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M9.33333 7.33333V11.3333" id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p37e28100} id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 4H14" id="Vector_4" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2ffbeb80} id="Vector_5" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="relative rounded-[22px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e7000b] border-solid inset-0 pointer-events-none rounded-[22px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[14px] items-center justify-center px-[94px] py-[10px] relative w-full">
          <Icon7 />
          <p className="font-['SF_Compact:Medium',sans-serif] font-[556] leading-[24px] relative shrink-0 text-[#e7000b] text-[16px] text-nowrap tracking-[-0.1504px] whitespace-pre">Delete Recording</p>
        </div>
      </div>
    </div>
  );
}

function DeleteRecording() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Delete Recording">
      <Button7 />
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.6)] text-center w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Audio/video stays on this device. Deleting is permanent.
      </p>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 w-[390px] pb-[100px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[40px] items-start overflow-clip px-[20px] py-[30px] relative rounded-[inherit] w-[390px]">
        <Container2 />
        <Container19 />
        <Container24 />
        <DeleteRecording />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_8043_1376)" id="Icon">
          <path d="M8 4V8L10.6667 9.33333" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p39ee6532} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_8043_1376">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-black h-[48px] relative rounded-[22px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[108px] py-[11px] relative w-full">
          <Icon8 />
          <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[20px] relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.1504px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Re-run 30s
          </p>
        </div>
      </div>
    </div>
  );
}

function BottomButton() {
  return (
    <div className="bg-white relative shrink-0 w-[390px]" data-name="Bottom button">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] items-start pb-[36px] pt-[12px] px-[16px] relative w-[390px]">
        <Button8 />
      </div>
    </div>
  );
}

function PostSimMicroReview13() {
  return (
    <div className="bg-[#f5f6fa] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full pb-[100px]" data-name="PostSimMicroReview">
      <Frame13 />
      <Container25 />
      <BottomButton />
    </div>
  );
}

export default function Container26() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Container">
      <StatusBar />
      <ToolbarTopIPhone />
      <PostSimMicroReview13 />
    </div>
  );
}