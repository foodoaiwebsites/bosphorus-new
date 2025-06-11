// import Image from "next/image";
// import React from "react";

// function About() {
//   return (
//     <section className="relative flex h-fit w-full items-end justify-center px-4 py-12 md:h-screen md:px-[50px] md:py-20">
//       <div className="absolute flex h-full w-full items-start justify-center py-8">
//         <p
//           className="font-open_sans text-4xl font-light uppercase leading-none md:mt-14 md:pl-[50px] md:tracking-[50px] lg:text-[190px]"
// style={{
//   background: "linear-gradient(180deg, #D3A641 0%, #191717 100%)",
//   WebkitBackgroundClip: "text",
//   WebkitTextFillColor: "transparent",
// }}
//         >
//           BOSPHORUS
//         </p>
//       </div>
//       <div className="z-40 flex w-full flex-col items-center justify-center gap-2 pt-12 md:flex-row md:items-end md:pt-0">
//         <div className="flex w-full flex-col items-center justify-center gap-6 md:w-5/12 md:flex-row lg:items-end">
//           <p className="text-center font-inter lowercase text-[#A27C26] md:text-start">
//             At Bosphorus, we believe every meal should be a celebration and
//             every dish a reflection of tradition. Our restaurant specializes in
//             serving authentic Turkish cuisine, handcrafted with passion and
//             inspired by the rich flavors of Istanbul.
//           </p>
//           <Image
//             src="/images/home/drinks2.jpeg"
//             width={336}
//             height={336}
//             alt="image1"
//             className="lg:h-[300px] lg:w-[300px]"
//           />
//         </div>
//         <div className="flex w-full items-center justify-center py-5 md:h-[300px] md:w-2/12">
//           <p className="text-center font-inter text-3xl uppercase tracking-[3px] text-[#A27C26]">
//             ABOUT US
//           </p>
//         </div>
//         <div className="flex w-full flex-col items-center justify-center gap-6 md:w-5/12 md:flex-row lg:items-end">
//           <p className="text-center font-inter lowercase text-[#A27C26] md:text-start">
//             At Bosphorus, you`ll always be greeted with genuine Turkish
//             hospitality from our friendly and attentive team. Our staff takes
//             pride in making every guest feel at home, ensuring your dining
//             experience is warm, welcoming, and truly memorable.
//           </p>
//           <Image
//             src="/images/home/food2.jpeg"
//             width={289}
//             height={489}
//             alt="image2"
//             className="lg:h-[400px] lg:w-[289px]"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;

"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Image from "next/image";

const About = ({}) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add("(max-width:500px)", () => {
      gsap.to(".welcome-one", {
        scrollTrigger: {
          trigger: ".welcome-one",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 0,
        duration: 0.8,
      });

      gsap.to(".welcome-two", {
        scrollTrigger: {
          trigger: ".welcome-two",
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
      gsap.to(".welcome-one", {
        scrollTrigger: {
          trigger: ".welcome-one",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 30,
        duration: 0.8,
      });
      gsap.to(".welcome-two", {
        scrollTrigger: {
          trigger: ".welcome-two",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 30,
        duration: 0.8,
      });
    });

    const splitType = document.querySelectorAll(".head-welcome");
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
    gsap.to(".about-arrow", {
      scrollTrigger: {
        trigger: ".about-arrow",
        toggleActions: "restart none none none",
        // start: "top 80%", // When the top of the .title enters 80% of the viewport
        // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
        // scrub: true
      },
      scale: 1,
      duration: 1,
    });
  }, []);
  const text = "STORY OF Bosphorus";
  return (
    <section
      id="welcome"
      className="relative flex w-full items-center justify-center"
      style={{
        backgroundImage: "url('/images/home/about/mask.png')",
        backgroundPosition: "center center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      {/* <div className="absolute left-0 top-0 hidden h-full w-full items-start justify-center md:flex">
        <div className="z-30 ml-[108px] mr-[108px] h-full w-full xl:border-x-[0.25px] xl:border-x-primary"></div>
      </div> */}
      <div className="relative flex h-fit w-full flex-col items-center justify-center gap-9 overflow-hidden bg-transparent px-3 py-12 lg:flex-row lg:gap-0 lg:p-0 lg:py-24">
        <div className="z-30 flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-5 lg:items-center lg:gap-9">
          <div className="flex w-full flex-col items-center justify-center gap-10 lg:w-1/2">
            <div className="flex flex-col items-center justify-center">
              <p className="styled_section_head non-italic flex items-center justify-center gap-3 text-center font-manrope text-3xl uppercase text-[#A27C26] md:text-6xl">
                <span
                  className="head-welcome"
                  // style={{
                  //   background:
                  //     "linear-gradient(180deg, #D3A641 0%, #191717 100%)",
                  //   WebkitBackgroundClip: "text",
                  //   WebkitTextFillColor: "transparent",
                  // }}
                >
                  {text.split("").map((char, index) => (
                    <span key={index} className="key head-welcome">
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </span>
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center lg:w-1/2">
            <div className="flex flex-col items-center gap-5">
              <p className="welcome-two w-full text-center capitalize text-[#A27C26] md:-ml-[50px] md:w-[730px]">
                At Bosphorus, you`ll always be greeted with genuine Turkish
                hospitality from our friendly and attentive team. Our staff
                takes pride in making every guest feel at home, ensuring your
                dining experience is warm, welcoming, and truly memorable.
              </p>
            </div>
          </div>
          <div className="grid w-full max-w-[1200px] grid-cols-1 items-center justify-center gap-9 md:grid-cols-3 md:justify-between">
            <div className="m-auto flex w-[90%] items-center justify-center md:m-0 md:w-full">
              <Image
                src="/images/home/food2.jpeg"
                alt="image1"
                width={5000}
                height={2782}
                className="about-arrow w-full object-cover md:h-[507px] md:w-fit"
                style={{
                  transform: "scale(0.5)",
                }}
              />
            </div>
            <div className="m-auto flex w-[90%] items-center justify-center md:m-0 md:w-full">
              <Image
                src="/images/home/drinks2.jpeg"
                alt="image2"
                width={5000}
                height={2782}
                className="about-arrow w-full object-cover md:h-[507px] md:w-fit"
              />
            </div>
            <div className="m-auto flex w-[90%] items-center justify-center md:m-0 md:w-full">
              <Image
                src="/images/home/hero.png"
                alt="image3"
                width={5000}
                height={2782}
                className="about-arrow w-full object-cover md:h-[507px] md:w-fit"
                style={{
                  transform: "scale(0.5)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
