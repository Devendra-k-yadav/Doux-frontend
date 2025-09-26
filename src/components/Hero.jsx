import React from 'react'
import { TfiDesktop } from "react-icons/tfi";
import { TfiGame } from "react-icons/tfi";
import { TbBrandBitbucket } from "react-icons/tb"

const Hero = () => {

  return (

    <section id='hero'   className="w-screen py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="mb-6">
        <h6 className="text-sm font-semibold text-blue-400">Who we are?</h6>
        <h4 className="text-2xl font-bold text-gray-800">Doux Provides Great Business Solutions.</h4>
        </div>   
         <p className="text-gray-600 text-lg leading-relaxed">
            Nulla metus printing and type setting industry when an unknown printer
            took ullamcorper vel tincidunt sed euismod nibh Quisque volutpat
            condimentum velit class aptent taciti sociosqu ad litora.
          </p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 '>
          <div className='bg-white p-6 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-600  hover:text-white transition'>
            <div className="flex justify-center  ">
              <TfiDesktop className="w-20 h-20 p-6 bg-blue-500 text-white rounded-full" />
            </div>
            <h5 className='text-lg font-bold mb-2'>Web Development</h5>
            <p className='text-gray-600'>Nulla metus metus ullamcorper vel tincidunt sed euismod nibh Quisque volutpat condimentum.</p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-600  hover:text-white transition'>
            <div className="flex justify-center mb-4">
              <TfiGame className="w-20 h-20 p-6 bg-purple-500 text-white rounded-full" />
            </div>
            <h5 className='text-lg font-bold mb-2'>Web & Mobile Design</h5>
            <p className='text-gray-600'>Nulla metus metus ullamcorper vel tincidunt sed euismod nibh Quisque volutpat condimentum.</p>
          </div>
          <div className='bg-white p-6 rounded-lg  hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-600  hover:text-white shadow-md transition'>
            <div className="flex justify-center mb-4">
              <TbBrandBitbucket className="w-20 h-20 p-6 bg-fuchsia-600 rounded-full" />
            </div>
            <h5 className='text-lg font-bold mb-2'>Branding & Logos</h5>
            <p className='text-gray-600'>Nulla metus metus ullamcorper vel tincidunt sed euismod nibh Quisque volutpat condimentum.</p>
          </div>
        </div>
        </div>
    </section>
  )
}

export default Hero