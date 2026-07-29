import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = 'light' | 'dark';

interface ThemeState {
    theme: Theme;
    toggleTheme: () => void;
}

// CONCEPT: Zustand 'create' makes the global hook. 
// CONCEPT: 'persist' is a middleware that automatically saves our state to localStorage. No manual saving needed!
export const useThemeStore = create<ThemeState>()(
    persist(
        (set) => ({
            theme: 'light',
            toggleTheme: () => set((state) => ({
                theme: state.theme === 'light' ? 'dark' : 'light'
            })),
        }),
        {
            name: 'dashboard-theme', // The key used in localStorage
        }
    )
);