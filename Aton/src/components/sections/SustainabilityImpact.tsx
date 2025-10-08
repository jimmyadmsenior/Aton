'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Leaf, Zap, Users, Target, Award } from 'lucide-react'
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
    { name: 'Plásticos', value: 40, color: '#10B981' },
    { name: 'EPS/Isopor', value: 25, color: '#3B82F6' },
    { name: 'Madeira', value: 20, color: '#F59E0B' },
    { name: 'Papel', value: 10, color: '#8B5CF6' },
    { name: 'Outros', value: 5, color: '#EF4444' }
  ]

  const impactMetrics = [
    {
      title: 'Material Reciclado',
      value: '94 ton',
      growth: '+28%',
      icon: Leaf,
      color: 'from-green-500 to-emerald-600',
      description: 'Toneladas processadas este mês'
    },
    {
      title: 'CO₂ Evitado',
      value: '260 ton',
      growth: '+35%',
      icon: Zap,
      color: 'from-blue-500 to-cyan-600',
      description: 'Emissões evitadas'
    },
    {
      title: 'Energia Poupada',
      value: '720 MWh',
      growth: '+42%',
      icon: Target,
      color: 'from-purple-500 to-pink-600',
      description: 'Energia economizada'
    },
    {
      title: 'Comunidades Impactadas',
      value: '15',
      growth: '+50%',
      icon: Users,
      color: 'from-orange-500 to-red-600',
      description: 'Parceiros ativos'
    }
  ]

  const sustainabilityGoals = [
    { goal: 'Neutralidade Carbônica', progress: 78, target: 2030 },
    { goal: 'Zero Desperdício', progress: 65, target: 2028 },
    { goal: 'Economia Circular', progress: 82, target: 2025 },
    { goal: 'Impacto Social', progress: 71, target: 2027 }
  ]

  return (
    <section id="impact" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
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
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span className="text-green-300 text-sm font-medium">Impacto Mensurável</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Transformação
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Sustentável Comprovada
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Acompanhe em tempo real como o Aton está criando impacto positivo no meio ambiente 
            e na sociedade através de métricas transparentes e verificáveis.
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
              <TrendingUp className="w-6 h-6 text-green-400" />
              <h3 className="text-xl font-semibold text-white">Evolução da Reciclagem</h3>
            </div>
            
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={recyclingData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '12px',
                    color: '#F3F4F6'
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="recycled" 
                  stroke="#10B981" 
                  strokeWidth={3}
                  dot={{ fill: '#10B981', strokeWidth: 2, r: 6 }}
                  name="Material Reciclado (ton)"
                />
                <Line 
                  type="monotone" 
                  dataKey="co2Saved" 
                  stroke="#3B82F6" 
                  strokeWidth={2}
                  dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                  name="CO₂ Evitado (ton)"
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Material Distribution Pie Chart */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Leaf className="w-6 h-6 text-green-400" />
              <h3 className="text-xl font-semibold text-white">Distribuição por Material</h3>
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
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '12px',
                    color: '#F3F4F6'
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
                  <span className="text-sm text-gray-300">{item.name}</span>
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
                className="bg-slate-800/50 rounded-2xl p-6"
              >
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-semibold text-white">{goal.goal}</h4>
                  <span className="text-sm text-gray-400">Meta: {goal.target}</span>
                </div>
                
                <div className="mb-3">
                  <div className="flex justify-between text-sm text-gray-300 mb-2">
                    <span>Progresso</span>
                    <span>{goal.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <motion.div
                      className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full"
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