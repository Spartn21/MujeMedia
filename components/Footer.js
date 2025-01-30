// components/Footer.js
import Link from 'next/link';
import Image from 'next/image'; // Import Image from Next.js
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaTiktok } from 'react-icons/fa';
import { PiXBold } from 'react-icons/pi'; // X (formerly Twitter) icon

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center md:flex md:justify-between md:items-center">
        <div className="mb-4 md:mb-0">
          <p>&copy; {new Date().getFullYear()} Muje Media. All rights reserved.</p>
        </div>
        <div className="flex justify-center space-x-6">
          <Link href="/about" className="hover:text-gray-400">About Us</Link>
          <Link href="/services" className="hover:text-gray-400">Services</Link>
          <Link href="/contact" className="hover:text-gray-400">Contact</Link>
        </div>
        {/* Social Icons */}
        <div className="flex justify-center mt-4 md:mt-0 space-x-4">
          <a href="https://facebook.com/profile.php?id=61567338897296" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primaryGradient-to">
            <FaFacebook size={24} />
          </a>
          <a href="https://x.com/MujeMedia/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primaryGradient-to">
            <PiXBold size={24} /> {/* X (Twitter) Icon */}
          </a>
          <a href="https://instagram.com/muje.media/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primaryGradient-to">
            <FaInstagram size={24} />
          </a>
          <a href="https://linkedin.com/company/105382474" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primaryGradient-to">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.youtube.com/@MUJEMedia" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primaryGradient-to">
            <FaYoutube size={24} />
          </a>
          <a href="https://www.tiktok.com/@mujemedia" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primaryGradient-to">
            <FaTiktok size={24} />
          </a>
        </div>
      </div>
      {/* Refrens Invoicing Badge */}
      <div className="flex justify-center mt-6">
        <a href="https://www.refrens.com/en/free-online-invoice-generator">
          <Image src="/refrens.png" alt="Invoicing Powered by Refrens.com" width={150} height={50} />
        </a>
      </div>
    </footer>
  );
}
