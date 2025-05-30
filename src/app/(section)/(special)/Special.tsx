"use client";
import EmblaCarousel from "@/app/(section)/(special)/MenuCarousel";
import { Button } from "@/components/ui/button";
import { useRestaurant } from "@/context/RestaurantContext";
import type { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";
import Link from "next/link";

const OPTIONS: EmblaOptionsType = { loop: true };

const Special = ({}) => {
  const { modelData } = useRestaurant();
  return (
    <section className="relative flex h-full w-full justify-center bg-white pt-12">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden"></div>
      <div className="flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-10 pt-12">
        <div className="flex w-full flex-col items-center justify-center gap-3 md:flex-row">
          <div className="w-full flex flex-col items-center justify-center gap-2">
            <div className="relative w-full flex flex-col items-center justify-center gap-2">
              <h6 className="text-center font-open_sans text-4xl font-[400] uppercase text-[#D3A641] md:text-5xl">
              SIGNATURES FROM SPACE
              </h6>
              <div className="static md:absolute w-full flex justify-center md:justify-end items-center top-24">
              <p className="text-black max-w-[300px] font-inter font-light">Our menu is carefully crafted to offer a perfect balance of flavor, quality, and innovation</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-50 flex min-h-[400px] w-full flex-col justify-center px-2">
          {modelData && <EmblaCarousel slides={modelData} options={OPTIONS} />}
        </div>
      </div>
    </section>
  );
};

export default Special;
