'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const partners = [
  {
    name: 'Toyota',
    logo: '/logos/toyota.svg',
    description: 'Programa Toyota Circular+ para reciclagem de peças automotivas',
    category: 'Automotivo'
  },
  {
    name: 'Yellow',
    logo: '/logos/yellow.svg', 
    description: 'Patinetes elétricos sustentáveis para mobilidade urbana',
    category: 'Mobilidade'
  },
  {
    name: 'Shell',
    logo: '/logos/shell.svg',
    description: 'Coleta especializada de óleos e lubrificantes usados',
    category: 'Energia'
  },
  {
    name: 'Prefeitura de Salto',
    logo: '/logos/salto.svg',
    description: 'Apoio municipal para pontos de coleta estratégicos',
    category: 'Governo'
  },
  {
    name: 'Instituto Árvore Vida',
    logo: '/logos/arvore-vida.svg',
    description: 'ONG parceira para projetos de reflorestamento',
    category: 'ONG'
  },
  {
    name: 'Bike Share',
    logo: '/logos/bike-share.svg',
    description: 'Bicicletas elétricas compartilhadas',
    category: 'Mobilidade'
  }
]

export function Partners() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Parceiros que Fazem a Diferença
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trabalhamos em conjunto com empresas líderes para criar um ecossistema 
            completo de sustentabilidade e mobilidade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 group"
            >
              <div className="flex flex-col items-center text-center">
                {/* Logo Placeholder - Em produção, usar Image do Next.js */}
                <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-primary-600">
                    {partner.name.charAt(0)}
                  </span>
                </div>

                {/* Category Badge */}
                <span className="inline-block bg-primary-100 text-primary-700 text-xs px-3 py-1 rounded-full mb-3">
                  {partner.category}
                </span>

                {/* Partner Info */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {partner.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {partner.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Partnership CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 sm:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Quer Ser Nosso Parceiro?
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Junte-se ao movimento da economia circular e sustentabilidade. 
              Vamos transformar o futuro da mobilidade juntos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200">
                Tornar-se Parceiro
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-200">
                Saiba Mais
              </button>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500"
        >
          <div className="flex items-center gap-2">
            <span className="text-primary-500">✓</span>
            Certificado ISO 14001
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary-500">✓</span>
            Auditado por terceiros
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary-500">✓</span>
            100% transparente
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary-500">✓</span>
            Dados seguros
          </div>
        </motion.div>
      </div>
    </section>
  )
}