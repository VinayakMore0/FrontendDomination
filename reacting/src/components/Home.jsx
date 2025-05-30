import React from 'react'
import Products from './Products'

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to Our Website
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover amazing products and services
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors">
            Get Started
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Quality Products</h3>
            <p className="text-gray-600">Browse our selection of premium items</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Fast Delivery</h3>
            <p className="text-gray-600">Get your orders quickly and securely</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">24/7 Support</h3>
            <p className="text-gray-600">We're here to help anytime</p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-md p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are committed to providing the best experience for our customers.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home