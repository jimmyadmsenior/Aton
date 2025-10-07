import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

/**
 * GET /api/collection-points
 * Retorna lista de pontos de coleta
 * Query params opcionais:
 * - bbox: bounding box formato "lat1,lng1,lat2,lng2"
 * - lat, lng, radius: coordenadas e raio em km
 * - materials: filtro por tipos de material (comma separated)
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    
    // Filtros de localização
    const bbox = searchParams.get('bbox')
    const lat = searchParams.get('lat')
    const lng = searchParams.get('lng')  
    const radius = searchParams.get('radius')
    const materials = searchParams.get('materials')

    let whereClause: any = {
      active: true
    }

    // Filtro por bounding box
    if (bbox) {
      const [lat1, lng1, lat2, lng2] = bbox.split(',').map(Number)
      whereClause = {
        ...whereClause,
        lat: {
          gte: Math.min(lat1, lat2),
          lte: Math.max(lat1, lat2)
        },
        lng: {
          gte: Math.min(lng1, lng2),
          lte: Math.max(lng1, lng2)
        }
      }
    }

    // Filtro por materiais aceitos
    if (materials) {
      const materialList = materials.split(',')
      whereClause = {
        ...whereClause,
        acceptedMaterials: {
          hasSome: materialList
        }
      }
    }

    const collectionPoints = await prisma.collectionPoint.findMany({
      where: whereClause,
      select: {
        id: true,
        name: true,
        description: true,
        lat: true,
        lng: true,
        acceptedMaterials: true,
        openingHours: true,
        active: true,
        createdAt: true,
        // Incluir contagem de submissões para o ponto
        _count: {
          select: {
            submissions: true
          }
        }
      },
      orderBy: {
        name: 'asc'
      }
    })

    // Se filtro por raio foi solicitado, calcular distância
    let filteredPoints = collectionPoints
    if (lat && lng && radius) {
      const centerLat = Number(lat)
      const centerLng = Number(lng)
      const maxRadius = Number(radius)

      filteredPoints = collectionPoints.filter(point => {
        const distance = calculateDistance(centerLat, centerLng, point.lat, point.lng)
        return distance <= maxRadius
      }).map(point => ({
        ...point,
        distance: calculateDistance(centerLat, centerLng, point.lat, point.lng)
      }))

      // Ordenar por distância
      filteredPoints.sort((a: any, b: any) => (a.distance || 0) - (b.distance || 0))
    }

    return NextResponse.json({
      success: true,
      data: filteredPoints,
      count: filteredPoints.length,
      message: 'Pontos de coleta recuperados com sucesso'
    })

  } catch (error) {
    console.error('Erro ao buscar pontos de coleta:', error)
    return NextResponse.json({
      success: false,
      error: 'Erro interno do servidor'
    }, { status: 500 })
  }
}

/**
 * POST /api/collection-points
 * Cria novo ponto de coleta (apenas ADMIN)
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validação básica
    const { name, description, lat, lng, acceptedMaterials, openingHours } = body
    
    if (!name || !lat || !lng || !acceptedMaterials) {
      return NextResponse.json({
        success: false,
        error: 'Campos obrigatórios: name, lat, lng, acceptedMaterials'
      }, { status: 400 })
    }

    // TODO: Implementar autenticação e verificar se usuário é ADMIN
    // const session = await getSession(request)
    // if (!session || session.user.role !== 'ADMIN') {
    //   return NextResponse.json({ success: false, error: 'Acesso negado' }, { status: 403 })
    // }

    const newPoint = await prisma.collectionPoint.create({
      data: {
        name,
        description,
        lat: Number(lat),
        lng: Number(lng),
        acceptedMaterials,
        openingHours,
        active: true
      }
    })

    return NextResponse.json({
      success: true,
      data: newPoint,
      message: 'Ponto de coleta criado com sucesso'
    }, { status: 201 })

  } catch (error) {
    console.error('Erro ao criar ponto de coleta:', error)
    return NextResponse.json({
      success: false,
      error: 'Erro interno do servidor'
    }, { status: 500 })
  }
}

/**
 * Calcula distância entre dois pontos em km usando fórmula de Haversine
 */
function calculateDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371 // Raio da Terra em km
  const dLat = (lat2 - lat1) * Math.PI / 180
  const dLng = (lng2 - lng1) * Math.PI / 180
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLng/2) * Math.sin(dLng/2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
  return R * c
}