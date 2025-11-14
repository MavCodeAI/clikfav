"use client"

import { motion } from "framer-motion"

const values = [
  {
    number: "01",
    title: "Data-Driven",
    description: "Every decision is backed by analytics and real-world data to ensure maximum ROI for our clients."
  },
  {
    number: "02",
    title: "Result-Oriented",
    description: "We focus on delivering measurable outcomes that directly impact your business growth and success."
  },
  {
    number: "03",
    title: "Customer-Centric",
    description: "Your success is our priority. We build long-term partnerships based on trust and exceptional service."
  }
]

export function CoreValues() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-dark-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mb-6">
                <span className="text-4xl sm:text-5xl font-bold text-gold-400">
                  {value.number}
                </span>
                <div className="w-16 h-1 bg-gold-400 mx-auto mt-2"></div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                {value.title}
              </h3>

              <p className="text-neutral-300 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
