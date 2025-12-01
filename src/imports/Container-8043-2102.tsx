import svgPaths from "./svg-0uaqswejvo";
import imgBadge from "../assets/gradient-pill-bg.png";

function Heading() {
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

function Icon() {
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

function Button() {
  return (
    <div className="h-[28px] relative rounded-[8px] shrink-0 w-[71.594px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[71.594px]">
        <Icon />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[36px] not-italic text-[#8c00ff] text-[14px] text-nowrap top-[4.5px] tracking-[-0.1504px] whitespace-pre">Edit</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Button />
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute h-[22px] left-0 rounded-[8px] top-[2.5px] w-[84.289px]" data-name="Badge">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgBadge} />
      <div className="h-[22px] overflow-clip relative rounded-[inherit] w-[84.289px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[9px] not-italic text-[12px] text-nowrap text-white top-[4px] whitespace-pre">BLUF + Ask</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[20px] left-0 top-[32.5px] w-[336px]" data-name="Paragraph">
      <p className="absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-[rgba(60,60,67,0.6)] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Conclusion/Ask:
      </p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[24px] left-0 top-[52.5px] w-[336px]" data-name="Paragraph">
      <p className="absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#101828] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Apply for promotion to SWE III in Q3
      </p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[76.5px] relative shrink-0 w-full" data-name="Container">
      <Badge />
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-[rgba(60,60,67,0.6)] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Reasons (Evidence):
      </p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#101828] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[308px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Past two quarters: Led Project X, delivered Impact Y, completed Milestone `}</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph2 />
      <Paragraph3 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-[rgba(60,60,67,0.6)] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Action/When:
      </p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#101828] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[306px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Confirm review window by this Friday and align on required materials and milestones
      </p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph4 />
      <Paragraph5 />
    </div>
  );
}

function PostSimMicroReview() {
  return (
    <div className="relative shrink-0 w-[316px]" data-name="PostSimMicroReview">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[12px] items-start relative w-[316px]">
        <Container1 />
        <Container2 />
        <Container3 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white relative rounded-[14px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Card">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-[20px] pt-[16px] px-[16px] relative w-full">
          <PostSimMicroReview />
        </div>
      </div>
    </div>
  );
}

export default function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative size-full" data-name="Container">
      <Container />
      <Card />
    </div>
  );
}