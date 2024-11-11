import Head from "next/head";
import Articleslider from "../../components/ArticlesSlider";
import Bulb from "../../components/Bulb";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Articles = () => {
  return (
    <>
      <Head>
        <title>Articles By Thavindu</title>
        <meta
          name="description"
          content="Read the latest articles and expand your knowledge on various topics. Knowledge is power!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8190718595499930"
     crossorigin="anonymous"></script>
      </Head>
      <div className="h-full bg-primary/30 py-32 text-center flex items-center">
        <div className="container mx-auto h-full flex flex-col justify-center">
          {/* title */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 mb-8 xl:mb-0"
          >
            Knowledge is <span className="text-accent">Power.</span>
          </motion.h2>
          <p className="py-3">
            Crafting articles from the excitement of my explorations, where
            curiosity meets creativity.
          </p>
          {/* slider */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <Articleslider />
          </motion.div>
        </div>
        <Bulb />
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Articles;
