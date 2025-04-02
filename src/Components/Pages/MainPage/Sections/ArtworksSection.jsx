import React from 'react';
import { Link } from 'react-router-dom';
import TitleCard from '../../../TitleCard';
import artworkPlage from '/src/assets/images/artwork_plage.webp';
import { motion } from 'motion/react'

const ArtworksSection = () => {
  return (
    <div className="relative w-full h-screen bg-[#D3CDBF] overflow-hidden px-4 md:px-8">
      {/* Artwork image - positioned differently on mobile vs desktop */}
      <div className="sm:absolute sm:left-2 md:left-10 sm:bottom-10 md:bottom-10 w-[80%] sm:w-[45%] md:w-[40%] max-w-[500px] z-10 mx-auto sm:mx-0 mt-20 sm:mt-0">
        <motion.img
          src={artworkPlage}
          className="w-full h-auto rounded-md shadow-lg"
          alt="Featured artwork"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
      <motion.div
        className="relative z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* TitleCard Component */}
        <div className="w-full md:w-[550px] lg:w-[747px] h-[120px] sm:h-[150px] md:h-[205px] relative mx-auto md:mx-0 md:float-right mt-10 sm:mt-[300px] md:mt-[450px] lg:mt-[656px] md:mr-[5%]">
          <div className="text-[#49111C] font-semibold text-base sm:text-lg md:text-xl mb-2 sm:mb-3 text-left">
            Go see the rest of my artworks
          </div>
          <Link to="/artworks" className="block w-full h-full">
            <TitleCard text="ARTWORKS" arrow={true} isClickable={true} />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default ArtworksSection;
