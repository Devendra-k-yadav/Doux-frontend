
import React from 'react'


const Header = () => {
  return (
<section  id='header'  className="min-h-screen flex items-center justify-center border-b-indigo-300 text-gray-900 text-center px-6">
      <div className="max-w-6xl mx-auto px-4">

  <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
{/* left content */}

<div className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          With Knowledge, Passion, Heart & Soul Agencies.
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Nulla metus vel tincidunt sed euismod nibh Quisque volutpat condimentum velit class aptent taciti sociosqu ad litora torquent per conubia nostra.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <a href="#0"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium shadow hover:bg-blue-700 transition">
            Get Started
          </a>
          <a href="#0"
            className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition">
            Learn More
          </a>
        </div>
      </div>
      {/* right content */}
      <div className="flex justify-center lg:justify-end">
        <img src="src/assets/svg/4.svg" alt="Hero Image" className  ="w-full max-w-md lg:max-w-lg"/>
      </div>
  </div>
</div>
    </section>
);

}

export default Header