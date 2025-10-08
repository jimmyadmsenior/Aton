'use client'

import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'

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

interface MapComponentProps {
  collectionPoints: CollectionPoint[]
  center?: [number, number]
  zoom?: number
  onPointSelect?: (point: CollectionPoint) => void
}

// Ícone customizado para os pontos
const createCustomIcon = (materialTypes: string[]) => {
  // Escolher cor baseado nos tipos de materiais
  let color = '#22c55e' // verde padrão
  
  if (materialTypes.includes('BATTERY') || materialTypes.includes('TIRE')) {
    color = '#ef4444' // vermelho para materiais especiais
  } else if (materialTypes.includes('ELECTRONIC')) {
    color = '#3b82f6' // azul para eletrônicos
  }

  return new Icon({
    iconUrl: `data:image/svg+xml;base64,${btoa(`
      <svg width="30" height="40" viewBox="0 0 30 40" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 0C6.7 0 0 6.7 0 15c0 13.5 15 25 15 25s15-11.5 15-25c0-8.3-6.7-15-15-15z" fill="${color}"/>
        <circle cx="15" cy="15" r="8" fill="white"/>
        <text x="15" y="19" text-anchor="middle" font-size="12" fill="${color}">♻</text>
      </svg>
    `)}`,
    iconSize: [30, 40],
    iconAnchor: [15, 40],
    popupAnchor: [0, -40]
  })
}

export default function MapComponent({ 
  collectionPoints, 
  center = [-23.2020, -47.2820], // Coordenadas de Salto/SP
  zoom = 13,
  onPointSelect 
}: MapComponentProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-full h-96 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
        <div className="text-gray-500">Carregando mapa...</div>
      </div>
    )
  }

  return (
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: '100%', width: '100%' }}
        zoomControl={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {collectionPoints.map((point) => (
          <Marker
            key={point.id}
            position={[point.lat, point.lng]}
            icon={createCustomIcon(point.acceptedMaterials)}
            eventHandlers={{
              click: () => {
                if (onPointSelect) {
                  onPointSelect(point)
                }
              }
            }}
          >
            <Popup>
              <div className="p-2 max-w-xs">
                <h3 className="font-semibold text-gray-900 mb-2">{point.name}</h3>
                {point.description && (
                  <p className="text-sm text-gray-600 mb-2">{point.description}</p>
                )}
                
                <div className="mb-2">
                  <h4 className="text-xs font-medium text-gray-700 mb-1">Materiais Aceitos:</h4>
                  <div className="flex flex-wrap gap-1">
                    {point.acceptedMaterials.map((material) => (
                      <span
                        key={material}
                        className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                      >
                        {material}
                      </span>
                    ))}
                  </div>
                </div>

                {point.openingHours && (
                  <p className="text-xs text-gray-500 mb-2">
                    <strong>Horário:</strong> {point.openingHours}
                  </p>
                )}

                {point._count && (
                  <p className="text-xs text-gray-500">
                    {point._count.submissions} submissões registradas
                  </p>
                )}

                <button 
                  onClick={() => onPointSelect?.(point)}
                  className="mt-2 w-full bg-primary-600 text-white text-xs py-1 px-2 rounded hover:bg-primary-700 transition-colors"
                >
                  Levar Resíduo Aqui
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}