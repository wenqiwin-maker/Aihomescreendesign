import { motion, AnimatePresence } from 'motion/react';
import { Send, Smile, Mic } from 'lucide-react';
import { useState } from 'react';
import { UploadFilePopup } from './UploadFilePopup';

interface KeyboardInputProps {
  isOpen: boolean;
  onSendMessage: (text: string) => void;
  onClose?: () => void;
}

export function KeyboardInput({ isOpen, onSendMessage, onClose }: KeyboardInputProps) {
  const [inputValue, setInputValue] = useState('');
  const [isUploadPopupOpen, setIsUploadPopupOpen] = useState(false);

  const handleSend = () => {
    if (inputValue.trim()) {
      onSendMessage(inputValue);
      setInputValue('');
      // Close keyboard after sending
      if (onClose) {
        onClose();
      }
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
        <>
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
                {/* Upload Button */}
                <button
                  onClick={() => setIsUploadPopupOpen(true)}
                  className="relative flex flex-row items-center"
                  style={{
                    padding: '0px',
                    isolation: 'isolate',
                    width: '48px',
                    height: '48px',
                    flex: 'none',
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer'
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
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 0C12.4445 0 13.8754 0.284112 15.21 0.836914C16.5445 1.38971 17.7569 2.20029 18.7783 3.22168C19.7997 4.24306 20.6103 5.45555 21.1631 6.79004C21.7159 8.12462 22 9.55546 22 11C22 12.4445 21.7159 13.8754 21.1631 15.21L20.9434 15.7041C20.404 16.8442 19.6721 17.8846 18.7783 18.7783L18.3867 19.1514C17.4521 19.9983 16.3777 20.6794 15.21 21.1631L14.7051 21.3574C13.5174 21.7823 12.2641 22 11 22C9.73592 22 8.48261 21.7823 7.29492 21.3574L6.79004 21.1631C5.62231 20.6794 4.54789 19.9983 3.61328 19.1514L3.22168 18.7783C2.32791 17.8846 1.59603 16.8442 1.05664 15.7041L0.836914 15.21C0.284112 13.8754 -2.15253e-08 12.4445 0 11C3.16029e-09 9.55546 0.284112 8.12462 0.836914 6.79004C1.38971 5.45555 2.20029 4.24306 3.22168 3.22168C4.24306 2.20029 5.45555 1.38971 6.79004 0.836914C8.12462 0.284112 9.55546 1.3753e-07 11 0ZM11 1.33008C9.73019 1.33008 8.47297 1.58049 7.2998 2.06641C6.12659 2.55237 5.06005 3.26417 4.16211 4.16211C3.26417 5.06005 2.55237 6.12659 2.06641 7.2998C1.58049 8.47297 1.33008 9.73019 1.33008 11C1.33008 12.2698 1.58049 13.527 2.06641 14.7002C2.55237 15.8734 3.26417 16.9399 4.16211 17.8379C5.06005 18.7358 6.12659 19.4476 7.2998 19.9336C8.47297 20.4195 9.73019 20.6699 11 20.6699C12.2698 20.6699 13.527 20.4195 14.7002 19.9336C15.8734 19.4476 16.9399 18.7358 17.8379 17.8379C18.7358 16.9399 19.4476 15.8734 19.9336 14.7002C20.4195 13.527 20.6699 12.2698 20.6699 11C20.6699 9.73018 20.4195 8.47297 19.9336 7.2998C19.4476 6.12659 18.7358 5.06005 17.8379 4.16211C16.9399 3.26417 15.8734 2.55237 14.7002 2.06641C13.527 1.58049 12.2698 1.33008 11 1.33008ZM15.75 9.95703L14.8096 10.8975L11.8301 7.91797V15H10.5V7.73242L7.33594 10.8975L6.39551 9.95703L11.0723 5.2793L15.75 9.95703Z" fill="black"/>
                    </svg>
                  </div>
                </button>

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
                        padding: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.69745 3.88831L16.4478 0.0270791C16.6188 -0.015131 16.7983 -0.00787347 16.9653 0.0480051C17.1324 0.103884 17.2801 0.206084 17.3913 0.342697C17.5026 0.47931 17.5727 0.644713 17.5935 0.819634C17.6143 0.994555 17.585 1.17179 17.509 1.3307L10.4927 16.0618C10.411 16.227 10.282 16.3643 10.1222 16.4562C9.96234 16.5481 9.77883 16.5905 9.59488 16.5781C9.41093 16.5656 9.23482 16.4988 9.08885 16.3862C8.94288 16.2735 8.83363 16.1201 8.77492 15.9453L6.97696 10.3759C6.9269 10.2212 6.91819 10.0562 6.95167 9.89714C6.98515 9.73809 7.05967 9.59057 7.16782 9.46924L10.2217 6.07564C10.2638 6.03267 10.2887 5.97577 10.2918 5.91567C10.2948 5.85558 10.2757 5.79646 10.2381 5.74947C10.2005 5.70249 10.147 5.67089 10.0877 5.66065C10.0285 5.65042 9.96747 5.66225 9.9163 5.69391L5.86611 8.06637C5.72692 8.14688 5.56936 8.19023 5.40858 8.19223C5.2478 8.19424 5.0892 8.15484 4.94805 8.07783L0.470319 5.59656C0.309352 5.5051 0.179364 5.36766 0.097015 5.20184C0.0146661 5.03603 -0.0162915 4.8494 0.00810969 4.66588C0.0325109 4.48236 0.111159 4.31031 0.233974 4.17177C0.356789 4.03324 0.518176 3.93453 0.69745 3.88831Z" fill="#3E5FFF"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Done/Record Button */}
              <button
                onClick={() => onClose && onClose()}
                className="flex flex-row justify-center items-center"
                style={{
                  padding: '0px',
                  gap: '4px',
                  isolation: 'isolate',
                  width: '48px',
                  height: '48px',
                  borderRadius: '1000px',
                  flex: 'none',
                  border: 'none',
                  background: 'transparent',
                  cursor: 'pointer'
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
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 4C1.13132 4 1.26136 4.02587 1.38268 4.07612C1.50401 4.12638 1.61425 4.20003 1.70711 4.29289C1.79997 4.38575 1.87362 4.49599 1.92388 4.61732C1.97413 4.73864 2 4.86868 2 5V9C2 9.26522 1.89464 9.51957 1.70711 9.70711C1.51957 9.89464 1.26522 10 1 10C0.734784 10 0.48043 9.89464 0.292893 9.70711C0.105357 9.51957 0 9.26522 0 9V5C0 4.73478 0.105357 4.48043 0.292893 4.29289C0.48043 4.10536 0.734784 4 1 4ZM5 0C5.26522 6.21601e-09 5.51957 0.105357 5.70711 0.292893C5.89464 0.48043 6 0.734784 6 1V13C6.00002 13.1313 5.97417 13.2614 5.92392 13.3827C5.87368 13.5041 5.80002 13.6143 5.70716 13.7072C5.6143 13.8001 5.50405 13.8738 5.38272 13.924C5.26138 13.9743 5.13133 14.0002 5 14.0002C4.86867 14.0002 4.73862 13.9743 4.61728 13.924C4.49595 13.8738 4.3857 13.8001 4.29284 13.7072C4.19998 13.6143 4.12632 13.5041 4.07608 13.3827C4.02583 13.2614 3.99998 13.1313 4 13V1C4 0.868678 4.02587 0.738642 4.07612 0.617317C4.12638 0.495991 4.20003 0.385752 4.29289 0.292893C4.38575 0.200035 4.49599 0.126375 4.61732 0.0761207C4.73864 0.025866 4.86868 0 5 0ZM9 2.5C9.26522 2.5 9.51957 2.60536 9.70711 2.79289C9.89464 2.98043 10 3.23478 10 3.5V10.5C10 10.6313 9.97417 10.7614 9.92392 10.8827C9.87368 11.0041 9.80002 11.1143 9.70716 11.2072C9.6143 11.3001 9.50406 11.3738 9.38272 11.424C9.26138 11.4743 9.13133 11.5002 9 11.5002C8.86867 11.5002 8.73862 11.4743 8.61728 11.424C8.49595 11.3738 8.3857 11.3001 8.29284 11.2072C8.19998 11.1143 8.12632 11.0041 8.07608 10.8827C8.02583 10.7614 7.99998 10.6313 8 10.5V3.5C8 3.23478 8.10536 2.98043 8.29289 2.79289C8.48043 2.60536 8.73478 2.5 9 2.5ZM13 4C13.1313 4 13.2614 4.02587 13.3827 4.07612C13.504 4.12638 13.6142 4.20003 13.7071 4.29289C13.8 4.38575 13.8736 4.49599 13.9239 4.61732C13.9741 4.73864 14 4.86868 14 5V9.5C14 9.76522 13.8946 10.0196 13.7071 10.2071C13.5196 10.3946 13.2652 10.5 13 10.5C12.7348 10.5 12.4804 10.3946 12.2929 10.2071C12.1054 10.0196 12 9.76522 12 9.5V5C12 4.73478 12.1054 4.48043 12.2929 4.29289C12.4804 4.10536 12.7348 4 13 4Z" fill="#2A2A37"/>
                  </svg>
                </div>
              </button>
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
                  background: '#F2F2F2',
                  borderRadius: '27px'
                }}
              />

              {/* Accessory Bar - Autocorrection */}
              <div 
                className="relative flex flex-row items-center justify-center"
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
                  className="flex flex-row items-center justify-center"
                  style={{
                    gap: '20px',
                    height: '25px'
                  }}
                >
                  {['The', 'the', 'to'].map((word, idx) => (
                    <div key={idx} className="flex flex-row items-center" style={{ gap: '0px' }}>
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
                            marginLeft: '10px',
                            marginRight: '10px'
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
                      <div style={{ position: 'absolute', height: '30px', left: 0, right: '-0.15px', top: 'calc(50% - 30px/2 - 2px)', fontFamily: 'SF Pro', fontWeight: 400, fontSize: '25px', lineHeight: '30px', display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center', color: '#595959' }}>
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
                      <div style={{ position: 'absolute', height: '30px', left: 0, right: '-0.33px', top: 'calc(50% - 30px/2 - 2px)', fontFamily: 'SF Pro', fontWeight: 400, fontSize: '25px', lineHeight: '30px', display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center', color: '#595959' }}>
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
                    <div style={{ position: 'absolute', height: '28px', left: 0, right: 0, top: 'calc(50% - 28px/2 - 1px)', fontFamily: 'SF Pro', fontWeight: 400, fontSize: '23px', lineHeight: '28px', display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center', color: '#595959', textTransform: 'uppercase' }}>
                      ⇧
                    </div>
                  </div>

                  {/* Row 3 Letters */}
                  <div className="flex flex-row items-flex-start" style={{ padding: '0px', gap: '6.5px', width: '258.5px', height: '42px', flex: 'none', flexGrow: 1 }}>
                    {['Z', 'X', 'C', 'V', 'B', 'N', 'M'].map((letter, idx) => (
                      <div key={idx} className="relative" style={{ width: '31.36px', height: '42px', borderRadius: '8.5px', flex: 'none', flexGrow: 1 }}>
                        <div style={{ position: 'absolute', left: 0, right: '0.36px', top: 0, bottom: 0, background: '#FFFFFF', borderRadius: '8.5px' }} />
                        <div style={{ position: 'absolute', height: '30px', left: 0, right: '0.36px', top: 'calc(50% - 30px/2 - 2px)', fontFamily: 'SF Pro', fontWeight: 400, fontSize: '25px', lineHeight: '30px', display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center', color: '#595959' }}>
                          {letter}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Delete Key */}
                  <div className="relative" style={{ width: '45px', height: '42px', borderRadius: '8.5px', flex: 'none' }}>
                    <div style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, background: '#C7C7CC', borderRadius: '8.5px' }} />
                    <div style={{ position: 'absolute', height: '28px', left: 0, right: 0, top: 'calc(50% - 28px/2 - 1px)', fontFamily: 'SF Pro', fontWeight: 400, fontSize: '23px', lineHeight: '28px', display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center', color: '#595959', textTransform: 'uppercase' }}>
                      ⌫
                    </div>
                  </div>
                </div>

                {/* Row 4 - 123, Space, Return */}
                <div className="flex flex-row items-center" style={{ padding: '0px', gap: '6px', width: '377px', height: '42px' }}>
                  {/* Keyboard Switch */}
                  <div className="relative" style={{ width: '92.25px', height: '42px', borderRadius: '8.5px', flex: 'none' }}>
                    <div style={{ position: 'absolute', left: 0, right: '0.25px', top: 0, bottom: 0, background: '#C7C7CC', borderRadius: '8.5px' }} />
                    <div style={{ position: 'absolute', height: '21px', left: '-2px', right: '-1.75px', top: 'calc(50% - 21px/2 - 0.5px)', fontFamily: 'SF Compact Rounded', fontWeight: 400, fontSize: '18px', lineHeight: '21px', display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center', color: '#595959' }}>
                      123
                    </div>
                  </div>

                  {/* Space */}
                  <div className="relative flex flex-row items-center" style={{ padding: '0px', gap: '10px', width: '180.5px', height: '42px', borderRadius: '8.5px', flex: 'none', flexGrow: 1 }}>
                    <div className="relative" style={{ width: '180.5px', height: '42px', borderRadius: '8.5px', flex: 'none', flexGrow: 1 }}>
                      <div style={{ position: 'absolute', left: 0, right: '-0.5px', top: 0, bottom: 0, background: '#FFFFFF', borderRadius: '8.5px' }} />
                      <div style={{ position: 'absolute', height: '30px', left: 0, right: '-0.5px', top: 'calc(50% - 30px/2 - 2px)', fontFamily: 'SF Pro', fontWeight: 400, fontSize: '25px', lineHeight: '30px', display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center', color: '#595959' }}>
                        space
                      </div>
                    </div>
                  </div>

                  {/* Return */}
                  <button 
                    onClick={handleSend}
                    className="relative" 
                    style={{ width: '92.25px', height: '42px', borderRadius: '8.5px', flex: 'none' }}
                  >
                    <div style={{ position: 'absolute', left: 0, right: '0.25px', top: 0, bottom: 0, background: '#3E5FFF', borderRadius: '8.5px' }} />
                    <div style={{ position: 'absolute', height: '42px', left: 0, right: '0.25px', top: 'calc(50% - 42px/2 + 2px)', fontFamily: 'SF Pro', fontWeight: 400, fontSize: '19px', lineHeight: '28px', display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center', color: '#FFFFFF' }}>
                      ↵
                    </div>
                  </button>
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
                    width: '26.92px',
                    height: '26.92px',
                    color: 'rgba(34, 43, 89, 0.63)',
                    flex: 'none'
                  }}
                />

                {/* Mic - Custom SVG */}
                <svg width="19" height="29" viewBox="0 0 19 29" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '18.87px', height: '28.21px', flex: 'none' }}>
                  <path d="M0 13.9351V11.2588C0 10.9863 0.0966797 10.7534 0.290039 10.5601C0.483398 10.3667 0.716309 10.27 0.98877 10.27C1.27002 10.27 1.50732 10.3667 1.70068 10.5601C1.89404 10.7534 1.99072 10.9863 1.99072 11.2588V13.856C1.99072 15.3501 2.29834 16.6597 2.91357 17.7847C3.52881 18.9097 4.39453 19.7842 5.51074 20.4082C6.62695 21.0234 7.93652 21.3311 9.43945 21.3311C10.9424 21.3311 12.2476 21.0234 13.355 20.4082C14.4712 19.7842 15.3369 18.9097 15.9521 17.7847C16.5674 16.6597 16.875 15.3501 16.875 13.856V11.2588C16.875 10.9863 16.9717 10.7534 17.165 10.5601C17.3584 10.3667 17.5957 10.27 17.877 10.27C18.1494 10.27 18.3823 10.3667 18.5757 10.5601C18.769 10.7534 18.8657 10.9863 18.8657 11.2588V13.9351C18.8657 15.6577 18.5098 17.187 17.7979 18.5229C17.0947 19.8589 16.1104 20.9312 14.8447 21.7397C13.5791 22.5396 12.1069 23.0098 10.4282 23.1504V26.2222H15.3193C15.6006 26.2222 15.8379 26.3188 16.0312 26.5122C16.2246 26.7056 16.3213 26.9429 16.3213 27.2241C16.3213 27.4966 16.2246 27.7295 16.0312 27.9229C15.8379 28.1162 15.6006 28.2129 15.3193 28.2129H3.54639C3.26514 28.2129 3.02783 28.1162 2.83447 27.9229C2.64111 27.7295 2.54443 27.4966 2.54443 27.2241C2.54443 26.9429 2.64111 26.7056 2.83447 26.5122C3.02783 26.3188 3.26514 26.2222 3.54639 26.2222H8.4375V23.1504C6.75879 23.0098 5.28662 22.5396 4.021 21.7397C2.75537 20.9312 1.7666 19.8589 1.05469 18.5229C0.351562 17.187 0 15.6577 0 13.9351ZM4.64062 13.4604V5.16797C4.64062 4.15723 4.84277 3.26514 5.24707 2.4917C5.65137 1.70947 6.21387 1.09863 6.93457 0.65918C7.65527 0.219727 8.49023 0 9.43945 0C10.3799 0 11.2104 0.219727 11.9312 0.65918C12.6519 1.09863 13.2144 1.70947 13.6187 2.4917C14.0229 3.26514 14.2251 4.15723 14.2251 5.16797V13.4604C14.2251 14.4712 14.0229 15.3677 13.6187 16.1499C13.2144 16.9233 12.6519 17.5298 11.9312 17.9692C11.2104 18.4087 10.3799 18.6284 9.43945 18.6284C8.49023 18.6284 7.65527 18.4087 6.93457 17.9692C6.21387 17.5298 5.65137 16.9233 5.24707 16.1499C4.84277 15.3677 4.64062 14.4712 4.64062 13.4604ZM6.63135 13.4604C6.63135 14.436 6.88623 15.2139 7.396 15.7939C7.91455 16.374 8.5957 16.6641 9.43945 16.6641C10.2832 16.6641 10.96 16.374 11.4697 15.7939C11.9795 15.2139 12.2344 14.436 12.2344 13.4604V5.16797C12.2344 4.19238 11.9795 3.41455 11.4697 2.83447C10.96 2.25439 10.2832 1.96436 9.43945 1.96436C8.5957 1.96436 7.91455 2.25439 7.396 2.83447C6.88623 3.41455 6.63135 4.19238 6.63135 5.16797V13.4604Z" fill="#222B59" fillOpacity="0.63"/>
                </svg>
              </div>
            </div>
          </motion.div>
          <UploadFilePopup
            isOpen={isUploadPopupOpen}
            onClose={() => setIsUploadPopupOpen(false)}
          />
        </>
      )}
    </AnimatePresence>
  );
}