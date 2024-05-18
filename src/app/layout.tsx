import type { Metadata } from "next";
import "./globals.css";
import { clashDisplay } from "./fonts";

export const metadata: Metadata = {
  title: "Ntense Car Wraps",
  description:
    "Ntense Wraps: We make your car look amazing! Full and partial commercial wraps, color change wraps, cosmetic paint protection film (PPF), interior/exterior detailing, paint correction, and taillight/headlight tinting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clashDisplay.className}>
      <body className="bg-background text-foreground">{children}</body>
    </html>
  );
}
