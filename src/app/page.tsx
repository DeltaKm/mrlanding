import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { WhyUs } from "@/components/sections/why-us"
import { Gallery } from "@/components/sections/gallery"
import { Testimonials } from "@/components/sections/testimonials"
import { CTA } from "@/components/sections/cta"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Gallery />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
    </div>
  )
}
