"use client"

import { motion } from "framer-motion"

const testimonials = [
  {
    name: 'SARAH MARTINEZ',
    company: 'TechStart Inc.',
    quote: "I've had the pleasure of working with ClikXo for over a year now. Their team is knowledgeable, creative, proactive, responsive, and passionate about their work. Their energy shines through their efforts and it makes working with them so much fun. They've helped us plan, launch and execute some of our most successful digital campaigns driving a sizable growth in lead generation.",
    avatar: '/avatars/sarah.jpg'
  },
  {
    name: 'DAVID CHEN',
    company: 'MobileFirst',
    quote: "The in-depth knowledge in mobile app development, and over-all breadth of understanding in digital solutions really ignited our digital space and really fired my interest in this area. They made it engaging and provided current, real examples and clear guidelines and advice to grow my business in this space, with good reference material and practical tools to take away.",
    avatar: '/avatars/david.jpg'
  },
  {
    name: 'LISA THOMPSON',
    company: 'Creative Studio',
    quote: "I had the honor of collaborating with ClikXo for 2 years on growing my creative platform. I have rarely met anyone who is as detail-oriented & committed to serving their clients to the best of their abilities and with the highest ethical standards. They've managed to increase the traffic on my platform significantly & their contribution has been extremely valuable to my business.",
    avatar: '/avatars/lisa.jpg'
  },
  {
    name: 'AHMED KHAN',
    company: 'Retail Plus',
    quote: "In a fast-moving digital world, I need all the tech help I can get, and ClikXo takes care of everything for me. They provide very useful insights that have helped me increase my business' reach. I highly recommend their services as they helped me stay ahead of the competition. Their team has really made my life so much easier & I can't thank them enough!",
    avatar: '/avatars/ahmed.jpg'
  }
]

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Testimonials From People Just Like You
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            We asked some of our clients to write a few words about their experience with us. Here&apos;s what they had to say!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              whileHover={{ 
                y: -5, 
                scale: 1.02,
                boxShadow: "0 30px 60px rgba(0, 87, 255, 0.15)"
              }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 60
              }}
              viewport={{ once: true }}
              className="bg-linear-to-br from-white via-primary-50 to-primary-100 rounded-2xl p-10 border-2 border-primary-200 hover:border-primary-400 transition-all duration-500 shadow-xl hover:shadow-2xl"
            >
              <div className="flex items-start space-x-6 mb-8">
                <motion.div 
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 360,
                    backgroundColor: "#0057FF"
                  }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2 + 0.3,
                    type: "spring"
                  }}
                  className="w-20 h-20 bg-linear-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white font-black text-2xl shrink-0 shadow-xl"
                >
                  {testimonial.name.charAt(0)}
                </motion.div>
                <div>
                  <h4 className="font-black text-neutral-900 text-xl mb-2">
                    {testimonial.name}
                  </h4>
                  <p className="text-primary-600 font-bold text-lg">
                    {testimonial.company}
                  </p>
                </div>
              </div>
              <blockquote className="text-neutral-800 leading-relaxed text-lg italic font-medium">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
