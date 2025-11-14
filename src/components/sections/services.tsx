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
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-4 px-4">
            Tune Up Your Business Performance With Our Personalized Digital Solutions
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl sm:max-w-3xl mx-auto px-4">
            At the heart of our tech company is a steady tempo: propelling your business to success while minimizing your risk of failure. With our wide range of services, you&apos;ll be one step closer to hitting all the right notes.
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
              className="group relative bg-linear-to-br from-white to-primary-50 border-2 border-primary-200 rounded-2xl p-6 sm:p-8 hover:border-primary-500 transition-all duration-500 shadow-lg hover:shadow-2xl"
            >
              <div className="flex flex-col items-center text-center">
                <motion.div 
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-linear-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:from-primary-600 group-hover:to-primary-800 transition-all duration-500 shadow-xl"
                >
                  <service.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </motion.div>
                
                <div className="text-sm sm:text-base font-black text-primary-600 mb-2 sm:mb-3 tracking-wider">
                  {service.code}
                </div>
                
                <h3 className="text-lg sm:text-xl font-black text-neutral-900 mb-3 sm:mb-4 leading-tight">
                  {service.name}
                </h3>
                
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-medium">
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
