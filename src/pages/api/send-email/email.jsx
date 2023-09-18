import nodemailer from "nodemailer";
import contactEmail from "@/email-templates/contactEmail";
import subscribeEmail from "@/email-templates/subscribeEmail";

export default async function POST(request, reponse) {
  try {
    const { firstName, lastName, email, message, subject, type } =
      await request.body;

    let config = {
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    };
    const transporter = nodemailer.createTransport(config);

    const contactMailOption = {
      name: "Budani Real Estate",

      from: {
        name: "Budani Real Estate",
        address: email,
      },
      to: process.env.EMAIL_USER,
      subject: subject,
      html: contactEmail(firstName, lastName, email, subject, message),
    };

    const subscribeMailOption = {
      name: "Budani Real Estate",

      from: {
        name: "Budani Real Estate",
        address: process.env.EMAIL_USER,
      },
      to: email,
      subject: "Budani Real Estate Subscription",
      html: subscribeEmail(),
    };

    switch (type) {
      case "contact":
        await transporter.sendMail(contactMailOption);

        break;
      case "subscribe":
        await transporter.sendMail(subscribeMailOption);
        break;

      default:
        break;
    }

    reponse.send("success");
  } catch (error) {
    reponse.send("error");
  }
}
// Note: instead of using NextResponse.json(), it is better to use reponse.status(200).send(). It fixed my internal server error 500
