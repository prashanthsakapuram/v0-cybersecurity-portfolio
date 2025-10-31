"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headlightsRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      const currentScroll = window.scrollY
      const progress = totalScroll > 0 ? currentScroll / totalScroll : 0

      const easedProgress = Math.min(progress * 2.5, 1)
      setScrollProgress(easedProgress)

      if (headlightsRef.current) {
        const opacity = easedProgress * 0.8
        const blur = easedProgress * 120
        const brightness = 0.5 + easedProgress * 1.5
        const glowRadius = 50 + easedProgress * 150

        headlightsRef.current.style.opacity = opacity.toString()
        headlightsRef.current.style.filter = `
          drop-shadow(0 0 ${blur}px rgba(10, 132, 255, 0.8))
          drop-shadow(0 0 ${blur * 0.5}px rgba(0, 217, 255, 0.5))
          brightness(${brightness})
        `
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDownload = (filename: string) => {
    const content =
      filename === "CV"
        ? "SAKAPURAM PRASHANTH - CV\n\nEducation:\n2nd Year B.Tech Student at VIT Chennai\n\nSkills:\nPython, Java, C, C++, Assembly\nGhidra, IDA Free, Pestudio, PE Bear\nStatic & Dynamic Analysis\n\nSpecialization:\nCyber-Physical Systems & Malware Analysis"
        : "TEST_FILE_SAMPLE\n\nThis is a sample testing file for download demonstration.\nDate: " +
          new Date().toLocaleString()

    const blob = new Blob([content], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = filename === "CV" ? "PRASHANTH_CV.txt" : "test-file.txt"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div
      ref={containerRef}
      id="hero"
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-HpkujweeCVbtEHo3BE36Yd1qinMXsv.jpeg"
          alt="Dodge Challenger with glowing blue headlights"
          fill
          className="object-cover"
          priority
          quality={100}
        />

        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background/90" />
      </div>

      <div
        ref={headlightsRef}
        className="absolute inset-0 z-10 pointer-events-none opacity-0"
        style={{
          background: `
            radial-gradient(ellipse 500px 300px at 30% 42%, rgba(10, 132, 255, 0.5) 0%, rgba(0, 217, 255, 0.2) 40%, transparent 70%),
            radial-gradient(ellipse 500px 300px at 70% 42%, rgba(10, 132, 255, 0.5) 0%, rgba(0, 217, 255, 0.2) 40%, transparent 70%),
            radial-gradient(ellipse 600px 200px at 50% 60%, rgba(10, 132, 255, 0.15) 0%, transparent 60%)
          `,
        }}
      />

      <div className="absolute top-6 right-6 z-20 flex gap-3 sm:gap-4">
        <button
          onClick={() => handleDownload("CV")}
          className="px-4 py-2 bg-primary/80 hover:bg-primary text-primary-foreground font-semibold rounded-lg transition-all duration-300 text-sm hover:shadow-lg hover:shadow-primary/50"
        >
          Download CV
        </button>
        <button
          onClick={() => handleDownload("TEST")}
          className="px-4 py-2 bg-accent/80 hover:bg-accent text-accent-foreground font-semibold rounded-lg transition-all duration-300 text-sm hover:shadow-lg hover:shadow-accent/50"
        >
          Test File
        </button>
      </div>

      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="space-y-8 text-center">
          {/* Tagline */}
          <div className="scroll-fade-in">
            <div className="text-sm font-mono text-primary mb-4">{"> Igniting Cybersecurity"}</div>
            <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
              <span className="text-foreground">SAKAPURAM</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">
                PRASHANTH
              </span>
            </h1>
          </div>

          {/* Title and description */}
          <div className="scroll-fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-2xl md:text-4xl font-semibold text-primary">Malware Analyst & Reverse Engineer</h2>
            <p className="text-lg text-foreground/80 mt-3 max-w-2xl mx-auto">
              Exploring the deep layers of software behavior and cybersecurity threats
            </p>
          </div>

          {/* Bio */}
          <p
            className="text-foreground/70 leading-relaxed text-balance scroll-fade-in max-w-2xl mx-auto text-base md:text-lg"
            style={{ animationDelay: "0.4s" }}
          >
            2nd Year B.Tech Student at VIT Chennai | Specializing in Cyber-Physical Systems | Passionate about malware
            analysis, reverse engineering, and dissecting binary code.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 scroll-fade-in justify-center pt-4"
            style={{ animationDelay: "0.6s" }}
          >
            <button
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
            >
              Explore My Work
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all duration-300"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  )
}
