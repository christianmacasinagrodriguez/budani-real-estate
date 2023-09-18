import React, { useState } from "react";
import { Manrope } from "next/font/google";
import SuccessAlert from "./SuccessAlert";

const manrope = Manrope({ subsets: ["latin"] });

function NewsLetterCTA() {
  const [alertView, setAlertView] = useState("hidden");
  const [email, setEmail] = useState("");
  const [subscribing, setSubscribing] = useState("Subscribe");

  const subscribe = async (e) => {
    e.preventDefault();
    setSubscribing("Subscribing");

    const response = await fetch("/api/send-email/email", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
      }),
      body: JSON.stringify({
        email,
        type: "subscribe",
      }),
    });

    if (response.status === 200) {
      setAlertView("flex");
      setTimeout(() => {
        setAlertView("hidden");
        setSubscribing("Subscribe");
      }, 3000);
      setEmail("");
    } else {
    }
  };

  return (
    <>
      <SuccessAlert
        heading="Subscribed!"
        text="Thanks for subscribing to our updates!"
        alertView={alertView}
      />
      <form
        onSubmit={subscribe}
        className={`h-fit w-[90%] md:w-[80%] lg:w-[90%] xl:w-[80%] bg-[#6663E9] flex flex-col font-${manrope.className} items-center rounded-[70px] py-[80px] px-[5%] md:px-[80px] lg:px-[80px] shadow-[0px_4px_60px_rgba(0, 0, 0, 0.05)]`}
      >
        <h1 className="w-full md:w-full lg:w-full xl:w-[70%] text-white text-4xl md:text-6xl lg:text-6xl xl:text-6xl font-extrabold leading-[135%] flex flex-col text-center mb-[30px]">
          Subscribe to Our Newsletter For Weekly Article Update.
        </h1>
        <p className=" w-full md:w-full lg:w-full xl:w-[60%] text-white text-lg font-normal  leading-[180%] flex flex-col self-center text-center mb-[60px]">
          We have real estate-related blog so we can share our thought and
          rutinity in our blog that updated weekly. We will not spam you, we
          promise.
        </p>
        <div className="w-full md:w-[90%] lg:w-full xl:w-[60%] text-white flex flex-col md:flex-row lg:flex-row gap-[20px] self-center">
          <label className="relative w-full h-[61px] flex flex-row bg-[#5654D1] rounded-[40px]">
            <svg
              className="absolute left-[23px] inset-y-0 my-auto"
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
            >
              <path
                d="M4.5 4.5H22.5C23.7375 4.5 24.75 5.5125 24.75 6.75V20.25C24.75 21.4875 23.7375 22.5 22.5 22.5H4.5C3.2625 22.5 2.25 21.4875 2.25 20.25V6.75C2.25 5.5125 3.2625 4.5 4.5 4.5Z"
                stroke="white"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M24.75 6.75L13.5 14.625L2.25 6.75"
                stroke="white"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              className="w-full ml-[70px] px-[20px] rounded-r-[40px] bg-transparent focus:outline-none"
              type="email"
              placeholder="Enter your e-mail address"
              required
              value={email}
              onChange={(val) => setEmail(val.target.value)}
            />
          </label>
          <button
            className="w-full md:w-[174px] lg:w-[174px] h-[61px]  bg-white text-[#6663E9] text-lg font-extrabold leading-[180%] rounded-[40px] shadow-[0px_4px_60px_0px_rgba(0, 0, 0, 0.05)]"
            type="submit"
          >
            {subscribing}
          </button>
        </div>
      </form>
    </>
  );
}

export default NewsLetterCTA;
