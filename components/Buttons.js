import Link from "next/link"; // Import the Link component from Next.js for client-side navigation
import { motion } from "framer-motion"; // Import motion from Framer Motion for animations

const ResumeButton = () => {
  return (
    // Container div for the buttons, arranged vertically on small screens and horizontally on larger screens
    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
      {/* View Resume Button */}
      <Link
        href="/Thavindu Liyanage CV.pdf" // Link to the resume PDF
        target="_blank" // Opens the link in a new tab
        rel="noopener noreferrer" // Ensures security by preventing the new page from accessing the window object of the original page
      >
        <motion.button
          // Styling the button with Tailwind CSS classes
          className="bg-accent text-white px-6 py-3 rounded-lg shadow-lg font-semibold cursor-pointer transition-transform duration-300 ease-in-out"
          // Define the hover animation
          whileHover={{
            scale: 1.05, // Slightly increase the size
            boxShadow: "0 10px 20px rgba(0,0,0,0.2)", // Add shadow for a 3D effect
            backgroundColor: "#ff5722" // Change background color on hover
          }}
          // Define the tap animation
          whileTap={{ scale: 0.95 }} // Slightly decrease the size on click
        >
          View Resume
        </motion.button>
      </Link>

      {/* Contact Me Button */}
      <Link href="/contact">
        {" "}
        {/* Link to the contact page */}
        <motion.button
          // Styling the button with the same Tailwind classes as the Resume button for consistency
          className="bg-accent text-white px-6 py-3 rounded-lg shadow-lg font-semibold cursor-pointer transition-transform duration-300 ease-in-out"
          // Define the hover animation
          whileHover={{
            scale: 1.05, // Slightly increase the size
            boxShadow: "0 10px 20px rgba(0,0,0,0.2)", // Add shadow for a 3D effect
            backgroundColor: "#ff5722" // Change background color on hover
          }}
          // Define the tap animation
          whileTap={{ scale: 0.95 }} // Slightly decrease the size on click
        >
          Contact Me
        </motion.button>
      </Link>
    </div>
  );
};

export default ResumeButton;
