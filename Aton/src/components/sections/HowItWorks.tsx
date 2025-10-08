'use client'

import { motion } from 'framer-motion'
import { Layers, Package, Recycle, BarChart3, ArrowRight, Zap } from 'lucide-react'
import { useState } from 'react'

export default function HowItWorks() {
  const [activeLayer, setActiveLayer] = useState(0)

  const bankLayers = [
    {
      id: 0,
      name: 'EPS (Isopor)',
      color: 'from-blue-500 to-cyan-500',
      material: 'Poliestireno Expandido',
      processing: 'Descontaminação e Compactação',
      output: 'Matéria-prima para novos produtos',
      impact: '90% redução de volume',
      icon: '🔵',
      description: 'Transformação de EPS em pellets para remanufatura'
    },
    {
      id: 1,
      name: 'Plásticos Diversos',
      color: 'from-green-500 to-emerald-500',
      material: 'PET, PP, PE, PVC',
      processing: 'Separação, Limpeza e Trituração',
      output: 'Flakes e pellets plásticos',
      impact: '85% aproveitamento',
      icon: '🟢',
      description: 'Processamento de múltiplos tipos de plásticos'
    },
    {
      id: 2,
      name: 'Madeira e Biomassa',
      color: 'from-amber-500 to-orange-500',
      material: 'Resíduos de madeira, papel',
      processing: 'Trituração e Compostagem',
      output: 'Biomassa energética e adubo',
      impact: '95% reaproveitamento',
      icon: '🟤',
      description: 'Conversão de matéria orgânica em recursos'
    }
  ]

  const steps = [
    {
      icon: Package,
      title: 'Coleta Inteligente',
      description: 'Recebimento e classificação automatizada de materiais',
      detail: 'Sistema IoT monitora e categoriza resíduos em tempo real'
    },
    {
      icon: Layers,
      title: 'Separação por Camadas',
      description: 'Organização em camadas especializadas do banco',
      detail: 'Cada material é direcionado para sua camada específica de processamento'
    },
    {
      icon: Recycle,
      title: 'Processamento Circular',
      description: 'Transformação em novos recursos utilizáveis',
      detail: 'Tecnologias avançadas convertem resíduos em matérias-primas'
    },
    {
      icon: BarChart3,
      title: 'Impacto Mensurável',
      description: 'Monitoramento contínuo dos benefícios ambientais',
      detail: 'Métricas em tempo real de CO₂ evitado e recursos gerados'
    }
  ]

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-slate-800 to-slate-900">
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
            <Zap className="w-4 h-4 text-green-400" />
            <span className="text-green-300 text-sm font-medium">Como Funciona</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              O Sistema de
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Banco de Materiais
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Um sistema inovador de camadas que organiza, processa e transforma diferentes tipos 
            de materiais recicláveis em recursos valiosos.
          </p>
        </motion.div>

        {/* Bank Layers Interactive */}
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Layer Visualization */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="space-y-4">
                {bankLayers.map((layer, index) => (
                  <motion.div
                    key={layer.id}
                    className={`relative cursor-pointer transition-all duration-500 ${
                      activeLayer === index ? 'scale-105' : 'scale-100 opacity-70'
                    }`}
                    onClick={() => setActiveLayer(index)}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className={`h-24 bg-gradient-to-r ${layer.color} rounded-2xl flex items-center px-6 shadow-2xl ${
                      activeLayer === index ? 'shadow-green-500/25' : ''
                    }`}>
                      <span className="text-3xl mr-4">{layer.icon}</span>
                      <div>
                        <h3 className="text-white font-semibold text-lg">{layer.name}</h3>
                        <p className="text-white/80 text-sm">{layer.material}</p>
                      </div>
                      <div className="ml-auto">
                        <ArrowRight className={`w-6 h-6 text-white transition-transform ${
                          activeLayer === index ? 'translate-x-2' : ''
                        }`} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Layer Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm">
                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-4xl">{bankLayers[activeLayer].icon}</span>
                  <h3 className="text-2xl font-bold text-white">{bankLayers[activeLayer].name}</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-green-400 font-semibold mb-2">Processamento</h4>
                    <p className="text-gray-300">{bankLayers[activeLayer].processing}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-green-400 font-semibold mb-2">Resultado</h4>
                    <p className="text-gray-300">{bankLayers[activeLayer].output}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-green-400 font-semibold mb-2">Impacto</h4>
                    <p className="text-emerald-300 font-semibold">{bankLayers[activeLayer].impact}</p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                  <p className="text-green-200 text-sm">{bankLayers[activeLayer].description}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Process Steps */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-white mb-16"
          >
            Processo de Transformação
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 h-full backdrop-blur-sm hover:border-green-500/30 transition-all duration-300">
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-green-400">
                      0{index + 1}
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-green-300 transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors">
                    {step.description}
                  </p>
                  <p className="text-xs text-green-300 opacity-0 group-hover:opacity-100 transition-opacity">
                    {step.detail}
                  </p>
                  
                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-16 -right-4 w-8 h-0.5 bg-gradient-to-r from-green-500 to-transparent"></div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}