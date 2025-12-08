// Message types for chat
export interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

// Tag types for voice chat
export interface Tag {
  position: number;
  text: string;
  timestamp: string;
}

// Setup form data
export interface SetupFormData {
  goal: string;
  selectedPerson: string | null;
  date: Date | undefined;
}

// Person type for setup
export interface Person {
  id: string;
  name: string;
  relationship: string;
  avatar?: string;
}

// Demo script step
export interface DemoStep {
  type: "ai" | "user";
  text: string;
  delayBefore: number;
}
