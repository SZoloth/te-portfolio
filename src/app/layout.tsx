import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Device } from "@/components/ko-ii/Device";
import { Screen } from "@/components/ko-ii/Screen";
import { LCDText } from "@/components/ko-ii/LCD";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sam Zoloth | EP-133 Portfolio",
  description: "Product Manager Portfolio",
};

function StatusHeader() {
  return (
    <div className="w-full flex justify-between items-end">
       {/* Left: Mode/Status */}
       <div className="flex flex-col gap-1">
          <div className="flex gap-4">
             <div className="flex items-center gap-1">
               <LCDText text="AVAIL" size="xs" active={false} />
               <div className="w-2 h-2 rounded-full bg-[#00FF84] animate-pulse shadow-[0_0_8px_#00FF84]" />
             </div>
             <div className="flex items-center gap-1">
               <LCDText text="LOC" size="xs" active={false} />
               <LCDText text="DEN" size="xs" active={true} color="white" />
             </div>
          </div>
          <div className="mt-1">
             <LCDText text="SAM.ZOLOTH" size="lg" color="orange" />
             <LCDText text="PROD.MGR" size="xs" color="white" className="opacity-60 block" />
          </div>
       </div>

       {/* Right: EXP / Value */}
       <div className="flex flex-col items-end">
          <div className="flex items-baseline gap-1">
             <LCDText text="EXP" size="xs" active={false} className="mb-1" />
             <LCDText text="12Y" size="xl" color="orange" />
          </div>
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
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#dcdcdc]`}>
        <ThemeProvider>
          <Device>
             <Screen header={<StatusHeader />}>
                {children}
             </Screen>
          </Device>
        </ThemeProvider>
      </body>
    </html>
  );
}