import React from 'react';
import '@fontsource/material-icons';
import { NavLinks, SocialIcons } from './NavItems';

const HeroNavbar = () => {
  return (
    <div className="w-full h-auto py-2 sm:py-4 md:h-[82px] fixed top-0 z-50">
      <div className="w-full h-full absolute inset-0 bg-black opacity-65 blur-[75px] z-0" />

      <div className="w-full px-2 sm:px-4 md:px-5 flex flex-col justify-start items-center relative z-10">
        <div className="w-full relative">
          <div className="w-full h-[0px] border border-[#080000]"></div>
          <div className="w-full py-2 sm:py-4 flex flex-col sm:flex-row justify-between items-center">
            <div className='w-[90%] sm:w-[70%] md:w-[50%] flex justify-evenly items-center'>
            <NavLinks
              className="text-black text-lg sm:text-xl font-normal font-hepta hover:text-gray-700"
              link="/about"
              text="About"
            />
            <NavLinks
              className="text-black text-lg sm:text-xl font-normal font-hepta hover:text-gray-700"
              link="/artworks"
              text="Artworks"
            />
            <NavLinks
              className="text-black text-lg sm:text-xl font-normal font-hepta hover:text-gray-700"
              link="/contact"
              text="Contact Me"
            />
          </div>

          <SocialIcons className="flex space-x-4 sm:space-x-6" iconSize={20} />
        </div>
      </div>
    </div>

    </div >
  );
};

export default HeroNavbar;
