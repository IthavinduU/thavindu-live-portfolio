import React from "react";
import { motion } from "framer-motion";

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
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="card-view p-4 bg-white/10 border border-white/20 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {degree ? (
        <div className="card-content">
          <h3 className="text-lg font-semibold mb-1">{degree}</h3>
          <div className="text-xs mb-1">{school}</div>
          <div className="text-xs mb-1">{year}</div>
          <div className="text-xs">{info}</div>
        </div>
      ) : (
        <div className="card-content">
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <div className="text-xs mb-1">{content}</div>
          <div className="text-xs mb-1">{info}</div>
          <div className="flex gap-x-2">
            {icons &&
              icons.map((icon, index) => (
                <div key={index} className="text-xl text-white">
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
