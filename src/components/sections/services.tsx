"use client"

import { motion } from "framer-motion"
import { Globe, Smartphone, Palette, TrendingUp, Code, Zap, BarChart, Target } from "lucide-react"

const services = [
  {
    code: 'WEB',
    name: 'WEB DEVELOPMENT',
    description: 'We build custom responsive websites using modern technologies like React, Next.js, and TypeScript. When ranking high on search engines and providing optimal user experience, you get more organic traffic to your website which will lead to increased revenue and conversions.',
    icon: Globe
  },
  {
    code: 'APP',
    name: 'APP DEVELOPMENT',
    description: 'Native and cross-platform mobile applications for iOS and Android using React Native and Flutter. Our team makes use of effective mobile app development helping all our clients to reach a wider audience and build a solid mobile presence, thereby boosting your app downloads and ultimately sales.',
    icon: Smartphone
  },
  {
    code: 'GRAPHICS',
    name: 'GRAPHICS DESIGN',
    description: 'Professional logo design, branding materials, UI/UX design, and visual content creation. Benefit from the digital space and convert more visitors into customers with stunning visual designs that get a larger ROI with enhanced creative solutions that our team excels at every step of the way!',
    icon: Palette
  },
  {
    code: 'MARKETING',
    name: 'DIGITAL MARKETING',
    description: 'Strategic digital marketing campaigns including SEO, social media marketing, content creation, and paid advertising. We harness the power of digital marketing for business growth and digital transformation when combined with the best practices in SEM, matching people seeking a solution or service with you.',
    icon: TrendingUp
  },
  {
    code: 'SEO',
    name: 'SEO OPTIMIZATION',
    description: 'We steer more traffic to your website by using SEO strategies in content creation. When ranking high on search engines you get more organic traffic to your page will lead to increased revenue and conversions.',
    icon: Target
  },
  {
    code: 'SMA',
    name: 'SOCIAL MEDIA ADVERTISING',
    description: 'Our team makes use of effective social media marketing helping all our clients to reach a wider audience and build a solid social media presence. Thereby, boosting your website traffic leads and ultimately sales.',
    icon: Zap
  },
  {
    code: 'CRO',
    name: 'CONVERSION RATE OPTIMIZATION',
    description: 'Benefit from the digital space and convert more visitors into customers and get a larger ROI with multivariate testing and enhanced optimization management that our team excels at every step of the way!',
    icon: BarChart
  },
  {
    code: 'PPC',
    name: 'PAY PER CLICK ADVERTISING',
    description: 'We harness the power of PPC for business growth and digital transformation when combined with the best practices in SEM. PPC digital marketing campaigns match people seeking a solution or service with you.',
    icon: Code
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
            Tune Up Your Business Performance With Our Personalized Digital Solutions
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 max-w-2xl sm:max-w-3xl mx-auto px-4">
            Data‑Driven + Result‑Oriented solutions that propel your business to success while minimizing risk of failure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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
