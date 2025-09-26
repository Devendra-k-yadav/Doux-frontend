import React from "react";
import { FaArrowRight, FaShieldAlt, FaPaintRoller, FaMouse } from "react-icons/fa";

const Features = () => {
  
  return (
    <section id="features" className="py-20 bg-gray-100" >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-20">
        
        {/* Feature 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center justify-center p-4 rounded-full bg-green-500 text-white text-3xl mb-6">
              <FaShieldAlt />
            </span>
            <h4 className="text-2xl md:text-3xl font-bold mb-4">
              Build flexible, design-driven websites with ease.
            </h4>
            <p className="text-gray-600 mb-6">
              Nulla metus metus ullamcorper Lorem Ipsum is simply dummy text of
              the printing and type setting industry when an unknown printer took
              a galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries.
            </p>
            <a
              href="#0"
              className="text-blue-600 font-medium hover:underline inline-flex items-center gap-2"
            >
              Learn More <FaArrowRight />
            </a>
          </div>
          {/* Right Image */}
          <div>
            <img src="/images/svg/1.svg" alt="Feature 1" className="w-full" />
          </div>
        </div>

        {/* Feature 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="order-1 md:order-none">
            <img src="/images/svg/2.svg" alt="Feature 2" className="w-full" />
          </div>
          {/* Right Content */}
          <div>
            <span className="inline-flex items-center justify-center p-4 rounded-full bg-orange-500 text-white text-3xl mb-6">
              <FaPaintRoller />
            </span>
            <h4 className="text-2xl md:text-3xl font-bold mb-4">
              Design and UX that ensures your app will be loved and used.
            </h4>
            <p className="text-gray-600 mb-6">
              Nulla metus metus ullamcorper Lorem Ipsum is simply dummy text of
              the printing and type setting industry when an unknown printer took
              a galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries.
            </p>
            <a
              href="#0"
              className="text-blue-600 font-medium hover:underline inline-flex items-center gap-2"
            >
              Learn More <FaArrowRight />
            </a>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center justify-center p-4 rounded-full bg-purple-500 text-white text-3xl mb-6">
              <FaMouse />
            </span>
            <h4 className="text-2xl md:text-3xl font-bold mb-4">
              Unique, truly responsive and functional websites that impress!
            </h4>
            <p className="text-gray-600 mb-6">
              Nulla metus metus ullamcorper Lorem Ipsum is simply dummy text of
              the printing and type setting industry when an unknown printer took
              a galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries.
            </p>
            <a
              href="#0"
              className="text-blue-600 font-medium hover:underline inline-flex items-center gap-2"
            >
              Learn More <FaArrowRight />
            </a>
          </div>
          {/* Right Image */}
          <div>
            <img src="/images/svg/3.svg" alt="Feature 3" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
