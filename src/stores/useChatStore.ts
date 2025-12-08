import { create } from 'zustand';
import type { Message, Tag } from '../types';

interface ChatState {
  // Messages
  messages: Message[];

  // Tags for timeline
  tags: Tag[];

  // UI state
  isDemo: boolean;
  isVideoOn: boolean;
  isCaptionPopupOpen: boolean;
  isChatPopupOpen: boolean;
  isTagPopupOpen: boolean;
  isTagKeyboardOpen: boolean;
  isUploadPopupOpen: boolean;

  // Tag editing
  currentTagText: string;
  activeTagIndex: number | null;

  // Actions
  addMessage: (message: Message) => void;
  updateMessage: (id: string, text: string) => void;
  setMessages: (messages: Message[]) => void;
  clearMessages: () => void;

  addTag: (tag: Tag) => void;
  updateTag: (index: number, tag: Partial<Tag>) => void;
  setTags: (tags: Tag[]) => void;

  setIsDemo: (isDemo: boolean) => void;
  setIsVideoOn: (isVideoOn: boolean) => void;
  setIsCaptionPopupOpen: (open: boolean) => void;
  setIsChatPopupOpen: (open: boolean) => void;
  setIsTagPopupOpen: (open: boolean) => void;
  setIsTagKeyboardOpen: (open: boolean) => void;
  setIsUploadPopupOpen: (open: boolean) => void;

  setCurrentTagText: (text: string) => void;
  setActiveTagIndex: (index: number | null) => void;

  reset: () => void;
}

const initialState = {
  messages: [] as Message[],
  tags: [] as Tag[],
  isDemo: false,
  isVideoOn: false,
  isCaptionPopupOpen: false,
  isChatPopupOpen: false,
  isTagPopupOpen: false,
  isTagKeyboardOpen: false,
  isUploadPopupOpen: false,
  currentTagText: '',
  activeTagIndex: null as number | null,
};

export const useChatStore = create<ChatState>((set) => ({
  ...initialState,

  addMessage: (message) =>
    set((state) => ({ messages: [...state.messages, message] })),

  updateMessage: (id, text) =>
    set((state) => ({
      messages: state.messages.map((m) =>
        m.id === id ? { ...m, text } : m
      ),
    })),

  setMessages: (messages) => set({ messages }),
  clearMessages: () => set({ messages: [] }),

  addTag: (tag) =>
    set((state) => ({ tags: [...state.tags, tag] })),

  updateTag: (index, tagUpdate) =>
    set((state) => ({
      tags: state.tags.map((t, i) =>
        i === index ? { ...t, ...tagUpdate } : t
      ),
    })),

  setTags: (tags) => set({ tags }),

  setIsDemo: (isDemo) => set({ isDemo }),
  setIsVideoOn: (isVideoOn) => set({ isVideoOn }),
  setIsCaptionPopupOpen: (isCaptionPopupOpen) => set({ isCaptionPopupOpen }),
  setIsChatPopupOpen: (isChatPopupOpen) => set({ isChatPopupOpen }),
  setIsTagPopupOpen: (isTagPopupOpen) => set({ isTagPopupOpen }),
  setIsTagKeyboardOpen: (isTagKeyboardOpen) => set({ isTagKeyboardOpen }),
  setIsUploadPopupOpen: (isUploadPopupOpen) => set({ isUploadPopupOpen }),

  setCurrentTagText: (currentTagText) => set({ currentTagText }),
  setActiveTagIndex: (activeTagIndex) => set({ activeTagIndex }),

  reset: () => set(initialState),
}));
