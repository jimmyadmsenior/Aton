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
      <div className="relative mx-auto w-28 h-28">
        {/* Outer glow ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-blue-500/30 blur-md group-hover:blur-lg transition-all duration-500"></div>
        
        {/* Main avatar container */}
        <div className="relative w-full h-full rounded-full overflow-hidden border-3 border-blue-400/40 group-hover:border-blue-300/60 transition-all duration-500">
          {!imageError ? (
            <Image
              src={member.image}
              alt={member.name}
              width={112}
              height={112}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-500 to-blue-600 flex items-center justify-center text-2xl font-bold text-white">
              {initials}
            </div>
          )}
        </div>
        
        {/* Status indicator */}
        <motion.div 
          className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-3 border-slate-800 shadow-lg"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
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
      bio: 'Especialista em desenvolvimento de software e soluções tecnológicas. Apaixonado por criar sistemas que impactam positivamente o meio ambiente.',
      linkedin: 'https://www.linkedin.com/in/jimmy-castilho-003733270/',
      github: 'https://github.com/jimmyadmsenior/Aton',
      email: 'jimmycastilho555@gmail.com'
    },
    {
      name: 'Ana Silva',
      role: 'CTO',
      expertise: 'Tecnologia e Desenvolvimento',
      image: '/images/team/ana.jpg', // Placeholder - adicionar imagem real
      bio: 'Engenheira de software especializada em IoT e sistemas de monitoramento ambiental.',
      linkedin: '#',
      github: '#',
      email: 'ana@aton.com'
    },
    {
      name: 'Carlos Santos',
      role: 'Head of Operations',
      expertise: 'Operações e Logística',
      image: '/images/team/carlos.jpg', // Placeholder - adicionar imagem real
      bio: 'Especialista em processos industriais e otimização de sistemas de reciclagem.',
      linkedin: '#',
      github: '#',
      email: 'carlos@aton.com'
    },
    {
      name: 'Duda',
      role: 'Head of Partnerships',
      expertise: 'Parcerias Estratégicas e Sustentabilidade',
      image: '/images/team/Duda.jpeg',
      bio: 'Especialista em desenvolvimento de parcerias estratégicas e projetos de impacto socioambiental.',
      linkedin: '#',
      github: '#',
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
    <section id="team" className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <Users className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">Nossa Equipe</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Pessoas Apaixonadas por
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
              Transformação Sustentável
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Conheça os especialistas por trás do Aton, unidos pela missão de criar um futuro 
            mais sustentável através da inovação e colaboração.
          </p>
        </motion.div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
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
              className="group cursor-pointer"
            >
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/90 border border-slate-700/50 rounded-3xl p-8 backdrop-blur-lg hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-700 overflow-hidden">
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10">
                
                {/* Avatar */}
                <TeamAvatar member={member} />

                {/* Info */}
                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-300 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-slate-400 text-xs">{member.expertise}</p>
                </div>

                {/* Bio */}
                <p className="text-slate-400 text-sm text-center mb-6 leading-relaxed">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  <motion.a
                    href={member.linkedin}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative w-10 h-10 bg-slate-800/80 border border-slate-600/50 rounded-xl flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-400/40 hover:bg-blue-500/10 transition-all duration-400 group/social overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover/social:opacity-100 transition-opacity duration-400"></div>
                    <Linkedin className="w-4 h-4 relative z-10" />
                  </motion.a>
                  <motion.a
                    href={member.github}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative w-10 h-10 bg-slate-800/80 border border-slate-600/50 rounded-xl flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-400/40 hover:bg-purple-500/10 transition-all duration-400 group/social overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover/social:opacity-100 transition-opacity duration-400"></div>
                    <Github className="w-4 h-4 relative z-10" />
                  </motion.a>
                  <motion.a
                    href={`mailto:${member.email}`}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative w-10 h-10 bg-slate-800/80 border border-slate-600/50 rounded-xl flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-400/40 hover:bg-emerald-500/10 transition-all duration-400 group/social overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent opacity-0 group-hover/social:opacity-100 transition-opacity duration-400"></div>
                    <Mail className="w-4 h-4 relative z-10" />
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
          className="relative bg-gradient-to-br from-slate-800/60 via-slate-900/80 to-slate-800/60 border border-slate-700/50 rounded-3xl p-12 backdrop-blur-xl overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/10 to-blue-500/5"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6"
              >
                <Award className="w-4 h-4 text-blue-400" />
                <span className="text-blue-300 text-sm font-medium">Nossos Valores</span>
              </motion.div>
              <h3 className="text-3xl font-bold text-white mb-4">Princípios que Nos Guiam</h3>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Os fundamentos que orientam nossa missão de transformação sustentável
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.7, 
                    delay: index * 0.2,
                    type: "spring",
                    bounce: 0.4
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="text-center group cursor-pointer"
                >
                  <div className="relative">
                    {/* Icon Background Glow */}
                    <div className="absolute inset-0 w-20 h-20 mx-auto bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-blue-600/30 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                    
                    {/* Icon Container */}
                    <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-blue-500/25">
                      <value.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">{value.title}</h4>
                  <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">{value.description}</p>
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
          <div className="bg-slate-800/50 border border-slate-700 rounded-3xl p-12 backdrop-blur-sm">
            <Users className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-6">Junte-se à Nossa Missão</h3>
            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
              Está pronto para fazer parte da transformação sustentável? 
              Entre em contato conosco e vamos construir um futuro mais verde juntos.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.a
                href="mailto:jimmycastilho555@gmail.com"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 rounded-2xl font-semibold text-white text-lg hover:shadow-2xl transition-all duration-300"
              >
                Fale Conosco
              </motion.a>
              <motion.a
                href="#about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-blue-500/30 rounded-2xl font-semibold text-blue-300 hover:border-blue-400 hover:text-blue-200 transition-all duration-300"
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