import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Story: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#fff] pb-12 pt-12 md:pb-24 md:pt-24 flex flex-col gap-9">
      <div className="w-full flex flex-col md:flex-row gap-3 items-center justify-center md:justify-between px-[70px]">
        <div className="hidden md:block">
          <p className="text-white">space</p>
          </div>
<p className="w-full md:w-fit text-[#D3A641] font-open_sans uppercase md:tracking-[10px] font-[400] text-center text-3xl md:text-4xl">EXPLORE OUR TASTE</p>
        <Link href={"/menu"}>
          <Button
            className="relative z-40 flex items-center justify-center gap-3 px-7 py-7 uppercase rounded-none text-black bg-[#D3A641]"
          >
            View Menu
          </Button>
        </Link>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center items-center md:justify-between px-4 md:px-[80px] gap-4">
      <div className="relative">
        <Image
          src="/images/home/image.png"
          width={401}
          height={556}
          alt="logo"
        />
        <div className="absolute top-0 left-5 w-full h-full border-[3px] border-[#D3A641] z-40"></div>
      </div>
      <div className="relative">
        <Image
          src="/images/home/image2.png"
          width={401}
          height={556}
          alt="logo"
        />
        <div className="absolute top-0 left-5 w-full h-full border-[3px] border-[#D3A641] z-40"></div>
      </div>
      <div className="relative">
        <Image
          src="/images/home/image3.png"
          width={401}
          height={556}
          alt="logo"
        />
        <div className="absolute top-0 left-5 w-full h-full border-[3px] border-[#D3A641] z-40"></div>
      </div>
      </div>
    </section>
  );
};

export default Story;
