import React from 'react';
import { motion } from "motion/react";
import TitleCard from '../../../TitleCard';

import hero_hand1 from '/src/assets/images/hero-hand1.webp';
import hero_hand2 from '/src/assets/images/hero-hand2.webp';

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-screen bg-arthur-beige overflow-hidden px-4 md:px-8">
      {/* Background Images */}
      <motion.img
        // Top Right Image
        src={hero_hand1}
        className="absolute top-0 right-0 w-[30%] max-w-[431px] h-auto"
        alt="Hand illustration"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <motion.img
        // Bottom Left Image
        src={hero_hand2}
        className="absolute bottom-0 left-0 w-[30%] max-w-[368px] h-auto"
        alt="Hand illustration"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* Title and TitleCard with fade-in after images slide in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        {/* Title */}
        <div className="absolute left-[5%] md:left-[43px] top-[20%] md:top-[199px] text-black text-4xl sm:text-5xl md:text-7xl lg:text-[95px] font-hepta">
          ART'THUR MAION
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 1 }}
      >
        {/* TitleCard Component */}
        <div className="w-full md:w-[550px] lg:w-[747px] h-[150px] md:h-[205px] relative mx-auto md:mx-0 md:float-right mt-[50vh] md:mt-[450px] lg:mt-[656px] md:mr-[5%]">
          <TitleCard text="ARTIST" />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
