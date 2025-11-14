"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"

const services = [
  'Web Development',
  'App Development',
  'Graphics Design',
  'Digital Marketing'
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <nav className="hidden md:flex items-center space-x-8">
      <Link href="/" className="text-neutral-600 hover:text-primary-500 transition-colors">
        HOME
      </Link>

      <div className="relative">
        <button
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
          className="flex items-center text-neutral-600 hover:text-primary-500 transition-colors"
        >
          SERVICES
          <ChevronDown className="ml-1 h-4 w-4" />
        </button>

        {servicesOpen && (
          <div
            className="absolute top-full left-0 mt-2 w-48 bg-white border border-neutral-200 rounded-md shadow-lg py-2 z-50"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            {services.map((service) => (
              <Link
                key={service}
                href={`#${service.toLowerCase().replace(' ', '-')}`}
                className="block px-4 py-2 text-sm text-neutral-600 hover:bg-neutral-50 hover:text-primary-500"
              >
                {service}
              </Link>
            ))}
          </div>
        )}
      </div>

      <Link href="#about" className="text-neutral-600 hover:text-primary-500 transition-colors">
        ABOUT
      </Link>

      <Link href="#contact" className="text-neutral-600 hover:text-primary-500 transition-colors">
        CONTACT
      </Link>
    </nav>
  )
}

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-neutral-200 md:hidden">
          <div className="px-4 py-6 space-y-4">
            <Link
              href="/"
              className="block text-neutral-600 hover:text-primary-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              HOME
            </Link>

            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center text-neutral-600 hover:text-primary-500 transition-colors w-full"
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
                      className="block text-sm text-neutral-600 hover:text-primary-500"
                      onClick={() => setIsOpen(false)}
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="#about"
              className="block text-neutral-600 hover:text-primary-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              ABOUT
            </Link>

            <Link
              href="#contact"
              className="block text-neutral-600 hover:text-primary-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              CONTACT
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
