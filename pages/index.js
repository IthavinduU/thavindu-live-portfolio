import ParticlesContainer from "../components/ParticlesContainer";
import Avatar from "../components/Avatar";
import Head from "next/head";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Typewriter from "typewriter-effect";
import ResumeButton from "../components/Buttons";

export const Bio = {
  name: "ThavinduU",
  roles: ["Full Stack Developer", "Cloud Enthusiast", "Savvy Tech Nerd"]
};

const Home = () => {
  return (
    <>
      <Head>
        <title>Thavindu Liyanage</title>
        <meta
          name="description"
          content="Thavindu Liyanage - Full Stack Developer, Cloud Enthusiast, and Savvy Tech Nerd. Explore my projects and professional journey."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8190718595499930"
          crossorigin="anonymous"></script>
      </Head>

      <div className="bg-primary/60 h-full flex flex-col min-h-screen">
        {/* Text Section */}
        <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
          <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
            {/* Title */}
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2"
            >
              <motion.span
                className="gradient-text"
                variants={fadeIn("up", 1.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                Absolute coding at its finest.
              </motion.span>
              <br />
              <span className="text-accent">
                <div className="typewriter-text">
                  <Typewriter
                    options={{
                      strings: Bio.roles,
                      autoStart: true,
                      loop: true
                    }}
                  />
                </div>
              </span>
            </motion.h1>
            {/* Subtitle */}
            <motion.p
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-4 xl:mb-6"
            >
              Relentlessly curious tech enthusiast, igniting innovation in the
              ever-evolving digital landscape, one line of code at a time.
            </motion.p>
            {/* Button */}
            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="block xl:flex xl:justify-start xl:space-x-4"
            >
              <ResumeButton />
            </motion.div>
          </div>
        </div>
        {/* Image Section */}
        <div className="w-[1200px] h-full absolute right-0 bottom-0">
          {/* Background Image */}
          <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
          {/* Particles */}
          <ParticlesContainer />
          {/* Avatar Image */}
          <motion.div
            variants={fadeIn("up", 1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
          >
            <Avatar />
          </motion.div>
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
