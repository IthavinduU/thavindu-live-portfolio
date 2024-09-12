import React from "react";
import { motion } from "framer-motion"; // Importing motion for animations from Framer Motion

// CardView component with destructured props
const CardView = ({
  title,
  content,
  icons,
  degree,
  school,
  year,
  info,
  link
}) => {
  return (
    // Using motion.a for animating the link wrapper
    <motion.a
      href={link} // URL to navigate to when the card is clicked
      target="_blank" // Opens the link in a new tab
      rel="noopener noreferrer" // Prevents the new tab from accessing the original tab's window object
      // Tailwind classes for styling the card
      className="card-view p-4 bg-white/10 border border-white/20 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
      // Animation for hover state (slightly enlarges the card)
      whileHover={{ scale: 1.05 }}
      // Animation for tap (click) state (slightly reduces the card size)
      whileTap={{ scale: 0.95 }}
    >
      {/* Conditional rendering based on whether the card is for a degree or general content */}
      {degree ? (
        <div className="card-content">
          <h3 className="text-lg font-semibold mb-1">{degree}</h3>{" "}
          {/* Degree title */}
          <div className="text-xs mb-1">{school}</div> {/* School name */}
          <div className="text-xs mb-1">{year}</div>{" "}
          {/* Year of graduation or attendance */}
          <div className="text-xs">{info}</div> {/* Additional info */}
        </div>
      ) : (
        <div className="card-content">
          <h3 className="text-lg font-semibold mb-1">{title}</h3>{" "}
          {/* General title */}
          <div className="text-xs mb-1">{content}</div> {/* General content */}
          <div className="text-xs mb-1">{info}</div> {/* Additional info */}
          <div className="flex gap-x-2">
            {" "}
            {/* Flexbox for icons */}
            {icons &&
              icons.map((icon, index) => (
                <div key={index} className="text-xl text-white">
                  {" "}
                  {/* Individual icon */}
                  {icon}
                </div>
              ))}
          </div>
        </div>
      )}
    </motion.a>
  );
};

export default CardView;
