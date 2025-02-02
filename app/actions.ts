"use server"

// Define the FormState type inline since we removed types.ts
interface FormState {
  message: string;
  success: boolean;
}

// Remove the import and update the function signature
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

    // Send to webhook
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

