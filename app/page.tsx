"use client"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Portfolio from "@/components/portfolio"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}
