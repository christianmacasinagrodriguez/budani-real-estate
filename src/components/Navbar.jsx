import React, { useEffect, useState } from "react";
import { Manrope } from "next/font/google";
import Logo from "./Logo";
import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";

const manrope = Manrope({ subsets: ["latin"] });

function Navbar({ pageStat, onBlogPage, blogActive, contactActive }) {
  const [bgView, setBgView] = useState("hidden");
  const [navBehavior, setNavBehavior] = useState("fixed");
  const [scrollData, setScrollData] = useState(0);
  const [menuIcon, setMenuIcon] = useState("");
  const [menuCloseIcon, setMenuCloseIcon] = useState("hidden");
  const [mobileMenuVisibility, setMobileMenuVisibility] = useState("hidden");

  useEffect(() => {
    setImageView();
    setNavbarBehavior();
  });
  function setImageView() {
    if (pageStat) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 800) {
          setBgView("");
        } else {
          setBgView("hidden");
        }
      });
    }
    if (onBlogPage) {
      setBgView("");
    }
  }
  function setNavbarBehavior() {
    let lastScrollTop = 0;
    window.addEventListener("scroll", () => {
      setScrollData(window.scrollY);

      if (window.scrollY > scrollData) {
        setNavBehavior("hidden");
      } else {
        setNavBehavior("fixed");
      }
      setScrollData(window.scrollY);
    });
  }

  function menuClickHandler() {
    changeMenuIcon();
    toggleMobileMenu();
  }

  function changeMenuIcon() {
    if (menuIcon === "") {
      setMenuIcon("hidden");
    } else {
      setMenuIcon("");
    }

    if (menuCloseIcon === "hidden") {
      setMenuCloseIcon("");
    } else {
      setMenuCloseIcon("hidden");
    }
  }

  function toggleMobileMenu() {
    if (mobileMenuVisibility === "hidden") {
      setMobileMenuVisibility("flex");
    } else {
      setMobileMenuVisibility("hidden");
    }
  }

  return (
    <nav
      className={`${navBehavior} top-0 inset-x-0 py-[30px] text-white flex flex-row justify-between px-[5%] mx-0 md:mx-[5%] lg:mx-[5%] xl:mx-[5%] border-b-[1px] border-white border-opacity-50 z-20`}
    >
      <Image
        width="20000"
        height="20000"
        className={`${bgView} absolute inset-0 object-cover w-full h-full z-[-5]`}
        src="https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="nav-background-image"
      />
      <div
        className={`${bgView} h-full w-full absolute inset-0 bg-gradient-to-r from-[#000000] to-[#0000001A] z-[-2]`}
      ></div>
      <div className="w-full">
        <Logo bColor="text-white" nameColor="text-white" />
      </div>
      <Navigation
        blogActive={blogActive}
        contactActive={contactActive}
        visibility={mobileMenuVisibility}
      />

      <div
        className="flex justify-center items-center md:hidden lg:hidden xl:hidden text-3xl"
        onClick={menuClickHandler}
      >
        <svg
          className={`${menuIcon}`}
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
        >
          <path
            d="M25 7.5L12.5 7.5"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M25 15L5 15"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M25 22.5L17.5 22.5"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          className={`${menuCloseIcon}`}
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 256 256"
        >
          <path
            d="M9.156 6.313 6.312 9.155 22.157 25 6.22 40.969 9.03 43.78 25 27.844 40.938 43.78l2.843-2.843L27.844 25 43.687 9.156l-2.843-2.844L25 22.157z"
            transform="scale(5.12)"
            fill="#fff"
            strokeMiterlimit="10"
          />
        </svg>
      </div>
    </nav>
  );
}

export default Navbar;
