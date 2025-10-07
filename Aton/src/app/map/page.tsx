'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

// Importar o componente do mapa dinamicamente para evitar problemas com SSR
const MapComponent = dynamic(() => import('@/components/MapComponent'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-96 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
      <div className="text-gray-500">Carregando mapa...</div>
    </div>
  )
})

interface CollectionPoint {
  id: string
  name: string
  description?: string
  lat: number
  lng: number
  acceptedMaterials: string[]
  openingHours?: string
  _count?: {
    submissions: number
  }
}

export default function MapPage() {
  const [collectionPoints, setCollectionPoints] = useState<CollectionPoint[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedPoint, setSelectedPoint] = useState<CollectionPoint | null>(null)
  const [filterMaterial, setFilterMaterial] = useState<string>('')

  // Carregar pontos de coleta
  useEffect(() => {
    const fetchCollectionPoints = async () => {
      try {
        setLoading(true)
        const params = new URLSearchParams()
        
        if (filterMaterial) {
          params.append('materials', filterMaterial)
        }

        const response = await fetch(`/api/collection-points?${params}`)
        const result = await response.json()

        if (result.success) {
          setCollectionPoints(result.data)
        } else {
          console.error('Erro ao carregar pontos:', result.error)
        }
      } catch (error) {
        console.error('Erro ao buscar pontos de coleta:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCollectionPoints()
  }, [filterMaterial])

  const materialTypes = [
    { value: '', label: 'Todos os Materiais' },
    { value: 'PLASTIC', label: 'Plástico' },
    { value: 'METAL', label: 'Metal' },
    { value: 'BATTERY', label: 'Bateria' },
    { value: 'TIRE', label: 'Pneu' },
    { value: 'ELECTRONIC', label: 'Eletrônico' },
    { value: 'OIL', label: 'Óleo' },
  ]

  const handlePointSelect = (point: CollectionPoint) => {
    setSelectedPoint(point)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Pontos de Coleta
            </h1>
            <p className="text-gray-600">
              Encontre o ponto de coleta mais próximo para entregar seus materiais recicláveis
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar com filtros */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Filtros
              </h2>
              
              {/* Filtro por material */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de Material
                </label>
                <select
                  value={filterMaterial}
                  onChange={(e) => setFilterMaterial(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  {materialTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Estatísticas */}
              <div className="border-t pt-4">
                <h3 className="text-sm font-medium text-gray-700 mb-3">
                  Estatísticas
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total de Pontos:</span>
                    <span className="font-medium">{collectionPoints.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ativos:</span>
                    <span className="font-medium text-green-600">{collectionPoints.length}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  Mapa de Pontos de Coleta
                </h2>
                {loading && (
                  <div className="flex items-center text-primary-600">
                    <div className="w-4 h-4 border-2 border-primary-600 border-t-transparent rounded-full animate-spin mr-2"></div>
                    Carregando...
                  </div>
                )}
              </div>

              {!loading && collectionPoints.length === 0 ? (
                <div className="w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🗺️</div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Nenhum ponto encontrado
                    </h3>
                    <p className="text-gray-600">
                      Tente ajustar os filtros de busca
                    </p>
                  </div>
                </div>
              ) : (
                <MapComponent
                  collectionPoints={collectionPoints}
                  onPointSelect={handlePointSelect}
                />
              )}
            </div>
          </motion.div>
        </div>

        {/* Lista de pontos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8"
        >
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Lista de Pontos ({collectionPoints.length})
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {collectionPoints.map((point) => (
                <div
                  key={point.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => handlePointSelect(point)}
                >
                  <h3 className="font-medium text-gray-900 mb-2">{point.name}</h3>
                  {point.description && (
                    <p className="text-sm text-gray-600 mb-3">{point.description}</p>
                  )}
                  
                  <div className="mb-3">
                    <h4 className="text-xs font-medium text-gray-700 mb-1">Materiais:</h4>
                    <div className="flex flex-wrap gap-1">
                      {point.acceptedMaterials.slice(0, 3).map((material) => (
                        <span
                          key={material}
                          className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                        >
                          {material}
                        </span>
                      ))}
                      {point.acceptedMaterials.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{point.acceptedMaterials.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {point.openingHours && (
                    <p className="text-xs text-gray-500">
                      <strong>Horário:</strong> {point.openingHours}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal do ponto selecionado */}
      {selectedPoint && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-lg p-6 max-w-md w-full max-h-96 overflow-y-auto"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {selectedPoint.name}
              </h3>
              <button
                onClick={() => setSelectedPoint(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {selectedPoint.description && (
              <p className="text-gray-600 mb-4">{selectedPoint.description}</p>
            )}

            <div className="mb-4">
              <h4 className="font-medium text-gray-900 mb-2">Materiais Aceitos:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedPoint.acceptedMaterials.map((material) => (
                  <span
                    key={material}
                    className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                  >
                    {material}
                  </span>
                ))}
              </div>
            </div>

            {selectedPoint.openingHours && (
              <p className="text-sm text-gray-600 mb-4">
                <strong>Horário de Funcionamento:</strong> {selectedPoint.openingHours}
              </p>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setSelectedPoint(null)}
                className="flex-1 bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Levar Resíduo Aqui
              </button>
              <button
                onClick={() => setSelectedPoint(null)}
                className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Fechar
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}