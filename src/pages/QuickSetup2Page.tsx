import { useNavigate } from 'react-router-dom';
import { QuickSetup2 } from '../components/QuickSetup2';

export function QuickSetup2Page() {
  const navigate = useNavigate();

  return (
    <QuickSetup2
      onClose={() => navigate('/')}
      onBack={() => navigate('/setup')}
      onNext={() => navigate('/review')}
      onAdvancedSetup={() => navigate('/setup/advanced')}
    />
  );
}
