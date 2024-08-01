import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import Head from "next/head";
import Footer from "../../components/Footer";

const Services = () => {
  return (
    <>
      <Head>
        <title>My Services</title>
        <meta
          name="Services"
          content="Services Provided by Thavindu Liyanage."
        />
      </Head>
      <div className="h-full bg-primary/30 py-36 flex items-center">
        <Circles />
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-x-8">
            {/* text */}
            <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
              <motion.h2
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="text-2xl md:text-4xl xl:text-5xl font-semibold xl:mt-8"
              >
                My services <span className="text-accent">.</span>
              </motion.h2>
              <motion.p
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="mb-4 max-w-[400px] mx-auto lg:mx-0 text-sm md:text-base py-6"
              >
                I offer specialized services designed to exceed your
                expectations. Precision-driven results crafted with affordable,
                transparent pricing and reliable timelines that ensure your
                project is delivered promptly, along with ongoing support
              </motion.p>
            </div>

            {/* slider */}
            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="w-full xl:max-w-[65%]"
            >
              <ServiceSlider />
            </motion.div>
          </div>
        </div>
        <Bulb />
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Services;
