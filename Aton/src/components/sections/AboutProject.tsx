'use client'

import { motion } from 'framer-motion'
import { Recycle, Target, Lightbulb, Globe, ArrowUpRight, CheckCircle } from 'lucide-react'

export default function AboutProject() {
  const problems = [
    {
      icon: Globe,
      title: 'Poluição Ambiental',
      description: 'Descarte inadequado de componentes automotivos gera impacto ambiental significativo',
      stat: 'Alto impacto'
    },
    {
      icon: Recycle,
      title: 'Desperdício de Bancos',
      description: 'Bancos automotivos são frequentemente descartados sem reaproveitamento adequado',
      stat: '85% desperdiçado'
    },
    {
      icon: Target,
      title: 'Falta de Circularidade',
      description: 'Indústria automotiva ainda carece de soluções eficientes de economia circular',
      stat: 'Oportunidade'
    }
  ]

  const solutions = [
    {
      icon: '�',
      title: 'Reaproveitamento de Bancos',
      description: 'Sistema inovador para desmontar, processar e reaproveitar componentes de bancos automotivos'
    },
    {
      icon: '🔧',
      title: 'Sistema em Camadas',
      description: 'Processo estruturado de separação, limpeza e reprocessamento de materiais específicos'
    },
    {
      icon: '♻️',
      title: 'Economia Circular Toyota',
      description: 'Solução personalizada para reduzir desperdício e maximizar reaproveitamento na Toyota'
    },
    {
      icon: '🌍',
      title: 'Impacto Ambiental Positivo',
      description: 'Redução significativa da pegada de carbono através do compartilhamento de recursos'
    }
  ]

  return (
    <section id="about" className="py-24" style={{ backgroundColor: '#f8f8f8' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-gray-100 border border-gray-200 rounded-full px-4 py-2 mb-6">
            <Lightbulb className="w-4 h-4 text-gray-600" />
            <span className="text-gray-700 text-sm font-medium">O Projeto</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">
              Revolucionando o Reaproveitamento
            </span>
            <br />
            <span className="text-black">
              de Bancos Automotivos
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nossa proposta para a Toyota foca na criação de um sistema inteligente de reaproveitamento 
            de bancos, transformando desperdício em oportunidade através da economia circular.
          </p>
        </motion.div>

        {/* Problem Section */}
        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center"
          >
            🚨 O Problema que Enfrentamos
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="bg-white border border-gray-200 rounded-2xl p-8 h-full shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                      <problem.icon className="w-6 h-6 text-gray-600" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-black">{problem.stat}</div>
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">{problem.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{problem.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Solution Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center"
          >
            ✨ Nossa Solução Inovadora
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-500">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{solution.icon}</div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-black transition-colors">
                        {solution.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                        {solution.description}
                      </p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 bg-gray-50 border border-gray-200 rounded-3xl p-12 text-center"
        >
          <CheckCircle className="w-16 h-16 text-gray-600 mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Nossa Missão</h3>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Criar um <span className="text-black font-semibold">ecossistema circular</span> onde cada resíduo 
            se torna um recurso valioso, contribuindo para um planeta mais sustentável e uma economia mais justa. 
            Através da inovação e colaboração, transformamos desafios ambientais em 
            <span className="text-gray-900 font-semibold"> oportunidades de crescimento sustentável</span>.
          </p>
        </motion.div>

      </div>
    </section>
  )
}