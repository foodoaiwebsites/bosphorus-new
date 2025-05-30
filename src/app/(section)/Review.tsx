"use client";
import { Icons } from "@/components/Icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRestaurant } from "@/context/RestaurantContext";
import Image from "next/image";
import Link from "next/link";

const Reviews = ({}) => {
  const { reviews } = useRestaurant();
  return (
    <section className="relative flex h-full w-full justify-center bg-[#000] pb-8 md:px-0 lg:pb-0">
       <div className="absolute right-0 top-0 w-full h-full md:block"
      style={{
        backgroundImage:"url('/images/home/topbg.png'),url('/images/home/bottombg.png')",
        backgroundPosition:"top left, bottom right",
        backgroundRepeat:"no-repeat",
        backgroundSize:"60%,60%"
      }}
      >
      </div>
      <div className="flex h-full w-full flex-col items-start md:items-center justify-center gap-4 py-12 md:gap-8 md:py-44 md:pt-24 z-50">
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 lg:gap-4">
          <div className="flex flex-col items-center justify-center gap-2">
          <p className="uppercase text-4xl md:text-5xl font-open_sans text-center tracking-[9px] text-[#D3A641]">From our PEOPLE</p>
          </div>
        </div>
        <div className="relative flex w-full items-center justify-center p-4 md:p-0">
          {/* <div className="absolute left-0 top-0 hidden md:block">
            <h1
              className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
              style={{
                background:
                  "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              SDK{" "}
            </h1>
          </div> */}
          {reviews && (
            <Carousel className="w-full md:w-[600px] px-4">
              <CarouselContent className="flex w-full justify-center gap-4 md:ml-4">
                {reviews.map((review, index) => (
                  // <CarouselItem
                  //   key={index}
                  //   className="flex w-full basis-full flex-col items-center justify-center gap-6 rounded-none md:basis-1/4"
                  // >
                  <CarouselItem
                    key={index}
                    className={`ml-4 flex w-full basis-full flex-col items-center justify-center gap-6 rounded-none md:ml-0 ${
                      index % 2 === 0 ? "mt-4" : "mb-4"
                    }`}
                  >
                    <div className="flex h-[370px] flex-col justify-between gap-6 border-none px-6 py-8">
                      {/* <div className="flex w-full justify-center">
                        {Array.from({ length: review.rating }).map(
                          (_, index) => (
                            <Icons.star
                              key={index}
                              className="text-[#BEBEBE]"
                            />
                          ),
                        )}
                      </div> */}
                      <div className="flex h-full flex-col justify-between gap-4">
                        <p className="font-poppins line-clamp-6 text-center text-sm font-[500] lowercase text-[#817263] md:px-4 lg:leading-[24px] tracking-[1px]">
                          {review.text.text}
                        </p>
                        <div className="w-full flex flex-col justify-center items-center gap-1">
                        <Image
                        src={
                          review?.authorAttribution?.photoUri ||
                          "/images/home/reviews/pictures/anna-mathew.svg"
                        }
                        width={60}
                        height={60}
                        alt={review?.authorAttribution?.displayName}
                      />
                        <p className="font-open_sans text-center text-sm font-[500] uppercase leading-[120%] text-[#C8BBBB] md:mt-4">
                          {review.authorAttribution.displayName}
                        </p>
                        <span className="font-inter text-sm font-[400] tracking-[0.60px] text-[#8A8A8A] capitalize">
                          {review?.relativePublishTimeDescription}
                        </span>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="group absolute -bottom-12 left-1/2 flex w-fit -translate-x-1/2 transform items-center gap-2 transition-transform duration-300 ease-in-out">
                <CarouselPrevious className="border-[#D3A641] bg-[#D3A641] transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
                <CarouselNext className="border-[#D3A641] bg-[#D3A641] transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
              </div>
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
