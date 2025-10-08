import LandingPage from '@/components/sections/LandingPage'
import AboutProject from '@/components/sections/AboutProject'
import HowItWorks from '@/components/sections/HowItWorks'
import SustainabilityImpact from '@/components/sections/SustainabilityImpact'
import Chatbot from '@/components/sections/Chatbot'
import Team from '@/components/sections/Team'

export default function HomePage() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <LandingPage />
      <AboutProject />
      <HowItWorks />
      <SustainabilityImpact />
      <Chatbot />
      <Team />
    </div>
  )
}