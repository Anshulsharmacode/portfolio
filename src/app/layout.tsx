import type { Metadata } from "next";
import { Syne, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";

// Syne for Headlines (Creative/Bold)
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

// Outfit for Body (Clean/Modern)
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anshul Sharma | Software Development Engineer",
  description:
    "Portfolio of Anshul Sharma, a Software Development Engineer with a Biomedical Engineering background, focused on AI and full-stack development.",
  keywords: [
    "Anshul Sharma",
    "Biomedical Engineer",
    "Frontend Developer",
    "Full Stack Developer",
    "Software Development Engineer",
    "React Developer",
    "Next.js Developer",
  ],
  authors: [
    { name: "Anshul Sharma", url: "https://github.com/Anshulsharmacode" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          syne.variable,
          outfit.variable,
          "min-h-screen bg-background font-sans antialiased text-foreground overflow-x-hidden"
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
