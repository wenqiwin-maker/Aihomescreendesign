import { useNavigate } from 'react-router-dom';
import { AssistModesSettings } from '../components/AssistModesSettings';

export function AssistModesPage() {
  const navigate = useNavigate();

  return (
    <AssistModesSettings
      onBack={() => navigate('/settings')}
    />
  );
}




