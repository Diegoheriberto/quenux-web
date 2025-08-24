import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quenux",
  description: "Innovación en apps desde Ecuador",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body
        className={`${inter.className} min-h-screen antialiased bg-gradient-to-b from-[#e6f4ff] via-white to-white text-[#0f172a]`}
      >
        {children}
      </body>
    </html>
  );
}
