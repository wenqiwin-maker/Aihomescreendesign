import { useNavigate } from 'react-router-dom';
import { PracticePlayback } from '../components/PracticePlayback';

export function PlaybackPage() {
  const navigate = useNavigate();

  return (
    <PracticePlayback
      onBack={() => navigate('/summary')}
    />
  );
}
