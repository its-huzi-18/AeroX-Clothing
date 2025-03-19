import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Define the shape of the request body
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// POST handler for form submission
export async function POST(request: Request) {
  try {
    const { name, email, message }: ContactFormData = await request.json();

    // Validate the data
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com', // SMTP server
      port: 465, // SMTP port for SSL
      secure: true, // Use SSL
     auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Define the email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `AeroX Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send the email and ensure successful delivery
    try {
      await transporter.sendMail(mailOptions);
      return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
    } catch (emailError) {
      console.error('Email sending error:', emailError);
      return NextResponse.json({ message: 'Failed to send email.' }, { status: 500 });
    }
  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json({ message: 'Internal server error.' }, { status: 500 });
  }
}


