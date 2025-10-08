'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Leaf, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'

export default function ModernFooter() {
  const footerLinks = {
    Projeto: [
      { name: 'Sobre o Aton', href: '#about' },
      { name: 'Como Funciona', href: '#how-it-works' },
      { name: 'Impacto Ambiental', href: '#impact' },
      { name: 'Equipe', href: '#team' }
    ],
    Recursos: [
      { name: 'Chatbot', href: '#chatbot' },
      { name: 'Métricas', href: '#metrics' },
      { name: 'Tecnologia', href: '#tech' },
      { name: 'Sustentabilidade', href: '#sustainability' }
    ],
    Contato: [
      { name: 'jimmycastilho555@gmail.com', href: 'mailto:jimmycastilho555@gmail.com', icon: Mail },
      { name: '+55 (11) 94166-5545', href: 'tel:+5511941665545', icon: Phone },
      { name: 'São Paulo, SP', href: '#', icon: MapPin }
    ]
  }

  const socialLinks = [
    { name: 'GitHub', href: '#', icon: Github },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Twitter', href: '#', icon: Twitter }
  ]

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-emerald-500/5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Aton
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Transformando resíduos em recursos através da inovação e circularidade. 
              Construindo um futuro mais sustentável para as próximas gerações.
            </p>
            
            {/* Social links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-gray-400 hover:text-green-400 hover:bg-slate-700 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links sections */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-white mb-6">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors duration-300 group"
                    >
                      {'icon' in link && link.icon && <link.icon className="w-4 h-4" />}
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm">
            © 2024 Aton. Todos os direitos reservados.
          </p>
          <div className="flex items-center space-x-6 mt-4 sm:mt-0">
            <Link href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
              Política de Privacidade
            </Link>
            <Link href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
              Termos de Uso
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient line */}
      <div className="h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-green-500"></div>
    </footer>
  )
}