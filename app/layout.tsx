import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const fontSans = Archivo({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "taskmaster",
  description: "Application pour gérer les tâches de vos projets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={cn(fontSans.className, "m-0 p-0 w-full h-full")}>
        {children}
      </body>
    </html>
  );
}
