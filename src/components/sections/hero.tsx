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
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center bg-dark-navy overflow-hidden">
      {/* Musical Background Pattern */}
      <div className="absolute inset-0">
        {/* Dark Navy Background */}
        <div className="absolute inset-0 bg-linear-to-br from-dark-navy via-dark-charcoal to-dark-slate"></div>

        {/* Subtle Geometric Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(250, 204, 21, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(14, 165, 233, 0.1) 0%, transparent 50%)
            `,
            backgroundSize: '200px 200px',
          }}
        ></div>

        {/* Musical Notes Pattern */}
        <div className="absolute top-20 right-20 opacity-5">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 60 L40 20 L50 15 L50 55 Z" fill="#facc15"/>
            <circle cx="45" cy="70" r="8" fill="#facc15"/>
            <path d="M70 50 L70 10 L80 5 L80 45 Z" fill="#0ea5e9"/>
            <circle cx="75" cy="60" r="6" fill="#0ea5e9"/>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center px-6 py-2 mb-8 text-sm font-medium text-gold-400 bg-gold-900/20 rounded-full border border-gold-600/30 backdrop-blur-sm"
        >
          <span className="w-2 h-2 bg-gold-400 rounded-full mr-2 animate-pulse"></span>
          PERFORMANCE DIGITAL AGENCY
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight px-4 uppercase tracking-wide"
        >
          ClikXo is a Performance
          <br />
          <span className="text-gold-400">
            Digital Solutions Agency
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-neutral-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
        >
          Digital marketing is evolving—are you staying ahead?
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
              className="px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold bg-gold-500 hover:bg-gold-600 text-dark-navy rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto border border-gold-400"
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
              className="px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-dark-navy rounded-lg transition-all duration-300 w-full sm:w-auto"
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
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-sm sm:text-base text-neutral-400">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">98%</div>
            <div className="text-sm sm:text-base text-neutral-400">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">5+</div>
            <div className="text-sm sm:text-base text-neutral-400">Years Experience</div>
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
