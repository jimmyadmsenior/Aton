![Capa do Projeto Aton](Aton/public/images/Capa_Readme.png)

# Aton - Proposta de Reaproveitamento de Bancos Automotivos Toyota

Aton apresenta uma solução inovadora de economia circular para a Toyota, focada no reaproveitamento inteligente de bancos automotivos. Nossa proposta revoluciona o processo de desmontagem, processamento e reutilização de componentes de bancos, transformando desperdício em oportunidade sustentável.

## 🚀 Tecnologias

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Animações**: Framer Motion
- **Visualização 3D**: Three.js + React Three Fiber
- **Modelos 3D**: GLB/GLTF format
- **Styling**: Tailwind CSS + CSS personalizado
- **Componentes**: React components otimizados
- **Deploy**: Vercel (Next.js nativo)

## 📋 Funcionalidades

### ✅ Versão Atual - Proposta Toyota
- [x] **Landing Page Completa**: Apresentação da proposta de reaproveitamento
- [x] **Seção "Sobre o Projeto"**: Problemas identificados e soluções propostas
- [x] **"Como Funciona"**: Sistema em 3 camadas (Desmontagem → Processamento → Compartilhamento)
- [x] **Visualização 3D Interativa**: 4 modelos 3D implementados
  - Banco automotivo desconstruído (componentes internos)
  - Banco finalizado (resultado do reaproveitamento)
  - Honda Civic Type R 2023 (aplicação prática)
  - Toyota Corolla 2020 (implementação real)
- [x] **Métricas de Impacto**: 2.340 kg de materiais processados, 90% de circularidade
- [x] **Chatbot Inteligente**: Perguntas e respostas sobre sustentabilidade e o projeto
- [x] **Design Responsivo**: Interface otimizada para todos os dispositivos
- [x] **Animações Avançadas**: Framer Motion para experiência premium

### 🎯 Proposta de Valor
- **Redução de Desperdício**: Aproveitamento de 85-90% dos componentes de bancos
- **Economia Circular**: Reintegração de materiais na cadeia produtiva Toyota
- **Sustentabilidade**: Redução significativa da pegada de carbono
- **Inovação**: Processo sistemático de desmontagem e reprocessamento

## 🛠️ Configuração Local

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/jimmyadmsenior/Aton.git
cd Aton/Aton
```

2. **Instale as dependências**
```bash
npm install
```

3. **Instale dependências específicas do projeto**
```bash
# Three.js para visualização 3D
npm install three @types/three

# Outras dependências já incluídas:
# - Next.js 14
# - TypeScript
# - Tailwind CSS
# - Framer Motion
```

4. **Execute o projeto**
```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`

### Estrutura dos Modelos 3D

Os modelos 3D devem estar localizados em:
```
public/media/
├── car-seat-deconstructed/source/model.glb
├── automotive-seat-design/source/model.glb
├── 2023-honda-civic-type-r/2023_honda_civic_type_r.glb
└── toyota-corolla-2020/source/model.glb
```

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
│   ├── globals.css        # Estilos globais (scrollbars customizadas)
│   ├── layout.tsx         # Layout global
│   └── page.tsx           # Landing page principal
├── components/            # Componentes React
│   ├── 3DModel.tsx        # Componente de visualização 3D
│   ├── providers.tsx      # Providers do React
│   ├── layout/           # Componentes de layout
│   │   ├── ModernHeader.tsx
│   │   └── ModernFooter.tsx
│   └── sections/         # Seções da landing page
│       ├── LandingPage.tsx      # Hero section
│       ├── AboutProject.tsx     # Sobre o projeto
│       ├── HowItWorks.tsx       # Como funciona + Modelos 3D
│       ├── SustainabilityImpact.tsx  # Métricas de impacto
│       ├── Team.tsx             # Equipe
│       └── Chatbot.tsx          # Chatbot interativo

public/
├── media/                 # Modelos 3D e assets
│   ├── car-seat-deconstructed/
│   ├── automotive-seat-design/
│   ├── 2023-honda-civic-type-r/
│   └── toyota-corolla-2020/
├── images/               # Imagens estáticas
└── videos/              # Vídeos (se houver)
```

