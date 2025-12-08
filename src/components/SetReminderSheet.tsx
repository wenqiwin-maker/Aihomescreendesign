import React, { useState, useRef, useEffect, useCallback, RefObject } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface SetReminderSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onSave?: (reminder: ReminderData) => void;
}

interface ReminderData {
  date: Date;
  time: string;
  hapticEnabled: boolean;
  earlyReminder: string;
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

// Bell icon component
function BellIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="#0088FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="#0088FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Early Reminder Dropdown
function EarlyReminderDropdown({
  isOpen,
  selectedOption,
  onSelectOption,
  onClose,
}: {
  isOpen: boolean;
  selectedOption: string;
  onSelectOption: (option: string) => void;
  onClose: () => void;
}) {
  const options = [
    'None',
    '30 minutes before',
    '1 day before',
    '2 days before',
    '1 week before',
    '2 weeks before',
    '1 month before',
    '2 months before',
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Invisible backdrop to close dropdown when clicking outside */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[209]"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed z-[210] bg-white overflow-hidden"
            style={{
              bottom: '20px',
              left: '55%',
              marginLeft: '-115px',
              width: '230px',
              borderRadius: '14px',
              boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.15)',
              maxHeight: '300px',
              overflowY: 'auto',
            }}
          >
            <div className="py-2">
              {options.map((option, index) => (
                <React.Fragment key={option}>
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      onSelectOption(option);
                      onClose();
                    }}
                    className="w-full flex items-center px-4 py-3"
                    style={{
                      backgroundColor: 'white',
                      gap: '8px',
                    }}
                  >
                    {selectedOption === option ? (
                      <span
                        style={{
                          fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif',
                          fontSize: '17px',
                          fontWeight: 600,
                          color: '#000000',
                          width: '20px',
                        }}
                      >
                        ✓
                      </span>
                    ) : (
                      <span style={{ width: '20px' }} />
                    )}
                    <span
                      style={{
                        fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif',
                        fontSize: '17px',
                        fontWeight: 400,
                        lineHeight: '22px',
                        letterSpacing: '-0.43px',
                        color: '#000000',
                        textAlign: 'left',
                        flex: 1,
                      }}
                    >
                      {option}
                    </span>
                  </motion.button>
                  {index === 0 && (
                    <div
                      style={{
                        height: '1px',
                        backgroundColor: '#E6E6E6',
                        margin: '0 8px',
                      }}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
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
  const [showMonthYearPicker, setShowMonthYearPicker] = useState(false);
  
  // Refs for cylinder scroll
  const monthRef = useRef<HTMLDivElement>(null);
  const yearRef = useRef<HTMLDivElement>(null);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayHeaders = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  // Generate year range (10 years before and after current year)
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 21 }, (_, i) => currentYear - 10 + i);

  // Cylinder wheel settings
  const itemHeight = 44;

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

  // Scroll to current month/year when picker opens
  useEffect(() => {
    if (showMonthYearPicker) {
      const monthIndex = viewDate.getMonth();
      const yearIndex = years.indexOf(viewDate.getFullYear());
      
      if (monthRef.current) {
        monthRef.current.scrollTop = monthIndex * itemHeight;
      }
      if (yearRef.current && yearIndex !== -1) {
        yearRef.current.scrollTop = yearIndex * itemHeight;
      }
    }
  }, [showMonthYearPicker]);

  const handleMonthScroll = useCallback(() => {
    if (!monthRef.current) return;
    const scrollTop = monthRef.current.scrollTop;
    const index = Math.round(scrollTop / itemHeight);
    const clampedIndex = Math.max(0, Math.min(monthNames.length - 1, index));
    setViewDate(new Date(viewDate.getFullYear(), clampedIndex, 1));
  }, [viewDate, itemHeight]);

  const handleYearScroll = useCallback(() => {
    if (!yearRef.current) return;
    const scrollTop = yearRef.current.scrollTop;
    const index = Math.round(scrollTop / itemHeight);
    const clampedIndex = Math.max(0, Math.min(years.length - 1, index));
    setViewDate(new Date(years[clampedIndex], viewDate.getMonth(), 1));
  }, [viewDate, years, itemHeight]);

  const scrollToItem = (ref: RefObject<HTMLDivElement | null>, index: number) => {
    if (ref.current) {
      ref.current.scrollTo({
        top: index * itemHeight,
        behavior: 'smooth'
      });
    }
  };

  const handleMonthYearDone = () => {
    setShowMonthYearPicker(false);
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

  // Fixed wheel height to match date picker (288px)
  const wheelContainerHeight = 288;
  const wheelPadding = (wheelContainerHeight - itemHeight) / 2; // Center the selection

  // Render a cylinder wheel column
  const renderWheelColumn = (
    ref: RefObject<HTMLDivElement | null>,
    items: (number | string)[],
    currentValue: number | string,
    onScroll: () => void,
    onItemClick: (index: number) => void,
    formatValue: (value: number | string) => string
  ) => {
    return (
      <div
        className="flex-1 relative overflow-hidden"
        style={{ 
          height: `${wheelContainerHeight}px`,
        }}
      >
        {/* Scrollable container */}
        <div
          ref={ref}
          className="absolute inset-0 overflow-y-auto no-scrollbar"
          style={{ 
            scrollSnapType: 'y mandatory',
            paddingTop: `${wheelPadding}px`,
            paddingBottom: `${wheelPadding}px`,
          }}
          onScroll={onScroll}
        >
          {items.map((item, index) => {
            const isItemSelected = item === currentValue;
            return (
              <div
                key={`item-${item}`}
                className="flex items-center justify-center cursor-pointer"
                style={{
                  height: `${itemHeight}px`,
                  scrollSnapAlign: 'center',
                }}
                onClick={() => onItemClick(index)}
              >
                <span
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", sans-serif',
                    fontSize: isItemSelected ? '23px' : '20px',
                    fontWeight: isItemSelected ? 400 : 300,
                    color: isItemSelected ? '#000000' : 'rgba(0, 0, 0, 0.25)',
                    transition: 'all 0.1s ease-out',
                    letterSpacing: '-0.5px',
                  }}
                >
                  {formatValue(item)}
                </span>
              </div>
            );
          })}
        </div>

        {/* Top fade gradient for cylinder effect */}
        <div
          className="absolute top-0 left-0 right-0 pointer-events-none"
          style={{
            height: `${wheelPadding}px`,
            background: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.95) 30%, rgba(255,255,255,0.7) 60%, rgba(255,255,255,0) 100%)',
            zIndex: 10,
          }}
        />

        {/* Bottom fade gradient for cylinder effect */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: `${wheelPadding}px`,
            background: 'linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.95) 30%, rgba(255,255,255,0.7) 60%, rgba(255,255,255,0) 100%)',
            zIndex: 10,
          }}
        />
      </div>
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
        <>
          {/* Backdrop overlay to close on outside click */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[205]"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed left-1/2 -translate-x-1/2 z-[210] bg-white overflow-hidden"
            style={{
              bottom: '50px',
              width: '358px',
              borderRadius: '26px',
              boxShadow: '0px 3px 30px 10px rgba(0, 0, 0, 0.2)',
            }}
          >
            {/* Top separator */}
            <div
              style={{
                height: '1px',
                backgroundColor: '#E6E6E6',
              }}
            />

            {/* Header Section */}
            <div className="pt-[6px] pb-0">
              {/* Month/Year and Navigation */}
              <div className="flex items-center justify-between px-4 h-10 relative">
                {/* Month and Year with dropdown arrow - clickable */}
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setShowMonthYearPicker(!showMonthYearPicker)}
                  className="flex items-center gap-1"
                >
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
                  <motion.span
                    animate={{ rotate: showMonthYearPicker ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif',
                      fontSize: '15px',
                      fontWeight: 700,
                      lineHeight: '18px',
                      letterSpacing: '-0.5px',
                      color: '#0088FF',
                    }}
                  >
                    􀆈
                  </motion.span>
                </motion.button>

