'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

type UserType = 'INDIVIDUAL' | 'COMPANY'

interface FormData {
  userType: UserType
  name: string
  email: string
  password: string
  confirmPassword: string
  // Campos específicos para empresa
  companyName: string
  companyId: string
  companyAddress: string
  companyPhone: string
}

export default function RegisterPage() {
  const [formData, setFormData] = useState<FormData>({
    userType: 'INDIVIDUAL',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    companyId: '',
    companyAddress: '',
    companyPhone: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [step, setStep] = useState(1)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Validações
    if (formData.password !== formData.confirmPassword) {
      setError('As senhas não coincidem')
      setLoading(false)
      return
    }

    if (formData.password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres')
      setLoading(false)
      return
    }

    try {
      // TODO: Implementar registro real
      console.log('Register attempt:', formData)
      
      // Simulação de delay
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Redirecionar para dashboard ou página de boas-vindas
      window.location.href = '/welcome'
    } catch (err) {
      setError('Erro ao criar conta. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const nextStep = () => {
    if (step === 1) {
      if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
        setError('Preencha todos os campos obrigatórios')
        return
      }
      if (formData.password !== formData.confirmPassword) {
        setError('As senhas não coincidem')
        return
      }
    }
    setError('')
    setStep(step + 1)
  }

  const prevStep = () => {
    setError('')
    setStep(step - 1)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full space-y-8"
      >
        {/* Header */}
        <div className="text-center">
          <Link href="/" className="inline-flex items-center space-x-2 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Aton</span>
          </Link>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Crie sua conta
          </h2>
          <p className="text-gray-600">
            Junte-se à comunidade e comece a transformar resíduos em mobilidade sustentável
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center space-x-2">
          {[1, 2].map((stepNumber) => (
            <div
              key={stepNumber}
              className={`w-3 h-3 rounded-full transition-colors ${
                step >= stepNumber ? 'bg-primary-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Form */}
        <motion.div
          key={step}
          initial={{ opacity: 0, x: step === 1 ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            {step === 1 && (
              <>
                {/* User Type Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Tipo de conta
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, userType: 'INDIVIDUAL' })}
                      className={`p-4 border rounded-lg text-center transition-all ${
                        formData.userType === 'INDIVIDUAL'
                          ? 'border-primary-500 bg-primary-50 text-primary-700'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <div className="text-2xl mb-2">👤</div>
                      <div className="font-medium">Pessoa Física</div>
                      <div className="text-xs text-gray-500">Usuário individual</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, userType: 'COMPANY' })}
                      className={`p-4 border rounded-lg text-center transition-all ${
                        formData.userType === 'COMPANY'
                          ? 'border-primary-500 bg-primary-50 text-primary-700'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <div className="text-2xl mb-2">🏢</div>
                      <div className="font-medium">Empresa</div>
                      <div className="text-xs text-gray-500">Oficina/Concessionária</div>
                    </button>
                  </div>
                </div>

                {/* Basic Info */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {formData.userType === 'INDIVIDUAL' ? 'Nome completo' : 'Nome do responsável'}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder={formData.userType === 'INDIVIDUAL' ? 'João Silva' : 'Maria Santos'}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Senha
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="••••••••"
                    minLength={6}
                  />
                  <p className="text-xs text-gray-500 mt-1">Mínimo 6 caracteres</p>
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                    Confirmar senha
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="••••••••"
                  />
                </div>

                <button
                  type="button"
                  onClick={nextStep}
                  className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  {formData.userType === 'INDIVIDUAL' ? 'Finalizar Cadastro' : 'Continuar'}
                </button>
              </>
            )}

            {step === 2 && formData.userType === 'COMPANY' && (
              <>
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Dados da Empresa</h3>
                  <p className="text-sm text-gray-600">Informações para verificação e certificação</p>
                </div>

                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome da empresa
                  </label>
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Oficina Silva Ltda"
                  />
                </div>

                <div>
                  <label htmlFor="companyId" className="block text-sm font-medium text-gray-700 mb-2">
                    CNPJ
                  </label>
                  <input
                    id="companyId"
                    name="companyId"
                    type="text"
                    required
                    value={formData.companyId}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="00.000.000/0000-00"
                  />
                </div>

                <div>
                  <label htmlFor="companyPhone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    id="companyPhone"
                    name="companyPhone"
                    type="tel"
                    required
                    value={formData.companyPhone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <label htmlFor="companyAddress" className="block text-sm font-medium text-gray-700 mb-2">
                    Endereço completo
                  </label>
                  <textarea
                    id="companyAddress"
                    name="companyAddress"
                    required
                    value={formData.companyAddress}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Rua das Flores, 123 - Centro - Salto/SP - 13320-000"
                  />
                </div>

                <div className="flex space-x-3">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex-1 bg-gray-200 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                  >
                    Voltar
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {loading ? (
                      <div className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Criando...
                      </div>
                    ) : (
                      'Criar Conta'
                    )}
                  </button>
                </div>
              </>
            )}
          </form>

          {/* Terms */}
          <div className="mt-6 text-center text-xs text-gray-500">
            Ao criar uma conta, você concorda com nossos{' '}
            <Link href="/terms" className="text-primary-600 hover:text-primary-500">
              Termos de Uso
            </Link>{' '}
            e{' '}
            <Link href="/privacy" className="text-primary-600 hover:text-primary-500">
              Política de Privacidade
            </Link>
          </div>

          {/* Login Link */}
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Já tem uma conta?{' '}
              <Link href="/auth/login" className="text-primary-600 hover:text-primary-500 font-medium">
                Faça login
              </Link>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}