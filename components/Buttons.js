// components/ResumeButton.js
import Link from "next/link";
import { motion } from "framer-motion";

const ResumeButton = () => {
  return (
    <div className="flex justify-start items-center space-x-4">
      {/* View Resume Button */}
      <Link
        href="/Thavindu Liyanage CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.button
          className="bg-accent text-white px-6 py-3 rounded-lg shadow-lg font-semibold cursor-pointer"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
            backgroundColor: "#ff5722",
          }}
          whileTap={{ scale: 0.95 }}
        >
          View Resume
        </motion.button>
      </Link>

      {/* Contact Me Button */}
      <Link
        href="/contact"
      >
        <motion.button
          className="bg-accent text-white px-6 py-3 rounded-lg shadow-lg font-semibold cursor-pointer"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
            backgroundColor: "#ff5722",
          }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Me
        </motion.button>
      </Link>
    </div>
  );
};

export default ResumeButton;
