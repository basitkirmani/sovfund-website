"use client"

import { useState } from "react"
import { Menu, X, MessageCircle } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur border-b border-accent/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
              <span className="text-background font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-bold text-accent">SOVFUND</span>
          </div>

          <nav className="hidden md:flex gap-8">
            <a href="#" className="text-foreground/70 hover:text-accent transition text-sm">
              Home
            </a>
            <a href="#" className="text-foreground/70 hover:text-accent transition text-sm">
              Vision
            </a>
            <a href="#" className="text-foreground/70 hover:text-accent transition text-sm">
              Investment
            </a>
            <a href="#" className="text-foreground/70 hover:text-accent transition text-sm">
              Team
            </a>
            <a href="#" className="text-foreground/70 hover:text-accent transition text-sm">
              Structure
            </a>
            <a href="#" className="text-foreground/70 hover:text-accent transition text-sm">
              Technology
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button className="px-6 py-2 text-foreground hover:text-accent transition text-sm font-medium">
              Login
            </button>
            <button className="px-6 py-2 bg-accent text-background rounded-full font-semibold hover:bg-accent/90 transition text-sm flex items-center gap-2">
              Contact Us
              <MessageCircle size={18} />
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <a href="#" className="text-foreground/70 hover:text-accent transition">
              Home
            </a>
            <a href="#" className="text-foreground/70 hover:text-accent transition">
              Vision
            </a>
            <a href="#" className="text-foreground/70 hover:text-accent transition">
              Investment
            </a>
            <a href="#" className="text-foreground/70 hover:text-accent transition">
              Team
            </a>
            <a href="#" className="text-foreground/70 hover:text-accent transition">
              Structure
            </a>
            <a href="#" className="text-foreground/70 hover:text-accent transition">
              Technology
            </a>
            <button className="px-6 py-2 text-foreground hover:text-accent transition w-full text-left">
              Login
            </button>
            <button className="px-6 py-2 bg-accent text-background rounded-full font-semibold hover:bg-accent/90 transition w-full flex items-center justify-center gap-2">
              Contact Us
              <MessageCircle size={18} />
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
