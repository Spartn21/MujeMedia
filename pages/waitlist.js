// pages/waitlist.js
import { useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/layout';

export default function Waitlist() {
  useEffect(() => {
    const handleRedirect = () => {
      setTimeout(() => {
        window.location.href = '/'; // Redirect to homepage after 3 seconds
      }, 3000);
    };

    // Listen for form submission using URL change
    const observer = new MutationObserver(() => {
      if (document.querySelector('iframe').contentWindow.location.href.includes('formResponse')) {
        handleRedirect();
      }
    });

    observer.observe(document.querySelector('iframe'), { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <Head>
        <title>Waitlist | Free Photography Campaign</title>
        <meta name="description" content="Join our 6-week free professional photography campaign for businesses. Apply now!" />
      </Head>

      <section className="min-h-screen bg-white py-10 px-6 md:px-12 lg:px-20 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Join the Waitlist</h1>
        <p className="text-lg text-gray-600 mb-6">
          We are offering businesses free professional photography for their social media pages.
          Simply apply to join the waitlist and commit to paying 50,000 UGX to facilitate our photography team.
        </p>

        {/* Embedded Google Form with Auto-Redirect */}
        <div className="overflow-hidden bg-gray-100 p-6 rounded-lg shadow-lg border border-gray-300">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdjKpIhO2x_az3YFPMwI_McMrVLILQn3F25WBUgq6SdrZWw5A/viewform?embedded=true"
            className="w-full h-[90vh] rounded-lg border border-gray-400"
            title="Photography Campaign Waitlist"
          >
            Loading…
          </iframe>
        </div>
      </section>
    </Layout>
  );
}
