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
      <path d="M7 1V3M15 1V3M1 9H21M3 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H3C1.89543 21 1 20.1046 1 19V5C1 3.89543 1.89543 3 3 3Z" stroke="#0088FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Clock icon component
function ClockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 5V11L15 13M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z" stroke="#0088FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Calendar Picker Popup
function CalendarPicker({
  isOpen,
  selectedDate,
  onSelectDate,
  onClose,
}: {
  isOpen: boolean;
  selectedDate: Date;
  onSelectDate: (date: Date) => void;
  onClose: () => void;
}) {
  const [viewDate, setViewDate] = useState(selectedDate);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayHeaders = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return { firstDay, daysInMonth };
  };

  const { firstDay, daysInMonth } = getDaysInMonth(viewDate);

  const prevMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
  };

  const handleDayClick = (day: number) => {
    const newDate = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
    onSelectDate(newDate);
    onClose();
  };

  const isToday = (day: number) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      viewDate.getMonth() === today.getMonth() &&
      viewDate.getFullYear() === today.getFullYear()
    );
  };

  const isSelected = (day: number) => {
    return (
      day === selectedDate.getDate() &&
      viewDate.getMonth() === selectedDate.getMonth() &&
      viewDate.getFullYear() === selectedDate.getFullYear()
    );
  };

  // Generate weeks array
  const weeks: (number | null)[][] = [];
  let currentWeek: (number | null)[] = [];

  // Fill empty days at start
  for (let i = 0; i < firstDay; i++) {
    currentWeek.push(null);
  }

  // Fill days
  for (let day = 1; day <= daysInMonth; day++) {
    currentWeek.push(day);
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }

  // Fill remaining days in last week
  if (currentWeek.length > 0) {
    while (currentWeek.length < 7) {
      currentWeek.push(null);
    }
    weeks.push(currentWeek);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed left-1/2 -translate-x-1/2 z-[210] bg-white overflow-visible"
          style={{
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '358px',
            borderRadius: '26px',
            boxShadow: '0px 3px 30px 10px rgba(0, 0, 0, 0.2)',
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 pt-4 pb-2">
            <div className="flex items-center gap-1">
              <span
                style={{
                  fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif',
                  fontSize: '17px',
                  fontWeight: 600,
                  lineHeight: '22px',
                  letterSpacing: '-0.43px',
                  color: '#000000',
                }}
              >
                {monthNames[viewDate.getMonth()]} {viewDate.getFullYear()}
              </span>
              <span
                style={{
                  fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif',
                  fontSize: '15px',
                  fontWeight: 700,
                  color: '#0088FF',
                }}
              >
                􀆊
              </span>
            </div>
            <div className="flex items-center gap-7">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={prevMonth}
                style={{
                  fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif',
                  fontSize: '20px',
                  fontWeight: 500,
                  color: '#0088FF',
                }}
              >
                􀆉
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={nextMonth}
                style={{
                  fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif',
                  fontSize: '20px',
                  fontWeight: 500,
                  color: '#0088FF',
                }}
              >
                􀆊
              </motion.button>
            </div>
          </div>

          {/* Day Headers */}
          <div className="flex justify-between px-4 py-1">
            {dayHeaders.map((day) => (
              <div
                key={day}
                className="w-11 text-center"
                style={{
                  fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif',
                  fontSize: '13px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  color: 'rgba(60, 60, 67, 0.3)',
                }}
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="flex flex-col gap-[7px] px-4 pt-1 pb-3">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex justify-between">
                {week.map((day, dayIndex) => (
                  <motion.button
                    key={dayIndex}
                    whileTap={day ? { scale: 0.9 } : undefined}
                    onClick={() => day && handleDayClick(day)}
                    className="w-11 h-11 flex items-center justify-center relative"
                    disabled={!day}
                  >
                    {day && (
                      <>
                        {isSelected(day) && (
                          <div
                            className="absolute inset-0 rounded-full"
                            style={{
                              border: '2px solid #0088FF',
                            }}
                          />
                        )}
                        <span
                          style={{
                            fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif',
                            fontSize: isSelected(day) ? '24px' : '20px',
                            fontWeight: isSelected(day) ? 500 : 400,
                            lineHeight: '25px',
                            letterSpacing: '-0.45px',
                            color: isToday(day) && day === 1 ? '#0088FF' : '#000000',
                          }}
                        >
                          {day}
                        </span>
                      </>
                    )}
                  </motion.button>
                ))}
              </div>
            ))}
          </div>

          {/* Bottom Separator */}
          <div
            className="mx-4 mb-3"
            style={{
              height: '0.5px',
              backgroundColor: 'rgba(0, 0, 0, 0.12)',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Close button with glass effect
function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="w-9 h-9 rounded-full flex items-center justify-center"
      style={{
        background: 'rgba(120, 120, 128, 0.12)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L11 11M1 11L11 1" stroke="#404040" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </motion.button>
  );
}

// iOS-style toggle switch
function IOSSwitch({ checked, onChange }: { checked: boolean; onChange: (checked: boolean) => void }) {
  return (
    <motion.button
      onClick={() => onChange(!checked)}
      className="relative flex-shrink-0 flex items-center justify-between"
      style={{
        width: '64px',
        height: '28px',
        borderRadius: '100px',
        padding: '2px',
        backgroundColor: checked ? '#34C759' : 'rgba(120, 120, 128, 0.16)',
      }}
      animate={{
        backgroundColor: checked ? '#34C759' : 'rgba(120, 120, 128, 0.16)',
      }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex-1 flex items-center justify-center" />
      <motion.div
        className="bg-white rounded-full"
        style={{
          width: '24px',
          height: '24px',
          boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.15), 0px 3px 1px rgba(0, 0, 0, 0.06)',
        }}
        animate={{
          x: checked ? 0 : -34,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
    </motion.button>
  );
}

export function SetReminderSheet({ isOpen, onClose, onSave }: SetReminderSheetProps) {
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 3, 20)); // April 20, 2025 as per design
  const [selectedTime, setSelectedTime] = useState('00:00 AM');
  const [hapticEnabled, setHapticEnabled] = useState(true); // ON by default as per design
  const [showCalendar, setShowCalendar] = useState(true); // Show calendar by default to match design

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const handleSave = () => {
    onSave?.({
      date: selectedDate,
      time: selectedTime,
      hapticEnabled,
    });
    onClose();
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setShowCalendar(false);
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
            style={{ backgroundColor: 'rgba(41, 41, 58, 0.23)' }}
            onClick={() => {
              if (showCalendar) {
                setShowCalendar(false);
              } else {
                onClose();
              }
            }}
          />

          {/* Sheet */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed bottom-0 left-1/2 -translate-x-1/2 z-[201] bg-white w-[390px]"
            style={{
              borderTopLeftRadius: '38px',
              borderTopRightRadius: '38px',
              boxShadow: '0px 15px 75px 0px rgba(0, 0, 0, 0.18)',
            }}
          >
            {/* Toolbar */}
            <div className="flex flex-col items-center pb-[10px]">
              {/* Grabber */}
              <div className="pt-[5px] pb-0">
                <div
                  className="w-9 h-[5px] rounded-full"
                  style={{ backgroundColor: '#CCCCCC' }}
                />
              </div>

              {/* Title and Controls */}
              <div className="w-full flex items-center justify-between px-4 h-11">
                {/* Close button */}
                <div className="w-11 h-11 flex items-center justify-center">
                  <CloseButton onClick={onClose} />
                </div>

                {/* Title */}
                <span
                  style={{
                    fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif',
                    fontSize: '17px',
                    fontWeight: 600,
                    lineHeight: '22px',
                    letterSpacing: '-0.43px',
                    color: '#333333',
                  }}
                >
                  Set Reminder
                </span>

                {/* Save button */}
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSave}
                  className="w-11 h-11 rounded-full flex items-center justify-center"
                  style={{
                    background: '#0088FF',
                  }}
                >
                  <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 7L6.5 12L16.5 2" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>
              </div>
            </div>

            {/* Content */}
            <div className="px-5 pb-4 relative">
              {/* Date Row */}
              <div
                className="flex items-center gap-2 py-3"
                style={{ borderTop: '1px solid #E6E6E6' }}
              >
                <CalendarIcon />
                <div className="flex items-center justify-between flex-1">
                  <span
                    style={{
                      fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif',
                      fontSize: '17px',
                      fontWeight: 400,
                      lineHeight: '22px',
                      letterSpacing: '-0.43px',
                      color: '#000000',
                      width: '166px',
                    }}
                  >
                    Date
                  </span>

                  {/* Date Picker Button */}
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setShowCalendar(!showCalendar)}
                    className="flex items-center gap-[5px] px-[11px] py-[6px] rounded-md h-[34px]"
                    style={{
                      backgroundColor: 'rgba(118, 118, 128, 0.12)',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif',
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
                        fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif',
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
                        fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif',
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
              </div>

              {/* Time Row */}
              <div
                className="flex items-center gap-2 py-3"
                style={{ borderTop: '1px solid #E6E6E6' }}
              >
                <ClockIcon />
                <div className="flex items-center justify-between flex-1">
                  <span
                    style={{
                      fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif',
                      fontSize: '17px',
                      fontWeight: 400,
                      lineHeight: '22px',
                      letterSpacing: '-0.43px',
                      color: '#000000',
                    }}
                  >
                    Time
                  </span>

                  {/* Time Picker */}
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center px-[11px] py-[6px] rounded-md h-[34px]"
                    style={{
                      backgroundColor: 'rgba(118, 118, 128, 0.12)',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif',
                        fontSize: '17px',
                        fontWeight: 400,
                        lineHeight: '22px',
                        letterSpacing: '-0.43px',
                        color: '#000000',
                      }}
                    >
                      {selectedTime.replace('AM', 'AM/PM')}
                    </span>
                  </motion.button>
                </div>
              </div>

              {/* Haptic Toggle Row */}
              <div
                className="flex items-center justify-between py-4"
                style={{ borderTop: '1px solid #E6E6E6' }}
              >
                <span
                  style={{
                    fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif',
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

              {/* Extra whitespace at bottom */}
              <div style={{ height: '200px', minHeight: '200px', backgroundColor: 'white' }} />
            </div>

            {/* Home Indicator */}
            <div className="flex justify-center pb-2 bg-white">
              <div className="w-[134px] h-[5px] bg-black rounded-full" />
            </div>
          </motion.div>

          {/* Calendar Picker Popup - rendered outside the sheet for proper z-index */}
          <CalendarPicker
            isOpen={showCalendar}
            selectedDate={selectedDate}
            onSelectDate={handleDateSelect}
            onClose={() => setShowCalendar(false)}
          />
        </>
      )}
    </AnimatePresence>
  );
}
