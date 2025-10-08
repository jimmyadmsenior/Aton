'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface ContactForm {
  name: string
  email: string
  subject: string
  category: string
  message: string
}

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const categories = [
    { value: 'support', label: 'Suporte Técnico' },
    { value: 'partnership', label: 'Parcerias' },
    { value: 'feedback', label: 'Feedback' },
    { value: 'business', label: 'Oportunidades de Negócio' },
    { value: 'press', label: 'Imprensa' },
    { value: 'other', label: 'Outros' }
  ]

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      info: 'contato@aton.com.br',
      link: 'mailto:contato@aton.com.br'
    },
    {
      icon: '📱',
      title: 'Telefone',
      info: '(11) 3000-0000',
      link: 'tel:+551130000000'
    },
    {
      icon: '📍',
      title: 'Endereço',
      info: 'São Paulo, SP - Brasil',
      link: 'https://maps.google.com'
    },
    {
      icon: '🕐',
      title: 'Horário',
      info: 'Segunda à Sexta: 9h - 18h',
      link: ''
    }
  ]

  const socialLinks = [
    {
      platform: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com/company/aton',
      color: 'hover:text-blue-600'
    },
    {
      platform: 'Instagram',
      icon: '📷',
      url: 'https://instagram.com/aton_oficial',
      color: 'hover:text-pink-600'
    },
    {
      platform: 'Twitter',
      icon: '🐦',
      url: 'https://twitter.com/aton_oficial',
      color: 'hover:text-blue-400'
    },
    {
      platform: 'YouTube',
      icon: '📺',
      url: 'https://youtube.com/@aton',
      color: 'hover:text-red-600'
    }
  ]

  const faqs = [
    {
      question: 'Como posso me tornar um ponto de coleta?',
      answer: 'Entre em contato conosco através do formulário selecionando "Parcerias" como categoria. Nossa equipe entrará em contato para explicar o processo.'
    },
    {
      question: 'Quanto tempo leva para aprovar uma submissão?',
      answer: 'Normalmente processamos as submissões em até 24-48 horas úteis. Você receberá uma notificação assim que sua submissão for aprovada.'
    },
    {
      question: 'Como posso resgatar meus pontos?',
      answer: 'Acesse a seção "Recompensas" em sua conta para ver todas as opções disponíveis, desde doações até produtos sustentáveis.'
    },
    {
      question: 'A Aton está disponível em outras cidades?',
      answer: 'Atualmente estamos focados em São Paulo, mas temos planos de expansão. Deixe seu interesse registrado que te avisaremos quando chegarmos à sua cidade!'
    }
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simular envio do formulário
    await new Promise(resolve => setTimeout(resolve, 2000))

    setLoading(false)
    setSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setForm({
        name: '',
        email: '',
        subject: '',
        category: '',
        message: ''
      })
    }, 3000)
  }

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
              Fale <span className="text-primary-600">Conosco</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Estamos aqui para ajudar! Entre em contato conosco para tirar dúvidas, 
              dar sugestões ou explorar oportunidades de parceria.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Envie sua Mensagem
              </h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-xl font-semibold text-green-600 mb-2">
                    Mensagem Enviada!
                  </h3>
                  <p className="text-gray-600">
                    Obrigado pelo contato. Responderemos em breve!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Seu nome completo"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Categoria *
                    </label>
                    <select
                      name="category"
                      required
                      value={form.category}
                      onChange={handleChange}
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Selecione uma categoria</option>
                      {categories.map(category => (
                        <option key={category.value} value={category.value}>
                          {category.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Assunto *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Resumo do que você gostaria de falar"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Detalhe sua mensagem aqui..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-primary-700 hover:to-secondary-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Enviando...' : 'Enviar Mensagem'}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Informações de Contato
                </h2>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-2xl mr-4 flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {item.title}
                        </h3>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-primary-600 hover:text-primary-700 transition-colors"
                          >
                            {item.info}
                          </a>
                        ) : (
                          <p className="text-gray-600">{item.info}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Nos Siga nas Redes Sociais
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl transition-colors ${social.color}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  🚀 Resposta Rápida
                </h3>
                <p className="text-gray-600 mb-4">
                  Nosso tempo médio de resposta é de 24 horas durante dias úteis.
                </p>
                <div className="text-sm text-gray-500">
                  Para urgências, entre em contato pelo telefone
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-gray-600">
              Respostas rápidas para as dúvidas mais comuns
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl border border-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Não encontrou a resposta que procurava?
            </p>
            <a
              href="#contact-form"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
            >
              Entre em contato conosco
              <span className="ml-1">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nossa Localização
            </h2>
            <p className="text-gray-600">
              Visite nosso escritório em São Paulo
            </p>
          </motion.div>

          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🗺️</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Mapa Interativo
              </h3>
              <p className="text-gray-600">
                Integração com Google Maps seria implementada aqui
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}