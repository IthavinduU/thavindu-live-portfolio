import '../styles/globals.css';
import Head from 'next/head';

// components
import Layout from '../components/Layout';
import Transition from '../components/Transition';

// router
import { useRouter } from 'next/router';

// framer motion
import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Thavindu Liyanage</title>
        <meta name="description" content="My personal portfolio website" />
        <meta property="og:title" content="Thavindu Liyanage" />
        <link rel="icon" type="image/png" href="/avatar.png" />
      </Head>
      <Layout>
        <AnimatePresence mode='wait'>
          <motion.div key={router.route} className='h-full'>
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
