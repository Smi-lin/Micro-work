import React from 'react';
import Header from './Header';
import Footer from './Footer';

const About = () => {
  return (
    <div className="bg-white">
    <Header/>
      <div className="bg-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              About TaskHub
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Connecting Task Creators with Skilled Executors
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-bold text-indigo-600">Our Mission</h2>
            <p className="mt-4 text-lg text-gray-600">
              TaskHub aims to revolutionize the way tasks are delegated and executed. 
              We provide a secure, efficient platform that connects individuals who need 
              tasks completed with skilled professionals ready to take on the challenge.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900">Secure Platform</h3>
              <p className="mt-4 text-gray-600">
                Advanced security measures including KYC verification and secure payment systems
                to protect our users.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900">Smart Contracts</h3>
              <p className="mt-4 text-gray-600">
                Blockchain-powered smart contracts ensure transparent and automated 
                payment processing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900">Verified Users</h3>
              <p className="mt-4 text-gray-600">
                Comprehensive verification system ensures trust and reliability 
                between task owners and executors.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Trust', 'Innovation', 'Excellence', 'Security'].map((value) => (
              <div key={value} className="text-center">
                <h3 className="text-xl font-semibold text-indigo-600 mb-4">{value}</h3>
                <p className="text-gray-600">
                  We prioritize {value.toLowerCase()} in every aspect of our platform.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;