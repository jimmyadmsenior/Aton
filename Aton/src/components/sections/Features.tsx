'use client'

import { motion } from 'framer-motion'

const features = [
  {
    icon: '🗺️',
    title: 'Pontos de Coleta',
    description: 'Encontre facilmente pontos de coleta próximos a você com nosso mapa interativo.',
    color: 'from-primary-500 to-primary-600'
  },
  {
    icon: '♻️',
    title: 'Reciclagem Inteligente',
    description: 'Sistema automatizado que calcula pontos baseado no tipo e peso dos materiais.',
    color: 'from-secondary-500 to-secondary-600'
  },
  {
    icon: '🏆',
    title: 'Recompensas',
    description: 'Troque seus pontos por benefícios de mobilidade, vouchers e descontos.',
    color: 'from-primary-500 to-secondary-500'
  },
  {
    icon: '🚴‍♂️',
    title: 'Mobilidade Sustentável',
    description: 'Acesse patinetes, bikes elétricas e outros meios de transporte ecológicos.',
    color: 'from-secondary-500 to-primary-600'
  },
  {
    icon: '🏢',
    title: 'Parceiros Empresariais',
    description: 'Oficinas e concessionárias certificadas para aprovação de materiais especiais.',
    color: 'from-primary-600 to-secondary-500'
  },
  {
    icon: '📊',
    title: 'Impacto Ambiental',
    description: 'Acompanhe seu impacto positivo no meio ambiente com métricas detalhadas.',
    color: 'from-secondary-600 to-primary-500'
  }
]

export function Features() {
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
            Como Funciona a Plataforma
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Um ecossistema completo que conecta pessoas, empresas e meio ambiente 
            através da economia circular e mobilidade sustentável.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{feature.icon}</span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Pronto para Fazer a Diferença?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Junte-se à comunidade Aton e comece sua jornada em direção a um futuro mais sustentável.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                Criar Conta Grátis
              </button>
              <button className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-all duration-200">
                Saiba Mais
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}