import svgPaths from "./svg-jgxi1aid2b";

function Record() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="record">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="record">
          <path d={svgPaths.p2c8d280} fill="var(--fill-0, black)" id="CC" />
        </g>
      </svg>
    </div>
  );
}

export default function Caption() {
  return (
    <div className="bg-white relative rounded-[1000px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.2)] size-full" data-name="Caption">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center p-[12px] relative size-full">
          <Record />
        </div>
      </div>
    </div>
  );
}