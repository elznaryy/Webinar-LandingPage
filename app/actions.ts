"use server"

interface FormState {
  message: string;
  success: boolean;
}

export async function submitRegistration(prevState: FormState, formData: FormData): Promise<FormState> {
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

    // Send to new Zoho webhook
    const response = await fetch("https://flow.zoho.com/849281392/flow/webhook/incoming?zapikey=1001.99187d2b111cf0eb8628712cc2526696.4be8142b33a40d4db127b8754e4f5c12&isdebug=false", {
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

    return {
      message: "Registration successful! Check your email for details.",
      success: true,
    }

  } catch (error) {
    console.error("Registration error:", error)
    return {
      message: "Something went wrong. Please try again.",
      success: false
    }
  }
}

