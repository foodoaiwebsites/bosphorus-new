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
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const Reviews = ({}) => {
  const { reviews } = useRestaurant();
  return (
    <section className="relative flex h-full w-full justify-center bg-[#000] pb-8 md:px-0 lg:pb-0">
      <div
        className="absolute right-0 top-0 h-full w-full md:block"
        style={{
          backgroundImage:
            "url('/images/home/topbg.png'),url('/images/home/bottombg.png')",
          backgroundPosition: "top left, bottom right",
          backgroundRepeat: "no-repeat",
          backgroundSize: "60%,60%",
        }}
      ></div>
      <div className="z-50 flex h-full w-full flex-col items-start justify-center gap-4 py-12 md:items-center md:gap-8 md:py-44 md:pt-24">
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 lg:gap-4">
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="font-open_sans text-center text-4xl uppercase tracking-[9px] text-[#D3A641] md:text-5xl">
              From our PEOPLE
            </p>
          </div>
        </div>
        <div className="relative flex w-full items-center justify-center p-4 md:p-0">
          {reviews && (
            <div className="w-full px-4">
              <Carousel className="w-full">
                <CarouselContent className="-ml-1">
                  {reviews
                    .filter((review) => review.rating >= 4)
                    .map((review, index) => (
                      <CarouselItem
                        key={index}
                        className="flex basis-full justify-center pl-1"
                      >
                        <div className="p-1">
                          <Card className="h-[300px] max-w-[600px] border-none bg-transparent">
                            <CardContent className="flex flex-col items-center justify-between gap-4 p-6">
                              <div className="flex justify-center">
                                {Array.from({ length: review.rating }).map(
                                  (_, i) => (
                                    <Icons.star
                                      key={i}
                                      className="text-[#D3A641]"
                                    />
                                  ),
                                )}
                              </div>
                              <p className="font-cormorant line-clamp-6 text-center text-sm text-[#D3A641]">
                                {review.text.text}
                              </p>
                              <p className="font-playfair text-center text-xs tracking-wide text-[#D3A641]">
                                — {review.authorAttribution.displayName}
                              </p>
                              <Image
                                src={review.authorAttribution.photoUri}
                                alt="profile picture"
                                width={50}
                                height={50}
                              />
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="group absolute -bottom-12 left-1/2 flex w-fit -translate-x-1/2 transform items-center gap-2 pb-8 transition-transform duration-300 ease-in-out">
                  <CarouselPrevious className="border-[#D3A641] text-[#D3A641] transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
                  <CarouselNext className="border-[#D3A641] text-[#D3A641] transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
                </div>
              </Carousel>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
