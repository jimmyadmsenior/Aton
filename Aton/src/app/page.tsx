import { Hero } from '@/components/sections/Hero'
import { Features } from '@/components/sections/Features'
import { Impact } from '@/components/sections/Impact'
import { Partners } from '@/components/sections/Partners'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Features Section */}
      <Features />
      
      {/* Impact Numbers Section */}
      <Impact />
      
      {/* Partners Section */}
      <Partners />
    </div>
  )
}