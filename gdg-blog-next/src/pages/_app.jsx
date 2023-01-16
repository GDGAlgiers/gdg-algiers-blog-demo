import Head from "next/head";

import "@styles/globals.css";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";

function Application({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>GDG Blog</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default Application;
