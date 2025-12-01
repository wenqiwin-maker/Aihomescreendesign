import svgPaths from "./svg-iau0xe5r7j";
import imgPill from "figma:asset/71f51ddbf8b2b5d764325230f5ad1453eab75503.png";
import { useState, useEffect } from "react";

// Animated path component for rings
function AnimatedPath({ 
  d, 
  stroke, 
  strokeWidth = "9",
  opacity = "0.9"
}: { 
  d: string; 
  stroke: string; 
  strokeWidth?: string;
  opacity?: string;
}) {
  const [isAnimated, setIsAnimated] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <path
      d={d}
      opacity={opacity}
      stroke={stroke}
      strokeLinecap="round"
      strokeWidth={strokeWidth}
      style={{
        strokeDasharray: 1000,
        strokeDashoffset: isAnimated ? 0 : 1000,
        transition: `stroke-dashoffset 5s cubic-bezier(0.4, 0, 0.2, 1)`,
      }}
    />
  );
}

function Group() {
  return (
    <div className="absolute inset-[4.35%]" data-name="Group">
      <div className="absolute inset-[-4.29%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 114 114"
        >
          <g id="Group">
            <path
              d={svgPaths.p19b55800}
              id="Vector"
              stroke="var(--stroke-0, #E8EBF6)"
              strokeWidth="9"
            />
            <AnimatedPath
              d={svgPaths.p20216a80}
              stroke="var(--stroke-0, #FA2CBC)"
            />
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
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 92 92"
        >
          <g id="Group">
            <path
              d={svgPaths.p35b0bd00}
              id="Vector"
              stroke="var(--stroke-0, #E8EBF6)"
              strokeWidth="9"
            />
            <AnimatedPath
              d={svgPaths.p1afaa820}
              stroke="var(--stroke-0, #06B6FF)"
            />
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
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 70 70"
        >
          <g id="Group">
            <path
              d={svgPaths.p3f9eaff0}
              id="Vector"
              stroke="var(--stroke-0, #E8EBF6)"
              strokeWidth="9"
            />
            <AnimatedPath
              d={svgPaths.p16458f80}
              stroke="var(--stroke-0, #FF7B00)"
            />
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
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 48 48"
        >
          <g id="Group">
            <path
              d={svgPaths.p2f204600}
              id="Vector"
              stroke="var(--stroke-0, #E8EBF6)"
              strokeWidth="9"
            />
            <AnimatedPath
              d={svgPaths.pd834880}
              stroke="var(--stroke-0, #17DAD5)"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[4.35%]">
      <Group />
      <Group1 />
      <Group2 />
      <Group3 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[115px]">
      <Group4 />
      <div
        className="absolute flex items-center justify-center left-[109px] size-[2px] top-[56px]"
        style={
          {
            "--transform-inner-width": "2",
            "--transform-inner-height": "2",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[90deg]">
          <div className="relative size-[2px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 2 2"
            >
              <circle
                cx="1"
                cy="1"
                fill="var(--fill-0, white)"
                id="Ellipse 331"
                opacity="0.6"
                r="1"
              />
            </svg>
          </div>
        </div>
      </div>
      <div
        className="absolute flex items-center justify-center left-[98px] size-[2px] top-[56px]"
        style={
          {
            "--transform-inner-width": "2",
            "--transform-inner-height": "2",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[90deg]">
          <div className="relative size-[2px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 2 2"
            >
              <circle
                cx="1"
                cy="1"
                fill="var(--fill-0, white)"
                id="Ellipse 331"
                opacity="0.6"
                r="1"
              />
            </svg>
          </div>
        </div>
      </div>
      <div
        className="absolute flex items-center justify-center left-[87px] size-[2px] top-[56px]"
        style={
          {
            "--transform-inner-width": "2",
            "--transform-inner-height": "2",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[90deg]">
          <div className="relative size-[2px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 2 2"
            >
              <circle
                cx="1"
                cy="1"
                fill="var(--fill-0, white)"
                id="Ellipse 331"
                opacity="0.6"
                r="1"
              />
            </svg>
          </div>
        </div>
      </div>
      <div
        className="absolute flex items-center justify-center left-[76px] size-[2px] top-[56px]"
        style={
          {
            "--transform-inner-width": "2",
            "--transform-inner-height": "2",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[90deg]">
          <div className="relative size-[2px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 2 2"
            >
              <circle
                cx="1"
                cy="1"
                fill="var(--fill-0, white)"
                id="Ellipse 331"
                opacity="0.6"
                r="1"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function PostSimMicroReview() {
  return (
    <div
      className="bg-[#2cdcd8] rounded-[1.67772e+07px] size-[4px]"
      data-name="PostSimMicroReview"
    />
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0 w-[16px]">
      <div
        className="flex items-center justify-center relative shrink-0 size-[4px]"
        style={
          {
            "--transform-inner-width": "4",
            "--transform-inner-height": "4",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[90deg]">
          <PostSimMicroReview />
        </div>
      </div>
      <div
        className="flex h-[164px] items-center justify-center relative shrink-0 w-[18px]"
        style={
          {
            "--transform-inner-width": "154.8125",
            "--transform-inner-height": "18",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[90deg]">
          <p
            className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[18px] relative text-[#333333] text-[13px] text-nowrap tracking-[-0.08px] whitespace-pre"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Actionable ask: 75%, Good
          </p>
        </div>
      </div>
    </div>
  );
}

function PostSimMicroReview1() {
  return (
    <div
      className="bg-[#ff7b00] rounded-[1.67772e+07px] size-[4px]"
      data-name="PostSimMicroReview"
    />
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0 w-[16px]">
      <div
        className="flex items-center justify-center relative shrink-0 size-[4px]"
        style={
          {
            "--transform-inner-width": "4",
            "--transform-inner-height": "4",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[90deg]">
          <PostSimMicroReview1 />
        </div>
      </div>
      <div
        className="flex h-[164px] items-center justify-center relative shrink-0 w-[18px]"
        style={
          {
            "--transform-inner-width": "150.5625",
            "--transform-inner-height": "18",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[90deg]">
          <p
            className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[18px] relative text-[#333333] text-[0px] text-[13px] text-nowrap tracking-[-0.08px] whitespace-pre"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <span
              style={{ fontVariationSettings: "'wdth' 100" }}
            >{`Boundaries: `}</span>
            <span
              className="font-['SF_Pro:Semibold',sans-serif] font-[590] text-[#e7000b]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              45%, improve
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

function PostSimMicroReview2() {
  return (
    <div
      className="bg-[#06b6ff] rounded-[1.67772e+07px] size-[4px]"
      data-name="PostSimMicroReview"
    />
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0 w-[16px]">
      <div
        className="flex items-center justify-center relative shrink-0 size-[4px]"
        style={
          {
            "--transform-inner-width": "4",
            "--transform-inner-height": "4",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[90deg]">
          <PostSimMicroReview2 />
        </div>
      </div>
      <div
        className="flex h-[113px] items-center justify-center relative shrink-0 w-[18px]"
        style={
          {
            "--transform-inner-width": "105.59375",
            "--transform-inner-height": "18",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[90deg]">
          <p
            className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[18px] relative text-[#333333] text-[13px] text-nowrap tracking-[-0.08px] whitespace-pre"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Tone: 90%, Strong
          </p>
        </div>
      </div>
    </div>
  );
}

function PostSimMicroReview3() {
  return (
    <div
      className="bg-[#d000c3] rounded-[1.67772e+07px] size-[4px]"
      data-name="PostSimMicroReview"
    />
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[16px]">
      <div
        className="flex items-center justify-center relative shrink-0 size-[4px]"
        style={
          {
            "--transform-inner-width": "4",
            "--transform-inner-height": "4",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[90deg]">
          <PostSimMicroReview3 />
        </div>
      </div>
      <div
        className="flex h-[114px] items-center justify-center relative shrink-0 w-[18px]"
        style={
          {
            "--transform-inner-width": "107.65625",
            "--transform-inner-height": "18",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[90deg]">
          <p
            className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[18px] relative text-[#333333] text-[13px] text-nowrap tracking-[-0.08px] whitespace-pre"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Clarity: 75%, Good
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <Frame3 />
      <Frame1 />
      <Frame2 />
      <Frame4 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex items-start ml-[2px] mt-[131px] relative w-[110px]">
      <Frame5 />
      <div
        className="flex h-[72px] items-center justify-center relative shrink-0 w-[41px]"
        style={
          {
            "--transform-inner-width": "69.25",
            "--transform-inner-height": "41",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[90deg]">
          <p
            className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[41px] relative text-[#333333] text-[34px] text-nowrap tracking-[0.4px] whitespace-pre"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            73%
          </p>
        </div>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative">
      <Frame8 />
      <Frame6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative rounded-[14px] shrink-0 w-full">
      <div
        aria-hidden="true"
        className="absolute border-[0.5px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[14px]"
      />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] items-start pb-[30px] pt-[20px] px-[16px] relative w-full">
          <p className="font-['SF_Pro_Display:Semibold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#333333] text-[17px] text-nowrap whitespace-pre">
            Overall Practice Score
          </p>
          <div
            className="flex h-[115px] items-center justify-center leading-[0] relative shrink-0 w-[302px]"
            style={
              {
                "--transform-inner-width": "115",
                "--transform-inner-height": "302",
              } as React.CSSProperties
            }
          >
            <div className="flex-none rotate-[270deg]">
              <Group5 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Pill({
  onClick,
  isSelected,
}: {
  onClick: () => void;
  isSelected: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className="h-[35.99px] relative rounded-[2.5061e+07px] shrink-0 transition-all"
      data-name="Pill"
    >
      {isSelected && (
        <img
          alt=""
          className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[2.5061e+07px] size-full"
          src={imgPill}
        />
      )}
      <div
        className={`bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[35.99px] items-center pl-[15.999px] pr-[16px] py-0 relative rounded-[2.5061e+07px] ${!isSelected ? "bg-[#f5f6fa]" : ""}`}
      >
        <p
          className={`font-['SF_Pro:Medium',sans-serif] font-[510] leading-[18px] relative shrink-0 text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre`}
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          <span
            className={
              isSelected
                ? "text-[rgba(255,255,255,0.9)]"
                : "text-[rgba(0,0,0,0.9)]"
            }
          >{`Clarity `}</span>
          <span
            className={
              isSelected
                ? "text-[rgba(255,255,255,0.6)]"
                : "text-[rgba(60,60,67,0.6)]"
            }
          >
            75%
          </span>
        </p>
      </div>
    </button>
  );
}

function Pill1({
  onClick,
  isSelected,
}: {
  onClick: () => void;
  isSelected: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className="h-[35.99px] relative rounded-[2.5061e+07px] shrink-0 transition-all"
      data-name="Pill"
    >
      {isSelected && (
        <img
          alt=""
          className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[2.5061e+07px] size-full"
          src={imgPill}
        />
      )}
      <div
        className={`bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[35.99px] items-center pl-[15.999px] pr-[16px] py-0 relative rounded-[2.5061e+07px] ${!isSelected ? "bg-[#f5f6fa]" : ""}`}
      >
        <p
          className={`font-['SF_Pro:Medium',sans-serif] font-[510] leading-[18px] relative shrink-0 text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre`}
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          <span
            className={
              isSelected
                ? "text-[rgba(255,255,255,0.9)]"
                : "text-[rgba(0,0,0,0.9)]"
            }
          >{`Tone `}</span>
          <span
            className={
              isSelected
                ? "text-[rgba(255,255,255,0.6)]"
                : "text-[rgba(60,60,67,0.6)]"
            }
          >
            90%
          </span>
        </p>
      </div>
    </button>
  );
}

function Pill2({
  onClick,
  isSelected,
}: {
  onClick: () => void;
  isSelected: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className="h-[35.99px] relative rounded-[2.5061e+07px] shrink-0 transition-all"
      data-name="Pill"
    >
      {isSelected && (
        <img
          alt=""
          className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[2.5061e+07px] size-full"
          src={imgPill}
        />
      )}
      <div
        className={`bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[35.99px] items-center px-[16px] py-0 relative rounded-[2.5061e+07px] ${!isSelected ? "bg-[#f5f6fa]" : ""}`}
      >
        <p
          className={`capitalize font-['SF_Pro:Medium',sans-serif] font-[510] leading-[18px] relative shrink-0 text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre`}
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          <span
            className={
              isSelected
                ? "text-[rgba(255,255,255,0.9)]"
                : "text-[rgba(0,0,0,0.9)]"
            }
          >{`Boundaries `}</span>
          <span
            className={
              isSelected
                ? "text-[rgba(255,255,255,0.6)]"
                : "text-[rgba(60,60,67,0.6)]"
            }
          >
            45%
          </span>
        </p>
      </div>
    </button>
  );
}

function Pill3({
  onClick,
  isSelected,
}: {
  onClick: () => void;
  isSelected: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className="h-[35.99px] relative rounded-[2.5061e+07px] shrink-0 transition-all"
      data-name="Pill"
    >
      {isSelected && (
        <img
          alt=""
          className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[2.5061e+07px] size-full"
          src={imgPill}
        />
      )}
      <div
        className={`bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[35.99px] items-center px-[16px] py-0 relative rounded-[2.5061e+07px] ${!isSelected ? "bg-[#f5f6fa]" : ""}`}
      >
        <p
          className={`font-['SF_Pro:Medium',sans-serif] font-[510] leading-[18px] relative shrink-0 text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre`}
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          <span
            className={
              isSelected
                ? "text-[rgba(255,255,255,0.9)]"
                : "text-[rgba(0,0,0,0.9)]"
            }
          >{`Actionable ask `}</span>
          <span
            className={
              isSelected
                ? "text-[rgba(255,255,255,0.6)]"
                : "text-[rgba(60,60,67,0.6)]"
            }
          >
            60%
          </span>
        </p>
      </div>
    </button>
  );
}

function Summary({
  selectedPill,
  onPillClick,
}: {
  selectedPill: string;
  onPillClick: (pill: string) => void;
}) {
  return (
    <div
      className="content-stretch flex gap-[8px] items-start overflow-x-auto overflow-y-hidden relative w-full max-w-full"
      data-name="Summary"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <style>{`
        div[data-name="Summary"]::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <Pill
        onClick={() => onPillClick("clarity")}
        isSelected={selectedPill === "clarity"}
      />
      <Pill1
        onClick={() => onPillClick("tone")}
        isSelected={selectedPill === "tone"}
      />
      <Pill2
        onClick={() => onPillClick("boundaries")}
        isSelected={selectedPill === "boundaries"}
      />
      <Pill3
        onClick={() => onPillClick("actionable")}
        isSelected={selectedPill === "actionable"}
      />
    </div>
  );
}

function InstantRecap({
  selectedPill,
  onPillClick,
}: {
  selectedPill: string;
  onPillClick: (pill: string) => void;
}) {
  return (
    <div
      className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full overflow-hidden"
      data-name="Instant Recap"
    >
      <Summary
        selectedPill={selectedPill}
        onPillClick={onPillClick}
      />
    </div>
  );
}

function Frame({
  selectedPill,
  onPillClick,
}: {
  selectedPill: string;
  onPillClick: (pill: string) => void;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[35.99px] items-start justify-end relative shrink-0 w-full max-w-full overflow-hidden">
      <InstantRecap
        selectedPill={selectedPill}
        onPillClick={onPillClick}
      />
    </div>
  );
}

function Badge({
  type,
}: {
  type?: "improve" | "good" | "strong";
}) {
  const bgColor =
    type === "improve"
      ? "bg-[#ee2c00]"
      : type === "good"
        ? "bg-[#ff7b00]"
        : "bg-[#17DAD5]";
  const borderColor =
    type === "improve"
      ? "border-[#ee2c00]"
      : type === "good"
        ? "border-[#ff7b00]"
        : "border-[#17DAD5]";
  const text =
    type === "improve"
      ? "Improve"
      : type === "good"
        ? "Good"
        : "Strong";

  return (
    <div
      className={`${bgColor} relative rounded-[12px] shrink-0`}
      data-name="Badge"
    >
      <div className="box-border content-stretch flex gap-[4px] items-center justify-end overflow-clip px-[5px] py-[2px] relative rounded-[inherit]">
        <p
          className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[14px] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          {text}
        </p>
      </div>
      <div
        aria-hidden="true"
        className={`absolute border ${borderColor} border-solid inset-0 pointer-events-none rounded-[12px]`}
      />
    </div>
  );
}

function Frame9({ title, selectedPill }: { title: string; selectedPill: string }) {
  const badgeType = 
    selectedPill === 'tone' ? 'strong' : 
    selectedPill === 'boundaries' ? 'improve' : 
    selectedPill === 'actionable' ? 'good' :
    'good';
  
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[326px]">
      <Badge type={badgeType} />
      <p
        className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[21px] relative shrink-0 text-[#101828] text-[16px] tracking-[-0.4395px] w-[264px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        {title}
      </p>
    </div>
  );
}

function Container({ selectedPill }: { selectedPill: string }) {
  const content = {
    clarity: {
      title: "Add one line about the impact",
      description:
        "Present 1-2 key outcomes immediately after your request to strengthen credibility and show mutual value.",
    },
    tone: {
      title: "Keep the professional warmth",
      description:
        "Your tone balanced professionalism with approachability. Continue using phrases that acknowledge the other person's perspective while maintaining confidence.",
    },
    boundaries: {
      title: "Set clear timeframes earlier",
      description:
        "Establish specific deadlines or response windows at the start of the conversation to create accountability and show you value both your time and theirs.",
    },
    actionable: {
      title: "Make your request more specific",
      description:
        "Include concrete next steps or specific actions you want the other person to take. Clear asks lead to better outcomes.",
    },
  };

  const { title, description } =
    content[selectedPill as keyof typeof content] ||
    content.clarity;

  return (
    <div
      className="relative shrink-0 w-[325px]"
      data-name="Container"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] items-start relative w-[325px]">
        <Frame9 title={title} selectedPill={selectedPill} />
        <p
          className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-[rgba(60,60,67,0.6)] tracking-[-0.3125px] w-[325px]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

function Improve({ selectedPill }: { selectedPill: string }) {
  const borderColor =
    selectedPill === "tone"
      ? "border-[rgba(23,218,213,0.2)]"
      : selectedPill === "boundaries"
        ? "border-[rgba(238,44,0,0.2)]"
        : selectedPill === "actionable"
          ? "border-[rgba(255,123,0,0.2)]"
          : "border-[rgba(255,123,0,0.2)]";

  return (
    <div
      className="bg-white relative rounded-[14px] shrink-0 w-full"
      data-name="Improve"
    >
      <div
        aria-hidden="true"
        className={`absolute border-[0.75px] ${borderColor} border-solid inset-0 pointer-events-none rounded-[14px]`}
      />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[8px] items-start p-[16.75px] relative w-full">
          <Container selectedPill={selectedPill} />
        </div>
      </div>
    </div>
  );
}

function Details({ selectedPill }: { selectedPill: string }) {
  return (
    <div
      className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full"
      data-name="Details"
    >
      <Improve selectedPill={selectedPill} />
    </div>
  );
}

function Tips({ selectedPill }: { selectedPill: string }) {
  return (
    <div
      className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full"
      data-name="Tips"
    >
      <Details selectedPill={selectedPill} />
    </div>
  );
}

export default function Frame10() {
  const [selectedPill, setSelectedPill] =
    useState("boundaries");

  const handlePillClick = (pill: string) => {
    setSelectedPill(pill);
  };

  return (
    <div className="bg-white relative rounded-bl-[20px] rounded-br-[20px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.05),0px_6px_16px_0px_rgba(0,0,0,0.06)] w-full overflow-hidden">
      <div className="size-full overflow-hidden">
        <div className="box-border content-stretch flex flex-col gap-[20px] items-start px-[16px] py-[20px] relative size-full overflow-hidden">
          <Frame7 />
          <Frame
            selectedPill={selectedPill}
            onPillClick={handlePillClick}
          />
          <Tips selectedPill={selectedPill} />
        </div>
      </div>
    </div>
  );
}