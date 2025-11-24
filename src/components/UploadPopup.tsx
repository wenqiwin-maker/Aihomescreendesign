import { motion, AnimatePresence } from 'motion/react';
import { FileText, File, Image } from 'lucide-react';

interface UploadPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function UploadPopup({ isOpen, onClose }: UploadPopupProps) {
  const options = [
    { icon: FileText, label: 'Upload Word document', color: '#2B579A' },
    { icon: File, label: 'Upload PDF', color: '#DC3545' },
    { icon: Image, label: 'Upload Images', color: '#FFA500' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 top-0 bottom-0 bg-black/30 z-50"
            onClick={onClose}
          />
          
          {/* Upload Popup */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="absolute left-0 right-0 bottom-0 z-50"
            style={{
              width: '390px',
              background: '#FFFFFF',
              borderRadius: '24px 24px 0px 0px',
              padding: '20px 0px 40px'
            }}
          >
            {/* Grabber */}
            <div 
              className="flex flex-col items-center"
              style={{
                padding: '0px 0px 16px',
                width: '100%'
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '5px',
                  background: '#CCCCCC',
                  borderRadius: '100px'
                }}
              />
            </div>

            {/* Title */}
            <div
              style={{
                padding: '0px 24px 20px',
                fontFamily: 'SF Pro',
                fontWeight: 590,
                fontSize: '20px',
                lineHeight: '24px',
                letterSpacing: '-0.45px',
                color: '#0A0A0A'
              }}
            >
              Upload File
            </div>

            {/* Options */}
            <div style={{ padding: '0px 16px', gap: '12px', display: 'flex', flexDirection: 'column' }}>
              {options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => {
                    // Handle upload action here
                    console.log(`Selected: ${option.label}`);
                    onClose();
                  }}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: '16px 20px',
                    gap: '16px',
                    background: '#F7F7F7',
                    borderRadius: '12px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'background 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#ECECEC'}
                  onMouseLeave={(e) => e.currentTarget.style.background = '#F7F7F7'}
                >
                  {/* Icon */}
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      background: option.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <option.icon style={{ width: '24px', height: '24px', color: '#FFFFFF' }} />
                  </div>

                  {/* Label */}
                  <span
                    style={{
                      fontFamily: 'SF Pro',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '22px',
                      letterSpacing: '-0.43px',
                      color: '#0A0A0A',
                      flex: 1,
                      textAlign: 'left'
                    }}
                  >
                    {option.label}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
