// components/Layout.js
import Head from 'next/head';
import Link from 'next/link';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Muje Media</title>
        <meta name="description" content="Muje Media - Social Media Marketing Agency" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-gradient-to-r from-primaryGradient-from to-primaryGradient-to p-6 text-white">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Muje Media
          </Link>
          <div className="flex space-x-4">
            <Link href="/about">About Us</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>
      </header>
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
