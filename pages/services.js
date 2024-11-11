// pages/services.js
import Layout from '../components/layout';
import Link from 'next/link';

export default function Services() {
  return (
    <Layout>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Services</h2>
          <p className="text-lg text-gray-600 mb-12">
            At Muje Media, we offer a range of specialized services designed to enhance your digital presence and drive real engagement.
          </p>

          {/* Content Creation Service */}
          <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
            <h3 className="text-3xl font-semibold text-primaryGradient-to">Content Creation</h3>
            <p className="mt-4 text-gray-700">
              Captivating content is at the heart of every successful digital strategy. Our team of creative professionals produces custom post designs, video edits, and multimedia assets that capture the essence of your brand. We focus on visually engaging content that connects with your audience and encourages interaction.
            </p>
            <ul className="mt-4 text-gray-600 list-disc list-inside">
              <li>Custom Post Designs</li>
              <li>Video Editing & Production</li>
              <li>Brand Storytelling & Visuals</li>
            </ul>
          </div>

          {/* Engagement Activities Service */}
          <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
            <h3 className="text-3xl font-semibold text-primaryGradient-to">Engagement Activities</h3>
            <p className="mt-4 text-gray-700">
              We understand the power of engagement and community. Through Google reviews, strategic influencer partnerships, and the support of our exclusive online community (*The 100*), we help your brand gain visibility and build authentic connections. Our engagement activities drive meaningful interactions, positioning your brand as a trusted leader in its space.
            </p>
            <ul className="mt-4 text-gray-600 list-disc list-inside">
              <li>Google Reviews & Ratings</li>
              <li>Influencer Partnerships</li>
              <li>Organic Community Engagement</li>
            </ul>
          </div>

          {/* ROI-Driven Growth Service */}
          <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
            <h3 className="text-3xl font-semibold text-primaryGradient-to">ROI-Driven Growth</h3>
            <p className="mt-4 text-gray-700">
              Our strategies are focused on delivering measurable results. By leveraging AI-powered insights and staying up-to-date with the latest trends, we create data-driven strategies that align with your business goals. We focus on building long-term growth for your brand through targeted actions and consistent optimization.
            </p>
            <ul className="mt-4 text-gray-600 list-disc list-inside">
              <li>Data-Driven Strategy</li>
              <li>AI-Powered Insights</li>
              <li>Continuous Performance Optimization</li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <h4 className="text-2xl font-bold text-gray-800 mb-4">Ready to Elevate Your Brand?</h4>
            <p className="text-lg text-gray-600 mb-8">
              Contact us today to discuss how our services can help you achieve your digital marketing goals.
            </p>
            <Link href="/contact" className="px-6 py-3 bg-primaryGradient-from text-white font-semibold rounded-full">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}