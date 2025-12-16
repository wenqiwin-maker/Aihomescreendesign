import type { RelationshipState } from '../stores/useSetupStore';

export interface DialogueMessage {
  type: 'ai' | 'user';
  text: string;
  isLastInSection?: boolean;
}

export interface DialogueSection {
  title: string;
  messages: DialogueMessage[];
}

export interface DemoMessage {
  type: 'ai' | 'user';
  text: string;
  delayBefore: number;
}

// Caption popup scripts (organized by sections)
export const captionScripts: Record<RelationshipState, DialogueSection[]> = {
  cooperative: [
    {
      title: 'Opening–Ask',
      messages: [
        { type: 'ai', text: "I'd love to discuss your promotion timeline. What are you thinking?" },
        { type: 'user', text: "I'd like to apply for promotion from Senior Engineer to Staff Engineer in Q3." },
        { type: 'ai', text: "That sounds like a great goal! Tell me more about why you feel ready." },
      ],
    },
    {
      title: 'Evidence–Why',
      messages: [
        { type: 'ai', text: "Walk me through your key projects—I'm excited to hear about them." },
        { type: 'user', text: 'In the last two quarters, I led the payment system redesign project.' },
        { type: 'ai', text: "That's impressive! What were the results?" },
        { type: 'user', text: 'We reduced transaction failures by 40% and increased throughput by 3x.' },
        { type: 'ai', text: 'Fantastic outcomes! How did you collaborate with other teams?' },
        { type: 'user', text: 'I partnered with X team and supported their launch; I can ask them for feedback.' },
        { type: 'ai', text: 'Great cross-functional work! Tell me about your mentorship.' },
        { type: 'user', text: "I mentored three junior engineers and they've all been promoted." },
        { type: 'ai', text: "That shows real leadership. You've built a strong case.", isLastInSection: true },
      ],
    },
    {
      title: 'Next steps',
      messages: [
        { type: 'ai', text: "Let's map out the path forward. When would you like to submit?" },
        { type: 'user', text: 'By end of this month for Q3 review.' },
        { type: 'ai', text: "Perfect timing! I'll help you prepare the packet and line up peer reviews." },
        { type: 'user', text: "I'll start this week and share a draft for review." },
        { type: 'ai', text: "Sounds great. I'm confident in your readiness—let's make Q3 happen!", isLastInSection: true },
      ],
    },
  ],
  neutral: [
    {
      title: 'Opening–Ask',
      messages: [
        { type: 'ai', text: "I'd like to discuss your promotion timeline. What are you thinking?" },
        { type: 'user', text: "I'd like to apply for promotion from Senior Engineer to Staff Engineer in Q3." },
        { type: 'ai', text: "That sounds like a reasonable goal. Tell me why you think you're ready." },
      ],
    },
    {
      title: 'Evidence–Why',
      messages: [
        { type: 'ai', text: 'Can you walk me through your key projects?' },
        { type: 'user', text: 'In the last two quarters, I led the payment system redesign project.' },
        { type: 'ai', text: 'What were the results?' },
        { type: 'user', text: 'We reduced transaction failures by 40% and increased throughput by 3x.' },
        { type: 'ai', text: 'What about cross-functional impact?' },
        { type: 'user', text: 'I partnered with X team and supported their launch; I can ask them for feedback.' },
        { type: 'ai', text: 'And mentorship or team development?' },
        { type: 'user', text: "I mentored three junior engineers and they've all been promoted." },
        { type: 'ai', text: "That's a solid track record. Let's discuss next steps.", isLastInSection: true },
      ],
    },
    {
      title: 'Next steps',
      messages: [
        { type: 'ai', text: "Let's start with the formal review process. When would you like to submit?" },
        { type: 'user', text: 'By end of this month for Q3 review.' },
        { type: 'ai', text: "That works. You'll need to prepare your packet and get peer reviews." },
        { type: 'user', text: "I'll get started on that this week." },
        { type: 'ai', text: "Good. We'll review your draft together before submission.", isLastInSection: true },
      ],
    },
  ],
  defensive: [
    {
      title: 'Opening–Ask',
      messages: [
        { type: 'ai', text: "We're tight on time. What's the ask?" },
        { type: 'user', text: "I'd like to apply for promotion from Senior Engineer to Staff Engineer in Q3." },
        { type: 'ai', text: "Q3 is soon. Why now—and what's changed since last cycle?" },
      ],
    },
    {
      title: 'Evidence–Why',
      messages: [
        { type: 'ai', text: 'Give me your top project. One minute.' },
        { type: 'user', text: 'In the last two quarters, I led the payment system redesign project.' },
        { type: 'ai', text: 'Results—numbers, not effort.' },
        { type: 'user', text: 'We reduced transaction failures by 40% and increased throughput by 3x.' },
        { type: 'ai', text: 'Good. Who outside the team felt it—and can vouch for you?' },
        { type: 'user', text: 'I partnered with X team and supported their launch; I can ask them for feedback.' },
        { type: 'ai', text: "Mentorship? Influence? Staff isn't just delivery." },
        { type: 'user', text: "I mentored three junior engineers and they've all been promoted." },
        { type: 'ai', text: "That's helpful, but I still need cross-functional pull and clear scope ownership.", isLastInSection: true },
      ],
    },
    {
      title: 'Next steps',
      messages: [
        { type: 'ai', text: "If you're serious about Q3, when can you submit the packet?" },
        { type: 'user', text: 'By end of this month for Q3 review.' },
        { type: 'ai', text: "Then you need a tight packet and strong peer signals—are you ready to drive that in the next few weeks?" },
        { type: 'user', text: "Yes. I'll start this week and share a draft for review." },
        { type: 'ai', text: "Do that. Bring evidence, reviewers, and a crisp narrative—then we'll decide if Q3 is realistic.", isLastInSection: true },
      ],
    },
  ],
};

