import { NextRequest, NextResponse } from 'next/server'

interface ContactFormData {
  name: string
  designation?: string
  clinicName?: string
  city?: string
  phone: string
  email: string
  practiceSize?: string
  message?: string
  consent?: boolean
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    const { name, phone, email } = body
    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: 'Name, phone, and email are required.' },
        { status: 400 }
      )
    }

    // TODO: Wire to email/CRM (e.g. Resend, HubSpot, Salesforce)
    console.log('[Contact form submission]', {
      name,
      phone,
      email,
      designation: body.designation,
      clinicName: body.clinicName,
      city: body.city,
      practiceSize: body.practiceSize,
      message: body.message,
      consent: body.consent,
    })

    return NextResponse.json({
      success: true,
      message: "We'll be in touch within 1 working day.",
    })
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
