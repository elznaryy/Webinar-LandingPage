"use server"

export async function submitRegistration(prevState: any, formData: FormData) {
  try {
    // Format the data
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      timestamp: new Date().toISOString(),
      source: "Masterclass Landing Page"
    }

    // Send to webhook - Replace this URL with your actual webhook URL
    const response = await fetch("https://hook.eu2.make.com/od8xr168912isc872vnzp132nkjp337g", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => null)
      console.error("Webhook error:", errorData)
      throw new Error("Failed to submit registration")
    }

    // Return success message
    return {
      message: "Registration successful! Check your email for details.",
      success: true,
    }

  } catch (error) {
    console.error("Registration error:", error)
    return {
      message: "Something went wrong. Please try again.",
      success: false,
    }
  }
}

