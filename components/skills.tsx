"use client"

import { useEffect, useRef, useState } from "react"

const skillsData = [
  {
    category: "Programming Languages",
    icon: "{}",
    skills: [
      { name: "Python", detail: "Primary language for malware analysis and automation scripts" },
      { name: "Java", detail: "Android malware analysis and bytecode reverse engineering" },
      { name: "C", detail: "Low-level system programming and kernel-level understanding" },
      { name: "C++", detail: "Performance-critical reverse engineering tools" },
      { name: "Assembly", detail: "x86/x64 assembly analysis and exploitation techniques" },
    ],
  },
  {
    category: "Reversing Tools",
    icon: "⚙️",
    skills: [
      { name: "Ghidra", detail: "Advanced binary analysis with decompiler capabilities" },
      { name: "IDA Free", detail: "Interactive disassembly and debugging framework" },
      { name: "Pestudio", detail: "Portable executable static analysis tool" },
      { name: "PE Bear", detail: "Portable Executable format parser and editor" },
      { name: "Exeinfo", detail: "Executable file identifier and analyzer" },
      { name: "ANY.RUN", detail: "Interactive online malware analysis platform" },
    ],
  },
  {
    category: "Analysis Techniques",
    icon: "🔍",
    skills: [
      { name: "Static Analysis", detail: "Code examination without execution" },
      { name: "Dynamic Analysis", detail: "Runtime behavior monitoring and debugging" },
      { name: "Binary Disassembly", detail: "Converting machine code to assembly language" },
      { name: "API Hooking", detail: "Intercepting function calls and system APIs" },
    ],
  },
]

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

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
    <section id="skills" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          <span className="text-foreground">Technical </span>
          <span className="text-primary">Skills</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.map((skillGroup, idx) => (
            <div
              key={idx}
              className="group bg-card border border-border rounded-lg p-8 hover:border-primary/50 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105 cursor-pointer scroll-fade-in"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              <div className="text-4xl mb-4 group-hover:text-primary transition-colors">{skillGroup.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-6">{skillGroup.category}</h3>

              <div className="space-y-2">
                {skillGroup.skills.map((skill, i) => (
                  <div key={i} className="relative">
                    <div
                      className="flex items-center text-foreground group-hover:text-accent transition-colors py-2 cursor-pointer"
                      onMouseEnter={() => setHoveredSkill(`${idx}-${i}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:scale-150 transition-transform" />
                      {skill.name}
                    </div>

                    {/* Detail popup on hover */}
                    {hoveredSkill === `${idx}-${i}` && (
                      <div className="absolute left-0 top-full mt-1 bg-primary/20 border border-primary/50 rounded-lg p-3 text-sm text-foreground z-50 w-48 backdrop-blur-sm">
                        {skill.detail}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
