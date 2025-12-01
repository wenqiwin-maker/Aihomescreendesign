import { useState, useEffect, useCallback } from 'react';

/**
 * Timer hook for progress tracking
 * Extracted from VoiceChat.tsx
 */
export function useTimer(totalDuration: number = 120) {
  const [currentTime, setCurrentTime] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setCurrentTime((prev) => {
        if (prev >= totalDuration) {
          clearInterval(interval);
          return totalDuration;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, totalDuration]);

  const pause = useCallback(() => {
    setIsRunning(false);
  }, []);

  const resume = useCallback(() => {
    setIsRunning(true);
  }, []);

  const reset = useCallback(() => {
    setCurrentTime(0);
    setIsRunning(true);
  }, []);

  const seekTo = useCallback((time: number) => {
    setCurrentTime(Math.max(0, Math.min(time, totalDuration)));
  }, [totalDuration]);

  const progress = (currentTime / totalDuration) * 100;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return {
    currentTime,
    setCurrentTime,
    isRunning,
    pause,
    resume,
    reset,
    seekTo,
    progress,
    formattedTime: formatTime(currentTime),
    formattedDuration: formatTime(totalDuration),
  };
}
