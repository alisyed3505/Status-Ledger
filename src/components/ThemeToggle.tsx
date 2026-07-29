'use client';

import { useEffect, useState } from 'react';
import { useThemeStore } from '@/store/useThemeStore';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
    const { theme, toggleTheme } = useThemeStore();

    // CONCEPT: 'mounted' state ensures we don't render the wrong icon on the server before we know the client's local storage preference.
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    // IMPACT: Returns an invisible box of the exact same size to prevent UI layout shift while loading.
    if (!mounted) return <div className="w-10 h-10" />;

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors hover:bg-gray-300 dark:hover:bg-gray-700"
        >
            {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
        </button>
    );
}