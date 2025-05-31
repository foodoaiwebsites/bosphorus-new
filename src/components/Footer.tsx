import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icon";

const Footer = ({}) => {
  return (
    <footer className="flex h-full w-full flex-col items-center justify-center gap-12 bg-[#131313] px-2 py-12">
      <div className="flex w-full max-w-[1300px] flex-col items-center gap-4 md:flex-row">
        <div className="hidden w-full flex-col items-center justify-center gap-4 md:flex md:w-1/3">
          <Button
            variant="link"
            className="w-fit items-center justify-start px-0 py-0 text-start text-xl text-[#959595] text-accent"
            asChild
          >
            <Link href="/menu">Menu</Link>
          </Button>
          <Button
            variant="link"
            className="w-fit items-center justify-start px-0 py-0 text-start text-xl text-[#959595] text-accent"
            asChild
          >
            <Link href="/about-us">About</Link>
          </Button>
          <Button
            variant="link"
            className="w-fit items-center justify-start px-0 py-0 text-start text-xl text-[#959595] text-accent"
            asChild
          >
            <Link href="/contact">Contact</Link>
          </Button>
          <Button
            variant="link"
            className="w-fit items-center justify-start px-0 py-0 text-start text-xl text-[#959595] text-accent"
            asChild
          >
            <Link href="/table-booking">Table booking</Link>
          </Button>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-12 md:w-1/3">
          <Image src="/images/logo.png" width={188} height={57} alt="logo" />
          <div className="flex flex-col items-center justify-center gap-2">
            <Link
              href="https://maps.app.goo.gl/Mtxz3ZAGU44Za8K2A"
              target="_blank"
              className="text-center"
            >
              9 Earlsdon St, Earlsdon,
              <br />
              Coventry CV5 6EP, UK
              <br />
            </Link>
            <Link href="tel:+442477350145">Booking Request: +442477350145</Link>
          </div>
          {/* <Image src="/images/halal.png" width={90} height={90} alt="halal" /> */}
        </div>
        <div className="w-full md:w-1/3 flex justify-center items-start">
        <div className="flex w-full flex-col items-center justify-center gap-4 md:hidden md:w-1/3">
          <Button
            variant="link"
            className="w-fit items-center justify-start px-0 py-0 text-start text-xl text-[#959595] text-accent"
            asChild
          >
            <Link href="/menu">Menu</Link>
          </Button>
          <Button
            variant="link"
            className="w-fit items-center justify-start px-0 py-0 text-start text-xl text-[#959595] text-accent"
            asChild
          >
            <Link href="/about-us">About</Link>
          </Button>
          <Button
            variant="link"
            className="w-fit items-center justify-start px-0 py-0 text-start text-xl text-[#959595] text-accent"
            asChild
          >
            <Link href="/contact">Contact</Link>
          </Button>
          <Button
            variant="link"
            className="w-fit items-center justify-start px-0 py-0 text-start text-xl text-[#959595] text-accent"
            asChild
          >
            <Link href="/table-booking">Table booking</Link>
          </Button>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <div></div>
          <p className="font-semibold uppercase text-[#959595]">
            Opening hours
          </p>
          <p className="text-[##959595]">Monday to Saturday</p>
          <p className="text-[##959595]"> 11:00am - 11:00pm</p>
          <p className="text-[##959595] text-center"> Sunday <br/>11:00am - 10:00pm</p>
        </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center gap-3">
        <Button
          className="px-1 py-1 text-white hover:bg-transparent hover:text-white"
          variant="ghost"
          asChild
        >
          <Link
            href="https://www.instagram.com/bosphorusistanbulrestaurant/"
            target="_blank"
          >
            <Icons.instagram />
          </Link>
        </Button>
        <Button
          className="px-1 py-1 text-white hover:bg-transparent hover:text-white"
          variant="ghost"
          asChild
        >
          <Link href="https://g.co/kgs/GqRfnC2" target="_blank">
            <Icons.google />
          </Link>
        </Button>
        <Button
          className="px-1 py-1 text-white hover:bg-transparent hover:text-white"
          variant="ghost"
          asChild
        >
          <Link
            href="https://www.tripadvisor.in/Restaurant_Review-g186403-d26516717-Reviews-Bosphorus_Istanbul-Coventry_West_Midlands_England.html"
            target="_blank"
          >
            <Icons.unknown />
          </Link>
        </Button>
        <Button
          className="px-1 py-1 text-white hover:bg-transparent hover:text-white"
          variant="ghost"
          asChild
        >
          <Link
            href="https://www.facebook.com/bosphorusistanbulrestaurant/"
            target="_blank"
          >
            <Icons.facebook />
          </Link>
        </Button>
      </div>
      <div className="flex w-full items-center justify-center">
        <p className="w-fit px-4 text-center text-xl">
          © 2024 Bosphorus Istanbul Restaurent. All Rights Reserved |{" "}
          <Link
            href="https://foodo.ai"
            className="text-primary hover:underline"
          >
            Powered By Foodo
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
