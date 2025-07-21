'use client';

import React, { useState } from 'react';

export default function Welcome() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    antispam: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.antispam !== '8') {
      alert('Please solve the anti-spam question correctly.');
      return;
    }
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '', antispam: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bg-[#eeeeee] py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-black mb-4">Welcome</h2>
              <div className="space-y-4 text-sm">
                <p>
                  <strong>Prairie Lea Baptist Church has been reaching and touching people since 1850. Today, we are still an exciting place and people "Shining His Light, Sharing His Word, Showing His Love" as we strive to help people make sense out of life through Christ-centered living.</strong>
                </p>
                <p>
                  <strong>We are a church on mission and engaged in ministry, striving to make a real difference in our world for Jesus Christ. Whatever your church background -- or no church background at all -- there is a place for you and we welcome you to Prairie Lea Baptist Church.</strong>
                </p>
                <p>
                  <strong>Thanks for visiting our website!</strong>
                </p>
                <p>
                  <strong>Pastor Keith Maddox</strong>
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-black mb-4">Directions</h3>
              <div className="mb-4">
                <div className="aspect-[3/2] bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-gray-600">Google Maps Placeholder</span>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-[#ce6712] mt-1">📍</span>
                  <div>
                    <p className="font-semibold">Prairie Lea Baptist Church</p>
                    <p>6825 San Marcos Hwy</p>
                    <p>PO Box 249</p>
                    <p>Prairie Lea, Texas 78661</p>
                    <p>United States</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#ce6712]">📞</span>
                  <span>Phone: 512-488-2274</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-black mb-4">Contact</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1">
                    * Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ce6712] focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">
                    * Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ce6712] focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-1">
                    * Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ce6712] focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1">
                    * Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ce6712] focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="antispam" className="block text-sm font-bold text-gray-700 mb-1">
                    * Antispam: What is 0 + 8?
                  </label>
                  <input
                    type="text"
                    id="antispam"
                    name="antispam"
                    value={formData.antispam}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ce6712] focus:border-transparent"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-b from-[#ce6712] to-[#88440c] hover:bg-[#ce6712] text-white font-medium py-3 px-4 rounded-md border-b-2 border-[#70380a] transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
