import React from 'react';
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import { motion } from 'motion/react';

const SocialSection = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: <FaInstagram size={32} />,
      url: 'https://www.instagram.com/arthurmaion?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      color: '#E1306C'
    },
    {
      name: 'Twitter',
      icon: <FaTwitter size={32} />,
      url: 'https://x.com/arthurmaion',
      color: '#1DA1F2'
    }
  ];

  return (
    <div className="py-16 bg-[#D3CDBF]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-hepta font-semibold text-center mb-12">Follow me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index * 0.1) }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-lg shadow-xl overflow-hidden h-full">
                <div className="h-24 flex items-center justify-center" style={{ backgroundColor: social.color }}>
                  <div className="text-white">
                    {social.icon}
                  </div>
                </div>
                <div className="p-6 text-center bg-[#e6e3db]">
                  <h3 className="text-2xl font-hepta font-semibold mb-2">{social.name}</h3>
                  <p className="text-gray-700">Follow me on {social.name}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SocialSection;
