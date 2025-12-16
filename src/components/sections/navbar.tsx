"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const menuItems = [
    { label: 'Servizi', href: '#services' },
    { label: 'Perché Noi', href: '#why-us' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Dicono di Noi', href: '#testimonials' }
  ]

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav className={`w-full max-w-4xl border-2 border-white/20 bg-white/80 backdrop-blur-xl shadow-lg supports-backdrop-filter:bg-white/60 px-2 py-2 transition-all duration-300 ${isOpen ? 'rounded-3xl' : 'rounded-full'}`}>
        <div className="flex items-center justify-between pl-2">
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full hover:bg-black/5"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          <div className="hidden md:flex gap-1 items-center mx-auto">
            {menuItems.map((item, i) => (
              <Link 
                key={i}
                href={item.href}
                className="px-4 py-2 text-sm font-bold text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-full transition-all"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Link href="#contact">
              <Button size="sm" className="rounded-full px-6 shadow-md hover:shadow-lg bg-secondary hover:bg-secondary-hover text-secondary-foreground font-bold">
                Preventivo
              </Button>
            </Link>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pt-4 pb-2 px-2 flex flex-col gap-2 animate-in slide-in-from-top-5 fade-in duration-300 border-t border-muted/20 mt-2">
            {menuItems.map((item, i) => (
              <Link 
                key={i}
                href={item.href}
                className="block px-4 py-3 text-lg font-bold text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-2xl transition-all text-center"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </div>
  )
}
