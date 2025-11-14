"use client"

import { motion } from "framer-motion"
import { Button } from "../ui/button"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contactform')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToServices = () => {
    const element = document.getElementById('services')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center bg-white">
      {/* Clean Professional Background */}
      <div className="absolute inset-0 bg-linear-to-br from-neutral-50 via-white to-neutral-100"></div>

      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center px-6 py-2 mb-8 text-sm font-medium text-primary-700 bg-primary-100 rounded-full border border-primary-200"
        >
          <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
          Performance-Driven Tech Solutions
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-neutral-900 mb-4 sm:mb-6 leading-tight px-4"
        >
          ClikXo is a Performance
          <br />
          <span className="text-primary-600">
            Digital Solutions Agency
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-neutral-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
        >
          Trusted by leading brands who value growth, integrity, and genuine partnership.
          Transform your business with cutting-edge technology solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              className="px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              Request a Proposal
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={scrollToServices}
              size="lg"
              variant="outline"
              className="px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white rounded-lg transition-all duration-300 w-full sm:w-auto"
            >
              View Our Services
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto px-4"
        >
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-600 mb-2">500+</div>
            <div className="text-sm sm:text-base text-neutral-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-600 mb-2">98%</div>
            <div className="text-sm sm:text-base text-neutral-600">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-600 mb-2">5+</div>
            <div className="text-sm sm:text-base text-neutral-600">Years Experience</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-blue-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
