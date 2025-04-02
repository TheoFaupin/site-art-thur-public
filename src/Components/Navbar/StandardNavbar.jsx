import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { NavLinks, SocialIcons } from './NavItems';

const StandardNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="w-full fixed top-0 z-50">
            {/* Mobile burger menu */}
            <motion.div
                className="md:hidden flex justify-end p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <button
                    className="text-black bg-white p-2 rounded-sm shadow-sm"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
                </button>
            </motion.div>

            {/* Desktop navbar */}
            <div className="hidden md:flex justify-center pt-4">
                <div className="w-full h-full absolute inset-0 bg-black opacity-50 blur-[100px] z-0" />
                <motion.div
                    className="bg-[#F4F4F4] sm:w-[80%] md:w-[80%] px-4 sm:px-8 h-16 flex items-center shadow-sm rounded-sm relative"
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className="flex justify-between items-center w-full">
                        <div className="flex items-center space-x-12 lg:space-x-16">
                            <NavLinks
                                className="text-black text-base lg:text-xl font-hepta hover:text-gray-700"
                                link="/"
                                text="Home"
                            />

                            <NavLinks
                                className="text-black text-base lg:text-xl font-hepta hover:text-gray-700"
                                link="/about"
                                text="About"
                            />
                            <NavLinks
                                className="text-black text-base lg:text-xl font-hepta hover:text-gray-700"
                                link="/artworks"
                                text="Artworks"
                            />
                            <NavLinks
                                className="text-black text-base lg:text-xl font-hepta hover:text-gray-700"
                                link="/contact"
                                text="Contact"
                            />
                        </div>
                        <SocialIcons className="flex items-center space-x-4 sm:space-x-5" iconSize={18} />
                    </div>
                </motion.div>
            </div>

            {/* Mobile menu dropdown with animation */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="absolute top-16 right-4 w-48 bg-white shadow-md rounded-sm md:hidden"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex flex-col p-4">
                            <NavLinks
                                className="text-black text-xl font-hepta py-2 hover:text-gray-700"
                                link="/"
                                text="Home"
                            />
                            <NavLinks
                                className="text-black text-xl font-hepta py-2 hover:text-gray-700"
                                link="/about"
                                text="About"
                            />
                            <NavLinks
                                className="text-black text-xl font-hepta py-2 hover:text-gray-700"
                                link="/artworks"
                                text="Artworks"
                            />
                            <NavLinks
                                className="text-black text-xl font-hepta py-2 hover:text-gray-700"
                                link="/contact"
                                text="Contact"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default StandardNavbar;