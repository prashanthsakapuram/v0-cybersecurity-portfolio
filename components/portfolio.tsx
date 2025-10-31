"use client"

import { useEffect, useRef } from "react"

const projects = [
  {
    title: "ALNALIZED RAT",
    subtitle: "Remote Access Trojan Analysis & Research",
    description:
      "In-depth analysis and reverse engineering of the ALNALIZED Remote Access Trojan. This project involves comprehensive malware analysis, behavior monitoring, and documentation of command and control mechanisms.",
    details: [
      "Static binary analysis using Ghidra and IDA Pro",
      "Dynamic analysis with API hooking and process monitoring",
      "C2 communication protocol reverse engineering",
      "Malware capability extraction and documentation",
      "Behavioral analysis in isolated sandbox environment",
      "Detailed technical report and IOC (Indicators of Compromise)",
    ],
    category: "Malware Analysis",
    status: "In Progress",
    tools: ["Ghidra", "IDA Pro", "Wireshark", "Process Monitor", "ANY.RUN"],
  },
]

export default function Portfolio() {
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
      id="portfolio"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20 matrix-bg"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          <span className="text-foreground">Portfolio & </span>
          <span className="text-primary">Projects</span>
        </h2>

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 scroll-fade-in hover:scale-[1.02]"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 border-b border-border">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">{project.title}</h3>
                    <p className="text-primary/80 font-semibold">{project.subtitle}</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="px-4 py-2 bg-primary/30 text-primary rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                    <span className="px-4 py-2 bg-accent/30 text-accent rounded-full text-sm font-semibold">
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                <p className="text-foreground text-lg leading-relaxed">{project.description}</p>

                {/* Details List */}
                <div>
                  <h4 className="text-primary font-semibold mb-4 text-lg">Analysis Scope:</h4>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {project.details.map((detail, i) => (
                      <li key={i} className="flex items-start text-foreground">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools Used */}
                <div>
                  <h4 className="text-primary font-semibold mb-4 text-lg">Tools & Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/20 border border-primary/50 text-primary rounded-full text-sm hover:bg-primary/40 hover:border-primary/80 transition-all duration-200 cursor-pointer"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
