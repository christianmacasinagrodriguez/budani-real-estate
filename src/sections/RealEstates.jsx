import React, { useEffect, useState } from "react";
import { Manrope } from "next/font/google";
import RealEstateCard from "@/components/RealEstateCard";
import realEstates from "../data/realEstates.json";

const manrope = Manrope({ subsets: ["latin"] });

function RealEstates() {
  return (
    <section
      className={`h-fit w-screen ${manrope.className} bg-[#F6F8FA] pt-[200px]`}
    >
      <div className="flex justify-center w-full mb-[150px]">
        <h1 className="flex justify-center items-center w-[90%] md:w-[70%] lg:w-[40%] xl:w-[30%] font-extrabold text-6xl leading-[135%] tracking-[0.6px] text-[#27292E] text-center">
          Our Best Estate, are Modern!
        </h1>
      </div>
      <div className="mx-[10%] md:mx-[10%] lg:mx[10%] xl:mx-[10%] 2xl:mx-[20%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-[25px] md:gap-y-[150px] lg:gap-y-[150px]">
        {realEstates.map((estate) => (
          <RealEstateCard
            key={estate.id}
            name={estate.name}
            price={estate.price}
            imageSRC={estate.imageSRC}
            alt={estate.alt}
            translateYNM={estate.translateYNM}
            translateYMD={estate.translateYMD}
            translateYLG={estate.translateYLG}
          />
        ))}
      </div>
    </section>
  );
}

export default RealEstates;
