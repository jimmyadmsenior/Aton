import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'
import ModernHeader from '@/components/layout/ModernHeader'
import ModernFooter from '@/components/layout/ModernFooter'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aton - Sustentabilidade e Inovação',
  description: 'Transformando resíduos em recursos através da circularidade e inovação sustentável',
  keywords: ['sustentabilidade', 'circularidade', 'inovação', 'meio ambiente', 'economia circular', 'reciclagem'],
  authors: [{ name: 'Aton Team' }],
  creator: 'Aton',
  publisher: 'Aton',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-slate-900 text-white antialiased overflow-x-hidden`}>
        <Providers>
          <div className="min-h-screen">
            <ModernHeader />
            <main>
              {children}
            </main>
            <ModernFooter />
          </div>
        </Providers>
      </body>
    </html>
  )
}