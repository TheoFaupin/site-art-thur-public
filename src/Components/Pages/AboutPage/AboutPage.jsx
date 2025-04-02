import React from 'react';
import { motion } from 'motion/react';
// Import images directly to leverage Vite's optimization
import sketch1 from '/src/assets/images/aboutme_sketch1.webp';
import sketch2 from '/src/assets/images/aboutme_sketch2.webp';
import sketch3 from '/src/assets/images/aboutme_sketch3.webp';
import sketch4 from '/src/assets/images/aboutme_sketch4.webp';

const AboutPage = () => {
  return (
    <div className="relative w-full bg-[#D3CDBF] overflow-hidden px-4 md:px-8 pt-0 sm:pt-22 md:pt-26">
      {/* Title */}
      <motion.h1
        className="text-black text-4xl sm:text-5xl md:text-7xl lg:text-[95px] font-hepta mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        Arthur Maion
      </motion.h1>

      <div className="relative h-[600px] md:h-[700px]">
        {/* Sketch images positioned absolutely */}
        {/* Bottom Left */}
        <motion.img
          src={sketch1}
          alt="Sketch of legs"
          className="absolute left-4 md:left-10 bottom-[-100px] sm:bottom-[-60px] md:bottom-10 w-[25vw] max-w-[120px] md:max-w-[180px] lg:max-w-[200px] h-auto"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* Bottom Right */}
        <motion.img
          src={sketch2}
          alt="Sketch of figure"
          className="absolute right-4 md:right-0 bottom-[-100px] sm:bottom-[-60px] md:bottom-10 w-[35vw] max-w-[200px] md:max-w-[280px] lg:max-w-[360px] h-auto"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* Top Left */}
        <motion.img
          src={sketch3}
          alt="Sketch of torso"
          className="absolute left-4 md:left-10 top-0 w-[140px] md:w-[200px] lg:w-[240px] h-auto"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* Top Right */}
        <motion.img
          src={sketch4}
          alt="Sketch of figure"
          className="absolute right-4 md:right-8 top-0 sm:top-[-50px] md:top-[-200px] lg:top-[-250px] w-[180px] md:w-[250px] lg:w-[300px] h-auto"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* Text boxes in the center */}
        <motion.div
          className="flex flex-col md:flex-row gap-6 md:gap-8 absolute left-1/2 top-[30%] sm:top-[35%] md:top-[20%] transform -translate-x-1/2 w-full max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
        >
          {/* Left column - white text box */}
          <div className="bg-white h-auto p-6 md:p-8 flex-1 opacity-85 md:-translate-y-30 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
            <p className="text-[#2d2a26] font-semibold font-hepta text-sm md:text-xl">
              21-year-old artist Arthur Maion blends his childhood love of anime and manga with a passion for realism, crafting lifelike characters that pulse with emotion. Based in Montpellier, France, he spends his days drawing, gaming.
            </p>
          </div>

          {/* Right column - burgundy text box */}
          <div className="bg-[#49111C] p-6 md:p-8 flex-1 opacity-85 md:translate-y-20 h-auto shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] relative pb-14">
            <p className="text-[#d3cdbf] font-semibold font-hepta text-sm md:text-xl">
              While he dreams of becoming a comic-books drawer, Arthur currently brings ideas to life through Fiverr commissions—whether you crave a nostalgic anime vibe or a bold, detailed portrait.
            </p>
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <span className='text-[#d3cdbf] font-semibold font-hepta text-sm md:text-xl'>"Every line tells a story."</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;