"use client"; // ✅ This makes it a client component

import dynamic from 'next/dynamic';

// Dynamically import the Portfolio component for client-side only
const Portfolio = dynamic(() => import('@/components/Portfolio'), { ssr: false });

export default function Home() {
  return <Portfolio />;
}
