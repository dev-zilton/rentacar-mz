import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { AboutUs } from '@/components/AboutUs'
import { Services } from '@/components/Services'
import { Fleet } from '@/components/Fleet'
import { VehicleTypes } from '@/components/VehicleTypes'
import { Pricing } from '@/components/Pricing'
import { ContactForm } from '@/components/ContactForm'
import { FAQ } from '@/components/FAQ'
import { Footer } from '@/components/Footer'

/**
 * Elite Car Rentals Landing Page
 * 
 * Optimized for Core Web Vitals:
 * - LCP (Largest Contentful Paint): Hero with priority image
 * - FID/INP (Interaction to Next Paint): Minimal, debounced JS
 * - CLS (Cumulative Layout Shift): Fixed aspect ratios, no layout shifts
 * 
 * Page structure optimizes for fast rendering:
 * 1. Navigation (fixed, minimal)
 * 2. Hero (above the fold, priority image)
 * 3. Fleet (lazy loaded images)
 * 4. Pricing (static content)
 * 5. Contact Form (interactive, optimized)
 * 6. FAQ (lazy loaded)
 * 7. Footer (minimal content)
 */
export default function Page() {
  return (
    <>
      <Navigation />
      <Hero />
      <AboutUs />
      <Services />
      <Fleet />
      <VehicleTypes />
      <Pricing />
      <ContactForm />
      <FAQ />
      <Footer />
    </>
  )
}
