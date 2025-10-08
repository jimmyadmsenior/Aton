import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

/**
 * POST /api/waste-submissions/[id]/approve
 * Aprova uma submissão de resíduo
 * Disponível para usuários COMPANY e ADMIN
 */
export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const submissionId = params.id

    if (!submissionId) {
      return NextResponse.json({
        success: false,
        error: 'ID da submissão é obrigatório'
      }, { status: 400 })
    }

    // TODO: Implementar autenticação
    // const session = await getSession(request)
    // if (!session || !['COMPANY', 'ADMIN'].includes(session.user.role)) {
    //   return NextResponse.json({ success: false, error: 'Acesso negado' }, { status: 403 })
    // }

    // Buscar submissão
    const submission = await prisma.wasteSubmission.findUnique({
      where: { id: submissionId },
      include: {
        user: true,
      }
    })

    if (!submission) {
      return NextResponse.json({
        success: false,
        error: 'Submissão não encontrada'
      }, { status: 404 })
    }

    if (submission.status !== 'PENDING') {
      return NextResponse.json({
        success: false,
        error: 'Submissão já foi processada'
      }, { status: 400 })
    }

    // Processar aprovação em transação
    const result = await prisma.$transaction(async (tx) => {
      // Atualizar status da submissão
      const updatedSubmission = await tx.wasteSubmission.update({
        where: { id: submissionId },
        data: {
          status: 'APPROVED',
          updatedAt: new Date()
        }
      })

      // Creditar pontos ao usuário
      const updatedUser = await tx.user.update({
        where: { id: submission.userId },
        data: {
          walletPoints: {
            increment: submission.pointsEarned
          }
        }
      })

      // Criar registro de transação
      const transaction = await tx.transaction.create({
        data: {
          userId: submission.userId,
          points: submission.pointsEarned,
          type: 'EARN',
        }
      })

      return {
        submission: updatedSubmission,
        user: updatedUser,
        transaction
      }
    })

    return NextResponse.json({
      success: true,
      data: result,
      message: `Submissão aprovada! ${submission.pointsEarned} pontos creditados ao usuário.`
    })

  } catch (error) {
    console.error('Erro ao aprovar submissão:', error)
    return NextResponse.json({
      success: false,
      error: 'Erro interno do servidor'
    }, { status: 500 })
  }
}

/**
 * POST /api/waste-submissions/[id]/reject
 * Rejeita uma submissão de resíduo
 */
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const submissionId = params.id
    const body = await request.json()
    const { reason } = body

    if (!submissionId) {
      return NextResponse.json({
        success: false,
        error: 'ID da submissão é obrigatório'
      }, { status: 400 })
    }

    // TODO: Implementar autenticação
    // const session = await getSession(request)
    // if (!session || !['COMPANY', 'ADMIN'].includes(session.user.role)) {
    //   return NextResponse.json({ success: false, error: 'Acesso negado' }, { status: 403 })
    // }

    // Buscar e atualizar submissão
    const submission = await prisma.wasteSubmission.findUnique({
      where: { id: submissionId }
    })

    if (!submission) {
      return NextResponse.json({
        success: false,
        error: 'Submissão não encontrada'
      }, { status: 404 })
    }

    if (submission.status !== 'PENDING') {
      return NextResponse.json({
        success: false,
        error: 'Submissão já foi processada'
      }, { status: 400 })
    }

    const updatedSubmission = await prisma.wasteSubmission.update({
      where: { id: submissionId },
      data: {
        status: 'REJECTED',
        // Note: Seria bom ter um campo para salvar a razão da rejeição
        updatedAt: new Date()
      }
    })

    return NextResponse.json({
      success: true,
      data: updatedSubmission,
      message: 'Submissão rejeitada'
    })

  } catch (error) {
    console.error('Erro ao rejeitar submissão:', error)
    return NextResponse.json({
      success: false,
      error: 'Erro interno do servidor'
    }, { status: 500 })
  }
}