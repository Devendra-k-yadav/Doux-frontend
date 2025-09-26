import React from 'react'
import Slider from "react-slick";
import { FaQuoteRight } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex Smith",
      role: "Envato Customer",
      img: "/images/clients/1.jpg",
      text: "Nulla metus metus ullamcorper vel tincidunt sed euismod nibh Quisque volutpat condimentum velit class aptent taciti sociosqu ad litora.",
    },
    {
      name: "Sam Martin",
      role: "Envato Customer",
      img: "/images/clients/2.jpg",
      text: "Nulla metus metus ullamcorper vel tincidunt sed euismod nibh Quisque volutpat condimentum velit class aptent taciti sociosqu ad litora.",
    },
    {
      name: "Sam Smith",
      role: "Envato Customer",
      img: "/images/clients/3.jpg",
      text: "Nulla metus metus ullamcorper vel tincidunt sed euismod nibh Quisque volutpat condimentum velit class aptent taciti sociosqu ad litora.",
    },
    {
      name: "Alex Martin",
      role: "Envato Customer",
      img: "/images/clients/4.jpg",
      text: "Nulla metus metus ullamcorper vel tincidunt sed euismod nibh Quisque volutpat condimentum velit class aptent taciti sociosqu ad litora.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <section id='testimonials' className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
       {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h6 className="text-blue-500 font-semibold uppercase">What People Say?</h6>
          <h4 className="text-3xl md:text-4xl font-bold text-gray-900">Testimonials</h4>
        </div>

        {/* Testimonials */}

        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <div key={index} className="px-6">
              <div className="bg-white shadow-md rounded-2xl p-8 text-center relative">
                <span className="text-4xl text-blue-500 absolute top-4 right-6">
                  <FaQuoteRight />
                </span>
                <div className="flex flex-col items-center mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-blue-500">
                    <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="mt-4">
                    <h6 className="font-semibold text-lg">{t.name}</h6>
                    <span className="text-gray-500 text-sm">{t.role}</span>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{t.text}"</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
