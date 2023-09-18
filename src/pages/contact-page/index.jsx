import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import { Manrope } from "next/font/google";
import React, { useState } from "react";
import Head from "next/head";
import SuccessAlert from "@/components/SuccessAlert";

const manrope = Manrope({ subsets: ["latin"] });

function ContactPage() {
  return (
    <>
      <Navbar
        pageStat={false}
        onBlogPage={true}
        blogActive={false}
        contactActive={true}
      />
      <Head>
        <title>Contact Us</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="bg-white h-fit w-screen px-[1%] md:px-[10%] lg:px-[20%] text-[#27292E]">
        <section
          className={`w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-10 gap-5 py-[200px] ${manrope.className}`}
        >
          <div className="px-2 flex flex-col gap-20">
            <h1 className="text-5xl">Contact us</h1>
            <p className="tracking-wide mb-[50px]">
              Need to get in touch with us? Please fill out the form with your
              inquiry.
            </p>
          </div>
          <div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ContactPage;
