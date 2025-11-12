import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface CaptionPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CaptionPopup({ isOpen, onClose }: CaptionPopupProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'tween', duration: 0.3 }}
          className="absolute left-0 w-[390px] h-[505px] z-40 overflow-y-auto"
          style={{
            top: '339px',
            background: 'linear-gradient(180deg, #F3F4F6 51.44%, #ECEEF1 100%)',
            borderRadius: '24px 24px 0px 0px'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Toolbar */}
          <div 
            className="flex flex-col items-center"
            style={{
              position: 'absolute',
              width: '390px',
              height: '70px',
              left: '0px',
              top: '0px',
              padding: '0px 0px 10px',
              zIndex: 10,
              background: 'linear-gradient(180deg, #F3F4F6 51.44%, #ECEEF1 100%)'
            }}
          >
            {/* Grabber */}
            <div 
              className="flex flex-col items-start"
              style={{
                padding: '5px 0px 0px',
                width: '36px',
                height: '16px'
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '5px',
                  background: '#CCCCCC',
                  mixBlendMode: 'plus-darker',
                  borderRadius: '100px'
                }}
              />
            </div>

            {/* Title and Controls */}
            <div 
              className="flex flex-row justify-between items-center"
              style={{
                padding: '0px 16px',
                gap: '66px',
                isolation: 'isolate',
                width: '390px',
                height: '44px'
              }}
            >
              {/* Leading Button (Close) */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                className="flex flex-row justify-center items-center relative flex-shrink-0"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '296px',
                  isolation: 'isolate'
                }}
              >
                {/* BG */}
                <div
                  style={{
                    position: 'absolute',
                    width: '44px',
                    height: '44px',
                    left: 'calc(50% - 44px/2)',
                    top: 'calc(50% - 44px/2)',
                    background: 'rgba(120, 120, 128, 0.16)',
                    borderRadius: '50%'
                  }}
                />
                {/* X Icon */}
                <X 
                  className="relative z-10"
                  style={{
                    width: '20px',
                    height: '20px',
                    color: '#999999',
                    mixBlendMode: 'plus-darker'
                  }}
                  strokeWidth={2}
                />
              </button>

              {/* Spacer */}
              <div style={{ margin: '0 auto', width: '8px', height: '44px' }} />

              {/* Title */}
              <div
                style={{
                  position: 'absolute',
                  left: 'calc(50% - 28px)',
                  top: '13px',
                  height: '22px'
                }}
              >
                <span
                  style={{
                    fontFamily: 'SF Pro',
                    fontWeight: 590,
                    fontSize: '17px',
                    lineHeight: '22px',
                    textAlign: 'center',
                    letterSpacing: '-0.43px',
                    color: '#333333',
                    mixBlendMode: 'plus-darker',
                    whiteSpace: 'nowrap'
                  }}
                >
                  Caption
                </span>
              </div>
            </div>
          </div>

          {/* Content Container - Positioned relative to allow absolute children */}
          <div className="relative w-full h-full">
            {/* Frame 19145 - Opening-Ask */}
            <div
              className="flex flex-row items-center gap-3"
              style={{
                position: 'absolute',
                width: '343px',
                height: '20px',
                left: '27px',
                top: '29px'
              }}
            >
              <div
                style={{
                  width: '6px',
                  height: '6px',
                  background: '#000000',
                  borderRadius: '50%'
                }}
              />
              <span
                style={{
                  width: '325px',
                  height: '20px',
                  fontFamily: 'SF Pro',
                  fontWeight: 510,
                  fontSize: '16px',
                  lineHeight: '20px',
                  letterSpacing: '-0.150391px',
                  color: '#0A0A0A'
                }}
              >
                Opening-Ask
              </span>
            </div>

            {/* Arrow 1 */}
            <div
              style={{
                position: 'absolute',
                width: '283px',
                height: '0px',
                left: '29px',
                top: '52px',
                border: '2px solid rgba(0, 0, 0, 0.1)',
                transform: 'rotate(90deg)',
                transformOrigin: 'top left'
              }}
            />

            {/* ChatBubble Container */}
            <div
              style={{
                position: 'absolute',
                width: '325px',
                height: '616px',
                left: '45px',
                top: '65px'
              }}
            >
              {/* chat-bubble-user 1 */}
              <div
                className="flex flex-col justify-center items-center"
                style={{
                  position: 'absolute',
                  width: '176px',
                  height: '36px',
                  left: '0px',
                  top: '0px',
                  padding: '8px 12px',
                  gap: '8px',
                  background: '#FFFFFF',
                  borderRadius: '0px 18px 18px 18px'
                }}
              >
                <span
                  style={{
                    width: '152px',
                    height: '20px',
                    fontFamily: 'SF Pro',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '20px',
                    letterSpacing: '-0.150391px',
                    color: '#0A0A0A'
                  }}
                >
                  Let's start with opening
                </span>
              </div>

              {/* chat-bubble-AI 1 */}
              <div
                className="flex flex-col justify-center items-center"
                style={{
                  position: 'absolute',
                  width: '115px',
                  height: '36px',
                  left: '210px',
                  top: '44px',
                  padding: '8px 12px',
                  gap: '8px',
                  background: 'rgba(62, 95, 255, 0.1)',
                  borderRadius: '18px 18px 0px 18px'
                }}
              >
                <span
                  style={{
                    width: '91px',
                    height: '20px',
                    fontFamily: 'SF Pro',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '20px',
                    textAlign: 'right',
                    letterSpacing: '-0.150391px',
                    color: '#0A0A0A'
                  }}
                >
                  Ok, Let's start
                </span>
              </div>

              {/* chat-bubble-user 2 */}
              <div
                className="flex flex-col justify-center items-center"
                style={{
                  position: 'absolute',
                  width: '249px',
                  height: '36px',
                  left: '0px',
                  top: '88px',
                  padding: '8px 12px',
                  gap: '8px',
                  background: '#FFFFFF',
                  borderRadius: '0px 18px 18px 18px'
                }}
              >
                <span
                  style={{
                    width: '225px',
                    height: '20px',
                    fontFamily: 'SF Pro',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '20px',
                    letterSpacing: '-0.150391px',
                    color: '#0A0A0A'
                  }}
                >
                  First, you should post your request
                </span>
              </div>

              {/* chat-bubble-AI 2 */}
              <div
                className="flex flex-col justify-center items-end"
                style={{
                  position: 'absolute',
                  width: '302px',
                  height: '56px',
                  left: '23px',
                  top: '132px',
                  padding: '8px 12px',
                  gap: '8px',
                  background: 'rgba(62, 95, 255, 0.1)',
                  borderRadius: '18px 18px 0px 18px'
                }}
              >
                <span
                  style={{
                    width: '278px',
                    height: '40px',
                    fontFamily: 'SF Pro',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '20px',
                    textAlign: 'right',
                    letterSpacing: '-0.150391px',
                    color: '#0A0A0A'
                  }}
                >
                  I'd like to apply for Promotion from Senior Eng to Staff Eng in Q3.
                </span>
              </div>

              {/* chat-bubble-user 3 */}
              <div
                className="flex flex-col justify-center items-center"
                style={{
                  position: 'absolute',
                  width: '302px',
                  height: '56px',
                  left: '0px',
                  top: '196px',
                  padding: '8px 12px',
                  gap: '8px',
                  background: '#FFFFFF',
                  borderRadius: '0px 18px 18px 18px'
                }}
              >
                <span
                  style={{
                    width: '278px',
                    height: '40px',
                    fontFamily: 'SF Pro',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '20px',
                    letterSpacing: '-0.150391px',
                    color: '#0A0A0A'
                  }}
                >
                  At Evidence section, you need to provide some strong impact
                </span>
              </div>

              {/* chat-bubble-AI 3 */}
              <div
                className="flex flex-col justify-center items-end"
                style={{
                  position: 'absolute',
                  width: '302px',
                  height: '56px',
                  left: '23px',
                  top: '307px',
                  padding: '8px 12px',
                  gap: '8px',
                  background: 'rgba(62, 95, 255, 0.1)',
                  borderRadius: '18px 18px 0px 18px'
                }}
              >
                <span
                  style={{
                    width: '278px',
                    height: '40px',
                    fontFamily: 'SF Pro',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '20px',
                    textAlign: 'right',
                    letterSpacing: '-0.150391px',
                    color: '#0A0A0A'
                  }}
                >
                  In the last two quarters, I led several pillars, delivered positive results.
                </span>
              </div>

              {/* chat-bubble-user 4 */}
              <div
                className="flex flex-col justify-center items-center"
                style={{
                  position: 'absolute',
                  width: '302px',
                  height: '56px',
                  left: '0px',
                  top: '371px',
                  padding: '8px 12px',
                  gap: '8px',
                  background: '#FFFFFF',
                  borderRadius: '0px 18px 18px 18px'
                }}
              >
                <span
                  style={{
                    width: '278px',
                    height: '40px',
                    fontFamily: 'SF Pro',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '20px',
                    letterSpacing: '-0.150391px',
                    color: '#0A0A0A'
                  }}
                >
                  At Evidence section, you need to provide some strong impact
                </span>
              </div>

              {/* chat-bubble-AI 4 */}
              <div
                className="flex flex-col justify-center items-end"
                style={{
                  position: 'absolute',
                  width: '302px',
                  height: '76px',
                  left: '23px',
                  top: '479px',
                  padding: '8px 12px',
                  gap: '8px',
                  background: 'rgba(62, 95, 255, 0.1)',
                  borderRadius: '18px 18px 0px 18px'
                }}
              >
                <span
                  style={{
                    width: '278px',
                    height: '60px',
                    fontFamily: 'SF Pro',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '20px',
                    textAlign: 'right',
                    letterSpacing: '-0.150391px',
                    color: '#0A0A0A'
                  }}
                >
                  Please confirm the review window by this Friday and align on the materials and milestones.
                </span>
              </div>

              {/* chat-bubble-user 5 */}
              <div
                className="flex flex-col justify-center items-center"
                style={{
                  position: 'absolute',
                  width: '302px',
                  height: '56px',
                  left: '0px',
                  top: '563px',
                  padding: '8px 12px',
                  gap: '8px',
                  background: '#FFFFFF',
                  borderRadius: '0px 18px 18px 18px'
                }}
              >
                <span
                  style={{
                    width: '278px',
                    height: '40px',
                    fontFamily: 'SF Pro',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '20px',
                    letterSpacing: '-0.150391px',
                    color: '#0A0A0A'
                  }}
                >
                  I will check the planning for your career growth
                </span>
              </div>

              {/* chat-bubble-AI 5 */}
              <div
                className="flex flex-col justify-center items-end"
                style={{
                  position: 'absolute',
                  width: '302px',
                  height: '36px',
                  left: '23px',
                  top: '627px',
                  padding: '8px 12px',
                  gap: '8px',
                  background: 'rgba(62, 95, 255, 0.1)',
                  borderRadius: '18px 18px 0px 18px'
                }}
              >
                <span
                  style={{
                    width: '278px',
                    height: '20px',
                    fontFamily: 'SF Pro',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '20px',
                    textAlign: 'right',
                    letterSpacing: '-0.150391px',
                    color: '#0A0A0A'
                  }}
                >
                  Thank you very much
                </span>
              </div>
            </div>

            {/* Frame 19146 - Evidence-Why */}
            <div
              className="flex flex-row items-center gap-3"
              style={{
                position: 'absolute',
                width: '343px',
                height: '20px',
                left: '27px',
                top: '336px'
              }}
            >
              <div
                style={{
                  width: '6px',
                  height: '6px',
                  background: '#000000',
                  borderRadius: '50%'
                }}
              />
              <span
                style={{
                  width: '325px',
                  height: '20px',
                  fontFamily: 'SF Pro',
                  fontWeight: 510,
                  fontSize: '16px',
                  lineHeight: '20px',
                  letterSpacing: '-0.150391px',
                  color: '#0A0A0A'
                }}
              >
                Evidence-Why
              </span>
            </div>

            {/* Arrow 2 */}
            <div
              style={{
                position: 'absolute',
                width: '148px',
                height: '0px',
                left: '29px',
                top: '360px',
                border: '2px solid rgba(0, 0, 0, 0.1)',
                transform: 'rotate(90deg)',
                transformOrigin: 'top left'
              }}
            />

            {/* Frame 19147 - Next steps */}
            <div
              className="flex flex-row items-center gap-3"
              style={{
                position: 'absolute',
                width: '343px',
                height: '20px',
                left: '27px',
                top: '507px'
              }}
            >
              <div
                style={{
                  width: '6px',
                  height: '6px',
                  background: '#000000',
                  borderRadius: '50%'
                }}
              />
              <span
                style={{
                  width: '325px',
                  height: '20px',
                  fontFamily: 'SF Pro',
                  fontWeight: 510,
                  fontSize: '16px',
                  lineHeight: '20px',
                  letterSpacing: '-0.150391px',
                  color: '#0A0A0A'
                }}
              >
                Next steps
              </span>
            </div>

            {/* Arrow 3 */}
            <div
              style={{
                position: 'absolute',
                width: '201px',
                height: '0px',
                left: '29px',
                top: '529px',
                border: '2px solid rgba(0, 0, 0, 0.1)',
                transform: 'rotate(90deg)',
                transformOrigin: 'top left'
              }}
            />

            {/* Frame 19148 - Ending */}
            <div
              className="flex flex-row items-center gap-3"
              style={{
                position: 'absolute',
                width: '343px',
                height: '20px',
                left: '27px',
                top: '731px'
              }}
            >
              <div
                style={{
                  width: '6px',
                  height: '6px',
                  background: '#000000',
                  borderRadius: '50%'
                }}
              />
              <span
                style={{
                  width: '325px',
                  height: '20px',
                  fontFamily: 'SF Pro',
                  fontWeight: 510,
                  fontSize: '16px',
                  lineHeight: '20px',
                  letterSpacing: '-0.150391px',
                  color: '#0A0A0A'
                }}
              >
                Ending
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
