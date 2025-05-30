import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const JoinUs = ({ }) => {
  return (
    <section
      className="relative flex h-screen w-full items-center justify-center"
      style={{
        backgroundImage: `url('/images/about-us/join-us.png')`,
        backgroundSize: "cover",
      }}
    >
      <div className="absolute w-full h-full left-0 top-0 bg-black/60"></div>
      <div className="flex h-full w-full flex-col-reverse items-center justify-center gap-4 md:flex-row z-20">
        <div className="flex h-full w-full flex-col items-center justify-center gap-[2.5rem] p-6">
          <h1 className="max-w-[500px] text-center font-oswald text-5xl leading-[60px]">
            Join Us for an<br /> Unforgettable Experience
          </h1>
          <p className="max-w-[450px] text-center font-[600] leading-[160%] text-white tracking-[1px]">
            Savor the authentic flavors of Turkey, from flame-grilled kebabs to freshly made mezes, all crafted with passion and tradition. Let the inviting ambiance and warm hospitality of Bosphorus Istanbul transport you to the heart of Istanbul. Whether it’s a casual gathering or a special occasion, every meal is a celebration of taste and culture.
          </p>
          <Button
            className="group w-fit items-center gap-[1.19rem] font-semibold uppercase px-6 py-6"
          >
            <Link href="/table-booking" className="flex justify-center items-center gap-3">
              Book Now{" "}
              <Icons.rightArrow className="duration-300 ease-in-out group-hover:translate-x-1 group-hover:text-primary-foreground" />
            </Link>
          </Button>
        </div>
      </div>
    </section >
  );
};

export default JoinUs;
