import { X, ChevronLeft, Calendar as CalendarIcon } from 'lucide-react';
import { StatusBar } from './StatusBar';
import { useState, useEffect } from 'react';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { format } from 'date-fns';

interface Setup2FormData {
  goal: string;
  selectedPerson: string | null;
  date: Date | undefined;
}

interface QuickSetup2Props {
  onClose: () => void;
  onBack: () => void;
  onNext: () => void;
  onAdvancedSetup: () => void;
  initialData?: Setup2FormData;
  onDataChange?: (data: Setup2FormData) => void;
}

export function QuickSetup2({ onClose, onBack, onNext, onAdvancedSetup, initialData, onDataChange }: QuickSetup2Props) {
  const [goal, setGoal] = useState(initialData?.goal || '');
  const [selectedPerson, setSelectedPerson] = useState<string | null>(initialData?.selectedPerson || null);
  const [date, setDate] = useState<Date | undefined>(initialData?.date);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const isFormValid = goal.trim() !== '' && selectedPerson !== null;

  // Update parent component when form data changes
  useEffect(() => {
    if (onDataChange) {
      onDataChange({ goal, selectedPerson, date });
    }
  }, [goal, selectedPerson, date, onDataChange]);

  return (
    <div className="relative w-[390px] h-[844px] bg-white">
      {/* Status Bar */}
      <div className="flex justify-center items-center px-4 pt-[21px] pb-[19px] gap-[154px] h-[62px]">
        <div className="flex-1 flex justify-center items-center">
          <span 
            className="text-black text-center"
            style={{ 
              fontFamily: 'SF Pro', 
              fontSize: '17px', 
              fontWeight: 590, 
              lineHeight: '22px' 
            }}
          >
            9:41
          </span>
        </div>
        <StatusBar />
      </div>

      {/* Toolbar */}
      <div className="flex justify-between items-center px-4 pb-[10px] h-[54px]">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="w-11 h-11 rounded-full flex items-center justify-center"
          style={{
            background: 'linear-gradient(0deg, #F7F7F7, #F7F7F7), linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), #333333'
          }}
        >
          <ChevronLeft className="w-5 h-5 text-[#404040]" strokeWidth={2} />
        </button>
        
        {/* Title */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <h1 
            className="text-[#333333] text-center"
            style={{ 
              fontFamily: 'SF Pro', 
              fontSize: '17px', 
              fontWeight: 590, 
              lineHeight: '22px',
              letterSpacing: '-0.43px'
            }}
          >
            Setup
          </h1>
        </div>
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="w-11 h-11 rounded-full flex items-center justify-center"
          style={{
            background: 'linear-gradient(0deg, #F7F7F7, #F7F7F7), linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), #333333'
          }}
        >
          <X className="w-5 h-5 text-[#404040]" strokeWidth={2} />
        </button>
      </div>

      {/* Progress Indicator */}
      <div className="flex items-start px-5 gap-1 h-[3px]">
        <div className="w-[114px] h-[3px] bg-[#3E5FFF] rounded-sm" />
        <div className="w-[114px] h-[3px] bg-[#3E5FFF] rounded-sm" />
        <div className="w-[114px] h-[3px] bg-[#E9EBF3] rounded-sm" />
      </div>

      {/* Content */}
      <div className="flex flex-col pt-8 px-5 gap-8">
        {/* Title */}
        <h2 
          className="text-[#0A0A0A]"
          style={{ 
            fontFamily: 'SF Pro', 
            fontSize: '24px', 
            fontWeight: 590, 
            lineHeight: '24px',
            letterSpacing: '-0.150391px'
          }}
        >
          Set your real situation Tell AI about your real communication situation
        </h2>

        {/* Form Fields */}
        <div className="flex flex-col gap-8">
          {/* What do you want to achieve? */}
          <div className="flex flex-col gap-3">
            <label 
              className="text-black/90"
              style={{ 
                fontFamily: 'SF Pro', 
                fontSize: '14px', 
                fontWeight: 510, 
                lineHeight: '14px',
                letterSpacing: '-0.150391px'
              }}
            >
              What do you want to achieve?
            </label>
            <input
              type="text"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="e.g., Ask for a raise, Set boundaries..."
              className="w-full h-12 px-3 border border-[#E9EBF3] rounded-[26px] outline-none"
              style={{ 
                fontFamily: 'SF Pro', 
                fontSize: '14px', 
                fontWeight: 400, 
                lineHeight: '17px',
                letterSpacing: '-0.150391px',
                color: goal ? '#0A0A0A' : '#717182'
              }}
            />
          </div>

          {/* Who are you talking to? */}
          <div className="flex flex-col gap-3">
            <label 
              className="text-black/90"
              style={{ 
                fontFamily: 'SF Pro', 
                fontSize: '14px', 
                fontWeight: 510, 
                lineHeight: '14px',
                letterSpacing: '-0.150391px'
              }}
            >
              Who are you talking to?
            </label>
            <div className="flex flex-wrap gap-2.5">
              {['Manager', 'Peer', 'Direct Report', 'Client'].map((person) => (
                <button
                  key={person}
                  onClick={() => setSelectedPerson(person)}
                  className="flex justify-center items-center px-3.5 py-3.5 h-[47px] rounded-3xl border transition-all"
                  style={{
                    borderColor: selectedPerson === person ? '#3E5FFF' : '#E9EBF3',
                    backgroundColor: '#FFFFFF',
                    width: '170px'
                  }}
                >
                  <span
                    style={{ 
                      fontFamily: 'SF Pro', 
                      fontSize: '14px', 
                      fontWeight: 400, 
                      lineHeight: '19px',
                      letterSpacing: '-0.3125px',
                      color: '#0A0A0A'
                    }}
                  >
                    {person}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Date (Optional) */}
          <div className="flex flex-col gap-3">
            <label 
              className="text-[#0A0A0A]"
              style={{ 
                fontFamily: 'SF Pro', 
                fontSize: '14px', 
                fontWeight: 510, 
                lineHeight: '14px',
                letterSpacing: '-0.150391px'
              }}
            >
              Date (Optional)
            </label>
            <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
              <PopoverTrigger asChild>
                <div className="flex items-center px-3 py-3.5 h-12 border border-[#E9EBF3] rounded-[26px] gap-2.5 cursor-pointer">
                  <CalendarIcon className="w-5 h-5 text-[#99A1AF]" strokeWidth={1.67} />
                  <input
                    type="text"
                    value={date ? format(date, 'PPP') : ''}
                    readOnly
                    placeholder=""
                    className="flex-1 outline-none bg-transparent cursor-pointer"
                    style={{ 
                      fontFamily: 'SF Pro', 
                      fontSize: '14px', 
                      fontWeight: 400, 
                      lineHeight: '17px',
                      letterSpacing: '-0.150391px',
                      color: '#0A0A0A'
                    }}
                  />
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(selectedDate) => {
                    setDate(selectedDate);
                    setIsCalendarOpen(false);
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Advanced Setup Module */}
          <div className="flex flex-col items-center w-full h-[80px] mt-6">
            <button
              onClick={onAdvancedSetup}
              className="text-[#155DFC] underline"
              style={{
                fontFamily: 'SF Pro',
                fontSize: '16px',
                fontWeight: 510,
                lineHeight: '24px',
                letterSpacing: '-0.3125px'
              }}
            >
              + Advanced Setup (optional)
            </button>
            <p
              className="text-[#6A7282] text-center mt-2 px-4"
              style={{
                fontFamily: 'SF Pro',
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '24px',
                letterSpacing: '-0.3125px'
              }}
            >
              Fine-tune your practice session for maximum impact
            </p>
          </div>
        </div>

        {/* Start Practice Button */}
        <button
          disabled={!isFormValid}
          onClick={onNext}
          className="flex justify-center items-center py-3.5 h-12 rounded-[28px] transition-opacity mt-auto"
          style={{
            backgroundColor: '#3E5FFF',
            opacity: isFormValid ? 1 : 0.5
          }}
        >
          <span 
            className="text-white text-center"
            style={{ 
              fontFamily: 'SF Pro', 
              fontSize: '16px', 
              fontWeight: 510, 
              lineHeight: '20px',
              letterSpacing: '-0.150391px'
            }}
          >
            Next
          </span>
        </button>
      </div>

      {/* Notch - Black container at top */}
      <div className="absolute w-[150px] h-[37px] left-[126px] top-0 bg-black rounded-b-[24px]" />
    </div>
  );
}
