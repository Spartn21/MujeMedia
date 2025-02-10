// pages/january-100-elite.js
import Head from 'next/head';
import Layout from '../components/layout';

export default function January100Elite() {
  return (
    <Layout>
      <Head>
        <title>January 100 Elite Engagement Report | Muje Media</title>
        <meta name="description" content="Engagement report for January's 100 Elite Team at Muje Media." />
      </Head>

      <section className="min-h-screen bg-gray-100 py-10 px-6 md:px-12 lg:px-20 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 animate-fadeIn">
          January 100 Elite Engagement Report | Leaderboard
        </h1>
        <p className="text-lg text-gray-600 mb-8 animate-fadeIn">
          A breakdown of daily engagement athroughout the month of January.
        </p>

        {/* Embed the report */}
        <div className="relative w-full max-w-5xl mx-auto bg-white p-4 md:p-6 rounded-lg shadow-lg border border-gray-300 animate-slideUp">
          <iframe
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQa2UksRnORy-0FOYxXJaOZ2CwgeX4qlc7aPLt6wIupU9P9yj57nB_Lm900m2unZ7cH1ACCfBKg7cxw/pubhtml?gid=1956740339&amp;single=true&amp;widget=true&amp;headers=false"
            className="w-full h-[80vh] md:h-[85vh] rounded-lg border border-gray-400"
            title="January 100 Elite Engagement Report"
          ></iframe>
        </div>
      </section>
    </Layout>
  );
}
