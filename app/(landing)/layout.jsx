'use client';

import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function LandingLayout({ children }) {
  return (
    <div className={`${inter.className} min-h-screen bg-white`}>
      {children}
    </div>
  );
} 