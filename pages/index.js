// pages/index.js
import Image from 'next/image';
import ParticlesContainer from '../components/ParticlesContainer';
import Avatar from '../components/Avatar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Typewriter from 'typewriter-effect';
import ResumeButton from '../components/ResumeButton';


export const Bio = {
  name: 'ThavinduU',
  roles: ['Full Stack Developer', 'Cloud Enthusiast', 'Savvy Tech Nerd'],
};

const Home = () => {
  return (
    <div className="bg-primary/60 h-full flex flex-col min-h-screen">
      {/* Text Section */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* Title */}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            <motion.span
              className="gradient-text"
              variants={fadeIn('up', 1.2)}
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
                    loop: true,
                  }}
                />
              </div>
            </span>
          </motion.h1>
          {/* Subtitle */}
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            I'm Thavindu Liyanage, A final year computer science undergraduate
            at University of Westminster. A tech savvy nerd with passion for web
            development and backend engineering.
          </motion.p>
          {/* Button */}
          <div className="flex justify-center xl:hidden relative">
          </div>
          <ResumeButton /> {/* Add the ResumeButton component */}
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
          variants={fadeIn('up', 1)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
