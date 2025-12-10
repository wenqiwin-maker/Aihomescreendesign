import { motion, AnimatePresence } from 'motion/react';
import { useRef } from 'react';

interface UploadFilePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function UploadFilePopup({ isOpen, onClose }: UploadFilePopupProps) {
  const wordInputRef = useRef<HTMLInputElement>(null);
  const pdfInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const handleWordUpload = () => {
    wordInputRef.current?.click();
  };

  const handlePdfUpload = () => {
    pdfInputRef.current?.click();
  };

  const handleImageUpload = () => {
    imageInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log('File selected:', file);
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
            ref={wordInputRef}
            accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          <input
            type="file"
            ref={pdfInputRef}
            accept=".pdf,application/pdf"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          <input
            type="file"
            ref={imageInputRef}
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />

          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 top-0 bottom-0 bg-black/40 z-50"
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
              {/* Upload Word Document */}
              <button
                onClick={handleWordUpload}
                className="w-full px-4 h-[57px] flex items-center justify-center border-b"
                style={{
                  borderBottomColor: 'rgba(60, 60, 67, 0.29)',
                }}
              >
                <span
                  style={{
                    fontSize: '20px',
                    fontWeight: 400,
                    lineHeight: '24px',
                    letterSpacing: '-0.45px',
                    color: '#007AFF',
                  }}
                >
                  Upload Word Document
                </span>
              </button>

              {/* Upload PDF */}
              <button
                onClick={handlePdfUpload}
                className="w-full px-4 h-[57px] flex items-center justify-center border-b"
                style={{
                  borderBottomColor: 'rgba(60, 60, 67, 0.29)',
                }}
              >
                <span
                  style={{
                    fontSize: '20px',
                    fontWeight: 400,
                    lineHeight: '24px',
                    letterSpacing: '-0.45px',
                    color: '#007AFF',
                  }}
                >
                  Upload PDF
                </span>
              </button>

              {/* Upload Images */}
              <button
                onClick={handleImageUpload}
                className="w-full px-4 h-[57px] flex items-center justify-center"
              >
                <span
                  style={{
                    fontSize: '20px',
                    fontWeight: 400,
                    lineHeight: '24px',
                    letterSpacing: '-0.45px',
                    color: '#007AFF',
                  }}
                >
                  Upload Images
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
