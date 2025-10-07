import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aton - Transformando Resíduos em Mobilidade Sustentável',
  description: 'Plataforma que transforma resíduos em mobilidade sustentável através de um sistema de recompensas por reciclagem.',
  keywords: ['sustentabilidade', 'reciclagem', 'mobilidade', 'meio ambiente', 'economia circular'],
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
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}