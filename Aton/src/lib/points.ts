import { MaterialType } from '@prisma/client'

/**
 * Função para calcular pontos baseado no tipo de material e peso
 * Regras de negócio:
 * - Base: 10 pontos por kg para materiais comuns
 * - Materiais especiais (bateria, pneu): multiplicador x2
 * - Eletrônicos: multiplicador x1.5
 * - Campanhas futuras podem alterar multiplicadores
 */
export function calculatePoints(materialType: MaterialType, weightKg: number): number {
  const basePoints = 10 // pontos base por kg
  let multiplier = 1

  switch (materialType) {
    case MaterialType.BATTERY:
    case MaterialType.TIRE:
      multiplier = 2 // Materiais especiais valem mais
      break
    case MaterialType.ELECTRONIC:
      multiplier = 1.5
      break
    case MaterialType.PLASTIC:
    case MaterialType.METAL:
    case MaterialType.OIL:
    case MaterialType.OTHER:
    default:
      multiplier = 1
      break
  }

  return Math.round(basePoints * weightKg * multiplier)
}