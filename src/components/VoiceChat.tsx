import imgImageAiCharacter1 from "../assets/user-pip.png";
import aiCharacterGif from "../assets/ai-character.gif";
import selfViewVideo from "../assets/self-view-video.mp4";
import backIcon from "../assets/back-icon.svg";
import closeIcon from "../assets/close-icon.svg";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ChatBubblePopup } from "./ChatBubblePopup";
import { KeyboardInput } from "./KeyboardInput";
import { CaptionPopup } from "./CaptionPopup";
import { TagPopup } from "./TagPopup";
import { UploadPopup } from "./UploadPopup";
import { toast } from "sonner@2.0.3";
import { Message, Tag } from "../types";
import { StatusBar } from "./StatusBar";
import {
  ProgressBar,
  ActionButtons,
  DemoChatSheet,
  TagButton,
} from "./voice-chat";
import { LiquidGlassButton } from "./shared/LiquidGlassButton";
import { useSetupStore } from "../stores/useSetupStore";
import { demoScripts } from "../data/captionScripts";

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
  const [isDemoChatVisible, setIsDemoChatVisible] = useState(true);
  const { relationshipState } = useSetupStore();

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

    // Get the script based on the selected relationship state
    const script = demoScripts[relationshipState];

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
  }, [isDemo, relationshipState]);

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
            boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.25), 0px 8px 32px rgba(0, 0, 0, 0.15)",
          }}
        >
          <video
            className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full"
            src={selfViewVideo}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="h-[153px] overflow-clip rounded-[inherit] w-[118px]" />
          <div
            aria-hidden="true"
            className="absolute border-[1px] border-solid border-white/80 inset-0 pointer-events-none rounded-[24px]"
            style={{
              boxShadow: "inset 0px 0px 0px 1px rgba(255, 255, 255, 0.3)",
            }}
          />
        </div>
      )}

      {/* Demo Chat Sheet */}
      {isDemo && (
        <DemoChatSheet 
          messages={messages} 
          isVisible={messages.length > 0 && isDemoChatVisible} 
          onClose={() => setIsDemoChatVisible(false)}
        />
      )}

      {/* Top Section - Fixed */}
      <div className="absolute top-0 left-0 w-[390px] flex flex-col z-20">
        <StatusBar variant="light" />

        {/* Navigation */}
        <div className="flex items-center px-4 pb-2 gap-3 h-[56px]">
          {/* Back Button */}
          <LiquidGlassButton onClick={onBack} size={44} className="flex-shrink-0">
            <img src={backIcon} alt="Back" className="w-[36px] h-[36px]" />
          </LiquidGlassButton>

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
            <LiquidGlassButton onClick={onClose} size={44} className="flex-shrink-0">
              <img src={closeIcon} alt="Close" className="w-[36px] h-[36px]" />
            </LiquidGlassButton>
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
