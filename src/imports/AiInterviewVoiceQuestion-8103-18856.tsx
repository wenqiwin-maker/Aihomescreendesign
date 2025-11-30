import svgPaths from "./svg-gb89wx82qy";
import imgImageAiCharacter from "figma:asset/90d021ade914fe47e4dd2fdd3fc4a07e9d6c5450.png";
import imgImageAiCharacter1 from "figma:asset/81a9b3f706537a64e0f7ec2695020b5210851cfc.png";

function ImageAiCharacter() {
  return (
    <div className="absolute h-[844px] left-0 overflow-clip top-0 w-[390px]" data-name="Image (AI Character)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageAiCharacter} />
    </div>
  );
}

function ImageAiCharacter1() {
  return (
    <div className="absolute h-[153px] left-[252px] rounded-[24px] top-[589px] w-[118px]" data-name="Image (AI Character)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[24px] size-full" src={imgImageAiCharacter1} />
      <div className="h-[153px] overflow-clip rounded-[inherit] w-[118px]" />
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Time() {
  return (
    <div className="h-[12px] relative shrink-0 w-[28.426px]" data-name="Time">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 12">
        <g id="Time">
          <g id="9:41">
            <path d={svgPaths.p22c2dc80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2cf08980} fill="var(--fill-0, white)" />
            <path d={svgPaths.pb6cfa00} fill="var(--fill-0, white)" />
            <path d={svgPaths.pfcda100} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function RightSide() {
  return (
    <div className="h-[12px] relative shrink-0 w-[66.661px]" data-name="Right Side">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67 12">
        <g id="Right Side">
          <g id="Battery">
            <path d={svgPaths.pb51f780} fill="var(--fill-0, white)" id="Rectangle" opacity="0.35" stroke="var(--stroke-0, white)" />
            <path d={svgPaths.p2ef71380} fill="var(--fill-0, white)" id="Combined Shape" opacity="0.4" />
            <path d={svgPaths.p2dc18080} fill="var(--fill-0, white)" id="Rectangle_2" />
          </g>
          <path d={svgPaths.p193a4b80} fill="var(--fill-0, white)" id="Wifi" />
          <path d={svgPaths.p35e19600} fill="var(--fill-0, white)" id="Mobile Signal" />
        </g>
      </svg>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="box-border content-stretch flex h-[47px] items-center justify-between px-[16px] py-[11px] relative shrink-0 w-[390px]" data-name="StatusBar">
      <Time />
      <RightSide />
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
    <div className="absolute h-[44px] left-0 right-[-38px] top-1/2 translate-y-[-50%]" data-name="BG">
      <Blur1 />
      <Fill />
      <GlassEffect />
    </div>
  );
}

function Text() {
  return (
    <div className="box-border content-stretch flex h-[36px] items-center justify-center min-w-[36px] px-[8px] py-0 relative rounded-[100px] shrink-0" data-name="Text">
      <div className="flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] justify-center leading-[0] relative shrink-0 text-[17px] text-center text-neutral-700 text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">􀯶</p>
      </div>
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[12px] h-[44px] items-center justify-center min-w-[44px] mix-blend-multiply px-[2px] py-0 relative rounded-[296px] shrink-0" data-name="Button Group 1">
      <Bg />
      <Text />
    </div>
  );
}

function Progress() {
  return (
    <div className="h-[8px] relative shrink-0 w-[254px]" data-name="Progress">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 254 8">
        <g id="Progress">
          <rect fill="var(--fill-0, black)" fillOpacity="0.6" height="4" id="step-1" rx="2" width="254" y="2" />
          <rect fill="var(--fill-0, #3E5FFF)" height="4" id="step-1_2" rx="2" width="40" y="2" />
          <circle cx="40" cy="4" fill="var(--fill-0, #3E5FFF)" id="Ellipse 2" r="3" stroke="var(--stroke-0, white)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
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
      <Bg1 />
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

function Vector() {
  return (
    <div className="absolute inset-[8.33%_11.46%_8.96%_11.46%]" data-name="Vector">
      <div className="absolute bottom-0 left-[-3.65%] right-[-3.65%] top-[-3.4%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 21">
          <g id="Vector">
            <path d={svgPaths.p26ebf680} id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="1.35" />
            <path d="M0.675 3.675H19.175" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.35" />
            <path d="M7.425 8.52461V16.5246" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.35" />
            <path d="M12.425 8.52461V16.5246" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.35" />
            <path d="M7.425 0.675H12.425" id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.35" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Vector1() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Vector">
      <Vector />
    </div>
  );
}

function Trash() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="trash-1">
      <Vector1 />
    </div>
  );
}

function Delete() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center opacity-0 p-[8px] relative rounded-[1000px] shrink-0" data-name="delete">
      <Trash />
    </div>
  );
}

function Navigation() {
  return (
    <div className="box-border content-stretch flex gap-[12px] h-[56px] items-center px-[16px] py-[8px] relative shrink-0 w-[390px]" data-name="navigation">
      <ButtonGroup />
      <Progress />
      <CloseButton />
      <Delete />
    </div>
  );
}

function Top() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[390px]" data-name="top">
      <StatusBar />
      <Navigation />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[20.83%_1.39%_19.17%_-1.39%]">
      <div className="absolute inset-[-4.63%_-2.78%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 16">
          <g id="Group 1">
            <g id="Vector">
              <path d={svgPaths.pb517800} fill="var(--fill-0, #3E5FFF)" />
              <path d={svgPaths.pb517800} stroke="var(--stroke-0, #3E5FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </g>
            <path d={svgPaths.pb247600} fill="var(--fill-0, #3E5FFF)" id="Vector_2" stroke="var(--stroke-0, #3E5FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Record() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="record">
      <Group />
    </div>
  );
}

