import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, MessageCircle, MapPin, Mail, Phone, Clock } from "lucide-react"
import { Logo } from "../shared/logo"

const footerLinks = [
  // Service links - grouped for display
  { name: "Web Development Services", href: "#" },
  { name: "E-commerce Development", href: "#" },
  { name: "Custom Web Applications", href: "#" },
  { name: "Website Maintenance", href: "#" },
  { name: "SEO Optimization", href: "#" },
  { name: "Mobile App Development", href: "#" },
  { name: "iOS App Development", href: "#" },
  { name: "Android App Development", href: "#" },
  { name: "Cross-platform Apps", href: "#" },
  { name: "UI/UX Design", href: "#" },
  { name: "Logo Design", href: "#" },
  { name: "Brand Identity", href: "#" },
  { name: "Digital Marketing", href: "#" },
  { name: "Social Media Marketing", href: "#" },
  { name: "Content Marketing", href: "#" },
  { name: "PPC Advertising", href: "#" },
  { name: "Email Marketing", href: "#" },
  { name: "Marketing Automation", href: "#" },
  { name: "Analytics & Reporting", href: "#" },
  { name: "Conversion Optimization", href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Contact Form Section */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
            <p className="text-neutral-300 mb-4">
              Ready to transform your business? Let's discuss your project and create something amazing together.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-neutral-300">
                <Mail className="h-4 w-4 mr-2" />
                hello@clikxo.com
              </div>
              <div className="flex items-center text-neutral-300">
                <Phone className="h-4 w-4 mr-2" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-start text-neutral-300">
                <MapPin className="h-4 w-4 mr-2 mt-1" />
                <span>123 Innovation Street, Tech District, NY 10001</span>
              </div>
              <div className="flex items-center text-neutral-300">
                <Clock className="h-4 w-4 mr-2" />
                Monday-Friday 09:00 AM – 18:00 PM
              </div>
            </div>
          </div>

          {/* Service Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <div className="grid grid-cols-1 gap-2">
              {footerLinks.slice(0, 8).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-neutral-300 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <div className="space-y-2">
              <Link href="#" className="block text-neutral-300 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="#" className="block text-neutral-300 hover:text-white transition-colors">
                Our Team
              </Link>
              <Link href="#" className="block text-neutral-300 hover:text-white transition-colors">
                Careers
              </Link>
              <Link href="#" className="block text-neutral-300 hover:text-white transition-colors">
                Blog
              </Link>
              <Link href="#" className="block text-neutral-300 hover:text-white transition-colors">
                Contact Us
              </Link>
              <Link href="#" className="block text-neutral-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-neutral-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <Logo />
              <div className="text-sm text-neutral-400">
                © 2025 ClikXo Technologies – All Rights Reserved
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-neutral-400 hover:text-white transition-colors">
                <MessageCircle className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
