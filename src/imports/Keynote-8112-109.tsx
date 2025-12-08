import svgPaths from "./svg-zgpyrt49er";

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

export default function Keynote1() {
  return (
    <div className="bg-white relative rounded-[1000px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.2)] size-full" data-name="keynote">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center p-[12px] relative size-full">
          <Keynote />
        </div>
      </div>
    </div>
  );
}