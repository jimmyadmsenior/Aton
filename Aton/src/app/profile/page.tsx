'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface UserProfile {
  id: string
  name: string
  email: string
  phone?: string
  address?: string
  city?: string
  state?: string
  zipCode?: string
  avatar?: string
  bio?: string
  preferences: {
    emailNotifications: boolean
    smsNotifications: boolean
    marketingEmails: boolean
    achievements: boolean
  }
  stats: {
    memberSince: string
    totalPoints: number
    totalSubmissions: number
    co2Avoided: number
  }
}

export default function ProfilePage() {
  const [profile, setProfile] = useState<UserProfile>({
    id: '1',
    name: 'João Silva',
    email: 'joao@email.com',
    phone: '(11) 99999-9999',
    address: 'Rua das Flores, 123',
    city: 'São Paulo',
    state: 'SP',
    zipCode: '01234-567',
    bio: 'Apaixonado por sustentabilidade e meio ambiente. Sempre buscando formas de reduzir meu impacto no planeta.',
    preferences: {
      emailNotifications: true,
      smsNotifications: false,
      marketingEmails: true,
      achievements: true
    },
    stats: {
      memberSince: '2024-01-15',
      totalPoints: 347,
      totalSubmissions: 8,
      co2Avoided: 45.6
    }
  })

  const [activeTab, setActiveTab] = useState<'personal' | 'preferences' | 'security'>('personal')
  const [isEditing, setIsEditing] = useState(false)
  const [editedProfile, setEditedProfile] = useState(profile)
  const [loading, setLoading] = useState(false)

  const handleSave = async () => {
    setLoading(true)
    
    // Simular requisição para API
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setProfile(editedProfile)
    setIsEditing(false)
    setLoading(false)

    // Mostrar notificação de sucesso (poderia usar toast)
    alert('Perfil atualizado com sucesso!')
  }

  const handleCancel = () => {
    setEditedProfile(profile)
    setIsEditing(false)
  }

  const updatePreference = (key: keyof UserProfile['preferences'], value: boolean) => {
    setEditedProfile(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [key]: value
      }
    }))
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
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
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 h-32 relative">
              <div className="absolute -bottom-12 left-6">
                <div className="w-24 h-24 bg-white rounded-full border-4 border-white shadow-lg flex items-center justify-center text-4xl">
                  👤
                </div>
              </div>
            </div>
            
            <div className="pt-16 pb-6 px-6">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{profile.name}</h1>
                  <p className="text-gray-600">{profile.email}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Membro desde {formatDate(profile.stats.memberSince)}
                  </p>
                </div>
                
                <div className="text-right">
                  <div className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                    {profile.stats.totalPoints} pontos
                  </div>
                  <div className="text-sm text-gray-600">
                    {profile.stats.totalSubmissions} submissões
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6">
                {[
                  { key: 'personal', label: 'Informações Pessoais', icon: '👤' },
                  { key: 'preferences', label: 'Preferências', icon: '⚙️' },
                  { key: 'security', label: 'Segurança', icon: '🔒' }
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
              {/* Personal Information Tab */}
              {activeTab === 'personal' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">
                      Informações Pessoais
                    </h2>
                    {!isEditing ? (
                      <button
                        onClick={() => setIsEditing(true)}
                        className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
                      >
                        Editar Perfil
                      </button>
                    ) : (
                      <div className="space-x-3">
                        <button
                          onClick={handleCancel}
                          className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
                        >
                          Cancelar
                        </button>
                        <button
                          onClick={handleSave}
                          disabled={loading}
                          className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors disabled:opacity-50"
                        >
                          {loading ? 'Salvando...' : 'Salvar'}
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nome Completo
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          value={editedProfile.name}
                          onChange={(e) => setEditedProfile(prev => ({ ...prev, name: e.target.value }))}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Seu nome completo"
                        />
                      ) : (
                        <div className="p-3 bg-gray-50 rounded-lg text-gray-900">
                          {profile.name}
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      {isEditing ? (
                        <input
                          type="email"
                          value={editedProfile.email}
                          onChange={(e) => setEditedProfile(prev => ({ ...prev, email: e.target.value }))}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="seu@email.com"
                        />
                      ) : (
                        <div className="p-3 bg-gray-50 rounded-lg text-gray-900">
                          {profile.email}
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telefone
                      </label>
                      {isEditing ? (
                        <input
                          type="tel"
                          value={editedProfile.phone || ''}
                          onChange={(e) => setEditedProfile(prev => ({ ...prev, phone: e.target.value }))}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="(11) 99999-9999"
                        />
                      ) : (
                        <div className="p-3 bg-gray-50 rounded-lg text-gray-900">
                          {profile.phone || 'Não informado'}
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CEP
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          value={editedProfile.zipCode || ''}
                          onChange={(e) => setEditedProfile(prev => ({ ...prev, zipCode: e.target.value }))}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="00000-000"
                        />
                      ) : (
                        <div className="p-3 bg-gray-50 rounded-lg text-gray-900">
                          {profile.zipCode || 'Não informado'}
                        </div>
                      )}
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Endereço
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          value={editedProfile.address || ''}
                          onChange={(e) => setEditedProfile(prev => ({ ...prev, address: e.target.value }))}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Rua, número, complemento"
                        />
                      ) : (
                        <div className="p-3 bg-gray-50 rounded-lg text-gray-900">
                          {profile.address || 'Não informado'}
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Cidade
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          value={editedProfile.city || ''}
                          onChange={(e) => setEditedProfile(prev => ({ ...prev, city: e.target.value }))}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Sua cidade"
                        />
                      ) : (
                        <div className="p-3 bg-gray-50 rounded-lg text-gray-900">
                          {profile.city || 'Não informado'}
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Estado
                      </label>
                      {isEditing ? (
                        <select
                          value={editedProfile.state || ''}
                          onChange={(e) => setEditedProfile(prev => ({ ...prev, state: e.target.value }))}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        >
                          <option value="">Selecione</option>
                          <option value="SP">São Paulo</option>
                          <option value="RJ">Rio de Janeiro</option>
                          <option value="MG">Minas Gerais</option>
                          <option value="RS">Rio Grande do Sul</option>
                          <option value="PR">Paraná</option>
                          <option value="SC">Santa Catarina</option>
                          {/* Adicionar mais estados */}
                        </select>
                      ) : (
                        <div className="p-3 bg-gray-50 rounded-lg text-gray-900">
                          {profile.state || 'Não informado'}
                        </div>
                      )}
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Sobre você
                      </label>
                      {isEditing ? (
                        <textarea
                          value={editedProfile.bio || ''}
                          onChange={(e) => setEditedProfile(prev => ({ ...prev, bio: e.target.value }))}
                          rows={4}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Conte um pouco sobre você e seus interesses em sustentabilidade..."
                        />
                      ) : (
                        <div className="p-3 bg-gray-50 rounded-lg text-gray-900 min-h-[100px]">
                          {profile.bio || 'Não informado'}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Preferences Tab */}
              {activeTab === 'preferences' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">
                    Preferências de Notificação
                  </h2>

                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <h3 className="font-medium text-gray-900">
                          Notificações por Email
                        </h3>
                        <p className="text-sm text-gray-600">
                          Receba atualizações sobre suas submissões e conquistas
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={editedProfile.preferences.emailNotifications}
                          onChange={(e) => updatePreference('emailNotifications', e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <h3 className="font-medium text-gray-900">
                          Notificações por SMS
                        </h3>
                        <p className="text-sm text-gray-600">
                          Receba alertas importantes via mensagem de texto
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={editedProfile.preferences.smsNotifications}
                          onChange={(e) => updatePreference('smsNotifications', e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <h3 className="font-medium text-gray-900">
                          Emails de Marketing
                        </h3>
                        <p className="text-sm text-gray-600">
                          Receba dicas, novidades e ofertas especiais
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={editedProfile.preferences.marketingEmails}
                          onChange={(e) => updatePreference('marketingEmails', e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <h3 className="font-medium text-gray-900">
                          Notificações de Conquistas
                        </h3>
                        <p className="text-sm text-gray-600">
                          Seja notificado quando desbloquear novas conquistas
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={editedProfile.preferences.achievements}
                          onChange={(e) => updatePreference('achievements', e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                      </label>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-end">
                    <button
                      onClick={handleSave}
                      disabled={loading}
                      className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors disabled:opacity-50"
                    >
                      {loading ? 'Salvando...' : 'Salvar Preferências'}
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Security Tab */}
              {activeTab === 'security' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">
                    Segurança da Conta
                  </h2>

                  <div className="space-y-6">
                    <div className="border border-gray-200 rounded-lg p-6">
                      <h3 className="font-medium text-gray-900 mb-4">
                        Alterar Senha
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Senha Atual
                          </label>
                          <input
                            type="password"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="Digite sua senha atual"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Nova Senha
                          </label>
                          <input
                            type="password"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="Digite sua nova senha"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Confirmar Nova Senha
                          </label>
                          <input
                            type="password"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="Confirme sua nova senha"
                          />
                        </div>
                        <button className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors">
                          Alterar Senha
                        </button>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6">
                      <h3 className="font-medium text-gray-900 mb-4">
                        Autenticação em Duas Etapas
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Adicione uma camada extra de segurança à sua conta
                      </p>
                      <button className="bg-secondary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-secondary-700 transition-colors">
                        Configurar 2FA
                      </button>
                    </div>

                    <div className="border border-red-200 rounded-lg p-6 bg-red-50">
                      <h3 className="font-medium text-red-900 mb-4">
                        Zona de Perigo
                      </h3>
                      <p className="text-sm text-red-700 mb-4">
                        Excluir sua conta permanentemente. Esta ação não pode ser desfeita.
                      </p>
                      <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors">
                        Excluir Conta
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}