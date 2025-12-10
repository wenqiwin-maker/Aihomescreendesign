import { Sparkles, X } from "lucide-react";
import { useRef, useEffect } from "react";
import { Message } from "../../types";

interface DemoChatSheetProps {
  messages: Message[];
  isVisible: boolean;
  onClose?: () => void;
}

export function DemoChatSheet({ messages, isVisible, onClose }: DemoChatSheetProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const prevMessageCountRef = useRef(0);

  useEffect(() => {
    // Only scroll if messages were added (not on initial render)
    if (messages.length > prevMessageCountRef.current && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
    prevMessageCountRef.current = messages.length;
  }, [messages]);

  return (
    <div
      className="absolute bottom-0 left-0 right-0 h-[350px] z-30 rounded-t-[24px] overflow-hidden transition-transform duration-300 ease-out"
      style={{
        background:
          "linear-gradient(180deg, #F3F4F6 0.59%, #ECEEF1 100%)",
        boxShadow: "0px -4px 20px rgba(0,0,0,0.1)",
        transform: isVisible ? "translateY(0)" : "translateY(100%)",
      }}
    >
      {/* Handle Bar */}
      <div className="w-full flex justify-center pt-3 pb-1">
        <div className="w-9 h-1.5 bg-gray-300 rounded-full opacity-50" />
      </div>

      {/* Header with close button */}
      <div className="relative px-6 py-3 flex items-center justify-center">
        <button
          onClick={onClose}
          className="absolute left-4 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors"
        >
          <X size={20} className="text-gray-600" />
        </button>
        <h2
          style={{
            fontWeight: 600,
            fontSize: "20px",
            lineHeight: "24px",
            letterSpacing: "-0.5px",
            color: "#0A0A0A",
          }}
        >
          Caption
        </h2>
      </div>

      <div className="px-6 py-4 flex flex-col gap-4 overflow-y-auto pb-20" style={{ height: 'calc(100% - 120px)' }}>
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === "user" ? "flex-col items-end ml-auto" : "flex-row items-start gap-3"} mb-3`}
            style={{
              maxWidth:
                message.sender === "user"
                  ? "285px"
                  : "100%",
              width:
                message.sender === "user"
                  ? "fit-content"
                  : "100%",
            }}
          >
            {message.sender === "ai" && (
              <div className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-full bg-white flex items-center justify-center border border-white/50 shadow-sm">
                <Sparkles
                  size={16}
                  className="text-[#8C00FF]"
                  fill="#8C00FF"
                />
              </div>
            )}
            <div
              style={{
                padding:
                  message.sender === "user"
                    ? "10px 12px"
                    : "0px",
                background:
                  message.sender === "user"
                    ? "rgba(131, 68, 204, 0.1)"
                    : "transparent",
                borderRadius:
                  message.sender === "user"
                    ? "18px 18px 0px 18px"
                    : "0px",
              }}
            >
              <span
                style={{
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "22px",
                  letterSpacing: "-0.150391px",
                  color: "#0A0A0A",
                  textAlign: "left",
                }}
              >
                {message.text}
              </span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} className="h-4" />
      </div>
    </div>
  );
}
