// pages/404.js
import Layout from '../components/layout';
import Link from 'next/link';

export default function Custom404() {
  return (
    <Layout>
      <section className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-primaryGradient-to mb-4">404</h1>
          <p className="text-xl text-gray-700 mb-6">Oops! The page you're looking for doesn't exist.</p>
          <Link href="/" className="px-6 py-3 bg-primaryGradient-from text-white font-semibold rounded-md">
            Go Back Home
          </Link>
        </div>
      </section>
    </Layout>
  );
}
