import svgPaths from "../imports/svg-apsagymcfv";

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6.66667 7.33333V11.3333" id="Vector" stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M9.33333 7.33333V11.3333" id="Vector_2" stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p37e28100} id="Vector_3" stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 4H14" id="Vector_4" stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2ffbeb80} id="Vector_5" stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button({ onClick }: { onClick: () => void }) {
  return (
    <div className="relative rounded-[22px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e7000b] border-solid inset-0 pointer-events-none rounded-[22px]" />
      <button 
        onClick={onClick}
        className="flex flex-row items-center justify-center size-full"
      >
        <div className="box-border content-stretch flex gap-[14px] items-center justify-center px-[94px] py-[10px] relative w-full">
          <Icon />
          <p className="font-['SF_Compact:Medium',sans-serif] font-[556] leading-[24px] relative shrink-0 text-[#e7000b] text-[16px] text-nowrap tracking-[-0.1504px] whitespace-pre">Delete Recording</p>
        </div>
      </button>
    </div>
  );
}

export function DeleteRecording({ onDelete }: { onDelete: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative w-full" data-name="Delete Recording">
      <Button onClick={onDelete} />
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.6)] text-center w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Audio/video stays on this device. Deleting is permanent.
      </p>
    </div>
  );
}
