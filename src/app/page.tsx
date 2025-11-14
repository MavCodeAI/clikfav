import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { CoreValues } from "@/components/sections/core-values"
import { TrustedBrands } from "@/components/sections/trusted-brands"
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
        <TrustedBrands />
        <CoreValues />
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
