import Image from "next/image";
import React from "react";

function About() {
  return (
    <section className="relative flex h-fit w-full items-end justify-center px-4 py-12 md:h-screen md:px-[50px] md:py-20">
      <div className="absolute flex h-full w-full items-start justify-center py-8">
        <p
          className="font-open_sans text-4xl font-light uppercase leading-none md:mt-14 md:pl-[50px] md:tracking-[50px] lg:text-[190px]"
          style={{
            background: "linear-gradient(180deg, #D3A641 0%, #191717 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          BOSPHORUS
        </p>
      </div>
      <div className="z-40 flex w-full flex-col items-center justify-center gap-2 pt-12 md:flex-row md:items-end md:pt-0">
        <div className="flex w-full flex-col items-center justify-center gap-6 md:w-5/12 md:flex-row lg:items-end">
          <p className="text-center font-inter lowercase text-[#A27C26] md:text-start">
            At Bosphorus, we believe every meal should be a celebration and
            every dish a reflection of tradition. Our restaurant specializes in
            serving authentic Turkish cuisine, handcrafted with passion and
            inspired by the rich flavors of Istanbul.
          </p>
          <Image
            src="/images/home/drinks2.jpeg"
            width={336}
            height={336}
            alt="image1"
            className="lg:h-[300px] lg:w-[300px]"
          />
        </div>
        <div className="flex w-full items-center justify-center py-5 md:h-[300px] md:w-2/12">
          <p className="text-center font-inter text-3xl uppercase tracking-[3px] text-[#A27C26]">
            ABOUT US
          </p>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-6 md:w-5/12 md:flex-row lg:items-end">
          <p className="text-center font-inter lowercase text-[#A27C26] md:text-start">
            At Bosphorus, you`ll always be greeted with genuine Turkish
            hospitality from our friendly and attentive team. Our staff takes
            pride in making every guest feel at home, ensuring your dining
            experience is warm, welcoming, and truly memorable.
          </p>
          <Image
            src="/images/home/food2.jpeg"
            width={289}
            height={489}
            alt="image2"
            className="lg:h-[400px] lg:w-[289px]"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
