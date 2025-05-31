"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Sidebar from "./SideBar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = ({
  position = "static",
}: {
  position?: "static" | "fixed" | "absolute";
}) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const d = localStorage.getItem("positiond");
    if (d !== null) {
      setPositiond(d);
    }
  }, []);
  const [positiond, setPositiond] = useState<string>("");
  useEffect(() => {
    if (positiond) {
      localStorage.setItem("positiond", positiond);
    }
  }, [positiond]);
  const pathname = usePathname();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav
      className={cn(
        `${position} top-5 z-50 h-[10vh] w-full pt-0 md:top-0`,
        pathname === "/menu" && "bg-black pt-4",
        pathname !== "/" && `${position} top-5 z-50 h-[10vh] w-full pt-4`,
      )}
    >
      {/*big screen */}
      <div
        className={
          pathname === "/"
            ? "hidden px-4 pt-0 md:block md:px-0"
            : "px-4 pt-0 md:px-[50px] 2xl:px-[140px]"
        }
      >
        <div className={cn("w-full h-screen hidden md:flex items-center justify-start",pathname !== "/" && "h-fit w-full")}>
        <div
          className={
            pathname === "/"
              ? "flex h-screen w-[22%] flex-col items-center justify-center bg-transparent"
              : "w-full flex flex-row items-center justify-center"
          }
        >
          <div
            className={
              pathname === "/"
                ? "flex flex-col items-start gap-14 z-50"
                : "mt-2 flex flex-row items-center justify-center gap-14 z-50"
            }
          >
            <Link
              href={"/"}
              className="flex flex-row items-center justify-center gap-1 font-open_sans text-base font-[400] uppercase leading-[25px] tracking-[1.6px] text-white"
            >
              <Image
                src={"/images/home/hero/dot.svg"}
                width={281}
                height={74}
                alt="logo"
                className="h-5 w-2"
              />{" "}
              Home
            </Link>
            <Link
              href={"/menu"}
              className="flex flex-row items-center justify-center gap-1 font-open_sans text-base font-[400] uppercase leading-[25px] tracking-[1.6px] text-white"
            >
              <Image
                src={"/images/home/hero/dot.svg"}
                width={281}
                height={74}
                alt="logo"
                className="h-5 w-2"
              />{" "}
              Menu
            </Link>
            {/* <Link
              href={"/about-us"}
              className="flex flex-row items-center justify-center gap-1 font-open_sans text-base font-[400] uppercase leading-[25px] tracking-[1.6px] text-white"
            >
              <Image
                src={"/images/home/hero/dot.svg"}
                width={281}
                height={74}
                alt="logo"
                className="h-5 w-2"
              />{" "}
              About
            </Link> */}
            {/* <Link
              href={""}
              className="flex flex-row items-center justify-center gap-1 font-open_sans text-base font-[400] uppercase leading-[25px] tracking-[1.6px] text-white"
            >
              <Image
                src={"/images/home/hero/dot.svg"}
                width={281}
                height={74}
                alt="logo"
                className="h-5 w-2"
              />{" "}
              Food & Drinks
            </Link> */}
            <Link
              href={"/table-booking"}
              className="flex flex-row items-center justify-center gap-1 font-open_sans text-base font-[400] uppercase leading-[25px] tracking-[1.6px] text-white"
            >
              <Image
                src={"/images/home/hero/dot.svg"}
                width={281}
                height={74}
                alt="logo"
                className="h-5 w-2"
              />{" "}
              Reservation
            </Link>
            <Link
              href={"/contact"}
              className="flex flex-row items-center justify-center gap-1 font-open_sans text-base font-[400] uppercase leading-[25px] tracking-[1.6px] text-white"
            >
              <Image
                src={"/images/home/hero/dot.svg"}
                width={281}
                height={74}
                alt="logo"
                className="h-5 w-2"
              />{" "}
              Contact Us
            </Link>
          </div>
        </div>
         <div className={cn("hidden md:flex w-[57%] flex-col items-center justify-center gap-1 md:flex-row md:gap-3 z-50 mt-[130px]", pathname !== "/" && "md:hidden mt-0")}>
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
      </div>

      {/*mobile screen */}
      <div className="block px-4 md:hidden md:px-20">
        <div className="flex flex-row items-center justify-between">
          <div>
            <Link href={"/"}>
              <Image
                src={"/images/logo.png"}
                width={281}
                height={74}
                alt="logo"
                className="w-20"
              />
            </Link>
          </div>
          <div>
            <Sidebar>
              <Button
                variant="ghost"
                className="flex px-1 py-1 text-primary hover:bg-transparent hover:text-primary"
              >
                <div className="flex flex-row gap-2">
                  <EqualizerIcon />
                </div>
              </Button>
            </Sidebar>{" "}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const EqualizerIcon: React.FC = () => {
  return (
    <div className="equalizer-icon rotate text-[#fff]">
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};
