'use client';

import { useEffect } from 'react';
import { useThemeStore } from '@/store/useThemeStore';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const theme = useThemeStore((state) => state.theme);

    // WHY: We use useEffect because it only runs on the Client (browser), never on the Server.
    // IMPACT: This completely prevents Hydration Mismatch errors while safely injecting the dark class into the root HTML node.
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
    }, [theme]);

    return <>{children}</>;
}