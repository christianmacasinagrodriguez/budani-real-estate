import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

const SuccessAlert = ({ heading, text, alertView }) => {
  return (
    <div
      className={`fixed inset-0 w-full h-full bg-[#00000085] ${alertView} flex-col justify-center items-center font-${manrope.className} z-40`}
    >
      <div className="relative w-fit h-fit p-20 bg-white mx-2 rounded-lg flex flex-col gap-2 justify-center">
        <div className=" absolute top-0 inset-x-0 mx-auto -mt-[60px]  p-5 bg-[#6663E9] w-fit h-fit flex flex-col justify-center items-center rounded-full text-white text-7xl">
          <FaCheck />
        </div>
        <h1 className="font-bold text-2xl text-center text-black">{heading}</h1>
        <p className="text-center text-black">{text}</p>
      </div>
    </div>
  );
};

export default SuccessAlert;