## 🏗️ Processo de Reaproveitamento - 3 Camadas

### 1ª Camada: Desmontagem Inteligente
- **Processo**: Separação sistemática de componentes dos bancos
- **Output**: Peças classificadas (espuma, tecido, estrutura metálica)
- **Impacto**: 100% de aproveitamento dos materiais

### 2ª Camada: Processamento Específico
- **Processo**: Limpeza e reprocessamento por tipo de material
- **Output**: Componentes renovados e prontos para reutilização
- **Impacto**: 85% de recuperação dos materiais originais

### 3ª Camada: Compartilhamento
- **Processo**: Redistribuição na cadeia produtiva Toyota
- **Output**: Novos bancos sustentáveis e peças de reposição
- **Impacto**: 90% de circularidade alcançada

## � Métricas de Impacto

### Resultados Projetados
- **2.340 kg** de materiais processados
- **90%** de taxa de circularidade
- **85%** de recuperação de componentes
- **Redução significativa** da pegada de carbono

### Distribuição de Materiais
- **45%** Espuma (1.053 kg)
- **30%** Tecidos (702 kg)
- **25%** Estrutura metálica (585 kg)

## 🤖 Chatbot Inteligente

### Perguntas Sugeridas Implementadas
1. "Como funciona o processo de reaproveitamento?"
2. "Quais são os benefícios ambientais?"
3. "Quanto material pode ser reaproveitado?"
4. "Como a Toyota se beneficia dessa solução?"
5. "Qual o impacto na redução de resíduos?"

### Respostas Personalizadas
- Sistema de keyword matching
- Respostas contextualizes sobre sustentabilidade
- Interface moderna com design escuro/branco

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

### Variáveis de Ambiente (Não necessárias para esta versão)
Esta versão é uma apresentação estática focada em demonstrar a proposta. Não requer configuração de banco de dados ou autenticação.

## 🎨 Customizações Visuais

### Seções Temáticas dos Modelos 3D

#### 🔧 Banco Desconstruído
- **Design**: Tons quentes (vermelho/laranja/amarelo)
- **Tema**: Processo de desmontagem
- **Elementos**: Círculos flutuantes, glow sutil, badge temático

#### ✨ Banco Finalizado  
- **Design**: Tons verdes (sustentabilidade)
- **Tema**: Resultado final renovado
- **Elementos**: Gradientes verdes, visual de "completude"

#### 🚗 Carros Toyota
- **Design**: Tema automotivo premium (tons escuros)
- **Honda Civic**: Gradiente vermelho/laranja (racing theme)
- **Toyota Corolla**: Gradiente azul/índigo (official theme)
- **Elementos**: Cards individuais, efeitos hover, pontos luminosos

### Scrollbars Customizadas
- **Seções claras**: Scrollbar em tons cinza
- **Chatbot**: Scrollbar escura para combinar com o tema
- **Responsive**: Adaptável a diferentes navegadores

## 🤝 Como Contribuir

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Add: nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 🎯 Próximos Passos

### Implementação na Toyota
1. **Fase Piloto**: Teste em uma unidade específica
2. **Validação de Processo**: Ajustes baseados em dados reais
3. **Escalonamento**: Expansão para outras unidades Toyota
4. **Integração Total**: Incorporação na cadeia produtiva completa

### Possíveis Expansões
- **Outros Componentes**: Aplicação em painéis, para-choques, etc.
- **Outras Montadoras**: Extensão do conceito para parceiros
- **Métricas Avançadas**: Dashboard de impacto ambiental em tempo real
- **Certificação**: Sistema de certificação de sustentabilidade

## 📞 Contato

Para mais informações sobre a proposta:
- **Email**: jimmycastilho555@gmail.com
- **Telefone**: +55 (11) 94166-5545
- **Localização**: São Paulo, SP
- **GitHub**: [jimmyadmsenior/Aton](https://github.com/jimmyadmsenior/Aton)

## 📄 Licença

Este projeto representa uma proposta de negócio para a Toyota e pode ser usado como base para implementação real de soluções de economia circular na indústria automotiva.

---

**Aton** - Revolucionando o reaproveitamento de bancos automotivos através da economia circular 🚗♻️🌱
