"use client"

import { motion } from "framer-motion"
import { Button } from "../ui/button"

export function About() {
  const scrollToContact = () => {
    const element = document.getElementById('contactform')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Take a Peek Behind the Curtains of Our Digital Marketing Company in Dubai
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Sculpture Visual */}
            <div className="bg-linear-to-br from-neutral-100 to-neutral-200 rounded-2xl p-8 shadow-xl">
              <div className="text-center">
                <div className="text-6xl mb-4">🎭</div>
                <div className="absolute -top-4 -right-4 text-3xl">🎵</div>
                <div className="absolute -bottom-4 -left-4 text-3xl">🎼</div>
                <div className="absolute top-1/2 -right-6 text-2xl">♪</div>
              </div>
            </div>

            {/* Golden Musical Notes */}
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-gold-400 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl">🎵</span>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-neutral-700 leading-relaxed">
              We are a leading digital marketing agency in Dubai with a unique approach that combines data analytics with creative storytelling. Our expertise in digital marketing campaigns helps businesses achieve digital transformation through certified Google Ads agency services.
            </p>

            <div className="pt-4">
              <Button
                onClick={scrollToContact}
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3"
              >
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Visual Element */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center justify-center w-32 h-32 bg-linear-to-r from-primary-400 to-primary-600 rounded-full shadow-xl">
            <span className="text-4xl">🤝</span>
          </div>

          {/* Digital Text with Gradient */}
          <div className="mt-6">
            <span className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              DIGITAL
            </span>
          </div>
        </motion.div>

        {/* Golden Saxophone */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="fixed bottom-8 right-8 w-24 h-24 bg-gold-400 rounded-full flex items-center justify-center shadow-2xl z-10"
        >
          <span className="text-3xl">🎷</span>
        </motion.div>
      </div>
    </section>
  )
}
