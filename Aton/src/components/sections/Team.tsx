'use client'

import { motion } from 'framer-motion'
import { Users, Linkedin, Github, Mail, Award, Target, Heart } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

// Componente de Avatar com fallback
const TeamAvatar = ({ member }: { member: any }) => {
  const [imageError, setImageError] = useState(false)
  
  const initials = member.name.split(' ').map((n: string) => n[0]).join('')
  
  return (
    <div className="relative mb-8">
      <div className="relative mx-auto w-24 h-24">
        {/* Main avatar container */}
        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-gray-300 transition-all duration-500 shadow-sm">
          {!imageError ? (
            <Image
              src={member.image}
              alt={member.name}
              width={96}
              height={96}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center text-xl font-semibold text-gray-600">
              {initials}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Team() {
  const teamMembers = [
    {
      name: 'Jimmy Castilho',
      role: 'Programmer & Developer',
      expertise: 'Programação e Desenvolvimento',
      image: '/images/team/Jimmy.png',
      bio: 'Especialista em desenvolvimento de software e soluções tecnológicas. Possui ampla experiência em programação full-stack, desenvolvimento de APIs e integração de sistemas. Apaixonado por criar sistemas que impactam positivamente o meio ambiente, com foco em sustentabilidade e inovação tecnológica para economia circular.',
      linkedin: 'https://www.linkedin.com/in/jimmy-castilho-003733270/',
      github: 'https://github.com/jimmyadmsenior/Aton',
      email: 'jimmycastilho555@gmail.com'
    },
    {
      name: 'Isadora Moreira',
      role: 'Product Designer',
      expertise: 'Tecnologia e Desenvolvimento',
      image: '/images/team/Isadora.jpg', // Placeholder - adicionar imagem real
  bio: 'Engenheira de software especializada em IoT e sistemas de monitoramento ambiental. Atua no desenvolvimento de interfaces intuitivas e acessíveis, com experiência em design centrado no usuário e integração de tecnologias para sustentabilidade. Apaixonada por criar soluções que unem tecnologia e impacto ambiental positivo.',
      linkedin: '#',
      github: 'https://github.com/isahtxx',
      email: 'ana@aton.com'
    },
    {
      name: 'Lívia Clemente',
      role: 'Product Owner',
      expertise: 'Operações e Logística',
      image: '/images/team/Lívia.jpg', // Placeholder - adicionar imagem real
  bio: 'Especialista em processos industriais e otimização de sistemas de reciclagem. Possui experiência em gestão de operações logísticas, implementação de processos sustentáveis e análise de eficiência produtiva. Focada em resultados e na melhoria contínua de sistemas para maximizar o reaproveitamento de materiais e reduzir impactos ambientais.',
      linkedin: '#',
      github: 'https://github.com/liviaclemente',
      email: 'carlos@aton.com'
    },
    {
      name: 'Duda',
      role: 'Head of Partnerships',
      expertise: 'Parcerias Estratégicas e Sustentabilidade',
      image: '/images/team/Duda.jpeg',
      bio: 'Especialista em desenvolvimento de parcerias estratégicas e projetos de impacto socioambiental. Atua na articulação de relacionamentos corporativos, negociação de contratos e desenvolvimento de iniciativas sustentáveis. Focada em construir conexões que promovam crescimento mútuo e gerem valor para todas as partes envolvidas no ecossistema de sustentabilidade.',
      linkedin: '#',
      github: 'https://github.com/frachine-maria',
      email: 'duda@aton.com'
    }
  ]

  const values = [
    {
      icon: Target,
      title: 'Inovação Sustentável',
      description: 'Buscamos constantemente soluções inovadoras que beneficiem o meio ambiente'
    },
    {
      icon: Heart,
      title: 'Impacto Social',
      description: 'Comprometidos em criar valor para comunidades e sociedade como um todo'
    },
    {
      icon: Award,
      title: 'Excelência',
      description: 'Padrões elevados de qualidade em todos os aspectos do nosso trabalho'
    }
  ]

  return (
    <section id="team" className="py-24 bg-white">
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
            <Users className="w-4 h-4 text-gray-600" />
            <span className="text-gray-600 text-sm font-medium uppercase tracking-wide">TEAM</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Team Behind Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conheça os especialistas por trás de nossa missão de sustentabilidade—comprometidos em entregar soluções inteligentes.
          </p>
        </motion.div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 min-h-[340px]">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                type: "spring",
                bounce: 0.3
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group cursor-pointer h-full"
            >
              <div className="relative bg-white border border-gray-200 rounded-3xl p-5 hover:shadow-lg transition-all duration-500 overflow-hidden h-full flex flex-col justify-between min-h-[340px]">
                
                {/* Subtle hover overlay */}
                <div className="absolute inset-0 bg-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                
                {/* Avatar */}
                <TeamAvatar member={member} />

                {/* Info */}
                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-black transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-gray-500 text-xs">{member.expertise}</p>
                </div>

                {/* Bio */}
                <p className="text-gray-600 text-sm text-center mb-6 leading-relaxed flex-1">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex justify-center space-x-2 mt-auto">
                  <motion.a
                    href={member.linkedin}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:text-blue-600 transition-all duration-300"
                  >
                    <Linkedin className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href={member.github}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:text-gray-900 transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href={`mailto:${member.email}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:text-red-500 transition-all duration-300"
                  >
                    <Mail className="w-4 h-4" />
                  </motion.a>
                </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-white border border-gray-200 rounded-3xl p-12 mt-20"
        >
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2 bg-gray-100 border border-gray-200 rounded-full px-4 py-2 mb-6"
              >
                <Award className="w-4 h-4 text-gray-600" />
                <span className="text-gray-600 text-sm font-medium uppercase tracking-wide">VALUES</span>
              </motion.div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Values</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The principles that guide our sustainability mission and drive innovation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -3 }}
                  className="text-center group cursor-pointer"
                >
                  <div className="relative mb-6">
                    {/* Icon Container */}
                    <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-black transition-colors duration-300">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-black transition-colors duration-300">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-12">
            <Users className="w-16 h-16 text-gray-700 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Pronto para Participar da Nossa Missão?</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Conecte-se com nossa equipe para saber mais sobre inovação sustentável e como podemos trabalhar juntos.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.a
                href="mailto:jimmycastilho555@gmail.com"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-black text-white rounded-2xl font-medium hover:bg-gray-900 transition-colors duration-200"
              >
                Começar
              </motion.a>
              <motion.a
                href="#about"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-2xl font-medium hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
              >
                Saiba Mais
              </motion.a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}