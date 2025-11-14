"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, X } from "lucide-react"

const services = [
  'Web Development',
  'App Development',
  'Graphics Design',
  'Digital Marketing'
]

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [servicesOpen, setServicesOpen] = useState(false)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Menu */}
      <div className="absolute top-0 right-0 h-full w-80 max-w-[90vw] bg-white shadow-xl">
        <div className="flex items-center justify-between p-4 border-b border-neutral-200">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={onClose}>
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-4 space-y-4">
          <Link
            href="/"
            className="block py-2 text-neutral-600 hover:text-primary-500 transition-colors"
            onClick={onClose}
          >
            HOME
          </Link>

          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center py-2 text-neutral-600 hover:text-primary-500 transition-colors w-full"
            >
              SERVICES
              <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {servicesOpen && (
              <div className="mt-2 ml-4 space-y-2">
                {services.map((service) => (
                  <Link
                    key={service}
                    href={`#${service.toLowerCase().replace(' ', '-')}`}
                    className="block py-1 text-sm text-neutral-600 hover:text-primary-500"
                    onClick={onClose}
                  >
                    {service}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="#about"
            className="block py-2 text-neutral-600 hover:text-primary-500 transition-colors"
            onClick={onClose}
          >
            ABOUT
          </Link>

          <Link
            href="#contact"
            className="block py-2 text-neutral-600 hover:text-primary-500 transition-colors"
            onClick={onClose}
          >
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  )
}
