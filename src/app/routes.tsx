import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { QuickSetupPage } from '../pages/QuickSetupPage';
import { QuickSetup2Page } from '../pages/QuickSetup2Page';
import { QuickSetup3Page } from '../pages/QuickSetup3Page';
import { ReviewPage } from '../pages/ReviewPage';
import { VoiceChatPage } from '../pages/VoiceChatPage';
import { SummaryPage } from '../pages/SummaryPage';
import { PlaybackPage } from '../pages/PlaybackPage';
import { SettingsPage } from '../pages/SettingsPage';
import { AIChatPage } from '../pages/AIChatPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/setup',
    element: <QuickSetupPage />,
  },
  {
    path: '/setup/details',
    element: <QuickSetup2Page />,
  },
  {
    path: '/setup/advanced',
    element: <QuickSetup3Page />,
  },
  {
    path: '/review',
    element: <ReviewPage />,
  },
  {
    path: '/chat',
    element: <VoiceChatPage />,
  },
  {
    path: '/chat/demo',
    element: <VoiceChatPage />,
  },
  {
    path: '/summary',
    element: <SummaryPage />,
  },
  {
    path: '/playback',
    element: <PlaybackPage />,
  },
  {
    path: '/settings',
    element: <SettingsPage />,
  },
  {
    path: '/ai-chat',
    element: <AIChatPage />,
  },
], {
  basename: '/Aihomescreendesign',
});

export function AppRouter() {
  return <RouterProvider router={router} />;
}
