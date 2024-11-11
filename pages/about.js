// pages/about.js
import Layout from '../components/layout';
import Link from 'next/link';


export default function About() {
  return (
    <Layout>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">About Us</h2>
          <p className="text-lg text-gray-600 mb-12">
            Muje Media is a social media marketing agency based in Uganda, dedicated to boosting brand presence, engagement, and visibility across digital platforms.
          </p>

          {/* Our Mission Section */}
          <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
            <h3 className="text-3xl font-semibold text-primaryGradient-to">Our Mission</h3>
            <p className="mt-4 text-gray-700">
              At Muje Media, our mission is simple yet powerful: to empower brands with tailored digital solutions that foster meaningful engagement and drive growth. We work closely with our clients to understand their goals and craft strategies that resonate with their audience.
            </p>
          </div>

          {/* Our Approach Section */}
          <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
            <h3 className="text-3xl font-semibold text-primaryGradient-to">Our Approach</h3>
            <p className="mt-4 text-gray-700">
              Our approach is unique. Leveraging the power of an online community called <em>The 100</em>, we boost client engagement and visibility organically. We focus on strategic interactions that enhance the brand's digital footprint, with a dedicated team monitoring and adjusting each strategy to meet evolving needs.
            </p>
          </div>

          {/* Our Values Section */}
          <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
            <h3 className="text-3xl font-semibold text-primaryGradient-to">Our Values</h3>
            <p className="mt-4 text-gray-700">
              Authenticity, consistency, and tangible results are at the core of everything we do. We believe in delivering high-quality, honest work that aligns with our clients' goals and values. We strive to build trust and create meaningful connections between our clients and their audiences.
            </p>
          </div>

          {/* Our Commitment Section */}
          <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
            <h3 className="text-3xl font-semibold text-primaryGradient-to">Our Commitment</h3>
            <p className="mt-4 text-gray-700">
              We are committed to excellence. Our team is dedicated to driving measurable growth by aligning strategies with each client’s brand objectives. Our continuous pursuit of knowledge ensures we stay ahead of industry trends and deliver innovative solutions that exceed expectations.
            </p>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <h4 className="text-2xl font-bold text-gray-800 mb-4">Want to Partner with Us?</h4>
            <p className="text-lg text-gray-600 mb-8">
              Let’s discuss how Muje Media can help your brand achieve its digital marketing goals.
            </p>
            <Link href="/contact" className="px-6 py-3 bg-primaryGradient-from text-white font-semibold rounded-full">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
