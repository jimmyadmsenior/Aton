'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-sm sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Aton</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/map" className="text-gray-600 hover:text-primary-600 transition-colors">
              Pontos de Coleta
            </Link>
            <Link href="/rewards" className="text-gray-600 hover:text-primary-600 transition-colors">
              Recompensas
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-primary-600 transition-colors">
              Sobre
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-primary-600 transition-colors">
              Contato
            </Link>
          </nav>

          {/* Desktop Auth Buttons / User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Quando usuário não estiver logado */}
            <Link
              href="/auth/login"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Entrar
            </Link>
            <Link
              href="/auth/register"
              className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Registrar
            </Link>
            
            {/* Quando usuário estiver logado (comentado para demonstração) */}
            {/* 
            <Link href="/dashboard" className="text-gray-600 hover:text-primary-600 transition-colors">
              Dashboard
            </Link>
            <Link href="/submit-waste" className="text-gray-600 hover:text-primary-600 transition-colors">
              Enviar Material
            </Link>
            <Link href="/wallet" className="text-gray-600 hover:text-primary-600 transition-colors">
              Carteira
            </Link>
            <Link href="/profile" className="text-gray-600 hover:text-primary-600 transition-colors">
              Perfil
            </Link>
            */}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-full h-0.5 bg-gray-600 transition-all ${isOpen ? 'rotate-45 translate-y-1' : ''}`} />
              <span className={`block w-full h-0.5 bg-gray-600 mt-1 transition-all ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-full h-0.5 bg-gray-600 mt-1 transition-all ${isOpen ? '-rotate-45 -translate-y-1' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4"
          >
            <nav className="flex flex-col space-y-2">
              <Link
                href="/map"
                className="text-gray-600 hover:text-primary-600 py-2"
                onClick={() => setIsOpen(false)}
              >
                Pontos de Coleta
              </Link>
              <Link
                href="/rewards"
                className="text-gray-600 hover:text-primary-600 py-2"
                onClick={() => setIsOpen(false)}
              >
                Recompensas
              </Link>
              <Link
                href="/about"
                className="text-gray-600 hover:text-primary-600 py-2"
                onClick={() => setIsOpen(false)}
              >
                Sobre
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-primary-600 py-2"
                onClick={() => setIsOpen(false)}
              >
                Contato
              </Link>
              
              {/* Links do usuário logado */}
              <div className="border-t pt-2 mt-2">
                <Link
                  href="/dashboard"
                  className="text-gray-600 hover:text-primary-600 block py-2"
                  onClick={() => setIsOpen(false)}
                >
                  📊 Dashboard
                </Link>
                <Link
                  href="/submit-waste"
                  className="text-gray-600 hover:text-primary-600 block py-2"
                  onClick={() => setIsOpen(false)}
                >
                  📦 Enviar Material
                </Link>
                <Link
                  href="/wallet"
                  className="text-gray-600 hover:text-primary-600 block py-2"
                  onClick={() => setIsOpen(false)}
                >
                  💰 Carteira
                </Link>
                <Link
                  href="/profile"
                  className="text-gray-600 hover:text-primary-600 block py-2"
                  onClick={() => setIsOpen(false)}
                >
                  👤 Perfil
                </Link>
              </div>
              <div className="border-t pt-2 mt-2">
                <Link
                  href="/auth/login"
                  className="text-gray-600 hover:text-primary-600 block py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Entrar
                </Link>
                <Link
                  href="/auth/register"
                  className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors block text-center mt-2"
                  onClick={() => setIsOpen(false)}
                >
                  Registrar
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}