// Demo scripts for VoiceChat (flat message list with timing)
export const demoScripts: Record<RelationshipState, DemoMessage[]> = {
  cooperative: [
    { type: 'ai', text: "I'd love to discuss your promotion timeline. What are you thinking?", delayBefore: 800 },
    { type: 'user', text: "I'd like to apply for promotion from Senior Engineer to Staff Engineer in Q3.", delayBefore: 1500 },
    { type: 'ai', text: "That sounds like a great goal! Tell me more about why you feel ready.", delayBefore: 1000 },
    { type: 'user', text: 'In the last two quarters, I led the payment system redesign project.', delayBefore: 2000 },
    { type: 'ai', text: "That's impressive! What were the results?", delayBefore: 1000 },
    { type: 'user', text: 'We reduced transaction failures by 40% and increased throughput by 3x.', delayBefore: 2500 },
    { type: 'ai', text: 'Fantastic outcomes! How did you collaborate with other teams?', delayBefore: 1200 },
    { type: 'user', text: 'I partnered with X team and supported their launch; I can ask them for feedback.', delayBefore: 2000 },
    { type: 'ai', text: 'Great cross-functional work! Tell me about your mentorship.', delayBefore: 1500 },
    { type: 'user', text: "I mentored three junior engineers and they've all been promoted.", delayBefore: 2200 },
    { type: 'ai', text: "That shows real leadership. You've built a strong case.", delayBefore: 1200 },
    { type: 'user', text: 'By end of this month for Q3 review.', delayBefore: 2500 },
    { type: 'ai', text: "Sounds great. I'm confident in your readiness—let's make Q3 happen!", delayBefore: 1500 },
  ],
  neutral: [
    { type: 'ai', text: "I'd like to discuss your promotion timeline. What are you thinking?", delayBefore: 800 },
    { type: 'user', text: "I'd like to apply for promotion from Senior Engineer to Staff Engineer in Q3.", delayBefore: 1500 },
    { type: 'ai', text: "That sounds like a reasonable goal. Tell me why you think you're ready.", delayBefore: 1000 },
    { type: 'user', text: 'In the last two quarters, I led the payment system redesign project.', delayBefore: 2000 },
    { type: 'ai', text: 'What were the results?', delayBefore: 1000 },
    { type: 'user', text: 'We reduced transaction failures by 40% and increased throughput by 3x.', delayBefore: 2500 },
    { type: 'ai', text: 'What about cross-functional impact?', delayBefore: 1200 },
    { type: 'user', text: 'I partnered with X team and supported their launch; I can ask them for feedback.', delayBefore: 2000 },
    { type: 'ai', text: 'And mentorship or team development?', delayBefore: 1500 },
    { type: 'user', text: "I mentored three junior engineers and they've all been promoted.", delayBefore: 2200 },
    { type: 'ai', text: "That's a solid track record. Let's discuss next steps.", delayBefore: 1200 },
    { type: 'user', text: 'By end of this month for Q3 review.', delayBefore: 2500 },
    { type: 'ai', text: "Good. We'll review your draft together before submission.", delayBefore: 1500 },
  ],
  defensive: [
    { type: 'ai', text: "We're tight on time. What's the ask?", delayBefore: 800 },
    { type: 'user', text: "I'd like to apply for promotion from Senior Engineer to Staff Engineer in Q3.", delayBefore: 1500 },
    { type: 'ai', text: "Q3 is soon. Why now—and what's changed since last cycle?", delayBefore: 1000 },
    { type: 'user', text: 'In the last two quarters, I led the payment system redesign project.', delayBefore: 2000 },
    { type: 'ai', text: 'Results—numbers, not effort.', delayBefore: 1000 },
    { type: 'user', text: 'We reduced transaction failures by 40% and increased throughput by 3x.', delayBefore: 2500 },
    { type: 'ai', text: 'Good. Who outside the team felt it—and can vouch for you?', delayBefore: 1200 },
    { type: 'user', text: 'I partnered with X team and supported their launch; I can ask them for feedback.', delayBefore: 2000 },
    { type: 'ai', text: "Mentorship? Influence? Staff isn't just delivery.", delayBefore: 1500 },
    { type: 'user', text: "I mentored three junior engineers and they've all been promoted.", delayBefore: 2200 },
    { type: 'ai', text: "That's helpful, but I still need cross-functional pull and clear scope ownership.", delayBefore: 1200 },
    { type: 'user', text: 'By end of this month for Q3 review.', delayBefore: 2500 },
    { type: 'ai', text: "Do that. Bring evidence, reviewers, and a crisp narrative—then we'll decide if Q3 is realistic.", delayBefore: 1500 },
  ],
};
