"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What services does ClikXo offer?",
    answer: "ClikXo offers comprehensive digital solutions including custom web development, mobile app development, professional graphics design, and strategic digital marketing services. We provide end-to-end solutions from concept to deployment."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity and scope. A simple website takes 2-4 weeks, while complex web applications or mobile apps may take 2-6 months. We provide detailed project timelines during our initial consultation."
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes, we offer comprehensive support and maintenance packages for all our projects. This includes regular updates, security patches, bug fixes, and technical support to ensure your digital solutions continue to perform optimally."
  },
  {
    question: "Can you work with our existing brand and design guidelines?",
    answer: "Absolutely! We respect and work within your existing brand guidelines. Our design team can adapt our creative approach to match your brand identity while ensuring consistency across all digital touchpoints."
  },
  {
    question: "What technologies do you use for development?",
    answer: "We use modern, industry-standard technologies including React, Next.js, TypeScript for web development, React Native and Flutter for mobile apps, and various design tools like Figma and Adobe Creative Suite for graphics design."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg border border-neutral-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-neutral-900">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-neutral-500 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <p className="text-neutral-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
