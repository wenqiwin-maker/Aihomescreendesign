import image_fb7add15620a6daf8191d3c5f44230e7b5c088ad from "figma:asset/fb7add15620a6daf8191d3c5f44230e7b5c088ad.png";
import svgPaths from "../imports/svg-2dfu8bzznl";
import imgBadge from "figma:asset/71f51ddbf8b2b5d764325230f5ad1453eab75503.png";
import imgCopyIcon from "figma:asset/9d4126fe1f8085e89c8e064eb4d1a1bbd7697c56.png";
import { useState } from 'react';

function Heading() {
  return (
    <div
      className="h-[20px] relative shrink-0 w-full"
      data-name="Heading 2"
    >
      <p
        className="absolute font-['SF_Pro:Medium',sans-serif] font-[510] leading-[20px] left-0 text-[15px] text-[rgba(0,0,0,0.9)] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Stronger Alternatives
      </p>
    </div>
  );
}

function Text() {
  return (
    <div
      className="h-[20px] relative shrink-0 w-[35.352px]"
      data-name="Text"
    >
      <p
        className="absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-[rgba(60,60,67,0.6)] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Tone:
      </p>
    </div>
  );
}

function Badge({ onClick, isSelected }: { onClick: () => void; isSelected: boolean }) {
  return (
    <button
      onClick={onClick}
      className="h-[22px] relative rounded-[11px] shrink-0 w-[60.453px] transition-all"
      data-name="Badge"
    >
      {isSelected && (
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[11px] size-full"
          src={imgBadge}
        />
      )}
      <div className={`box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[5px] py-[3px] relative rounded-[inherit] w-[60.453px] ${!isSelected ? 'bg-[#f5f6fa]' : ''}`}>
        <p
          className={`font-['SF_Pro:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[12px] text-nowrap whitespace-pre`}
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          <span className={isSelected ? 'text-white' : 'text-neutral-950'}>Neutral</span>
        </p>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[11px]"
      />
    </button>
  );
}

function Badge1({ onClick, isSelected }: { onClick: () => void; isSelected: boolean }) {
  return (
    <button
      onClick={onClick}
      className="h-[22px] relative rounded-[11px] shrink-0 w-[81.844px] transition-all"
      data-name="Badge"
    >
      {isSelected && (
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[11px] size-full"
          src={imgBadge}
        />
      )}
      <div className={`box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[5px] py-[3px] relative rounded-[inherit] w-[81.844px] ${!isSelected ? 'bg-[#f5f6fa]' : ''}`}>
        <p
          className={`font-['SF_Pro:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[12px] text-nowrap whitespace-pre`}
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          <span className={isSelected ? 'text-white' : 'text-neutral-950'}>Firm-polite</span>
        </p>
      </div>
      <div
        aria-hidden="true"
        className={`absolute border ${isSelected ? 'border-[rgba(0,0,0,0)]' : 'border-[rgba(0,0,0,0.1)]'} border-solid inset-0 pointer-events-none rounded-[11px]`}
      />
    </button>
  );
}

function Badge2({ onClick, isSelected }: { onClick: () => void; isSelected: boolean }) {
  return (
    <button
      onClick={onClick}
      className="h-[22px] relative rounded-[11px] shrink-0 w-[56.016px] transition-all"
      data-name="Badge"
    >
      {isSelected && (
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[11px] size-full"
          src={imgBadge}
        />
      )}
      <div className={`box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[5px] py-[3px] relative rounded-[inherit] w-[56.016px] ${!isSelected ? 'bg-[#f5f6fa]' : ''}`}>
        <p
          className={`font-['SF_Pro:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[12px] text-nowrap whitespace-pre`}
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          <span className={isSelected ? 'text-white' : 'text-neutral-950'}>Caring</span>
        </p>
      </div>
      <div
        aria-hidden="true"
        className={`absolute border ${isSelected ? 'border-[rgba(0,0,0,0)]' : 'border-[rgba(0,0,0,0.1)]'} border-solid inset-0 pointer-events-none rounded-[11px]`}
      />
    </button>
  );
}

