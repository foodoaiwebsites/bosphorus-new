// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const Hero: React.FC = () => {
//   return (
//     <section className="relative h-screen w-full overflow-hidden bg-black bg-[url('/images/home/hero/bg.png')] bg-cover bg-center">
//       <div className="absolute right-14 top-8 z-50 hidden md:block">
//         <Link href={"/table-booking"}>
//           <Button
//             className="relative z-40 mt-4 flex items-center justify-center gap-3 px-6 py-7 uppercase"
//             variant="imageoutline"
//           >
//             Book Now
//           </Button>
//         </Link>
//       </div>
//       <div className="relative z-40 flex h-full flex-col items-center justify-center gap-3 text-white md:ml-16">
//         <div>
//           <h1
//             className="text-center font-open_sans text-8xl font-[600] uppercase md:text-9xl"
//             style={{
//               background:
//                 "linear-gradient(0deg, #677C6D  0.3%, #F6FFF8 75.67%)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//             }}
//           >
//             SDK
//           </h1>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute left-0 top-0 h-full w-full object-cover"
      >
        <source src="/video/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute z-20 hidden h-[150px] w-full items-center justify-center md:flex">
        <Link href={"/"}>
          {/* <Button
            className="relative z-40 mt-4 flex items-center justify-center gap-3 px-6 py-7 uppercase"
            variant="imageoutline"
          >
            Book Now
          </Button> */}
          <Image src="/images/logo.png" width={152} height={83} alt="" />
        </Link>
      </div>

      <div className="relative z-40 flex h-full flex-col items-center justify-center gap-3 text-white md:ml-16">
        <div>
          <h1
            className="font-open_sans text-center text-4xl font-light uppercase leading-none md:text-[90px] md:tracking-[20px]"
            style={{
              background: "linear-gradient(180deg, #FFF 0%, #191717 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            BOSPHORUS
          </h1>
        </div>
        <div className="flex md:hidden w-full flex-col items-center justify-center gap-1 md:flex-row md:gap-3 z-50">
          <Link href="/table-booking" className="relative z-50 hidden md:block">
            <Button className="font-open_sans z-50 mt-[50px] rounded-none px-7 py-6 tracking-[2px] text-white hover:text-black">
              Reserve Table
            </Button>
          </Link>
          <Link href="/menu" className="relative z-50">
            <Button className="font-open_sans z-50 mt-[50px] rounded-none px-7 py-6 tracking-[2px] text-white hover:text-black">
              Order Online
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
