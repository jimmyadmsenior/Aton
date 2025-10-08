'use client'

import { motion } from 'framer-motion'
import { Bot, Brain, Zap, BarChart3, ArrowRight, CheckCircle } from 'lucide-react'
import { useState } from 'react'

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)

  const processSteps = [
    {
      id: 0,
      name: 'Discovery & Analysis',
      color: 'from-gray-600 to-gray-800',
      phase: 'Business Assessment',
      process: 'Workflow Analysis & Data Mapping',
      output: 'Custom AI Strategy',
      impact: '3x faster insights',
      icon: '�',
      description: 'Deep dive into your processes to identify automation opportunities'
    },
    {
      id: 1,
      name: 'AI Development',
      color: 'from-gray-700 to-gray-900',
      phase: 'Custom Model Training',
      process: 'Algorithm Design & Training',
      output: 'Tailored AI Solution',
      impact: '95% accuracy rate',
      icon: '🤖',
      description: 'Build and train AI models specific to your business needs'
    },
    {
      id: 2,
      name: 'Integration & Testing',
      color: 'from-gray-800 to-black',
      phase: 'System Integration',
      process: 'API Integration & Testing',
      output: 'Live AI Implementation',
      impact: '99% uptime reliability',
      icon: '⚡',
      description: 'Seamless integration with your existing systems'
    }
  ]

  const steps = [
    {
      icon: Bot,
      title: 'Assessment & Planning',
      description: 'Analyze workflows and identify automation opportunities',
      detail: 'Deep dive into your business processes to map AI integration points'
    },
    {
      icon: Brain,
      title: 'Custom AI Development',
      description: 'Build tailored AI solutions for your specific needs',
      detail: 'Design and train models optimized for your industry and requirements'
    },
    {
      icon: Zap,
      title: 'Seamless Integration',
      description: 'Deploy AI solutions into your existing systems',
      detail: 'Smooth integration with minimal disruption to current operations'
    },
    {
      icon: BarChart3,
      title: 'Continuous Optimization',
      description: 'Monitor performance and optimize AI effectiveness',
      detail: 'Real-time analytics and continuous improvement of AI performance'
    }
  ]

  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
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
            <Zap className="w-4 h-4 text-gray-600" />
            <span className="text-gray-700 text-sm font-medium">Como Funciona</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">
              O Sistema de
            </span>
            <br />
            <span className="text-black">
              Banco de Materiais
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
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

            {/* Layer Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-4xl">{processSteps[activeStep].icon}</span>
                  <h3 className="text-2xl font-bold text-gray-900">{processSteps[activeStep].name}</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-gray-900 font-semibold mb-2">Process</h4>
                    <p className="text-gray-600">{processSteps[activeStep].process}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-gray-900 font-semibold mb-2">Output</h4>
                    <p className="text-gray-600">{processSteps[activeStep].output}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-gray-900 font-semibold mb-2">Impact</h4>
                    <p className="text-black font-semibold">{processSteps[activeStep].impact}</p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-xl">
                  <p className="text-gray-700 text-sm">{processSteps[activeStep].description}</p>
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
            className="text-3xl font-bold text-center text-gray-900 mb-16"
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
                <div className="bg-white border border-gray-200 rounded-2xl p-6 h-full shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300">
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-xl flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-600">
                      0{index + 1}
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-black transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4 group-hover:text-gray-700 transition-colors">
                    {step.description}
                  </p>
                  <p className="text-xs text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">
                    {step.detail}
                  </p>
                  
                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-16 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-400 to-transparent"></div>
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