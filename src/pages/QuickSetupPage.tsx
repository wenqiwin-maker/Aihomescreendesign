import { useNavigate } from 'react-router-dom';
import { QuickSetup } from '../components/QuickSetup';

export function QuickSetupPage() {
  const navigate = useNavigate();

  return (
    <QuickSetup
      onClose={() => navigate('/')}
      onNext={() => navigate('/setup/details')}
    />
  );
}
