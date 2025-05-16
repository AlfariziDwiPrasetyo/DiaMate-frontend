'use client';

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const offset = window.scrollY;
    if (offset > 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-20 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md scrolled" : "bg-white/70 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="bg-[#00A8FF] text-white font-bold text-xl w-10 h-10 rounded-md flex items-center justify-center">
            Dia
          </div>
          <span className="ml-2 text-xl font-bold text-[#00A8FF]">DiaMate</span>
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden md:flex items-center space-x-8">
          <li>
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-700 hover:text-[#00A8FF] transition-colors"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("fitur")}
              className="text-gray-700 hover:text-[#00A8FF] transition-colors"
            >
              Fitur
            </button>
          </li>
          <li>
            <Link href="/blog" className="text-gray-700 hover:text-[#00A8FF] transition-colors">
              Blog
            </Link>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("tim")}
              className="text-gray-700 hover:text-[#00A8FF] transition-colors"
            >
              Tim
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("kontak")}
              className="text-gray-700 hover:text-[#00A8FF] transition-colors"
            >
              Kontak
            </button>
          </li>
        </ul>

        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login" className="text-[#00A8FF] font-medium hover:text-[#0086CC] transition-colors">
            Masuk
          </Link>
          <Link href="/signup" className="bg-[#00A8FF] hover:bg-[#0086CC] text-white px-4 py-2 rounded-lg transition-colors">
            Daftar
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute w-full bg-white ${
          mobileMenuOpen ? "max-h-96" : "max-h-0"
        } transition-all duration-300 overflow-hidden shadow-md`}
      >
        <div className="container mx-auto px-4 py-4">
          <ul className="space-y-4">
            <li>
              <button
                onClick={() => scrollToSection("hero")}
                className="w-full text-left py-2 text-gray-700 hover:text-[#00A8FF] transition-colors"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("fitur")}
                className="w-full text-left py-2 text-gray-700 hover:text-[#00A8FF] transition-colors"
              >
                Fitur
              </button>
            </li>
            <li>
              <Link 
                href="/blog" 
                className="block w-full text-left py-2 text-gray-700 hover:text-[#00A8FF] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("tim")}
                className="w-full text-left py-2 text-gray-700 hover:text-[#00A8FF] transition-colors"
              >
                Tim
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("kontak")}
                className="w-full text-left py-2 text-gray-700 hover:text-[#00A8FF] transition-colors"
              >
                Kontak
              </button>
            </li>
            <li className="pt-2 flex flex-col space-y-3">
              <Link 
                href="/login" 
                className="text-[#00A8FF] font-medium hover:text-[#0086CC] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Masuk
              </Link>
              <Link 
                href="/signup" 
                className="bg-[#00A8FF] hover:bg-[#0086CC] text-white px-4 py-2 rounded-lg transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Daftar
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 