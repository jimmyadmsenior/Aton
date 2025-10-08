'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface DashboardData {
  user: {
    name: string
    email: string
    walletPoints: number
    memberSince: string
  }
  stats: {
    totalSubmissions: number
    approvedSubmissions: number
    pendingSubmissions: number
    totalKgRecycled: number
    totalPointsEarned: number
    totalPointsSpent: number
    co2Avoided: number
    treesEquivalent: number
    rank: number
    totalUsers: number
  }
  recentSubmissions: Array<{
    id: string
    materialType: string
    weightKg: number
    pointsEarned: number
    status: 'PENDING' | 'APPROVED' | 'REJECTED'
    createdAt: string
    destination: string
  }>
  recentTransactions: Array<{
    id: string
    type: 'EARN' | 'SPEND'
    points: number
    description: string
    createdAt: string
  }>
  achievements: Array<{
    id: string
    title: string
    description: string
    icon: string
    unlockedAt: string
    progress?: number
    maxProgress?: number
  }>
}

export default function DashboardPage() {
  const [data, setData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<'overview' | 'submissions' | 'transactions' | 'achievements'>('overview')

  useEffect(() => {
    const fetchDashboardData = async () => {
      setLoading(true)
      
      // Mock data - em produção viria da API
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setData({
        user: {
          name: 'João Silva',
          email: 'joao@email.com',
          walletPoints: 247,
          memberSince: '2024-01-15'
        },
        stats: {
          totalSubmissions: 8,
          approvedSubmissions: 6,
          pendingSubmissions: 2,
          totalKgRecycled: 15.2,
          totalPointsEarned: 347,
          totalPointsSpent: 100,
          co2Avoided: 45.6,
          treesEquivalent: 3,
          rank: 42,
          totalUsers: 1284
        },
        recentSubmissions: [
          {
            id: '1',
            materialType: 'PLASTIC',
            weightKg: 2.5,
            pointsEarned: 25,
            status: 'APPROVED',
            createdAt: '2024-12-07T10:30:00Z',
            destination: 'EcoPonto Centro'
          },
          {
            id: '2',
            materialType: 'BATTERY',
            weightKg: 1.2,
            pointsEarned: 24,
            status: 'PENDING',
            createdAt: '2024-12-06T15:45:00Z',
            destination: 'Toyota Circular+'
          },
          {
            id: '3',
            materialType: 'METAL',
            weightKg: 3.0,
            pointsEarned: 30,
            status: 'APPROVED',
            createdAt: '2024-12-05T09:15:00Z',
            destination: 'EcoPonto Centro'
          }
        ],
        recentTransactions: [
          {
            id: '1',
            type: 'EARN',
            points: 25,
            description: 'Reciclagem de Plástico (2.5kg)',
            createdAt: '2024-12-07T10:30:00Z'
          },
          {
            id: '2',
            type: 'SPEND',
            points: -50,
            description: 'Doação para ONG ambiental',
            createdAt: '2024-12-06T15:45:00Z'
          },
          {
            id: '3',
            type: 'EARN',
            points: 30,
            description: 'Reciclagem de Metal (3.0kg)',
            createdAt: '2024-12-05T09:15:00Z'
          }
        ],
        achievements: [
          {
            id: '1',
            title: 'Primeiro Passo',
            description: 'Primeira submissão aprovada',
            icon: '🎉',
            unlockedAt: '2024-01-20T10:00:00Z'
          },
          {
            id: '2',
            title: 'Reciclador Bronze',
            description: 'Reciclou 10kg de material',
            icon: '🥉',
            unlockedAt: '2024-02-15T14:30:00Z'
          },
          {
            id: '3',
            title: 'Guardião do Planeta',
            description: 'Evitou 50kg de CO₂',
            icon: '🌍',
            unlockedAt: '2024-03-10T09:45:00Z'
          },
          {
            id: '4',
            title: 'Reciclador Prata',
            description: 'Reciclou 25kg de material',
            icon: '🥈',
            unlockedAt: '',
            progress: 15.2,
            maxProgress: 25
          }
        ]
      })
      
      setLoading(false)
    }

    fetchDashboardData()
  }, [])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'APPROVED': return 'text-green-600 bg-green-100'
      case 'PENDING': return 'text-yellow-600 bg-yellow-100'
      case 'REJECTED': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'APPROVED': return 'Aprovada'
      case 'PENDING': return 'Pendente'
      case 'REJECTED': return 'Rejeitada'
      default: return status
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-gray-200 rounded w-1/3"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-lg h-32"></div>
              ))}
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg h-96"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Olá, {data?.user.name}! 👋
              </h1>
              <p className="text-gray-600 mt-2">
                Membro desde {formatDate(data?.user.memberSince || '')}
              </p>
            </div>
            <div className="text-right">
              <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl p-4">
                <div className="text-sm opacity-90">Seus pontos</div>
                <div className="text-2xl font-bold">{data?.user.walletPoints}</div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          >
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl mr-4">
                  📊
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {data?.stats.totalSubmissions}
                  </div>
                  <div className="text-sm text-gray-600">Submissões Totais</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-2xl mr-4">
                  ♻️
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {data?.stats.totalKgRecycled}kg
                  </div>
                  <div className="text-sm text-gray-600">Material Reciclado</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-2xl mr-4">
                  🏆
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    #{data?.stats.rank}
                  </div>
                  <div className="text-sm text-gray-600">
                    de {data?.stats.totalUsers} usuários
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-2xl mr-4">
                  🌱
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {data?.stats.co2Avoided}kg
                  </div>
                  <div className="text-sm text-gray-600">CO₂ Evitado</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          >
            <Link
              href="/submit-waste"
              className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl p-6 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <div className="text-3xl mb-3">📦</div>
              <h3 className="text-lg font-semibold mb-2">Enviar Material</h3>
              <p className="text-sm opacity-90">
                Submeta novos materiais recicláveis e ganhe pontos
              </p>
            </Link>

            <Link
              href="/map"
              className="bg-white border-2 border-primary-600 text-primary-600 rounded-xl p-6 hover:bg-primary-600 hover:text-white transition-all duration-200"
            >
              <div className="text-3xl mb-3">🗺️</div>
              <h3 className="text-lg font-semibold mb-2">Pontos de Coleta</h3>
              <p className="text-sm opacity-75">
                Encontre pontos de coleta próximos a você
              </p>
            </Link>

            <Link
              href="/rewards"
              className="bg-white border-2 border-secondary-600 text-secondary-600 rounded-xl p-6 hover:bg-secondary-600 hover:text-white transition-all duration-200"
            >
              <div className="text-3xl mb-3">🎁</div>
              <h3 className="text-lg font-semibold mb-2">Recompensas</h3>
              <p className="text-sm opacity-75">
                Troque seus pontos por benefícios incríveis
              </p>
            </Link>
          </motion.div>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6">
                {[
                  { key: 'overview', label: 'Visão Geral', icon: '📊' },
                  { key: 'submissions', label: 'Submissões', icon: '📦' },
                  { key: 'transactions', label: 'Transações', icon: '💰' },
                  { key: 'achievements', label: 'Conquistas', icon: '🏆' }
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key as any)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.key
                        ? 'border-primary-500 text-primary-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <span className="mr-2">{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-6">
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Progresso do Mês
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Material Reciclado</span>
                          <span>15.2 / 20 kg</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-primary-600 h-2 rounded-full" style={{ width: '76%' }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Pontos Ganhos</span>
                          <span>347 / 500 pts</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-secondary-600 h-2 rounded-full" style={{ width: '69%' }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>CO₂ Evitado</span>
                          <span>45.6 / 60 kg</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{ width: '76%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Impacto Ambiental
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center p-3 bg-green-50 rounded-lg">
                        <div className="text-2xl mr-3">🌳</div>
                        <div>
                          <div className="font-medium text-green-900">
                            {data?.stats.treesEquivalent} Árvores Salvas
                          </div>
                          <div className="text-sm text-green-700">
                            Equivalente ao seu impacto positivo
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-2xl mr-3">🌍</div>
                        <div>
                          <div className="font-medium text-blue-900">
                            {data?.stats.co2Avoided}kg CO₂ Evitado
                          </div>
                          <div className="text-sm text-blue-700">
                            Sua contribuição para o clima
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                        <div className="text-2xl mr-3">♻️</div>
                        <div>
                          <div className="font-medium text-purple-900">
                            {data?.stats.totalKgRecycled}kg Reciclados
                          </div>
                          <div className="text-sm text-purple-700">
                            Material desviado do lixo comum
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Submissions Tab */}
              {activeTab === 'submissions' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Suas Submissões Recentes
                    </h3>
                    <Link
                      href="/submit-waste"
                      className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
                    >
                      Nova Submissão
                    </Link>
                  </div>

                  <div className="space-y-4">
                    {data?.recentSubmissions.map((submission) => (
                      <div key={submission.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="font-medium text-gray-900">
                              {submission.materialType} ({submission.weightKg}kg)
                            </div>
                            <div className="text-sm text-gray-600 mt-1">
                              {submission.destination} • {formatDate(submission.createdAt)}
                            </div>
                          </div>
                          <div className="text-right">
                            <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(submission.status)}`}>
                              {getStatusLabel(submission.status)}
                            </span>
                            <div className="text-sm font-medium text-primary-600 mt-1">
                              +{submission.pointsEarned} pts
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Transactions Tab */}
              {activeTab === 'transactions' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Histórico de Transações
                    </h3>
                    <Link
                      href="/wallet"
                      className="text-primary-600 hover:text-primary-500 text-sm font-medium"
                    >
                      Ver todas →
                    </Link>
                  </div>

                  <div className="space-y-4">
                    {data?.recentTransactions.map((transaction) => (
                      <div key={transaction.id} className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg mr-4 ${
                            transaction.type === 'EARN' ? 'bg-green-100' : 'bg-red-100'
                          }`}>
                            {transaction.type === 'EARN' ? '↗️' : '↙️'}
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">
                              {transaction.description}
                            </div>
                            <div className="text-sm text-gray-600">
                              {formatDate(transaction.createdAt)}
                            </div>
                          </div>
                        </div>
                        <div className={`text-lg font-semibold ${
                          transaction.type === 'EARN' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {transaction.type === 'EARN' ? '+' : ''}{transaction.points} pts
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Achievements Tab */}
              {activeTab === 'achievements' && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">
                    Suas Conquistas
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {data?.achievements.map((achievement) => (
                      <div key={achievement.id} className={`border rounded-lg p-4 ${
                        achievement.unlockedAt ? 'border-green-200 bg-green-50' : 'border-gray-200'
                      }`}>
                        <div className="flex items-start">
                          <div className="text-3xl mr-4">{achievement.icon}</div>
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900 mb-1">
                              {achievement.title}
                            </h4>
                            <p className="text-sm text-gray-600 mb-2">
                              {achievement.description}
                            </p>
                            
                            {achievement.unlockedAt ? (
                              <div className="text-xs text-green-600 font-medium">
                                ✓ Desbloqueada em {formatDate(achievement.unlockedAt)}
                              </div>
                            ) : (
                              <div>
                                <div className="flex justify-between text-xs text-gray-500 mb-1">
                                  <span>Progresso</span>
                                  <span>{achievement.progress}/{achievement.maxProgress}</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                  <div 
                                    className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                                    style={{ 
                                      width: `${((achievement.progress || 0) / (achievement.maxProgress || 1)) * 100}%` 
                                    }}
                                  ></div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}