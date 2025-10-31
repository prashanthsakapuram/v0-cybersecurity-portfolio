"use client"

import { useEffect, useRef } from "react"

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("scroll-fade-in")
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20 matrix-bg"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 scroll-fade-in">
          <span className="text-foreground">About </span>
          <span className="text-primary">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed scroll-fade-in">
              I'm a Cyber-Physical Systems student at VIT Chennai, passionate about malware analysis, reversing, and
              cybersecurity. I love dissecting binaries, understanding how code behaves, and building a strong technical
              foundation in system-level programming and reverse engineering.
            </p>

            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 scroll-fade-in cursor-pointer">
              <h3 className="text-primary font-semibold mb-4">Education</h3>
              <div>
                <p className="font-semibold text-foreground">Vellore Institute of Technology</p>
                <p className="text-muted-foreground">B.Tech in Cyber-Physical Systems (2nd Year)</p>
                <p className="text-muted-foreground mt-2">Location: Chennai</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-6 hover:from-primary/20 hover:to-accent/20 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 scroll-fade-in cursor-pointer">
              <h3 className="text-primary font-semibold mb-3">Currently Learning</h3>
              <p className="text-foreground">
                Advanced malware reversing techniques and dynamic analysis methodologies to master the craft of
                cybersecurity research.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 scroll-fade-in cursor-pointer">
              <h3 className="text-accent font-mono text-sm mb-4">{"$ whoami"}</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-3">→</span>
                  <span className="text-foreground">Cybersecurity Enthusiast</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">→</span>
                  <span className="text-foreground">Binary Analyst in Training</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">→</span>
                  <span className="text-foreground">System-Level Programming Practitioner</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">→</span>
                  <span className="text-foreground">Problem Solver & Tech Explorer</span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-center hover:border-primary/50 hover:bg-primary/20 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 scroll-fade-in cursor-pointer">
                <p className="text-2xl font-bold text-primary">2nd</p>
                <p className="text-sm text-muted-foreground">Year Student</p>
              </div>
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 text-center hover:border-primary/50 hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 scroll-fade-in cursor-pointer">
                <p className="text-2xl font-bold text-accent">∞</p>
                <p className="text-sm text-muted-foreground">Passion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
