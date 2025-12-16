import { X } from 'lucide-react';
import { motion } from 'motion/react';
import { StatusBar } from './StatusBar';
import { useState } from 'react';
import { InstantRecapNew } from './InstantRecapNew';
import { StrongerAlternatives } from './StrongerAlternatives';
import { MomentsToWatch } from './MomentsToWatch';
import { AdjustPlan } from './AdjustPlan';
import { DeleteRecording } from './DeleteRecording';
import { BottomButton } from './BottomButton';
import { LiquidGlassButton } from './shared/LiquidGlassButton';
import closeIcon from '../assets/close-icon-dark.svg';

interface SimulationSummaryProps {
  onClose: () => void;
  onPlay?: () => void;
}

export function SimulationSummary({ onClose, onPlay }: SimulationSummaryProps) {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const handleDownloadPDF = () => {
    // Use browser's print dialog - user can save as PDF
    window.print();
  };

  const handleDeleteRecording = () => {
    setShowDeleteConfirmation(true);
  };

  const confirmDelete = () => {
    // Handle delete logic here
    setShowDeleteConfirmation(false);
    // You can add actual delete functionality here
  };

  const cancelDelete = () => {
    setShowDeleteConfirmation(false);
  };

  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ type: 'tween', duration: 0.4 }}
      className="fixed inset-0 w-[390px] h-screen bg-[#f5f6fa] overflow-y-auto mx-auto left-0 right-0 pb-[146px]"
    >
      <StatusBar variant="dark" className="bg-white" />

      {/* Toolbar */}
      <div className="sticky top-0 z-50 flex justify-between items-start px-4 pb-[10px] h-[54px] bg-white print:hidden">
        {/* Left Icons */}
        <div className="flex flex-row items-center gap-3">
          {/* Download Button */}
          <LiquidGlassButton onClick={handleDownloadPDF} size={44} className="flex-shrink-0">
            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 1V11.5M9 11.5L13 7.5M9 11.5L5 7.5" stroke="#404040" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 12V14C3 14.5304 3.21071 15.0391 3.58579 15.4142C3.96086 15.7893 4.46957 16 5 16H13C13.5304 16 14.0391 15.7893 14.4142 15.4142C14.7893 15.0391 15 14.5304 15 14V12" stroke="#404040" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </LiquidGlassButton>
        </div>
        
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          <h1 
            className="text-[#333333] text-center"
            style={{ 
              fontSize: '17px', 
              fontWeight: 590, 
              lineHeight: '22px',
              letterSpacing: '-0.43px',
              mixBlendMode: 'plus-darker'
            }}
          >
            Recap
          </h1>
        </div>
        
        <LiquidGlassButton onClick={onClose} size={44} className="flex-shrink-0">
          <img src={closeIcon} alt="Close" className="w-[36px] h-[36px]" />
        </LiquidGlassButton>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-start gap-10">
        {/* Instant Recap Section - New Design */}
        <InstantRecapNew />

        <div className="px-5 flex flex-col gap-10 w-full">
        {/* Stronger Alternatives Section */}
        <StrongerAlternatives />

        {/* Moments to Watch Section */}
        <MomentsToWatch onPlay={onPlay} />

        {/* Adjust Plan Section */}
        <AdjustPlan />

        {/* Delete Recording Section */}
        <DeleteRecording onDelete={handleDeleteRecording} />
        </div>
      </div>
      
      {/* Spacer for fixed bottom button */}
      <div className="w-full" style={{ height: '120px', minHeight: '120px' }} />

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[390px]">
        <BottomButton onClick={onClose} />
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Delete Recording</h3>
            <p className="text-gray-500 mb-6">Are you sure you want to delete this recording?</p>
            <div className="flex justify-end">
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2"
                onClick={cancelDelete}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={confirmDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}