import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";


const Clients = () => {
  const logos = [
    "src/assets/clients-logo/1.png",
    "src/assets/clients-logo/2.png",
    "src/assets/clients-logo/3.png",
    "src/assets/clients-logo/4.png",
    "src/assets/clients-logo/5.png",
    "src/assets/clients-logo/6.png",
    "src/assets/clients-logo/7.png",
    "src/assets/clients-logo/8.png",
  ];

  return (
    <section id="clients" className="clients text-center py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={6}   //  show 6 logos at a time
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="mySwiper"
        >
          {logos.map((logo, i) => (
            <SwiperSlide key={i}>
              <a href="#0">
                <img
                  src={logo}
                  alt={`client ${i + 1}`}
                  className="mx-auto h-12 object-contain grayscale hover:grayscale-0 transition"
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Clients;
