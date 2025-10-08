'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Maria Santos',
      role: 'CEO & Fundadora',
      bio: 'Engenheira ambiental com mais de 10 anos de experiência em sustentabilidade corporativa.',
      image: '👩‍💼',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Carlos Lima',
      role: 'CTO',
      bio: 'Especialista em tecnologia sustentável e desenvolvimento de soluções inovadoras.',
      image: '👨‍💻',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Ana Costa',
      role: 'Diretora de Sustentabilidade',
      bio: 'Mestre em Ciências Ambientais, lidera nossas iniciativas de impacto social.',
      image: '👩‍🔬',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Roberto Silva',
      role: 'Diretor de Parcerias',
      bio: 'Responsável por expandir nossa rede de pontos de coleta e empresas parceiras.',
      image: '👨‍💼',
      linkedin: 'https://linkedin.com'
    }
  ]

  const milestones = [
    {
      year: '2024',
      title: 'Fundação da Aton',
      description: 'Início da jornada com o objetivo de revolucionar a reciclagem urbana.',
      icon: '🚀'
    },
    {
      year: '2024',
      title: 'Primeiros Parceiros',
      description: 'Estabelecemos parcerias com 50 pontos de coleta em São Paulo.',
      icon: '🤝'
    },
    {
      year: '2024',
      title: '1000 Usuários',
      description: 'Alcançamos nossa primeira marca de mil usuários ativos.',
      icon: '👥'
    },
    {
      year: '2024',
      title: '10 Toneladas',
      description: 'Primeira marca de 10 toneladas de material reciclado.',
      icon: '♻️'
    }
  ]

  const values = [
    {
      title: 'Sustentabilidade',
      description: 'Compromisso com práticas que preservam o meio ambiente para as futuras gerações.',
      icon: '🌱',
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'Inovação',
      description: 'Utilizamos tecnologia de ponta para criar soluções eficientes e acessíveis.',
      icon: '💡',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      title: 'Transparência',
      description: 'Mantemos processos claros e comunicação aberta com nossa comunidade.',
      icon: '🔍',
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Colaboração',
      description: 'Acreditamos que grandes mudanças acontecem quando trabalhamos juntos.',
      icon: '🤝',
      color: 'from-purple-400 to-purple-600'
    }
  ]

  const stats = [
    {
      number: '1,284',
      label: 'Usuários Ativos',
      icon: '👥'
    },
    {
      number: '50+',
      label: 'Pontos de Coleta',
      icon: '📍'
    },
    {
      number: '12.5t',
      label: 'Material Reciclado',
      icon: '♻️'
    },
    {
      number: '37.5t',
      label: 'CO₂ Evitado',
      icon: '🌍'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sobre a <span className="text-primary-600">Aton</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Transformamos a forma como as pessoas se relacionam com a reciclagem, 
              criando um sistema de recompensas que incentiva práticas sustentáveis 
              e contribui para um planeta mais limpo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl p-8 text-white"
            >
              <div className="text-4xl mb-4">🎯</div>
              <h2 className="text-2xl font-bold mb-4">Nossa Missão</h2>
              <p className="text-lg leading-relaxed opacity-90">
                Democratizar a reciclagem através da tecnologia, tornando-a 
                acessível, recompensadora e eficiente para todos os cidadãos, 
                enquanto construímos um futuro mais sustentável.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-secondary-600 to-primary-600 rounded-2xl p-8 text-white"
            >
              <div className="text-4xl mb-4">🔮</div>
              <h2 className="text-2xl font-bold mb-4">Nossa Visão</h2>
              <p className="text-lg leading-relaxed opacity-90">
                Ser a principal plataforma de reciclagem incentivada do Brasil, 
                criando uma rede colaborativa que transforme resíduos em recursos 
                e impacto positivo.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nosso Impacto em Números
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cada número representa pessoas reais fazendo a diferença no meio ambiente
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nossos Valores
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Os princípios que guiam cada decisão e ação da Aton
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-xl bg-white border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${value.color} opacity-5`}></div>
                <div className="relative">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nossa Jornada
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Do sonho à realidade: os marcos que moldaram a Aton
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-2xl relative z-10">
                    {milestone.icon}
                  </div>
                  <div className="ml-6 bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                    <div className="text-sm font-medium text-primary-600 mb-1">
                      {milestone.year}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Conheça Nossa Equipe
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pessoas apaixonadas por sustentabilidade trabalhando para criar um futuro melhor
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <div className="text-primary-600 font-medium mb-3">
                  {member.role}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {member.bio}
                </p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 text-sm font-medium"
                >
                  <span className="mr-1">💼</span>
                  LinkedIn
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Junte-se à Nossa Missão
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              Faça parte da revolução da reciclagem. Cada ação conta para construir 
              um futuro mais sustentável.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/auth/register"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Criar Conta Gratuita
              </a>
              <a
                href="/map"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
              >
                Encontrar Pontos de Coleta
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}