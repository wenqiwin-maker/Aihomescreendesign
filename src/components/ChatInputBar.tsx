import { useState } from 'react';
import { UploadFilePopup } from './UploadFilePopup';

interface ChatInputBarProps {
  onSendMessage: (text: string) => void;
  placeholder?: string;
}

export function ChatInputBar({ onSendMessage, placeholder = "Type to chat with AI" }: ChatInputBarProps) {
  const [inputValue, setInputValue] = useState('');
  const [isUploadPopupOpen, setIsUploadPopupOpen] = useState(false);

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
    <>
      <div
        className="absolute bottom-0 left-0 right-0 py-[10px]"
        style={{
          background: '#FFFFFF',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          className="flex flex-row items-center"
          style={{
            padding: '0px',
            gap: '8px',
            width: '368px',
            height: '48px',
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

          {/* Input Field */}
          <div
            className="relative flex flex-row items-center"
            style={{
              padding: '0px 12px',
              gap: '6px',
              isolation: 'isolate',
              height: '48px',
              borderRadius: '100px',
              flex: '1',
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
                background: '#FFFFFF',
                borderRadius: '296px',
                boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.15)'
              }}
            />

            {/* Input and Send */}
            <div
              className="relative flex flex-row justify-end items-center"
              style={{
                padding: '0px',
                gap: '6px',
                height: '24px',
                flex: '1',
                zIndex: 1
              }}
            >
              {/* Text Input */}
              <input
                type="text"
                placeholder={placeholder}
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
                  flex: '1',
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
                  <path d="M0.69745 3.88831L16.4478 0.0270791C16.6188 -0.015131 16.7983 -0.00787347 16.9653 0.0480051C17.1324 0.103884 17.2801 0.206084 17.3913 0.342697C17.5026 0.47931 17.5727 0.644713 17.5935 0.819634C17.6143 0.994555 17.585 1.17179 17.509 1.3307L10.4927 16.0618C10.411 16.227 10.282 16.3643 10.1222 16.4562C9.96234 16.5481 9.77883 16.5905 9.59488 16.5781C9.41093 16.5656 9.23482 16.4988 9.08885 16.3862C8.94288 16.2735 8.83363 16.1201 8.77492 15.9453L6.97696 10.3759C6.9269 10.2212 6.91819 10.0562 6.95167 9.89714C6.98515 9.73809 7.05967 9.59057 7.16782 9.46924L10.2217 6.07564C10.2638 6.03267 10.2887 5.97577 10.2918 5.91567C10.2948 5.85558 10.2757 5.79646 10.2381 5.74947C10.2005 5.70249 10.147 5.67089 10.0877 5.66065C10.0285 5.65042 9.96747 5.66225 9.9163 5.69391L5.86611 8.06637C5.72692 8.14688 5.56936 8.19023 5.40858 8.19223C5.2478 8.19424 5.0892 8.15484 4.94805 8.07783L0.470319 5.59656C0.309352 5.5051 0.179364 5.36766 0.097015 5.20184C0.0146661 5.03603 -0.0162915 4.8494 0.00810969 4.66588C0.0325109 4.48236 0.111159 4.31031 0.233974 4.17177C0.356789 4.03324 0.518176 3.93453 0.69745 3.88831Z" fill="#8C00FF"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Mic Button */}
          <button
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
      </div>

      <UploadFilePopup
        isOpen={isUploadPopupOpen}
        onClose={() => setIsUploadPopupOpen(false)}
      />
    </>
  );
}
