import React from 'react'

const About = () => {
  return (
    <section id="about" className="bg-gray-900 text-gray-300 pt-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        
        {/* Logo + About */}
        <div>
          <a href="#" className="block mb-4">
            <img src="/images/logo-light.png" alt="logo" className="w-32" />
          </a>
          <p className="text-sm leading-relaxed">
            Nulla metus ullamcorper vel tincidunt sed euismod nibh quisque
            volutpat condimentum velit class aptent taciti sociosqu ad litora
            torquent per conubia nostra.
          </p>
        </div>

        {/* Marketing */}
        <div>
          <h5 className="text-white font-semibold mb-4">Marketing</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="#0" className="hover:text-white">Ad Tech</a></li>
            <li><a href="#0" className="hover:text-white">Email Marketing</a></li>
            <li><a href="#0" className="hover:text-white">Social Media</a></li>
            <li><a href="#0" className="hover:text-white">Mobile Apps</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h5 className="text-white font-semibold mb-4">Company</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="#0" className="hover:text-white">Home</a></li>
            <li><a href="#0" className="hover:text-white">Career</a></li>
            <li><a href="#0" className="hover:text-white">Customers</a></li>
            <li><a href="#0" className="hover:text-white">About Us</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h5 className="text-white font-semibold mb-4">Support</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="#0" className="hover:text-white">Contact Us</a></li>
            <li><a href="#0" className="hover:text-white">Community</a></li>
            <li><a href="#0" className="hover:text-white">FAQ</a></li>
            <li><a href="#0" className="hover:text-white">Login</a></li>
            <li><a href="#0" className="hover:text-white">Sign Up</a></li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h5 className="text-white font-semibold mb-4">Subscribe</h5>
          <form className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Type Your Email"
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-sm text-white focus:outline-none focus:border-indigo-500"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}

export default About