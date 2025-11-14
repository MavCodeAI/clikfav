"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion } from "framer-motion"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  Send,
  Building,
  User,
  MessageSquare,
  Calendar
} from "lucide-react"
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
    <section id="contactform" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Let&apos;s Build Something Amazing Together
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto">
            Ready to transform your business? Share your project details and let&apos;s create something extraordinary.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 border border-neutral-200">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center mr-3">
                  <Send className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-neutral-900">
                  Send us a message
                </h3>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <div className="flex items-center mb-4">
                    <User className="w-5 h-5 text-primary-500 mr-2" />
                    <h4 className="text-lg font-medium text-neutral-900">Personal Information</h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                </div>

                {/* Contact Details */}
                <div className="space-y-4">
                  <div className="flex items-center mb-4">
                    <Phone className="w-5 h-5 text-primary-500 mr-2" />
                    <h4 className="text-lg font-medium text-neutral-900">Contact Details</h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                </div>

                {/* Project Details */}
                <div className="space-y-4">
                  <div className="flex items-center mb-4">
                    <Building className="w-5 h-5 text-primary-500 mr-2" />
                    <h4 className="text-lg font-medium text-neutral-900">Project Details</h4>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <Select {...register("service")} className="w-full">
                        <option value="">Select a Service *</option>
                        <option value="web-development">Web Development</option>
                        <option value="app-development">Mobile App Development</option>
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-4">
                  <div className="flex items-center mb-4">
                    <MessageSquare className="w-5 h-5 text-primary-500 mr-2" />
                    <h4 className="text-lg font-medium text-neutral-900">Tell us about your project</h4>
                  </div>

                  <Textarea
                    {...register("message")}
                    placeholder="Describe your project requirements, goals, target audience, and any specific features you need. The more details you provide, the better we can help you! *"
                    rows={6}
                    className="w-full resize-none"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  size="lg"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </div>
                  )}
                </Button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center text-green-600 bg-green-50 p-4 rounded-lg border border-green-200"
                  >
                    <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Message sent successfully!</p>
                      <p className="text-sm">We&apos;ll get back to you within 24 hours.</p>
                    </div>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center text-red-600 bg-red-50 p-4 rounded-lg border border-red-200"
                  >
                    <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Something went wrong</p>
                      <p className="text-sm">Please try again or contact us directly.</p>
                    </div>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-neutral-200">
              <h3 className="text-xl font-semibold text-neutral-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center mr-3">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                Get in Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Email</h4>
                    <p className="text-neutral-600">hello@clikxo.com</p>
                    <p className="text-sm text-neutral-500">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Phone</h4>
                    <p className="text-neutral-600">+971 44318653</p>
                    <p className="text-sm text-neutral-500">Mon-Fri, 9AM-6PM GST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Location</h4>
                    <p className="text-neutral-600">Dubai, UAE</p>
                    <p className="text-sm text-neutral-500">Serving globally</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Business Hours</h4>
                    <p className="text-neutral-600">Monday - Friday</p>
                    <p className="text-sm text-neutral-500">09:00 AM - 06:00 PM GST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-6 text-white">
              <h4 className="text-lg font-semibold mb-4">Why Choose ClikXo?</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-primary-100">Projects Completed</span>
                  <span className="font-bold text-xl">500+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary-100">Client Satisfaction</span>
                  <span className="font-bold text-xl">98%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary-100">Years Experience</span>
                  <span className="font-bold text-xl">5+</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
