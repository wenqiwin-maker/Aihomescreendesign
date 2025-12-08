import svgPaths from "./svg-7ol5gy1jzb";

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

export default function Frame2() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-0 pt-[26px] px-0 relative size-full">
      {[...Array(3).keys()].map((_, i) => (
        <Frame key={i} />
      ))}
      <Frame1 />
    </div>
  );
}