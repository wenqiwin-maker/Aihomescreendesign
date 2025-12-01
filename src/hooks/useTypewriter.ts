import { useState, useEffect } from 'react';

/**
 * Typewriter effect hook - displays text character by character
 * Extracted from HomePage.tsx
 */
export function useTypewriter(
  text: string,
  speed: number = 100,
  delay: number = 0
): string {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let index = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const startTyping = () => {
      const intervalId = setInterval(() => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(intervalId);
        }
      }, speed);

      return () => clearInterval(intervalId);
    };

    if (delay > 0) {
      timeoutId = setTimeout(startTyping, delay);
      return () => {
        clearTimeout(timeoutId);
      };
    } else {
      return startTyping();
    }
  }, [text, speed, delay]);

  return displayText;
}

/**
 * Sequential typewriter effect for multiple texts
 * First text completes, then second begins after a delay
 */
export function useSequentialTypewriter(
  texts: string[],
  speeds: number[] = [100, 50],
  delayBetween: number = 0
): string[] {
  const [displayTexts, setDisplayTexts] = useState<string[]>(texts.map(() => ''));

  useEffect(() => {
    let currentTextIndex = 0;
    let charIndex = 0;
    let intervalId: ReturnType<typeof setInterval>;
    let timeoutId: ReturnType<typeof setTimeout>;

    const typeNextChar = () => {
      if (currentTextIndex >= texts.length) {
        clearInterval(intervalId);
        return;
      }

      const currentText = texts[currentTextIndex];
      const currentSpeed = speeds[currentTextIndex] || speeds[0];

      if (charIndex < currentText.length) {
        setDisplayTexts(prev => {
          const newTexts = [...prev];
          newTexts[currentTextIndex] = currentText.slice(0, charIndex + 1);
          return newTexts;
        });
        charIndex++;
      } else {
        // Current text complete, move to next
        clearInterval(intervalId);
        currentTextIndex++;
        charIndex = 0;

        if (currentTextIndex < texts.length) {
          timeoutId = setTimeout(() => {
            const nextSpeed = speeds[currentTextIndex] || speeds[0];
            intervalId = setInterval(typeNextChar, nextSpeed);
          }, delayBetween);
        }
      }
    };

    intervalId = setInterval(typeNextChar, speeds[0]);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [texts.join(''), speeds.join(','), delayBetween]);

  return displayTexts;
}
