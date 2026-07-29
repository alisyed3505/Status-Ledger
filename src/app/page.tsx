import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 gap-6">
      <h1 className="text-4xl font-bold tracking-tight">
        The Everything Dashboard
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400">
        Enterprise architecture initialized. Dark mode and global state active.
      </p>

      <div className="flex items-center gap-4 border p-4 rounded-xl dark:border-gray-800 bg-gray-50 dark:bg-gray-900 shadow-sm">
        <span>Test State Management:</span>
        <ThemeToggle />
      </div>
    </main>
  );
}