"use client";
// src/components/Navbar.tsx
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-transparent flex justify-between items-center px-8 py-4 z-50">
        <h1 className="text-2xl text-white">My Portfolio</h1>
        <div className="hidden md:flex gap-6 text-white">
          <Link href="/" className="hover:text-yellow-400 text-white">Home</Link>
          <Link href="/project" className="hover:text-yellow-400 text-white">Projects</Link>
          <Link href="/about" className="hover:text-yellow-400 text-white">About</Link>
          <Link href="/contact" className="hover:text-yellow-400 text-white">Contact</Link>
        </div>
        <div
          className="md:hidden flex flex-col justify-around items-center w-8 h-6 cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="block h-1 w-full bg-white"></span>
          <span className="block h-1 w-full bg-white"></span>
          <span className="block h-1 w-full bg-white"></span>
        </div>
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-gray-800 flex flex-col items-center py-4 space-y-2 text-white">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-yellow-400">Home</Link>
            <Link href="/project" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-yellow-400">Projects</Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-yellow-400">About</Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-yellow-400">Contact</Link>
          </div>
        )}
      </nav>
  );
}
