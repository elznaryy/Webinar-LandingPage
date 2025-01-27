"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function LogoSlider() {
  // All logos in one row
  const logos = [3, 4, 5, 7, 8, 9, 10, 11, 12, 13]

  return (
    <div className="bg-white py-0 overflow-hidden">
      <div className="container mx-auto">
        <div className="relative max-w-[95rem] mx-auto">
          {/* Single row of logos */}
          <motion.div
            className="flex gap-0"
            animate={{
              x: [0, -1600]
            }}
            transition={{
              x: {
                duration: 40,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
              },
            }}
          >
            <div className="flex gap-0 min-w-max">
              {logos.map((i) => (
                <div key={i} className="w-[220px] h-[100px] bg-gray-50/50 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300">
                  <Image
                    src={`/Perfect-Webinar-Presentation (${i}).png`}
                    alt={`Client Logo ${i}`}
                    width={180}
                    height={90}
                    className="w-auto h-[80px] object-contain opacity-75 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex gap-0 min-w-max">
              {logos.map((i) => (
                <div key={`dup-${i}`} className="w-[220px] h-[100px] bg-gray-50/50 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300">
                  <Image
                    src={`/Perfect-Webinar-Presentation (${i}).png`}
                    alt={`Client Logo ${i}`}
                    width={180}
                    height={90}
                    className="w-auto h-[80px] object-contain opacity-75 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 