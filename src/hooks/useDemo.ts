import { useState, useEffect, useRef } from 'react';
import type { Message, DemoStep } from '../types';

// Demo conversation script - PM interview practice
const DEMO_SCRIPT: DemoStep[] = [
  {
    type: "ai",
    text: "Hi there! I noticed you want to practice for a Product Manager role. I can help you prepare for your upcoming interview. Shall we start with a quick introduction?",
    delayBefore: 800,
  },
  {
    type: "user",
    text: "That sounds great. I'm ready to start.",
    delayBefore: 1500,
  },
  {
    type: "ai",
    text: "Excellent. To begin, could you tell me about a time you had to manage conflicting priorities from different stakeholders? This is a common behavioral question.",
    delayBefore: 1000,
  },
  {
    type: "user",
    text: "Sure. In my previous role, I was leading a product launch where Marketing wanted to release early to match an event, but Engineering needed two more weeks for QA.",
    delayBefore: 2000,
  },
  {
    type: "ai",
    text: "That's a classic scenario. How did you approach the situation? Did you facilitate a compromise or prioritize one side?",
    delayBefore: 1000,
  },
  {
    type: "user",
    text: "I organized a meeting with both leads. We agreed to a soft launch for a beta group, satisfying Marketing's need for buzz while giving Engineering time to fix critical bugs.",
    delayBefore: 2500,
  },
  {
    type: "ai",
    text: "That sounds like a solid strategy. Prioritizing data and quality usually wins over stakeholders. Did you face any pushback during the beta phase?",
    delayBefore: 1200,
  },
  {
    type: "user",
    text: "A little, but the data we gathered helped justify the full release timeline to leadership.",
    delayBefore: 2000,
  },
  {
    type: "ai",
    text: "Great example of data-driven decision making. It's important to highlight that impact. Let's move to the next topic: metrics. How do you define success for a new feature?",
    delayBefore: 1500,
  },
  {
    type: "user",
    text: "I usually start with the user problem and map it to business goals. For example, if we want to increase engagement, I'd look at Daily Active Users and retention rates.",
    delayBefore: 2200,
  },
  {
    type: "ai",
    text: "Those are good high-level metrics. Can you give me an example of a 'counter-metric' you would monitor to ensure you aren't hurting the ecosystem?",
    delayBefore: 1200,
  },
  {
    type: "user",
    text: "Definitely. If we're optimizing for clicks, I'd watch out for 'bounce rate' or 'time spent' to ensure we aren't just creating clickbait that users abandon quickly.",
    delayBefore: 2500,
  },
  {
    type: "ai",
    text: "Spot on. Balancing growth with quality is key. You're doing great! Do you want to try a technical system design question next?",
    delayBefore: 1500,
  },
];

/**
 * Demo conversation hook
 * Runs the scripted PM interview conversation with word-by-word AI typing
 * Extracted from VoiceChat.tsx
 */
export function useDemo(isDemo: boolean) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isAiSpeaking, setIsAiSpeaking] = useState(false);
  const isCancelledRef = useRef(false);

  useEffect(() => {
    if (!isDemo) return;

    isCancelledRef.current = false;

    const runScript = async () => {
      for (const step of DEMO_SCRIPT) {
        if (isCancelledRef.current) return;

        await new Promise((r) => setTimeout(r, step.delayBefore));
        if (isCancelledRef.current) return;

        const newMsgId = Date.now().toString() + Math.random().toString();

        if (step.type === "user") {
          setMessages((prev) => [
            ...prev,
            {
              id: newMsgId,
              text: step.text,
              sender: "user",
              timestamp: new Date(),
            },
          ]);
        } else {
          // AI Message - word by word typing
          setMessages((prev) => [
            ...prev,
            {
              id: newMsgId,
              text: "",
              sender: "ai",
              timestamp: new Date(),
            },
          ]);
          setIsAiSpeaking(true);

          const words = step.text.split(" ");
          let currentText = "";
          for (let i = 0; i < words.length; i++) {
            if (isCancelledRef.current) break;
            currentText += (i > 0 ? " " : "") + words[i];

            setMessages((prev) => {
              const newArr = [...prev];
              const lastIdx = newArr.findIndex((m) => m.id === newMsgId);
              if (lastIdx !== -1) {
                newArr[lastIdx] = {
                  ...newArr[lastIdx],
                  text: currentText,
                };
              }
              return newArr;
            });

            await new Promise((r) => setTimeout(r, 100 + Math.random() * 50));
          }
          setIsAiSpeaking(false);
        }
      }
    };

    runScript();

    return () => {
      isCancelledRef.current = true;
    };
  }, [isDemo]);

  const addMessage = (message: Message) => {
    setMessages((prev) => [...prev, message]);
  };

  const clearMessages = () => {
    setMessages([]);
  };

  return {
    messages,
    isAiSpeaking,
    addMessage,
    clearMessages,
    setMessages,
  };
}
