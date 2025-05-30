// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { ArrowLeft, ArrowRight } from "lucide-react";
// import React from "react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";

// const images = [
//   "/images/home/highlights/image1.png",
//   "/images/home/highlights/image2.png",
//   "/images/home/highlights/image3.png",
//   "/images/home/highlights/image1.png",
//   "/images/home/highlights/image2.png",
//   "/images/home/highlights/image3.png",
//   "/images/home/highlights/image2.png",
//   "/images/home/highlights/image3.png",
// ];

// const Highlights: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [imageWidth, setImageWidth] = useState(0);
//   const imagesPerView = 3;

//   useEffect(() => {
//     const updateWidth = () => {
//       const imgElement = document.querySelector(".slide-image");
//       if (imgElement) {
//         setImageWidth(imgElement.clientWidth + 16);
//       }
//     };

//     updateWidth();
//     window.addEventListener("resize", updateWidth);
//     return () => window.removeEventListener("resize", updateWidth);
//   }, []);

//   const handleNext = () => {
//     if (currentIndex < images.length - imagesPerView) {
//       setCurrentIndex((prevIndex) => prevIndex + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex((prevIndex) => prevIndex - 1);
//     }
//   };

//   return (
//     <section className="relative h-full w-full bg-[#fff] px-4 py-12 md:px-12 md:py-16 2xl:px-20">
//       <div className="absolute right-[10%] top-0 hidden md:block">
//         <Link href={"/table-booking"}>
//           <Button
//             className="relative z-40 mt-4 flex items-center justify-center gap-3 px-7 py-7 uppercase text-[#fff]"
//             variant="imageB"
//           >
//             Book now{" "}
//           </Button>
//         </Link>
//       </div>
//       <div className="flex flex-col gap-6 md:gap-14">
//         <div className="flex flex-col items-center justify-center gap-2 md:pb-8">
//           <span className="font-birthstone text-2xl font-[400] tracking-[0.76px] text-[#8C7753]">
//             Our story{" "}
//           </span>
//           <h6 className="text-center font-sofia_sans text-4xl font-[400] uppercase text-[#11331B] md:text-5xl">
//             This Week at a Glance{" "}
//           </h6>
//           <div className="md:hidden">
//             <Link href={"/menu"}>
//               <Button
//                 className="relative z-40 mt-4 flex items-center justify-center gap-3 px-10 py-7 uppercase"
//                 variant="imageoutline"
//               >
//                 View Menu
//               </Button>
//             </Link>
//           </div>
//         </div>

//         <div className="relative mx-auto w-full overflow-hidden">
//           <div
//             className="flex transition-transform duration-300 ease-in-out"
//             style={{
//               transform: `translateX(-${currentIndex * imageWidth}px)`,
//             }}
//           >
//             {images.map((img, index) => (
//               <div
//                 key={index}
//                 className="slide-image w-full flex-shrink-0 px-2 md:w-1/3"
//               >
//                 <Image
//                   src={img}
//                   alt={`Slide ${index + 1}`}
//                   width={300}
//                   height={200}
//                   className="h-[300px] w-full object-cover md:h-[450px]"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="relative mt-6 flex items-center justify-between px-10">
//           <button
//             onClick={handlePrev}
//             className={`mt-3 rounded-full bg-[#11331B] p-3 text-[#fff] ring-1 ring-[#11331B] transition ${
//               currentIndex === 0
//                 ? "cursor-not-allowed opacity-50"
//                 : "hover:bg-[#236236] hover:text-black"
//             }`}
//             disabled={currentIndex === 0}
//           >
//             <ArrowLeft className="h-6 w-6" />
//           </button>
//           <div className="flex justify-center gap-2">
//             {images.map((_, index) => (
//               <div
//                 key={index}
//                 className={`h-1 w-1 rotate-45 transition-all ${
//                   currentIndex === index ? "bg-black" : "bg-[#236236]"
//                 }`}
//               />
//             ))}
//           </div>
//           <button
//             onClick={handleNext}
//             className={`mt-3 rounded-full bg-[#11331B] p-3 text-[#fff] ring-1 ring-[#11331B] transition ${
//               currentIndex >= images.length - imagesPerView
//                 ? "cursor-not-allowed opacity-50"
//                 : "hover:bg-[#236236] hover:text-black"
//             }`}
//             disabled={currentIndex >= images.length - imagesPerView}
//           >
//             <ArrowRight className="h-6 w-6" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Highlights;

"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SpecialPopup from "./SpecialPopup";

const images = [
  {
    image: "/images/home/highlights/image1.png",
    date: "Sundays 50 % off sushi",
    food: "T&C only one offer at the time can be used.",
    name: "Sundays 50 % off sushi",
  },
  {
    image: "/images/home/highlights/image2.png",
    date: "Monday to Thursday 50% of Shisha",
    food: "T&C only one offer at the time can be used.",
    name: "Monday to Thursday 50% of Shisha",
  },
  {
    image: "/images/home/highlights/image3.png",
    time: "Happy hour Monday- Tuesday 6-7pm ",
    food: "T&C only one offer at the time can be used.",
    name: "Happy hour Monday- Tuesday 6-7pm ",
  },
  {
    image: "/images/home/highlights/image1.png",
    food: "T&C only one offer at the time can be used.",
    dj: "Friday live DJ 8 -2am",
    name: "Friday live DJ 8 -2am",
  },
  {
    image: "/images/home/highlights/image2.png",
    food: "T&C only one offer at the time can be used.",
    dj: "Saturday Live Dj 8 - 2am and Fire show girl dance ",
    name: "Saturday Live Dj 8 - 2am and Fire show girl dance",
  },
  {
    image: "/images/home/highlights/image3.png",
    food: "T&C only one offer at the time can be used.",
    dj: "live Dj 7-12 am",
    name: "live Dj 7-12 am",
  },
  {
    image: "/images/home/highlights/image3.png",
    food: "T&C only one offer at the time can be used.",
    name: "Electric Shisha at £25",
  },
];

