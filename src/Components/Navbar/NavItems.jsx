import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

// NavLinks component for navigation links
export const NavLinks = ({ className, link, text}) => {
    return (
        <div >
            <Link to={link} className={className}>{text}</Link>
        </div>
    );
};

// SocialIcons component for social media icons
export const SocialIcons = ({ className, iconSize = 20 }) => {
    return (
        <div className={className}>
            <a href="https://x.com/arthurmaion" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="text-black hover:text-gray-700">
                <FaX size={iconSize} className="sm:w-6 sm:h-6" />
            </a>
            {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-black hover:text-gray-700">
                <FaLinkedin size={iconSize} className="sm:w-6 sm:h-6" />
            </a> */}
            <a href="https://www.instagram.com/arthurmaion?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-black hover:text-gray-700">
                <FaInstagram size={iconSize} className="sm:w-6 sm:h-6" />
            </a>
        </div>
    );
};