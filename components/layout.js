// components/Layout.js
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'; // Import Image from next/image
import Footer from './Footer';
import { useState } from 'react'; // For managing the dropdown menu

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Muje Media</title>
        <meta name="description" content="Muje Media - Social Media Marketing Agency" />
        <link rel="icon" href="/favicon.ico" /> {/* Ensure favicon.ico is in the public directory */}
      </Head>
      <header className="bg-gradient-to-r from-primaryGradient-from to-primaryGradient-to p-6 text-white">
        <nav className="container mx-auto flex justify-between items-center">
          {/* Logo and Muje Media clickable link */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/White_Transparent_MMlogo.png" // Ensure this image is in the public directory
              alt="Muje Media Logo"
              width={40}
              height={40}
            />
            <span className="text-2xl font-bold transition-all duration-300 ease-in-out">
              Muje Media
            </span>
          </Link>
          {/* Hamburger Menu for Small Screens */}
          <button
            className="sm:hidden flex items-center text-xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
          {/* Desktop Links */}
          <div className="hidden sm:flex space-x-4">
            <Link
              href="/about"
              className="transition-all duration-300 ease-in-out"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="transition-all duration-300 ease-in-out"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="transition-all duration-300 ease-in-out"
            >
              Contact
            </Link>
          </div>
        </nav>
        {/* Dropdown Menu for Small Screens */}
        {menuOpen && (
          <div className="sm:hidden flex flex-col items-start bg-primaryGradient-to p-4 space-y-4">
            <Link
              href="/about"
              className="block transition-all duration-300 ease-in-out"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="block transition-all duration-300 ease-in-out"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="block transition-all duration-300 ease-in-out"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </header>
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
