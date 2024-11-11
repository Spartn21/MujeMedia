// pages/index.js
import Layout from '../components/Layout';
import Image from 'next/image';
import logo from '../public/White_ExoTransparent_MMlogo.png';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
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

      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Services</h2>
          <p className="text-lg text-gray-600 mb-12">
            We offer a range of services tailored to boost your online visibility and engagement.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="p-6 bg-white shadow-lg rounded-lg fade-in-up">
              <h3 className="text-2xl font-semibold text-primaryGradient-to">Content Creation</h3>
              <p className="mt-4 text-gray-600">
                Customized post designs, video edits, and more to captivate your audience.
              </p>
            </div>

            {/* Service 2 */}
            <div className="p-6 bg-white shadow-lg rounded-lg fade-in-up">
              <h3 className="text-2xl font-semibold text-primaryGradient-to">Engagement Activities</h3>
              <p className="mt-4 text-gray-600">
                From Google reviews to influencer partnerships, we help you reach and engage the right audience.
              </p>
            </div>

            {/* Service 3 */}
            <div className="p-6 bg-white shadow-lg rounded-lg fade-in-up">
              <h3 className="text-2xl font-semibold text-primaryGradient-to">ROI-Driven Growth</h3>
              <p className="mt-4 text-gray-600">
                Strategies backed by AI and industry trends to deliver measurable results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
