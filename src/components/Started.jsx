import React from 'react'

const Started = () => {

  return (
    <section id='started' className="relative bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/images/bg2.jpg')" }}>
  {/* <!-- Overlay --> */}
  <div className="absolute inset-0 bg-blue-500/60"></div>

  <div className="relative  py-20">
    <div className="max-w-3xl mx-auto text-center px-4">
      <h6 className="text-lg font-medium text-white mb-2">Getting Started</h6>
      <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Make Something Great!</h3>
      <p className="text-white mb-8">
        Nulla metus metus ullamcorper vel tincidunt sed euismod nibh Quisque volutpat condimentum velit class aptent taciti sociosqu ad litora torquent per conubia nostra.
      </p>
      <a href="#0" className="inline-block border border-white text-white py-3 px-6 rounded hover:bg-white hover:text-black transition">
        Getting Started
      </a>
    </div>
  </div>
</section>

  )
}

export default Started