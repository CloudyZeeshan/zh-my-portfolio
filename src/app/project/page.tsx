"use client";
import React, { useState } from "react";
import Link from "next/link";
import "/src/app/globals.css";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Projects() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Same Navbar as About and Contact pages for consistency */}
      <nav className="fixed top-0 w-full bg-transparent flex justify-between items-center px-8 py-4 z-50">
        <div className="text-white text-2xl">My Portfolio</div>
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

      <section className="flex flex-col items-center justify-center bg-gray-900 py-20 px-6 pt-24">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-blue-500 mb-4">My Projects</h2>
          <p className="text-lg text-gray-300">A collection of my recent works and web development projects.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">

          {/* Project 1 */}
          <Link href="https://count-down-blue-six.vercel.app/" target="_blank">
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer">
              <Image src="/project1.jpg" alt="Countdown Timer" className="w-full h-56 object-cover rounded-lg mb-4" width={300} height={300}/>
              <h3 className="text-2xl text-white font-bold mb-2">Countdown Timer</h3>
              <p className="text-gray-400">Countdown timer for upcoming events.</p>
            </div>
          </Link>

          {/* Project 2 */}
          <Link href="https://todo-list-blond-two.vercel.app/" target="_blank">
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer">
              <Image src="/project2.jpg" alt="Project Three" className="w-full h-56 object-cover rounded-lg mb-4" width={300} height={300}/>
              <h3 className="text-2xl text-white font-bold mb-2">Todo List</h3>
              <p className="text-gray-400"> A simple todo list application.</p>
            </div>
          </Link>

           {/* Project 3 */}
           <Link href="https://tampleate-2.vercel.app/" target="_blank">
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer">
              <Image src="/project3.png" alt="Project four" className="w-full h-56 object-cover rounded-lg mb-4" width={300} height={300}/>
              <h3 className="text-2xl text-white font-bold mb-2">furniture website</h3>
              <p className="text-gray-400">E-Commerce furniture website.</p>
            </div>
          </Link>

           {/* Project 4 */}
           <Link href="https://unitconvertorby-zh.streamlit.app/" target="_blank">
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer">
              <Image src="/project4.png" alt="Project five" className="w-full h-56 object-cover rounded-lg mb-4" width={300} height={300}/>
              <h3 className="text-2xl text-white font-bold mb-2">Unit Convertor</h3>
              <p className="text-gray-400">Unit Convertor Using Python and Streamlit.</p>
            </div>
          </Link>

          {/* Project 5 */}
          <Link href="https://psm-zh-21.streamlit.app/" target="_blank">
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer">
              <Image src="/project5.png" alt="Project six" className="w-full h-56 object-cover rounded-lg mb-4" width={300} height={300}/>
              <h3 className="text-2xl text-white font-bold mb-2">Password Strength Checker</h3>
              <p className="text-gray-400">This checks whether your password is strong or not.</p>
            </div>
          </Link>

           {/* Project 6 */}
           <Link href="https://zh-library.streamlit.app/" target="_blank">
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer">
              <Image src="/project6.png" alt="Project six" className="w-full h-56 object-cover rounded-lg mb-4" width={300} height={300}/>
              <h3 className="text-2xl text-white font-bold mb-2">Personal Library Manager</h3>
              <p className="text-gray-400">You can also add books in it and you can also read books, it also shows how many books you have read or not.</p>
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
