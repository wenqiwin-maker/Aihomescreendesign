import image_e71456bb150803a8c03bf60185c7a4ea96da27af from 'figma:asset/e71456bb150803a8c03bf60185c7a4ea96da27af.png';
import { X, Mic } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChatBubblePopup } from './ChatBubblePopup';
import { KeyboardInput } from './KeyboardInput';
import { CaptionPopup } from './CaptionPopup';
import videoIcon from 'figma:asset/6caa8856c8cea93d878e2617e611ab5478ffd1aa.png';

interface VoiceChatProps {
  onClose: () => void;
}

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export function VoiceChat({ onClose }: VoiceChatProps) {
  const [speed, setSpeed] = useState('1x');
  const [isChatPopupOpen, setIsChatPopupOpen] = useState(false);
  const [isCaptionPopupOpen, setIsCaptionPopupOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const toggleSpeed = () => {
    const speeds = ['1x', '1.25x', '1.5x', '2x'];
    const currentIndex = speeds.indexOf(speed);
    setSpeed(speeds[(currentIndex + 1) % speeds.length]);
  };

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);

    // Simulate AI response after a short delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Got it! Let me help you with that.',
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <motion.div 
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ type: 'tween', duration: 0.4 }}
      className="fixed inset-0 w-[390px] h-[844px] overflow-hidden"
      style={{ background: '#F9FAFB' }}
    >
      {/* Video/Image Background Layer */}
      <div className="absolute inset-0 w-full h-full">
        <ImageWithFallback
          src={image_e71456bb150803a8c03bf60185c7a4ea96da27af}
          alt="AI Character"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Top Section - Fixed */}
      <div className="absolute top-0 left-0 w-[390px] flex flex-col z-20">
        {/* Status Bar */}
        <div className="flex justify-between items-center px-4 py-[11px] h-[47px]">
          {/* Time */}
          <div className="flex items-center">
            <span 
              className="text-white"
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

          {/* Right Side - Signal, WiFi, Battery */}
          <div className="flex items-center gap-[7px]">
            {/* Mobile Signal */}
            <svg width="19" height="12" viewBox="0 0 19 12" fill="none">
              <rect x="0" y="8" width="4" height="4" rx="0.5" fill="white"/>
              <rect x="5" y="6" width="4" height="6" rx="0.5" fill="white"/>
              <rect x="10" y="3" width="4" height="9" rx="0.5" fill="white"/>
              <rect x="15" y="0" width="4" height="12" rx="0.5" fill="white"/>
            </svg>
            
            {/* WiFi */}
            <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
              <path d="M8.5 12C9.163 12 9.7 11.463 9.7 10.8C9.7 10.137 9.163 9.6 8.5 9.6C7.837 9.6 7.3 10.137 7.3 10.8C7.3 11.463 7.837 12 8.5 12Z" fill="white"/>
              <path d="M8.5 7.2C10.433 7.2 12.1 8.867 12.1 10.8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M8.5 3.6C12.642 3.6 16 6.958 16 11.1" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>

            {/* Battery */}
            <div className="relative w-[27.33px] h-[13px]">
              <div 
                className="absolute inset-0 border border-white/35 rounded-[4.3px]"
                style={{ width: '25px', height: '13px' }}
              />
              <div 
                className="absolute right-0 top-[4.5px] w-[1.33px] h-[4px] bg-white/40 rounded-r-sm"
              />
              <div 
                className="absolute left-[2px] top-[2px] w-[21px] h-[9px] bg-white rounded-[2.5px]"
              />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center px-4 pb-2 gap-3 h-[56px]">
          {/* Back Button */}
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0"
          >
            <X className="w-6 h-6 text-black" strokeWidth={1.35} />
          </button>

          {/* Progress Steps Slider */}
          <div className="flex-1 flex justify-center items-center gap-2 px-4">
            <div className="flex-1 h-1 bg-[#3E5FFF] rounded-full" />
            <div className="flex-1 h-1 rounded-full" style={{ background: 'rgba(112, 121, 140, 0.2)', backdropFilter: 'blur(12px)' }} />
            <div className="flex-1 h-1 rounded-full" style={{ background: 'rgba(112, 121, 140, 0.2)', backdropFilter: 'blur(12px)' }} />
            <div className="flex-1 h-1 rounded-full" style={{ background: 'rgba(112, 121, 140, 0.2)', backdropFilter: 'blur(12px)' }} />
            <div className="flex-1 h-1 rounded-full" style={{ background: 'rgba(112, 121, 140, 0.2)', backdropFilter: 'blur(12px)' }} />
            <div className="flex-1 h-1 rounded-full" style={{ background: 'rgba(112, 121, 140, 0.2)', backdropFilter: 'blur(12px)' }} />
          </div>

          {/* Delete Button - Hidden */}
          <div className="w-10 h-10 opacity-0 flex-shrink-0" />
        </div>
      </div>

      {/* Body Section - Fixed at Bottom */}
      <div className="absolute left-0 w-[390px] h-[246px] z-10" style={{ top: '564px' }}>
        {/* Actions */}
        <div className="absolute left-4 w-[358px] h-[88px]" style={{ top: '193px' }}>
          {/* Button Groups */}
          <div className="flex justify-center items-center gap-4 px-8 h-12">
            {/* Video/Record Button */}
            <button 
              className="flex items-center justify-center rounded-full bg-white"
              style={{
                width: '48px',
                height: '48px',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)'
              }}
            >
              <svg width="24" height="15" viewBox="47 19.333 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M73.8669 19.333C75.4501 19.3331 76.7332 20.617 76.7332 22.2002V23.7891L81.5037 21.0059L81.6472 20.9346C81.7942 20.8731 81.9527 20.8404 82.113 20.8398L82.2722 20.8506C82.3777 20.8642 82.4815 20.8912 82.5798 20.9316L82.7234 21.002L82.8562 21.0908C82.9404 21.1552 83.0161 21.2305 83.0808 21.3145L83.1707 21.4473L83.241 21.5908C83.3019 21.738 83.3337 21.8963 83.3337 22.0566V31.0732C83.3336 31.2931 83.2739 31.5096 83.1609 31.6982C83.0478 31.8868 82.8849 32.0407 82.6912 32.1445C82.4974 32.2483 82.2789 32.2984 82.0593 32.2881C81.8946 32.2802 81.733 32.2385 81.5857 32.167L81.4431 32.085L76.7332 28.9453V31C76.7332 32.5832 75.4501 33.8671 73.8669 33.8672H62.8669C61.2837 33.8672 59.9998 32.5832 59.9998 31V22.2002C59.9998 20.617 61.2837 19.333 62.8669 19.333H73.8669ZM62.8669 20.667C62.0201 20.667 61.3337 21.3534 61.3337 22.2002V31C61.3337 31.8468 62.0201 32.5332 62.8669 32.5332H73.8669C74.7137 32.5331 75.4001 31.8468 75.4001 31V22.2002C75.4001 21.3534 74.7137 20.6671 73.8669 20.667H62.8669ZM76.7332 25.332V27.3428L82.0007 30.8545V22.2588L76.7332 25.332Z" fill="black"/>
              </svg>
            </button>

            {/* CC/Subtitles Button */}
            <button 
              onClick={() => setIsCaptionPopupOpen(true)}
              className="flex items-center justify-center rounded-full bg-white"
              style={{
                width: '48px',
                height: '48px',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)'
              }}
            >
              <svg width="22" height="22" viewBox="132 15 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M143 15C144.445 15 145.875 15.2841 147.21 15.8369C148.544 16.3897 149.757 17.2003 150.778 18.2217C151.8 19.2431 152.61 20.4555 153.163 21.79C153.716 23.1246 154 24.5555 154 26C154 27.4445 153.716 28.8754 153.163 30.21L152.943 30.7041C152.404 31.8442 151.672 32.8846 150.778 33.7783L150.387 34.1514C149.452 34.9983 148.378 35.6794 147.21 36.1631L146.705 36.3574C145.517 36.7823 144.264 37 143 37C141.736 37 140.483 36.7823 139.295 36.3574L138.79 36.1631C137.622 35.6794 136.548 34.9983 135.613 34.1514L135.222 33.7783C134.328 32.8846 133.596 31.8442 133.057 30.7041L132.837 30.21C132.284 28.8754 132 27.4445 132 26C132 24.5555 132.284 23.1246 132.837 21.79C133.39 20.4555 134.2 19.2431 135.222 18.2217C136.243 17.2003 137.456 16.3897 138.79 15.8369C140.125 15.2841 141.555 15 143 15ZM143 16.3301C141.73 16.3301 140.473 16.5805 139.3 17.0664C138.127 17.5524 137.06 18.2642 136.162 19.1621C135.264 20.0601 134.552 21.1266 134.066 22.2998C133.58 23.473 133.33 24.7302 133.33 26C133.33 27.2698 133.58 28.527 134.066 29.7002C134.552 30.8734 135.264 31.9399 136.162 32.8379C137.06 33.7358 138.127 34.4476 139.3 34.9336C140.473 35.4195 141.73 35.6699 143 35.6699C144.27 35.6699 145.527 35.4195 146.7 34.9336C147.873 34.4476 148.94 33.7358 149.838 32.8379C150.736 31.9399 151.448 30.8734 151.934 29.7002C152.42 28.527 152.67 27.2698 152.67 26C152.67 24.7302 152.42 23.473 151.934 22.2998C151.448 21.1266 150.736 20.0601 149.838 19.1621C148.94 18.2642 147.873 17.5524 146.7 17.0664C145.527 16.5805 144.27 16.3301 143 16.3301ZM140.311 23C141.065 23.0035 141.795 23.2418 142.379 23.6748L141.552 24.6133C141.203 24.3577 140.779 24.2002 140.311 24.2002C139.206 24.2002 138.324 24.9992 138.324 26C138.324 27.0008 139.206 27.7998 140.311 27.7998C140.779 27.7998 141.203 27.6423 141.552 27.3867L142.379 28.3252C141.795 28.7582 141.065 28.9965 140.311 29C138.49 29 137 27.65 137 26C137 24.35 138.49 23 140.311 23ZM146.931 23C147.685 23.0035 148.416 23.2416 149 23.6748L148.173 24.6133C147.824 24.3577 147.399 24.2002 146.931 24.2002C145.827 24.2004 144.945 24.9993 144.945 26C144.945 27.0007 145.827 27.7996 146.931 27.7998C147.399 27.7998 147.824 27.6423 148.173 27.3867L149 28.3252C148.416 28.7584 147.685 28.9965 146.931 29C145.11 28.9998 143.621 27.6499 143.621 26C143.621 24.3501 145.11 23.0002 146.931 23Z" fill="black"/>
              </svg>
            </button>

            {/* Keyboard/Text Button */}
            <button 
              onClick={() => setIsChatPopupOpen(true)}
              className="flex items-center justify-center rounded-full bg-white"
              style={{
                width: '48px',
                height: '48px',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)'
              }}
            >
              <svg width="22" height="22" viewBox="203.996 14.9961 22.008 22.0078" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M215 14.9961C221.077 14.9962 226.004 19.9229 226.004 26C226.004 32.0771 221.077 37.0038 215 37.0039C208.923 37.0038 203.996 32.0771 203.996 26C203.996 19.9229 208.923 14.9962 215 14.9961ZM215 16.5752C209.795 16.5753 205.575 20.7952 205.575 26C205.575 31.2048 209.795 35.4247 215 35.4248C220.205 35.4247 224.425 31.2048 224.425 26C224.425 20.7952 220.205 16.5753 215 16.5752ZM219.653 29.1045C219.847 29.1046 220.032 29.1817 220.169 29.3184C220.305 29.4551 220.382 29.6408 220.382 29.834C220.382 30.027 220.305 30.212 220.169 30.3486C220.032 30.4853 219.847 30.5624 219.653 30.5625H210.416C210.223 30.5625 210.037 30.4853 209.9 30.3486C209.764 30.212 209.687 30.027 209.687 29.834C209.687 29.6407 209.764 29.4551 209.9 29.3184C210.037 29.1816 210.223 29.1045 210.416 29.1045H219.653ZM210.659 25.2148V27.1602H208.714V25.2148H210.659ZM214.224 25.2139V27.1602H212.279V25.2139H214.224ZM217.789 25.2139V27.1602H215.845V25.2139H217.789ZM221.354 25.2139V27.1602H219.41V25.2139H221.354ZM210.659 21.3262V23.2705H208.714V21.3262H210.659ZM214.224 21.3262V23.2705H212.279V21.3262H214.224ZM217.789 21.3262V23.2705H215.845V21.3262H217.789ZM221.354 21.3262V23.2705H219.41V21.3262H221.354Z" fill="black"/>
              </svg>
            </button>

            {/* Upload/Share Button */}
            <button 
              className="flex items-center justify-center rounded-full bg-white"
              style={{
                width: '48px',
                height: '48px',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)'
              }}
            >
              <svg width="22" height="22" viewBox="276 15 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M287 15C288.445 15 289.875 15.2841 291.21 15.8369C292.544 16.3897 293.757 17.2003 294.778 18.2217C295.8 19.2431 296.61 20.4555 297.163 21.79C297.716 23.1246 298 24.5555 298 26C298 27.4445 297.716 28.8754 297.163 30.21L296.943 30.7041C296.404 31.8442 295.672 32.8846 294.778 33.7783L294.387 34.1514C293.452 34.9983 292.378 35.6794 291.21 36.1631L290.705 36.3574C289.517 36.7823 288.264 37 287 37C285.736 37 284.483 36.7823 283.295 36.3574L282.79 36.1631C281.622 35.6794 280.548 34.9983 279.613 34.1514L279.222 33.7783C278.328 32.8846 277.596 31.8442 277.057 30.7041L276.837 30.21C276.284 28.8754 276 27.4445 276 26C276 24.5555 276.284 23.1246 276.837 21.79C277.39 20.4555 278.2 19.2431 279.222 18.2217C280.243 17.2003 281.456 16.3897 282.79 15.8369C284.125 15.2841 285.555 15 287 15ZM287 16.3301C285.73 16.3301 284.473 16.5805 283.3 17.0664C282.127 17.5524 281.06 18.2642 280.162 19.1621C279.264 20.0601 278.552 21.1266 278.066 22.2998C277.58 23.473 277.33 24.7302 277.33 26C277.33 27.2698 277.58 28.527 278.066 29.7002C278.552 30.8734 279.264 31.9399 280.162 32.8379C281.06 33.7358 282.127 34.4476 283.3 34.9336C284.473 35.4195 285.73 35.6699 287 35.6699C288.27 35.6699 289.527 35.4195 290.7 34.9336C291.873 34.4476 292.94 33.7358 293.838 32.8379C294.736 31.9399 295.448 30.8734 295.934 29.7002C296.42 28.527 296.67 27.2698 296.67 26C296.67 24.7302 296.42 23.473 295.934 22.2998C295.448 21.1266 294.736 20.0601 293.838 19.1621C292.94 18.2642 291.873 17.5524 290.7 17.0664C289.527 16.5805 288.27 16.3301 287 16.3301ZM291.75 24.957L290.81 25.8975L287.83 22.918V30H286.5V22.7324L283.336 25.8975L282.396 24.957L287.072 20.2793L291.75 24.957Z" fill="black"/>
              </svg>
            </button>
          </div>

          {/* Mention - Bottom spacing */}
          <div className="w-[358px] h-6 mt-4" />
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 w-[390px] h-[34px] flex justify-center items-center z-10">
        {/* Home Indicator */}
        <div 
          className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[134px] h-[5px] bg-white rounded-full"
        />
      </div>

      {/* Speed Button - Floating Bottom Right */}
      <button
        onClick={toggleSpeed}
        className="absolute flex items-center gap-2.5 px-3 py-3 rounded-full border border-white z-20"
        style={{
          left: '326px',
          top: '689px',
          width: '88px',
          height: '46px',
          filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.2))'
        }}
      >
        <div className="w-[22px] h-[22px] rounded-full border-2 border-white flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full" />
        </div>
      </button>

      {/* Notch */}
      <div className="absolute w-[150px] h-[37px] left-[120px] top-0 bg-black rounded-b-[24px] z-30" />

      {/* Caption Popup */}
      <CaptionPopup 
        isOpen={isCaptionPopupOpen} 
        onClose={() => setIsCaptionPopupOpen(false)}
      />

      {/* Chat Bubble Popup */}
      <ChatBubblePopup 
        isOpen={isChatPopupOpen} 
        onClose={() => setIsChatPopupOpen(false)}
        messages={messages}
      />

      {/* Keyboard Input - Above Chat Popup */}
      <KeyboardInput 
        isOpen={isChatPopupOpen}
        onSendMessage={handleSendMessage}
      />
    </motion.div>
  );
}
