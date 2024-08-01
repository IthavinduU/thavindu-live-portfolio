import { motion } from "framer-motion";

// Define transition variants for smooth animation
const transitionVariants = {
  initial: {
    x: "100%", // Starts off-screen
    width: "100%" // Covers full width initially
  },
  animate: {
    x: "0%", // Moves into view
    width: "0%" // Shrinks to zero width
  },
  exit: {
    x: ["0%", "100%"], // Moves off-screen
    width: ["0%", "100%"] // Expands to full width before leaving
  }
};

const Transition = () => {
  return (
    <>
      {/* Background layer with delay for a smooth transition effect */}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2257]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#3b2d71]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#4b3792]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
      />
    </>
  );
};

export default Transition;
