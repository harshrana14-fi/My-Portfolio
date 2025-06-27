// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar'; // ✅ Make sure this path is correct

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Harsh Jatoliya - Portfolio',
  description: 'Full Stack Developer & DevOps Engineer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar /> {/* ✅ Properly used */}
        {children}
      </body>
    </html>
  );
}

