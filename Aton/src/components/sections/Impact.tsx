'use client'

import { motion } from 'framer-motion'

const impactStats = [
  {
    number: '2,547',
    label: 'Kg de Material Reciclado',
    description: 'Equivale a remover 15 carros das ruas por um dia',
    icon: '♻️',
    color: 'text-primary-600'
  },
  {
    number: '1,284',
    label: 'Usuários Ativos',
    description: 'Pessoas engajadas na economia circular',
    icon: '👥',
    color: 'text-secondary-600'
  },
  {
    number: '847',
    label: 'Viagens Sustentáveis',
    description: 'Patinetes, bikes e transportes ecológicos utilizados',
    icon: '🚴‍♂️',
    color: 'text-primary-600'
  },
  {
    number: '156',
    label: 'Toneladas de CO₂ Evitadas',
    description: 'Impacto positivo direto no meio ambiente',
    icon: '🌱',
    color: 'text-secondary-600'
  }
]

export function Impact() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Impacto Real, Futuro Sustentável
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Números que demonstram como nossa comunidade está transformando 
            resíduos em soluções para um planeta mais limpo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Progress Bars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Metas de Sustentabilidade 2024
          </h3>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Material Reciclado</span>
                <span className="text-sm text-gray-500">2.5K / 5K kg (50%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '50%' }}
                  transition={{ duration: 1.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-primary-500 to-primary-600 h-3 rounded-full"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Usuários Engajados</span>
                <span className="text-sm text-gray-500">1.2K / 2K usuários (64%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '64%' }}
                  transition={{ duration: 1.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-secondary-500 to-secondary-600 h-3 rounded-full"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">CO₂ Reduzido</span>
                <span className="text-sm text-gray-500">156 / 300 ton (52%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '52%' }}
                  transition={{ duration: 1.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-primary-500 to-secondary-500 h-3 rounded-full"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}