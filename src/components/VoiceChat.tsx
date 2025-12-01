import imgImageAiCharacter1 from "../assets/user-pip.png";
import aiCharacterGif from "../assets/ai-character.gif";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ChatBubblePopup } from "./ChatBubblePopup";
import { KeyboardInput } from "./KeyboardInput";
import { CaptionPopup } from "./CaptionPopup";
import { TagPopup } from "./TagPopup";
import { UploadPopup } from "./UploadPopup";
import { toast } from "sonner@2.0.3";
import { Message, Tag } from "../types";
import {
  StatusBar,
  ProgressBar,
  ActionButtons,
  DemoChatSheet,
  TagButton,
  GlassIconButton,
} from "./voice-chat";

interface VoiceChatProps {
  onClose: () => void;
  onBack: () => void;
  isDemo?: boolean;
}

export function VoiceChat({
  onClose,
  onBack,
  isDemo = false,
}: VoiceChatProps) {
  const [isChatPopupOpen, setIsChatPopupOpen] = useState(false);
  const [isCaptionPopupOpen, setIsCaptionPopupOpen] = useState(false);
  const [isTagPopupOpen, setIsTagPopupOpen] = useState(false);
  const [isTagKeyboardOpen, setIsTagKeyboardOpen] = useState(false);
  const [isUploadPopupOpen, setIsUploadPopupOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isWaitingForAI, setIsWaitingForAI] = useState(false);
  const [tags, setTags] = useState<Tag[]>([]);
  const [currentTagText, setCurrentTagText] = useState("");
  const [activeTagIndex, setActiveTagIndex] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [isVideoOn, setIsVideoOn] = useState(false);
  const [isAiSpeaking, setIsAiSpeaking] = useState(false);

  const totalDuration = 120;

  // Auto-play progress
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime((prev) => {
        if (prev >= totalDuration) {
          clearInterval(interval);
          return totalDuration;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Demo Logic
  useEffect(() => {
    if (!isDemo) return;

    let isCancelled = false;

    const script = [
      {
        type: "ai",
        text: "Hi there! I noticed you want to practice for a Product Manager role. I can help you prepare for your upcoming interview. Shall we start with a quick introduction?",
        delayBefore: 800,
      },
      {
        type: "user",
        text: "That sounds great. I'm ready to start.",
        delayBefore: 1500,
      },
      {
        type: "ai",
        text: "Excellent. To begin, could you tell me about a time you had to manage conflicting priorities from different stakeholders? This is a common behavioral question.",
        delayBefore: 1000,
      },
      {
        type: "user",
        text: "Sure. In my previous role, I was leading a product launch where Marketing wanted to release early to match an event, but Engineering needed two more weeks for QA.",
        delayBefore: 2000,
      },
      {
        type: "ai",
        text: "That's a classic scenario. How did you approach the situation? Did you facilitate a compromise or prioritize one side?",
        delayBefore: 1000,
      },
      {
        type: "user",
        text: "I organized a meeting with both leads. We agreed to a soft launch for a beta group, satisfying Marketing's need for buzz while giving Engineering time to fix critical bugs.",
        delayBefore: 2500,
      },
      {
        type: "ai",
        text: "That sounds like a solid strategy. Prioritizing data and quality usually wins over stakeholders. Did you face any pushback during the beta phase?",
        delayBefore: 1200,
      },
      {
        type: "user",
        text: "A little, but the data we gathered helped justify the full release timeline to leadership.",
        delayBefore: 2000,
      },
      {
        type: "ai",
        text: "Great example of data-driven decision making. It's important to highlight that impact. Let's move to the next topic: metrics. How do you define success for a new feature?",
        delayBefore: 1500,
      },
      {
        type: "user",
        text: "I usually start with the user problem and map it to business goals. For example, if we want to increase engagement, I'd look at Daily Active Users and retention rates.",
        delayBefore: 2200,
      },
      {
        type: "ai",
        text: "Those are good high-level metrics. Can you give me an example of a 'counter-metric' you would monitor to ensure you aren't hurting the ecosystem?",
        delayBefore: 1200,
      },
      {
        type: "user",
        text: "Definitely. If we're optimizing for clicks, I'd watch out for 'bounce rate' or 'time spent' to ensure we aren't just creating clickbait that users abandon quickly.",
        delayBefore: 2500,
      },
      {
        type: "ai",
        text: "Spot on. Balancing growth with quality is key. You're doing great! Do you want to try a technical system design question next?",
        delayBefore: 1500,
      },
    ];

    const runScript = async () => {
      for (const step of script) {
        if (isCancelled) return;

        await new Promise((r) => setTimeout(r, step.delayBefore));
        if (isCancelled) return;

        const newMsgId = Date.now().toString() + Math.random().toString();

        if (step.type === "user") {
          setMessages((prev) => [
            ...prev,
            {
              id: newMsgId,
              text: step.text,
              sender: "user",
              timestamp: new Date(),
            },
          ]);
        } else {
          // AI Message
          setMessages((prev) => [
            ...prev,
            {
              id: newMsgId,
              text: "",
              sender: "ai",
              timestamp: new Date(),
            },
          ]);
          setIsAiSpeaking(true);

          const words = step.text.split(" ");
          let currentText = "";
          for (let i = 0; i < words.length; i++) {
            if (isCancelled) break;
            currentText += (i > 0 ? " " : "") + words[i];

            setMessages((prev) => {
              const newArr = [...prev];
              const lastIdx = newArr.findIndex((m) => m.id === newMsgId);
              if (lastIdx !== -1) {
                newArr[lastIdx] = {
                  ...newArr[lastIdx],
                  text: currentText,
                };
              }
              return newArr;
            });

            await new Promise((r) => setTimeout(r, 100 + Math.random() * 50));
          }
          setIsAiSpeaking(false);
        }
      }
    };

    runScript();

    return () => {
      isCancelled = true;
    };
  }, [isDemo]);

  const handleAddTag = () => {
    const newTagPosition = (currentTime / totalDuration) * 100;
    const minutes = Math.floor(currentTime / 60);
    const seconds = currentTime % 60;
    const timeString = `${minutes}:${seconds.toString().padStart(2, "0")}`;

    const newTag: Tag = {
      position: newTagPosition,
      text: "",
      timestamp: timeString,
    };

    const newTags = [...tags, newTag];
    setTags(newTags);
    setActiveTagIndex(newTags.length - 1);
    setIsTagPopupOpen(true);
    setCurrentTagText("");
  };

  const handleTagTextChange = (text: string) => {
    if (text.length <= 500) {
      setCurrentTagText(text);
    }
  };

  const handleSendTagNote = (text: string) => {
    if (text.trim() && activeTagIndex !== null) {
      const newTags = [...tags];
      newTags[activeTagIndex] = {
        ...newTags[activeTagIndex],
        text: text,
      };
      setTags(newTags);

      toast.success(`Tag saved at ${newTags[activeTagIndex].timestamp}`, {
        duration: 3000,
        style: {
          fontFamily: "SF Pro",
          fontSize: "15px",
          fontWeight: 510,
        },
      });

      setIsTagPopupOpen(false);
      setIsTagKeyboardOpen(false);
      setCurrentTagText("");
      setActiveTagIndex(null);
    }
  };

  const handleCloseTagPopup = () => {
    setIsTagPopupOpen(false);
    setIsTagKeyboardOpen(false);
    setCurrentTagText("");
    setActiveTagIndex(null);
  };

  const handleTagInputFocus = () => {
    setIsTagKeyboardOpen(true);
  };

  const handleTagClick = (index: number) => {
    setActiveTagIndex(index);
    setCurrentTagText(tags[index].text);
    setIsTagPopupOpen(true);
  };

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
    setIsWaitingForAI(true);

    setTimeout(() => {
      setIsWaitingForAI(false);
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "Got it! Let me help you with that.",
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  const handleSeek = (time: number) => {
    setCurrentTime(time);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="absolute inset-0 w-[390px] h-[844px] overflow-hidden"
      style={{ background: "#F9FAFB" }}
    >
      {/* Video/Image Background Layer - Dynamic Height */}
      <div
        className="absolute inset-0 w-full origin-bottom transition-[height] duration-300"
        style={{
          height: isCaptionPopupOpen ? "400px" : "844px",
        }}
      >
        <img
          src={aiCharacterGif}
          alt="AI Character"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center top" }}
        />
      </div>

      {/* User Picture (PiP) - Only shown when video is ON */}
      {isVideoOn && (
        <div
          className="absolute h-[153px] left-[252px] rounded-[24px] top-[500px] w-[118px] z-20"
          style={{
            boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.12)",
          }}
        >
          <img
            alt="User"
            className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full"
            src={imgImageAiCharacter1}
          />
          <div className="h-[153px] overflow-clip rounded-[inherit] w-[118px]" />
          <div
            aria-hidden="true"
            className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[24px]"
          />
        </div>
      )}

      {/* Demo Chat Sheet */}
      {isDemo && (
        <DemoChatSheet messages={messages} isVisible={messages.length > 0} />
      )}

      {/* Top Section - Fixed */}
      <div className="absolute top-0 left-0 w-[390px] flex flex-col z-20">
        <StatusBar />

        {/* Navigation */}
        <div className="flex items-center px-4 pb-2 gap-3 h-[56px]">
          {/* Back Button */}
          <GlassIconButton onClick={onBack}>
            <span
              className="flex items-center justify-center"
              style={{
                fontFamily: "SF Pro",
                fontSize: "20px",
                fontWeight: 400,
                lineHeight: "20px",
                color: "#404040",
              }}
            >
              􀯶
            </span>
          </GlassIconButton>

          {/* Progress Bar */}
          <ProgressBar
            currentTime={currentTime}
            totalDuration={totalDuration}
            tags={tags}
            onSeek={handleSeek}
            onTagClick={handleTagClick}
          />

          {/* Close Button - Hidden in Demo */}
          {!isDemo && (
            <GlassIconButton onClick={onClose}>
              <span
                className="flex items-center justify-center"
                style={{
                  fontFamily: "SF Pro",
                  fontSize: "20px",
                  fontWeight: 400,
                  lineHeight: "20px",
                  color: "#404040",
                }}
              >
                􀆄
              </span>
            </GlassIconButton>
          )}
        </div>
      </div>

      {/* Body Section - Fixed at Bottom - Disabled in Demo */}
      <div
        className={`absolute left-0 w-[390px] h-[246px] z-10 ${isDemo ? "opacity-50 pointer-events-none" : ""}`}
        style={{ top: "564px" }}
      >
        <ActionButtons
          isVideoOn={isVideoOn}
          onToggleVideo={() => setIsVideoOn(!isVideoOn)}
          onToggleCaptions={() => setIsCaptionPopupOpen(!isCaptionPopupOpen)}
          onOpenKeyboard={() => setIsChatPopupOpen(true)}
          onOpenUpload={() => setIsUploadPopupOpen(true)}
        />
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 w-[390px] h-[34px] flex justify-center items-center z-10">
        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[134px] h-[5px] bg-white rounded-full" />
      </div>

      {/* Tag Button - Floating Bottom Right */}
      <TagButton isActive={isTagPopupOpen} onClick={handleAddTag} />

      {/* Notch */}
      <div className="absolute w-[150px] h-[37px] left-[120px] top-0 bg-black rounded-b-[24px] z-30" />

      <CaptionPopup
        isOpen={isCaptionPopupOpen}
        onClose={() => setIsCaptionPopupOpen(false)}
      />
      <ChatBubblePopup
        isOpen={isChatPopupOpen}
        onClose={() => setIsChatPopupOpen(false)}
        messages={messages}
        isWaitingForAI={isWaitingForAI}
      />
      <KeyboardInput
        isOpen={isChatPopupOpen}
        onSendMessage={handleSendMessage}
        onClose={() => setIsChatPopupOpen(false)}
      />
      <TagPopup
        isOpen={isTagPopupOpen}
        onClose={handleCloseTagPopup}
        tags={tags}
        currentTagText={currentTagText}
        onTagTextChange={handleTagTextChange}
        onTagInputFocus={handleTagInputFocus}
        isTagKeyboardOpen={isTagKeyboardOpen}
        onSendTagNote={handleSendTagNote}
        onUpload={() => setIsUploadPopupOpen(true)}
      />
      <KeyboardInput
        isOpen={isTagKeyboardOpen}
        onSendMessage={handleSendTagNote}
        onClose={() => setIsTagKeyboardOpen(false)}
        showInput={false}
      />
      <UploadPopup
        isOpen={isUploadPopupOpen}
        onClose={() => setIsUploadPopupOpen(false)}
      />
    </motion.div>
  );
}
