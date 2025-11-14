"use client"

import { motion } from "framer-motion"

// Placeholder logos - in real implementation, these would be actual client logos
const clients = [
  { name: "Avène", logo: "🏥" },
  { name: "Dubai Balloon", logo: "🎈" },
  { name: "Platinum Heritage", logo: "🏛️" },
  { name: "Cartlow", logo: "🛒" },
  { name: "Al Marwan", logo: "🏪" },
  { name: "Dubai Investments", logo: "💼" },
  { name: "mimojo", logo: "📱" },
  { name: "Dubai Chamber", logo: "🏢" },
  { name: "Tech Solutions", logo: "⚡" }
]

export function TrustedBrands() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Trusted by <span className="text-primary-600">Leading Brands</span> Who Value Growth, Integrity, and Genuine Partnership
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-8 items-center justify-items-center"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-lg shadow-md border border-neutral-200 hover:shadow-lg transition-shadow duration-300"
            >
              <span className="text-2xl sm:text-3xl">{client.logo}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
