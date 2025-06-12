import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Reserve: React.FC = () => {
  return (
    <section className="relative flex h-full w-full flex-col gap-4 bg-black py-12 md:flex-row">
      <div className="flex w-full gap-4 md:w-3/5">
        <Image
          src="/images/home/hero/img.jpg"
          width={2048}
          height={2048}
          alt="1"
          className="object-cover md:h-[630px] md:w-[900px]"
        />
      </div>
      <div className="flex w-full flex-col items-center justify-center md:w-2/5">
        <div className="flex h-fit w-fit flex-col gap-3">
          <p className="font-open_sans text-4xl uppercase tracking-[9px] text-[#D3A641]">
            RESERVE YOUR
            <br /> TABLE
          </p>
          <p className="inter max-w-[300px] lowercase text-white">
            Reserve your table now and enjoy a delicious dining experience at
            Bosphorus <br />
            Whether it’s a casual meal or a special occasion, we’ve got the
            perfect spot for you.
          </p>
          <Link href={"/table-booking"}>
            <Button className="relative z-40 flex items-center justify-center gap-3 rounded-none bg-[#D3A641] px-7 py-6 uppercase text-black">
              Reserve
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Reserve;