                {/* Navigation Arrows on the right - only show when not in month/year picker mode */}
                {!showMonthYearPicker && (
                  <div className="flex items-center gap-7">
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={prevMonth}
                      className="w-[15px] h-6 flex items-center justify-center"
                      style={{
                        fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif',
                        fontSize: '20px',
                        fontWeight: 510,
                        color: '#0088FF',
                      }}
                    >
                      􀆉
                    </motion.button>
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={nextMonth}
                      className="w-[15px] h-6 flex items-center justify-center"
                      style={{
                        fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif',
                        fontSize: '20px',
                        fontWeight: 510,
                        color: '#0088FF',
                      }}
                    >
                      􀆊
                    </motion.button>
                  </div>
                )}
              </div>

              {/* Conditional content: Month/Year Picker OR Calendar Grid */}
              {showMonthYearPicker ? (
                /* Month/Year Picker - iOS cylinder wheel style */
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  style={{ minHeight: '299px' }}
                >
                  {/* Cylinder wheel picker - matches date picker height */}
                  <div 
                    className="flex items-center justify-center relative px-4"
                    style={{ height: '288px' }}
                  >
                    {/* Selection indicator - iOS-style highlighted row */}
                    <div
                      className="absolute left-4 right-4 pointer-events-none rounded-lg"
                      style={{
                        top: '50%',
                        transform: 'translateY(-50%)',
                        height: `${itemHeight}px`,
                        backgroundColor: 'rgba(120, 120, 128, 0.12)',
                        zIndex: 5,
                      }}
                    />

                    {/* Month Column */}
                    {renderWheelColumn(
                      monthRef,
                      monthNames,
                      monthNames[viewDate.getMonth()],
                      handleMonthScroll,
                      (index) => {
                        setViewDate(new Date(viewDate.getFullYear(), index, 1));
                        scrollToItem(monthRef, index);
                      },
                      (value) => String(value)
                    )}

                    {/* Year Column */}
                    {renderWheelColumn(
                      yearRef,
                      years,
                      viewDate.getFullYear(),
                      handleYearScroll,
                      (index) => {
                        setViewDate(new Date(years[index], viewDate.getMonth(), 1));
                        scrollToItem(yearRef, index);
                      },
                      (value) => String(value)
                    )}
                  </div>

                  {/* Bottom Separator */}
                  <div className="flex flex-col h-[11px] items-start px-4">
                    <div
                      style={{
                        height: '11px',
                        width: '100%',
                        borderBottom: '0.5px solid rgba(0, 0, 0, 0.12)',
                      }}
                    />
                  </div>
                </motion.div>
              ) : (
                /* Calendar Grid - shows when month/year picker is closed */
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  style={{ minHeight: '299px' }}
                >
                  {/* Day Headers */}
                  <div className="flex items-center justify-between px-4 h-5">
                    {dayHeaders.map((day) => (
                      <div
                        key={day}
                        className="w-8 h-[18px] flex items-center justify-center"
                        style={{
                          fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif',
                          fontSize: '13px',
                          fontWeight: 600,
                          lineHeight: '18px',
                          textTransform: 'uppercase',
                          color: 'rgba(60, 60, 67, 0.3)',
                        }}
                      >
                        {day}
                      </div>
                    ))}
                  </div>

                  {/* Calendar Grid */}
                  <div className="flex flex-col gap-[7px] px-4 pt-[3px] pb-0">
                    {weeks.map((week, weekIndex) => (
                      <div key={weekIndex} className="flex items-start justify-between h-11">
                        {week.map((day, dayIndex) => {
                          const selected = day && isSelected(day);
                          const today = day && isToday(day);
                          
                          return (
                            <motion.button
                              key={dayIndex}
                              whileTap={day ? { scale: 0.9 } : undefined}
                              onClick={() => day && handleDayClick(day)}
                              className="w-11 h-11 flex items-center justify-center relative"
                              disabled={!day}
                            >
                              {day && (
                                <>
                                  {selected && (
                                    <div
                                      className="absolute w-11 h-11 rounded-full"
                                      style={{
                                        backgroundColor: 'rgba(0, 136, 255, 0.12)',
                                      }}
                                    />
                                  )}
                                  <span
                                    style={{
                                      fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif',
                                      fontSize: selected ? '24px' : '20px',
                                      fontWeight: selected ? 510 : 400,
                                      lineHeight: '25px',
                                      letterSpacing: '-0.45px',
                                      color: selected ? '#08F' : (today ? '#0088FF' : '#000000'),
                                      position: 'relative',
                                      zIndex: 1,
                                    }}
                                  >
                                    {day}
                                  </span>
                                </>
                              )}
                            </motion.button>
                          );
                        })}
                      </div>
                    ))}

                    {/* Bottom Separator within calendar */}
                    <div className="flex flex-col h-[11px] items-start">
                      <div
                        style={{
                          height: '11px',
                          width: '100%',
                          borderBottom: '0.5px solid rgba(0, 0, 0, 0.12)',
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Time Picker with iOS-style wheel picker (cylinder effect)
function TimePickerWheel({
  isOpen,
  selectedHour,
  selectedMinute,
  selectedPeriod,
  onSelectTime,
  onClose,
}: {
  isOpen: boolean;
  selectedHour: number;
  selectedMinute: number;
  selectedPeriod: 'AM' | 'PM';
  onSelectTime: (hour: number, minute: number, period: 'AM' | 'PM') => void;
  onClose: () => void;
}) {
  const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const minutes = Array.from({ length: 12 }, (_, i) => i * 5); // 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55
  const periods: ('AM' | 'PM')[] = ['AM', 'PM'];

  const [currentHour, setCurrentHour] = useState(selectedHour);
  const [currentMinute, setCurrentMinute] = useState(selectedMinute);
  const [currentPeriod, setCurrentPeriod] = useState(selectedPeriod);

  const hourRef = useRef<HTMLDivElement>(null);
  const minuteRef = useRef<HTMLDivElement>(null);
  const periodRef = useRef<HTMLDivElement>(null);

  const itemHeight = 40;
  const visibleItems = 5;
  const containerHeight = itemHeight * visibleItems;
  const wheelRadius = containerHeight / 2;

  // Scroll to selected item on mount
  useEffect(() => {
    if (isOpen) {
      const hourIndex = hours.indexOf(currentHour);
      const minuteIndex = minutes.indexOf(currentMinute);
      const periodIndex = periods.indexOf(currentPeriod);

      if (hourRef.current && hourIndex !== -1) {
        hourRef.current.scrollTop = hourIndex * itemHeight;
      }
      if (minuteRef.current && minuteIndex !== -1) {
        minuteRef.current.scrollTop = minuteIndex * itemHeight;
      }
      if (periodRef.current && periodIndex !== -1) {
        periodRef.current.scrollTop = periodIndex * itemHeight;
      }
    }
  }, [isOpen]);

  const handleScroll = useCallback((
    ref: RefObject<HTMLDivElement | null>,
    items: (number | string)[],
    setter: (value: number | 'AM' | 'PM') => void
  ) => {
    if (!ref.current) return;
    const scrollTop = ref.current.scrollTop;
    const index = Math.round(scrollTop / itemHeight);
    const clampedIndex = Math.max(0, Math.min(items.length - 1, index));
    setter(items[clampedIndex] as number | 'AM' | 'PM');
  }, [itemHeight]);

  const handleHourScroll = () => handleScroll(hourRef, hours, (v: number | 'AM' | 'PM') => setCurrentHour(v as number));
  const handleMinuteScroll = () => handleScroll(minuteRef, minutes, (v: number | 'AM' | 'PM') => setCurrentMinute(v as number));
  const handlePeriodScroll = () => handleScroll(periodRef, periods, (v: number | 'AM' | 'PM') => setCurrentPeriod(v as 'AM' | 'PM'));

  // Update parent when values change
  useEffect(() => {
    onSelectTime(currentHour, currentMinute, currentPeriod);
  }, [currentHour, currentMinute, currentPeriod]);

  const scrollToItem = (ref: RefObject<HTMLDivElement | null>, index: number) => {
    if (ref.current) {
      ref.current.scrollTo({
        top: index * itemHeight,
        behavior: 'smooth'
      });
    }
  };

  // Render a single wheel column with cylinder effect
  const renderWheelColumn = (
    ref: RefObject<HTMLDivElement | null>,
    items: (number | string)[],
    currentValue: number | string,
    onScroll: () => void,
    onItemClick: (value: number | string, index: number) => void,
    formatValue: (value: number | string) => string
  ) => {
    return (
      <div
        className="flex-1 relative overflow-hidden"
        style={{ 
          height: `${containerHeight}px`,
          perspective: '1000px',
          perspectiveOrigin: 'center center',
        }}
      >
        {/* Scrollable container */}
        <div
          ref={ref}
          className="absolute inset-0 overflow-y-auto no-scrollbar"
          style={{ 
            scrollSnapType: 'y mandatory',
            paddingTop: `${itemHeight * 2}px`,
            paddingBottom: `${itemHeight * 2}px`,
          }}
          onScroll={onScroll}
        >
          {items.map((item, index) => {
            const isSelected = item === currentValue;
            return (
              <div
                key={`item-${item}`}
                className="flex items-center justify-center cursor-pointer"
                style={{
                  height: `${itemHeight}px`,
                  scrollSnapAlign: 'center',
                  transformStyle: 'preserve-3d',
                }}
                onClick={() => onItemClick(item, index)}
              >
                <span
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", sans-serif',
                    fontSize: isSelected ? '23px' : '20px',
                    fontWeight: isSelected ? 400 : 300,
                    color: isSelected ? '#000000' : 'rgba(0, 0, 0, 0.25)',
                    transition: 'all 0.1s ease-out',
                    letterSpacing: '-0.5px',
                  }}
                >
                  {formatValue(item)}
                </span>
              </div>
            );
          })}
        </div>

        {/* Top fade gradient for cylinder effect */}
        <div
          className="absolute top-0 left-0 right-0 pointer-events-none"
          style={{
            height: `${itemHeight * 2}px`,
            background: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.95) 30%, rgba(255,255,255,0.7) 60%, rgba(255,255,255,0) 100%)',
            zIndex: 10,
          }}
        />

        {/* Bottom fade gradient for cylinder effect */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: `${itemHeight * 2}px`,
            background: 'linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.95) 30%, rgba(255,255,255,0.7) 60%, rgba(255,255,255,0) 100%)',
            zIndex: 10,
          }}
        />
      </div>
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Invisible backdrop to close picker when clicking outside */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[209]"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed z-[210] bg-white overflow-hidden"
            style={{
              bottom: '120px',
              left: '50%',
              marginLeft: '-150px',
              width: '300px',
              borderRadius: '14px',
              boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.15)',
            }}
          >
          <div 
            className="flex items-center justify-center relative"
            style={{ height: `${containerHeight}px` }}
          >
            {/* Selection indicator - the highlighted row with iOS-style background */}
            <div
              className="absolute left-3 right-3 pointer-events-none rounded-lg"
              style={{
                top: '50%',
                transform: 'translateY(-50%)',
                height: `${itemHeight}px`,
                backgroundColor: 'rgba(120, 120, 128, 0.12)',
                zIndex: 5,
              }}
            />

            {/* Hour Column */}
            {renderWheelColumn(
              hourRef,
              hours,
              currentHour,
              handleHourScroll,
              (value, index) => {
                setCurrentHour(value as number);
                scrollToItem(hourRef, index);
              },
              (value) => String(value)
            )}

            {/* Minute Column */}
            {renderWheelColumn(
              minuteRef,
              minutes,
              currentMinute,
              handleMinuteScroll,
              (value, index) => {
                setCurrentMinute(value as number);
                scrollToItem(minuteRef, index);
              },
              (value) => String(value).padStart(2, '0')
            )}

            {/* AM/PM Column */}
            {renderWheelColumn(
              periodRef,
              periods,
              currentPeriod,
              handlePeriodScroll,
              (value, index) => {
                setCurrentPeriod(value as 'AM' | 'PM');
                scrollToItem(periodRef, index);
              },
              (value) => String(value)
            )}
          </div>
        </motion.div>
        </>
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
  const [selectedHour, setSelectedHour] = useState(12);
  const [selectedMinute, setSelectedMinute] = useState(0);
  const [selectedPeriod, setSelectedPeriod] = useState<'AM' | 'PM'>('PM');
  const [hapticEnabled, setHapticEnabled] = useState(true); // ON by default as per design
  const [earlyReminder, setEarlyReminder] = useState('30 minutes before'); // Default as per design
  const [showCalendar, setShowCalendar] = useState(false); // Don't auto-open calendar
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [showEarlyReminderDropdown, setShowEarlyReminderDropdown] = useState(false);

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // Format time for display
  const formatTime = () => {
    const minuteStr = selectedMinute.toString().padStart(2, '0');
    return `${selectedHour}:${minuteStr} ${selectedPeriod}`;
  };

  const handleTimeSelect = (hour: number, minute: number, period: 'AM' | 'PM') => {
    setSelectedHour(hour);
    setSelectedMinute(minute);
    setSelectedPeriod(period);
  };

  const handleSave = () => {
    onSave?.({
      date: selectedDate,
      time: formatTime(),
      hapticEnabled,
      earlyReminder,
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
              } else if (showTimePicker) {
                setShowTimePicker(false);
              } else if (showEarlyReminderDropdown) {
                setShowEarlyReminderDropdown(false);
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
                    className="flex items-center gap-[5px] py-[6px] rounded-md h-[34px]"
                    style={{
                      backgroundColor: 'rgba(118, 118, 128, 0.12)',
                      paddingLeft: '8px',
                      paddingRight: '8px',
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
                        marginRight: '4px',
                      }}
                    >
                      {months[selectedDate.getMonth()].slice(0,3)}
                    </span>
                    <span
                      style={{
                        fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif',
                        fontSize: '17px',
                        fontWeight: 400,
                        lineHeight: '22px',
                        letterSpacing: '-0.43px',
                        color: '#000000',
                        marginRight: '4px',
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

                  {/* Time Picker Button */}
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setShowTimePicker(!showTimePicker)}
                    className="flex items-center py-[6px] rounded-md h-[34px]"
                    style={{
                      backgroundColor: 'rgba(118, 118, 128, 0.12)',
                      paddingLeft: '8px',
                      paddingRight: '8px',
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
                      {formatTime()}
                    </span>
                  </motion.button>
                </div>
              </div>

              {/* Early Reminder Row */}
              <div
                className="flex items-center gap-2 py-4"
                style={{ borderTop: '1px solid #E6E6E6' }}
              >
                <BellIcon />
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
                    Early Reminder
                  </span>

                  {/* Early Reminder Dropdown Button */}
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setShowEarlyReminderDropdown(!showEarlyReminderDropdown)}
                    className="flex items-center gap-1"
                  >
                    <span
                      style={{
                        fontFamily: 'SF Pro, Noto Sans, -apple-system, BlinkMacSystemFont, sans-serif',
                        fontSize: '17px',
                        fontWeight: 400,
                        lineHeight: '22px',
                        letterSpacing: '-0.43px',
                        color: 'rgba(0, 0, 0, 0.5)',
                      }}
                    >
                      {earlyReminder === 'None' ? 'None' : earlyReminder.replace(' before', '')} ∨
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

          {/* Time Picker Popup */}
          <TimePickerWheel
            isOpen={showTimePicker}
            selectedHour={selectedHour}
            selectedMinute={selectedMinute}
            selectedPeriod={selectedPeriod}
            onSelectTime={handleTimeSelect}
            onClose={() => setShowTimePicker(false)}
          />

          {/* Early Reminder Dropdown */}
          <EarlyReminderDropdown
            isOpen={showEarlyReminderDropdown}
            selectedOption={earlyReminder}
            onSelectOption={setEarlyReminder}
            onClose={() => setShowEarlyReminderDropdown(false)}
          />
        </>
      )}
    </AnimatePresence>
  );
}
