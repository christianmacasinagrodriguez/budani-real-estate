"use client";
import { Manrope } from "next/font/google";
import Link from "next/link";
import React from "react";

const manrope = Manrope({ subsets: ["latin"] });

function Navigation({ blogActive, contactActive, visibility }) {
  function enableScroll() {
    window.onscroll = function () {};
  }
  return (
    <ul
      className={`w-screen md:w-fit lg:w-fit xl:w-fit fixed md:static lg:static xl:static top-0 bottom-0 right-0 left-0 ${visibility} md:flex lg:flex xl:flex flex-col md:flex-row  lg:flex-row xl:flex-row gap-5 justify-center items-center  ${manrope.className} bg-[#000000e2] md:bg-transparent lg:bg-transparent xl:bg-transparent py-[70%] md:py-0 lg:py-0 xl:py-0 z-[-10] md:z-20 lg:z-20 xl:z-20`}
    >
      {/* <li><a href='/'>Location</a></li> */}
      <li>
        <Link
          className={`h-full hover:border-b-4 hover:border-[#6663E9] hover:text-lg p-4 transition-all duration-[4000] ${
            blogActive ? "text-lg border-b-4 border-[#6663E9]" : ""
          }`}
          href="blog-page"
          onClick={enableScroll}
        >
          Blogs
        </Link>
      </li>
      {/* <li><a href='/'>Testimonials</a></li> */}
      <li>
        <Link
          className={`h-full hover:border-b-4 hover:border-[#6663E9] hover:text-lg p-4 transition-all duration-[4000] ${
            contactActive ? "text-lg border-b-4 border-[#6663E9]" : ""
          }`}
          href="contact-page"
          onClick={enableScroll}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;
