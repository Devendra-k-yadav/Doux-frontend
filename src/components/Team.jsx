import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Team = () => {
  const team = [
    { name: "Alex Smith", role: "UI/UX Designer", img: "/images/team/1.jpg" },
    { name: "Alex Smith", role: "UI/UX Designer", img: "/images/team/2.jpg" },
    { name: "Alex Smith", role: "UI/UX Designer", img: "/images/team/3.jpg" },
    { name: "Alex Smith", role: "UI/UX Designer", img: "/images/team/4.jpg" },
  ];

  const socials = [
    { icon: <FaFacebookF />, color: "text-blue-600" },
    { icon: <FaTwitter />, color: "text-blue-500" },
    { icon: <FaLinkedinIn />, color: "text-blue-700" },
  ];

  return (
    <section id="team" className="py-20 bg-white">
      {/* Section Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h6 className="text-indigo-500 font-semibold uppercase tracking-wide">
          Creative Minds
        </h6>
        <h2 className="text-4xl font-bold">Our Team</h2>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        {team.map((t, i) => (
          <div
            key={i}
            tabIndex={0} // Mobile focusable
            className="group relative bg-gray-50 shadow-md rounded-xl overflow-hidden 
                       hover:shadow-xl focus-within:shadow-xl active:shadow-xl 
                       transition duration-300 transform"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={t.img}
                alt={t.name}
                className="w-full h-64 object-cover transform transition duration-500 ease-in-out
                           group-hover:scale-105 focus-within:scale-105 active:scale-105"
              />

              {/* Social Icons Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/40 flex items-center justify-center gap-3
                              opacity-0 group-hover:opacity-100 focus-within:opacity-100 active:opacity-100
                              transition-all duration-500">
                {socials.map((s, j) => (
                  <a
                    key={j}
                    href="#"
                    className={`w-10 h-10 flex items-center justify-center bg-white ${s.color} rounded-full
                                opacity-0 translate-y-6
                                group-hover:opacity-100 group-hover:translate-y-0
                                focus-within:opacity-100 focus-within:translate-y-0
                                active:opacity-100 active:translate-y-0
                                transform transition-all duration-500`}
                    style={{ transitionDelay: `${j * 150}ms` }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="p-6 text-center">
              <h6 className="text-lg font-semibold">{t.name}</h6>
              <span className="block text-sm text-gray-500 mb-4">{t.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
