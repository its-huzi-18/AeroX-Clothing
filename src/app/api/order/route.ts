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
  subtotal: number; // Add subtotal
  shippingFee: number; // Add shipping fee
  totalPrice: number; // Add total price
  image: string;
  color: string;
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
      subtotal,
      shippingFee,
      totalPrice,
      image,
      color,
    } = (await request.json()) as OrderDetails;

    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com', // SMTP server
      port: 465, // SMTP port for SSL
      secure: true, // Use SSL
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
          </div>
        </div>
        <h2>Shipping Details</h2>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h2>Payment Method</h2>
        <p><strong>${paymentMethod}</strong></p>
          <h2>Price Breakdown</h2>
          <p><strong>Subtotal:</strong> Rs.${subtotal}.00</p>
        <p><strong>Shipping Fee:</strong> Rs.${shippingFee}.00</p>
        <h3 style="font-size: 18px; font-weight: bold; color: #000;">
          <strong>Total Price:</strong> Rs.${totalPrice}.00
        </h3>
      `,
    };

    // Email content for the admin
    const adminMailOptions = {
      from: `Aerox <${process.env.EMAIL_USER}>`,
      to: adminEmail,
      subject: 'New Order Received',
      html: `
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
          </div>
        </div>
        <h2>Shipping Details</h2>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h2>Payment Method</h2>
        <p><strong>${paymentMethod}</strong></p>
          <h2>Price Breakdown</h2>
        <p><strong>Subtotal:</strong> Rs.${subtotal}.00</p>
        <p><strong>Shipping Fee:</strong> Rs.${shippingFee}.00</p>
        <h3 style="font-size: 18px; font-weight: bold; color: #000;">
          <strong>Total Price:</strong> Rs.${totalPrice}.00
        </h3>
      `,
    };

    await transporter.sendMail(userMailOptions);
    await transporter.sendMail(adminMailOptions);

    return NextResponse.json(
      { message: 'Emails sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to send email' },
      { status: 500 }
    );
  }
}