import type { Metadata } from "next";
import { Roboto, Noto_Sans } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/context/QueryProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const headingFont = Roboto({
  weight: ["400"],
  variable: "--font-heading",
  subsets: ["latin"],
});

const bodyFont = Noto_Sans({
  weight: ["400"],
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
          {children}
          <ToastContainer theme="dark" position="top-center" autoClose={2000} />
        </QueryProvider>
      </body>
    </html>
  );
}
