import React from 'react';
import { motion } from 'motion/react';

import contactme from '/src/assets/images/contactme.webp';
import ContactForm from '../../ContactForm/ContactForm';

const ContactPage = () => {
  return (
    <div className="w-full min-h-screen bg-arthur-beige overflow-hidden px-4 md:px-8 pt-16 sm:pt-24 md:pt-32 flex flex-col md:flex-row md:justify-end">
      {/* Left side - Image */}
      <motion.img
        src={contactme}
        className="absolute bottom-0 left-0 w-[60%] sm:w-[50%] md:w-[45%] lg:w-[50%] h-auto object-contain opacity-80 md:opacity-100"
        alt="Contact me silhouette"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* Right side - Contact Form */}
      <motion.div
        className="w-full md:w-1/2 lg:w-[45%] flex flex-col items-center md:items-start mt-8 md:mt-0 bg-arthur-beige relative z-10 md:ml-auto lg:mr-8 xl:mr-16"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          className="bg-arthur-burgundy text-white p-6 mb-6 w-full max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-hepta mb-2">Send me a message</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="w-full max-w-md bg-white/30 backdrop-blur-sm p-6 rounded-sm"
        >
          <ContactForm />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
