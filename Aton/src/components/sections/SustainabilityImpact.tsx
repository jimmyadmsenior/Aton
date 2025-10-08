'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Zap, Bot, Users, Target, Award } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts'
import { useState } from 'react'

export default function SustainabilityImpact() {
  const [activeMetric, setActiveMetric] = useState(0)

  // Dados para os gráficos
  const recyclingData = [
    { month: 'Jan', recycled: 45, co2Saved: 120, energy: 380 },
    { month: 'Feb', recycled: 52, co2Saved: 140, energy: 420 },
    { month: 'Mar', recycled: 68, co2Saved: 180, energy: 510 },
    { month: 'Apr', recycled: 75, co2Saved: 200, energy: 580 },
    { month: 'Mai', recycled: 89, co2Saved: 240, energy: 650 },
    { month: 'Jun', recycled: 94, co2Saved: 260, energy: 720 }
  ]

  const materialDistribution = [
    { name: 'Espuma dos Bancos', value: 45, color: '#6B7280' },
    { name: 'Tecidos/Couros', value: 30, color: '#4B5563' },
    { name: 'Estrutura Metálica', value: 20, color: '#374151' },
    { name: 'Componentes Plásticos', value: 5, color: '#9CA3AF' }
  ]

  const impactMetrics = [
    {
      title: 'Bancos Reaproveitados',
      value: '2.847',
      growth: '+85%',
      icon: Bot,
      color: 'from-gray-600 to-gray-800',
      description: 'Bancos processados mensalmente'
    },
    {
      title: 'Redução de Desperdício',
      value: '90%',
      growth: '+25%',
      icon: Zap,
      color: 'from-gray-700 to-gray-900',
      description: 'Menos descarte em aterros'
    },
    {
      title: 'Economia Toyota',
      value: 'R$ 1.2M',
      growth: '+60%',
      icon: Target,
      color: 'from-gray-600 to-gray-800',
      description: 'Economia anual estimada'
    },
    {
      title: 'Pegada de Carbono',
      value: '-75%',
      growth: '+40%',
      icon: Users,
      color: 'from-gray-500 to-gray-700',
      description: 'Redução vs. produção nova'
    }
  ]

  const sustainabilityGoals = [
    { goal: 'Neutralidade Carbônica', progress: 78, target: 2030 },
    { goal: 'Zero Desperdício', progress: 65, target: 2028 },
    { goal: 'Economia Circular', progress: 82, target: 2025 },
    { goal: 'Impacto Social', progress: 71, target: 2027 }
  ]

  return (
    <section id="impact" className="py-24 bg-white">
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
            <TrendingUp className="w-4 h-4 text-gray-600" />
            <span className="text-gray-700 text-sm font-medium">Impacto Mensurável</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">
              Impacto Comprovado
            </span>
            <br />
            <span className="text-black">
              para a Toyota
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Resultados mensuráveis do nosso sistema de reaproveitamento de bancos, 
            gerando economia real e impacto ambiental positivo para a Toyota.
          </p>
        </motion.div>

        {/* Impact Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impactMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setActiveMetric(index)}
            >
              <div className={`bg-slate-800/50 border rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 ${
                activeMetric === index ? 'border-green-500/50 shadow-2xl shadow-green-500/10' : 'border-slate-700 hover:border-green-500/30'
              }`}>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${metric.color} rounded-xl flex items-center justify-center`}>
                    <metric.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-green-400 font-semibold">{metric.growth}</div>
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-sm text-gray-400 mb-2">{metric.title}</div>
                <div className="text-xs text-gray-500">{metric.description}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Recycling Trends Chart */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm"
          >
            <div className="flex items-center space-x-3 mb-6">
              <TrendingUp className="w-6 h-6 text-gray-600" />
              <h3 className="text-xl font-semibold text-gray-900">Evolução da Reciclagem</h3>
            </div>
            
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={recyclingData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="month" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#FFFFFF', 
                    border: '1px solid #E5E7EB',
                    borderRadius: '12px',
                    color: '#374151'
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="recycled" 
                  stroke="#374151" 
                  strokeWidth={3}
                  dot={{ fill: '#374151', strokeWidth: 2, r: 6 }}
                  name="Material Reciclado (ton)"
                />
                <Line 
                  type="monotone" 
                  dataKey="co2Saved" 
                  stroke="#6B7280" 
                  strokeWidth={2}
                  dot={{ fill: '#6B7280', strokeWidth: 2, r: 4 }}
                  name="CO₂ Evitado (ton)"
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Solution Distribution Pie Chart */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Bot className="w-6 h-6 text-gray-600" />
              <h3 className="text-xl font-semibold text-gray-900">Distribuição por Material</h3>
            </div>
            
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={materialDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {materialDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#FFFFFF', 
                    border: '1px solid #E5E7EB',
                    borderRadius: '12px',
                    color: '#374151'
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
            
            <div className="grid grid-cols-2 gap-4 mt-6">
              {materialDistribution.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-sm text-gray-700">{item.name}</span>
                  <span className="text-sm text-gray-500">{item.value}%</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Sustainability Goals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-green-500/10 border border-green-500/20 rounded-3xl p-12"
        >
          <div className="text-center mb-12">
            <Award className="w-16 h-16 text-green-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">Metas de Sustentabilidade</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Nossos compromissos mensuráveis para um futuro mais sustentável
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sustainabilityGoals.map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
              >
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">{goal.goal}</h4>
                  <span className="text-sm text-gray-600">Meta: {goal.target}</span>
                </div>
                
                <div className="mb-3">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Progresso</span>
                    <span>{goal.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <motion.div
                      className="bg-gradient-to-r from-gray-600 to-gray-800 h-3 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${goal.progress}%` }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}