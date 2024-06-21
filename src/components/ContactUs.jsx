import { useState } from 'react';
import Image from 'next/image';
import bgImage from '../../public/bg2.png';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="relative py-16 bg-gray-900 text-white">
      <div className="absolute inset-0">
        <Image src={bgImage} alt="Background" layout="fill" objectFit="cover" className="opacity-20" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-12 text-yellow-400">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-3xl font-semibold mb-6 text-yellow-600">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-3 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-600 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-3xl font-semibold mb-6 text-yellow-600">Visit Us</h3>
            <p className="mb-4">123 Coffee Street, Coffee City, CA 12345</p>
            <p className="mb-4">Email: contact@coffeeshop.com</p>
            <p className="mb-4">Phone: (123) 456-7890</p>
            <div className="w-full h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094446!2d144.95373631584486!3d-37.81720974202124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1f01c1c5a0!2sCoffee%20Shop!5e0!3m2!1sen!2sus!4v1625180834385!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "24px" }}
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
