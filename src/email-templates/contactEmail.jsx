import Mailgen from "mailgen";

const contactEmail = (firstName, lastName, userEmail, subject, message) => {
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

  var email = {
    body: {
      title: "Email from Budani Real Estate",
      table: [
        {
          // Optionally, add a title to each table.
          data: [
            {
              Category: "Name:",
              Details: `${firstName} ${lastName}`,
            },
            {
              Category: "Email Address:",
              Details: userEmail,
            },
            {
              Category: "Subject Line:",
              Details: subject,
            },
            {
              Category: "Message:",
              Details: "",
            },
          ],
          columns: {
            // Optionally, customize the column widths
            customWidth: {
              item: "20%",
              Details: "50%",
            },
            // Optionally, change column text alignment
            // customAlignment: {
            //   price: "right",
            // },
          },
        },
      ],

      outro: message,
      greeting: false,
      signature: false,
    },
  };

  // Generate an HTML email with the provided contents
  const emailBody = mailGenerator.generate(email);

  // Generate the plaintext version of the e-mail (for clients that do not support HTML)
  const emailText = mailGenerator.generatePlaintext(email);
  return emailBody;
};

export default contactEmail;
