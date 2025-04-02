import React, { useRef, useEffect, useState } from 'react';
import { FaXmark, FaLinkedin, FaInstagram } from 'react-icons/fa6';
import { FaX } from 'react-icons/fa6';

const SocialMediaPopup = ({ onClose }) => {
  const popupRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Animation effect on mount
  useEffect(() => {
    // Small delay to trigger animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        handleClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  // Handle close with animation
  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300); // Match this with the CSS transition duration
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out"
      style={{ opacity: isVisible ? 1 : 0 }}>
      <div
        ref={popupRef}
        className="bg-white rounded-lg p-6 max-w-md w-full mx-4 relative transition-all duration-300 ease-in-out"
        style={{
          transform: isVisible ? 'scale(1)' : 'scale(0.9)',
          opacity: isVisible ? 1 : 0
        }}
      >
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <FaXmark size={24} />
        </button>

        <h3 className="text-2xl font-hepta mb-6 text-center">Follow Me</h3>

        <div className="space-y-4">
          {/* <a
            href="https://linkedin.com/in/arthurmaion"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <FaLinkedin size={24} className="text-[#0077B5]" />
            <span className="ml-3 flex-1">@arthurmaion</span>
            <span className="text-gray-400">→</span>
          </a> */}

          <a
            href="https://x.com/arthurmaion"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <FaX size={24} className="text-black" />
            <span className="ml-3 flex-1">@arthurmaion</span>
            <span className="text-gray-400">→</span>
          </a>

          <a
            href="https://www.instagram.com/arthurmaion?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <FaInstagram size={24} className="text-[#E1306C]" />
            <span className="ml-3 flex-1">@arthurmaion</span>
            <span className="text-gray-400">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaPopup;