"use client";
import Head from 'next/head';
import Image from 'next/image';
import { FormEvent, useState } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage(null);
  
    const form = event.currentTarget; // Store the form reference
    const formData = new FormData(form);
  
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: { 'Content-Type': 'application/json' },
      });
  
      console.log("Response Status:", response.status);
      console.log("Response:", response);
  
      const data = await response.json();
      console.log("Response Data:", data);
  
      if (response.ok) {
        setMessage(data.message || 'Message sent successfully!');
        if (form) form.reset(); // Reset only if form exists
      } else {
        setMessage(data.message || 'Failed to send message.');
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center p-8">
      <Head>
        <title>Contact Us - Aerox Shirt</title>
        <meta name="description" content="Contact Aerox Shirt for any inquiries or support." />
      </Head>

      <div className="bg-white rounded-lg shadow-2xl overflow-hidden w-full max-w-7xl mx-auto flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="w-full md:w-1/2 relative h-96 md:h-auto">
          <Image
            src="/Images/Contact.png"
            alt="Contact Us"
            layout="fill"
            objectFit="fill"
            className="rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-12">
          <div className="flex justify-center -mb-6">
            <Image
              src="/Images/logo.png"
              alt="Aerox Shirt Logo"
              width={150}
              height={70}
            />
          </div>
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Contact Us</h1>
          {message && (
            <p className="text-center mb-4 text-lg font-semibold text-indigo-600">{message}</p>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center py-3 px-6 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white ${
                  isSubmitting ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700'
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
