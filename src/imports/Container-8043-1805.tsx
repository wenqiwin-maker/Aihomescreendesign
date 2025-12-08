import svgPaths from "./svg-e373xqbxch";

function Heading() {
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

function Frame1() {
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

function Frame2() {
  return (
    <div className="relative shrink-0 w-[6px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] items-start pb-0 pt-[26px] px-0 relative w-[6px]">
        {[...Array(3).keys()].map((_, i) => (
          <Frame key={i} />
        ))}
        <Frame1 />
      </div>
    </div>
  );
}

function Container() {
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

function Container1() {
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

function Container2() {
  return (
    <div className="h-[40px] relative shrink-0 w-[153.43px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[40px] items-center relative w-[153.43px]">
        <Container />
        <Container1 />
      </div>
    </div>
  );
}

function Icon() {
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

function Button() {
  return (
    <div className="relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex h-[56px] items-center justify-between relative rounded-[10px] shrink-0 w-[298px]" data-name="Container">
      <Container2 />
      <Button />
    </div>
  );
}

function Container4() {
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

function Container5() {
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

function Container6() {
  return (
    <div className="h-[40px] relative shrink-0 w-[186.68px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[40px] items-center relative w-[186.68px]">
        <Container4 />
        <Container5 />
      </div>
    </div>
  );
}

function Icon1() {
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

function Button1() {
  return (
    <div className="relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon1 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex h-[56px] items-center justify-between relative rounded-[10px] shrink-0 w-[298px]" data-name="Container">
      <Container6 />
      <Button1 />
    </div>
  );
}

function Container8() {
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

function Container9() {
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

function Container10() {
  return (
    <div className="h-[40px] relative shrink-0 w-[153.43px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[40px] items-center relative w-[153.43px]">
        <Container8 />
        <Container9 />
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

function Container11() {
  return (
    <div className="content-stretch flex h-[56px] items-center justify-between relative rounded-[10px] shrink-0 w-[298px]" data-name="Container">
      <Container10 />
      <Button2 />
    </div>
  );
}

function Container12() {
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

function Container13() {
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

function Container14() {
  return (
    <div className="h-[40px] relative shrink-0 w-[151.016px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[40px] items-center relative w-[151.016px]">
        <Container12 />
        <Container13 />
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

function Container15() {
  return (
    <div className="content-stretch flex h-[56px] items-center justify-between relative rounded-[10px] shrink-0 w-[298px]" data-name="Container">
      <Container14 />
      <Button3 />
    </div>
  );
}

function PostSimMicroReview() {
  return (
    <div className="h-full relative shrink-0 w-[306px]" data-name="PostSimMicroReview">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-full items-start relative w-[306px]">
        <Container3 />
        <Container7 />
        <Container11 />
        <Container15 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white h-[274px] relative rounded-[14px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Card">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[274px] items-start px-[16px] py-[12px] relative w-full">
          <Frame2 />
          <PostSimMicroReview />
        </div>
      </div>
    </div>
  );
}

export default function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative size-full" data-name="Container">
      <Heading />
      <Card />
    </div>
  );
}