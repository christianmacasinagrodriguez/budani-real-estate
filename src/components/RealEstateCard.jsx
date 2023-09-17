import React, { useEffect, useState } from "react";
import { Manrope } from "next/font/google";
import Image from "next/image";

const manrope = Manrope({ subsets: ["latin"] });

function RealEstateCard({
  translateYNM,
  translateYMD,
  translateYLG,
  name,
  price,
  imageSRC,
}) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    return setLoading(false);
  }, []);
  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div
          className={`w-fit h-fit relative ${translateYNM} ${translateYMD} ${translateYLG} font-${manrope.className}`}
        >
          <Image
            width="20000"
            height="20000"
            className="w-[366px] h-[400px] object-cover object-center rounded-[20px] shadow-[0px_4px_120px_rgba(58, 86, 78, 0.07)]"
            src={imageSRC}
            alt="Mixtownia-image"
          />

          <div className="rounded-[20px] bg-white flex flex-row absolute inset-x-0 md:inset-x-[5%] lg:inset-x-[5%] bottom-0 -mb-0 md:-mb-[50px] lg:-mb-[50px] justify-evenly items-center p-5 shadow-lg">
            {/* shadow-[0px_4px_120px_0px_rgba(58, 86, 78, 0.20)] */}
            <div>
              <h2 className="text-2xl font-bold leading-[180%] text-[#3C414E">
                {name}
              </h2>
              <p className="text-xl font-extrabold leading-[180%] text-[#6663E8] drop-shadow-[0px_4px_60px_rgba(0, 0, 0, 0.05)]">
                {price}
              </p>
            </div>
            <button className="w-[114px] h-[52px] rounded-[30px] font-extrabold leading-[180%] text-sm text-[#fff] bg-[#6663E9]">
              Detail
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default RealEstateCard;
