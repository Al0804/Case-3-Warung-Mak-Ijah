import React from 'react';
import { motion } from 'framer-motion';

const About = ({ warungInfo }) => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-800 mb-4"
          >
            Tentang Kami
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Warung keluarga dengan tradisi turun temurun
          </motion.p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            {/* Phone Interior View */}
            <div className="relative mx-auto w-72">
              {/* Phone Shadow */}
              <div className="absolute inset-0 bg-black/20 rounded-3xl transform translate-x-1 translate-y-1"></div>
              
              {/* Phone Frame */}
              <div className="relative w-full h-[500px] bg-gray-900 rounded-3xl p-2 shadow-2xl">
                {/* Screen */}
                <div className="w-full h-full bg-black rounded-[20px] p-1">
                  <div className="w-full h-full bg-white rounded-[16px] overflow-hidden relative">
                    
                    {/* Status Bar */}
                    <div className="h-8 bg-gray-900 flex items-center justify-center">
                      <div className="w-16 h-3 bg-white rounded-full"></div>
                    </div>
                    
                    {/* Interior Content */}
                    <div className="flex-1 bg-gradient-to-b from-amber-50 to-orange-50 p-4 h-full">
                      
                      {/* Header */}
                      <div className="text-center mb-4">
                        <h4 className="text-lg font-bold text-orange-800 mb-1">Interior Warung</h4>
                        <p className="text-sm text-orange-600">Suasana hangat & nyaman sejak 2023</p>
                      </div>
                      
                      {/* Main Visual Area */}
                      <div className="relative bg-gradient-to-br from-orange-200 via-yellow-100 to-orange-100 rounded-2xl p-6 mb-4 h-64">
                        {/* Decorative Restaurant Elements */}
                        <div className="absolute top-3 left-3 w-6 h-6 bg-red-500 rounded-full opacity-80"></div>
                        <div className="absolute top-3 right-3 w-4 h-4 bg-yellow-500 rounded-full"></div>
                        <div className="absolute bottom-3 left-3 w-8 h-3 bg-amber-700 rounded-lg"></div>
                        <div className="absolute bottom-3 right-3 w-6 h-3 bg-orange-600 rounded-lg"></div>
                        
                        {/* Center Restaurant Icon */}
                        <div className="flex flex-col items-center justify-center h-full">
                          <div className="text-6xl mb-4">🏪</div>
                          <div className="bg-white/90 rounded-xl p-4 shadow-lg text-center">
                            <p className="text-lg font-bold text-orange-800 mb-1">Warung Tradisional</p>
                            <p className="text-sm text-orange-600 mb-2">Melayani dengan ❤️</p>
                            <div className="flex justify-center space-x-1 text-yellow-400">
                              <span>⭐</span>
                              <span>⭐</span>
                              <span>⭐</span>
                              <span>⭐</span>
                              <span>⭐</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Bottom Info Card */}
                      <div className="bg-white rounded-xl p-4 shadow-sm border border-orange-100">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-xl">
                            👨‍🍳
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-bold text-gray-800">Chef Berpengalaman</p>
                            <p className="text-xs text-gray-600">Masak dengan resep turun temurun</p>
                            <div className="flex items-center mt-1">
                              <span className="text-xs text-green-600 font-medium">✅ Sejak 2023</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Year Badge */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-2 rounded-full text-sm font-bold shadow-lg">
                ⭐ EST. 2023
              </div>
            </div>
          </motion.div>
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Cerita Kami</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Warung Mak Ijah telah melayani masyarakat Jakarta dengan cita rasa autentik Indonesia 
              sejak tahun 2023. Dimulai dari sebuah gerobak kecil, kini kami telah berkembang 
              menjadi warung yang dikenal luas karena kelezatan masakan tradisional kami.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Setiap hidangan kami dibuat dengan resep turun temurun dan menggunakan bahan-bahan 
              segar berkualitas tinggi. Kami berkomitmen untuk tetap mempertahankan cita rasa 
              asli Indonesia dalam setiap sajian.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-3">📍</div>
                <h4 className="font-bold text-gray-800 mb-2">Alamat</h4>
                <p className="text-gray-600 text-sm">{warungInfo?.address || "Jl. Warung No. 123, Jakarta"}</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-3">⏰</div>
                <h4 className="font-bold text-gray-800 mb-2">Jam Buka</h4>
                <p className="text-gray-600 text-sm">{warungInfo?.hours || "07:00 - 22:00 WIB"}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;