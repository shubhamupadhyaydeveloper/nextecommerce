"use client";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Rating, ThinStar } from "@smastrom/react-rating";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { greenTick } from "@/helper/imgLocation";
import { carouselDescription } from "@/helper/constant";

export default function HomePageReviewCarausel() {

  const [emblaRef, emblaApi] = useEmblaCarousel();

  const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: "#ffb700",
  };

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
       <h1 className="anton text-start mt-16 mb-4 md:text-5xl text-3xl">OUR HAPPY CUSTOMER</h1>
      <div className="embla mb-10 mt-10 h-[40vh] md:h-[40vh] lg:h-[35vh]">
        <div className="embla__viewport " ref={emblaRef} >
          <div className="embla__container pl-5 w-60 md:w-[35vw] xl:w-[20vw] flex gap-5">
            <div className="embla__slide p-5 flex-col flex min-h-[20vh] pr border rounded-lg">
              <Rating
                readOnly={true}
                style={{ maxWidth: 110 }}
                value={5}
                itemStyles={myStyles}
              />
              <div className="flex gap-3 mt-1 items-center">
                <h1 className="font-medium text-xl">Name</h1>
                <Image
                  loading="lazy"
                  src={greenTick}
                  height={10}
                  width={20}
                  className="w-4 h-4 mt-1"
                  alt="greentick"
                />
              </div>
              <div className="w-[52vw] md:w-[25vw] xl:w-[17vw] break-words mt-4">
                <h1 className="whitespace-normal">
                   {carouselDescription}
                </h1>
              </div>
            </div>
            <div className="embla__slide p-5 flex-col flex min-h-[20vh] pr border rounded-lg">
              <Rating
                readOnly={true}
                style={{ maxWidth: 110 }}
                value={5}
                itemStyles={myStyles}
              />
              <div className="flex gap-3 mt-1 items-center">
                <h1 className="font-medium text-xl">Name</h1>
                <Image
                  loading="lazy"
                  src={greenTick}
                  height={10}
                  width={20}
                  className="w-4 h-4 mt-1"
                  alt="greentick"
                />
              </div>
              <div className="w-[52vw] md:w-[25vw] xl:w-[17vw] break-words mt-4">
                <h1 className="whitespace-normal">
                   {carouselDescription}
                </h1>
              </div>
            </div>
            <div className="embla__slide p-5 flex-col flex min-h-[20vh] pr border rounded-lg">
              <Rating
                readOnly={true}
                style={{ maxWidth: 110 }}
                value={5}
                itemStyles={myStyles}
              />
              <div className="flex gap-3 mt-1 items-center">
                <h1 className="font-medium text-xl">Name</h1>
                <Image
                  loading="lazy"
                  src={greenTick}
                  height={10}
                  width={20}
                  className="w-4 h-4 mt-1"
                  alt="greentick"
                />
              </div>
              <div className="w-[52vw] md:w-[25vw] xl:w-[17vw] break-words mt-4">
                <h1 className="whitespace-normal">
                   {carouselDescription}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex gap-3 mt-5 mb-5">
          <button className="embla__prev rounded-full" onClick={scrollPrev}>
            <ArrowLeft />
          </button>
          <button className="embla__next rounded-full" onClick={scrollNext}>
            <ArrowRight />
          </button>
        </div>
      </div>
    </>
  );
}
