import { motion, AnimatePresence } from 'motion/react';
import { Send, Smile, Mic } from 'lucide-react';
import { useState } from 'react';

interface KeyboardInputProps {
  isOpen: boolean;
  onSendMessage: (text: string) => void;
}

export function KeyboardInput({ isOpen, onSendMessage }: KeyboardInputProps) {
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim()) {
      onSendMessage(inputValue);
      setInputValue('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'tween', duration: 0.3 }}
          className="absolute left-0 right-0 bottom-0 z-50"
          style={{
            height: '390px',
            background: '#F2F2F2',
            boxShadow: '0px -3px 10px rgba(0, 0, 0, 0.1)',
            borderRadius: '26px'
          }}
        >
          {/* Accessory Bar - Find */}
          <div 
            className="flex flex-row justify-center items-center"
            style={{
              padding: '10px 11px',
              gap: '10px',
              width: '390px',
              height: '68px'
            }}
          >
            {/* Frame */}
            <div 
              className="flex flex-row items-center"
              style={{
                padding: '0px',
                gap: '8px',
                width: '310px',
                height: '48px',
                flex: 'none',
                alignSelf: 'stretch',
                flexGrow: 1
              }}
            >
              {/* Speed Button */}
              <div 
                className="relative flex flex-row items-center"
                style={{
                  padding: '0px',
                  isolation: 'isolate',
                  width: '48px',
                  height: '48px',
                  flex: 'none'
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    background: '#FFFFFF',
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                    borderRadius: '1000px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
                    <rect x="0" y="0" width="21" height="21" rx="3" stroke="#0A0A0A" strokeWidth="1.33" fill="none"/>
                  </svg>
                </div>
              </div>

              {/* Field */}
              <div 
                className="relative flex flex-row items-center"
                style={{
                  padding: '0px 12px',
                  gap: '6px',
                  isolation: 'isolate',
                  width: '254px',
                  height: '48px',
                  borderRadius: '100px',
                  flex: 'none',
                  alignSelf: 'stretch',
                  flexGrow: 1
                }}
              >
                {/* BG with blur effect */}
                <div
                  style={{
                    position: 'absolute',
                    left: '0px',
                    right: '0px',
                    top: '0px',
                    bottom: '0px',
                    background: 'linear-gradient(0deg, #F7F7F7, #F7F7F7), linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), #333333',
                    borderRadius: '296px'
                  }}
                />

                {/* Find Field */}
                <div 
                  className="relative flex flex-row justify-end items-start"
                  style={{
                    padding: '0px',
                    gap: '6px',
                    width: '230px',
                    height: '24px',
                    flex: 'none',
                    flexGrow: 1,
                    zIndex: 1
                  }}
                >
                  {/* Text Input */}
                  <input
                    type="text"
                    placeholder="Type to chat with AI"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="bg-transparent border-none outline-none"
                    style={{
                      width: '150px',
                      height: '22px',
                      fontFamily: 'SF Pro',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '22px',
                      color: inputValue ? '#000000' : 'rgba(0, 0, 0, 0.6)',
                      mixBlendMode: 'plus-darker',
                      flex: 'none',
                      flexGrow: 1
                    }}
                  />

                  {/* Send Icon */}
                  <button 
                    onClick={handleSend}
                    style={{ 
                      width: '24px', 
                      height: '24px', 
                      position: 'relative',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ position: 'absolute', left: 0, top: 0 }}>
                      <path d="M5.5 12.5L20 4L11.5 18.5L10 13L5.5 12.5Z" fill="#3E5FFF" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Done/Record Button */}
            <div 
              className="flex flex-row justify-center items-center"
              style={{
                padding: '0px',
                gap: '4px',
                isolation: 'isolate',
                width: '48px',
                height: '48px',
                borderRadius: '1000px',
                flex: 'none'
              }}
            >
              {/* Record */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '12px',
                  gap: '8px',
                  width: '48px',
                  height: '48px',
                  background: '#FFFFFF',
                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                  borderRadius: '1000px',
                  flex: 'none'
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="8" fill="#333333"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Keyboard */}
          <div 
            className="flex flex-col items-center"
            style={{
              padding: '11px 0px 2px',
              isolation: 'isolate',
              width: '390px',
              height: '322px',
              borderRadius: '0px'
            }}
          >
            {/* Background */}
            <div
              style={{
                position: 'absolute',
                left: '0px',
                right: '0px',
                bottom: '0px',
                height: '322px',
                background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)), linear-gradient(0deg, rgba(51, 51, 51, 0.2), rgba(51, 51, 51, 0.2)), rgba(255, 255, 255, 0.6)',
                borderRadius: '27px'
              }}
            />

            {/* Accessory Bar - Autocorrection */}
            <div 
              className="relative flex flex-row items-flex-start"
              style={{
                padding: '8px 0px 13px',
                width: '390px',
                height: '46px',
                flex: 'none',
                alignSelf: 'stretch',
                zIndex: 1
              }}
            >
              <div 
                className="flex flex-row items-center"
                style={{
                  padding: '0px 22px',
                  gap: '20px',
                  width: '390px',
                  height: '25px',
                  flex: 'none',
                  flexGrow: 1
                }}
              >
                {['The', 'the', 'to'].map((word, idx) => (
                  <div key={idx}>
                    <div
                      style={{
                        width: '85.33px',
                        height: '25px',
                        borderRadius: '4.6px',
                        fontFamily: 'SF Pro',
                        fontWeight: 400,
                        fontSize: '17px',
                        lineHeight: '22px',
                        display: 'flex',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center',
                        letterSpacing: '-0.43px',
                        color: '#333333',
                        mixBlendMode: 'plus-darker'
                      }}
                    >
                      {word}
                    </div>
                    {idx < 2 && (
                      <div 
                        style={{
                          width: '1px',
                          height: '25px',
                          background: '#CCCCCC',
                          mixBlendMode: 'plus-darker',
                          opacity: 0.1,
                          margin: '0 2px'
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Keyboard Layouts */}
            <div 
              className="relative flex flex-col items-center"
              style={{
                padding: '0px 6.5px',
                gap: '13px',
                width: '390px',
                height: '207px',
                flex: 'none',
                alignSelf: 'stretch',
                zIndex: 2
              }}
            >
              {/* Row 1 - QWERTYUIOP */}
              <div className="flex flex-row justify-center items-center" style={{ padding: '0px', gap: '6.5px', width: '377px', height: '42px' }}>
                {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map((letter, idx) => (
                  <div key={idx} className="relative" style={{ width: '31.85px', height: '42px', borderRadius: '8.5px', flex: 'none', flexGrow: 1 }}>
                    <div style={{ position: 'absolute', left: 0, right: '-0.15px', top: 0, bottom: 0, background: '#FFFFFF', borderRadius: '8.5px' }} />
                    <div style={{ position: 'absolute', height: '30px', left: 0, right: '-0.15px', top: 'calc(50% - 30px/2 - 2px)', fontFamily: 'SF Compact', fontWeight: 457, fontSize: '25px', lineHeight: '30px', display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center', color: '#000000', mixBlendMode: 'plus-darker' }}>
                      {letter}
                    </div>
                  </div>
                ))}
              </div>

              {/* Row 2 - ASDFGHJKL */}
              <div className="flex flex-row justify-center items-center" style={{ padding: '0px 20px', gap: '6.5px', width: '377px', height: '42px' }}>
                {['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].map((letter, idx) => (
                  <div key={idx} className="relative" style={{ width: '31.67px', height: '42px', borderRadius: '8.5px', flex: 'none', flexGrow: 1 }}>
                    <div style={{ position: 'absolute', left: 0, right: '-0.33px', top: 0, bottom: 0, background: '#FFFFFF', borderRadius: '8.5px' }} />
                    <div style={{ position: 'absolute', height: '30px', left: 0, right: '-0.33px', top: 'calc(50% - 30px/2 - 2px)', fontFamily: 'SF Compact', fontWeight: 457, fontSize: '25px', lineHeight: '30px', display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center', color: '#000000', mixBlendMode: 'plus-darker' }}>
                      {letter}
                    </div>
                  </div>
                ))}
              </div>

              {/* Row 3 - ZXCVBNM with Shift and Delete */}
              <div className="flex flex-row items-center" style={{ padding: '0px', gap: '14.25px', width: '377px', height: '42px' }}>
                {/* Shift Key */}
                <div className="relative" style={{ width: '45px', height: '42px', borderRadius: '8.5px', flex: 'none' }}>
                  <div style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, background: '#C7C7CC', borderRadius: '8.5px' }} />
                  <div style={{ position: 'absolute', height: '28px', left: 0, right: 0, top: 'calc(50% - 28px/2 - 1px)', fontFamily: 'SF Compact', fontWeight: 457, fontSize: '23px', lineHeight: '28px', display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center', color: '#000000', mixBlendMode: 'plus-darker', textTransform: 'uppercase' }}>
                    ⇧
                  </div>
                </div>

                {/* Row 3 Letters */}
                <div className="flex flex-row items-flex-start" style={{ padding: '0px', gap: '6.5px', width: '258.5px', height: '42px', flex: 'none', flexGrow: 1 }}>
                  {['Z', 'X', 'C', 'V', 'B', 'N', 'M'].map((letter, idx) => (
                    <div key={idx} className="relative" style={{ width: '31.36px', height: '42px', borderRadius: '8.5px', flex: 'none', flexGrow: 1 }}>
                      <div style={{ position: 'absolute', left: 0, right: '0.36px', top: 0, bottom: 0, background: '#FFFFFF', borderRadius: '8.5px' }} />
                      <div style={{ position: 'absolute', height: '30px', left: 0, right: '0.36px', top: 'calc(50% - 30px/2 - 2px)', fontFamily: 'SF Compact', fontWeight: 457, fontSize: '25px', lineHeight: '30px', display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center', color: '#000000', mixBlendMode: 'plus-darker' }}>
                        {letter}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Delete Key */}
                <div className="relative" style={{ width: '45px', height: '42px', borderRadius: '8.5px', flex: 'none' }}>
                  <div style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, background: '#C7C7CC', borderRadius: '8.5px' }} />
                  <div style={{ position: 'absolute', height: '28px', left: 0, right: 0, top: 'calc(50% - 28px/2 - 1px)', fontFamily: 'SF Compact', fontWeight: 457, fontSize: '23px', lineHeight: '28px', display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center', color: '#000000', mixBlendMode: 'plus-darker', textTransform: 'uppercase' }}>
                    ⌫
                  </div>
                </div>
              </div>

              {/* Row 4 - 123, Space, Return */}
              <div className="flex flex-row items-center" style={{ padding: '0px', gap: '6px', width: '377px', height: '42px' }}>
                {/* Keyboard Switch */}
                <div className="relative" style={{ width: '92.25px', height: '42px', borderRadius: '8.5px', flex: 'none' }}>
                  <div style={{ position: 'absolute', left: 0, right: '0.25px', top: 0, bottom: 0, background: '#C7C7CC', borderRadius: '8.5px' }} />
                  <div style={{ position: 'absolute', height: '21px', left: '-2px', right: '-1.75px', top: 'calc(50% - 21px/2 - 0.5px)', fontFamily: 'SF Compact Rounded', fontWeight: 400, fontSize: '18px', lineHeight: '21px', display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center', color: '#000000', mixBlendMode: 'plus-darker' }}>
                    123
                  </div>
                </div>

                {/* Space */}
                <div className="relative flex flex-row items-center" style={{ padding: '0px', gap: '10px', width: '180.5px', height: '42px', borderRadius: '8.5px', flex: 'none', flexGrow: 1 }}>
                  <div className="relative" style={{ width: '180.5px', height: '42px', borderRadius: '8.5px', flex: 'none', flexGrow: 1 }}>
                    <div style={{ position: 'absolute', left: 0, right: '-0.5px', top: 0, bottom: 0, background: '#FFFFFF', borderRadius: '8.5px' }} />
                    <div style={{ position: 'absolute', height: '30px', left: 0, right: '-0.5px', top: 'calc(50% - 30px/2 - 2px)', fontFamily: 'SF Compact', fontWeight: 457, fontSize: '25px', lineHeight: '30px', display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center', color: '#000000', mixBlendMode: 'plus-darker' }}>
                      space
                    </div>
                  </div>
                </div>

                {/* Return */}
                <div className="relative" style={{ width: '92.25px', height: '42px', borderRadius: '8.5px', flex: 'none' }}>
                  <div style={{ position: 'absolute', left: 0, right: '0.25px', top: 0, bottom: 0, background: '#3E5FFF', borderRadius: '8.5px' }} />
                  <div style={{ position: 'absolute', height: '42px', left: 0, right: '0.25px', top: 'calc(50% - 42px/2 + 2px)', fontFamily: 'SF Pro', fontWeight: 400, fontSize: '19px', lineHeight: '28px', display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center', color: '#FFFFFF' }}>
                    ↵
                  </div>
                </div>
              </div>
            </div>

            {/* Emoji and Mic */}
            <div 
              className="relative flex flex-row justify-between items-flex-start"
              style={{
                padding: '12px 39px 0px 36px',
                width: '390px',
                height: '56px',
                flex: 'none',
                alignSelf: 'stretch',
                zIndex: 3
              }}
            >
              {/* Emoji */}
              <Smile 
                style={{
                  margin: '0 auto',
                  width: '26.92px',
                  height: '26.92px',
                  color: 'rgba(34, 43, 89, 0.63)',
                  flex: 'none'
                }}
              />

              {/* Mic */}
              <Mic 
                style={{
                  margin: '0 auto',
                  width: '18.87px',
                  height: '28.21px',
                  color: 'rgba(34, 43, 89, 0.63)',
                  flex: 'none'
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
