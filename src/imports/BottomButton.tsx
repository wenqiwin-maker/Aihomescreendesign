import svgPaths from "./svg-23k6icirjq";

function Icon() {
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

function Button() {
  return (
    <div className="bg-black h-[48px] relative rounded-[22px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[108px] py-[11px] relative w-full">
          <Icon />
          <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[20px] relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.1504px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Re-run 30s
          </p>
        </div>
      </div>
    </div>
  );
}

export default function BottomButton() {
  return (
    <div className="bg-white relative size-full" data-name="Bottom button">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[36px] pt-[12px] px-[16px] relative size-full">
          <Button />
        </div>
      </div>
    </div>
  );
}