import "../styles/globals.css";
import Head from "next/head";
import Layout from "../components/Layout";
import Transition from "../components/Transition";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

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
      </Head>
      <Layout>
        <AnimatePresence mode="wait">
          <motion.div key={router.route} className="h-full">
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
