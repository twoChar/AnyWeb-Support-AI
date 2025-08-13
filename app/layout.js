import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AnyWebSupport AI - AI-Powered Customer Service",
  description: "AI-powered customer service chatbot that scrapes website content and provides intelligent responses using Groq's fast LLM models.",
  keywords: "AI, customer service, chatbot, website support, Groq, LLM",
  authors: [{ name: "Daivya Shah" }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
