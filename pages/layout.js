import Head from 'next/head';
import Link from 'next/link';

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
          <Link href="/">
            <a className="text-2xl font-bold">Muje Media</a>
          </Link>
          <div className="flex space-x-4">
            <Link href="/about">
              <a>About Us</a>
            </Link>
            <Link href="/services">
              <a>Services</a>
            </Link>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </div>
        </nav>
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto text-center">
          &copy; {new Date().getFullYear()} Muje Media. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
