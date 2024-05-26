"use client";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Rating, ThinStar } from "@smastrom/react-rating";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { greenTick } from "@/helper/imgLocation";
import { carouselDescription } from "@/helper/constant";

export function EmblaCarousel() {
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
      <div className="embla mb-10 mt-10 h-[40vh] md:h-[35vh] lg:h-[30vh] mx-auto">
        <div className="embla__viewport" ref={emblaRef} >
          <div className="embla__container w-60 md:w-[30vw] xl:w-[20vw] flex gap-5 h-full">
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
