import { motion, AnimatePresence } from 'motion/react';
import { useRef } from 'react';

interface UploadPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function UploadPopup({ isOpen, onClose }: UploadPopupProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const photoInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const handleChooseFromPhotos = () => {
    photoInputRef.current?.click();
  };

  const handleTakePhoto = () => {
    cameraInputRef.current?.click();
  };

  const handleChooseFile = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log('File selected:', file);
      onClose();
    }
  };

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log('Photo selected:', file);
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
          <input
            type="file"
            accept="image/*"
            capture="environment"
            ref={cameraInputRef}
            style={{ display: 'none' }}
            onChange={handlePhotoChange}
          />

          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 top-0 bottom-0 bg-black/40 z-40"
            onClick={onClose}
          />

          {/* iOS Action Sheet */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="absolute left-0 right-0 bottom-0 z-50 px-2 pb-2"
          >
            {/* Options Container */}
            <div
              className="rounded-[13px] overflow-hidden mb-2"
              style={{
                backdropFilter: 'blur(20px)',
                backgroundColor: 'rgba(255, 255, 255, 0.94)',
              }}
            >
              {/* Choose from Photos */}
              <button
                onClick={handleChooseFromPhotos}
                className="w-full px-4 h-[57px] flex items-center justify-center border-b"
                style={{
                  borderBottomColor: 'rgba(60, 60, 67, 0.29)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'SF Pro',
                    fontSize: '20px',
                    fontWeight: 400,
                    lineHeight: '24px',
                    letterSpacing: '-0.45px',
                    color: '#007AFF',
                  }}
                >
                  Choose from Photos
                </span>
              </button>

              {/* Take Photo */}
              <button
                onClick={handleTakePhoto}
                className="w-full px-4 h-[57px] flex items-center justify-center border-b"
                style={{
                  borderBottomColor: 'rgba(60, 60, 67, 0.29)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'SF Pro',
                    fontSize: '20px',
                    fontWeight: 400,
                    lineHeight: '24px',
                    letterSpacing: '-0.45px',
                    color: '#007AFF',
                  }}
                >
                  Take Photo
                </span>
              </button>

              {/* Choose File */}
              <button
                onClick={handleChooseFile}
                className="w-full px-4 h-[57px] flex items-center justify-center"
              >
                <span
                  style={{
                    fontFamily: 'SF Pro',
                    fontSize: '20px',
                    fontWeight: 400,
                    lineHeight: '24px',
                    letterSpacing: '-0.45px',
                    color: '#007AFF',
                  }}
                >
                  Choose File
                </span>
              </button>
            </div>

            {/* Cancel Button */}
            <div
              className="rounded-[13px] overflow-hidden"
              style={{
                backdropFilter: 'blur(20px)',
                backgroundColor: 'rgba(255, 255, 255, 0.94)',
              }}
            >
              <button
                onClick={onClose}
                className="w-full px-4 h-[57px] flex items-center justify-center"
              >
                <span
                  style={{
                    fontFamily: 'SF Pro',
                    fontSize: '20px',
                    fontWeight: 600,
                    lineHeight: '24px',
                    letterSpacing: '-0.45px',
                    color: '#007AFF',
                  }}
                >
                  Cancel
                </span>
              </button>
            </div>

            {/* Home Indicator Space */}
            <div className="h-[34px]" />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}