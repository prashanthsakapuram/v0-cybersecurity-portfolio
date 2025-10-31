"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center scroll-fade-in">
          <span className="text-foreground">Get in </span>
          <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg scroll-fade-in">
          Let's connect and explore cybersecurity together
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 scroll-fade-in cursor-pointer">
              <h3 className="text-primary font-semibold mb-2 flex items-center">
                <span className="mr-3 text-xl">📧</span> Email
              </h3>
              <a
                href="mailto:prashanthsakapuram@gmail.com"
                className="text-foreground hover:text-primary transition-colors break-all"
              >
                prashanthsakapuram@gmail.com
              </a>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 scroll-fade-in cursor-pointer">
              <h3 className="text-primary font-semibold mb-2 flex items-center">
                <span className="mr-3 text-xl">📱</span> Phone
              </h3>
              <a href="tel:+917995690928" className="text-foreground hover:text-primary transition-colors">
                +91 7995690928
              </a>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-6 hover:from-primary/20 hover:to-accent/20 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 scroll-fade-in cursor-pointer">
              <h4 className="text-primary font-semibold mb-4 text-lg">Connect on Social Media:</h4>
              <div className="space-y-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-foreground hover:text-primary transition-colors"
                >
                  <span className="mr-3 text-xl">🐙</span> GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-foreground hover:text-primary transition-colors"
                >
                  <span className="mr-3 text-xl">💼</span> LinkedIn
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-foreground hover:text-primary transition-colors"
                >
                  <span className="mr-3 text-xl">📸</span> Instagram
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-6 hover:from-primary/20 hover:to-accent/20 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 scroll-fade-in cursor-pointer">
              <p className="text-sm text-muted-foreground mb-3">Available for:</p>
              <ul className="space-y-2">
                <li className="flex items-center text-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Cybersecurity Internships
                </li>
                <li className="flex items-center text-foreground">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                  Research Collaborations
                </li>
                <li className="flex items-center text-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Tech Discussions
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 scroll-fade-in">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 hover:bg-primary/90 transition-all duration-300 hover:scale-105"
            >
              Send Message
            </button>

            {submitted && (
              <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-sm">
                Thank you! I'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
