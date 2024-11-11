// components/TestimonialCard.js

export default function TestimonialCard({ quote, author }) {
    return (
      <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
        <p className="text-gray-700 italic">"{quote}"</p>
        <p className="mt-4 text-primaryGradient-to font-semibold">- {author}</p>
      </div>
    );
  }
  