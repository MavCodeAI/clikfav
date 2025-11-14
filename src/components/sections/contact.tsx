"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Select } from "../ui/select"

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  companyName: z.string().min(2, "Company name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().min(1, "Please select a budget range"),
  timeline: z.string().min(1, "Please select a timeline"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormData = z.infer<typeof contactSchema>

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contactform" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto px-4">
            Ready to transform your business? Let&apos;s discuss your project and create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-neutral-50 rounded-xl p-6 sm:p-8 lg:p-12"
          >
            <h3 className="text-2xl font-semibold text-neutral-900 mb-6">
              Send us a message
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
              {/* Name Fields */}
              <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4">
                <div>
                  <Input
                    {...register("fullName")}
                    placeholder="Full Name *"
                    className="w-full"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                <div>
                  <Input
                    {...register("companyName")}
                    placeholder="Company Name *"
                    className="w-full"
                  />
                  {errors.companyName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.companyName.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Contact Fields */}
              <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4">
                <div>
                  <Input
                    {...register("email")}
                    type="email"
                    placeholder="Email Address *"
                    className="w-full"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <Input
                    {...register("phone")}
                    type="tel"
                    placeholder="Phone Number *"
                    className="w-full"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <Select {...register("service")} className="w-full">
                  <option value="">Select a Service *</option>
                  <option value="web-development">Web Development</option>
                  <option value="app-development">App Development</option>
                  <option value="graphics-design">Graphics Design</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="seo">SEO Services</option>
                  <option value="branding">Branding & Identity</option>
                  <option value="consulting">IT Consulting</option>
                  <option value="other">Other Services</option>
                </Select>
                {errors.service && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.service.message}
                  </p>
                )}
              </div>

              {/* Budget and Timeline */}
              <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4">
                <div>
                  <Select {...register("budget")} className="w-full">
                    <option value="">Budget Range *</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k+">$100,000+</option>
                  </Select>
                  {errors.budget && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.budget.message}
                    </p>
                  )}
                </div>

                <div>
                  <Select {...register("timeline")} className="w-full">
                    <option value="">Project Timeline *</option>
                    <option value="asap">ASAP (1-2 weeks)</option>
                    <option value="1-month">1 Month</option>
                    <option value="2-3-months">2-3 Months</option>
                    <option value="3-6-months">3-6 Months</option>
                    <option value="6-months+">6+ Months</option>
                  </Select>
                  {errors.timeline && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.timeline.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <Textarea
                  {...register("message")}
                  placeholder="Tell us about your project requirements, goals, and any specific details you'd like to share... *"
                  rows={5}
                  className="w-full resize-none"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full"
                size="lg"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center text-green-600 bg-green-50 p-4 rounded-lg"
                >
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Message sent successfully! We&apos;ll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center text-red-600 bg-red-50 p-4 rounded-lg"
                >
                  <AlertCircle className="w-5 h-5 mr-2" />
                  Something went wrong. Please try again later.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-neutral-900 mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Email</h4>
                    <p className="text-neutral-600">hello@clikxo.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Phone</h4>
                    <p className="text-neutral-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Address</h4>
                    <p className="text-neutral-600">
                      123 Innovation Street<br />
                      Tech District, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Business Hours</h4>
                    <p className="text-neutral-600">
                      Monday-Friday<br />
                      09:00 AM – 18:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
