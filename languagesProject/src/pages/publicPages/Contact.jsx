import React from 'react';
import Navbar from '../../components/Navbar';

export const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="md:grid md:grid-cols-2 md:gap-6">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold leading-tight text-gray-900 mb-6">
              Contact me
            </h2>
            <p className="text-lg leading-7 text-gray-500">
            If you have any questions, suggestions or just want to say hi, don't hesitate to get in touch with me! You can write me an email or fill out the contact form below. I look forward to hearing from you!
            </p>
            <div className="mt-6">
              <h3 className="text-xl font-bold leading-tight text-gray-900 mb-2">
                Correo electrónico
              </h3>
              <p className="text-lg leading-7 text-gray-500">
              You can send me an email at <a href="mailto:example@example.com" className="text-primary underline">dgomezmo9@gmail.com</a>.
              </p>
            </div>
          </div>
          <div className="md:col-span-1 mt-8 md:mt-0">
            <form>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div className="mt-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="input input-bordered input-primary w-full"
                  required
                />
              </div>
              <div className="mt-6">
                <button type="submit" className="btn btn-primary">
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
