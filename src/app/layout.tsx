import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { ControlSurface } from "@/components/ControlSurface";
import { TransportNav } from "@/components/TransportNav";
import { KeyboardNav } from "@/components/KeyboardNav";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        <span className="text-[var(--te-orange)] text-lg font-mono font-bold tracking-tight">
          SAM ZOLOTH
        </span>
        <span className="text-[var(--te-mid-gray)] text-xs font-mono">
          PRODUCT MANAGER
        </span>
      </div>

      {/* Navigation */}
      <TransportNav />
    </div>
  );
}

function Footer() {
  return (
    <div className="flex items-center justify-between text-xs font-mono text-[var(--te-light-gray)]">
      <span>2024 — Built with TE Design System</span>
      <div className="flex items-center gap-4">
        <span className="opacity-50">Use arrow keys to navigate</span>
        <a
          href="https://linkedin.com/in/samzoloth"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--te-orange)] transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/szoloth"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--te-orange)] transition-colors"
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
    <html lang="en" className="dark">
      <body className={`${geistMono.variable} antialiased`}>
        <KeyboardNav />
        <ControlSurface header={<Header />} footer={<Footer />}>
          {children}
        </ControlSurface>
      </body>
    </html>
  );
}
