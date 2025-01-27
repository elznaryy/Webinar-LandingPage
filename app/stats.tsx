"use client"

import { motion } from "framer-motion"

export function Stats() {
  return (
    <section className="py-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard number="500+" label="Successful Clients" delay={0.2} />
          <StatCard number="$10M+" label="Revenue Generated" delay={0.4} />
          <StatCard number="85%" label="Success Rate" delay={0.6} />
        </div>
      </div>
    </section>
  )
}

function StatCard({ number, label, delay }: { number: string; label: string; delay: number }) {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
      <div className="relative bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
        <div className="text-4xl font-bold text-white mb-2">{number}</div>
        <div className="text-white/70">{label}</div>
      </div>
    </motion.div>
  )
}

