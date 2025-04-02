import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import SocialMediaPopup from '../../SocialMediaPopup/SocialMediaPopup';

// Import images directly to leverage Vite's optimization
import artworkPlage from '/src/assets/images/artwork_plage.webp';
import artworkBroly from '/src/assets/images/artwork_broly.webp';
import artworkChainsawman from '/src/assets/images/artwork_chainsawman.webp';
import artworkIllustration from '/src/assets/images/artwork_illustration.webp';

const ArtworksPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimeoutRef = useRef(null);
  const [showSocials, setShowSocials] = useState(false);

  // Sample artwork data - using imported images
  const artworks = [
    {
      id: 1,
      image: artworkPlage,
      title: '',
      category: '',
    },
    {
      id: 2,
      image: artworkBroly,
      title: '',
      category: '',
    },
    {
      id: 3,
      image: artworkChainsawman,
      title: '',
      category: '',
    },
    {
      id: 4,
      image: artworkIllustration,
      title: '',
      category: '',
    }
  ];

  const pauseAutoAdvance = () => {
    setIsPaused(true);

    // Clear any existing timeout
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }

    // Set a new timeout to resume auto-advance after 10 seconds
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 10000);
  };

  const nextSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === artworks.length - 1 ? 0 : prevIndex + 1
    );
    pauseAutoAdvance();
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? artworks.length - 1 : prevIndex - 1
    );
    pauseAutoAdvance();
  };

  // Handle dot navigation
  const goToSlide = (index) => {
    console.log(index);
    setCurrentIndex(index);
    pauseAutoAdvance();
  };

  // Auto-advance slides every 5 seconds, but only if not paused
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full bg-[#D3CDBF] overflow-hidden px-4 md:px-8 pt-0 sm:pt-18 md:pt-18">
      <motion.h1 
        className="text-black text-4xl sm:text-5xl md:text-7xl lg:text-[95px] font-hepta mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Artworks
      </motion.h1>

      <motion.div 
        className="relative max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        {/* Carousel container */}
        <div className="bg-[#c5bdac] relative h-96 md:h-[600px] overflow-hidden rounded-lg shadow-xl">
          <div
            className="flex transition-transform duration-500 ease-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {artworks.map((artwork, index) => (
              <div
                key={artwork.id}
                className="w-full h-full flex-shrink-0 flex items-center justify-center"
              >
                <div className="relative w-max h-full max-h-[550px] md:max-w-3xl mx-auto">
                  <div className="w-full h-full relative">
                    <img
                      src={artwork.image}
                      alt={`Artwork ${index + 1}`}
                      className="w-full h-full object-contain relative z-10"
                    />
                    {index === currentIndex && (
                      <div className="w-auto h-auto absolute inset-0 border-4 border-black pointer-events-none z-20" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Preview of previous and next images */}
          <div className="hidden md:block absolute top-1/2 left-16 -translate-y-1/2 w-28 h-28
          opacity-50 hover:opacity-80 transition-opacity z-0 overflow-hidden">
            <img
              src={artworks[(currentIndex - 1 + artworks.length) % artworks.length].image}
              alt="Previous artwork"
              className="w-full h-full object-cover rounded-md shadow-md cursor-pointer"
              onClick={prevSlide}
            />
          </div>

          <div className="hidden md:block absolute top-1/2 right-16 -translate-y-1/2 w-28 h-28 opacity-50 hover:opacity-80 transition-opacity z-0 overflow-hidden">
            <img
              src={artworks[(currentIndex + 1) % artworks.length].image}
              alt="Next artwork"
              className="w-full h-full object-cover rounded-md shadow-md cursor-pointer"
              onClick={nextSlide}
            />
          </div>

          {/* Left/Right Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-gray-800 p-2 rounded-full shadow transition-all z-10"
            aria-label="Previous slide"
          >
            <FaChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-gray-800 p-2 rounded-full shadow transition-all"
            aria-label="Next slide"
          >
            <FaChevronRight size={24} />
          </button>

          {/* Dots navigation */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
            {artworks.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-white scale-125' : 'bg-white/50'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <motion.div 
          className='text-center text-base pt-4'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {'You can follow me on '}
          <span 
            className='text-[#49111c] font-bold underline cursor-pointer'
            onClick={() => setShowSocials(true)}
          >
            my social medias
          </span>
          {' for all the updates.'}
        </motion.div>

        {/* Render the popup component when showSocials is true */}
        {showSocials && <SocialMediaPopup onClose={() => setShowSocials(false)} />}
      </motion.div>
    </div>
  );
}

export default ArtworksPage;
