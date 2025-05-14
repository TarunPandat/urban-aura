import React from "react";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Urban Aura</title>
        <meta name="description" content="Get in touch with the Urban Aura team for questions, feedback, or support." />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-12 text-white">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form className="space-y-6 bg-white p-6 rounded-xl shadow-md">
            <div>
              <label htmlFor="name" className="block text-sm text-black font-semibold mb-1">Name</label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-black"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-black font-semibold mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-black"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-black font-semibold mb-1">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-black"
                placeholder="Your message..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-6 bg-gray-100 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-black">Get in Touch</h2>
            <p className="text-gray-600">
              Have questions about your order, our products, or just want to say hello? Fill out the form or reach us through the contact details below.
            </p>

            <div>
              <p className="font-medium text-black">Email:</p>
              <p className="text-gray-700">support@urbanaura.com</p>
            </div>

            <div>
              <p className="font-medium text-black">Phone:</p>
              <p className="text-gray-700">+91 98765 43210</p>
            </div>

            <div>
              <p className="font-medium text-black">Address:</p>
              <p className="text-gray-700">Urban Aura HQ, 101 Style Street, New Delhi, India</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
