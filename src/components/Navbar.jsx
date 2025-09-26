import React, { useState,useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  //scroll listener
 useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="min-w-screen">
      <nav className={`w-full z-[9999] transition-all duration-300 ${
        isSticky
          ? "fixed top-0 bg-white shadow text-gray-900"
          : "absolute top-0 bg-transparent text-black"
      }`}
    >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-start">
            <img
              src="src/assets/logo-dark.png"
              alt="logo"
              className="h-10 w-auto"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-blue-400 transition">Home</a>
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#features" className="hover:text-blue-400 transition">Features</a>
            <a href="#testimonials" className="hover:text-blue-400 transition">Testimonials</a>
            <a href="#team" className="hover:text-blue-400 transition">Team</a>
            <a href="#price" className="hover:text-blue-400 transition">Price</a>
            <a href="#blog" className="hover:text-blue-400 transition">Blog</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center text-gray-900 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <span className="text-2xl">&times;</span> 
            ) : (
              <span className="text-2xl">&#9776;</span>
            )}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="flex flex-col space-y-4 px-6 py-4">
              <a href="#home" className="hover:text-blue-400 transition">Home</a>
              <a href="#about" className="hover:text-blue-400 transition">About</a>
              <a href="#features" className="hover:text-blue-400 transition">Features</a>
              <a href="#testimonials" className="hover:text-blue-400 transition">Testimonials</a>
              <a href="#team" className="hover:text-blue-400 transition">Team</a>
              <a href="#price" className="hover:text-blue-400 transition">Price</a>
              <a href="#blog" className="hover:text-blue-400 transition">Blog</a>
              <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
            </div>
          </div>
        )}
      </nav>
      <div className="h-16 md:h-16"></div>
    </section>
  );
};

export default Navbar;
