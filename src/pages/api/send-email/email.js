'use client'
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export default async function POST(request) {
  try {
    const { firstName, lastName, email, message, subject } = await request.body;
    

    let config = {
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    };
    const transporter = nodemailer.createTransport(config);

    const mailOption = {
      name: "Budani Real Estate",
      
      from: {
        name: 'Budani Real Estate',
        address: email
      },
      to: process.env.EMAIL_USER,
      subject: subject,
      html: `
      <h5>First Name: ${firstName}</h5>
      <h5>Last Name: ${lastName}</h5>
      <h5>Email: ${email}</h5>
      <p>${message}</p>
      `
    }

    await transporter.sendMail(mailOption);

    return NextResponse.json({ message: "Email sent!", status: 200 });

  } catch (error) {
    return NextResponse.json( {message: 'Failed to send email!', status: 500})
  }
}
