import svgPaths from "./svg-2dfu8bzznl";
import imgBadge from "../assets/gradient-pill-bg.png";

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

function Badge() {
  return (
    <div className="h-[22px] relative rounded-[11px] shrink-0 w-[60.453px]" data-name="Badge">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[11px] size-full" src={imgBadge} />
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[5px] py-[3px] relative rounded-[inherit] w-[60.453px]">
        <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Neutral
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[11px]" />
    </div>
  );
}

function Badge1() {
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

function Badge2() {
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

function PostSimMicroReview() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="PostSimMicroReview">
      <Text />
      <Badge />
      <Badge1 />
      <Badge2 />
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

function PostSimMicroReview1() {
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
      <PostSimMicroReview />
      <PostSimMicroReview1 />
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

function PostSimMicroReview2() {
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
          <PostSimMicroReview2 />
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

function Badge3() {
  return (
    <div className="h-[22px] relative rounded-[11px] shrink-0 w-[60.453px]" data-name="Badge">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[11px] size-full" src={imgBadge} />
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[5px] py-[3px] relative rounded-[inherit] w-[60.453px]">
        <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Neutral
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[11px]" />
    </div>
  );
}

function Badge4() {
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

function Badge5() {
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

function PostSimMicroReview3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="PostSimMicroReview">
      <Text1 />
      <Badge3 />
      <Badge4 />
      <Badge5 />
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

function PostSimMicroReview4() {
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
      <PostSimMicroReview3 />
      <PostSimMicroReview4 />
    </div>
  );
}

function PostSimMicroReview5() {
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
          <PostSimMicroReview5 />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Card />
      <Card1 />
    </div>
  );
}

export default function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative size-full" data-name="Container">
      <Heading />
      <Container />
    </div>
  );
}