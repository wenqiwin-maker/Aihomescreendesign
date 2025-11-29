import { useState } from "react";
import {
  ChevronLeft,
  Play,
  Pause,
  Target,
  Flag,
  MessageSquare,
} from "lucide-react";
import imgImageAiCharacter from "figma:asset/90d021ade914fe47e4dd2fdd3fc4a07e9d6c5450.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import bookmarkIcon from "figma:asset/cbb81ccfd38a6e3466ced7b5ebcf4c573848a8f0.png";
import hesitationIcon from "figma:asset/94dc86094bb48a274fa8d1d4286e75f6ba6bb651.png";
import risingEmotionIcon from "figma:asset/8b32da91415dc9cf6c19e5a823bf54ed72dda66a.png";

interface PracticePlaybackProps {
  onBack: () => void;
}

export function PracticePlayback({
  onBack,
}: PracticePlaybackProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const topics = [
    {
      id: 1,
      title: "Team Formation",
      startTime: "00:14",
      color: "#60A5FA", // Blue
      duration: "25%",
      icon: bookmarkIcon,
      isImage: true,
    },
    {
      id: 2,
      title: "Career Growth",
      startTime: "03:07",
      color: "#F472B6", // Pink
      duration: "25%",
      icon: Target,
      isImage: false,
    },
    {
      id: 3,
      title: "Strategies",
      startTime: "09:30",
      color: "#A3E635", // Green
      duration: "20%",
      icon: risingEmotionIcon,
      isImage: true,
    },
    {
      id: 4,
      title: "Work Overview",
      startTime: "13:42",
      color: "#FB923C", // Orange
      duration: "20%",
      icon: Flag,
      isImage: false,
    },
    {
      id: 5,
      title: "Planning",
      startTime: "16:20",
      color: "#C084FC", // Purple
      duration: "10%",
      icon: hesitationIcon,
      isImage: true,
    },
  ];

  const chatHistory = [
    {
      speaker: "You",
      text: "I wanted to discuss my career progression and what I need to do to reach the next level.",
      time: "00:14",
    },
    {
      speaker: "Manager",
      text: "I'm glad you brought that up. You've been doing great work on the team formation project.",
      time: "00:25",
    },
    {
      speaker: "You",
      text: "Thanks. I feel like I've taken on more responsibility there, especially with the new hires.",
      time: "00:42",
    },
    {
      speaker: "Manager",
      text: "Absolutely. I've noticed how you've been mentoring them. That's a key leadership skill we look for.",
      time: "01:05",
    },
    {
      speaker: "You",
      text: "I've also been trying to improve our deployment process to reduce downtime.",
      time: "01:15",
    },
    {
      speaker: "Manager",
      text: "That hasn't gone unnoticed. The team appreciates the stability improvements.",
      time: "01:30",
    },
  ];

  return (
    <div className="fixed inset-0 bg-[#F5F6FA] w-[390px] h-[844px] overflow-y-auto mx-auto font-['SF_Pro']">
      {/* Video Player Section */}
      <div className="relative w-full aspect-[390/300] bg-black group shrink-0 shadow-sm">
        <div className="absolute inset-0 overflow-hidden">
          <ImageWithFallback
            src={imgImageAiCharacter}
            alt="AI Character"
            className="w-full h-full object-cover object-[center_20%] opacity-90"
          />
        </div>

        {/* Back Button */}
        <button
          onClick={onBack}
          className="absolute top-4 left-4 w-10 h-10 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center z-20 hover:bg-black/30 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        {/* Play/Pause Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 text-white fill-current" />
            ) : (
              <Play className="w-8 h-8 text-white fill-current ml-1" />
            )}
          </button>
        </div>

        {/* Video Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] flex gap-0.5 cursor-pointer group-hover:h-[4px] transition-all items-end pb-[1px]">
          {topics.map((topic, index) => {
            // Mock progress logic (35% total progress)
            const currentProgress = 35;
            const durations = [25, 25, 20, 20, 10];
            const start = durations
              .slice(0, index)
              .reduce((a, b) => a + b, 0);
            const end = start + durations[index];

            let fillPercent = 0;
            if (currentProgress >= end) fillPercent = 100;
            else if (currentProgress > start)
              fillPercent =
                ((currentProgress - start) / (end - start)) *
                100;

            return (
              <div
                key={topic.id}
                style={{ width: topic.duration }}
                className="h-full relative bg-white/30"
              >
                <div
                  style={{ width: `${fillPercent}%` }}
                  className="h-full bg-[#8C00FF]"
                />
                {/* Playhead Knob - Only show on the active segment */}
                {currentProgress > start &&
                  currentProgress < end && (
                    <div
                      className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-sm z-10 scale-0 group-hover:scale-100 transition-transform"
                      style={{
                        left: `${fillPercent}%`,
                        transform: "translate(-50%, 0%)",
                      }}
                    />
                  )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col h-[calc(844px-300px)]">
        {/* Horizontal Chapters List */}
        <div className="w-full overflow-x-auto no-scrollbar py-4 px-4 shrink-0 border-b border-gray-200 bg-white">
          <div className="flex gap-3 w-max">
            {topics.map((topic) => (
              <button
                key={topic.id}
                className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200 shadow-sm text-left group hover:border-[#8C00FF]/50 hover:shadow-md transition-all min-w-[180px]"
              >
                <div className="w-9 h-9 shrink-0 bg-gray-50 rounded-lg p-2 flex items-center justify-center text-gray-600">
                  {topic.isImage ? (
                    <ImageWithFallback
                      src={topic.icon as string}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <topic.icon className="w-full h-full stroke-[1.5]" />
                  )}
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs text-gray-500 font-medium">
                    {topic.startTime}
                  </span>
                  <span className="text-[13px] text-gray-900 font-semibold leading-tight line-clamp-1">
                    {topic.title}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat History */}
        <div className="flex-1 overflow-y-auto p-5 bg-[#F5F6FA]">
          <div className="flex flex-col gap-6">
            {chatHistory.map((msg, idx) => (
              <div key={idx} className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between px-1">
                  <span
                    className={`text-xs font-semibold tracking-wide ${msg.speaker === "You" ? "text-[#8C00FF]" : "text-gray-500"}`}
                  >
                    {msg.speaker}
                  </span>
                  <span className="text-[11px] text-gray-400 tabular-nums">
                    {msg.time}
                  </span>
                </div>
                <div
                  className={`p-3.5 rounded-2xl text-[15px] leading-relaxed shadow-sm border ${
                    msg.speaker === "You"
                      ? "bg-white border-gray-100 text-gray-900 rounded-tl-sm"
                      : "bg-white border-gray-100 text-gray-900 rounded-tr-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Bottom spacer */}
            <div className="h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}