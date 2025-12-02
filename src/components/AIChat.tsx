import { StatusBar } from './StatusBar';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChatInputBar } from './ChatInputBar';
import progressIcon from '../assets/Progress.png';
import tipsIcon from '../assets/Subtract.png';

interface AIChatProps {
  onClose: () => void;
  onStartConversation?: () => void;
}

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export function AIChat({ onClose, onStartConversation }: AIChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text
    };

    setMessages([...messages, newMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "I'm here to help you practice important conversations. How can I assist you today?"
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  return (
    <div className="relative w-[390px] h-screen bg-white mx-auto overflow-hidden">
      <StatusBar variant="dark" />

      {/* Header */}
      <div className="flex justify-between items-center px-4 pb-[10px] h-[54px]">
        {/* Back Button */}
        <button
          onClick={onClose}
          className="flex flex-row justify-center items-center w-11 h-11 rounded-full relative flex-shrink-0"
          style={{
            background: "rgba(247, 247, 247, 0.85)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "0.5px solid rgba(255, 255, 255, 0.8)",
            boxShadow:
              "0px 4px 12px rgba(0, 0, 0, 0.15), inset 0px 1px 0px rgba(255, 255, 255, 0.4)",
          }}
        >
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
            ←
          </span>
        </button>

        {/* Title */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <h1
            className="text-[#333333] text-center"
            style={{
              fontFamily: "SF Pro",
              fontSize: "17px",
              fontWeight: 590,
              lineHeight: "22px",
              letterSpacing: "-0.43px",
            }}
          >
            AI Assistant
          </h1>
        </div>

        {/* Placeholder for alignment */}
        <div className="w-11 h-11" />
      </div>

      {/* Chat Content */}
      <div className="flex flex-col h-[calc(844px-116px-120px)] overflow-y-auto px-5 py-4">
        {messages.length === 0 ? (
          /* Quick Access Cards - Show when no messages */
          <motion.div
            className="flex flex-col gap-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2
                }
              }
            }}
          >
            <motion.h2
              style={{
                fontFamily: 'SF Pro',
                fontSize: '20px',
                fontWeight: 600,
                lineHeight: '24px',
                color: '#333333',
                marginBottom: '8px'
              }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
              }}
            >
              How can I help you today?
            </motion.h2>

            {/* Start a conversation card */}
            <motion.button
              onClick={onStartConversation}
              className="flex items-center gap-4 p-4 rounded-2xl"
              whileTap={{ scale: 0.97 }}
              whileHover={{
                boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.2 }
              }}
              style={{
                boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.08)",
                background: "linear-gradient(135deg, #8C00FF 0%, #FF52EC 100%)",
                cursor: "pointer"
              }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(255, 255, 255, 0.2)",
                }}
              >
                <Sparkles size={24} color="white" />
              </div>
              <div className="flex-1 text-left">
                <h3
                  style={{
                    fontFamily: 'SF Pro',
                    fontSize: '16px',
                    fontWeight: 590,
                    lineHeight: '20px',
                    color: '#FFFFFF'
                  }}
                >
                  Start a conversation
                </h3>
                <p
                  style={{
                    fontFamily: 'SF Pro',
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: '18px',
                    color: 'rgba(255, 255, 255, 0.8)',
                    marginTop: '2px'
                  }}
                >
                  Practice important conversations with AI
                </p>
              </div>
            </motion.button>

            {/* Additional quick access cards */}
            <motion.button
              className="flex items-center gap-4 p-4 rounded-2xl"
              whileTap={{ scale: 0.97 }}
              whileHover={{
                boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.2 }
              }}
              style={{
                boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.08)",
                border: "1px solid #E9EBF3",
                background: "#FFFFFF",
                cursor: "pointer"
              }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
              }}
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src={progressIcon}
                  alt="Progress icon"
                  className="object-contain"
                  style={{ width: '40px', height: '47px' }}
                />
              </div>
              <div className="flex-1 text-left">
                <h3
                  style={{
                    fontFamily: 'SF Pro',
                    fontSize: '16px',
                    fontWeight: 590,
                    lineHeight: '20px',
                    color: '#333333'
                  }}
                >
                  Review my progress
                </h3>
                <p
                  style={{
                    fontFamily: 'SF Pro',
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: '18px',
                    color: 'rgba(0, 0, 0, 0.6)',
                    marginTop: '2px'
                  }}
                >
                  See how you've improved over time
                </p>
              </div>
            </motion.button>

            <motion.button
              className="flex items-center gap-4 p-4 rounded-2xl"
              whileTap={{ scale: 0.97 }}
              whileHover={{
                boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.2 }
              }}
              style={{
                boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.08)",
                border: "1px solid #E9EBF3",
                background: "#FFFFFF",
                cursor: "pointer"
              }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
              }}
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src={tipsIcon}
                  alt="Conversation tips icon"
                  className="object-contain"
                  style={{ width: '40px', height: '40px' }}
                />
              </div>
              <div className="flex-1 text-left">
                <h3
                  style={{
                    fontFamily: 'SF Pro',
                    fontSize: '16px',
                    fontWeight: 590,
                    lineHeight: '20px',
                    color: '#333333'
                  }}
                >
                  Get conversation tips
                </h3>
                <p
                  style={{
                    fontFamily: 'SF Pro',
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: '18px',
                    color: 'rgba(0, 0, 0, 0.6)',
                    marginTop: '2px'
                  }}
                >
                  Learn strategies for effective communication
                </p>
              </div>
            </motion.button>
          </motion.div>
        ) : (
          /* Messages */
          <div className="flex flex-col gap-4">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className="max-w-[280px] rounded-2xl px-4 py-3"
                  style={{
                    background: message.role === 'user' 
                      ? 'linear-gradient(135deg, #8C00FF 0%, #FF52EC 100%)'
                      : '#F7F7F7',
                    color: message.role === 'user' ? '#FFFFFF' : '#333333',
                    fontFamily: 'SF Pro',
                    fontSize: '15px',
                    fontWeight: 400,
                    lineHeight: '20px'
                  }}
                >
                  {message.content}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Input Area */}
      <ChatInputBar onSendMessage={handleSendMessage} />

      {/* Notch */}
      <div className="absolute w-[150px] h-[37px] left-[120px] top-0 bg-black rounded-b-[24px]" />

      {/* Home Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[134px] h-[5px] bg-black rounded-full" />
    </div>
  );
}
