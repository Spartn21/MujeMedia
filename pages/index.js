// pages/index.js
import Layout from '../components/layout';
import Image from 'next/image';
import Button from '../components/Button';
import TestimonialCard from '../components/TestimonialCard';
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
          <Button href="/contact" className="px-6 py-3 bg-white text-primaryGradient-to font-semibold rounded-full">
            Get in Touch
          </Button>
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
                Captivate your audience with customized post designs, video edits, and compelling visuals.
              </p>
            </div>

            {/* Service 2 */}
            <div className="p-6 bg-white shadow-lg rounded-lg fade-in-up">
              <h3 className="text-2xl font-semibold text-primaryGradient-to">Engagement Activities</h3>
              <p className="mt-4 text-gray-600">
                From Google reviews to influencer partnerships, we connect you with the right audience.
              </p>
            </div>

            {/* Service 3 */}
            <div className="p-6 bg-white shadow-lg rounded-lg fade-in-up">
              <h3 className="text-2xl font-semibold text-primaryGradient-to">ROI-Driven Growth</h3>
              <p className="mt-4 text-gray-600">
                We use AI and the latest trends to create strategies that deliver measurable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 mb-12">
            Don't just take our word for it—see what our clients have to say about working with us.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="Muje Media has transformed our online presence. Their engagement strategy brought in a flood of new followers and interactions."
              author="John Doe, CEO of Local Biz"
            />
            <TestimonialCard
              quote="We saw measurable growth in our business thanks to Muje Media’s dedication and strategic approach."
              author="Jane Smith, Marketing Director of Global Co"
            />
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primaryGradient-from to-primaryGradient-to text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Grow Your Brand?</h2>
          <p className="text-lg mb-8">
            Let Muje Media take your digital presence to the next level. Contact us today!
          </p>
          <Button href="../contact" className="px-6 py-3 bg-white text-primaryGradient-to font-semibold rounded-full">
            Contact Us
          </Button>
        </div>
      </section>
    </Layout>
  );
}
