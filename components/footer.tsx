"use client"

import { useEffect, useRef } from "react"

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("scroll-fade-in")
        }
      },
      { threshold: 0.1 },
    )

    if (footerRef.current) observer.observe(footerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <footer ref={footerRef} className="bg-background border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Copyright and Tagline */}
          <div className="space-y-2 scroll-fade-in">
            <p className="text-foreground font-semibold">© 2025 Sakapuram Prashanth.</p>
            <p className="text-muted-foreground">All rights reserved.</p>
            <p className="text-primary text-sm pt-2">Crafted with passion for cybersecurity</p>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col space-y-3 scroll-fade-in">
            <a
              href="#privacy"
              className="text-muted-foreground hover:text-primary hover:bg-primary/5 px-3 py-2 rounded-lg transition-all duration-300 cursor-pointer inline-block w-fit"
            >
              Privacy
            </a>
            <a
              href="#terms"
              className="text-muted-foreground hover:text-primary hover:bg-primary/5 px-3 py-2 rounded-lg transition-all duration-300 cursor-pointer inline-block w-fit"
            >
              Terms
            </a>
            <a
              href="#credits"
              className="text-muted-foreground hover:text-primary hover:bg-primary/5 px-3 py-2 rounded-lg transition-all duration-300 cursor-pointer inline-block w-fit"
            >
              Credits
            </a>
          </div>

          {/* More Options */}
          <div className="flex items-center justify-end scroll-fade-in">
            <button className="text-muted-foreground hover:text-primary hover:bg-primary/5 px-4 py-2 rounded-lg transition-all duration-300 text-lg font-bold">
              ...
            </button>
          </div>
        </div>

        {/* Divider and Bottom Text */}
        <div className="border-t border-border/50 pt-6 text-center scroll-fade-in">
          <p className="text-xs text-muted-foreground">
            Designed & developed with cybersecurity expertise. Protecting digital frontiers, one line of code at a time.
          </p>
        </div>
      </div>
    </footer>
  )
}
