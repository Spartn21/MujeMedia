// components/Footer.js
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center md:flex md:justify-between md:items-center">
        <div className="mb-4 md:mb-0">
          <p>&copy; {new Date().getFullYear()} Muje Media. All rights reserved.</p>
        </div>
        <div className="flex justify-center space-x-6">
          <Link href="/about" className="hover:underline">
            About Us
          </Link>
          <Link href="/services" className="hover:underline">
            Services
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
        <div className="flex justify-center mt-4 md:mt-0 space-x-4">
          <a href="https://facebook.com/profile.php?id=61567338897296" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primaryGradient-to">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com/MujeMedia/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primaryGradient-to">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com/muje.media/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primaryGradient-to">
            <FaInstagram size={24} />
          </a>
          <a href="https://linkedin.com/company/105382474" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primaryGradient-to">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}