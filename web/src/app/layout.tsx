import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'GitGraph - Visualize Your Git Repository',
    template: '%s | GitGraph',
  },
  description: 'GitGraph is a web app that allows you to visualize your Git repository as a graph. See your branches, commits, and the entire history of your project in a clear and interactive way.',
  keywords: ['Git Graph', 'Git Visualizer', 'Repository Visualizer', 'Git History Graph', 'Branch Visualizer', 'Git Tree Visualizer', 'Git Commit Graph', 'Git Flow Diagram', 'GitHub Visualizer', 'Visualize Git Repository'],
};

import { ThemeProvider } from "../components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
