import { StatusBar } from './StatusBar';
import { Sparkles, Home, Settings, BarChart2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AuroraBackground } from './AuroraBackground';
import { motion } from 'motion/react';
import { useState, useEffect, ReactNode } from 'react';
import { Settings as SettingsPage } from './Settings';

// Reusable card component with rotating icon on hover/click
interface CardWithRotatingIconProps {
  bgColor: string;
  icon: ReactNode;
  label: string;
  className?: string;
  onClick?: () => void;
}

function CardWithRotatingIcon({ bgColor, icon, label, className = '', onClick }: CardWithRotatingIconProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [clickRotation, setClickRotation] = useState(0);

  const handleClick = () => {
    setClickRotation(prev => prev + 360);
    onClick?.();
  };

  return (
    <motion.div 
      className={`${className} h-[162px] rounded-2xl px-4 py-4 flex flex-col gap-2`}
      style={{
        backgroundColor: bgColor,
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.08)",
        cursor: "pointer"
      }}
      whileTap={{ scale: 0.97 }}
      whileHover={{ 
        boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
        transition: { duration: 0.2 } 
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <motion.div
        animate={{
          rotate: isHovered ? clickRotation + 45 : clickRotation
        }}
        transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
        style={{ width: 58, height: 58, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        {icon}
      </motion.div>
      <span 
        className="text-white flex items-center"
        style={{ 
          fontFamily: 'SF Pro', 
          fontSize: '16px', 
          fontWeight: 590, 
          lineHeight: '20px',
          width: '135px',
          height: '64px',
          color: '#FFFFFF'
        }}
      >
        {label}
      </span>
    </motion.div>
  );
}

interface HomePageProps {
  onStartConversation: () => void;
  onOpenAIChat?: () => void;
}

export function HomePage({ onStartConversation, onOpenAIChat }: HomePageProps) {
  const [isPressed, setIsPressed] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [clickRotation, setClickRotation] = useState(0);
  const [titleText, setTitleText] = useState('');
  const [descText, setDescText] = useState('');
  const [currentPage, setCurrentPage] = useState<'home' | 'settings'>('home');
  
  const fullTitle = "I'm SimTalk";
  const fullDesc = "Your space to rehearse important conversations";

  // Typewriter effect for title
  useEffect(() => {
    let titleIndex = 0;
    const titleInterval = setInterval(() => {
      if (titleIndex < fullTitle.length) {
        setTitleText(fullTitle.slice(0, titleIndex + 1));
        titleIndex++;
      } else {
        clearInterval(titleInterval);
      }
    }, 100);

    return () => clearInterval(titleInterval);
  }, []);

  // Typewriter effect for description (starts after title completes)
  useEffect(() => {
    const descTimeout = setTimeout(() => {
      let descIndex = 0;
      const descInterval = setInterval(() => {
        if (descIndex < fullDesc.length) {
          setDescText(fullDesc.slice(0, descIndex + 1));
          descIndex++;
        } else {
          clearInterval(descInterval);
        }
      }, 50);
      
      return () => clearInterval(descInterval);
    }, fullTitle.length * 100);

    return () => clearTimeout(descTimeout);
  }, []);

  const handleClick = () => {
    setIsPressed(true);
    setClickRotation(prev => prev + 360);
    // Delay navigation until after the rotation animation completes
    setTimeout(() => {
      setIsPressed(false);
      onStartConversation();
    }, 600);
  };

  // Show Settings page if selected
  if (currentPage === 'settings') {
    return <SettingsPage onBack={() => setCurrentPage('home')} />;
  }

  return (
    <div className="relative w-[390px] h-[844px] mx-auto overflow-hidden bg-white">
      {/* Top Section */}
      <div className="absolute w-[390px] h-[321px] left-0 top-0">
        {/* Top Background with Aurora Animation */}
        <div className="absolute w-[390px] h-[321px] left-0 top-0 overflow-hidden">
          <AuroraBackground />
        </div>

        {/* Status Bar */}
        <div className="absolute w-[390px] h-[47px] left-0 top-0">
          <StatusBar />
        </div>

        {/* Account Section */}
        <div className="absolute w-[390px] h-[56px] left-0 top-[47px] flex justify-between items-center px-5 gap-4">
          {/* User */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#AAD5E2] rounded-full" />
            <span 
              className="text-white"
              style={{ 
                fontFamily: 'SF Pro', 
                fontSize: '18px', 
                fontWeight: 700, 
                lineHeight: '135%',
                color: 'rgba(255, 255, 255, 0.901961)'
              }}
            >
              Hi, Qi
            </span>
          </div>

          {/* Unlock Pro Button */}
          <button className="flex items-center gap-2 px-1 pr-3 h-10 bg-black rounded-full">
            <div className="w-8 h-8 bg-[#112038] rounded-full flex items-center justify-center">
              {/* Diamond Yellow Icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 3L3 9L12 15L21 9L12 3Z" fill="#FFDB6C"/>
                <path d="M12 15L3 9V15L12 21L21 15V9L12 15Z" fill="#FFB04C"/>
                <path d="M12 3L7.5 6L12 9L16.5 6L12 3Z" fill="#FFF2BB"/>
              </svg>
            </div>
            <span 
              className="text-white"
              style={{ 
                fontFamily: 'SF Pro', 
                fontSize: '12px', 
                fontWeight: 700, 
                lineHeight: '130%' 
              }}
            >
              Upgrade
            </span>
          </button>
        </div>

        {/* Top Content */}
        <div className="absolute left-[25px] top-[111px] w-[274px] flex flex-col" style={{ height: '134px' }}>
          <h1 
            className="text-white"
            style={{ 
              fontFamily: 'IBM Plex Serif', 
              fontSize: '32px', 
              fontWeight: 700, 
              lineHeight: '125%',
              marginBottom: '4px',
              minHeight: '40px'
            }}
          >
            {titleText}
          </h1>
          <p 
            className="text-white"
            style={{ 
              fontFamily: 'IBM Plex Serif', 
              fontSize: '16px', 
              fontWeight: 400, 
              lineHeight: '20px',
              width: '350px',
              minHeight: '40px'
            }}
          >
            {descText}
          </p>
          <motion.button 
            onClick={handleClick}
            onHoverStart={() => setIsButtonHovered(true)}
            onHoverEnd={() => setIsButtonHovered(false)}
            className="flex items-center justify-center gap-3 px-5 h-[45px] bg-white rounded-full shadow-inner mt-auto"
            style={{ 
              boxShadow: 'inset 0px 0px 56px rgba(236, 232, 255, 0.08)' 
            }}
            whileTap={{ scale: 0.95 }}
            whileHover={{
              boxShadow: "inset 0px 0px 56px rgba(236, 232, 255, 0.08), 0px 8px 24px rgba(140, 0, 255, 0.2)",
              transition: { duration: 0.2 }
            }}
          >
            <span 
              className="text-[#8C00FF]"
              style={{ 
                fontFamily: 'SF Pro', 
                fontSize: '16px', 
                fontWeight: 700, 
                lineHeight: '135%' 
              }}
            >
              Start a conversation
            </span>
            {/* AI Icon */}
            <motion.div
              animate={{
                rotate: isButtonHovered ? clickRotation + 45 : clickRotation
              }}
              transition={{
                duration: 0.6,
                ease: [0.34, 1.56, 0.64, 1]
              }}
              style={{ width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 20 20" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.5 0.674805C7.68506 0.674805 7.84567 0.802996 7.88672 0.983398L8.47949 3.59082C8.81131 5.0496 9.95038 6.18868 11.4092 6.52051L14.0166 7.11328C14.197 7.15432 14.3252 7.31494 14.3252 7.5C14.3252 7.68506 14.197 7.84568 14.0166 7.88672L11.4092 8.47949C9.95039 8.81132 8.81132 9.95039 8.47949 11.4092L7.88672 14.0166C7.84568 14.197 7.68506 14.3252 7.5 14.3252C7.31494 14.3252 7.15432 14.197 7.11328 14.0166L6.52051 11.4092C6.18868 9.95039 5.04961 8.81132 3.59082 8.47949L0.983398 7.88672C0.803017 7.84568 0.674805 7.68506 0.674805 7.5C0.674805 7.31494 0.803018 7.15432 0.983398 7.11328L3.59082 6.52051C5.04962 6.18868 6.18869 5.0496 6.52051 3.59082L7.11328 0.983398C7.15433 0.802996 7.31494 0.674805 7.5 0.674805Z" fill="#8C00FF" stroke="#8C00FF" strokeWidth="1.35" strokeLinecap="round"/>
                <path d="M16.2148 13.9844C16.4187 14.8807 17.1193 15.5814 18.0156 15.7852L18.9619 16L18.0156 16.2148C17.1193 16.4186 16.4186 17.1193 16.2148 18.0156L16 18.9619L15.7852 18.0156C15.5814 17.1193 14.8807 16.4186 13.9844 16.2148L13.0371 16L13.9844 15.7852C14.8807 15.5814 15.5813 14.8807 15.7852 13.9844L16 13.0371L16.2148 13.9844Z" fill="#FF52EC" stroke="#FF52EC" strokeWidth="1.35" strokeLinecap="round"/>
                <path d="M17 2V6" stroke="#FFB200" strokeWidth="1.35" strokeLinecap="round"/>
                <path d="M15 4H19" stroke="#FFB200" strokeWidth="1.35" strokeLinecap="round"/>
              </svg>
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Body Section */}
      <div 
        className="absolute w-[390px] left-0 bg-white rounded-t-[20px] flex flex-col gap-[30px] p-5"
        style={{ top: '275px', height: '505px' }}
      >
        {/* Top Practice Section */}
        <motion.div 
          className="flex flex-col gap-3"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
              }
            }
          }}
        >
          <motion.h2 
            style={{ 
              fontFamily: 'SF Pro', 
              fontSize: '14px', 
              fontWeight: 590, 
              lineHeight: '135%',
              color: 'rgba(0, 0, 0, 0.9)' 
            }}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
            }}
          >
            Top Practice
          </motion.h2>

          {/* Feature Cards */}
          <motion.div 
            className="flex gap-4"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
            }}
          >
            {/* Generate CV Card */}
            <CardWithRotatingIcon 
              bgColor="#7B1017"
              className="w-[167px]"
              icon={
                <svg 
                  width="58" 
                  height="58" 
                  viewBox="0 0 58 58" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.0811 0.00144998C16.4988 0.00221892 19.7763 1.36942 22.1927 3.80236C24.6091 6.23531 25.9666 9.53476 25.9666 12.9751V25.9458H13.0811C11.3725 25.9715 9.67595 25.655 8.09004 25.0146C6.50414 24.3742 5.06056 23.4228 3.8433 22.2157C2.62604 21.0086 1.65939 19.5698 0.999588 17.9832C0.339785 16.3965 0 14.6937 0 12.9736C0 11.2536 0.339785 9.55071 0.999588 7.96407C1.65939 6.37743 2.62604 4.9387 3.8433 3.73157C5.06056 2.52444 6.50414 1.57302 8.09004 0.932644C9.67595 0.292272 11.3725 -0.0242644 13.0811 0.00144998ZM13.0811 32.0527H25.9666V45.0235C25.9672 47.5897 25.2117 50.0984 23.7957 52.2323C22.3797 54.3663 20.3669 56.0296 18.0117 57.0119C15.6565 57.9942 13.0649 58.2514 10.5645 57.7509C8.06413 57.2504 5.76737 56.0147 3.96472 54.2001C2.16207 52.3855 0.934515 50.0736 0.437305 47.5567C-0.0599043 45.0398 0.195572 42.431 1.17142 40.0602C2.14727 37.6895 3.79965 35.6633 5.91958 34.238C8.03951 32.8126 10.5317 32.0522 13.0811 32.0527ZM44.9189 0.00144998C46.6275 -0.0242644 48.3241 0.292272 49.91 0.932644C51.4959 1.57302 52.9394 2.52444 54.1567 3.73157C55.374 4.9387 56.3406 6.37743 57.0004 7.96407C57.6602 9.55071 58 11.2536 58 12.9736C58 14.6937 57.6602 16.3965 57.0004 17.9832C56.3406 19.5698 55.374 21.0086 54.1567 22.2157C52.9394 23.4228 51.4959 24.3742 49.91 25.0146C48.3241 25.655 46.6275 25.9715 44.9189 25.9458H32.0334V12.9751C32.0334 9.53476 33.3909 6.23531 35.8073 3.80236C38.2237 1.36942 41.5012 0.00221894 44.9189 0.00144998ZM32.0334 32.0527H44.9189C47.4683 32.0522 49.9605 32.8126 52.0804 34.238C54.2003 35.6633 55.8527 37.6895 56.8286 40.0602C57.8044 42.431 58.0599 45.0398 57.5627 47.5567C57.0655 50.0736 55.8379 52.3855 54.0353 54.2001C52.2326 56.0147 49.9359 57.2504 47.4355 57.7509C44.9351 58.2514 42.3435 57.9942 39.9883 57.0119C37.6331 56.0296 35.6203 54.3663 34.2043 52.2323C32.7883 50.0984 32.0328 47.5897 32.0334 45.0235V32.0527Z" fill="white"/>
                </svg>
              }
              label="Complete your Information to enhance AI"
            />

            {/* Chat with AI Card */}
            <CardWithRotatingIcon 
              bgColor="rgb(62,95,255)"
              className="flex-1"
              icon={
                <svg 
                  width="58" 
                  height="58" 
                  viewBox="0 0 58 58" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fillRule="evenodd" clipRule="evenodd" d="M34.8 0H23.2V14.9976L12.5951 4.39269L4.39269 12.5951L14.9976 23.2H0V34.8H14.9976L4.39269 45.4047L12.5951 53.6074L23.2 43.0024V58H34.8V43.0024L45.405 53.6074L53.6074 45.405L43.0024 34.8H58V23.2H43.0024L53.6074 12.5951L45.405 4.39266L34.8 14.9976V0Z" fill="white"/>
                </svg>
              }
              label="Set a longterm Communication planing"
            />
          </motion.div>
        </motion.div>

        {/* Recommended For You Section */}
        <motion.div 
          className="flex flex-col gap-3"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.5
              }
            }
          }}
        >
          <motion.div 
            className="flex justify-between items-center"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
            }}
          >
            <h2 
              style={{ 
                fontFamily: 'SF Pro', 
                fontSize: '14px', 
                fontWeight: 590, 
                lineHeight: '135%',
                color: 'rgba(0, 0, 0, 0.9)' 
              }}
            >
              Recommended For You
            </h2>
            <span 
              style={{ 
                fontFamily: 'SF Pro', 
                fontSize: '12px', 
                fontWeight: 400, 
                lineHeight: '130%',
                color: 'rgba(0, 0, 0, 0.6)' 
              }}
            >
              View all
            </span>
          </motion.div>

          {/* Practice Scenarios */}
          <motion.div 
            className="flex flex-col gap-4"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
            }}
          >
            {/* Scenario 1 */}
            <motion.div 
              className="flex gap-3"
              whileTap={{ scale: 0.97 }}
              whileHover={{ 
                boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.2 } 
              }}
              style={{
                boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.08)",
                padding: "12px",
                borderRadius: "12px",
                cursor: "pointer"
              }}
            >
              <div className="w-[86px] h-[86px] bg-[#D9D9D9] rounded-xl overflow-hidden flex-shrink-0">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=200&h=200&fit=crop"
                  alt="Partnership meeting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center gap-1">
                <h3 
                  style={{ 
                    fontFamily: 'SF Pro', 
                    fontSize: '16px', 
                    fontWeight: 700, 
                    lineHeight: '20px',
                    color: 'rgba(0, 0, 0, 0.9)' 
                  }}
                >
                  Partnership Performance Review
                </h3>
                <p 
                  style={{ 
                    fontFamily: 'SF Pro', 
                    fontSize: '12px', 
                    fontWeight: 274, 
                    lineHeight: '135%',
                    color: 'rgba(0, 0, 0, 0.6)' 
                  }}
                >
                  Converse with Evelyn, review the partnership performance, discuss mutual ...
                </p>
              </div>
            </motion.div>

            {/* Scenario 2 */}
            <motion.div 
              className="flex gap-3"
              whileTap={{ scale: 0.97 }}
              whileHover={{ 
                boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.2 } 
              }}
              style={{
                boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.08)",
                padding: "12px",
                borderRadius: "12px",
                cursor: "pointer"
              }}
            >
              <div className="w-[86px] h-[86px] bg-[#D9D9D9] rounded-xl overflow-hidden flex-shrink-0">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200&h=200&fit=crop"
                  alt="Financial discussion"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center gap-1">
                <h3 
                  style={{ 
                    fontFamily: 'SF Pro', 
                    fontSize: '16px', 
                    fontWeight: 700, 
                    lineHeight: '20px',
                    color: 'rgba(0, 0, 0, 0.9)' 
                  }}
                >
                  Partnership Performance Review
                </h3>
                <p 
                  style={{ 
                    fontFamily: 'SF Pro', 
                    fontSize: '12px', 
                    fontWeight: 274, 
                    lineHeight: '135%',
                    color: 'rgba(0, 0, 0, 0.6)' 
                  }}
                >
                  Talk to Sarah about how the recent investments have performed and discuss...
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Navigation - Floating */}
      <div 
        className="fixed bottom-5 left-1/2 -translate-x-1/2 w-[350px]"
        style={{ 
          borderRadius: '42px',
          background: 'rgba(247, 247, 247, 0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '0.5px solid rgba(255, 255, 255, 0.8)',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15), inset 0px 1px 0px rgba(255, 255, 255, 0.4)'
        }}
      >
        <div className="flex justify-center items-center py-1 px-5">
          {/* Home - Active */}
          <div className="flex flex-col items-center justify-center w-14">
            <div className="w-[30px] h-[30px] relative flex items-center justify-center">
              <svg width="23" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.4034 0.0581172C11.8167 -0.0193988 12.2411 -0.019346 12.6543 0.0581172C13.1241 0.146271 13.5597 0.364329 14.1123 0.641125L20.2735 3.72218C20.3208 3.74585 20.368 3.76849 20.4141 3.79152C21.4655 4.3167 22.1919 4.68099 22.7364 5.23683C23.2159 5.72652 23.5812 6.3165 23.8047 6.96437C24.0584 7.69985 24.0581 8.51281 24.0577 9.688V14.2456C24.0577 15.9377 24.0578 17.2653 23.9707 18.3316C23.882 19.4172 23.6978 20.3145 23.2842 21.1265C22.6042 22.4611 21.5193 23.5459 20.1846 24.2261C19.3727 24.6399 18.4746 24.8249 17.3887 24.9136C16.3227 25.0006 14.9963 25.0005 13.3047 25.0005H10.7539C9.06207 25.0005 7.73518 25.0006 6.66899 24.9136C5.58314 24.8249 4.68504 24.6399 3.87309 24.2261C2.53861 23.546 1.45347 22.461 0.773478 21.1265C0.359854 20.3147 0.175668 19.4172 0.0869544 18.3316C-0.000130579 17.2653 4.02924e-05 15.9376 4.02924e-05 14.2456V9.688C-0.00044075 8.51283 -0.000630081 7.69984 0.25297 6.96437C0.476524 6.31653 0.841855 5.72652 1.32133 5.23683C1.86574 4.68099 2.59222 4.31667 3.64359 3.79152C3.68986 3.76842 3.73768 3.74593 3.7852 3.72218L9.84965 0.688977C9.88192 0.672891 9.91405 0.65685 9.94535 0.641125C10.498 0.364336 10.9338 0.14627 11.4034 0.0581172ZM12.0313 14.3257C11.6585 14.3257 11.3565 14.6277 11.3565 15.0005V20.0005C11.3567 20.3731 11.6587 20.6753 12.0313 20.6753C12.4039 20.6753 12.7058 20.3731 12.7061 20.0005V15.0005C12.7061 14.6277 12.4041 14.3257 12.0313 14.3257Z" fill="#8C00FF"/>
              </svg>
            </div>
            <span 
              className="text-[#8C00FF]"
              style={{ 
                fontFamily: 'SF Pro', 
                fontSize: '12px', 
                fontWeight: 510, 
                lineHeight: '130%' 
              }}
            >
              Home
            </span>
          </div>

          {/* Chart */}
          <div className="w-14 h-14" />

          {/* AI Growy - Center with gradient */}
          <button 
            onClick={onOpenAIChat}
            className="relative w-12 h-12"
          >
            <motion.div 
              className="w-12 h-12 rounded-full flex items-center justify-center"
              whileTap={{ scale: 0.9 }}
              style={{ 
                background: 'linear-gradient(147.61deg, #FC53EB 32.82%, #FFBF00 68.45%, #62E2F5 104.08%)',
                boxShadow: 'inset 0px 8px 12px rgba(236, 232, 255, 0.56)'
              }}
            >
              <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.1387 12.5137C17.4052 12.5139 17.6362 12.698 17.6953 12.958L18.0117 14.3486C18.158 14.9915 18.6599 15.4933 19.3027 15.6396L20.6934 15.9561C20.9535 16.0152 21.1387 16.2469 21.1387 16.5137C21.1384 16.7802 20.9533 17.0112 20.6934 17.0703L19.3027 17.3867C18.6599 17.533 18.158 18.0349 18.0117 18.6777L17.6953 20.0684C17.6362 20.3283 17.4052 20.5134 17.1387 20.5137C16.8719 20.5137 16.6402 20.3285 16.5811 20.0684L16.2646 18.6777C16.1183 18.0349 15.6165 17.533 14.9736 17.3867L13.583 17.0703C13.3231 17.0112 13.1389 16.7802 13.1387 16.5137C13.1387 16.2469 13.3229 16.0152 13.583 15.9561L14.9736 15.6396C15.6165 15.4933 16.1183 14.9915 16.2646 14.3486L16.5811 12.958C16.6402 12.6979 16.8719 12.5137 17.1387 12.5137ZM8.83594 0.375C9.42526 0.375 9.93673 0.782762 10.0674 1.35742L10.7656 4.42871C11.0887 5.84938 12.1984 6.95919 13.6191 7.28223L16.6904 7.98047C17.2648 8.11113 17.6727 8.62183 17.6729 9.21094C17.6729 9.80023 17.265 10.3117 16.6904 10.4424L13.6191 11.1406C12.1984 11.4637 11.0887 12.5734 10.7656 13.9941L10.0674 17.0654C9.9367 17.64 9.42523 18.0479 8.83594 18.0479C8.24683 18.0477 7.73613 17.6398 7.60547 17.0654L6.90723 13.9941C6.58419 12.5734 5.47441 11.4637 4.05371 11.1406L0.982422 10.4424C0.407806 10.3117 0 9.80026 0 9.21094C0.000196601 8.6218 0.407944 8.11109 0.982422 7.98047L4.05371 7.28223C5.47441 6.95919 6.58419 5.84938 6.90723 4.42871L7.60547 1.35742C7.7361 0.78291 8.2468 0.375197 8.83594 0.375ZM16.2402 0C16.6129 0.000123598 16.915 0.302089 16.915 0.674805V2H18.2402C18.6129 2.00012 18.915 2.30209 18.915 2.6748C18.915 3.04749 18.6129 3.34949 18.2402 3.34961H16.915V4.6748C16.915 5.04749 16.6129 5.34949 16.2402 5.34961C15.8675 5.34961 15.5655 5.04757 15.5654 4.6748V3.34961H14.2402C13.8675 3.34961 13.5655 3.04757 13.5654 2.6748C13.5654 2.30201 13.8674 2 14.2402 2H15.5654V0.674805C15.5654 0.302012 15.8674 0 16.2402 0Z" fill="white"/>
              </svg>
            </motion.div>
          </button>

          {/* Notify */}
          <div className="w-14 h-14" />

          {/* Settings */}
          <button 
            onClick={() => setCurrentPage('settings')}
            className="flex flex-col items-center justify-center w-14"
          >
            <div className="w-[30px] h-[30px] relative flex items-center justify-center">
              <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.4521 0C12.2707 7.24412e-05 13.0498 0.190303 13.6455 0.536133L20.1484 4.28223C22.7823 6.05755 22.9385 6.32791 22.9385 9.09961V15.8984C22.9385 18.6764 22.7856 18.9456 20.21 20.6904L13.6816 24.4619C13.0771 24.8091 12.2951 25 11.4697 25C10.6443 25 9.86291 24.8087 9.26953 24.4619L2.79199 20.7285C0.15658 18.952 1.71146e-05 18.6821 0 15.9111V9.10059C0 6.32156 0.152833 6.05204 2.72852 4.30762L9.25781 0.536133C9.85368 0.190226 10.6335 0 11.4521 0ZM11.4746 9.375C9.74872 9.375 8.34961 10.7741 8.34961 12.5C8.34961 14.2259 9.74872 15.625 11.4746 15.625C13.2005 15.625 14.5996 14.2259 14.5996 12.5C14.5996 10.7741 13.2005 9.375 11.4746 9.375Z" fill="#000000"/>
              </svg>
            </div>
            <span 
              className="text-[#515B70]"
              style={{ 
                fontFamily: 'SF Pro', 
                fontSize: '12px', 
                fontWeight: 510, 
                lineHeight: '130%' 
              }}
            >
              Me
            </span>
          </button>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="fixed bottom-2 left-1/2 -translate-x-1/2 w-[134px] h-[5px] bg-black rounded-full" />

      {/* Notch */}
      <div className="absolute w-[150px] h-[37px] left-[120px] top-0 bg-black rounded-b-[24px]" />
    </div>
  );
}