import Layout from '../components/Layout';
import Image from 'next/image';
import logo from '../public/White_ExoTransparent_MMlogo.png';

export default function Home() {
  return (
    <Layout>
      <section className="relative flex items-center justify-center h-screen bg-gradient-to-r from-primaryGradient-from to-primaryGradient-to">
        <div className="text-center text-white space-y-8">
          <Image src={logo} alt="Muje Media Logo" width={200} height={200} className="mx-auto" />
          <h1 className="text-5xl font-bold">Empowering Your Digital Presence</h1>
          <p className="text-xl">Unlock growth with tailored social media solutions.</p>
          <a href="/contact" className="px-6 py-3 bg-white text-primaryGradient-to font-semibold rounded-full">
            Get in Touch
          </a>
        </div>
      </section>
    </Layout>
  );
}
