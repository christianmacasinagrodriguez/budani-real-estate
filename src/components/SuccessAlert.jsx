import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

const SuccessAlert = ({ text, alertView }) => {
  return (
    <div
      className={`fixed inset-0 w-full h-full bg-[#00000085] ${alertView} flex-col justify-center items-center`}
    >
      <div className="relative w-fit h-fit p-20 bg-white rounded-lg">
        <div className=" absolute top-0 inset-x-0 mx-auto -mt-[60px]  p-5 bg-[#6663E9] w-fit h-fit flex flex-col justify-center items-center rounded-full text-white text-7xl">
          <FaCheck />
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default SuccessAlert;
