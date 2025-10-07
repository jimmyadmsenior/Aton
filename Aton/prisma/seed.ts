import { PrismaClient, Role, RewardType, MaterialType } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Iniciando seed do banco de dados...')

  // Limpar dados existentes
  await prisma.transaction.deleteMany()
  await prisma.wasteSubmission.deleteMany()
  await prisma.reward.deleteMany()
  await prisma.collectionPoint.deleteMany()
  await prisma.user.deleteMany()
  await prisma.company.deleteMany()

  // Criar empresa de exemplo
  const toyotaCompany = await prisma.company.create({
    data: {
      name: 'Toyota Circular+ Salto',
      identifier: '12.345.678/0001-90',
      email: 'circular@toyota-salto.com.br',
      address: 'Av. das Indústrias, 1000 - Salto, SP',
      certified: false,
    },
  })

  // Criar usuários de teste
  const adminUser = await prisma.user.create({
    data: {
      name: 'Admin Aton',
      email: 'admin@aton.com.br',
      passwordHash: await bcrypt.hash('admin123', 10),
      role: Role.ADMIN,
      walletPoints: 0,
    },
  })

  const companyUser = await prisma.user.create({
    data: {
      name: 'Gestor Toyota',
      email: 'gestor@toyota-salto.com.br',
      passwordHash: await bcrypt.hash('company123', 10),
      role: Role.COMPANY,
      walletPoints: 0,
      companyId: toyotaCompany.id,
    },
  })

  const individualUser = await prisma.user.create({
    data: {
      name: 'João Silva',
      email: 'joao@email.com',
      passwordHash: await bcrypt.hash('user123', 10),
      role: Role.INDIVIDUAL,
      walletPoints: 150,
    },
  })

  // Criar pontos de coleta em Salto/SP
  const collectionPoints = await Promise.all([
    prisma.collectionPoint.create({
      data: {
        name: 'EcoPonto Centro de Salto',
        description: 'Ponto de coleta no centro da cidade. Aceita materiais diversos.',
        lat: -23.2020,
        lng: -47.2820,
        acceptedMaterials: [MaterialType.PLASTIC, MaterialType.METAL, MaterialType.ELECTRONIC],
        openingHours: 'Seg-Sex: 8h-17h, Sáb: 8h-12h',
        active: true,
      },
    }),
    prisma.collectionPoint.create({
      data: {
        name: 'Toyota Circular+ - Unidade Salto',
        description: 'Ponto especializado em peças automotivas e materiais especiais.',
        lat: -23.1980,
        lng: -47.2790,
        acceptedMaterials: [MaterialType.METAL, MaterialType.BATTERY, MaterialType.TIRE, MaterialType.OIL],
        openingHours: 'Seg-Sex: 7h-18h, Sáb: 8h-14h',
        active: true,
      },
    }),
    prisma.collectionPoint.create({
      data: {
        name: 'Posto Shell - Coleta Verde',
        description: 'Coleta de óleo usado e baterias automotivas.',
        lat: -23.2050,
        lng: -47.2750,
        acceptedMaterials: [MaterialType.BATTERY, MaterialType.OIL],
        openingHours: '24 horas',
        active: true,
      },
    }),
    prisma.collectionPoint.create({
      data: {
        name: 'Supermercado EcoMart',
        description: 'Ponto de coleta em parceria com supermercado local.',
        lat: -23.1950,
        lng: -47.2880,
        acceptedMaterials: [MaterialType.PLASTIC, MaterialType.METAL],
        openingHours: 'Seg-Dom: 6h-22h',
        active: true,
      },
    }),
    prisma.collectionPoint.create({
      data: {
        name: 'Escola Municipal Verde Esperança',
        description: 'Programa escolar de conscientização ambiental.',
        lat: -23.2080,
        lng: -47.2850,
        acceptedMaterials: [MaterialType.PLASTIC, MaterialType.ELECTRONIC],
        openingHours: 'Seg-Sex: 7h-17h',
        active: true,
      },
    }),
    prisma.collectionPoint.create({
      data: {
        name: 'Borracharia do Zé - Pneus Usados',
        description: 'Coleta especializada em pneus para reciclagem.',
        lat: -23.1920,
        lng: -47.2900,
        acceptedMaterials: [MaterialType.TIRE],
        openingHours: 'Seg-Sex: 8h-18h, Sáb: 8h-12h',
        active: true,
      },
    }),
  ])

  // Criar recompensas iniciais
  const rewards = await Promise.all([
    prisma.reward.create({
      data: {
        title: '30 minutos grátis de patinete',
        description: 'Utilize patinetes elétricos parceiros por 30 minutos sem custo.',
        costPoints: 100,
        rewardType: RewardType.MOBILITY,
        partner: 'Yellow Mobility',
        stock: 50,
        active: true,
      },
    }),
    prisma.reward.create({
      data: {
        title: '10% desconto em manutenção',
        description: 'Desconto em serviços de manutenção automotiva na rede parceira.',
        costPoints: 200,
        rewardType: RewardType.DISCOUNT,
        partner: 'Toyota Circular+ Salto',
        stock: null, // Ilimitado
        active: true,
      },
    }),
    prisma.reward.create({
      data: {
        title: 'Doação para ONG ambiental',
        description: 'Converta seus pontos em doação para ONGs de preservação ambiental.',
        costPoints: 50,
        rewardType: RewardType.DONATION,
        partner: 'Instituto Árvore Vida',
        stock: null, // Ilimitado
        active: true,
      },
    }),
    prisma.reward.create({
      data: {
        title: 'Voucher R$ 10 - Combustível',
        description: 'Vale combustível para uso em postos parceiros.',
        costPoints: 300,
        rewardType: RewardType.VOUCHER,
        partner: 'Shell Select',
        stock: 20,
        active: true,
      },
    }),
    prisma.reward.create({
      data: {
        title: '1 hora de bike elétrica',
        description: 'Aluguel de bicicleta elétrica por 1 hora completa.',
        costPoints: 150,
        rewardType: RewardType.MOBILITY,
        partner: 'Bike Share Salto',
        stock: 30,
        active: true,
      },
    }),
  ])

  // Criar algumas transações de exemplo para o usuário individual
  await Promise.all([
    prisma.transaction.create({
      data: {
        userId: individualUser.id,
        points: 50,
        type: 'EARN',
      },
    }),
    prisma.transaction.create({
      data: {
        userId: individualUser.id,
        points: 100,
        type: 'EARN',
      },
    }),
    prisma.transaction.create({
      data: {
        userId: individualUser.id,
        rewardId: rewards[2].id, // Doação
        points: -50,
        type: 'SPEND',
      },
    }),
  ])

  // Criar algumas submissões de exemplo
  await Promise.all([
    prisma.wasteSubmission.create({
      data: {
        userId: individualUser.id,
        pointId: collectionPoints[0].id,
        materialType: MaterialType.PLASTIC,
        weightKg: 2.5,
        images: ['https://example.com/plastic1.jpg'],
        pointsEarned: 25,
        status: 'APPROVED',
      },
    }),
    prisma.wasteSubmission.create({
      data: {
        userId: individualUser.id,
        companyId: toyotaCompany.id,
        materialType: MaterialType.BATTERY,
        weightKg: 1.2,
        images: ['https://example.com/battery1.jpg'],
        pointsEarned: 24,
        status: 'PENDING',
      },
    }),
  ])

  console.log('✅ Seed concluído!')
  console.log(`
📊 Dados criados:
- ${await prisma.user.count()} usuários
- ${await prisma.company.count()} empresas  
- ${await prisma.collectionPoint.count()} pontos de coleta
- ${await prisma.reward.count()} recompensas
- ${await prisma.wasteSubmission.count()} submissões
- ${await prisma.transaction.count()} transações

👤 Usuários de teste:
- Admin: admin@aton.com.br (senha: admin123)
- Empresa: gestor@toyota-salto.com.br (senha: company123)  
- Individual: joao@email.com (senha: user123)
  `)
}

main()
  .catch((e) => {
    console.error('❌ Erro no seed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })