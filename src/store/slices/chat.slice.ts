import { StateCreator } from 'zustand';

export interface WordLimitSlice {
  wordLimit: number;
  setWordLimit: (wordLimit: number) => void;
  audio: Blob | null;
  setAudio: (audio: Blob | null) => void;
  category: Record<string, any> | null;
  setCategory: (category: Record<string, any> | null) => void;
  audioEnabled: boolean;
  setAudioEnabled: (audioEnabled: boolean) => void;
}
export const wordLimitSlice: StateCreator<WordLimitSlice> = (set) => ({
  wordLimit: 50,
  setWordLimit: (wordLimit: number) => {
    set(() => ({ wordLimit }));
  },
  audio: null,
  setAudio: (audio: Blob | null) => {
    set(() => ({ audio }));
  },
  category: null,
  setCategory: (category: Record<string, any> | null) => {
    set(() => ({ category }));
  },
  audioEnabled: true,
  setAudioEnabled: (audioEnabled: boolean) => {
    set(() => ({ audioEnabled }));
  },
});
