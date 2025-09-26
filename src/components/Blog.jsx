import React from 'react'

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-gray-100" >
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-xl text-blue-400 uppercase font-semibold">Our Blog</p>
        <h4 className="text-4xl font-bold text-gray-800">Latest News</h4>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 max-w-6xl mx-auto px-4 mt-12">
        {/* Blog Item 1 */}
        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden p-5 m-5">
          {/* Image wrapper */}
          <div className="h-52 relative overflow-hidden">
            <img
              src="/images/blog/1.jpg"
              alt="blog1"
              className="w-full h-full object-cover transform transition duration-500 ease-in-out hover:scale-110"
            />
            {/* WordPress tag */}
            <div className="absolute bottom-2 right-2">
              <a
                href="#0"
                className="px-2 py-0.5 bg-green-500 text-white rounded text-xs"
              >
                WordPress
              </a>
            </div>
          </div>

          {/* Blog Content */}
          <div className="p-6">
            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-2">
              <a href="#0" className="hover:text-blue-500">By : Admin</a>
              <a href="#0" className="hover:text-blue-500">06 Aug 2017</a>
            </div>
            <h6 className="text-lg font-semibold mb-2">
              <a href="#0" className="hover:text-blue-500">
                48 Best WordPress Themes
              </a>
            </h6>
            <p className="text-gray-600 mb-4">
              Lorem Ipsum is simply dummy text of the printing and type setting
              industry. Lorem Ipsum has been the dummy text ever
            </p>
          </div>
        </div>

        {/* blog 2 */}

        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden p-5 m-5">
          {/* Image wrapper */}
          <div className="h-52 relative overflow-hidden">
            <img
              src="/images/blog/2.jpg"
              alt="blog2"
              className="w-full h-full object-cover transform transition duration-500 ease-in-out hover:scale-110"
            />
            {/* WordPress tag */}
            <div className="absolute bottom-2 right-2">
              <a
                href="#0"
                className="px-2 py-0.5 bg-purple-500 text-white rounded text-xs"
              >
                ThemeForest
              </a>
            </div>
          </div>

          {/* Blog Content */}
          <div className="p-6">
            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-2">
              <a href="#0" className="hover:text-blue-500">By : Admin</a>
              <a href="#0" className="hover:text-blue-500">06 Aug 2017</a>
            </div>
            <h6 className="text-lg font-semibold mb-2">
              <a href="#0" className="hover:text-blue-500">
                48 Best WordPress Themes
              </a>
            </h6>
            <p className="text-gray-600 mb-4">
              Lorem Ipsum is simply dummy text of the printing and type setting
              industry. Lorem Ipsum has been the dummy text ever
            </p>
          </div>
        </div>

        {/* blog 3 */}

        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden p-5 m-5">
          {/* Image wrapper */}
          <div className="h-52 relative overflow-hidden">
            <img
              src="/images/blog/3.jpg"
              alt="blog3"
              className="w-full h-full object-cover transform transition duration-500 ease-in-out hover:scale-110"
            />
            {/* WordPress tag */}
            <div className="absolute bottom-2 right-2">
              <a
                href="#0"
                className="px-2 py-0.5 bg-orange-500 text-white rounded text-xs"
              >
                Envato
              </a>
            </div>
          </div>

          {/* Blog Content */}
          <div className="p-6">
            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-2">
              <a href="#0" className="hover:text-blue-500">By : Admin</a>
              <a href="#0" className="hover:text-blue-500">06 Aug 2017</a>
            </div>
            <h6 className="text-lg font-semibold mb-2">
              <a href="#0" className="hover:text-blue-500">
                48 Best WordPress Themes
              </a>
            </h6>
            <p className="text-gray-600 mb-4">
              Lorem Ipsum is simply dummy text of the printing and type setting
              industry. Lorem Ipsum has been the dummy text ever
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
