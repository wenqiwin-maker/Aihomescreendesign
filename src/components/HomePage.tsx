import { StatusBar } from './StatusBar';
import { Sparkles, Home, Settings, BarChart2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import headerBackground from 'figma:asset/e26d7b02799e888c710b96f7c0389d381ad5e899.png';

interface HomePageProps {
  onStartConversation: () => void;
}

export function HomePage({ onStartConversation }: HomePageProps) {
  return (
    <div className="relative w-[390px] h-[844px] mx-auto overflow-hidden bg-white">
      {/* Top Section */}
      <div className="absolute w-[390px] h-[321px] left-0 top-0">
        {/* Top Background */}
        <div className="absolute w-[390px] h-[321px] left-0 top-0 overflow-hidden">
          <img 
            src={headerBackground} 
            alt="Header background"
            className="absolute w-[390px] h-[321px] left-0 top-0 object-cover"
          />
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
        <div className="absolute left-[25px] top-[111px] w-[274px]">
          <h1 
            className="text-white mb-3"
            style={{ 
              fontFamily: 'SF Pro', 
              fontSize: '32px', 
              fontWeight: 700, 
              lineHeight: '125%' 
            }}
          >
            I'm SimTalk
          </h1>
          <p 
            className="text-white mb-6"
            style={{ 
              fontFamily: 'SF Pro', 
              fontSize: '14px', 
              fontWeight: 400, 
              lineHeight: '135%' 
            }}
          >
            AI enhance............
          </p>
          <button 
            onClick={onStartConversation}
            className="flex items-center justify-center gap-3 w-full h-[45px] bg-white rounded-full shadow-inner"
            style={{ 
              boxShadow: 'inset 0px 0px 56px rgba(236, 232, 255, 0.08)' 
            }}
          >
            <span 
              className="text-[#3E5FFF]"
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
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 0.674805C7.68506 0.674805 7.84567 0.802996 7.88672 0.983398L8.47949 3.59082C8.81131 5.0496 9.95038 6.18868 11.4092 6.52051L14.0166 7.11328C14.197 7.15432 14.3252 7.31494 14.3252 7.5C14.3252 7.68506 14.197 7.84568 14.0166 7.88672L11.4092 8.47949C9.95039 8.81132 8.81132 9.95039 8.47949 11.4092L7.88672 14.0166C7.84568 14.197 7.68506 14.3252 7.5 14.3252C7.31494 14.3252 7.15432 14.197 7.11328 14.0166L6.52051 11.4092C6.18868 9.95039 5.04961 8.81132 3.59082 8.47949L0.983398 7.88672C0.803017 7.84568 0.674805 7.68506 0.674805 7.5C0.674805 7.31494 0.803018 7.15432 0.983398 7.11328L3.59082 6.52051C5.04962 6.18868 6.18869 5.0496 6.52051 3.59082L7.11328 0.983398C7.15433 0.802996 7.31494 0.674805 7.5 0.674805Z" fill="#3E5FFF" stroke="#3E5FFF" strokeWidth="1.35" strokeLinecap="round"/>
              <path d="M16.2148 13.9844C16.4187 14.8807 17.1193 15.5814 18.0156 15.7852L18.9619 16L18.0156 16.2148C17.1193 16.4186 16.4186 17.1193 16.2148 18.0156L16 18.9619L15.7852 18.0156C15.5814 17.1193 14.8807 16.4186 13.9844 16.2148L13.0371 16L13.9844 15.7852C14.8807 15.5814 15.5813 14.8807 15.7852 13.9844L16 13.0371L16.2148 13.9844Z" fill="#FF52EC" stroke="#FF52EC" strokeWidth="1.35" strokeLinecap="round"/>
              <path d="M17 2V6" stroke="#FFB200" strokeWidth="1.35" strokeLinecap="round"/>
              <path d="M15 4H19" stroke="#FFB200" strokeWidth="1.35" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Body Section */}
      <div 
        className="absolute w-[390px] left-0 bg-white rounded-t-[20px] flex flex-col gap-[30px] p-5"
        style={{ top: '270px', height: '510px' }}
      >
        {/* Top Practice Section */}
        <div className="flex flex-col gap-3">
          <h2 
            style={{ 
              fontFamily: 'SF Pro', 
              fontSize: '14px', 
              fontWeight: 590, 
              lineHeight: '135%',
              color: 'rgba(0, 0, 0, 0.9)' 
            }}
          >
            Top Practice
          </h2>

          {/* Feature Cards */}
          <div className="flex gap-4">
            {/* Generate CV Card */}
            <div className="w-[167px] h-[162px] bg-[#7B1017] rounded-2xl px-4 py-4 flex flex-col gap-2">
              <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.0811 0.00144998C16.4988 0.00221892 19.7763 1.36942 22.1927 3.80236C24.6091 6.23531 25.9666 9.53476 25.9666 12.9751V25.9458H13.0811C11.3725 25.9715 9.67595 25.655 8.09004 25.0146C6.50414 24.3742 5.06056 23.4228 3.8433 22.2157C2.62604 21.0086 1.65939 19.5698 0.999588 17.9832C0.339785 16.3965 0 14.6937 0 12.9736C0 11.2536 0.339785 9.55071 0.999588 7.96407C1.65939 6.37743 2.62604 4.9387 3.8433 3.73157C5.06056 2.52444 6.50414 1.57302 8.09004 0.932644C9.67595 0.292272 11.3725 -0.0242644 13.0811 0.00144998ZM13.0811 32.0527H25.9666V45.0235C25.9672 47.5897 25.2117 50.0984 23.7957 52.2323C22.3797 54.3663 20.3669 56.0296 18.0117 57.0119C15.6565 57.9942 13.0649 58.2514 10.5645 57.7509C8.06413 57.2504 5.76737 56.0147 3.96472 54.2001C2.16207 52.3855 0.934515 50.0736 0.437305 47.5567C-0.0599043 45.0398 0.195572 42.431 1.17142 40.0602C2.14727 37.6895 3.79965 35.6633 5.91958 34.238C8.03951 32.8126 10.5317 32.0522 13.0811 32.0527ZM44.9189 0.00144998C46.6275 -0.0242644 48.3241 0.292272 49.91 0.932644C51.4959 1.57302 52.9394 2.52444 54.1567 3.73157C55.374 4.9387 56.3406 6.37743 57.0004 7.96407C57.6602 9.55071 58 11.2536 58 12.9736C58 14.6937 57.6602 16.3965 57.0004 17.9832C56.3406 19.5698 55.374 21.0086 54.1567 22.2157C52.9394 23.4228 51.4959 24.3742 49.91 25.0146C48.3241 25.655 46.6275 25.9715 44.9189 25.9458H32.0334V12.9751C32.0334 9.53476 33.3909 6.23531 35.8073 3.80236C38.2237 1.36942 41.5012 0.00221894 44.9189 0.00144998ZM32.0334 32.0527H44.9189C47.4683 32.0522 49.9605 32.8126 52.0804 34.238C54.2003 35.6633 55.8527 37.6895 56.8286 40.0602C57.8044 42.431 58.0599 45.0398 57.5627 47.5567C57.0655 50.0736 55.8379 52.3855 54.0353 54.2001C52.2326 56.0147 49.9359 57.2504 47.4355 57.7509C44.9351 58.2514 42.3435 57.9942 39.9883 57.0119C37.6331 56.0296 35.6203 54.3663 34.2043 52.2323C32.7883 50.0984 32.0328 47.5897 32.0334 45.0235V32.0527Z" fill="white"/>
              </svg>
              <span 
                className="text-white"
                style={{ 
                  fontFamily: 'SF Pro', 
                  fontSize: '16px', 
                  fontWeight: 700, 
                  lineHeight: '135%' 
                }}
              >
                Generate CV
              </span>
            </div>

            {/* Chat with AI Card */}
            <div className="flex-1 h-[162px] bg-[#3E5FFF] rounded-2xl px-4 py-4 flex flex-col gap-2">
              <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M34.8 0H23.2V14.9976L12.5951 4.39269L4.39269 12.5951L14.9976 23.2H0V34.8H14.9976L4.39269 45.4047L12.5951 53.6074L23.2 43.0024V58H34.8V43.0024L45.405 53.6074L53.6074 45.405L43.0024 34.8H58V23.2H43.0024L53.6074 12.5951L45.405 4.39266L34.8 14.9976V0Z" fill="white"/>
              </svg>
              <span 
                className="text-white"
                style={{ 
                  fontFamily: 'SF Pro', 
                  fontSize: '16px', 
                  fontWeight: 700, 
                  lineHeight: '135%' 
                }}
              >
                Chat with AI
              </span>
            </div>
          </div>
        </div>

        {/* Recommended For You Section */}
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
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
          </div>

          {/* Practice Scenarios */}
          <div className="flex flex-col gap-4">
            {/* Scenario 1 */}
            <div className="flex gap-3">
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
            </div>

            {/* Scenario 2 */}
            <div className="flex gap-3">
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
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div 
        className="absolute w-[390px] left-0 bg-white rounded-t-[20px] border-t"
        style={{ 
          top: '746px', 
          height: '98px',
          borderColor: 'rgba(0, 0, 0, 0.0784314)' 
        }}
      >
        <div className="flex justify-between items-center px-4 h-16">
          {/* Home - Active */}
          <div className="flex flex-col items-center justify-center gap-1 w-14 h-16 pt-3 pb-0.5">
            <div className="w-[30px] h-[30px] relative">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M15 3L3 12V27H12V18H18V27H27V12L15 3Z" fill="#3E5FFF"/>
              </svg>
            </div>
            <span 
              className="text-[#3E5FFF]"
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
          <div className="relative w-12 h-12">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ 
                background: 'linear-gradient(147.61deg, #FC53EB 32.82%, #FFBF00 68.45%, #62E2F5 104.08%)',
                boxShadow: 'inset 0px 8px 12px rgba(236, 232, 255, 0.56)'
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="10" height="10" rx="2" fill="white"/>
                <rect x="14" y="14" width="8" height="8" rx="2" fill="white"/>
                <circle cx="19" cy="4" r="2" stroke="white" strokeWidth="1.35" fill="none"/>
                <circle cx="17" cy="6" r="1" stroke="white" strokeWidth="1.35" fill="none"/>
              </svg>
            </div>
          </div>

          {/* Notify */}
          <div className="w-14 h-14" />

          {/* Settings */}
          <div className="flex flex-col items-center justify-center gap-1 w-14 h-16 pt-3 pb-0.5">
            <Settings className="w-[30px] h-[30px] text-[#515B70]" strokeWidth={1.5} />
            <span 
              className="text-[#515B70]"
              style={{ 
                fontFamily: 'SF Pro', 
                fontSize: '12px', 
                fontWeight: 510, 
                lineHeight: '130%' 
              }}
            >
              Settings
            </span>
          </div>
        </div>

        {/* Home Indicator */}
        <div className="absolute w-[134px] h-[5px] bg-black rounded-full left-1/2 -translate-x-1/2 bottom-2" />
      </div>

      {/* Notch */}
      <div className="absolute w-[150px] h-[37px] left-[120px] top-0 bg-black rounded-b-[24px]" />
    </div>
  );
}
