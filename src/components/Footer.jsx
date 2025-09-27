import React from 'react'
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaBehance,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer id='footer' className="bg-gray-600 max-w-full mx-auto px-4 py-6 text-left text-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-gray-400">
          © 2018 UI-ThemeZ. All Rights Reserved.
        </p>

        <div className="flex space-x-4 mt-4 md:mt-0">
          {/* Facebook */}
          <a href="#0"
             className="bg-white w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 
                        hover:bg-blue-500 hover:border-blue-500
                        focus:bg-blue-500 focus:border-blue-500
                        active:bg-blue-500 active:border-blue-500
                        transition transform duration-200 ease-out"
          >
            <FaFacebookF />
          </a>

          {/* Twitter */}
          <a href="#0"
             className="bg-white w-10 h-10 flex items-center justify-center rounded-full border border-gray-500
                        hover:bg-blue-400 hover:border-blue-400
                        focus:bg-blue-400 focus:border-blue-400
                        active:bg-blue-400 active:border-blue-400
                        transition transform duration-200 ease-out"
          >
            <FaTwitter />
          </a>

          {/* LinkedIn */}
          <a href="#0"
             className="bg-white w-10 h-10 flex items-center justify-center rounded-full border border-gray-500
                        hover:bg-blue-600 hover:border-blue-600
                        focus:bg-blue-600 focus:border-blue-600
                        active:bg-blue-600 active:border-blue-600
                        transition transform duration-200 ease-out"
          >
            <FaLinkedinIn />
          </a>

          {/* Behance */}
          <a href="#0"
             className="bg-white w-10 h-10 flex items-center justify-center rounded-full border border-gray-500
                        hover:bg-indigo-500 hover:border-indigo-500
                        focus:bg-indigo-500 focus:border-indigo-500
                        active:bg-indigo-500 active:border-indigo-500
                        transition transform duration-200 ease-out"
          >
            <FaBehance />
          </a>

          {/* Instagram */}
          <a href="#0"
             className="bg-white w-10 h-10 flex items-center justify-center rounded-full border border-gray-500
                        hover:bg-pink-500 hover:border-pink-500
                        focus:bg-pink-500 focus:border-pink-500
                        active:bg-pink-500 active:border-pink-500
                        transition transform duration-200 ease-out"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer
