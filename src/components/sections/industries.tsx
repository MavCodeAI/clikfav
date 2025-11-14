"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Stethoscope, Cpu, Car } from "lucide-react"

const industries = [
  {
    name: "Medical",
    description: "Specialized healthcare marketing solutions that build trust and drive patient engagement through HIPAA-compliant digital platforms.",
    icon: Stethoscope
  },
  {
    name: "Electronics",
    description: "Technology-focused marketing strategies that showcase innovation and drive sales through cutting-edge digital campaigns.",
    icon: Cpu
  },
  {
    name: "Automotive",
    description: "Automotive industry marketing that accelerates your brand's journey to market success with performance-driven campaigns.",
    icon: Car
  }
]

export function Industries() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-dark-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Adjust Your Tone As Needed With One of the Best
            <span className="text-gold-400"> Digital Solutions Agencies</span>
          </h2>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-neutral-900 mb-4">
                  {industry.name}
                </h3>

                <p className="text-neutral-600 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center items-center space-x-4"
        >
          <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200">
            <ChevronLeft className="w-6 h-6 text-neutral-600" />
          </button>

          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-gold-400 rounded-full"></div>
            <div className="w-3 h-3 bg-neutral-400 rounded-full"></div>
            <div className="w-3 h-3 bg-neutral-400 rounded-full"></div>
          </div>

          <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200">
            <ChevronRight className="w-6 h-6 text-neutral-600" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
