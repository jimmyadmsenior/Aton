'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Sparkles, Recycle, TreePine, Zap } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function LandingPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const floatingElements = [
    { icon: Recycle, delay: 0, x: '10%', y: '20%' },
    { icon: TreePine, delay: 0.2, x: '80%', y: '30%' },
    { icon: Sparkles, delay: 0.4, x: '20%', y: '70%' },
    { icon: Zap, delay: 0.6, x: '90%', y: '60%' }
  ]

  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* Minimalist Background */}
      <div className="absolute inset-0">
        {/* Subtle geometric shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-gray-100 rounded-full opacity-50"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-32 right-32 w-24 h-24 bg-gray-200 rounded-full opacity-40"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        {/* Parallax Mouse Effect */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.15) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Floating Icons */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute text-green-400/30"
          style={{ left: element.x, top: element.y }}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
            rotate: [0, 360],
            y: [-20, 20, -20],
          }}
          transition={{
            duration: 8,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <element.icon size={48} />
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-gray-100 border border-gray-200 rounded-full px-4 py-2 mb-8"
            >
              <Sparkles className="w-4 h-4 text-gray-600" />
              <span className="text-gray-600 text-sm font-medium uppercase tracking-wide">
                AI AUTOMATION FOR BUSINESSES
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 text-gray-900"
            >
              ATON AI
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Custom AI solutions, built for the innovators of tomorrow
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-black text-white rounded-2xl font-medium hover:bg-gray-900 transition-colors duration-200 flex items-center space-x-2"
              >
                <span>Get Template</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-2xl font-medium hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
              >
                See Our Services
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
            >
              {[
                { number: '95%', label: 'Redução de Resíduos' },
                { number: '300+', label: 'Toneladas Processadas' },
                { number: '50k+', label: 'CO₂ Evitado (kg)' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gray-900">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-green-400/50 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-green-400 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}