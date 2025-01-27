"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

export function Testimonials() {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">What Our Clients Say</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            quote="The B2B lead generation strategies we learned from Ehab transformed our business. Our conversion rates increased by 300%!"
            author="Ahmed Hassan"
            company="Tech Solutions LLC"
            delay={0.2}
          />
          <TestimonialCard
            quote="This masterclass provided exactly what we needed to scale our outreach. The ROI has been incredible."
            author="Sarah Mohammad"
            company="Growth Dynamics"
            delay={0.4}
          />
          <TestimonialCard
            quote="The framework is brilliant in its simplicity. We implemented it immediately and saw results within weeks."
            author="Karim Nour"
            company="Digital Ventures"
            delay={0.6}
          />
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({
  quote,
  author,
  company,
  delay,
}: { quote: string; author: string; company: string; delay: number }) {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
      <div className="relative bg-white/10 backdrop-blur-sm rounded-lg p-6">
        <Quote className="h-8 w-8 text-yellow-400 mb-4" />
        <p className="text-white/90 mb-4">{quote}</p>
        <div className="text-white font-medium">{author}</div>
        <div className="text-white/60 text-sm">{company}</div>
      </div>
    </motion.div>
  )
}

