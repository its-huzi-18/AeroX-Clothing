import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Your email credentials (Use environment variables in production)
const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com', // SMTP server
  port: 465, // SMTP port for SSL
  secure: true, // Use SSL 
 auth: {
    user: process.env.EMAIL_USER, // Your email (e.g., "your-email@gmail.com")
    pass: process.env.EMAIL_PASSWORD, // Your email app password
  },
});

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Email options
    const mailOptions = {
        from: `"Aerox Subscriptions" <${process.env.EMAIL_USER}>`,  
        to: process.env.EMAIL_USER,  
        subject: "New Subscription – Aerox",
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; text-align: center;">
            <h2 style="color: #000;">Exciting News!</h2>
            <p style="font-size: 16px; color: #333;">
              A new user has subscribed to <strong>Aerox</strong>.
            </p>
            <p style="font-size: 18px; font-weight: bold; color: #000;">
              Subscriber Email: <a href="mailto:${email}" style="color: #007bff;">${email}</a>
            </p>
            <p style="color: #666; font-size: 14px;">
              Stay connected and continue delivering the best of Aerox fashion.
            </p>
            <hr style="margin: 20px 0; border: 1px solid #ddd;">
            <p style="font-size: 12px; color: #888;">&copy; ${new Date().getFullYear()} Aerox. All rights reserved.</p>
          </div>
        `,
        replyTo: email, 
      };
      

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Subscription successful" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
