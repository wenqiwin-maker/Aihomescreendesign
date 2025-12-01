import { useNavigate } from 'react-router-dom';
import { SimulationSummary } from '../components/SimulationSummary';
import { AnimatePresence } from 'motion/react';

export function SummaryPage() {
  const navigate = useNavigate();

  return (
    <div className="relative w-[390px] h-screen mx-auto overflow-hidden">
      <AnimatePresence mode="wait">
        <SimulationSummary
          onClose={() => navigate('/')}
          onPlay={() => navigate('/playback')}
        />
      </AnimatePresence>
    </div>
  );
}
