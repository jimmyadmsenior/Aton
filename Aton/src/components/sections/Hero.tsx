'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-300 rounded-full opacity-10 animate-spin-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Transforme{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              Resíduos
            </span>{' '}
            em{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-600 to-primary-600">
              Mobilidade
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Recicle materiais e peças automotivas, ganhe pontos e troque por 
            benefícios de mobilidade sustentável. Juntos por um futuro mais limpo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/auth/register"
              className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Começar Agora
            </Link>
            <Link
              href="/map"
              className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-600 hover:text-white transition-all duration-200"
            >
              Ver Pontos de Coleta
            </Link>
          </div>
        </motion.div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8"
        >
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-primary-600 mb-2">2.5K+</div>
            <div className="text-gray-600">Kg Reciclados</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-secondary-600 mb-2">1.2K+</div>
            <div className="text-gray-600">Usuários Ativos</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-primary-600 mb-2">850+</div>
            <div className="text-gray-600">Viagens Sustentáveis</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}