'use client'

import { motion } from 'framer-motion'
import { Bot, Brain, Zap, BarChart3, ArrowRight, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import Model3D from '../3DModel'

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)

  const processSteps = [
    {
      id: 0,
      name: 'Desmontagem Inteligente',
      color: 'from-gray-600 to-gray-800',
      phase: 'Primeira Camada',
      process: 'Separação de Componentes dos Bancos',
      output: 'Peças Classificadas',
      impact: '100% aproveitamento',
      icon: '�',
      description: 'Desmontagem sistemática de bancos automotivos separando espuma, tecido e estrutura metálica'
    },
    {
      id: 1,
      name: 'Processamento Específico',
      color: 'from-gray-700 to-gray-900',
      phase: 'Segunda Camada',
      process: 'Limpeza e Reprocessamento por Material',
      output: 'Componentes Renovados',
      impact: '85% recuperação',
      icon: '⚙️',
      description: 'Cada material passa por processo específico: limpeza de espumas, tratamento de tecidos, reciclagem de metais'
    },
    {
      id: 2,
      name: 'Compartilhamento',
      color: 'from-gray-800 to-black',
      phase: 'Terceira Camada',
      process: 'Redistribuição na Cadeia Toyota',
      output: 'Novos Bancos Sustentáveis',
      impact: '90% circularidade',
      icon: '🔄',
      description: 'Componentes processados retornam à cadeia produtiva Toyota como novos bancos ou peças de reposição'
    }
  ]

  const steps = [
    {
      icon: Bot,
      title: 'Avaliação & Planejamento',
      description: 'Análise de fluxos de materiais e identificação de oportunidades',
      detail: 'Mapeamento completo dos tipos de resíduos e potenciais de reaproveitamento'
    },
    {
      icon: Brain,
      title: 'Desenvolvimento Sustentável',
      description: 'Criação de soluções personalizadas para cada tipo de material',
      detail: 'Desenvolvimento de processos otimizados para cada categoria de resíduo'
    },
    {
      icon: Zap,
      title: 'Integração Perfeita',
      description: 'Implementação de sistemas automatizados de processamento',
      detail: 'Integração suave com infraestrutura existente e minimal impacto operacional'
    },
    {
      icon: BarChart3,
      title: 'Otimização Contínua',
      description: 'Monitoramento de desempenho e otimização da eficiência',
      detail: 'Análises em tempo real e melhoramento contínuo dos processos de reciclagem'
    }
  ]

  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-gray-100 border border-gray-200 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-gray-600" />
            <span className="text-gray-700 text-sm font-medium">Como Funciona</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">
              Reaproveitamento de
            </span>
            <br />
            <span className="text-black">
              Bancos Toyota
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sistema em três camadas que revoluciona o processo de desmontagem, processamento 
            e reaproveitamento de bancos automotivos na cadeia produtiva Toyota.
          </p>
        </motion.div>

        {/* Modelo 3D do Banco Desconstruído */}
        <div className="mb-24 relative">
          {/* Background decorativo com padrão de desmontagem */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <div className="absolute top-0 left-0 w-32 h-32 bg-red-100 rounded-full opacity-20 -translate-x-16 -translate-y-16"></div>
            <div className="absolute top-20 right-0 w-24 h-24 bg-orange-100 rounded-full opacity-30 translate-x-12"></div>
            <div className="absolute bottom-0 left-1/4 w-20 h-20 bg-yellow-100 rounded-full opacity-25 translate-y-10"></div>
            <div className="absolute bottom-10 right-1/3 w-16 h-16 bg-red-200 rounded-full opacity-20"></div>
          </div>
          
          <div className="relative bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 rounded-3xl p-8 border border-red-100/50 shadow-xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center space-x-2 bg-red-100 border border-red-200 rounded-full px-4 py-2 mb-6">
                <span className="text-2xl">🔧</span>
                <span className="text-red-700 text-sm font-medium">Desmontagem</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Visualização 3D: Banco por Dentro
              </h3>
              <p className="text-gray-700 max-w-2xl mx-auto text-lg">
                Explore o modelo 3D interativo que mostra as camadas de materiais
                do nosso banco automotivo em processo de desmontagem.
              </p>
            </motion.div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-200/20 via-orange-200/20 to-yellow-200/20 rounded-2xl blur-xl"></div>
              <Model3D 
                modelPath="/media/car-seat-deconstructed/source/model.glb" 
                height="h-96"
                autoRotate={true}
              />
            </div>
          </div>
        </div>

        {/* Modelo 3D do Banco Pronto */}
        <div className="mb-24 relative">
          {/* Background decorativo com padrão de finalização */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <div className="absolute top-0 right-0 w-40 h-40 bg-green-100 rounded-full opacity-20 translate-x-20 -translate-y-20"></div>
            <div className="absolute top-1/4 left-0 w-32 h-32 bg-emerald-100 rounded-full opacity-25 -translate-x-16"></div>
            <div className="absolute bottom-0 right-1/4 w-28 h-28 bg-teal-100 rounded-full opacity-30 translate-y-14"></div>
            <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-green-200 rounded-full opacity-20"></div>
          </div>
          
          <div className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-3xl p-8 border border-green-100/50 shadow-xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center space-x-2 bg-green-100 border border-green-200 rounded-full px-4 py-2 mb-6">
                <span className="text-2xl">✨</span>
                <span className="text-green-700 text-sm font-medium">Resultado Final</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Design Automotivo: Banco Finalizado
              </h3>
              <p className="text-gray-700 max-w-2xl mx-auto text-lg">
                Veja como fica o resultado final - um banco automotivo completo e renovado 
                através do processo de reaproveitamento sustentável.
              </p>
            </motion.div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-200/20 via-emerald-200/20 to-teal-200/20 rounded-2xl blur-xl"></div>
              <Model3D 
                modelPath="/media/car-seat-design/source/model.glb" 
                height="h-96"
                autoRotate={true}
              />
            </div>
          </div>
        </div>

        {/* Modelos 3D dos Carros Toyota */}
        <div className="mb-24 relative">
          {/* Background decorativo automotive */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-100 rounded-full opacity-10 -translate-y-32"></div>
            <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-purple-100 rounded-full opacity-15 translate-y-28"></div>
            <div className="absolute top-1/2 left-0 w-48 h-48 bg-indigo-100 rounded-full opacity-12 -translate-x-24"></div>
            <div className="absolute top-1/3 right-0 w-40 h-40 bg-blue-200 rounded-full opacity-10 translate-x-20"></div>
          </div>
          
          <div className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-black rounded-3xl p-8 border border-gray-700/50 shadow-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center space-x-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
                <span className="text-2xl">🚗</span>
                <span className="text-blue-300 text-sm font-medium">Aplicação Prática</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Veículos Toyota: Implementação Real
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                Explore os modelos dos veículos onde nossos bancos reaproveitados 
                serão implementados na cadeia produtiva Toyota.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700/50">
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-red-600/20 border border-red-500/30 rounded-full px-4 py-2">
                      <span className="text-red-300 text-sm font-medium">Honda Racing</span>
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-6 text-center">
                    Honda Civic Type R 2018
                  </h4>
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-xl"></div>
                    <Model3D 
                      modelPath="/media/2018_honda_civic_type_r.glb" 
                      height="h-80"
                      autoRotate={true}
                    />
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700/50">
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-2">
                      <span className="text-blue-300 text-sm font-medium">Toyota Official</span>
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-6 text-center">
                    Toyota Corolla 2020
                  </h4>
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl"></div>
                    <Model3D 
                      modelPath="/media/toyota-corolla-2020/source/MDL13625_reversed.glb" 
                      height="h-80"
                      autoRotate={true}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Elementos decorativos automotive */}
            <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="absolute top-6 right-8 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse delay-500"></div>
          </div>
        </div>

        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="space-y-4">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    className={`relative cursor-pointer transition-all duration-500 ${
                      activeStep === index ? 'scale-105' : 'scale-100 opacity-70'
                    }`}
                    onClick={() => setActiveStep(index)}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className={`h-24 bg-gradient-to-r ${step.color} rounded-2xl flex items-center px-6 shadow-lg ${
                      activeStep === index ? 'shadow-gray-500/25' : ''
                    }`}>
                      <span className="text-3xl mr-4">{step.icon}</span>
                      <div>
                        <h3 className="text-white font-semibold text-lg">{step.name}</h3>
                        <p className="text-white/80 text-sm">{step.phase}</p>
                      </div>
                      <div className="ml-auto">
                        <ArrowRight className={`w-6 h-6 text-white transition-transform ${
                          activeStep === index ? 'translate-x-2' : ''
                        }`} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-xl"
            >
              <div key={activeStep} className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${processSteps[activeStep].color} rounded-2xl flex items-center justify-center text-2xl`}>
                    {processSteps[activeStep].icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {processSteps[activeStep].name}
                    </h3>
                    <p className="text-gray-600">{processSteps[activeStep].phase}</p>
                  </div>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed">
                  {processSteps[activeStep].description}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">Processo</h4>
                    <p className="text-gray-600 text-sm">{processSteps[activeStep].process}</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">Resultado</h4>
                    <p className="text-gray-600 text-sm">{processSteps[activeStep].output}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-xl p-4">
                  <div>
                    <h4 className="text-sm font-semibold text-green-900 mb-1">Impacto</h4>
                    <p className="text-green-700 text-lg font-bold">{processSteps[activeStep].impact}</p>
                  </div>
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gray-200 transition-colors">
                <step.icon className="w-8 h-8 text-gray-700" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {step.description}
              </p>
              
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}