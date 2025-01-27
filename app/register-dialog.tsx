"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { submitRegistration } from "./actions"
import { useFormState } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, ChevronRight, CheckCircle2 } from "lucide-react"
import { z } from "zod"

const initialState = {
  message: "",
  success: false,
}

// Update validation schema
const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number").max(15, "Phone number is too long"),
})

export function RegisterDialog({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [state, formAction] = useFormState(submitRegistration, initialState)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  useEffect(() => {
    if (state.success) {
      setTimeout(() => {
        setOpen(false)
      }, 3000)
    }
  }, [state.success])

  const handleSubmit = (formData: FormData) => {
    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
    }

    try {
      formSchema.parse(data)
      setErrors({})
      formAction(formData)
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors: { [key: string]: string } = {}
        error.errors.forEach((err) => {
          if (err.path[0]) {
            formattedErrors[err.path[0].toString()] = err.message
          }
        })
        setErrors(formattedErrors)
      }
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div onClick={() => setOpen(true)}>{children}</div>
      <AnimatePresence>
        {open && (
          <DialogContent className="sm:max-w-md bg-white text-[rgb(66,100,160)] shadow-2xl border-0 rounded-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="px-2"
            >
              {state.success ? (
                <motion.div 
                  className="py-12 flex flex-col items-center justify-center space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.5 }}
                  >
                    <CheckCircle2 className="w-16 h-16 text-green-500" />
                  </motion.div>
                  <h2 className="text-2xl font-bold text-center text-[rgb(66,100,160)]">
                    Thank You!
                  </h2>
                  <p className="text-center text-[rgb(66,100,160)]/70">
                    Check your email for further instructions.
                  </p>
                </motion.div>
              ) : (
                <>
                  <DialogHeader className="mb-8">
                    <DialogTitle className="text-2xl font-bold text-center">
                      <span className="text-3xl bg-gradient-to-r from-[rgb(66,100,160)] to-sky-600 bg-clip-text text-transparent">
                        Register for the Masterclass
                      </span>
                    </DialogTitle>
                  </DialogHeader>

                  <form action={handleSubmit} className="space-y-7">
                    <div className="space-y-5">
                      {/* First Name Input */}
                      <div className="relative">
                        <Label htmlFor="firstName" className="text-[rgb(66,100,160)]/80 text-base absolute -top-2.5 left-4 bg-white px-2">
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          required
                          className={`h-14 px-5 rounded-xl bg-white border-2 ${
                            errors.firstName ? 'border-red-300' : 'border-sky-100'
                          } text-[rgb(66,100,160)] placeholder-[rgb(66,100,160)]/40 text-lg focus:ring-2 focus:ring-sky-200 focus:border-sky-400 transition-all duration-300`}
                          placeholder="Enter your first name"
                        />
                        {errors.firstName && (
                          <p className="text-red-500 text-sm mt-1 ml-2">{errors.firstName}</p>
                        )}
                      </div>

                      {/* Last Name Input */}
                      <div className="relative">
                        <Label htmlFor="lastName" className="text-[rgb(66,100,160)]/80 text-base absolute -top-2.5 left-4 bg-white px-2">
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          required
                          className={`h-14 px-5 rounded-xl bg-white border-2 ${
                            errors.lastName ? 'border-red-300' : 'border-sky-100'
                          } text-[rgb(66,100,160)] placeholder-[rgb(66,100,160)]/40 text-lg focus:ring-2 focus:ring-sky-200 focus:border-sky-400 transition-all duration-300`}
                          placeholder="Enter your last name"
                        />
                        {errors.lastName && (
                          <p className="text-red-500 text-sm mt-1 ml-2">{errors.lastName}</p>
                        )}
                      </div>

                      {/* Email Input */}
                      <div className="relative">
                        <Label htmlFor="email" className="text-[rgb(66,100,160)]/80 text-base absolute -top-2.5 left-4 bg-white px-2">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className={`h-14 px-5 rounded-xl bg-white border-2 ${
                            errors.email ? 'border-red-300' : 'border-sky-100'
                          } text-[rgb(66,100,160)] placeholder-[rgb(66,100,160)]/40 text-lg focus:ring-2 focus:ring-sky-200 focus:border-sky-400 transition-all duration-300`}
                          placeholder="Enter your email"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1 ml-2">{errors.email}</p>
                        )}
                      </div>

                      {/* Phone Input */}
                      <div className="relative">
                        <Label htmlFor="phone" className="text-[rgb(66,100,160)]/80 text-base absolute -top-2.5 left-4 bg-white px-2">
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          className={`h-14 px-5 rounded-xl bg-white border-2 ${
                            errors.phone ? 'border-red-300' : 'border-sky-100'
                          } text-[rgb(66,100,160)] placeholder-[rgb(66,100,160)]/40 text-lg focus:ring-2 focus:ring-sky-200 focus:border-sky-400 transition-all duration-300`}
                          placeholder="Enter your phone number"
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1 ml-2">{errors.phone}</p>
                        )}
                      </div>
                    </div>

                    <AnimatePresence>
                      {state?.message && !state.success && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="text-red-500 text-center font-medium"
                        >
                          {state.message}
                        </motion.p>
                      )}
                    </AnimatePresence>

                    <div className="space-y-4">
                      <Button
                        type="submit"
                        className="w-full bg-sky-500 hover:bg-sky-600 transition-all h-20 rounded-xl shadow-xl hover:shadow-2xl scale-100 hover:scale-105 transform duration-300 max-w-[340px] mx-auto"
                      >
                        <span className="text-white font-bold text-2xl flex items-center justify-center gap-4">
                          Watch Webinar NOW! <ChevronRight className="h-8 w-8 stroke-[3]" />
                        </span>
                      </Button>

                      <p className="text-center text-[rgb(66,100,160)]/60 text-sm px-6">
                        * Required fields
                      </p>
                    </div>
                  </form>
                </>
              )}
            </motion.div>
          </DialogContent>
        )}
      </AnimatePresence>
    </Dialog>
  )
}

