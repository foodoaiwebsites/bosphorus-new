import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Reserve: React.FC = () => {
  return (
    <section className="relative h-full w-full flex flex-col md:flex-row py-12 gap-4 bg-black">
      <div className="w-full md:w-3/5 flex gap-4">
        <Image
         src='/images/home/private_group.jpeg'
         width={993}
         height={838}
         alt="1"
         className="md:w-[900px] md:h-[630px] object-cover"
        />
      </div>
      <div className="w-full md:w-2/5 flex flex-col justify-center items-center">
      <div className="w-fit h-fit flex flex-col gap-3">
      <p className="uppercase text-4xl font-open_sans tracking-[9px] text-[#D3A641]">RESERVE YOUR<br/> TABLE</p>
      <p className="inter text-white lowercase max-w-[300px]">Reserve your table now and enjoy a delicious dining experience at Bosphorus <br/>
      Whether it’s a casual meal or a special occasion, we’ve got the perfect spot for you.</p>
      <Link href={"/table-booking"}>
          <Button
            className="relative z-40 flex items-center justify-center gap-3 px-7 py-6 uppercase rounded-none text-black bg-[#D3A641]"
            >
      Reserve
          </Button>
        </Link>
            </div>
      </div>
    </section>
  );
};

export default Reserve;
