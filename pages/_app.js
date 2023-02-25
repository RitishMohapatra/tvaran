import Head from 'next/head';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>TVARAN 2k23</title>
      <meta name="title" content="IGNITE 5.0 | Annual Techfest of STME, NMIMS Navi Mumbai" />
      <meta name="description" content="One in its kind, we are back with the fifth iteration of IGNITE, Find the TECHSTERIOUS MYSTERIES." />
      <meta name="keywords" content="Techfest, technical. festival, nmims, navi mumbai, technology, stme, narsee monjee institute of management studies, school of technology management and engineering, stme" />
      <meta name="robots" content="index, follow" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="1 days" />
      <meta name="author" content="Ritish Mahopatra, Parth Maheshwari - Tech Team |IGNITE 5.0" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
