import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface OrderDetails {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  cartItems: {
    title: string;
    selectedSize: string | null;
    quantity: number;
    price: number;
    image: string;
    color: string;
  }[];
  paymentMethod: string;
  subtotal: number;
  shippingFee: number;
  totalPrice: number;
}

export async function POST(request: Request) {
  try {
    const {
      name,
      email,
      phone,
      address,
      city,
      cartItems,
      paymentMethod,
      subtotal,
      shippingFee,
      totalPrice,
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

    const adminEmail = process.env.ADMIN_EMAIL || process.env.EMAIL_USER;

    // Generate product details HTML for the email
    const productDetailsHTML = cartItems
      .map(
        (item) => `
        <div style="border: 1px solid #ddd; padding: 10px; margin-bottom: 10px; display: flex; align-items: center; gap: 16px;">
          <img src="${item.image}" alt="${item.title}" style="width: 100px; height: 100px; object-fit: contain;">
          <div>
            <p><strong>Product:</strong> ${item.title}</p>
            <p><strong>Color:</strong> ${item.color}</p>
            <p><strong>Size:</strong> ${item.selectedSize}</p>
            <p><strong>Quantity:</strong> ${item.quantity}</p>
            <p><strong>Price:</strong> Rs ${item.price}</p>
          </div>
        </div>
      `
      )
      .join('');

    // Email content for the user
    const userMailOptions = {
      from: `Aerox <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Order Confirmation',
      html: `
        <h1>Thank you for your order, ${name}!</h1>
        <p>Your order has been placed successfully.</p>
        <h2>Order Details</h2>
        ${productDetailsHTML}
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
        ${productDetailsHTML}
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

    // Send emails
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