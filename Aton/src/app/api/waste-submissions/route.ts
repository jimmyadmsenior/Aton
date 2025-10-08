import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient, MaterialType } from '@prisma/client'
import { z } from 'zod'
import { calculatePoints } from '@/lib/points'

const prisma = new PrismaClient()

// Schema de validação para criação de submissão
const createSubmissionSchema = z.object({
  userId: z.string().min(1),
  pointId: z.string().optional(),
  companyId: z.string().optional(),
  materialType: z.nativeEnum(MaterialType),
  weightKg: z.number().positive().max(1000), // Máximo 1000kg
  images: z.array(z.string().url()).max(10), // Máximo 10 imagens
})

/**
 * GET /api/waste-submissions
 * Lista submissões com filtros opcionais
 * Query params:
 * - userId: filtrar por usuário
 * - companyId: filtrar por empresa
 * - status: filtrar por status
 * - page, limit: paginação
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    
    const userId = searchParams.get('userId')
    const companyId = searchParams.get('companyId')
    const status = searchParams.get('status')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '20')
    const skip = (page - 1) * limit

    let whereClause: any = {}

    if (userId) whereClause.userId = userId
    if (companyId) whereClause.companyId = companyId
    if (status) whereClause.status = status

    const submissions = await prisma.wasteSubmission.findMany({
      where: whereClause,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          }
        },
        company: {
          select: {
            id: true,
            name: true,
            certified: true,
          }
        },
        collectionPoint: {
          select: {
            id: true,
            name: true,
            lat: true,
            lng: true,
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      },
      skip,
      take: limit
    })

    const total = await prisma.wasteSubmission.count({ where: whereClause })

    return NextResponse.json({
      success: true,
      data: submissions,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      },
      message: 'Submissões recuperadas com sucesso'
    })

  } catch (error) {
    console.error('Erro ao buscar submissões:', error)
    return NextResponse.json({
      success: false,
      error: 'Erro interno do servidor'
    }, { status: 500 })
  }
}

/**
 * POST /api/waste-submissions
 * Cria nova submissão de resíduo
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validar dados de entrada
    const validationResult = createSubmissionSchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json({
        success: false,
        error: 'Dados inválidos',
        details: validationResult.error.errors
      }, { status: 400 })
    }

    const { userId, pointId, companyId, materialType, weightKg, images } = validationResult.data

    // Verificar se usuário existe
    const user = await prisma.user.findUnique({
      where: { id: userId }
    })

    if (!user) {
      return NextResponse.json({
        success: false,
        error: 'Usuário não encontrado'
      }, { status: 404 })
    }

    // Verificar se ponto de coleta existe (se fornecido)
    if (pointId) {
      const point = await prisma.collectionPoint.findUnique({
        where: { id: pointId, active: true }
      })

      if (!point) {
        return NextResponse.json({
          success: false,
          error: 'Ponto de coleta não encontrado ou inativo'
        }, { status: 404 })
      }

      // Verificar se o ponto aceita o tipo de material
      if (!point.acceptedMaterials.includes(materialType)) {
        return NextResponse.json({
          success: false,
          error: `Este ponto não aceita materiais do tipo ${materialType}`
        }, { status: 400 })
      }
    }

    // Verificar se empresa existe (se fornecido)
    if (companyId) {
      const company = await prisma.company.findUnique({
        where: { id: companyId }
      })

      if (!company) {
        return NextResponse.json({
          success: false,
          error: 'Empresa não encontrada'
        }, { status: 404 })
      }
    }

    // Calcular pontos baseado no material e peso
    const pointsEarned = calculatePoints(materialType, weightKg)

    // Criar submissão
    const submission = await prisma.wasteSubmission.create({
      data: {
        userId,
        pointId,
        companyId,
        materialType,
        weightKg,
        images,
        pointsEarned,
        status: 'PENDING'
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          }
        },
        collectionPoint: {
          select: {
            id: true,
            name: true,
          }
        },
        company: {
          select: {
            id: true,
            name: true,
          }
        }
      }
    })

    return NextResponse.json({
      success: true,
      data: submission,
      message: 'Submissão criada com sucesso'
    }, { status: 201 })

  } catch (error) {
    console.error('Erro ao criar submissão:', error)
    return NextResponse.json({
      success: false,
      error: 'Erro interno do servidor'
    }, { status: 500 })
  }
}

