import React from 'react'

const Pricing = () => {
  return (
    <section id='price' className="py-20 bg-gray-100">
      <p className="text-xl text-blue-400 font-semibold ">Pricing Plan</p>
      <h4 className="text-4xl font-bold">Our Offers</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto px-6">
        {/* Pricing Item 1 */}
        <div className="bg-white shadow-md rounded-lg p-6 divide-y divide-gray-200">

          <div className='mb-15 space-y-2'>
            <h5 className="text-xl font-semibold mb-4">Basic</h5>
            <p className="mb-4">
              <span className="text-lg align-top">$</span>
                <span className="text-4xl font-bold">10</span>
                  <span className="text-sm text-gray-500 align-baseline">/ Mo</span>
                </p>
           <p className="text-gray-400 mb-4">Lorem Ipsum is simply text.</p>
          </div>
          <div className='text-gray-600 mb-10 space-y-5'>
             <p >10 GB Disk Space</p>
           <p>15 Domain Names</p>
           <p>Enhanced Security</p>
           <p>Unlimited Support</p>
          </div>
          <a href="#0" className="inline-block border border-blue-500 text-blue-600 py-3 px-6 rounded hover:bg-blue-500 hover:text-white transition">
        Getting Started
      </a>
        </div>

        {/* Pricing Item 2 */}
        <div className="relative bg-white shadow-md rounded-lg p-6 divide-y divide-gray-200">
          <div className="absolute top-6 -left-8 -rotate-45 bg-blue-500 text-white text-xs font-bold text-center py-3 h-[40px] w-[120px] shadow-md rounded-tl-full rounded-br-full">
    BEST VALUE
  </div>
          <div className='mb-15 space-y-2 '>
            <h5 className="text-xl font-semibold mb-4">Standard</h5>
            <p className="mb-4">
           <span className="text-lg align-top">$</span>
           <span className="text-4xl font-bold">30</span>
           <span className="text-sm text-gray-500 align-baseline">/ Mo</span>
           </p>
            <p className="text-gray-400 mb-4">Lorem Ipsum is simply text.</p>
          </div>
          <div className='text-gray-600 mb-10 space-y-5'>
            <p >10 GB Disk Space</p>
           <p>15 Domain Names</p>
           <p>Enhanced Security</p>
           <p>Unlimited Support</p>
          </div>
          <a href="#0" className="inline-block border bg-blue-500 border-blue-500 text-white py-3 px-6 rounded hover:shadow-2xl transition">
        Getting Started
      </a>
        </div>

        {/* Pricing Item 3 */}
        <div className="bg-white shadow-md rounded-lg p-6 divide-y divide-gray-200">
          <div className='mb-15 space-y-2'>
            <h5 className="text-xl font-semibold mb-4">Premium</h5>
          <p className="mb-4">
           <span className="text-lg align-top">$</span>
           <span className="text-4xl font-bold">80</span>
           <span className="text-sm text-gray-500 align-baseline">/ Mo</span>
           </p>
           <p className="text-gray-400 mb-4">Lorem Ipsum is simply text.</p>
          </div>

           <div className='space-y-5 mb-10 text-gray-600'>
             <p >10 GB Disk Space</p>
           <p>15 Domain Names</p>
           <p>Enhanced Security</p>
           <p>Unlimited Support</p>
          </div>
          <a href="#0" className="inline-block border border-blue-500 text-blue-600 py-3 px-6 rounded hover:bg-blue-500 hover:text-white transition">
        Getting Started
      </a>
        </div>
      </div>
    </section>
  )
}

export default Pricing