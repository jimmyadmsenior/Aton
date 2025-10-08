'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface Reward {
  id: string
  title: string
  description: string
  costPoints: number
  rewardType: 'MOBILITY' | 'VOUCHER' | 'DISCOUNT' | 'DONATION'
  partner?: string
  stock?: number | null
  active: boolean
  image?: string
}

const rewardTypeLabels = {
  MOBILITY: 'Mobilidade',
  VOUCHER: 'Voucher',
  DISCOUNT: 'Desconto',
  DONATION: 'Doação'
}

const rewardTypeIcons = {
  MOBILITY: '🚴‍♂️',
  VOUCHER: '🎟️',
  DISCOUNT: '💰',
  DONATION: '🌱'
}

export default function RewardsPage() {
  const [rewards, setRewards] = useState<Reward[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<string>('all')
  const [userPoints, setUserPoints] = useState(247) // Mock data
  const [selectedReward, setSelectedReward] = useState<Reward | null>(null)
  const [redeeming, setRedeeming] = useState(false)

  useEffect(() => {
    // Simular carregamento de dados
    const fetchRewards = async () => {
      setLoading(true)
      
      // Dados mocados - em produção viria da API
      await new Promise(resolve => setTimeout(resolve, 800))
      
      setRewards([
        {
          id: '1',
          title: '30 minutos grátis de patinete',
          description: 'Utilize patinetes elétricos parceiros por 30 minutos sem custo.',
          costPoints: 100,
          rewardType: 'MOBILITY',
          partner: 'Yellow Mobility',
          stock: 50,
          active: true
        },
        {
          id: '2',
          title: '1 hora de bike elétrica',
          description: 'Aluguel de bicicleta elétrica por 1 hora completa.',
          costPoints: 150,
          rewardType: 'MOBILITY',
          partner: 'Bike Share Salto',
          stock: 30,
          active: true
        },
        {
          id: '3',
          title: 'Voucher R$ 10 - Combustível',
          description: 'Vale combustível para uso em postos parceiros.',
          costPoints: 300,
          rewardType: 'VOUCHER',
          partner: 'Shell Select',
          stock: 20,
          active: true
        },
        {
          id: '4',
          title: '10% desconto em manutenção',
          description: 'Desconto em serviços de manutenção automotiva na rede parceira.',
          costPoints: 200,
          rewardType: 'DISCOUNT',
          partner: 'Toyota Circular+ Salto',
          stock: null,
          active: true
        },
        {
          id: '5',
          title: 'Doação para ONG ambiental',
          description: 'Converta seus pontos em doação para ONGs de preservação ambiental.',
          costPoints: 50,
          rewardType: 'DONATION',
          partner: 'Instituto Árvore Vida',
          stock: null,
          active: true
        },
        {
          id: '6',
          title: 'Vale-transporte R$ 20',
          description: 'Créditos para transporte público em Salto e região.',
          costPoints: 400,
          rewardType: 'VOUCHER',
          partner: 'TransSalto',
          stock: 15,
          active: true
        },
        {
          id: '7',
          title: '2 horas de patinete premium',
          description: 'Acesso aos patinetes de última geração com maior autonomia.',
          costPoints: 250,
          rewardType: 'MOBILITY',
          partner: 'Yellow Premium',
          stock: 25,
          active: true
        },
        {
          id: '8',
          title: 'Desconto 15% em produtos eco',
          description: 'Desconto em produtos sustentáveis em lojas parceiras.',
          costPoints: 180,
          rewardType: 'DISCOUNT',
          partner: 'EcoMart',
          stock: null,
          active: true
        }
      ])
      
      setLoading(false)
    }

    fetchRewards()
  }, [])

  const filteredRewards = rewards.filter(reward => {
    if (filter === 'all') return reward.active
    return reward.active && reward.rewardType === filter
  })

  const handleRedeem = async (reward: Reward) => {
    if (userPoints < reward.costPoints) {
      alert('Pontos insuficientes!')
      return
    }

    setRedeeming(true)
    
    try {
      // Simular resgate
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Atualizar pontos localmente
      setUserPoints(userPoints - reward.costPoints)
      
      // Atualizar estoque se aplicável
      if (reward.stock !== null) {
        setRewards(rewards.map(r => 
          r.id === reward.id 
            ? { ...r, stock: (r.stock || 0) - 1 }
            : r
        ))
      }
      
      alert(`Parabéns! Você resgatou: ${reward.title}`)
      setSelectedReward(null)
      
    } catch (error) {
      alert('Erro ao resgatar recompensa. Tente novamente.')
    } finally {
      setRedeeming(false)
    }
  }

  const rewardTypes = [
    { value: 'all', label: 'Todas' },
    { value: 'MOBILITY', label: 'Mobilidade' },
    { value: 'VOUCHER', label: 'Vouchers' },
    { value: 'DISCOUNT', label: 'Descontos' },
    { value: 'DONATION', label: 'Doações' }
  ]

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3 mb-8"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-lg animate-pulse">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-6 bg-gray-200 rounded w-1/2 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Loja de Recompensas</h1>
              <p className="text-gray-600">
                Troque seus pontos por benefícios de mobilidade sustentável
              </p>
            </div>
            
            {/* Saldo */}
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl p-4 text-center">
              <div className="text-sm opacity-90">Seus pontos</div>
              <div className="text-2xl font-bold">{userPoints.toLocaleString()}</div>
              <Link href="/wallet" className="text-xs opacity-90 hover:opacity-100 underline">
                Ver carteira
              </Link>
            </div>
          </div>

          {/* Filtros */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <div className="flex flex-wrap gap-2">
              {rewardTypes.map((type) => (
                <button
                  key={type.value}
                  onClick={() => setFilter(type.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    filter === type.value
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Grid de Recompensas */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
          >
            {filteredRewards.map((reward, index) => (
              <motion.div
                key={reward.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  {/* Card Header */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-2xl mr-3">
                          {rewardTypeIcons[reward.rewardType]}
                        </div>
                        <div>
                          <span className="inline-block px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium">
                            {rewardTypeLabels[reward.rewardType]}
                          </span>
                          {reward.partner && (
                            <div className="text-xs text-gray-500 mt-1">
                              {reward.partner}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary-600">
                          {reward.costPoints}
                        </div>
                        <div className="text-xs text-gray-500">pontos</div>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {reward.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {reward.description}
                    </p>

                    {/* Stock Info */}
                    {reward.stock !== null && (
                      <div className="flex items-center text-xs text-gray-500 mb-4">
                        <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                        {(reward.stock ?? 0) > 0 ? `${reward.stock} disponíveis` : 'Esgotado'}
                      </div>
                    )}

                    {/* Action Button */}
                    <button
                      onClick={() => setSelectedReward(reward)}
                      disabled={
                        userPoints < reward.costPoints ||
                        (reward.stock !== null && (reward.stock ?? 0) <= 0)
                      }
                      className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                        userPoints >= reward.costPoints && (reward.stock === null || (reward.stock ?? 0) > 0)
                          ? 'bg-primary-600 text-white hover:bg-primary-700 hover:shadow-lg transform hover:scale-105'
                          : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {userPoints < reward.costPoints
                        ? `Faltam ${reward.costPoints - userPoints} pontos`
                        : reward.stock !== null && (reward.stock ?? 0) <= 0
                        ? 'Esgotado'
                        : 'Resgatar'
                      }
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredRewards.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center py-12"
            >
              <div className="text-6xl mb-4">🎁</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Nenhuma recompensa encontrada
              </h3>
              <p className="text-gray-600">
                Tente ajustar os filtros ou volte em breve para novas ofertas!
              </p>
            </motion.div>
          )}

          {/* Ganhe Mais Pontos CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-8 text-center"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Precisa de Mais Pontos?
            </h3>
            <p className="text-gray-600 mb-6">
              Continue reciclando e ganhe mais pontos para trocar por recompensas incríveis!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/map"
                className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Encontrar Pontos de Coleta
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

      {/* Modal de Confirmação de Resgate */}
      {selectedReward && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-xl p-6 max-w-md w-full"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Confirmar Resgate
            </h3>
            
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-2xl mr-3">
                  {rewardTypeIcons[selectedReward.rewardType]}
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{selectedReward.title}</h4>
                  <p className="text-sm text-gray-600">{selectedReward.partner}</p>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">
                {selectedReward.description}
              </p>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Custo:</span>
                  <span className="font-semibold text-primary-600">
                    {selectedReward.costPoints} pontos
                  </span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-600">Saldo atual:</span>
                  <span className="font-semibold">{userPoints} pontos</span>
                </div>
                <div className="flex justify-between items-center mt-2 pt-2 border-t">
                  <span className="text-gray-600">Saldo após resgate:</span>
                  <span className="font-semibold text-green-600">
                    {userPoints - selectedReward.costPoints} pontos
                  </span>
                </div>
              </div>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => setSelectedReward(null)}
                disabled={redeeming}
                className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors disabled:opacity-50"
              >
                Cancelar
              </button>
              <button
                onClick={() => handleRedeem(selectedReward)}
                disabled={redeeming}
                className="flex-1 bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {redeeming ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Resgatando...
                  </div>
                ) : (
                  'Confirmar Resgate'
                )}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}