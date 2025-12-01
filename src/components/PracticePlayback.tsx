import { useState, useRef, useEffect } from "react";
import {
  ChevronLeft,
  Play,
  Pause,
  Target,
  Flag,
  MessageSquare,
  Sparkles,
  Pin,
} from "lucide-react";
import imgImageAiCharacter from "../assets/ai-character-static.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import bookmarkIcon from "../assets/bookmark-icon.png";
import hesitationIcon from "../assets/hesitation-icon.png";
import risingEmotionIcon from "../assets/rising-emotion-icon.png";

// Helper function to convert time string to seconds
function timeToSeconds(time: string): number {
  const [minutes, seconds] = time.split(":").map(Number);
  return minutes * 60 + seconds;
}

// Helper function to convert seconds to percentage (assuming 20 min total = 1200 seconds)
function secondsToPercent(seconds: number, totalSeconds: number = 1200): number {
  return (seconds / totalSeconds) * 100;
}

interface PracticePlaybackProps {
  onBack: () => void;
}

export function PracticePlayback({
  onBack,
}: PracticePlaybackProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentProgress, setCurrentProgress] = useState(7); // Starting at ~7% (00:14 timestamp)
  const [activeSection, setActiveSection] = useState(0);
  const [showProgressBarExpanded, setShowProgressBarExpanded] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const messageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const topics = [
    {
      id: 1,
      title: "Your bookmark",
      startTime: "00:23",
      color: "#60A5FA", // Blue
      duration: "25%",
      icon: bookmarkIcon,
      isImage: true,
      startPercent: 0,
      endPercent: 25,
      firstMessageIndex: 0,
    },
    {
      id: 2,
      title: "Hesitation detected",
      startTime: "00:45",
      color: "#F472B6", // Pink
      duration: "25%",
      icon: hesitationIcon,
      isImage: true,
      startPercent: 25,
      endPercent: 50,
      firstMessageIndex: 3,
    },
    {
      id: 3,
      title: "Your bookmark",
      startTime: "01:12",
      color: "#A3E635", // Green
      duration: "25%",
      icon: bookmarkIcon,
      isImage: true,
      startPercent: 50,
      endPercent: 75,
      firstMessageIndex: 6,
    },
    {
      id: 4,
      title: "Rising emotion",
      startTime: "01:38",
      color: "#FB923C", // Orange
      duration: "25%",
      icon: risingEmotionIcon,
      isImage: true,
      startPercent: 75,
      endPercent: 100,
      firstMessageIndex: 9,
    },
  ];

  const chatHistory = [
    // Section 1: Your bookmark (00:23 - 00:45)
    {
      speaker: "You",
      text: "I wanted to discuss my career progression and what I need to do to reach the next level.",
      time: "00:23",
      section: 0,
    },
    {
      speaker: "Manager",
      text: "I'm glad you brought that up. You've been doing great work on the team formation project.",
      time: "00:30",
      section: 0,
    },
    {
      speaker: "You",
      text: "Thanks. I feel like I've taken on more responsibility there, especially with the new hires.",
      time: "00:38",
      section: 0,
    },
    // Section 2: Hesitation detected (00:45 - 01:12)
    {
      speaker: "Manager",
      text: "Absolutely. I've noticed how you've been mentoring them. That's a key leadership skill we look for.",
      time: "00:45",
      section: 1,
    },
    {
      speaker: "You",
      text: "I've also been trying to improve our deployment process to reduce downtime.",
      time: "00:55",
      section: 1,
    },
    {
      speaker: "Manager",
      text: "That hasn't gone unnoticed. The team appreciates the stability improvements.",
      time: "01:05",
      section: 1,
    },
    // Section 3: Your bookmark (01:12 - 01:38)
    {
      speaker: "You",
      text: "What specific skills do you think I need to develop to move to the next level?",
      time: "01:12",
      section: 2,
    },
    {
      speaker: "Manager",
      text: "Technical leadership is one area. You've got strong coding skills, but senior engineers need to drive architectural decisions.",
      time: "01:22",
      section: 2,
    },
    {
      speaker: "You",
      text: "I've been studying system design more. Would taking the lead on our next major project help?",
      time: "01:30",
      section: 2,
    },
    // Section 4: Rising emotion (01:38 - end)
    {
      speaker: "Manager",
      text: "Definitely. The Q3 platform migration could be a great opportunity for that kind of ownership.",
      time: "01:38",
      section: 3,
    },
    {
      speaker: "You",
      text: "That sounds great. I'll draft an initial plan and share it with you by Friday.",
      time: "01:48",
      section: 3,
    },
    {
      speaker: "Manager",
      text: "Perfect. I'm confident you'll get there. Keep up the excellent work and don't hesitate to reach out if you need support.",
      time: "01:55",
      section: 3,
    },
  ];

  // Function to handle clicking on a section
  const handleSectionClick = (sectionIndex: number) => {
    const topic = topics[sectionIndex];
    setActiveSection(sectionIndex);
    setCurrentProgress(topic.startPercent + 1); // Set progress to start of section
    
    // Show expanded progress bar for 2 seconds
    setShowProgressBarExpanded(true);
    setTimeout(() => {
      setShowProgressBarExpanded(false);
    }, 2000);
    
    // Scroll to the first message of this section
    const messageIndex = topic.firstMessageIndex;
    if (messageRefs.current[messageIndex] && chatContainerRef.current) {
      messageRefs.current[messageIndex]?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // Function to scroll transcript based on progress percentage
  const scrollToProgressPosition = (progress: number) => {
    // Find which section this progress falls into
    const sectionIndex = topics.findIndex(
      (topic) => progress >= topic.startPercent && progress < topic.endPercent
    );
    
    if (sectionIndex === -1) return;
    
    const topic = topics[sectionIndex];
    // Calculate how far into this section we are (0 to 1)
    const sectionProgress = (progress - topic.startPercent) / (topic.endPercent - topic.startPercent);
    
    // Get the message indices for this section
    const startMsgIndex = topic.firstMessageIndex;
    const nextTopic = topics[sectionIndex + 1];
    const endMsgIndex = nextTopic ? nextTopic.firstMessageIndex : chatHistory.length;
    const messagesInSection = endMsgIndex - startMsgIndex;
    
    // Calculate which message to scroll to based on section progress
    const targetMsgIndex = Math.min(
      startMsgIndex + Math.floor(sectionProgress * messagesInSection),
      endMsgIndex - 1
    );
    
    if (messageRefs.current[targetMsgIndex]) {
      messageRefs.current[targetMsgIndex]?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // Calculate progress from mouse/touch position
  const calculateProgressFromPosition = (clientX: number) => {
    if (!progressBarRef.current) return currentProgress;
    
    const rect = progressBarRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    return percentage;
  };

  // Handle drag start
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setShowProgressBarExpanded(true);
    
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const newProgress = calculateProgressFromPosition(clientX);
    setCurrentProgress(newProgress);
  };

  // Handle drag move
  const handleDragMove = (e: MouseEvent | TouchEvent) => {
    if (!isDragging) return;
    
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const newProgress = calculateProgressFromPosition(clientX);
    setCurrentProgress(newProgress);
    scrollToProgressPosition(newProgress);
  };

  // Handle drag end
  const handleDragEnd = () => {
    if (isDragging) {
      setIsDragging(false);
      // Keep progress bar expanded for a moment after releasing
      setTimeout(() => {
        setShowProgressBarExpanded(false);
      }, 1500);
    }
  };

  // Set up global mouse/touch event listeners for dragging
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleDragMove);
      window.addEventListener('mouseup', handleDragEnd);
      window.addEventListener('touchmove', handleDragMove);
      window.addEventListener('touchend', handleDragEnd);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleDragMove);
      window.removeEventListener('mouseup', handleDragEnd);
      window.removeEventListener('touchmove', handleDragMove);
      window.removeEventListener('touchend', handleDragEnd);
    };
  }, [isDragging]);

  // Update active section based on current progress
  useEffect(() => {
    const newActiveSection = topics.findIndex(
      (topic) => currentProgress >= topic.startPercent && currentProgress < topic.endPercent
    );
    if (newActiveSection !== -1 && newActiveSection !== activeSection) {
      setActiveSection(newActiveSection);
    }
  }, [currentProgress]);

  return (
    <div className="fixed inset-0 bg-[#F5F6FA] w-[390px] h-screen overflow-y-auto mx-auto font-['SF_Pro']">
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
        <div 
          ref={progressBarRef}
          onMouseDown={handleDragStart}
          onTouchStart={handleDragStart}
          className={`absolute bottom-0 left-0 right-0 flex gap-0.5 cursor-pointer transition-all duration-300 items-end pb-[1px] ${
            showProgressBarExpanded || isDragging ? 'h-[4px]' : 'h-[2px] group-hover:h-[4px]'
          }`}
        >
          {topics.map((topic, index) => {
            let fillPercent = 0;
            if (currentProgress >= topic.endPercent) fillPercent = 100;
            else if (currentProgress > topic.startPercent)
              fillPercent =
                ((currentProgress - topic.startPercent) / (topic.endPercent - topic.startPercent)) *
                100;

            return (
              <div
                key={topic.id}
                onClick={(e) => {
                  if (!isDragging) handleSectionClick(index);
                }}
                style={{ width: topic.duration }}
                className="h-full relative bg-white/30 cursor-pointer hover:bg-white/40 transition-colors"
              >
                <div
                  style={{ width: `${fillPercent}%` }}
                  className={`h-full bg-[#8C00FF] ${isDragging ? '' : 'transition-all duration-300'}`}
                />
                {/* Playhead Knob - Only show on the active segment */}
                {currentProgress > topic.startPercent &&
                  currentProgress < topic.endPercent && (
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-sm z-10 transition-transform duration-300 ${
                        showProgressBarExpanded || isDragging ? 'scale-100' : 'scale-0 group-hover:scale-100'
                      }`}
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
            {topics.map((topic, index) => (
              <button
                key={topic.id}
                onClick={() => handleSectionClick(index)}
                className={`flex items-center gap-3 p-3 bg-white rounded-xl border shadow-sm text-left group hover:border-[#8C00FF]/50 hover:shadow-md transition-all min-w-[180px] ${
                  activeSection === index 
                    ? 'border-[#8C00FF] shadow-md ring-2 ring-[#8C00FF]/20' 
                    : 'border-gray-200'
                }`}
              >
                <div className={`w-9 h-9 shrink-0 rounded-lg p-2 flex items-center justify-center ${
                  activeSection === index ? 'bg-[#8C00FF]/10 text-[#8C00FF]' : 'bg-gray-50 text-gray-600'
                }`}>
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
                  <span className={`text-xs font-medium ${
                    activeSection === index ? 'text-[#8C00FF]' : 'text-gray-500'
                  }`}>
                    {topic.startTime}
                  </span>
                  <span className={`text-[13px] font-semibold leading-tight line-clamp-1 ${
                    activeSection === index ? 'text-[#8C00FF]' : 'text-gray-900'
                  }`}>
                    {topic.title}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat History */}
        <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-5 bg-[#F5F6FA]">
          <div className="flex flex-col gap-6">
            {chatHistory.map((msg, idx) => {
              // Check if this message is the first message of a bookmark section
              const isFirstMessageOfBookmark = topics.some(
                (topic) => topic.title === "Your bookmark" && topic.firstMessageIndex === idx
              );
              
              return (
                <div
                  key={idx}
                  ref={(el) => { messageRefs.current[idx] = el; }}
                  className={`flex flex-col gap-1 ${
                    msg.speaker === "You" ? "items-end" : "items-start"
                  }`}
                >
                  {msg.speaker === "You" ? (
                    // User Message (Right)
                    <>
                      <div
                        className="p-[10px_12px] max-w-[85%] rounded-[18px_18px_0px_18px] bg-[#8344CC]/10"
                      >
                        <span className="text-[16px] leading-[22px] tracking-[-0.15px] text-[#0A0A0A] text-left font-normal font-['SF_Pro'] block">
                          {msg.text}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 mr-1">
                        {isFirstMessageOfBookmark && (
                          <div className="flex items-center gap-1">
                            <Pin size={10} className="text-[#8C00FF]" />
                            <span className="text-[11px] text-[#8C00FF] font-medium">Your bookmark</span>
                            <span className="text-[11px] text-gray-300">·</span>
                          </div>
                        )}
                        <span className="text-[11px] text-gray-400 tabular-nums">
                          {msg.time}
                        </span>
                      </div>
                    </>
                  ) : (
                    // AI Message (Left)
                    <>
                      <div className="flex flex-row items-start gap-3 max-w-full">
                        <div className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-white flex items-center justify-center border border-white/50 shadow-sm">
                          <Sparkles
                            size={14}
                            className="text-[#8C00FF]"
                            fill="#8C00FF"
                          />
                        </div>
                        <span className="text-[16px] leading-[22px] tracking-[-0.15px] text-[#0A0A0A] text-left font-normal font-['SF_Pro'] pt-0.5">
                          {msg.text}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 ml-11">
                        {isFirstMessageOfBookmark && (
                          <div className="flex items-center gap-1">
                            <Pin size={10} className="text-[#8C00FF]" />
                            <span className="text-[11px] text-[#8C00FF] font-medium">Your bookmark</span>
                            <span className="text-[11px] text-gray-300">·</span>
                          </div>
                        )}
                        <span className="text-[11px] text-gray-400 tabular-nums">
                          {msg.time}
                        </span>
                      </div>
                    </>
                  )}
                </div>
              );
            })}

            {/* Bottom spacer */}
            <div className="h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
