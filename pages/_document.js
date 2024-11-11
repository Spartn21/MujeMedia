// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Muje Media - Empowering brands with tailored social media marketing solutions." />
        <meta property="og:title" content="Muje Media - Social Media Marketing Agency" />
        <meta property="og:description" content="Empowering brands with tailored digital solutions to drive engagement and growth." />
        <meta property="og:image" content="/path/to/social-share-image.png" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
