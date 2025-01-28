// pages/index.js
import Layout from '../components/layout';
import Image from 'next/image';
import Button from '../components/Button';
import TestimonialCard from '../components/TestimonialCard';
import logo from '../public/White_Transparent_MMlogo.png';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen bg-gradient-to-r from-primaryGradient-from to-primaryGradient-to overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-green-900 opacity-60"></div>
        <div className="text-center text-white space-y-8 relative z-10 animate-fadeIn">
          <Image src={logo} alt="Muje Media Logo" width={200} height={200} className="mx-auto animate-pulse" />
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-slideIn">
            Empowering Your Digital Presence
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl max-w-xl mx-auto opacity-90">
            Unlock growth with tailored social media solutions.
          </p>
          <Button
            href="/contact"
            className="px-6 py-3 mt-4 bg-white text-primaryGradient-to font-semibold rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
          >
            Get in Touch
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-10 tracking-tight">Our Services</h2>
          <p className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed">
            We offer a range of services tailored to boost your online visibility and engagement.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Service 1 */}
            <div className="p-8 bg-white shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold text-primaryGradient-to mb-4">Content Creation</h3>
              <p className="text-gray-600 leading-relaxed">
                Captivate your audience with customized post designs, video edits, and compelling visuals.
              </p>
            </div>

            {/* Service 2 */}
            <div className="p-8 bg-white shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold text-primaryGradient-to mb-4">Engagement Activities</h3>
              <p className="text-gray-600 leading-relaxed">
                From Google reviews to influencer partnerships, we connect you with the right audience.
              </p>
            </div>

            {/* Service 3 */}
            <div className="p-8 bg-white shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold text-primaryGradient-to mb-4">ROI-Driven Growth</h3>
              <p className="text-gray-600 leading-relaxed">
                We use AI and the latest trends to create strategies that deliver measurable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-10 tracking-tight">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it—see what our clients have to say about working with us.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <TestimonialCard
              quote="Muje Media has transformed our online presence. Their engagement strategy brought in a flood of new followers and interactions."
              author="John Doe, CEO of Local Biz"
              className="hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            />
            <TestimonialCard
              quote="We saw measurable growth in our business thanks to Muje Media’s dedication and strategic approach."
              author="Jane Smith, Marketing Director of Global Co"
              className="hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primaryGradient-from to-primaryGradient-to text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-green-900 opacity-70"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Ready to Grow Your Brand?</h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Let Muje Media take your digital presence to the next level. Contact us today!
          </p>
          <Button href="/contact" className="px-10 py-4 bg-white text-primaryGradient-to font-semibold rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            Contact Us
          </Button>
        </div>
      </section>
    </Layout>
  );
}
