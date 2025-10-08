'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface CollectionPoint {
  id: string
  name: string
  description?: string
  acceptedMaterials: string[]
  openingHours?: string
}

interface Company {
  id: string
  name: string
  certified: boolean
}

const materialTypes = [
  { value: 'PLASTIC', label: 'Plástico', icon: '♻️', multiplier: 1 },
  { value: 'METAL', label: 'Metal', icon: '⚙️', multiplier: 1 },
  { value: 'BATTERY', label: 'Bateria', icon: '🔋', multiplier: 2 },
  { value: 'TIRE', label: 'Pneu', icon: '🛞', multiplier: 2 },
  { value: 'ELECTRONIC', label: 'Eletrônico', icon: '📱', multiplier: 1.5 },
  { value: 'OIL', label: 'Óleo', icon: '🛢️', multiplier: 1 },
  { value: 'OTHER', label: 'Outro', icon: '📦', multiplier: 1 }
]

export default function SubmitWastePage() {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [collectionPoints, setCollectionPoints] = useState<CollectionPoint[]>([])
  const [companies, setCompanies] = useState<Company[]>([])
  
  const [formData, setFormData] = useState({
    materialType: '',
    weightKg: '',
    destinationType: 'point', // 'point' or 'company'
    pointId: '',
    companyId: '',
    images: [] as File[],
    notes: ''
  })

  const [preview, setPreview] = useState({
    pointsEarned: 0,
    co2Saved: 0
  })

  useEffect(() => {
    // Carregar pontos de coleta e empresas
    const fetchData = async () => {
      // Mock data - em produção viria da API
      setCollectionPoints([
        {
          id: '1',
          name: 'EcoPonto Centro de Salto',
          description: 'Ponto de coleta no centro da cidade',
          acceptedMaterials: ['PLASTIC', 'METAL', 'ELECTRONIC'],
          openingHours: 'Seg-Sex: 8h-17h, Sáb: 8h-12h'
        },
        {
          id: '2',
          name: 'Toyota Circular+ - Unidade Salto',
          description: 'Especializado em peças automotivas',
          acceptedMaterials: ['METAL', 'BATTERY', 'TIRE', 'OIL'],
          openingHours: 'Seg-Sex: 7h-18h, Sáb: 8h-14h'
        }
      ])

      setCompanies([
        {
          id: '1',
          name: 'Toyota Circular+ Salto',
          certified: true
        },
        {
          id: '2',
          name: 'Oficina do João',
          certified: false
        }
      ])
    }

    fetchData()
  }, [])

  useEffect(() => {
    // Calcular preview dos pontos
    if (formData.materialType && formData.weightKg) {
      const material = materialTypes.find(m => m.value === formData.materialType)
      const weight = parseFloat(formData.weightKg)
      
      if (material && weight > 0) {
        const points = Math.round(10 * weight * material.multiplier)
        const co2 = Math.round(weight * 3 * 100) / 100 // Estimativa de CO2 evitado
        
        setPreview({ pointsEarned: points, co2Saved: co2 })
      }
    }
  }, [formData.materialType, formData.weightKg])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Simular envio
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Redirecionar para página de sucesso
      alert(`Submissão enviada com sucesso! Você ganhará ${preview.pointsEarned} pontos após aprovação.`)
      
      // Reset form
      setFormData({
        materialType: '',
        weightKg: '',
        destinationType: 'point',
        pointId: '',
        companyId: '',
        images: [],
        notes: ''
      })
      setStep(1)
      
    } catch (error) {
      alert('Erro ao enviar submissão. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    if (files.length + formData.images.length > 5) {
      alert('Máximo 5 imagens permitidas')
      return
    }
    setFormData({ ...formData, images: [...formData.images, ...files] })
  }

  const removeImage = (index: number) => {
    setFormData({
      ...formData,
      images: formData.images.filter((_, i) => i !== index)
    })
  }

  const nextStep = () => {
    if (step === 1 && (!formData.materialType || !formData.weightKg)) {
      alert('Por favor, selecione o material e informe o peso')
      return
    }
    if (step === 2 && formData.destinationType === 'point' && !formData.pointId) {
      alert('Por favor, selecione um ponto de coleta')
      return
    }
    if (step === 2 && formData.destinationType === 'company' && !formData.companyId) {
      alert('Por favor, selecione uma empresa')
      return
    }
    setStep(step + 1)
  }

  const prevStep = () => setStep(step - 1)

  const selectedMaterial = materialTypes.find(m => m.value === formData.materialType)
  const selectedPoint = collectionPoints.find(p => p.id === formData.pointId)
  const selectedCompany = companies.find(c => c.id === formData.companyId)

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Enviar Material Reciclável
            </h1>
            <p className="text-gray-600">
              Transforme seus resíduos em pontos e contribua para um futuro sustentável
            </p>
          </div>

          {/* Progress */}
          <div className="flex justify-center space-x-2 mb-8">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                    step >= stepNumber 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div className={`w-12 h-1 mx-2 transition-colors ${
                    step > stepNumber ? 'bg-primary-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Material e Peso */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      Qual material você quer reciclar?
                    </h2>
                    <p className="text-gray-600">
                      Selecione o tipo de material e informe o peso aproximado
                    </p>
                  </div>

                  {/* Material Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Tipo de Material
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {materialTypes.map((material) => (
                        <button
                          key={material.value}
                          type="button"
                          onClick={() => setFormData({ ...formData, materialType: material.value })}
                          className={`p-4 border rounded-lg text-center transition-all hover:shadow-md ${
                            formData.materialType === material.value
                              ? 'border-primary-500 bg-primary-50 text-primary-700'
                              : 'border-gray-300 hover:border-gray-400'
                          }`}
                        >
                          <div className="text-2xl mb-2">{material.icon}</div>
                          <div className="font-medium text-sm">{material.label}</div>
                          <div className="text-xs text-gray-500">
                            {material.multiplier}x pontos
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Weight Input */}
                  <div>
                    <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-2">
                      Peso aproximado (kg)
                    </label>
                    <input
                      id="weight"
                      type="number"
                      step="0.1"
                      min="0.1"
                      max="1000"
                      value={formData.weightKg}
                      onChange={(e) => setFormData({ ...formData, weightKg: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Ex: 2.5"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Informe o peso em quilogramas (kg)
                    </p>
                  </div>

                  {/* Preview */}
                  {formData.materialType && formData.weightKg && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-4"
                    >
                      <h3 className="font-medium text-gray-900 mb-2">Estimativa de Recompensa</h3>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Pontos a ganhar:</span>
                          <div className="text-xl font-bold text-primary-600">
                            {preview.pointsEarned}
                          </div>
                        </div>
                        <div>
                          <span className="text-gray-600">CO₂ evitado:</span>
                          <div className="text-xl font-bold text-green-600">
                            {preview.co2Saved}kg
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <button
                    type="button"
                    onClick={nextStep}
                    className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                  >
                    Continuar
                  </button>
                </motion.div>
              )}

              {/* Step 2: Destino */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      Onde você quer entregar?
                    </h2>
                    <p className="text-gray-600">
                      Escolha um ponto de coleta ou empresa parceira
                    </p>
                  </div>

                  {/* Destination Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Tipo de Destino
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, destinationType: 'point', companyId: '' })}
                        className={`p-4 border rounded-lg text-center transition-all ${
                          formData.destinationType === 'point'
                            ? 'border-primary-500 bg-primary-50 text-primary-700'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        <div className="text-2xl mb-2">📍</div>
                        <div className="font-medium">Ponto de Coleta</div>
                        <div className="text-xs text-gray-500">Público e gratuito</div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, destinationType: 'company', pointId: '' })}
                        className={`p-4 border rounded-lg text-center transition-all ${
                          formData.destinationType === 'company'
                            ? 'border-primary-500 bg-primary-50 text-primary-700'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        <div className="text-2xl mb-2">🏢</div>
                        <div className="font-medium">Empresa Parceira</div>
                        <div className="text-xs text-gray-500">Aprovação manual</div>
                      </button>
                    </div>
                  </div>

                  {/* Collection Points */}
                  {formData.destinationType === 'point' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Selecione o Ponto de Coleta
                      </label>
                      <div className="space-y-3">
                        {collectionPoints
                          .filter(point => 
                            selectedMaterial && point.acceptedMaterials.includes(selectedMaterial.value)
                          )
                          .map((point) => (
                          <div
                            key={point.id}
                            onClick={() => setFormData({ ...formData, pointId: point.id })}
                            className={`p-4 border rounded-lg cursor-pointer transition-all ${
                              formData.pointId === point.id
                                ? 'border-primary-500 bg-primary-50'
                                : 'border-gray-300 hover:border-gray-400'
                            }`}
                          >
                            <h3 className="font-medium text-gray-900">{point.name}</h3>
                            {point.description && (
                              <p className="text-sm text-gray-600 mt-1">{point.description}</p>
                            )}
                            {point.openingHours && (
                              <p className="text-xs text-gray-500 mt-2">
                                <strong>Horário:</strong> {point.openingHours}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Companies */}
                  {formData.destinationType === 'company' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Selecione a Empresa
                      </label>
                      <div className="space-y-3">
                        {companies.map((company) => (
                          <div
                            key={company.id}
                            onClick={() => setFormData({ ...formData, companyId: company.id })}
                            className={`p-4 border rounded-lg cursor-pointer transition-all ${
                              formData.companyId === company.id
                                ? 'border-primary-500 bg-primary-50'
                                : 'border-gray-300 hover:border-gray-400'
                            }`}
                          >
                            <div className="flex justify-between items-center">
                              <h3 className="font-medium text-gray-900">{company.name}</h3>
                              {company.certified && (
                                <span className="inline-flex items-center px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                                  ✓ Certificada
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex space-x-3">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                    >
                      Voltar
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="flex-1 bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                    >
                      Continuar
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Fotos e Finalização */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      Adicione Fotos do Material
                    </h2>
                    <p className="text-gray-600">
                      Fotos ajudam na aprovação mais rápida da sua submissão
                    </p>
                  </div>

                  {/* Image Upload */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Fotos do Material (máximo 5)
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="image-upload"
                      />
                      <label htmlFor="image-upload" className="cursor-pointer">
                        <div className="text-4xl mb-4">📸</div>
                        <div className="text-gray-600">
                          Clique para adicionar fotos ou arraste aqui
                        </div>
                        <div className="text-sm text-gray-500 mt-2">
                          PNG, JPG até 5MB cada
                        </div>
                      </label>
                    </div>

                    {/* Image Preview */}
                    {formData.images.length > 0 && (
                      <div className="grid grid-cols-3 gap-4 mt-4">
                        {formData.images.map((image, index) => (
                          <div key={index} className="relative">
                            <img
                              src={URL.createObjectURL(image)}
                              alt={`Preview ${index + 1}`}
                              className="w-full h-24 object-cover rounded-lg"
                            />
                            <button
                              type="button"
                              onClick={() => removeImage(index)}
                              className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full text-xs hover:bg-red-600"
                            >
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Notes */}
                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                      Observações (opcional)
                    </label>
                    <textarea
                      id="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Informações adicionais sobre o material..."
                    />
                  </div>

                  {/* Summary */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-medium text-gray-900 mb-3">Resumo da Submissão</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Material:</span>
                        <span className="font-medium">
                          {selectedMaterial?.label} ({formData.weightKg}kg)
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Destino:</span>
                        <span className="font-medium">
                          {formData.destinationType === 'point' 
                            ? selectedPoint?.name 
                            : selectedCompany?.name
                          }
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Pontos estimados:</span>
                        <span className="font-medium text-primary-600">
                          {preview.pointsEarned}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Fotos anexadas:</span>
                        <span className="font-medium">{formData.images.length}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                    >
                      Voltar
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-1 bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <div className="flex items-center justify-center">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Enviando...
                        </div>
                      ) : (
                        'Enviar Submissão'
                      )}
                    </button>
                  </div>
                </motion.div>
              )}
            </form>
          </div>

          {/* Help Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 bg-blue-50 rounded-xl p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              💡 Dicas para uma Submissão Rápida
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Tire fotos claras do material separado e limpo
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Informe o peso com precisão para cálculo correto dos pontos
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Pontos de coleta aprovam automaticamente, empresas analisam manualmente
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Materiais especiais (bateria, pneu) valem mais pontos
              </li>
            </ul>
            
            <div className="mt-4 pt-4 border-t border-blue-200">
              <p className="text-sm text-gray-600">
                Dúvidas? <Link href="/help" className="text-primary-600 hover:text-primary-500 font-medium">Central de Ajuda</Link> ou entre em contato conosco.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}