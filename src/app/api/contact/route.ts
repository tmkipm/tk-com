import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Instantiate Resend client with API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);
const receiverEmail = process.env.CONTACT_FORM_RECEIVER_EMAIL;

export async function POST(request: Request) {
  // Check if required environment variables are set
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY environment variable is not set.');
    return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 });
  }
  if (!receiverEmail) {
    console.error('CONTACT_FORM_RECEIVER_EMAIL environment variable is not set.');
    return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 });
  }

  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    console.log('Contact form submission received:', { name, email });

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>', // Use default Resend domain or your verified domain
      to: [receiverEmail], // Your receiving email address from env var
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email, // Corrected property name
      html: `
        <p>You received a new message from your portfolio contact form:</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p> // Replace newlines with <br> for HTML email
      `,
      // text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}` // Optional plain text version
    });

    // Check for Resend API errors
    if (error) {
      console.error('Error sending email via Resend:', error);
      return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
    }

    console.log('Email sent successfully:', data);

    // Send success response to the frontend
    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });

  } catch (error) {
    // Catch other potential errors (e.g., JSON parsing)
    console.error('Error processing contact form:', error);
    if (error instanceof SyntaxError) {
        return NextResponse.json({ error: 'Invalid request format.' }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
} 