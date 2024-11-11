// pages/contact.js
import Layout from '../components/layout';

export default function Contact() {
  return (
    <Layout>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">Contact Us</h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            We'd love to hear from you! Fill out the form below to get in touch with our team and discuss how we can help you achieve your digital marketing goals.
          </p>

          {/* Contact Form */}
          <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8">
            <form>
              {/* Name Field */}
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primaryGradient-to"
                  placeholder="Your name"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primaryGradient-to"
                  placeholder="Your email address"
                  required
                />
              </div>

              {/* Subject Field */}
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primaryGradient-to"
                  placeholder="Subject of your message"
                  required
                />
              </div>

              {/* Message Field */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primaryGradient-to"
                  rows="5"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-primaryGradient-from text-white font-semibold rounded-full hover:bg-primaryGradient-to transition duration-200"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Additional Contact Information */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Other Ways to Reach Us</h3>
            <p className="text-lg text-gray-600 mb-4">
              You can also reach out to us directly via email or phone.
            </p>
            <p className="text-lg text-gray-800">
              Email: <a href="mailto:mujemedia@gmail.com" className="text-primaryGradient-to">mujemedia@gmail.com</a>
            </p>
            <p className="text-lg text-gray-800">
              Phone: <a href="tel:+256759652244" className="text-primaryGradient-to">+256 759 652 244</a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
