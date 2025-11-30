import { StatusBar } from './StatusBar';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Send, Paperclip, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

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
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    const newMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue
    };
    
    setMessages([...messages, newMessage]);
    setInputValue('');
    
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
    <div className="relative w-[390px] h-[844px] bg-white mx-auto overflow-hidden">
      {/* Status Bar */}
      <div className="flex justify-center items-center px-4 pt-[21px] pb-[19px] gap-[154px] h-[62px]">
        <div className="flex-1 flex justify-center items-center">
          <span
            className="text-black text-center"
            style={{
              fontFamily: "SF Pro",
              fontSize: "17px",
              fontWeight: 590,
              lineHeight: "22px",
            }}
          >
            9:41
          </span>
        </div>
        <StatusBar />
      </div>

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
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(62, 95, 255, 0.1)",
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#3E5FFF"/>
                  <path d="M2 17L12 22L22 17M2 12L12 17L22 12" stroke="#3E5FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
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
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(255, 82, 236, 0.1)",
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01" stroke="#FF52EC" strokeWidth="2" strokeLinecap="round"/>
                </svg>
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
      <div className="absolute bottom-0 left-0 right-0 bg-white px-5 py-4" style={{ height: '120px' }}>
        <div
          className="flex items-center gap-2 p-3 rounded-3xl"
          style={{
            background: '#F7F7F7',
            border: '1px solid #E9EBF3'
          }}
        >
          {/* Upload Button */}
          <button
            className="flex items-center justify-center w-10 h-10 rounded-full flex-shrink-0"
            style={{
              background: '#FFFFFF',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.06)'
            }}
          >
            <Paperclip size={20} color="#666666" />
          </button>

          {/* Input Field */}
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Message AI..."
            className="flex-1 bg-transparent outline-none"
            style={{
              fontFamily: 'SF Pro',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '20px',
              color: '#333333'
            }}
          />

          {/* Send Button */}
          <motion.button
            onClick={handleSend}
            className="flex items-center justify-center w-10 h-10 rounded-full flex-shrink-0"
            whileTap={{ scale: 0.9 }}
            style={{
              background: inputValue.trim() 
                ? 'linear-gradient(135deg, #8C00FF 0%, #FF52EC 100%)'
                : '#E9EBF3',
              transition: 'background 0.2s ease'
            }}
          >
            <Send 
              size={18} 
              color={inputValue.trim() ? '#FFFFFF' : '#999999'} 
            />
          </motion.button>
        </div>
      </div>

      {/* Notch */}
      <div className="absolute w-[150px] h-[37px] left-[120px] top-0 bg-black rounded-b-[24px]" />

      {/* Home Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[134px] h-[5px] bg-black rounded-full" />
    </div>
  );
}
