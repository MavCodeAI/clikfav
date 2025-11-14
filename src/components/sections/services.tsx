"use client"

import { motion } from "framer-motion"
import { Globe, Smartphone, Palette, TrendingUp, Code, Zap, BarChart, Target } from "lucide-react"

const services = [
  {
    code: 'SEO',
    name: 'Search Engine Optimization',
    description: 'Optimize your website\'s visibility and rank higher in search results',
    icon: Target
  },
  {
    code: 'SMA',
    name: 'Social Media Advertising',
    description: 'Reach your target audience across all social platforms with strategic ad campaigns',
    icon: Zap
  },
  {
    code: 'CRO',
    name: 'Conversion Rate Optimization',
    description: 'Transform website visitors into paying customers with proven optimization techniques',
    icon: BarChart
  },
  {
    code: 'PPC',
    name: 'Pay Per Click Advertising',
    description: 'Drive immediate traffic and leads with targeted pay-per-click campaigns',
    icon: Code
  },
  {
    code: 'DDA',
    name: 'Digital Display Advertising',
    description: 'Create brand awareness with eye-catching display advertisements across the web',
    icon: TrendingUp
  },
  {
    code: 'WAM',
    name: 'Web Analytics Management',
    description: 'Track, measure, and optimize your digital marketing performance with advanced analytics',
    icon: Globe
  }
]

export function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-dark-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4 uppercase tracking-wide">
            Tune Up Your Business Performance With Our Personalized Digital Marketing <span className="text-gold-400">Services</span> in Dubai
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 max-w-2xl sm:max-w-3xl mx-auto px-4">
            We provide comprehensive digital marketing solutions in Dubai tailored to your business needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.code}
              initial={{ opacity: 0, y: 40, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0, 87, 255, 0.3)"
              }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              className="group relative bg-dark-card border border-neutral-700 rounded-lg p-6 hover:border-gold-400 hover:shadow-lg hover:shadow-gold-400/20 transition-all duration-300 aspect-square flex flex-col justify-center items-center text-center"
            >
              <div className="flex flex-col items-center">
                <div className="text-2xl sm:text-3xl font-black text-gold-400 mb-3 uppercase tracking-wider">
                  {service.code}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 leading-tight">
                  {service.name}
                </h3>

                <p className="text-sm text-neutral-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
