"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { RegisterDialog } from "./register-dialog"
import { motion } from "framer-motion"
import { Sparkles, ChevronRight, Twitter, Linkedin, Instagram, Facebook } from "lucide-react"
import { Stats } from "./stats"
import { LogoSlider } from "./components/logo-slider"

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[rgb(66,100,160)] via-[rgb(46,80,140)] to-[rgb(26,60,120)]">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJNLTEwIDMwaDYwdjJoLTYweiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] opacity-10" />
      </div>

      {/* Floating Logo Header */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="container mx-auto">
          <div className="relative -top-1">
            <div className="absolute left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md rounded-b-2xl px-8 py-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Asset%202-3kzwj4pD7JS5MQJKRnmepeq65FdYIM.png"
                width={200}
                height={67}
                alt="iSkala Logo"
                className="h-14 w-auto"
                priority
              />
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="relative">
        {/* Hero Section */}
        <main className="container mx-auto px-4 sm:px-8 lg:px-16 pt-28 pb-16 overflow-x-hidden">
          <div className="grid gap-4 lg:gap-12 lg:grid-cols-12 items-center">
            {/* Text Content */}
            <motion.div
              className="lg:col-span-6 space-y-6 sm:space-y-8 text-center lg:text-left px-0 sm:px-4 lg:px-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Main Heading */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.2]">
                Master the Art of{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-sky-400">B2B Lead Generation</span>
                  <span className="absolute -inset-1 bg-sky-400/20 blur-2xl" />
                </span>
              </h1>

              {/* Subheading */}
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white/90 leading-snug">
                Build Your B2B Lead Pipeline Without Overspending on Paid Ads
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed max-w-xl mx-auto lg:mx-0 px-2 sm:px-0">
                Join Ehab Darwish, Founder of iSkala, as he reveals the exact system that has helped B2B businesses consistently generate qualified leads. Learn proven frameworks and strategies to scale your outreach while reducing costs and avoiding common mistakes.
              </p>

              {/* Hero Button */}
              <div className="flex justify-center lg:justify-start px-2 sm:px-0">
                <RegisterDialog>
                  <Button size="lg" className="w-full sm:w-auto bg-sky-500 hover:bg-sky-600 transition-colors px-8 sm:px-20 py-6 sm:py-8 rounded-xl scale-105 hover:scale-110 transform duration-300">
                    <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-white flex items-center justify-center gap-2 sm:gap-4">
                      Watch Webinar NOW! <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 stroke-[3]" />
                    </span>
                  </Button>
                </RegisterDialog>
              </div>
            </motion.div>

            {/* Image Section */}
            <motion.div
              className="lg:col-span-6 relative px-0 sm:px-4 lg:px-8 mt-8 lg:mt-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative max-w-[95%] lg:max-w-[100%] mx-auto">
                <div className="relative aspect-[4/5]">
                  <div className="absolute -inset-4 bg-sky-400/10 rounded-[2rem] blur-3xl" />
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Monsieur%20Ehab%20images-uu7ps1L0UxO5T2xeHs58s2WL6v9ggV.png"
                    fill
                    alt="Ehab Darwish"
                    className="object-cover object-top rounded-3xl relative z-10"
                    priority
                    sizes="(max-width: 768px) 90vw, 50vw"
                  />
                  
                  {/* Stats Overlay at the bottom of image - Softer edges */}
                  <div className="absolute bottom-0 left-4 right-4 z-20 rounded-2xl bg-gradient-to-t from-[rgba(26,60,120,0.95)] via-[rgba(26,60,120,0.5)] to-transparent pt-24 pb-8">
                    <div className="grid grid-cols-3 gap-4 px-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">500+</div>
                        <div className="text-sm text-white/70">Successful Clients</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">$10M+</div>
                        <div className="text-sm text-white/70">Revenue Generated</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">85%</div>
                        <div className="text-sm text-white/70">Success Rate</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </main>

        {/* Logo Slider Section */}
        <div className="w-full overflow-x-hidden">
          <LogoSlider />
        </div>

        {/* What You'll Learn Section */}
        <section className="bg-white pt-0 pb-24 relative overflow-x-hidden">
          <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
            <motion.div
              className="max-w-4xl mx-auto bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] p-8 sm:p-12 lg:p-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="space-y-16">
                <h3 className="text-3xl md:text-4xl font-bold text-center text-[rgb(66,100,160)]">
                  HERE'S WHAT YOU'LL LEARN
                </h3>
                
                <div className="space-y-12">
                  <LearningPoint
                    number="01"
                    title="The Proven Lead Generation Framework"
                    description="Discover a system that consistently delivers qualified B2B leads without relying on ads or referrals"
                    light
                  />
                  <LearningPoint
                    number="02"
                    title="Automated Outreach Strategies"
                    description="Learn how to automate your outreach process and increase response rates with a multi-domain approach"
                    light
                  />
                  <LearningPoint
                    number="03"
                    title="Tools and Messaging Techniques"
                    description="Master tools for scaling outreach and frameworks for writing messages that convert prospects into leads"
                    light
                  />
                </div>

                {/* Button with more space */}
                <div className="flex justify-center pt-8">
                  <RegisterDialog>
                    <Button size="lg" className="w-[90%] sm:w-[320px] bg-sky-500 hover:bg-sky-600 transition-colors px-6 sm:px-12 py-6 sm:py-7 rounded-lg shadow-lg hover:shadow-xl scale-100 hover:scale-105 transform duration-300">
                      <span className="text-white font-bold text-xl sm:text-2xl flex items-center justify-center gap-2 sm:gap-4">
                        Watch Webinar NOW! <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8 stroke-[3]" />
                      </span>
                    </Button>
                  </RegisterDialog>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-[rgb(26,60,120)] py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center space-y-8">
              {/* Logo */}
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Asset%202-3kzwj4pD7JS5MQJKRnmepeq65FdYIM.png"
                width={150}
                height={50}
                alt="iSkala Logo"
                className="h-10 w-auto"
              />

              {/* Social Media Icons */}
              <div className="flex items-center gap-6">
               
                <a
                  href="https://linkedin.com/company/iskala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                
               
              </div>

              {/* Copyright */}
              <div className="text-white/60 text-sm">
                © {new Date().getFullYear()} iSkala. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

function LearningPoint({ 
  number, 
  title, 
  description, 
  light 
}: { 
  number: string; 
  title: string; 
  description: string;
  light?: boolean;
}) {
  return (
    <motion.div
      className="flex gap-6 items-start group"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-sky-400 to-sky-500 flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform duration-300 ${
        light ? 'text-white' : 'text-[rgb(66,100,160)]'
      }`}>
        {number}
      </div>
      <div className="space-y-2">
        <h4 className={`text-xl font-bold ${
          light ? 'text-[rgb(66,100,160)]' : 'text-white'
        }`}>
          {title}
        </h4>
        <p className={light ? 'text-gray-600' : 'text-white/70'}>
          {description}
        </p>
      </div>
    </motion.div>
  )
}

