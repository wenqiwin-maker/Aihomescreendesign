import { motion, AnimatePresence } from 'motion/react';

interface TagPopupProps {
  isOpen: boolean;
  onClose: () => void;
  tags: number[];
  currentTagText: string;
  onTagTextChange: (text: string) => void;
  onTagInputFocus: () => void;
  isTagKeyboardOpen: boolean;
  onSendTagNote: (text: string) => void;
}

export function TagPopup({ 
  isOpen, 
  onClose, 
  tags, 
  currentTagText, 
  onTagTextChange,
  onTagInputFocus,
  isTagKeyboardOpen,
  onSendTagNote
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
            top: isTagKeyboardOpen ? '244px' : '493px', // Keyboard at 454px, popup 180px height, gap 30px: 454 - 180 - 30 = 244px
            width: '358px',
            height: '180px',
            transition: 'top 0.3s ease'
          }}
        >
          {/* Main Card */}
          <div 
            className="relative w-full h-[172px] bg-white"
            style={{
              borderRadius: '24px'
            }}
          >
            {/* Content */}
            <div 
              className="absolute flex flex-col gap-6"
              style={{
                left: '20px',
                top: '25px',
                width: '318px'
              }}
            >
              {/* Title Row with Icon and Close Button */}
              <div className="flex flex-row items-center gap-2 w-full">
                {/* Pin Icon */}
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.3066 3.35514L13.0861 0.575549C13.4547 0.207025 13.9546 0 14.4758 0C14.997 0 15.4969 0.207025 15.8655 0.575549L21.4245 6.1367C21.793 6.50533 22 7.00524 22 7.52649C22 8.04774 21.793 8.54765 21.4245 8.91629L18.647 11.6959L10.3066 3.35711V3.35514ZM8.91491 4.7469L7.52518 3.35711C7.15656 2.98858 6.65667 2.78156 6.13544 2.78156C5.61421 2.78156 5.11433 2.98858 4.74571 3.35711L0.576507 7.52256C0.393745 7.70513 0.248759 7.92193 0.149838 8.16057C0.0509164 8.39921 0 8.65501 0 8.91334C0 9.17167 0.0509164 9.42747 0.149838 9.66611C0.248759 9.90475 0.393745 10.1216 0.576507 10.3041L5.44156 15.1694L1.27039 19.3388C1.0861 19.5233 0.982672 19.7735 0.982856 20.0344C0.98304 20.2952 1.08682 20.5453 1.27137 20.7296C1.45592 20.9139 1.70613 21.0173 1.96694 21.0171C2.22775 21.0169 2.4778 20.9131 2.66209 20.7286L6.82933 16.5611L11.6963 21.4244C12.065 21.793 12.5648 22 13.0861 22C13.6073 22 14.1072 21.793 14.4758 21.4244L18.645 17.2551C18.8278 17.0725 18.9728 16.8557 19.0717 16.6171C19.1706 16.3784 19.2215 16.1226 19.2215 15.8643C19.2215 15.606 19.1706 15.3502 19.0717 15.1115C18.9728 14.8729 18.8278 14.6561 18.645 14.4735L17.2553 13.0837L8.91687 4.7469H8.91491Z" fill="#3E5FFF"/>
                </svg>

                {/* Notice Title */}
                <h3 
                  style={{
                    fontFamily: 'SF Pro',
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
                      fontFamily: 'SF Pro', 
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

              {/* Input Field */}
              <div className="w-full relative">
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
                      fontFamily: 'SF Pro',
                      fontWeight: 510,
                      fontSize: '16px',
                      lineHeight: '20px',
                      letterSpacing: '-0.150391px',
                      color: '#0A0A0A',
                      minHeight: '80px',
                      background: 'transparent',
                      caretColor: '#3E5FFF'
                    }}
                    value={currentTagText}
                    onChange={(e) => onTagTextChange(e.target.value)}
                    onFocus={onTagInputFocus}
                    maxLength={500}
                  />
                </div>
                {/* Character Count */}
                <div 
                  className="absolute right-0 bottom-0"
                  style={{
                    fontFamily: 'SF Pro',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '16px',
                    color: currentTagText.length >= 500 ? '#FF3B30' : '#999999'
                  }}
                >
                  {currentTagText.length}/500
                </div>
              </div>
            </div>
          </div>

          {/* Triangle Pointer */}
          <div 
            className="absolute bg-white"
            style={{
              left: '322px',
              top: '164px',
              width: '24px',
              height: '24px',
              clipPath: 'polygon(50% 100%, 0 0, 100% 0)',
              transform: 'rotate(180deg)'
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}