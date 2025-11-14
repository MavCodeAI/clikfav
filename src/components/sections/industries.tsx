"use client"

import { motion } from "framer-motion"
import { Car, Building, Calendar, ShoppingBag, Plane, GraduationCap, Fuel, BookOpen, Stethoscope, Cpu } from "lucide-react"

const industries = [
  {
    name: "Automotive",
    description: "We'll get people revved up and ready to engage with your automotive business by creating stunning web experiences and digital marketing campaigns as smooth as a luxury car ride.",
    icon: Car
  },
  {
    name: "Real Estate",
    description: "We'll do everything possible to attract serious buyers and differentiate your listings from competitors using our experience in real estate digital solutions and property platforms.",
    icon: Building
  },
  {
    name: "Events",
    description: "We'll make sure there's curiosity around your event with digital solutions designed to draw more attendees and bring in qualified leads through event management platforms.",
    icon: Calendar
  },
  {
    name: "Retail",
    description: "We'll help you boost your sales with effective e-commerce solutions and branding services that will have your customers engaged and keep them coming back for more.",
    icon: ShoppingBag
  },
  {
    name: "Travel & Tourism",
    description: "We'll amplify your bookings with attractive digital campaigns that will give people an urge to grab a ticket on the first plane available through booking platforms.",
    icon: Plane
  },
  {
    name: "Education",
    description: "We'll help make your institute a top choice for aspiring scholars with intuitive digital platforms designed to get you more enrollments and student engagement.",
    icon: GraduationCap
  },
  {
    name: "Oil & Gas",
    description: "We'll help you grab the attention of your target audience by utilizing innovative digital strategies designed to improve your customer loyalty and online presence.",
    icon: Fuel
  },
  {
    name: "Publishers",
    description: "We'll magnetize your audience with captivating digital platforms and content management systems that have the same effect as best-selling page-turners.",
    icon: BookOpen
  },
  {
    name: "Medical",
    description: "We'll give your practice the exposure it deserves to help you obtain more patients and make it a top choice for anyone in need of medical assistance.",
    icon: Stethoscope
  },
  {
    name: "Electronics",
    description: "We'll help you spark interest in your products and generate more sales with electrifying digital campaigns that'll give you an advantage over the competition.",
    icon: Cpu
  }
]

export function Industries() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Adjust Your Tone As Needed With One of the Best Tech Companies
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            We specialize in creating tailored digital solutions for diverse industries, helping each sector achieve their unique business objectives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 30, rotateY: -90 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              whileHover={{ 
                y: -8, 
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(0, 87, 255, 0.2)"
              }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.08,
                type: "spring",
                stiffness: 80
              }}
              viewport={{ once: true }}
              className="group relative bg-linear-to-br from-white via-primary-50 to-primary-100 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-primary-200 hover:border-primary-400"
            >
              <div className="flex flex-col items-center text-center">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 360,
                    backgroundColor: "#0057FF"
                  }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1 + 0.2,
                    type: "spring"
                  }}
                  className="w-16 h-16 bg-linear-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mb-6 group-hover:from-primary-500 group-hover:to-primary-700 transition-all duration-500 shadow-lg"
                >
                  <industry.icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-500" />
                </motion.div>
                <h3 className="text-lg font-black text-neutral-900 mb-4 tracking-wide">
                  {industry.name}
                </h3>
                <p className="text-neutral-700 leading-relaxed font-medium text-sm">
                  {industry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
