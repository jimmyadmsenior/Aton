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
      content: 'Olá! 👋 Eu sou o assistente do Aton. Como posso te ajudar a entender nossa proposta de reaproveitamento de bancos para a Toyota?',
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')

  const predefinedQuestions = [
    {
      id: 1,
      question: '🚗 Como funciona o reaproveitamento de bancos Toyota?',
      answer: 'Nosso sistema em 3 camadas desmonta os bancos separando espuma, tecidos e estrutura metálica. Cada componente passa por processo específico de limpeza e reprocessamento, retornando à cadeia produtiva como novos bancos ou peças de reposição.'
    },
    {
      id: 2,
      question: '📊 Qual o impacto econômico para a Toyota?',
      answer: 'Estimamos economia anual de R$ 1,2 milhão com 90% de redução no descarte e reaproveitamento de 2.847 bancos mensalmente. Isso representa 75% menos pegada de carbono comparado à produção de bancos novos.'
    },
    {
      id: 3,
      question: '♻️ Que componentes dos bancos são reaproveitados?',
      answer: 'Reaproveitamos 100% dos componentes: 45% espuma (limpeza e renovação), 30% tecidos/couros (tratamento e reutilização), 20% estrutura metálica (reciclagem) e 5% componentes plásticos (reprocessamento).'
    },
    {
      id: 4,
      question: '🤝 Como seria a implementação na Toyota?',
      answer: 'Propomos integração direta na cadeia produtiva Toyota com centro de processamento dedicado, sistema de logística reversa para coleta de bancos usados e plataforma de rastreamento em tempo real para monitorar todo o processo.'
    },
    {
      id: 5,
      question: '🌍 Quais os benefícios ambientais específicos?',
      answer: 'Redução de 75% na pegada de carbono, eliminação de 90% do descarte em aterros, economia de recursos naturais na produção de novos bancos e contribuição para as metas de sustentabilidade da Toyota.'
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
    <section id="chatbot" className="py-24 bg-black relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"
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
          <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
            <Bot className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-medium">Assistente Inteligente</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">
              Descubra Nossa Proposta
            </span>
            <br />
            <span className="text-white">
              para a Toyota
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Nosso assistente está aqui para esclarecer como o sistema de reaproveitamento 
            de bancos pode revolucionar a sustentabilidade na Toyota.
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
              className="group text-left bg-gray-900/70 border border-white/20 rounded-2xl p-6 backdrop-blur-sm hover:border-white/40 hover:bg-gray-800/70 transition-all duration-300"
            >
              <div className="flex items-start space-x-3">
                <HelpCircle className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium group-hover:text-gray-200 transition-colors">
                    {item.question}
                  </p>
                  <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-sm text-gray-300 line-clamp-3">
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
          <div className="bg-gray-900/80 border border-white/20 rounded-3xl backdrop-blur-sm overflow-hidden">
            
            {/* Chat Header */}
            <div className="bg-white px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-black/20 rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">Assistente Aton</h3>
                    <p className="text-gray-600 text-sm">Online • Resposta instantânea</p>
                  </div>
                </div>
                <Sparkles className="w-6 h-6 text-black/60" />
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
                          ? 'bg-white' 
                          : 'bg-white'
                      }`}>
                        {message.type === 'user' ? (
                          <User className="w-5 h-5 text-black" />
                        ) : (
                          <Bot className="w-5 h-5 text-black" />
                        )}
                      </div>
                      <div className={`px-4 py-3 rounded-2xl ${
                        message.type === 'user'
                          ? 'bg-white text-black'
                          : 'bg-gray-800 text-white border border-white/20'
                      }`}>
                        <p className="text-sm leading-relaxed">{message.content}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Chat Input */}
            <div className="border-t border-white/20 p-6">
              <div className="flex items-center space-x-4">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Digite sua pergunta sobre o Aton..."
                  className="flex-1 bg-gray-800 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSendMessage}
                  className="px-6 py-3 bg-white rounded-xl font-semibold text-black hover:bg-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                💡 Clique nas perguntas sugeridas acima para respostas detalhadas
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}