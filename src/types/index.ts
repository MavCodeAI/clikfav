// Contact form types
export interface ContactFormData {
  companyName: string
  email: string
}

// Service types
export interface Service {
  code: string
  name: string
  description: string
  icon: string
}

// Testimonial types
export interface Testimonial {
  name: string
  company: string
  quote: string
  avatar: string
}

// FAQ types
export interface FAQ {
  question: string
  answer: string
}

// Navigation types
export interface NavItem {
  label: string
  href: string
  dropdown?: NavItem[]
}

// Industry types
export interface Industry {
  name: string
  description: string
  icon?: string
}
