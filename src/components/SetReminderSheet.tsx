import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

interface SetReminderSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onSave?: (reminder: ReminderData) => void;
}

interface ReminderData {
  date: Date;
  time: string;
  hapticEnabled: boolean;
}

// Calendar icon component
function CalendarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 1V3M15 1V3M1 9H21M3 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H3C1.89543 21 1 20.1046 1 19V5C1 3.89543 1.89543 3 3 3Z" stroke="#007AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Clock icon component
function ClockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 5V11L15 13M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z" stroke="#007AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Close button with glass effect
function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="w-11 h-11 rounded-full flex items-center justify-center"
      style={{
        background: 'rgba(120, 120, 128, 0.12)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L16 16M1 16L16 1" stroke="#666666" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </motion.button>
  );
}

// iOS-style toggle switch
function IOSSwitch({ checked, onChange }: { checked: boolean; onChange: (checked: boolean) => void }) {
  return (
    <motion.button
      onClick={() => onChange(!checked)}
      className="relative w-[51px] h-[31px] rounded-full p-[2px]"
      style={{
        backgroundColor: checked ? '#34C759' : 'rgba(120, 120, 128, 0.16)',
      }}
      animate={{
        backgroundColor: checked ? '#34C759' : 'rgba(120, 120, 128, 0.16)',
      }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="w-[27px] h-[27px] bg-white rounded-full shadow-md"
        animate={{
          x: checked ? 20 : 0,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        style={{
          boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.15), 0px 3px 1px rgba(0, 0, 0, 0.06)',
        }}
      />
    </motion.button>
  );
}

export function SetReminderSheet({ isOpen, onClose, onSave }: SetReminderSheetProps) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('09:00 AM');
  const [hapticEnabled, setHapticEnabled] = useState(false);

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const handleSave = () => {
    onSave?.({
      date: selectedDate,
      time: selectedTime,
      hapticEnabled,
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200]"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
            onClick={onClose}
          />

          {/* Sheet */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-[201] bg-white rounded-t-[20px]"
            style={{
              maxHeight: '80vh',
              boxShadow: '0px -4px 20px rgba(0, 0, 0, 0.15)',
            }}
          >
            {/* Toolbar */}
            <div className="flex flex-col items-center pt-2 pb-4">
              {/* Grabber */}
              <div
                className="w-9 h-[5px] rounded-full mb-4"
                style={{ backgroundColor: '#CCCCCC' }}
              />

              {/* Title and Controls */}
              <div className="w-full flex items-center justify-between px-4">
                {/* Close button */}
                <CloseButton onClick={onClose} />

                {/* Title */}
                <span
                  style={{
                    fontFamily: 'SF Pro',
                    fontSize: '17px',
                    fontWeight: 590,
                    lineHeight: '22px',
                    letterSpacing: '-0.43px',
                    color: '#333333',
                  }}
                >
                  Set Reminder
                </span>

                {/* Save button (placeholder for symmetry) */}
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSave}
                  className="w-11 h-11 rounded-full flex items-center justify-center"
                  style={{
                    background: '#0088FF',
                  }}
                >
                  <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 6.5L6 11.5L16 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>
              </div>
            </div>

            {/* Content */}
            <div className="px-5 pb-8">
              {/* Date Row */}
              <div
                className="flex items-center justify-between py-4"
                style={{ borderTop: '1px solid #E6E6E6' }}
              >
                <div className="flex items-center gap-3">
                  <CalendarIcon />
                  <span
                    style={{
                      fontFamily: 'SF Pro',
                      fontSize: '17px',
                      fontWeight: 400,
                      lineHeight: '22px',
                      letterSpacing: '-0.43px',
                      color: '#000000',
                    }}
                  >
                    Date
                  </span>
                </div>

                {/* Date Picker */}
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-3 py-2 rounded-md"
                  style={{
                    backgroundColor: 'rgba(118, 118, 128, 0.12)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'SF Pro',
                      fontSize: '17px',
                      fontWeight: 400,
                      lineHeight: '22px',
                      letterSpacing: '-0.43px',
                      color: '#000000',
                    }}
                  >
                    {months[selectedDate.getMonth()]}
                  </span>
                  <span
                    style={{
                      fontFamily: 'SF Pro',
                      fontSize: '17px',
                      fontWeight: 400,
                      lineHeight: '22px',
                      letterSpacing: '-0.43px',
                      color: '#000000',
                    }}
                  >
                    {selectedDate.getDate()}
                  </span>
                  <span
                    style={{
                      fontFamily: 'SF Pro',
                      fontSize: '17px',
                      fontWeight: 400,
                      lineHeight: '22px',
                      letterSpacing: '-0.43px',
                      color: '#000000',
                    }}
                  >
                    {selectedDate.getFullYear()}
                  </span>
                </motion.button>
              </div>

              {/* Time Row */}
              <div
                className="flex items-center justify-between py-4"
                style={{ borderTop: '1px solid #E6E6E6' }}
              >
                <div className="flex items-center gap-3">
                  <ClockIcon />
                  <span
                    style={{
                      fontFamily: 'SF Pro',
                      fontSize: '17px',
                      fontWeight: 400,
                      lineHeight: '22px',
                      letterSpacing: '-0.43px',
                      color: '#000000',
                    }}
                  >
                    Time
                  </span>
                </div>

                {/* Time Picker */}
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-1 px-3 py-2 rounded-md"
                  style={{
                    backgroundColor: 'rgba(118, 118, 128, 0.12)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'SF Pro',
                      fontSize: '17px',
                      fontWeight: 400,
                      lineHeight: '22px',
                      letterSpacing: '-0.43px',
                      color: '#000000',
                    }}
                  >
                    {selectedTime}
                  </span>
                </motion.button>
              </div>

              {/* Haptic Toggle Row */}
              <div
                className="flex items-center justify-between py-4"
                style={{ borderTop: '1px solid #E6E6E6' }}
              >
                <span
                  style={{
                    fontFamily: 'SF Pro',
                    fontSize: '17px',
                    fontWeight: 400,
                    lineHeight: '22px',
                    letterSpacing: '-0.43px',
                    color: '#000000',
                  }}
                >
                  Gentle haptic on watch
                </span>

                <IOSSwitch
                  checked={hapticEnabled}
                  onChange={setHapticEnabled}
                />
              </div>

              {/* Bottom separator */}
              <div
                className="w-full h-px"
                style={{ backgroundColor: '#E6E6E6' }}
              />
            </div>

            {/* Home Indicator */}
            <div className="flex justify-center pb-2">
              <div className="w-[134px] h-[5px] bg-black rounded-full" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
