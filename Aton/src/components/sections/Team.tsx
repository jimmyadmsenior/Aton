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
    <div className="relative mb-6">
      {!imageError ? (
        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-green-400/20">
          <Image
            src={member.image}
            alt={member.name}
            width={96}
            height={96}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        </div>
      ) : (
        <div className="w-24 h-24 mx-auto bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center text-2xl font-bold text-white border-4 border-green-400/20">
          {initials}
        </div>
      )}
      <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-4 border-slate-800 animate-pulse"></div>
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
      bio: 'Especialista em desenvolvimento de software e soluções sustentáveis. Apaixonado por criar tecnologias que impactam positivamente o meio ambiente.',
      linkedin: 'https://www.linkedin.com/in/jimmy-castilho-003733270/',
      github: 'https://github.com/jimmyadmsenior/Aton',
      email: 'jimmycastilho555@gmail.com'
    },
    {
      name: 'Ana Silva',
      role: 'CTO',
      expertise: 'Tecnologia e Desenvolvimento',
      image: '/team/ana.jpg', // Placeholder - adicionar imagem real
      bio: 'Engenheira de software especializada em IoT e sistemas de monitoramento ambiental.',
      linkedin: '#',
      github: '#',
      email: 'ana@aton.com'
    },
    {
      name: 'Carlos Santos',
      role: 'Head of Operations',
      expertise: 'Operações e Logística',
      image: '/team/carlos.jpg', // Placeholder - adicionar imagem real
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
    <section id="team" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
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
            <Users className="w-4 h-4 text-green-400" />
            <span className="text-green-300 text-sm font-medium">Nossa Equipe</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Pessoas Apaixonadas por
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Transformação Sustentável
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Conheça os especialistas por trás do Aton, unidos pela missão de criar um futuro 
            mais sustentável através da inovação e colaboração.
          </p>
        </motion.div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 backdrop-blur-sm hover:border-green-500/30 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500">
                
                {/* Avatar */}
                <TeamAvatar member={member} />

                {/* Info */}
                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-green-300 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-green-400 text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-gray-400 text-xs">{member.expertise}</p>
                </div>

                {/* Bio */}
                <p className="text-gray-400 text-sm text-center mb-6 leading-relaxed">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  <motion.a
                    href={member.linkedin}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-slate-600 transition-all duration-300"
                  >
                    <Linkedin className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href={member.github}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-purple-400 hover:bg-slate-600 transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href={`mailto:${member.email}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-green-400 hover:bg-slate-600 transition-all duration-300"
                  >
                    <Mail className="w-4 h-4" />
                  </motion.a>
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
          className="bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-green-500/10 border border-green-500/20 rounded-3xl p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Nossos Valores</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Os princípios que guiam nossa missão de transformação sustentável
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-4">{value.title}</h4>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
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
            <Users className="w-16 h-16 text-green-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-6">Junte-se à Nossa Missão</h3>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Está pronto para fazer parte da transformação sustentável? 
              Entre em contato conosco e vamos construir um futuro mais verde juntos.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.a
                href="mailto:jimmycastilho555@gmail.com"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl font-semibold text-white text-lg hover:shadow-2xl transition-all duration-300"
              >
                Fale Conosco
              </motion.a>
              <motion.a
                href="#about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-green-500/30 rounded-2xl font-semibold text-green-300 hover:border-green-400 hover:text-green-200 transition-all duration-300"
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