import { useNavigate } from 'react-router-dom';
import { NudgesDeliverySettings } from '../components/NudgesDeliverySettings';

export function NudgesDeliveryPage() {
  const navigate = useNavigate();

  return (
    <NudgesDeliverySettings
      onBack={() => navigate('/settings')}
    />
  );
}
