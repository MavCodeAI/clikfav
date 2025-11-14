"use client"

import { useState } from "react"
import { Phone, Globe, Menu } from "lucide-react"
import { Logo } from "../shared/logo"
import { Navigation } from "../shared/navigation"
import { MobileMenu } from "./mobile-menu"
import { Button } from "../ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToContact = () => {
    const element = document.getElementById('contactform')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <Navigation />

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <button className="hidden md:flex items-center text-neutral-600 hover:text-primary-500 transition-colors">
              <Globe className="h-4 w-4" />
            </button>

            {/* Phone Number */}
            <a
              href="tel:+97144318653"
              className="hidden md:flex items-center text-neutral-600 hover:text-primary-500 transition-colors"
            >
              <Phone className="h-4 w-4 mr-1" />
              +971 44318653
            </a>

            {/* CTA Button */}
            <Button
              onClick={scrollToContact}
              className="hidden md:inline-flex"
            >
              CALL NOW
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  )
}
