'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Bot, User, Send, HelpCircle, Sparkles, X } from 'lucide-react'
import { useState } from 'react'

type Message = {
  id: number
  type: 'bot' | 'user'
  content: string
  timestamp: Date
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'bot',
      content: 'Olá! 👋 Eu sou o assistente do Aton. Como posso te ajudar a entender nosso projeto de sustentabilidade?',
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')

  const predefinedQuestions = [
    {
      id: 1,
      question: '🔄 Como funciona o sistema de circularidade?',
      answer: 'O Aton usa um sistema de banco de materiais em camadas que organiza diferentes tipos de resíduos (EPS, plásticos, madeira) em processos específicos de transformação, criando um ciclo contínuo onde resíduos se tornam recursos.'
    },
    {
      id: 2,
      question: '📊 Qual é o impacto ambiental do projeto?',
      answer: 'Já processamos mais de 94 toneladas de material, evitamos 260 toneladas de CO₂ e economizamos 720 MWh de energia. Nosso objetivo é alcançar neutralidade carbônica até 2030.'
    },
    {
      id: 3,
      question: '🏭 Que tipos de materiais são processados?',
      answer: 'Processamos principalmente EPS (isopor), plásticos diversos (PET, PP, PE, PVC), madeira e biomassa, papel. Cada material passa por um processo específico em nossa estrutura de camadas.'
    },
    {
      id: 4,
      question: '🤝 Como posso fazer parceria com o Aton?',
      answer: 'Oferecemos parcerias para empresas, governos e comunidades. Entre em contato conosco através do email jimmycastilho555@gmail.com para discutir oportunidades de colaboração.'
    },
    {
      id: 5,
      question: '💡 Qual tecnologia é utilizada?',
      answer: 'Utilizamos IoT para monitoramento inteligente, sistemas automatizados de classificação, tecnologias de processamento avançado e plataformas digitais para rastreamento de impacto em tempo real.'
    },
    {
      id: 6,
      question: '🎯 Quais são os próximos passos do projeto?',
      answer: 'Estamos expandindo para novas regiões, desenvolvendo parcerias estratégicas, implementando IA avançada para otimização de processos e criando certificações de sustentabilidade.'
    }
  ]

  const handleQuestionClick = (question: typeof predefinedQuestions[0]) => {
    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      content: question.question,
      timestamp: new Date()
    }
    
    const botMessage: Message = {
      id: messages.length + 2,
      type: 'bot',
      content: question.answer,
      timestamp: new Date()
    }
    
    setMessages(prev => [...prev, userMessage, botMessage])
  }

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return
    
    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    }
    
    const botMessage: Message = {
      id: messages.length + 2,
      type: 'bot',
      content: 'Obrigado pela sua pergunta! Para uma resposta mais detalhada, por favor entre em contato conosco através do email jimmycastilho555@gmail.com ou escolha uma das perguntas sugeridas acima.',
      timestamp: new Date()
    }
    
    setMessages(prev => [...prev, userMessage, botMessage])
    setInputMessage('')
  }

  return (
    <section id="chatbot" className="py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <Bot className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">Assistente Inteligente</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Tire suas Dúvidas sobre o
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Projeto Aton
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Nosso assistente inteligente está aqui para esclarecer todas as suas questões 
            sobre sustentabilidade, circularidade e inovação.
          </p>
        </motion.div>

        {/* Predefined Questions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {predefinedQuestions.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => handleQuestionClick(item)}
              className="group text-left bg-slate-800/50 border border-slate-700 rounded-2xl p-6 backdrop-blur-sm hover:border-blue-500/30 hover:bg-slate-700/50 transition-all duration-300"
            >
              <div className="flex items-start space-x-3">
                <HelpCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium group-hover:text-blue-300 transition-colors">
                    {item.question}
                  </p>
                  <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-sm text-gray-400 line-clamp-3">
                      {item.answer.substring(0, 100)}...
                    </p>
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Interactive Chat Demo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-slate-800/50 border border-slate-700 rounded-3xl backdrop-blur-sm overflow-hidden">
            
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Assistente Aton</h3>
                    <p className="text-blue-100 text-sm">Online • Resposta instantânea</p>
                  </div>
                </div>
                <Sparkles className="w-6 h-6 text-white/80" />
              </div>
            </div>

            {/* Chat Messages */}
            <div className="h-96 overflow-y-auto p-6 space-y-4">
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start space-x-3 max-w-3xl ${
                      message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                    }`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.type === 'user' 
                          ? 'bg-green-500' 
                          : 'bg-blue-500'
                      }`}>
                        {message.type === 'user' ? (
                          <User className="w-5 h-5 text-white" />
                        ) : (
                          <Bot className="w-5 h-5 text-white" />
                        )}
                      </div>
                      <div className={`px-4 py-3 rounded-2xl ${
                        message.type === 'user'
                          ? 'bg-green-500 text-white'
                          : 'bg-slate-700 text-gray-200'
                      }`}>
                        <p className="text-sm leading-relaxed">{message.content}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Chat Input */}
            <div className="border-t border-slate-700 p-6">
              <div className="flex items-center space-x-4">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Digite sua pergunta sobre o Aton..."
                  className="flex-1 bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSendMessage}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                💡 Clique nas perguntas sugeridas acima para respostas detalhadas
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}