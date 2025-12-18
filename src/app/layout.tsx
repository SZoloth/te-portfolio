import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { ControlSurface } from "@/components/ControlSurface";
import { TransportNav } from "@/components/TransportNav";
import { KeyboardNav } from "@/components/KeyboardNav";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Sam Zoloth | Product Manager",
  description: "Product strategist and builder. Portfolio as control surface.",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
};

function Header() {
  return (
    <div className="flex items-center justify-between">
      {/* Logo / Brand */}
      <div className="flex items-center gap-3">
        <span className="text-[var(--accent)] text-lg font-mono font-bold tracking-tight">
          SAM ZOLOTH
        </span>
        <span className="text-[var(--muted)] text-xs font-mono">
          PRODUCT MANAGER
        </span>
      </div>

      {/* Navigation + Theme Switcher */}
      <div className="flex items-center gap-4">
        <TransportNav />
        <ThemeSwitcher />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="flex items-center justify-between text-xs font-mono text-[var(--muted)]">
      <span>2024 — Built with TE Design System</span>
      <div className="flex items-center gap-4">
        <span className="opacity-50">Press T to change theme</span>
        <a
          href="https://linkedin.com/in/samzoloth"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--accent)] transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/szoloth"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--accent)] transition-colors"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}>
        <ThemeProvider>
          <KeyboardNav />
          <ControlSurface header={<Header />} footer={<Footer />}>
            {children}
          </ControlSurface>
        </ThemeProvider>
      </body>
    </html>
  );
}
