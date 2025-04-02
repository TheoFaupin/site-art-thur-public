import React from 'react';
import { motion } from "motion/react";
import { FaArrowRight } from 'react-icons/fa';

const TitleCard = ({ text, arrow = false, isClickable = false }) => {
  const textVariants = {
    initial: { y: 0 },
    hover: {
      y: [0, -15, 0, -10, 0, -5, 0],
      transition: {
        duration: 0.8,
        times: [0, 0.2, 0.4, 0.6, 0.8],
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className={`w-full h-full bg-arthur-burgundy flex items-center justify-center ${isClickable ? 'cursor-pointer' : ''
      }`}>
      {isClickable ? (
        <motion.div
          className="flex items-center justify-center text-arthur-beige text-4xl sm:text-5xl md:text-7xl lg:text-[96px] font-hepta font-semibold px-2"
          initial="initial"
          whileHover="hover"
          variants={textVariants}
        >
          {text}
          {arrow && (
            <div className="ml-2 sm:ml-4 md:ml-6">
              <FaArrowRight size={24} className="text-arthur-beige sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
            </div>
          )}
        </motion.div>
      ) : (
        <div className="flex items-center justify-center text-arthur-beige text-4xl sm:text-5xl md:text-7xl lg:text-[96px] font-hepta font-semibold px-2">
          {text}
          {arrow && (
            <div className="ml-2 sm:ml-4 md:ml-6">
              <FaArrowRight size={24} className="text-arthur-beige sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TitleCard;
