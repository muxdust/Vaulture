import type { Metadata } from "next";
import { Roboto, Noto_Sans } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/context/QueryProvider";
import { AppUserProvider } from "@/context/AppContext";

const headingFont = Roboto({
  variable: "--font-heading",
  subsets: ["latin"],
});

const bodyFont = Noto_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vaulture - Store your passwords online",
  description: "Store your passwords online for free",
  keywords: ["password manager", "password storage", "password vault"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} antialiased`}
      >
        <QueryProvider>
          <AppUserProvider>{children}</AppUserProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
