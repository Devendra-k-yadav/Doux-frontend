import React from 'react'

const Stats = () => {
  return (
<section id='stats' className="w-screen py-20 ">
     
      {/* Content */}
      <div className="relative container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center text-white">
          
          {/* Item 1 */}
          <div className="space-y-3">
            <span className="text-6xl text-indigo-400"></span>
            <h4 className="text-3xl font-bold text-black">
              <span className="count">168</span>k
            </h4>
            <h6 className="text-gray-300">Happy Clients</h6>
          </div>

          {/* Item 2 */}
          <div className="space-y-3">
            <span className="text-6xl text-pink-400"></span>
            <h4 className="text-3xl font-bold text-black">
              <span className="count">937</span>
            </h4>
            <h6 className="text-gray-300">Projects Completed</h6>
          </div>

          {/* Item 3 */}
          <div className="space-y-3">
            <span className="text-6xl text-green-400"></span>
            <h4 className="text-3xl font-bold text-black">
              <span className="count">438</span>k
            </h4>
            <h6 className="text-gray-300">Files Downloaded</h6>
          </div>

          {/* Item 4 */}
          <div className="space-y-3">
            <span className="text-6xl text-yellow-400"></span>
            <h4 className="text-3xl font-bold text-black">
              <span className="count">46</span>
            </h4>
            <h6 className="text-gray-300">Award Wins</h6>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Stats