const Latest = ({}) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add("(max-width:500px)", () => {
      gsap.to(".latest-one", {
        scrollTrigger: {
          trigger: ".latest-one",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 0,
        duration: 0.8,
      });

      gsap.to(".latest-two", {
        scrollTrigger: {
          trigger: ".latest-two",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 0,
        duration: 0.8,
      });
    });

    mm.add("(min-width:501px)", () => {
      gsap.to(".latest-one", {
        scrollTrigger: {
          trigger: ".latest-one",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 30,
        duration: 0.8,
      });
      gsap.to(".latest-two", {
        scrollTrigger: {
          trigger: ".latest-two",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 30,
        duration: 0.8,
      });
    });
    gsap.to(".latest-arrow", {
      scrollTrigger: {
        trigger: ".latest-arrow",
        toggleActions: "restart none none none",
        // start: "top 80%", // When the top of the .title enters 80% of the viewport
        // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
        // scrub: true
      },
      scale: 1,
      duration: 0.8,
    });
    gsap.to(".carousal-item", {
      scrollTrigger: {
        trigger: ".carousal-item",
        toggleActions: "restart none none none",
        // start: "top 80%", // When the top of the .title enters 80% of the viewport
        // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
        // scrub: true
      },
      scale: 1,
      opacity: 1,
      duration: 0.8,
    });
    const splitType = document.querySelectorAll(".head-latest");
    splitType.forEach((char) => {
      if (char instanceof HTMLElement) {
        const text = new SplitType(char, { types: "chars" });
        gsap.from(text.chars, {
          scrollTrigger: {
            trigger: char,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            markers: false,
          },
          opacity: 0.2,
          stagger: 0.2,
        });
      }
    });
  }, []);
  return (
    <section
      id="welcome"
      className="relative flex w-full items-center justify-center bg-[#fff]"
    >
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="absolute left-0 top-0 hidden h-full w-full items-start justify-center md:flex"></div>
      <div className="relative flex h-fit w-full max-w-[1300px] flex-col items-center justify-center gap-9 overflow-hidden bg-transparent px-3 py-12 lg:flex-row lg:gap-0 lg:p-0 lg:py-24">
        <div className="z-30 flex h-full w-full flex-col items-center justify-center gap-5 lg:items-center lg:gap-9">
          <div className="flex w-full flex-col items-center justify-center gap-10 lg:w-1/2">
            <div className="flex w-full flex-col items-center justify-center gap-4">
              <p className="latest-one font-birthstone text-xl font-[200] text-[#8C7753] md:-ml-[50px] md:text-3xl">
                Latest
              </p>
              <p className="styled_section_head non-italic flex items-center justify-center gap-3 text-center uppercase tracking-[8px] text-primary md:tracking-[10.56px]">
                {/* <Image
                  src="/images/left.png"
                  alt="left"
                  width={44}
                  height={12}
                  className="latest-arrow w-fit"
                  style={{
                    transform: "scale(0.5)",
                  }}
                /> */}
                <span className="head-latest font-open_sans text-[36px] font-normal text-[#11331B] xl:text-[46px]">
                  What`s on
                  <br />
                  this week
                </span>
                {/* <Image
                  src="/images/right.png"
                  alt="right"
                  width={44}
                  height={12}
                  className="latest-arrow h-fit w-fit"
                  style={{
                    transform: "scale(0.5)",
                  }}
                /> */}
              </p>
            </div>
          </div>
          <Carousel
            className="carousal-item w-full md:w-[1100px]"
            style={{
              transform: "scale(1.3)",
              opacity: 0,
            }}
          >
            <CarouselContent className="">
              {images.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="flex justify-center md:basis-1/2 lg:basis-1/3"
                >
                  <SpecialPopup item={item}>
                    <Image
                      src={item?.image}
                      alt="right"
                      width={417}
                      height={531}
                      className="about-arrow w-full md:h-[450px] md:w-[330px]"
                    />
                  </SpecialPopup>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              className="left-4 top-1/2 hidden h-12 w-12 bg-[#0e1719] text-primary shadow-2xl outline-none md:flex"
              variant="default"
            />
            <CarouselNext
              className="top-1/2 mr-8 hidden h-12 w-12 bg-[#0e1719] text-primary shadow-2xl outline-none md:flex"
              variant="default"
            />
            <div className="flex items-center justify-center gap-7 pt-12 md:hidden">
              <CarouselPrevious
                className="static h-12 w-12 bg-[#0e1719] text-primary shadow-2xl outline-none"
                variant="default"
              />
              <CarouselNext
                className="static h-12 w-12 bg-[#0e1719] text-primary shadow-2xl outline-none"
                variant="default"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Latest;
