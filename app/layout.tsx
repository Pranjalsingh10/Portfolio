import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pranjal Singh | Software Developer",
  description:
    "Portfolio of Pranjal Singh — Software Developer specializing in AI, Machine Learning, Backend Development, and modern web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}