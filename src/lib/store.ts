import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { GeneratedImage, ImageGenerationParams } from '@/types';

interface AppState {
  apiKey: string;
  setApiKey: (key: string) => void;
  history: GeneratedImage[];
  addToHistory: (image: GeneratedImage) => void;
  clearHistory: () => void;
  removeFromHistory: (id: string) => void;
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      apiKey: '',
      setApiKey: (key) => set({ apiKey: key }),
      history: [],
      addToHistory: (image) =>
        set((state) => ({
          history: [image, ...state.history].slice(0, 50), // Keep last 50 images
        })),
      clearHistory: () => set({ history: [] }),
      removeFromHistory: (id) =>
        set((state) => ({
          history: state.history.filter((img) => img.id !== id),
        })),
    }),
    {
      name: 'together-ai-storage',
      partialize: (state) => ({
        apiKey: state.apiKey,
        history: state.history,
      }),
    }
  )
);