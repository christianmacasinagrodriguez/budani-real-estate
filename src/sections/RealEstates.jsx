import { Manrope } from "next/font/google";
import RealEstateCard from "@/components/RealEstateCard";
// import realEstates from "../data/realEstates.json";

const manrope = Manrope({ subsets: ["latin"] });

const realEstates = [
  {
    id: 0,
    translateYNM: "translate-y-0",
    translateYMD: "md:translate-y-0",
    translateYLG: "lg:translate-y-0",
    price: "$205,500",
    name: "Mixtownia",
    imageSRC:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Mixtownia",
  },
  {
    id: 1,
    translateYNM: "translate-y-0",
    translateYMD: "md:translate-y-[30px]",
    translateYLG: "lg:translate-y-[30px]",
    price: "$102,200",
    name: "Mirtawan",
    imageSRC:
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Mixtownia",
  },
  {
    id: 2,
    translateYNM: "translate-y-0",
    translateYMD: "md:translate-y-[60px]",
    translateYLG: "lg:translate-y-[60px]",
    price: "$135,900",
    name: "Wartawan",
    imageSRC:
      "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Mixtownia",
  },
  {
    id: 3,
    translateYNM: "translate-y-0",
    translateYMD: "md:translate-y-[60px]",
    translateYLG: "lg:translate-y-[60px]",
    price: "$205,500",
    name: "Mixtownia",
    imageSRC:
      "https://images.pexels.com/photos/164522/pexels-photo-164522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Mixtownia",
  },
  {
    id: 4,
    translateYNM: "translate-y-0",
    translateYMD: "md:translate-y-[30px]",
    translateYLG: "lg:translate-y-[30px]",
    price: "$205,500",
    name: "Mixtownia",
    imageSRC:
      "https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Mixtownia",
  },
  {
    id: 5,
    translateYNM: "translate-y-0",
    translateYMD: "md:translate-y-0",
    translateYLG: "lg:translate-y-0",
    price: "$205,500",
    name: "Mixtownia",
    imageSRC:
      "https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Mixtownia",
  },
  {
    id: 6,
    translateYNM: "translate-y-0",
    translateYMD: "md:translate-y-0",
    translateYLG: "lg:translate-y-0",
    price: "$205,500",
    name: "Mixtownia",
    imageSRC:
      "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Mixtownia",
  },
  {
    id: 7,
    translateYNM: "translate-y-0",
    translateYMD: "md:translate-y-[30px]",
    translateYLG: "lg:translate-y-[30px]",
    price: "$205,500",
    name: "Mixtownia",
    imageSRC:
      "https://images.pexels.com/photos/1212053/pexels-photo-1212053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Mixtownia",
  },
  {
    id: 8,
    translateYNM: "translate-y-0",
    translateYMD: "md:translate-y-[60px]",
    translateYLG: "lg:translate-y-[60px]",
    price: "$205,500",
    name: "Mixtownia",
    imageSRC:
      "https://images.pexels.com/photos/3935333/pexels-photo-3935333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Mixtownia",
  },
];

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
