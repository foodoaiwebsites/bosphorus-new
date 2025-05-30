import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Unique: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#FFF] py-12 md:py-28">
      <div className="flex flex-col gap-4 md:gap-8">
        <div className="flex flex-col items-center justify-center gap-2">
          <span className="font-birthstone text-2xl font-[400] tracking-[0.76px] text-[#8C7753]">
            Our story
          </span>
          <h6 className="text-center font-sofia_sans text-4xl font-[400] uppercase text-[#11331B] md:text-5xl">
            What makes us unique{" "}
          </h6>
          <div className="flex flex-col items-center justify-center px-4 md:px-0">
            <p className="w-full max-w-[570px] text-center font-lora text-sm font-[400] lowercase text-[#9C9E9F] md:text-base">
              We blend Mediterranean elegance with bold Pan-Asian flavours,
              crafting innovative sushi and premium seafood dishes using the
              finest ingredients. Every bite offers a perfect balance of
              tradition, freshness, and unforgettable taste.
            </p>
          </div>
        </div>{" "}
        <div className="flex w-full flex-col gap-4 px-4 pt-8 md:flex-row md:px-10">
          <div className="w-full md:w-[33%]">
            <Image
              src={"/images/home/story/image1.jpg"}
              width={281}
              height={74}
              alt="image"
              className="h-auto w-full"
            />
          </div>

          <div className="w-full md:w-[33%]">
            <Image
              src={"/images/home/story/image2.jpg"}
              width={281}
              height={74}
              alt="image"
              className="h-auto w-full"
            />
          </div>
          <div className="w-full md:w-[33%]">
            <Image
              src={"/images/home/story/image3.jpg"}
              width={281}
              height={74}
              alt="image"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unique;
