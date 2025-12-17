import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider, useLocation, Outlet } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function AnalyticsLayout() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: location.pathname,
        page_location: window.location.href,
      });
    }
  }, [location]);

  return <Outlet />;
}
import { QuickSetupPage } from '../pages/QuickSetupPage';
import { QuickSetup2Page } from '../pages/QuickSetup2Page';
import { QuickSetup3Page } from '../pages/QuickSetup3Page';
import { ReviewPage } from '../pages/ReviewPage';
import { VoiceChatPage } from '../pages/VoiceChatPage';
import { SummaryPage } from '../pages/SummaryPage';
import { PlaybackPage } from '../pages/PlaybackPage';
import { SettingsPage } from '../pages/SettingsPage';
import { AIChatPage } from '../pages/AIChatPage';
import { AssistModesPage } from '../pages/AssistModesPage';
import { CalibrationPage } from '../pages/CalibrationPage';
import { CalibrationSheetPage } from '../pages/CalibrationSheetPage';
import { NudgesDeliveryPage } from '../pages/NudgesDeliveryPage';

const router = createBrowserRouter(
  [
    {
      element: <AnalyticsLayout />,
      children: [
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
        {
          path: '/settings/assist-modes',
          element: <AssistModesPage />,
        },
        {
          path: '/settings/calibration',
          element: <CalibrationPage />,
        },
        {
          path: '/settings/calibration/sheet',
          element: <CalibrationSheetPage />,
        },
        {
          path: '/settings/nudges-delivery',
          element: <NudgesDeliveryPage />,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
