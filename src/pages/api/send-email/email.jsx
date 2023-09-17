import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export default async function POST(request, reponse) {
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
        name: "Budani Real Estate",
        address: email,
      },
      to: process.env.EMAIL_USER,
      subject: subject,
      html: `
      <h5>First Name: ${firstName}</h5>
      <h5>Last Name: ${lastName}</h5>
      <h5>Email: ${email}</h5>
      <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOption);

    reponse.send("success");
  } catch (error) {
    reponse.send("error");
  }
}
// Note: instead of using NextResponse.json(), it is better to use reponse.status(200).send(). It fixed my internal server error 500
