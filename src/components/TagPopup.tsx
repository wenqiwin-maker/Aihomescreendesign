import { motion, AnimatePresence } from 'motion/react';
import { Send } from 'lucide-react';

interface TagPopupProps {
  isOpen: boolean;
  onClose: () => void;
  tags: any[];
  currentTagText: string;
  onTagTextChange: (text: string) => void;
  onTagInputFocus: () => void;
  isTagKeyboardOpen: boolean;
  onSendTagNote: (text: string) => void;
  onUpload: () => void;
}

export function TagPopup({ 
  isOpen, 
  onClose, 
  tags, 
  currentTagText, 
  onTagTextChange,
  onTagInputFocus,
  isTagKeyboardOpen,
  onSendTagNote,
  onUpload
}: TagPopupProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="absolute z-30"
          style={{
            left: '16px',
            top: isTagKeyboardOpen ? '244px' : '493px',
            width: '358px',
            height: 'auto', // Allow auto height
            transition: 'top 0.3s ease'
          }}
        >
          {/* Main Card */}
          <div 
            className="relative w-full bg-white flex flex-col"
            style={{
              borderRadius: '24px',
              padding: '25px 20px 20px 20px',
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)'
            }}
          >
            {/* Title Row with Icon and Close Button */}
            <div className="flex flex-row items-center gap-2 w-full mb-4">
              {/* Pin Icon */}
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.3066 3.35514L13.0861 0.575549C13.4547 0.207025 13.9546 0 14.4758 0C14.997 0 15.4969 0.207025 15.8655 0.575549L21.4245 6.1367C21.793 6.50533 22 7.00524 22 7.52649C22 8.04774 21.793 8.54765 21.4245 8.91629L18.647 11.6959L10.3066 3.35711V3.35514ZM8.91491 4.7469L7.52518 3.35711C7.15656 2.98858 6.65667 2.78156 6.13544 2.78156C5.61421 2.78156 5.11433 2.98858 4.74571 3.35711L0.576507 7.52256C0.393745 7.70513 0.248759 7.92193 0.149838 8.16057C0.0509164 8.39921 0 8.65501 0 8.91334C0 9.17167 0.0509164 9.42747 0.149838 9.66611C0.248759 9.90475 0.393745 10.1216 0.576507 10.3041L5.44156 15.1694L1.27039 19.3388C1.0861 19.5233 0.982672 19.7735 0.982856 20.0344C0.98304 20.2952 1.08682 20.5453 1.27137 20.7296C1.45592 20.9139 1.70613 21.0173 1.96694 21.0171C2.22775 21.0169 2.4778 20.9131 2.66209 20.7286L6.82933 16.5611L11.6963 21.4244C12.065 21.793 12.5648 22 13.0861 22C13.6073 22 14.1072 21.793 14.4758 21.4244L18.645 17.2551C18.8278 17.0725 18.9728 16.8557 19.0717 16.6171C19.1706 16.3784 19.2215 16.1226 19.2215 15.8643C19.2215 15.606 19.1706 15.3502 19.0717 15.1115C18.9728 14.8729 18.8278 14.6561 18.645 14.4735L17.2553 13.0837L8.91687 4.7469H8.91491Z" fill="#8C00FF"/>
              </svg>

              {/* Notice Title */}
              <h3 
                style={{
                  fontWeight: 510,
                  fontSize: '20px',
                  lineHeight: '24px',
                  letterSpacing: '-0.150391px',
                  color: '#0A0A0A',
                  flex: 1
                }}
              >
                Notice
              </h3>

              {/* Close Button */}
              <button 
                onClick={onClose}
                className="flex items-center justify-center w-6 h-6 flex-shrink-0"
              >
                <span
                  style={{ 
                    fontSize: '20px', 
                    fontWeight: 400,
                    lineHeight: '20px',
                    color: '#404040'
                  }}
                >
                  􀆄
                </span>
              </button>
            </div>

            {/* Input Area */}
            <div className="w-full relative flex flex-col">
              <div 
                className="w-full overflow-y-auto"
                style={{
                  maxHeight: '80px'
                }}
              >
                <textarea
                  autoFocus
                  placeholder="Enter your tag note here..."
                  className="w-full resize-none outline-none border-none"
                  style={{
                    fontWeight: 510,
                    fontSize: '16px',
                    lineHeight: '20px',
                    letterSpacing: '-0.150391px',
                    color: '#0A0A0A',
                    minHeight: '60px',
                    background: 'transparent',
                    caretColor: '#3E5FFF'
                  }}
                  value={currentTagText}
                  onChange={(e) => onTagTextChange(e.target.value)}
                  onFocus={onTagInputFocus}
                  maxLength={500}
                />
              </div>

              {/* Bottom Actions Row */}
              <div className="flex items-end justify-between w-full mt-4">
                {/* Upload Button - Left Bottom with Plus Icon */}
                <button
                  onClick={onUpload}
                  className="flex items-center justify-center w-8 h-8 -ml-1"
                >
                   <svg width="24" height="24" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 0C12.4445 0 13.8754 0.284112 15.21 0.836914C16.5445 1.38971 17.7569 2.20029 18.7783 3.22168C19.7997 4.24306 20.6103 5.45555 21.1631 6.79004C21.7159 8.12462 22 9.55546 22 11C22 12.4445 21.7159 13.8754 21.1631 15.21L20.9434 15.7041C20.404 16.8442 19.6721 17.8846 18.7783 18.7783L18.3867 19.1514C17.4521 19.9983 16.3777 20.6794 15.21 21.1631L14.7051 21.3574C13.5174 21.7823 12.2641 22 11 22C9.73592 22 8.48261 21.7823 7.29492 21.3574L6.79004 21.1631C5.62231 20.6794 4.54789 19.9983 3.61328 19.1514L3.22168 18.7783C2.32791 17.8846 1.59603 16.8442 1.05664 15.7041L0.836914 15.21C0.284112 13.8754 -2.15253e-08 12.4445 0 11C3.16029e-09 9.55546 0.284112 8.12462 0.836914 6.79004C1.38971 5.45555 2.20029 4.24306 3.22168 3.22168C4.24306 2.20029 5.45555 1.38971 6.79004 0.836914C8.12462 0.284112 9.55546 1.3753e-07 11 0ZM11 1.33008C9.73019 1.33008 8.47297 1.58049 7.2998 2.06641C6.12659 2.55237 5.06005 3.26417 4.16211 4.16211C3.26417 5.06005 2.55237 6.12659 2.06641 7.2998C1.58049 8.47297 1.33008 9.73019 1.33008 11C1.33008 12.2698 1.58049 13.527 2.06641 14.7002C2.55237 15.8734 3.26417 16.9399 4.16211 17.8379C5.06005 18.7358 6.12659 19.4476 7.2998 19.9336C8.47297 20.4195 9.73019 20.6699 11 20.6699C12.2698 20.6699 13.527 20.4195 14.7002 19.9336C15.8734 19.4476 16.9399 18.7358 17.8379 17.8379C18.7358 16.9399 19.4476 15.8734 19.9336 14.7002C20.4195 13.527 20.6699 12.2698 20.6699 11C20.6699 9.73018 20.4195 8.47297 19.9336 7.2998C19.4476 6.12659 18.7358 5.06005 17.8379 4.16211C16.9399 3.26417 15.8734 2.55237 14.7002 2.06641C13.527 1.58049 12.2698 1.33008 11 1.33008ZM15.75 9.95703L14.8096 10.8975L11.8301 7.91797V15H10.5V7.73242L7.33594 10.8975L6.39551 9.95703L11.0723 5.2793L15.75 9.95703Z" fill="black"/>
                   </svg>
                </button>

                {/* Right Side: Count + Send */}
                <div className="flex flex-col items-end gap-2">
                  {/* Character Count */}
                  <div 
                    style={{
                      fontWeight: 400,
                      fontSize: '12px',
                      lineHeight: '16px',
                      color: currentTagText.length >= 500 ? '#FF3B30' : '#999999'
                    }}
                  >
                    {currentTagText.length}/500
                  </div>

                  {/* Send Button */}
                  <button
                    onClick={() => onSendTagNote(currentTagText)}
                    disabled={!currentTagText.trim()}
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-[#8C00FF] disabled:bg-gray-300 transition-colors"
                  >
                    <Send className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Triangle Pointer - Hidden when keyboard is open (typing) */}
          {!isTagKeyboardOpen && (
            <div 
              className="absolute bg-white"
              style={{
                left: '322px',
                bottom: '-12px', // Position relative to bottom of content
                width: '24px',
                height: '24px',
                clipPath: 'polygon(50% 100%, 0 0, 100% 0)',
                transform: 'rotate(180deg)',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)' // This shadow won't show well with clip-path, but that's ok
              }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}