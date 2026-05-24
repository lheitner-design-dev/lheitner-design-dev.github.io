import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Liat Heitner",
  description: "Design Systems Architect",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-gray-900 antialiased">
        <header className="border-b border-gray-100">
          <nav className="max-w-4xl mx-auto px-6 py-5 flex items-center justify-between">
            <Link
              href="/"
              className="text-sm font-medium tracking-tight hover:text-gray-500 transition-colors"
            >
              Liat Heitner
            </Link>
            <div className="flex gap-8">
              <Link
                href="/case-studies"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                Case Studies
              </Link>
              <Link
                href="/writing"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                Writing
              </Link>
            </div>
          </nav>
        </header>
        <main className="max-w-4xl mx-auto px-6">{children}</main>
      </body>
    </html>
  );
}
