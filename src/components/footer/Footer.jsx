import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold">Beer Shop</h2>
          <p>Your one-stop shop for the finest brews!</p>
        </div>
        <div className="flex space-x-4 mb-4">
          <a href="#" className="hover:text-yellow-400">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="hover:text-yellow-400">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="hover:text-yellow-400">
            <FaInstagram size={24} />
          </a>
        </div>
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Beer Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
