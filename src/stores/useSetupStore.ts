import { create } from 'zustand';

export type RelationshipState = 'cooperative' | 'neutral' | 'defensive';

interface SetupState {
  // Step 1: Category
  category: 'work' | 'life' | null;

  // Step 2: Details
  goal: string;
  selectedPerson: string | null;
  date: Date | undefined;

  // Step 3: Advanced - Conversation Dynamics
  relationshipState: RelationshipState;

  // Actions
  setCategory: (category: 'work' | 'life') => void;
  setGoal: (goal: string) => void;
  setSelectedPerson: (person: string | null) => void;
  setDate: (date: Date | undefined) => void;
  setRelationshipState: (state: RelationshipState) => void;
  reset: () => void;
}

const initialState = {
  category: null as 'work' | 'life' | null,
  goal: '',
  selectedPerson: null as string | null,
  date: undefined as Date | undefined,
  relationshipState: 'neutral' as RelationshipState,
};

export const useSetupStore = create<SetupState>((set) => ({
  ...initialState,

  setCategory: (category) => set({ category }),
  setGoal: (goal) => set({ goal }),
  setSelectedPerson: (selectedPerson) => set({ selectedPerson }),
  setDate: (date) => set({ date }),
  setRelationshipState: (relationshipState) => set({ relationshipState }),
  reset: () => set(initialState),
}));
