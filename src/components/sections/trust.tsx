"use client"

import { motion } from "framer-motion"
import Image from "next/image"

// Placeholder client logos - replace with actual logos
const clientLogos = [
  { name: "Client 1", src: "/logos/client1.svg" },
  { name: "Client 2", src: "/logos/client2.svg" },
  { name: "Client 3", src: "/logos/client3.svg" },
  { name: "Client 4", src: "/logos/client4.svg" },
  { name: "Client 5", src: "/logos/client5.svg" },
  { name: "Client 6", src: "/logos/client6.svg" },
]

export function Trust() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Trusted by Growing Companies Who Value Quality, Innovation, and Genuine Partnership
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
        >
          {clientLogos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105"
            >
              <div className="w-32 h-16 relative">
                {/* Placeholder for logo - replace with actual Image component */}
                <div className="w-full h-full bg-neutral-200 rounded flex items-center justify-center text-neutral-500 text-sm">
                  {logo.name}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
