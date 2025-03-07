// src/app/api/order/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface OrderDetails {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  product: string;
  selectedSize: string | null;
  quantity: number;
  paymentMethod: string;
  totalPrice: number;
  image: string;
  color: string; // Added color field
}

export async function POST(request: Request) {
  try {
    const {
      name,
      email,
      phone,
      address,
      city,
      product,
      selectedSize,
      quantity,
      paymentMethod,
      totalPrice,
      image,
      color, // Destructure the color field
    } = (await request.json()) as OrderDetails;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const adminEmail = process.env.EMAIL_USER;

    // Email content for the user
    const userMailOptions = {
        from: `Aerox <${process.env.EMAIL_USER}>`,
        to: email,
        subject: 'Order Confirmation',
        html: `
           <img src="https://aerox-clothing.vercel.app/Images/logo.png" alt="Aerox Logo" style="width: 150px;">
          <h1>Thank you for your order, ${name}!</h1>
          <p>Your order has been placed successfully.</p>
          <h2>Order Details</h2>
          <div style="display: flex; align-items: center; gap: 16px;">
            <img src="${image}" alt="${product}" style="width: 150px; height: 150px; object-fit: contain;">
            <div>
              <p><strong>Product:</strong> ${product}</p>
              <p><strong>Color:</strong> ${color}</p>
              <p><strong>Size:</strong> ${selectedSize}</p>
              <p><strong>Quantity:</strong> ${quantity}</p>
              <p><strong>Total Price:</strong> Rs ${totalPrice}</p>
              <p><strong>Payment Method:</strong> ${paymentMethod}</p>
            </div>
          </div>
          <h2>Shipping Details</h2>
          <p><strong>Address:</strong> ${address}</p>
          <p><strong>City:</strong> ${city}</p>
          <p><strong>Phone:</strong> ${phone}</p>
        `,
      };
  
    // Email content for the admin
    const adminMailOptions = {
        from: `Aerox <${process.env.EMAIL_USER}>`,
        to: adminEmail,
        subject: 'New Order Received',
        html: `
          <img src="https://aerox-clothing.vercel.app/Images/logo.png" alt="Aerox Logo" style="width: 150px;">
          <h1>New Order Received</h1>
          <p>You have received a new order from ${name}.</p>
          <h2>Order Details</h2>
          <div style="display: flex; align-items: center; gap: 24px;">
            <img src="${image}" alt="${product}" style="width: 150px; height: 150px; object-fit: contain; border-radius: 8px;">
            <div>
              <p><strong>Product:</strong> ${product}</p>
              <p><strong>Color:</strong> ${color}</p>
              <p><strong>Size:</strong> ${selectedSize}</p>
              <p><strong>Quantity:</strong> ${quantity}</p>
              <p><strong>Total Price:</strong> Rs ${totalPrice}</p>
              <p><strong>Payment Method:</strong> ${paymentMethod}</p>
            </div>
          </div>
          <h2>Shipping Details</h2>
          <p><strong>Address:</strong> ${address}</p>
          <p><strong>City:</strong> ${city}</p>
          <p><strong>Phone:</strong> ${phone}</p>
        `,
      };

    await transporter.sendMail(userMailOptions);
    await transporter.sendMail(adminMailOptions);

    return NextResponse.json(
      { message: 'Emails sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Failed to send email' },
      { status: 500 }
    );
  }
}

// Optional: Add other HTTP methods if needed
export async function GET() {
  return NextResponse.json(
    { message: 'Method not allowed' },
    { status: 405 }
  );
}

export async function PUT() {
  return NextResponse.json(
    { message: 'Method not allowed' },
    { status: 405 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { message: 'Method not allowed' },
    { status: 405 }
  );
}