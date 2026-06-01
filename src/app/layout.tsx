import type { Metadata } from "next";
import { inter } from "./fonts";
import "./globals.scss";

export const metadata: Metadata = {
  title: "RainFocus Summit",
  description: "RainFocus Summit — Event setup guide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
