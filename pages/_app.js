import "../styles/globals.css";
import Head from "next/head";
import Layout from "../components/Layout";
import Transition from "../components/Transition";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Thavindu Liyanage</title>
        <meta
          name="description"
          content="Thavindu Liyanage personal portfolio website"
        />
        <meta property="og:title" content="Thavindu Liyanage" />
        <link rel="icon" type="image/png" href="/avatar.png" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8190718595499930"
          crossorigin="anonymous"></script>
      </Head>

      <Layout>
        <AnimatePresence mode="wait">
          <motion.div key={router.route} className="h-full">
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default MyApp;
