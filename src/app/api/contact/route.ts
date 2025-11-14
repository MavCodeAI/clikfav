import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate the request body
    const { 
      fullName, 
      companyName, 
      email, 
      phone, 
      service, 
      budget, 
      timeline, 
      message 
    } = body

    if (!fullName || !companyName || !email || !phone || !service || !budget || !timeline || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Here you would typically:
    // 1. Validate the email format
    // 2. Send an email using a service like SendGrid, Mailgun, etc.
    // 3. Save to a database
    // 4. Send a confirmation email

    // For now, we'll just simulate success
    console.log('Contact form submission:', { 
      fullName, 
      companyName, 
      email, 
      phone, 
      service, 
      budget, 
      timeline, 
      message 
    })

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully'
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
