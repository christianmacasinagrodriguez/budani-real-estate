import Mailgen from "mailgen";

import React from "react";

const subscribeEmail = () => {
  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      // Appears in header & footer of e-mails
      name: "Budani Real Estate",
      link: "https://budani-real-estate.vercel.app",
      // Optional product logo
      logo: "https://firebasestorage.googleapis.com/v0/b/chriscosmos-videostream.appspot.com/o/budani-logo.png?alt=media&token=45b81d80-e0f3-4166-96e2-9012766ef591",
      //   logoHeight: "30px",
    },
  });

  const email = {
    body: {
      name: "Valued Customer",
      intro: `Thanks for subscribing to Budani Real Estate updates! We're very excited to have you updated.`,
      action: {
        instructions: "To learn more about us, please click here:",
        button: {
          color: "#6663E9", // Optional action button color
          text: "Visit our website",
          link: "https://budani-real-estate.vercel.app",
        },
      },
      outro:
        "Need help, or have questions? Please utilize the contact form on our website, we'd love to help.",
    },
  };

  // Generate an HTML email with the provided contents
  const emailBody = mailGenerator.generate(email);

  // Generate the plaintext version of the e-mail (for clients that do not support HTML)
  //   const emailText = mailGenerator.generatePlaintext(email);
  return emailBody;
};

export default subscribeEmail;
