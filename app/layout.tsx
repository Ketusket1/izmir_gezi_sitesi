import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Layers of İzmir: A Structural and Historical Guide",
  description: "A curated web guide categorizing the city of İzmir into three distinct spatial and historical layers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased min-h-screen flex flex-col selection:bg-foreground selection:text-background transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
