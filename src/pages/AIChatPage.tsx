import { useNavigate } from 'react-router-dom';
import { AIChat } from '../components/AIChat';

export function AIChatPage() {
  const navigate = useNavigate();

  return (
    <AIChat
      onClose={() => navigate('/')}
      onStartConversation={() => navigate('/setup')}
    />
  );
}
