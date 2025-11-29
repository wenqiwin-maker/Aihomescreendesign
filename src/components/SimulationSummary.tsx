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

interface SimulationSummaryProps {
  onClose: () => void;
}

export function SimulationSummary({ onClose }: SimulationSummaryProps) {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

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
      className="fixed inset-0 w-[390px] h-[844px] bg-[#f5f6fa] overflow-y-auto"
    >
      {/* Status Bar */}
      <div className="flex justify-center items-center px-4 pt-[21px] pb-[19px] h-[62px] bg-white" style={{ gap: '154px' }}>
        {/* Time */}
        <div className="flex flex-row justify-center items-center" style={{ padding: '2px 0px 0px', gap: '10px', width: '102px', height: '22px', flex: 'none', order: 0, flexGrow: 1 }}>
          <span 
            className="text-black text-center"
            style={{ 
              width: '37px',
              height: '22px',
              fontFamily: 'SF Pro', 
              fontStyle: 'normal',
              fontSize: '17px', 
              fontWeight: 590, 
              lineHeight: '22px',
              color: '#000000',
              flex: 'none',
              order: 0,
              flexGrow: 0
            }}
          >
            9:41
          </span>
        </div>

        {/* Status Icons */}
        <div className="flex flex-row items-center pr-4" style={{ gap: '7px', width: '102px', height: '22px', flex: 'none', order: 1, flexGrow: 1 }}>
          <svg width="102" height="22" viewBox="0 0 102 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M31.365 6.53295C31.365 5.8999 30.8875 5.38672 30.2984 5.38672H29.2317C28.6426 5.38672 28.165 5.8999 28.165 6.53295V16.4669C28.165 17.0999 28.6426 17.6131 29.2317 17.6131H30.2984C30.8875 17.6131 31.365 17.0999 31.365 16.4669V6.53295ZM23.9309 7.832H24.9976C25.5867 7.832 26.0643 8.3575 26.0643 9.00574V16.4394C26.0643 17.0876 25.5867 17.6131 24.9976 17.6131H23.9309C23.3418 17.6131 22.8643 17.0876 22.8643 16.4394V9.00574C22.8643 8.3575 23.3418 7.832 23.9309 7.832ZM19.5992 10.481H18.5325C17.9434 10.481 17.4658 11.0132 17.4658 11.6697V16.4244C17.4658 17.0809 17.9434 17.6131 18.5325 17.6131H19.5992C20.1883 17.6131 20.6658 17.0809 20.6658 16.4244V11.6697C20.6658 11.0132 20.1883 10.481 19.5992 10.481ZM14.2984 12.9263H13.2317C12.6426 12.9263 12.165 13.4509 12.165 14.098V16.4414C12.165 17.0885 12.6426 17.6131 13.2317 17.6131H14.2984C14.8875 17.6131 15.365 17.0885 15.365 16.4414V14.098C15.365 13.4509 14.8875 12.9263 14.2984 12.9263Z" fill="black"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M46.9365 7.80222C49.4236 7.80232 51.8157 8.72441 53.6182 10.3779C53.7539 10.5055 53.9709 10.5039 54.1045 10.3743L55.402 9.11081C55.4697 9.04505 55.5075 8.95597 55.5069 8.86329C55.5063 8.77061 55.4675 8.68197 55.399 8.61697C50.668 4.24226 43.2043 4.24226 38.4733 8.61697C38.4048 8.68192 38.3659 8.77054 38.3652 8.86322C38.3646 8.9559 38.4023 9.045 38.4699 9.11081L39.7678 10.3743C39.9014 10.5041 40.1185 10.5057 40.2542 10.3779C42.0569 8.7243 44.4492 7.80221 46.9365 7.80222ZM46.9332 12.0225C48.2905 12.0224 49.5994 12.5342 50.6055 13.4583C50.7416 13.5894 50.9559 13.5866 51.0886 13.4519L52.3759 12.1326C52.4437 12.0634 52.4813 11.9695 52.4803 11.8719C52.4793 11.7744 52.4398 11.6813 52.3707 11.6135C49.3068 8.72266 44.5621 8.72266 41.4983 11.6135C41.4291 11.6813 41.3896 11.7744 41.3887 11.872C41.3878 11.9696 41.4255 12.0635 41.4935 12.1326L42.7804 13.4519C42.913 13.5866 43.1274 13.5894 43.2635 13.4583C44.2689 12.5348 45.5768 12.0231 46.9332 12.0225ZM49.4576 14.816C49.4595 14.9214 49.4225 15.023 49.3552 15.0968L47.1785 17.5515C47.1147 17.6236 47.0277 17.6642 46.9369 17.6642C46.8462 17.6642 46.7592 17.6236 46.6954 17.5515L44.5183 15.0968C44.4511 15.0229 44.4141 14.9213 44.4161 14.816C44.4181 14.7106 44.4589 14.6108 44.5289 14.5402C45.919 13.2263 47.9549 13.2263 49.345 14.5402C49.4149 14.6109 49.4557 14.7107 49.4576 14.816Z" fill="black"/>
            <path d="M81.0068 5C83.0573 5 84.0827 5.00026 84.8887 5.34277C85.9131 5.77816 86.7287 6.59373 87.1641 7.61816C87.5066 8.42416 87.5068 9.4495 87.5068 11.5C87.5068 13.5505 87.5066 14.5758 87.1641 15.3818L87.0781 15.5713C86.626 16.5067 85.8491 17.249 84.8887 17.6572L84.7344 17.7178C83.9501 17.9999 82.929 18 81.0068 18H69.0068L67.6484 17.9951C66.4573 17.9791 65.7295 17.9141 65.125 17.6572C64.1645 17.249 63.3876 16.5067 62.9355 15.5713L62.8496 15.3818C62.5071 14.5758 62.5068 13.5505 62.5068 11.5C62.5068 9.57788 62.5069 8.55669 62.7891 7.77246L62.8496 7.61816C63.2578 6.65771 64.0002 5.88081 64.9355 5.42871L65.125 5.34277C65.7295 5.0859 66.4573 5.02094 67.6484 5.00488L69.0068 5H81.0068ZM69.0068 6C67.9676 6 67.2394 6.00022 66.6689 6.04004C66.108 6.07919 65.7746 6.15311 65.5166 6.2627C64.7303 6.59683 64.1037 7.22347 63.7695 8.00977C63.6599 8.2678 63.586 8.6012 63.5469 9.16211C63.5071 9.73258 63.5068 10.4608 63.5068 11.5C63.5068 12.5392 63.5071 13.2674 63.5469 13.8379C63.586 14.3988 63.6599 14.7322 63.7695 14.9902C64.1037 15.7765 64.7303 16.4032 65.5166 16.7373C65.7746 16.8469 66.108 16.9208 66.6689 16.96C67.2394 16.9998 67.9676 17 69.0068 17H81.0068C82.0461 17 82.7743 16.9998 83.3447 16.96C83.9056 16.9208 84.239 16.8469 84.4971 16.7373C85.2834 16.4032 85.91 15.7765 86.2441 14.9902C86.3537 14.7322 86.4276 14.3988 86.4668 13.8379C86.5066 13.2674 86.5068 12.5392 86.5068 11.5C86.5068 10.4608 86.5066 9.73258 86.4668 9.16211C86.4276 8.6012 86.3537 8.2678 86.2441 8.00977C85.91 7.22347 85.2834 6.59683 84.4971 6.2627C84.239 6.15311 83.9056 6.07919 83.3447 6.04004C82.7743 6.00022 82.0461 6 81.0068 6H69.0068ZM81.5068 7C82.9068 7 83.6068 7.00007 84.1416 7.27246C84.612 7.51214 84.9947 7.89483 85.2344 8.36523C85.5068 8.89999 85.5068 9.60002 85.5068 11V12C85.5068 13.4 85.5068 14.1 85.2344 14.6348C84.9947 15.1052 84.612 15.4879 84.1416 15.7275C83.6068 15.9999 82.9068 16 81.5068 16H68.5068C67.1069 16 66.4068 15.9999 65.8721 15.7275C65.4017 15.4879 65.019 15.1052 64.7793 14.6348C64.5069 14.1 64.5068 13.4 64.5068 12V11C64.5068 9.60002 64.5069 8.89999 64.7793 8.36523C65.019 7.89483 65.4017 7.51214 65.8721 7.27246C66.4068 7.00007 67.1069 7 68.5068 7H81.5068ZM88.5068 9.78125C89.3116 10.1264 89.835 10.9297 89.835 11.8193C89.8348 12.7088 89.3114 13.5113 88.5068 13.8564V9.78125Z" fill="black"/>
          </svg>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex justify-between items-start px-4 pb-[10px] h-[54px] bg-white">
        {/* Left Icons */}
        <div className="flex flex-row items-center gap-3">
          {/* Download Button */}
          <button 
            className="flex flex-row justify-center items-center w-11 h-11 rounded-full relative"
            style={{
              background: 'linear-gradient(0deg, #F7F7F7, #F7F7F7), linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), #333333',
              backgroundBlendMode: 'plus-darker, normal, color-dodge',
              isolation: 'isolate'
            }}
          >
            <div 
              className="flex flex-col justify-center items-center w-9 h-9 rounded-full"
              style={{ mixBlendMode: 'plus-darker', zIndex: 1 }}
            >
              <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 1V11.5M9 11.5L13 7.5M9 11.5L5 7.5" stroke="#404040" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 12V14C3 14.5304 3.21071 15.0391 3.58579 15.4142C3.96086 15.7893 4.46957 16 5 16H13C13.5304 16 14.0391 15.7893 14.4142 15.4142C14.7893 15.0391 15 14.5304 15 14V12" stroke="#404040" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
          </button>

          {/* Chat History Button */}
          <button 
            className="flex flex-row justify-center items-center w-11 h-11 rounded-full relative"
            style={{
              background: 'linear-gradient(0deg, #F7F7F7, #F7F7F7), linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), #333333',
              backgroundBlendMode: 'plus-darker, normal, color-dodge',
              isolation: 'isolate'
            }}
          >
            <div 
              className="flex flex-col justify-center items-center w-9 h-9 rounded-full"
              style={{ mixBlendMode: 'plus-darker', zIndex: 1 }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3.5C3 2.67157 3.67157 2 4.5 2H15.5C16.3284 2 17 2.67157 17 3.5V12.5C17 13.3284 16.3284 14 15.5 14H6.5L3 17.5V3.5Z" stroke="#404040" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.5 6.5H13.5" stroke="#404040" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M6.5 10H10" stroke="#404040" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
          </button>
        </div>
        
        <div className="absolute left-1/2 -translate-x-1/2 top-[75px]">
          <h1 
            className="text-[#333333] text-center"
            style={{ 
              fontFamily: 'SF Pro', 
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
        
        <button 
          onClick={onClose}
          className="flex flex-row justify-center items-center w-11 h-11 rounded-full relative flex-shrink-0"
          style={{
            background: 'rgba(247, 247, 247, 0.85)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '0.5px solid rgba(255, 255, 255, 0.8)',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15), inset 0px 1px 0px rgba(255, 255, 255, 0.4)'
          }}
        >
          <span 
            className="flex items-center justify-center"
            style={{ 
              fontFamily: 'SF Pro', 
              fontSize: '17px', 
              fontWeight: 510,
              lineHeight: '20px',
              color: '#404040',
              fontFeatureSettings: "'ss16' on"
            }}
          >
            ✕
          </span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-start pb-[146px] gap-10">
        {/* Instant Recap Section - New Design */}
        <InstantRecapNew />

        <div className="px-5 flex flex-col gap-10 w-full">
        {/* Stronger Alternatives Section */}
        <StrongerAlternatives />

        {/* Moments to Watch Section */}
        <MomentsToWatch />

        {/* Adjust Plan Section */}
        <AdjustPlan />

        {/* Delete Recording Section */}
        <DeleteRecording onDelete={handleDeleteRecording} />
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 w-[390px]">
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