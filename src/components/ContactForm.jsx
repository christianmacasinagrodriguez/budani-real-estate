"use client";
import React, { useState } from "react";
import SuccessAlert from "./SuccessAlert";

function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [alertView, setAlertView] = useState("hidden");

  const sendMail = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/send-email/email", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
      }),
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        subject,
        message,
      }),
    });

    if (response.status === 200) {
      setAlertView("flex");
      setTimeout(() => {
        setAlertView("hidden");
      }, 3000);
      setFirstName("");
      setLastName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <>
      <SuccessAlert text="Successfully sent Email!" alertView={alertView} />
      <form
        onSubmit={sendMail}
        className="flex w-fit h-fit flex-col gap-2 shadow-[0_4px_40px_0_rgba(0,0,0,.15)] p-5 text-[#27292E]"
      >
        <fieldset className="flex flex-col md:flex-col lg:flex-row xl:flex-row gap-2 w-fit pb-4">
          <fieldset className="flex flex-col w-fit pb-2">
            <label className="font-medium">First name*</label>
            <input
              className="bg-gray-100 border border-[#dbd6ef] rounded-md p-4 font-medium hover:border-[#6663E9] focus:border-[#6663E9] focus:outline-none w-full"
              placeholder="Juan"
              type="text"
              required
              value={firstName}
              onChange={(val) => setFirstName(val.target.value)}
              title="Your First Name."
              onInvalid={(e) =>
                e.target.setCustomValidity("Please tell us your first name.")
              }
              onInput={(e) => e.target.setCustomValidity("")}
            />
          </fieldset>
          <fieldset className="flex flex-col w-fit pb-2">
            <label className="font-medium">Last name</label>
            <input
              className="bg-gray-100 border border-[#dbd6ef] rounded-md p-4 font-medium hover:border-[#6663E9] focus:border-[#6663E9] focus:outline-none w-full"
              placeholder="Dela Cruz"
              title="Your Last Name"
              type="text"
              value={lastName}
              onChange={(val) => setLastName(val.target.value)}
            />
          </fieldset>
        </fieldset>
        <label className="font-medium">Email*</label>
        <input
          className="w-full bg-gray-100 border border-[#dbd6ef] rounded-md p-4 font-medium mb-4 hover:border-[#6663E9] focus:border-[#6663E9] focus:outline-none"
          type="email"
          placeholder="youremail@gmail.com"
          required
          value={email}
          onChange={(val) => setEmail(val.target.value)}
          title="Your valid email address."
          onInvalid={(e) =>
            e.target.setCustomValidity("Please input your valid email address.")
          }
          onInput={(e) => e.target.setCustomValidity("")}
        />
        <label className="font-medium">Subject*</label>
        <input
          className="w-full bg-gray-100 border border-[#dbd6ef] rounded-md p-4 font-medium mb-4 hover:border-[#6663E9] focus:border-[#6663E9] focus:outline-none"
          placeholder="Real Estate Inquiry"
          type="text"
          required
          value={subject}
          onChange={(val) => setSubject(val.target.value)}
          onInvalid={(e) =>
            e.target.setCustomValidity(
              "Please tell us the main purpose of your contact."
            )
          }
          onInput={(e) => e.target.setCustomValidity("")}
        />
        <label className="font-medium">What can we help you with?</label>
        <textarea
          className="w-full bg-gray-100 border border-[#dbd6ef] rounded-md p-4 mb-4 font-medium hover:border-[#6663E9] focus:border-[#6663E9] focus:outline-none"
          placeholder="Tell us more details of your contact."
          value={message}
          onChange={(val) => setMessage(val.target.value)}
          required
          title="Details of your contact."
          onInvalid={(e) =>
            e.target.setCustomValidity("Tell us more details of your contact.")
          }
          onInput={(e) => e.target.setCustomValidity("")}
        />
        <button
          type="submit"
          className="w-fit flex flex-start bg-[#6663E9] px-6 py-2 text-white font-bold rounded-md"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default ContactForm;
