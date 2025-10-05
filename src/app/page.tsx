import CompanyMarquee from "@/components/Home/CompanyMarquee"
import HeroSection from "@/components/Home/HeroSection"
import OurServices from "@/components/Home/OurServices/OurServices"
import Navbar from "@/components/Navbar/Navbar"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  bg-gradient-to-r from-[#0B051B] to-[#110A2A] px-12 py-0">
      <Navbar />
      <HeroSection />
      <CompanyMarquee />
      <OurServices />
    </main>
  )
}
