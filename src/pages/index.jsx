import React from "react";
import { Manrope } from "next/font/google";
import Hero from "@/sections/Hero";
import Navbar from "@/components/Navbar";
import RealEstates from "@/sections/RealEstates";
import Features from "@/sections/Features";
import Newsletter from "@/sections/Newsletter";
import Footer from "@/sections/Footer";
import Head from "next/head";

const manrope = Manrope({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="overflow-y-auto overflow-x-hidden bg-gray-100">
      <Head>
        <title>Budani Real State</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar
        pageStat={true}
        onBlogPage={false}
        blogActive={false}
        contactActive={false}
      />

      <main className={` ${manrope.className}`}>
        <Hero />
        <RealEstates />
        <Features />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
