import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { Trust } from "@/components/sections/trust"
import { About } from "@/components/sections/about"
import { Services } from "@/components/sections/services"
import { Industries } from "@/components/sections/industries"
import { Testimonials } from "@/components/sections/testimonials"
import { FAQ } from "@/components/sections/faq"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Trust />
        <About />
        <Services />
        <Industries />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
