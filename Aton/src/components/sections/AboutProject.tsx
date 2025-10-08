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
    <section id="about" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
            <Lightbulb className="w-4 h-4 text-green-400" />
            <span className="text-green-300 text-sm font-medium">O Projeto</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Repensando o Futuro dos
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Resíduos Sólidos
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
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
            className="text-2xl md:text-3xl font-bold text-red-400 mb-12 text-center"
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
                <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 h-full backdrop-blur-sm hover:border-red-500/30 transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                      <problem.icon className="w-6 h-6 text-red-400" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-red-400">{problem.stat}</div>
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-4">{problem.title}</h4>
                  <p className="text-gray-400 leading-relaxed">{problem.description}</p>
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
            className="text-2xl md:text-3xl font-bold text-green-400 mb-12 text-center"
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
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/40 border border-green-500/20 rounded-2xl p-8 backdrop-blur-sm hover:border-green-400/40 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{solution.icon}</div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-green-300 transition-colors">
                        {solution.title}
                      </h4>
                      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                        {solution.description}
                      </p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity" />
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
          className="mt-24 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-green-500/10 border border-green-500/20 rounded-3xl p-12 text-center"
        >
          <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-white mb-6">Nossa Missão</h3>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Criar um <span className="text-green-400 font-semibold">ecossistema circular</span> onde cada resíduo 
            se torna um recurso valioso, contribuindo para um planeta mais sustentável e uma economia mais justa. 
            Através da inovação e colaboração, transformamos desafios ambientais em 
            <span className="text-emerald-400 font-semibold"> oportunidades de crescimento sustentável</span>.
          </p>
        </motion.div>

      </div>
    </section>
  )
}