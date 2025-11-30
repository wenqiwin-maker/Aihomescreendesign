import { motion, AnimatePresence } from 'motion/react';
import { useRef } from 'react';

interface UploadPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function UploadPopup({ isOpen, onClose }: UploadPopupProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const photoInputRef = useRef<HTMLInputElement>(null);

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handlePhotoClick = () => {
    photoInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log('File selected:', file);
      // Handle file upload logic here
      onClose();
    }
  };

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log('Photo selected:', file);
      // Handle photo upload logic here
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Hidden Inputs */}
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          <input
            type="file"
            accept="image/*"
            ref={photoInputRef}
            style={{ display: 'none' }}
            onChange={handlePhotoChange}
          />

          {/* Backdrop - Invisible but clickable to close */}
          <div
            className="absolute inset-0 z-40"
            onClick={onClose}
          />
          
          {/* Bottom Sheet */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="absolute left-0 right-0 bottom-0 z-50 overflow-hidden"
            style={{
              height: '280px', // Approximate height based on design
              background: 'transparent', 
            }}
          >
            {/* Gradient Background */}
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(180deg, #F3F4F6 0%, #ECEEF1 100%)',
                borderTopLeftRadius: '24px',
                borderTopRightRadius: '24px',
                marginTop: '17px' // To match design top offset if needed
              }}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col px-4 pt-12 pb-4 h-full">
               {/* Text: To support the communication */}
               <p 
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '20px',
                  letterSpacing: '-0.15px',
                  color: '#0A0A0A',
                  marginBottom: '24px'
                }}
              >
                To support the communication
              </p>

               {/* Text: Upload Files */}
               <button
                onClick={handleFileClick}
                className="text-left w-full"
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '20px',
                  letterSpacing: '-0.15px',
                  color: '#0A0A0A',
                  marginBottom: '24px',
                }}
              >
                Upload Files
              </button>

               {/* Upload Photo Option */}
               <button
                onClick={handlePhotoClick}
                className="text-left w-full"
                style={{
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '20px',
                    letterSpacing: '-0.15px',
                    color: '#0A0A0A',
                    marginBottom: 'auto'
                }}
               >
                Upload Photo
               </button>

               {/* Bottom Buttons Row - Replicating VoiceChat buttons but with Active Upload */}
               <div className="flex justify-center items-center gap-4 h-[88px] mt-auto relative">
                 {/* White fade/gradient behind buttons? Design has it. */}
                 <div 
                    className="absolute inset-0 -z-10"
                    style={{
                        background: 'linear-gradient(180deg, rgba(243,244,246,0) 0%, #ECEEF1 100%)',
                        borderRadius: '24px'
                    }}
                 />

                 {/* Record Button (Inactive) */}
                 <button
                  className="flex items-center justify-center rounded-full bg-white"
                  style={{
                    width: "48px",
                    height: "48px",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <svg
                    width="24"
                    height="15"
                    viewBox="0 0 24 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.8672 0C15.4502 0.00019382 16.7334 1.28408 16.7334 2.86719V4.45508L21.5029 1.67285L21.6465 1.60156C21.7935 1.54001 21.9519 1.50741 22.1123 1.50684L22.2715 1.51758C22.3771 1.53115 22.4806 1.55817 22.5791 1.59863L22.7227 1.66895L22.8555 1.75781C22.9397 1.82227 23.0153 1.89742 23.0801 1.98145L23.1699 2.11426L23.2402 2.25781C23.3013 2.40501 23.333 2.56324 23.333 2.72363V11.7402C23.3328 11.9602 23.2732 12.1765 23.1602 12.3652C23.047 12.5538 22.8843 12.7077 22.6904 12.8115C22.4966 12.9153 22.2782 12.9655 22.0586 12.9551C21.8938 12.9472 21.7324 12.9055 21.585 12.834L21.4424 12.752L16.7334 9.6123V11.667C16.7334 13.2501 15.4502 14.534 13.8672 14.5342H2.86719C1.28396 14.5342 0 13.2502 0 11.667V2.86719C0 1.28396 1.28396 0 2.86719 0H13.8672ZM2.86719 1.33398C2.02034 1.33398 1.33398 2.02034 1.33398 2.86719V11.667C1.33398 12.5138 2.02034 13.2002 2.86719 13.2002H13.8672C14.7139 13.2 15.4004 12.5137 15.4004 11.667V8.37891C15.4003 8.3724 15.4003 8.36589 15.4004 8.35938V2.86719C15.4004 2.02046 14.7139 1.33418 13.8672 1.33398H2.86719ZM16.7334 5.99902V8.00977L22 11.5215V2.92578L16.7334 5.99902Z"
                      fill="black"
                    />
                  </svg>
                </button>

                {/* CC Button (Inactive) */}
                <button
                  className="flex items-center justify-center rounded-full bg-white"
                  style={{
                    width: "48px",
                    height: "48px",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="132 15 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M143 15C144.445 15 145.875 15.2841 147.21 15.8369C148.544 16.3897 149.757 17.2003 150.778 18.2217C151.8 19.2431 152.61 20.4555 153.163 21.79C153.716 23.1246 154 24.5555 154 26C154 27.4445 153.716 28.8754 153.163 30.21L152.943 30.7041C152.404 31.8442 151.672 32.8846 150.778 33.7783L150.387 34.1514C149.452 34.9983 148.378 35.6794 147.21 36.1631L146.705 36.3574C145.517 36.7823 144.264 37 143 37C141.736 37 140.483 36.7823 139.295 36.3574L138.79 36.1631C137.622 35.6794 136.548 34.9983 135.613 34.1514L135.222 33.7783C134.328 32.8846 133.596 31.8442 133.057 30.7041L132.837 30.21C132.284 28.8754 132 27.4445 132 26C132 24.5555 132.284 23.1246 132.837 21.79C133.39 20.4555 134.2 19.2431 135.222 18.2217C136.243 17.2003 137.456 16.3897 138.79 15.8369C140.125 15.2841 141.555 15 143 15ZM143 16.3301C141.73 16.3301 140.473 16.5805 139.3 17.0664C138.127 17.5524 137.06 18.2642 136.162 19.1621C135.264 20.0601 134.552 21.1266 134.066 22.2998C133.58 23.473 133.33 24.7302 133.33 26C133.33 27.2698 133.58 28.527 134.066 29.7002C134.552 30.8734 135.264 31.9399 136.162 32.8379C137.06 33.7358 138.127 34.4476 139.3 34.9336C140.473 35.4195 141.73 35.6699 143 35.6699C144.27 35.6699 145.527 35.4195 146.7 34.9336C147.873 34.4476 148.94 33.7358 149.838 32.8379C150.736 31.9399 151.448 30.8734 151.934 29.7002C152.42 28.527 152.67 27.2698 152.67 26C152.67 24.7302 152.42 23.473 151.934 22.2998C151.448 21.1266 150.736 20.0601 149.838 19.1621C148.94 18.2642 147.873 17.5524 146.7 17.0664C145.527 16.5805 144.27 16.3301 143 16.3301ZM140.311 23C141.065 23.0035 141.795 23.2418 142.379 23.6748L141.552 24.6133C141.203 24.3577 140.779 24.2002 140.311 24.2002C139.206 24.2002 138.324 24.9992 138.324 26C138.324 27.0008 139.206 27.7998 140.311 27.7998C140.779 27.7998 141.203 27.6423 141.552 27.3867L142.379 28.3252C141.795 28.7582 141.065 28.9965 140.311 29C138.49 29 137 27.65 137 26C137 24.35 138.49 23 140.311 23ZM146.931 23C147.685 23.0035 148.416 23.2416 149 23.6748L148.173 24.6133C147.824 24.3577 147.399 24.2002 146.931 24.2002C145.827 24.2004 144.945 24.9993 144.945 26C144.945 27.0007 145.827 27.7996 146.931 27.7998C147.399 27.7998 147.824 27.6423 148.173 27.3867L149 28.3252C148.416 28.7584 147.685 28.9965 146.931 29C145.11 28.9998 143.621 27.6499 143.621 26C143.621 24.3501 145.11 23.0002 146.931 23Z"
                      fill="black"
                    />
                  </svg>
                </button>

                {/* Keyboard Button (Inactive) */}
                <button
                  className="flex items-center justify-center rounded-full bg-white"
                  style={{
                    width: "48px",
                    height: "48px",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="203.996 14.9961 22.008 22.0078"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M215 14.9961C221.077 14.9962 226.004 19.9229 226.004 26C226.004 32.0771 221.077 37.0038 215 37.0039C208.923 37.0038 203.996 32.0771 203.996 26C203.996 19.9229 208.923 14.9962 215 14.9961ZM215 16.5752C209.795 16.5753 205.575 20.7952 205.575 26C205.575 31.2048 209.795 35.4247 215 35.4248C220.205 35.4247 224.425 31.2048 224.425 26C224.425 20.7952 220.205 16.5753 215 16.5752ZM219.653 29.1045C219.847 29.1046 220.032 29.1817 220.169 29.3184C220.305 29.4551 220.382 29.6408 220.382 29.834C220.382 30.027 220.305 30.212 220.169 30.3486C220.032 30.4853 219.847 30.5624 219.653 30.5625H210.416C210.223 30.5625 210.037 30.4853 209.9 30.3486C209.764 30.212 209.687 30.027 209.687 29.834C209.687 29.6407 209.764 29.4551 209.9 29.3184C210.037 29.1816 210.223 29.1045 210.416 29.1045H219.653ZM210.659 25.2148V27.1602H208.714V25.2148H210.659ZM214.224 25.2139V27.1602H212.279V25.2139H214.224ZM217.789 25.2139V27.1602H215.845V25.2139H217.789ZM221.354 25.2139V27.1602H219.41V25.2139H221.354ZM210.659 21.3262V23.2705H208.714V21.3262H210.659ZM214.224 21.3262V23.2705H212.279V21.3262H214.224ZM217.789 21.3262V23.2705H215.845V21.3262H217.789ZM221.354 21.3262V23.2705H219.41V21.3262H221.354Z"
                      fill="black"
                    />
                  </svg>
                </button>

                {/* Upload Button (Active - 60px) */}
                <button
                  onClick={onClose}
                  className="flex items-center justify-center rounded-full bg-white"
                  style={{
                    width: "60px",
                    height: "60px",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 0C13.5759 0 15.1369 0.310029 16.5928 0.913086C18.0485 1.51614 19.3711 2.40044 20.4854 3.51465C21.5996 4.62886 22.4839 5.95146 23.0869 7.40723C23.69 8.86313 24 10.4241 24 12C24 13.5759 23.69 15.1369 23.0869 16.5928L22.8477 17.1318C22.2592 18.3756 21.4604 19.5103 20.4854 20.4854L20.0586 20.8926C19.039 21.8165 17.8666 22.5592 16.5928 23.0869L16.042 23.2988C14.7463 23.7623 13.379 24 12 24C10.621 24 9.25367 23.7623 7.95801 23.2988L7.40723 23.0869C6.13338 22.5592 4.96096 21.8165 3.94141 20.8926L3.51465 20.4854C2.53963 19.5103 1.74077 18.3756 1.15234 17.1318L0.913086 16.5928C0.310029 15.1369 0 13.5759 0 12C0 10.4241 0.31003 8.86313 0.913086 7.40723C1.51614 5.95146 2.40044 4.62886 3.51465 3.51465C4.62886 2.40044 5.95146 1.51614 7.40723 0.913086C8.86313 0.31003 10.4241 0 12 0Z" fill="#3E5FFF" />
                    <path d="M12.0794 5.75841L17.1823 10.8613L16.1563 11.8873L12.0794 7.81042L8.00245 11.8873L6.97644 10.8613L12.0794 5.75841Z" fill="white" />
                    <path d="M12.9055 16.364L11.4545 16.364L11.4545 7.63672L12.9055 7.63672L12.9055 16.364Z" fill="white" />
                  </svg>
                </button>
               </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}