function PostSimMicroReview({ selectedTone, onToneClick }: { selectedTone: string; onToneClick: (tone: string) => void }) {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center relative shrink-0"
      data-name="PostSimMicroReview"
    >
      <Text />
      <Badge onClick={() => onToneClick('neutral')} isSelected={selectedTone === 'neutral'} />
      <Badge1 onClick={() => onToneClick('firm-polite')} isSelected={selectedTone === 'firm-polite'} />
      <Badge2 onClick={() => onToneClick('caring')} isSelected={selectedTone === 'caring'} />
    </div>
  );
}

function Icon() {
  return (
    <div
      className="relative shrink-0 size-[16px]"
      data-name="Icon"
    >
      <img
        alt=""
        className="block size-full"
        src={image_fb7add15620a6daf8191d3c5f44230e7b5c088ad}
      />
    </div>
  );
}

function Button() {
  return (
    <div
      className="content-stretch flex items-start justify-end relative rounded-[8px] shrink-0 size-[20px]"
      data-name="Button"
    >
      <Icon />
    </div>
  );
}

function PostSimMicroReview1({ selectedTone }: { selectedTone: string }) {
  const content = {
    'neutral': `\"I'd like to decide X by next Wednesday. If that works, I can do Y to support it.\"`,
    'firm-polite': `\"I need a decision by Wednesday to move forward. Can you confirm by then?\"`,
    'caring': `\"Would Wednesday work for you? I want to make sure we're both comfortable with the timeline.\"`
  };

  return (
    <div
      className="bg-[#f5f6fa] box-border content-stretch flex gap-[8px] items-start pb-[16px] pt-[12px] px-[16px] relative rounded-[10px] shrink-0 w-[314px]"
      data-name="PostSimMicroReview"
    >
      <p
        className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#101828] text-[16px] tracking-[-0.3125px] w-[254px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >{content[selectedTone as keyof typeof content]}</p>
      <Button />
    </div>
  );
}

function ToneCards({ selectedTone, onToneClick }: { selectedTone: string; onToneClick: (tone: string) => void }) {
  return (
    <div
      className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0"
      data-name="Tone-cards"
    >
      <PostSimMicroReview selectedTone={selectedTone} onToneClick={onToneClick} />
      <PostSimMicroReview1 selectedTone={selectedTone} />
    </div>
  );
}

function Paragraph() {
  return (
    <div
      className="h-[20px] relative shrink-0 w-[326px]"
      data-name="Paragraph"
    >
      <p
        className="absolute font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-[rgba(60,60,67,0.6)] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        You said:
      </p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div
      className="h-[42px] relative shrink-0 w-[326px]"
      data-name="Paragraph"
    >
      <p
        className="absolute font-['SF_Pro:Regular_Italic',sans-serif] font-normal italic leading-[21px] left-0 text-[16px] text-[rgba(0,0,0,0.9)] top-0 tracking-[-0.3125px] w-[326px]"
        style={{ fontVariationSettings: "'YAXS' 400" }}
      >{`"I want to make this decision by next Wednesday."`}</p>
    </div>
  );
}

function PostSimMicroReview2() {
  return (
    <div
      className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[326px]"
      data-name="PostSimMicroReview"
    >
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

function Card({ selectedTone, onToneClick }: { selectedTone: string; onToneClick: (tone: string) => void }) {
  return (
    <div
      className="bg-white relative rounded-[14px] shrink-0 w-full"
      data-name="Card"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(140,0,255,0.05)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]"
      />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[16px] px-[16px] relative w-full">
          <p
            className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[19px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.9)] text-nowrap tracking-[-0.1504px] whitespace-pre"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Alternatives
          </p>
          <ToneCards selectedTone={selectedTone} onToneClick={onToneClick} />
          <PostSimMicroReview2 />
        </div>
      </div>
    </div>
  );
}

function Container({ selectedTone, onToneClick }: { selectedTone: string; onToneClick: (tone: string) => void }) {
  return (
    <div
      className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <Card selectedTone={selectedTone} onToneClick={onToneClick} />
    </div>
  );
}

export function StrongerAlternatives() {
  const [selectedTone, setSelectedTone] = useState('neutral');

  const handleToneClick = (tone: string) => {
    setSelectedTone(tone);
  };

  return (
    <div
      className="content-stretch flex flex-col gap-[12px] items-start relative w-full"
      data-name="Container"
    >
      <Heading />
      <Container selectedTone={selectedTone} onToneClick={handleToneClick} />
    </div>
  );
}