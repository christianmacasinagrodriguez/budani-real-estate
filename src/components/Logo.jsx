import React from "react";
import { Nunito_Sans, Manrope } from "next/font/google";
import Link from "next/link";

const nunito_sans = Nunito_Sans({ weight: "700", subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"] });

function Logo({ bColor, nameColor }) {
  function enableScroll() {
    window.onscroll = function () {};
  }
  return (
    <Link
      href="/"
      className="flex items-center cursor-pointer w-full"
      onClick={enableScroll}
    >
      <div
        className={`font-${nunito_sans.className} font-bold font-white bg-[#6663E9] w-[53px] h-[53px] flex justify-center items-center rounded-full italic ${bColor} text-2xl`}
      >
        B
      </div>
      <p
        className={`font-${manrope.className} ml-5 text-xl flex flex-col ${nameColor}`}
      >
        Budani
        <span>Real Estate</span>
      </p>
    </Link>
  );
}

export default Logo;
