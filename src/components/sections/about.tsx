"use client"

import { motion } from "framer-motion"
import { Lightbulb, Award, Heart } from "lucide-react"
import { Button } from "../ui/button"

const values = [
  {
    icon: Lightbulb,
    title: "Innovation-Driven",
    description: "Cutting-edge solutions using latest technologies for optimal performance and user experience."
  },
  {
    icon: Award,
    title: "Quality-Focused",
    description: "Delivering exceptional results with attention to detail and rigorous testing standards."
  },
  {
    icon: Heart,
    title: "Client-Centric",
    description: "Custom solutions tailored to your specific business needs and growth objectives."
  }
]

export function About() {
  const scrollToContact = () => {
    const element = document.getElementById('contactform')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="about" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              About ClikXo
            </h2>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              We are a premium tech company specializing in comprehensive digital solutions.
              From web and mobile app development to stunning graphics design and strategic
              digital marketing, we help businesses thrive in the digital landscape.
            </p>

            <div className="space-y-6 mb-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="shrink-0 w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-neutral-600">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button onClick={scrollToContact} size="lg">
              Get In Touch
            </Button>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-linear-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Lightbulb className="w-12 h-12 text-white" />
                </div>
                <p className="text-primary-700 font-semibold">Innovation at Heart</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
