'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface Transaction {
  id: string
  points: number
  type: 'EARN' | 'SPEND'
  createdAt: string
  reward?: {
    title: string
    rewardType: string
  }
  submission?: {
    materialType: string
    weightKg: number
  }
}

interface WalletData {
  walletPoints: number
  totalEarned: number
  totalSpent: number
  transactions: Transaction[]
  impactStats: {
    totalKgRecycled: number
    co2Avoided: number
    treesEquivalent: number
  }
}

export default function WalletPage() {
  const [walletData, setWalletData] = useState<WalletData | null>(null)
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<'all' | 'earn' | 'spend'>('all')

  useEffect(() => {
    // Simular carregamento de dados
    const fetchWalletData = async () => {
      setLoading(true)
      
      // Dados mocados - em produção viria da API
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setWalletData({
        walletPoints: 247,
        totalEarned: 347,
        totalSpent: 100,
        impactStats: {
          totalKgRecycled: 15.2,
          co2Avoided: 45.6,
          treesEquivalent: 3
        },
        transactions: [
          {
            id: '1',
            points: 25,
            type: 'EARN',
            createdAt: '2024-12-07T10:30:00Z',
            submission: {
              materialType: 'PLASTIC',
              weightKg: 2.5
            }
          },
          {
            id: '2',
            points: -50,
            type: 'SPEND',
            createdAt: '2024-12-06T15:45:00Z',
            reward: {
              title: 'Doação para ONG ambiental',
              rewardType: 'DONATION'
            }
          },
          {
            id: '3',
            points: 48,
            type: 'EARN',
            createdAt: '2024-12-05T09:15:00Z',
            submission: {
              materialType: 'BATTERY',
              weightKg: 2.4
            }
          },
          {
            id: '4',
            points: -50,
            type: 'SPEND',
            createdAt: '2024-12-04T14:20:00Z',
            reward: {
              title: 'Doação para ONG ambiental',
              rewardType: 'DONATION'
            }
          },
          {
            id: '5',
            points: 30,
            type: 'EARN',
            createdAt: '2024-12-03T11:00:00Z',
            submission: {
              materialType: 'METAL',
              weightKg: 3.0
            }
          }
        ]
      })
      
      setLoading(false)
    }

    fetchWalletData()
  }, [])

  const filteredTransactions = walletData?.transactions.filter(transaction => {
    if (filter === 'all') return true
    return transaction.type.toLowerCase() === filter
  }) || []

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getTransactionIcon = (transaction: Transaction) => {
    if (transaction.type === 'EARN') {
      return '↗️'
    } else {
      switch (transaction.reward?.rewardType) {
        case 'MOBILITY': return '🚴‍♂️'
        case 'VOUCHER': return '🎟️'
        case 'DISCOUNT': return '💰'
        case 'DONATION': return '🌱'
        default: return '💳'
      }
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {/* Loading skeleton */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
                <div className="h-12 bg-gray-200 rounded w-1/2 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/3"></div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-lg animate-pulse">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-8 bg-gray-200 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Minha Carteira</h1>
            <p className="text-gray-600">
              Acompanhe seus pontos, transações e impacto ambiental
            </p>
          </div>

          {/* Saldo Principal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl p-8 text-white mb-8 shadow-lg"
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-lg font-medium opacity-90 mb-2">Saldo Atual</h2>
                <div className="text-4xl font-bold mb-4">
                  {walletData?.walletPoints.toLocaleString()} pontos
                </div>
                <div className="flex space-x-6 text-sm opacity-90">
                  <div>
                    <span className="block font-medium">Total Ganho</span>
                    <span>{walletData?.totalEarned} pts</span>
                  </div>
                  <div>
                    <span className="block font-medium">Total Gasto</span>
                    <span>{walletData?.totalSpent} pts</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl mb-4">
                  💰
                </div>
                <Link
                  href="/rewards"
                  className="bg-white text-primary-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors"
                >
                  Ver Recompensas
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Estatísticas de Impacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          >
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-2xl mr-4">
                  ♻️
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {walletData?.impactStats.totalKgRecycled}kg
                  </div>
                  <div className="text-sm text-gray-600">Material Reciclado</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl mr-4">
                  🌍
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {walletData?.impactStats.co2Avoided}kg
                  </div>
                  <div className="text-sm text-gray-600">CO₂ Evitado</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-2xl mr-4">
                  🌳
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {walletData?.impactStats.treesEquivalent}
                  </div>
                  <div className="text-sm text-gray-600">Árvores Equivalentes</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Histórico de Transações */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Histórico de Transações
              </h3>
              
              {/* Filtros */}
              <div className="flex space-x-2">
                {[
                  { key: 'all', label: 'Todas' },
                  { key: 'earn', label: 'Ganhos' },
                  { key: 'spend', label: 'Gastos' }
                ].map((filterOption) => (
                  <button
                    key={filterOption.key}
                    onClick={() => setFilter(filterOption.key as typeof filter)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      filter === filterOption.key
                        ? 'bg-primary-100 text-primary-700'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {filterOption.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {filteredTransactions.map((transaction, index) => (
                <motion.div
                  key={transaction.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-lg mr-4">
                      {getTransactionIcon(transaction)}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">
                        {transaction.type === 'EARN' ? (
                          `Reciclagem de ${transaction.submission?.materialType} (${transaction.submission?.weightKg}kg)`
                        ) : (
                          transaction.reward?.title
                        )}
                      </div>
                      <div className="text-sm text-gray-500">
                        {formatDate(transaction.createdAt)}
                      </div>
                    </div>
                  </div>
                  <div className={`text-lg font-semibold ${
                    transaction.type === 'EARN' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {transaction.type === 'EARN' ? '+' : ''}{transaction.points} pts
                  </div>
                </motion.div>
              ))}

              {filteredTransactions.length === 0 && (
                <div className="text-center py-8">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Nenhuma transação encontrada
                  </h3>
                  <p className="text-gray-600">
                    {filter === 'all' 
                      ? 'Comece reciclando materiais para ganhar seus primeiros pontos!'
                      : `Nenhuma transação do tipo "${filter === 'earn' ? 'ganhos' : 'gastos'}" encontrada.`
                    }
                  </p>
                </div>
              )}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-8 text-center"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Ganhe Mais Pontos!
            </h3>
            <p className="text-gray-600 mb-6">
              Encontre pontos de coleta próximos e continue contribuindo para um futuro sustentável
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/map"
                className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Ver Pontos de Coleta
              </Link>
              <Link
                href="/submit-waste"
                className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors"
              >
                Enviar Material
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}