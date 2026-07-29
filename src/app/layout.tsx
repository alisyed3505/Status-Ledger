import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Everything Dashboard",
  description: "Enterprise Full Stack Application",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // We suppress hydration warnings on the HTML tag because our ThemeProvider will intentionally modify it on the client side.
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-white dark:bg-gray-950 text-black dark:text-white transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}