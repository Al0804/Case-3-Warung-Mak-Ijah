import React from "react";
import { motion } from "framer-motion";

const Hero = ({ warungInfo }) => {
  return (
    <section id="home" className="hero-section bg-gradient-to-br from-orange-500 to-red-600 text-white py-20 overflow-hidden min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-96">
          {/* Text Content */}
          <div className="lg:w-1/2 mb-8 lg:mb-0 z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl lg:text-6xl font-bold mb-4"
            >
              {warungInfo?.name || "Warung Mak Ijah"}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl mb-6"
            >
              {warungInfo?.description || "Warung tradisional dengan cita rasa autentik Indonesia yang telah melayani sejak 2023"}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-x-4"
            >
              <a href="#menu" className="inline-block bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                📋 Order Online!
              </a>
            </motion.div>
          </div>
          
          {/* Phone Mockup */}
          <div className="lg:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Phone Container */}
              <div className="relative w-72 h-[600px]">
                {/* Phone Shadow */}
                <div className="absolute inset-0 bg-black/20 rounded-3xl transform translate-x-1 translate-y-1"></div>
                
                {/* Phone Frame */}
                <div className="relative w-full h-full bg-gray-900 rounded-3xl p-2 shadow-2xl">
                  {/* Screen Container */}
                  <div className="w-full h-full bg-black rounded-[20px] p-1">
                    {/* Actual Screen */}
                    <div className="w-full h-full bg-white rounded-[16px] overflow-hidden relative">
                      
                      {/* Status Bar */}
                      <div className="h-8 bg-gray-900 flex items-center justify-between px-4">
                        <div className="text-white text-xs font-medium">9:41</div>
                        <div className="w-20 h-4 bg-white rounded-full"></div>
                        <div className="flex space-x-1">
                          <div className="w-4 h-2 bg-white rounded-sm"></div>
                          <div className="w-4 h-2 bg-white rounded-sm"></div>
                          <div className="w-6 h-2 bg-white rounded-sm"></div>
                        </div>
                      </div>
                      
                      {/* App Content */}
                      <div className="flex-1 bg-gradient-to-br from-orange-100 via-orange-50 to-yellow-50 p-6 flex flex-col justify-center items-center text-center h-full">
                        
                        {/* App Header */}
                        <div className="mb-8">
                          <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center text-3xl text-white mb-4 shadow-lg transform rotate-3">
                            🍽️
                          </div>
                          <h3 className="text-2xl font-bold text-gray-800 mb-2">
                            Warung Mak Ijah
                          </h3>
                          <p className="text-orange-600 text-sm mb-6 px-4 leading-relaxed">
                            Pesan makanan lezat langsung dari HP Anda dengan mudah dan cepat
                          </p>
                        </div>
                        
                        {/* Feature Cards */}
                        <div className="w-full space-y-3 mb-6">
                          <div className="bg-white rounded-xl p-3 shadow-sm border border-orange-100">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                ✅
                              </div>
                              <div className="text-left">
                                <p className="text-sm font-semibold text-gray-800">Online Order</p>
                                <p className="text-xs text-gray-500">Pesan kapan saja</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-white rounded-xl p-3 shadow-sm border border-orange-100">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                🚚
                              </div>
                              <div className="text-left">
                                <p className="text-sm font-semibold text-gray-800">Fast Delivery</p>
                                <p className="text-xs text-gray-500">Antar cepat & aman</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Order Button */}
                        <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-xl text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                          🛒 Pesan Sekarang Juga!
                        </button>
                        
                        {/* Rating */}
                        <div className="mt-4 flex items-center space-x-2">
                          <div className="flex text-yellow-400">
                            ⭐⭐⭐⭐⭐
                          </div>
                          <span className="text-gray-600 text-sm">4.9 (1,234 reviews)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -top-3 -right-3 bg-green-500 text-white px-3 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                  ✅ ONLINE
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;