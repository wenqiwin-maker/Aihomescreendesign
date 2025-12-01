import { useNavigate } from 'react-router-dom';
import { QuickSetup3 } from '../components/QuickSetup3';

export function QuickSetup3Page() {
  const navigate = useNavigate();

  return (
    <QuickSetup3
      onClose={() => navigate('/')}
      onBack={() => navigate('/setup/details')}
      onStartPractice={() => navigate('/review')}
    />
  );
}
