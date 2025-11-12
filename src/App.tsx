import { useState } from 'react';
import { HomePage } from './components/HomePage';
import { QuickSetup } from './components/QuickSetup';
import { QuickSetup2 } from './components/QuickSetup2';
import { QuickSetup3 } from './components/QuickSetup3';
import { PostSimMicroReview } from './components/PostSimMicroReview';
import { VoiceChat } from './components/VoiceChat';
import { SimulationSummary } from './components/SimulationSummary';
import { AnimatePresence } from 'motion/react';

interface Setup2FormData {
  goal: string;
  selectedPerson: string | null;
  date: Date | undefined;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'setup' | 'setup2' | 'setup3' | 'review' | 'voiceChat' | 'summary'>('home');
  const [setup2FormData, setSetup2FormData] = useState<Setup2FormData>({
    goal: '',
    selectedPerson: null,
    date: undefined
  });

  if (currentPage === 'setup') {
    return <QuickSetup onClose={() => setCurrentPage('home')} onNext={() => setCurrentPage('setup2')} />;
  }

  if (currentPage === 'setup2') {
    return (
      <QuickSetup2 
        onClose={() => setCurrentPage('home')} 
        onBack={() => setCurrentPage('setup')} 
        onNext={() => setCurrentPage('review')} 
        onAdvancedSetup={() => setCurrentPage('setup3')}
        initialData={setup2FormData}
        onDataChange={setSetup2FormData}
      />
    );
  }

  if (currentPage === 'setup3') {
    return <QuickSetup3 onClose={() => setCurrentPage('home')} onBack={() => setCurrentPage('setup2')} onStartPractice={() => setCurrentPage('review')} />;
  }

  if (currentPage === 'review') {
    return <PostSimMicroReview onClose={() => setCurrentPage('home')} onStartPractice={() => setCurrentPage('voiceChat')} />;
  }

  if (currentPage === 'voiceChat') {
    return (
      <div className="relative w-[390px] h-[844px] mx-auto overflow-hidden">
        <AnimatePresence mode="wait">
          <VoiceChat onClose={() => setCurrentPage('summary')} />
        </AnimatePresence>
      </div>
    );
  }

  if (currentPage === 'summary') {
    return (
      <div className="relative w-[390px] h-[844px] mx-auto overflow-hidden">
        <AnimatePresence mode="wait">
          <SimulationSummary onClose={() => setCurrentPage('home')} />
        </AnimatePresence>
      </div>
    );
  }

  return <HomePage onStartConversation={() => setCurrentPage('setup')} />;
}
