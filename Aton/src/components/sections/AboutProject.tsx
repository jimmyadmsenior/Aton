'use client'

import { motion } from 'framer-motion'
import { Recycle, Target, Lightbulb, Globe, ArrowUpRight, CheckCircle } from 'lucide-react'

export default function AboutProject() {
  const problems = [
    {
      icon: Globe,
      title: 'Crise dos Resíduos',
      description: 'Mais de 2 bilhões de toneladas de resíduos são geradas anualmente no mundo',
      stat: '2B+ ton/ano'
    },
    {
      icon: Recycle,
      title: 'Baixa Reciclagem',
      description: 'Apenas 20% dos resíduos globais são efetivamente reciclados',
      stat: '80% desperdiçado'
    },
    {
      icon: Target,
      title: 'Economia Linear',
      description: 'Modelo tradicional de produção-consumo-descarte precisa ser repensado',
      stat: '95% linear'
    }
  ]

  const solutions = [
    {
      icon: '🔄',
      title: 'Circularidade Inteligente',
      description: 'Transformamos resíduos em recursos através de processos inovadores de circularidade'
    },
    {
      icon: '🌱',
      title: 'Banco de Materiais',
      description: 'Sistema de camadas que organiza e potencializa diferentes tipos de materiais recicláveis'
    },
    {
      icon: '📊',
      title: 'Monitoramento Inteligente',
      description: 'Tecnologia avançada para rastreamento e otimização do processo de reciclagem'
    },
    {
      icon: '🤝',
      title: 'Parceria Sustentável',
      description: 'Conectamos empresas, comunidades e governos em uma rede colaborativa'
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
              Repensando o Futuro dos
            </span>
            <br />
            <span className="text-black">
              Resíduos Sólidos
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            O Aton nasce da necessidade urgente de transformar nossa relação com os resíduos, 
            criando um sistema circular que beneficia tanto o meio ambiente quanto a sociedade.
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