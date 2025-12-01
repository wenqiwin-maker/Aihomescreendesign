import { useNavigate, useLocation } from 'react-router-dom';
import { VoiceChat } from '../components/VoiceChat';
import { AnimatePresence } from 'motion/react';
import { Toaster } from '../components/ui/sonner';

export function VoiceChatPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const isDemo = location.pathname === '/chat/demo';

  return (
    <div className="relative w-[390px] h-screen mx-auto overflow-hidden">
      <AnimatePresence mode="wait">
        <VoiceChat
          onClose={() => navigate('/summary')}
          onBack={() => navigate('/review')}
          isDemo={isDemo}
        />
      </AnimatePresence>
      <Toaster position="top-center" />
    </div>
  );
}
