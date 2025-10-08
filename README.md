# Aton - Plataforma de Sustentabilidade e Mobilidade

Aton é uma plataforma full-stack que transforma resíduos em mobilidade sustentável. Pessoas e empresas entregam materiais recicláveis em pontos de coleta, ganham pontos e trocam por benefícios de mobilidade como patinetes, vouchers e descontos.

## 🚀 Tecnologias

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Animações**: Framer Motion
- **Mapas**: Leaflet + React Leaflet
- **Backend**: Next.js API Routes
- **Banco de Dados**: PostgreSQL + Prisma ORM
- **Autenticação**: NextAuth.js (planejado)
- **Upload de Arquivos**: Supabase Storage (configurável)
- **Estado Global**: React Query

## 📋 Funcionalidades

### MVP (Versão Atual)
- [x] Sistema de pontos de coleta com mapa interativo
- [x] Cadastro e gestão de materiais recicláveis
- [x] Sistema de pontuação por tipo de material
- [x] API REST completa
- [x] Interface responsiva
- [ ] Sistema de autenticação
- [ ] Submissão de resíduos com upload de fotos
- [ ] Sistema de aprovação para empresas
- [ ] Carteira de pontos do usuário
- [ ] Loja de recompensas

### Funcionalidades Planejadas
- [ ] Autenticação com roles (INDIVIDUAL/COMPANY/ADMIN)
- [ ] Dashboard administrativo
- [ ] Notificações em tempo real
- [ ] Métricas de impacto ambiental
- [ ] Sistema de certificação para empresas
- [ ] Integração com APIs de mobilidade

## 🛠️ Configuração Local

### Pré-requisitos
- Node.js 18+ 
- PostgreSQL 14+
- npm ou yarn

### Instalação

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd aton
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure o banco de dados**

Crie um banco PostgreSQL e configure a URL no arquivo `.env.local`:

```bash
# Copie o arquivo de exemplo
cp .env.example .env.local
```

Edite `.env.local` e configure:
```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/aton_db"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="sua-chave-secreta-aqui"
```

4. **Execute as migrações do Prisma**
```bash
# Gerar cliente Prisma
npx prisma generate

# Executar migrações (cria as tabelas)
npx prisma migrate dev --name init

# Popular com dados de exemplo
npm run db:seed
```

5. **Execute o projeto**
```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`

### Comandos Úteis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Build de produção
npm run start        # Inicia servidor de produção
npm run lint         # Executa ESLint

# Banco de dados
npm run db:migrate   # Executa migrações
npm run db:generate  # Gera cliente Prisma
npm run db:studio    # Interface visual do banco
npm run db:seed      # Popula dados de exemplo
npm run db:reset     # Reset completo do banco
```

## 🗂️ Estrutura do Projeto

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API Routes
│   │   ├── collection-points/
│   │   ├── waste-submissions/
│   │   └── ...
│   ├── map/               # Página do mapa
│   ├── layout.tsx         # Layout global
│   └── page.tsx           # Página inicial
├── components/            # Componentes React
│   ├── layout/           # Header, Footer
│   ├── sections/         # Seções da landing page
│   └── ...
└── lib/                  # Utilitários e configurações

prisma/
├── schema.prisma         # Schema do banco
└── seed.ts              # Dados de exemplo

public/                  # Arquivos estáticos
```

## 📊 Modelos de Dados

### Principais Entidades

- **User**: Usuários (INDIVIDUAL/COMPANY/ADMIN)
- **Company**: Empresas parceiras e oficinas
- **CollectionPoint**: Pontos de coleta espalhados pela cidade
- **WasteSubmission**: Submissões de materiais pelos usuários
- **Reward**: Recompensas disponíveis na loja
- **Transaction**: Histórico de ganho/gasto de pontos

### Sistema de Pontuação

```typescript
// Regras de cálculo de pontos
Plástico/Metal: 10 pontos por kg
Baterias/Pneus: 20 pontos por kg (multiplicador x2)
Eletrônicos: 15 pontos por kg (multiplicador x1.5)
```

## 🔌 API Endpoints

### Pontos de Coleta
```
GET /api/collection-points
POST /api/collection-points (ADMIN only)
```

### Submissões
```
GET /api/waste-submissions
POST /api/waste-submissions
POST /api/waste-submissions/:id/approve
```

### Exemplo de Uso
```javascript
// Buscar pontos próximos
const response = await fetch('/api/collection-points?lat=-23.2020&lng=-47.2820&radius=5')

// Criar submissão
const submission = await fetch('/api/waste-submissions', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    userId: 'user-id',
    pointId: 'point-id', 
    materialType: 'PLASTIC',
    weightKg: 2.5,
    images: ['url1', 'url2']
  })
})
```

## 🌍 Deploy

### Vercel (Recomendado)

1. **Push para GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Configure o Vercel**
- Conecte seu repositório no [Vercel](https://vercel.com)
- Configure as variáveis de ambiente
- Vercel detectará automaticamente o Next.js

3. **Configure o Banco em Produção**
```bash
# Execute as migrações em produção
npx prisma migrate deploy

# (Opcional) Popule dados iniciais
npm run db:seed
```

### Variáveis de Ambiente Necessárias
```env
DATABASE_URL=
NEXTAUTH_URL=
NEXTAUTH_SECRET=
SUPABASE_URL= (opcional)
SUPABASE_ANON_KEY= (opcional)
```

## 📝 Dados de Teste

Após executar o seed, você terá:

### Usuários de Teste
- **Admin**: `admin@aton.com.br` / `admin123`
- **Empresa**: `gestor@toyota-salto.com.br` / `company123`
- **Individual**: `joao@email.com` / `user123`

### Pontos de Coleta
- 6 pontos espalhados por Salto/SP
- Diferentes tipos de materiais aceitos
- Horários de funcionamento variados

### Recompensas
- Patinete elétrico (100 pontos)
- Desconto manutenção (200 pontos)  
- Doação ONG (50 pontos)
- Voucher combustível (300 pontos)

## 🤝 Como Contribuir

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Add: nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📞 Suporte

Para dúvidas e suporte:
- Email: jimmycastilho555@gmail.com
- Issues: [GitHub Issues](link-do-repo/issues)

## 📄 Licença

Este projeto está sob licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

**Aton** - Transformando resíduos em mobilidade sustentável 🌱🚴‍♂️