function Record1() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] items-center justify-center p-[12px] relative rounded-[1000px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.2)] shrink-0 size-[60px]" data-name="Record">
      <Record />
    </div>
  );
}

function Speed() {
  return (
    <div className="bg-white relative rounded-[1000px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.2)] shrink-0 size-[48px]" data-name="Speed">
      <div className="absolute flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] left-[24px] text-[16px] text-center text-nowrap text-white top-[24px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[1.35] whitespace-pre">1x</p>
      </div>
      <div className="absolute h-[22px] left-[27.08%] right-[27.08%] top-[13px]" data-name="CC">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
          <path d={svgPaths.pf985a00} fill="var(--fill-0, black)" id="CC" />
        </svg>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="absolute left-1/2 size-[22px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="打字 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g clipPath="url(#clip0_8103_17448)" id="æå­ 1">
          <path d={svgPaths.p387c3300} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p1914d600} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_8103_17448">
            <rect fill="white" height="22" width="22" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Speed1() {
  return (
    <div className="bg-white relative rounded-[1000px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.2)] shrink-0 size-[48px]" data-name="Speed">
      <div className="absolute flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] left-[24px] text-[16px] text-center text-nowrap text-white top-[24px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[1.35] whitespace-pre">1x</p>
      </div>
      <Component />
    </div>
  );
}

function Keynote() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="keynote">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="keynote">
          <path d={svgPaths.p761c9b0} fill="var(--fill-0, black)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Keynote1() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] items-center justify-center p-[12px] relative rounded-[1000px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.2)] shrink-0" data-name="keynote">
      <Keynote />
    </div>
  );
}

function ButtonGroups() {
  return (
    <div className="relative shrink-0 w-full" data-name="button-groups">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[24px] items-center justify-center px-[32px] py-0 relative w-full">
          <Record1 />
          <Speed />
          <Speed1 />
          <Keynote1 />
        </div>
      </div>
    </div>
  );
}

function Mention() {
  return <div className="box-border content-stretch flex gap-[12px] h-[24px] items-center justify-center px-0 py-[3px] rounded-[1000px] shrink-0 w-full" data-name="mention" />;
}

function Actions() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-center left-[16px] top-[193px] w-[358px]" data-name="Actions">
      <ButtonGroups />
      <Mention />
    </div>
  );
}

function Body() {
  return (
    <div className="absolute h-[246px] left-0 top-[564px] w-[390px]" data-name="body">
      <Actions />
    </div>
  );
}

function HomeIndicator() {
  return (
    <div className="h-[34px] relative shrink-0 w-[390px]" data-name="Home Indicator">
      <div className="absolute bg-white bottom-[8px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function NavigationBottom() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-center justify-center left-0 px-[12px] py-0 top-[810px] w-[390px]" data-name="navigation-bottom">
      <HomeIndicator />
    </div>
  );
}

function Video() {
  return (
    <div className="h-[844px] mb-[-844px] relative shrink-0 w-full" data-name="Video">
      <ImageAiCharacter />
      <ImageAiCharacter1 />
      <Top />
      <Body />
      <NavigationBottom />
    </div>
  );
}

function AiInterviewVoice() {
  return (
    <div className="absolute bg-gray-50 box-border content-stretch flex flex-col h-[844px] items-start left-1/2 pb-[844px] pt-0 px-0 top-0 translate-x-[-50%] w-[390px]" data-name="AI-Interview-Voice">
      <Video />
    </div>
  );
}

export default function AiInterviewVoiceQuestion() {
  return (
    <div className="bg-[#112038] relative size-full" data-name="AI-Interview-Voice-Question">
      <AiInterviewVoice />
    </div>
  );
}