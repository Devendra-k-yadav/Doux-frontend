import React from 'react'
import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", subject: "", message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://doux-backend.vercel.app/api/contact", formData);
      alert(res.data.msg);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err) {
      alert("Something went wrong!");
    }
  };

  return (

    <section id="contact" className="py-16 bg-gray-50" >
  <div className="max-w-6xl mx-auto px-4">
  
    <div className="text-center max-w-2xl mx-auto mb-12">
      <h6 className="text-blue-500 uppercase tracking-wide font-semibold">Our Blog</h6>
      <h4 className="text-3xl font-bold text-gray-800">Latest News</h4>
    </div>

{/* contact form */}

    <div className="max-w-2xl mx-auto mb-16">
      <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input id="form_name" type="text" name="name" placeholder="Name*" value={formData.name} onChange={handleChange} required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" />
          <input id="form_email" type="email" name="email" placeholder="Email*" value={formData.email} onChange={handleChange} required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" />
          <input id="form_phone" type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" />
          <input id="form_subject" type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" />
          <textarea id="form_message" name="message" placeholder="Message*" required value={formData.message} onChange={handleChange}
            className="w-full col-span-1 md:col-span-2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none h-40"></textarea>
        </div>
        <div className="text-center">
          <button type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition">
            Send Message
          </button>
        </div>
      </form>
    </div>


    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      <div className="p-6 bg-white shadow rounded-lg">
        <div className='flex items-center space-x-2 mb-2'>
<span className="text-blue-500 text-3xl mb-3 inline-block">
          <FaPhone />
        </span>
        <h6 className="font-semibold text-lg">Phone :</h6>
        </div>
        <p className="text-gray-600">+20 010 251 789 18 , 251 789 18</p>
      </div>
      <div className="p-6 bg-white shadow rounded-lg">
        <div className='flex items-center space-x-2 mb-2'>
          <span className="text-blue-500 text-3xl mb-3 inline-block">
            <FaEnvelope />
          </span>
          <h6 className="font-semibold text-lg">Email :</h6>
        </div>
        <p className="text-gray-600">Doux_support@website.com</p>
      </div>
      <div className="p-6 bg-white shadow rounded-lg">
        <div className='flex items-center space-x-2 mb-2'>
          <span className="text-blue-500 text-3xl mb-3 inline-block">
            <FaMapMarkerAlt />
          </span>
          <h6 className="font-semibold text-lg">Address :</h6>
        </div>
        <p className="text-gray-600">4655 Carter Street, Olney, Illinois</p>
        <p className="text-gray-600">4961 Wescam Court, Reno, Nevada</p>
      </div>
    </div>
  </div>
</section>
    );
}

export default Contact