// pages/about.js
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">About Us</h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Muje Media is a social media marketing agency based in Uganda, dedicated to boosting brand presence, engagement, and visibility across digital platforms.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Our Mission */}
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-primaryGradient-to">Our Mission</h3>
              <p className="mt-4 text-gray-600">
                To empower brands with tailored digital solutions that drive meaningful engagement and growth.
              </p>
            </div>

            {/* Our Approach */}
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-primaryGradient-to">Our Approach</h3>
              <p className="mt-4 text-gray-600">
                We leverage an online community, *The 100*, to enhance client engagement and visibility organically.
              </p>
            </div>

            {/* Our Values */}
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-primaryGradient-to">Our Values</h3>
              <p className="mt-4 text-gray-600">
                Authenticity, consistency, and results are at the core of everything we do for our clients.
              </p>
            </div>

            {/* Our Commitment */}
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-primaryGradient-to">Our Commitment</h3>
              <p className="mt-4 text-gray-600">
                We are committed to delivering measurable growth by aligning our strategies with each client’s brand goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
