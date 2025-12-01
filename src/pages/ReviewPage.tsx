import { useNavigate } from 'react-router-dom';
import { PostSimMicroReview } from '../components/PostSimMicroReview';

export function ReviewPage() {
  const navigate = useNavigate();

  return (
    <PostSimMicroReview
      onClose={() => navigate('/')}
      onBack={() => navigate('/setup/details')}
      onStartPractice={() => navigate('/chat')}
      onWatchVideo={() => navigate('/chat/demo')}
    />
  );
}
