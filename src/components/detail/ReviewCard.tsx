import React from "react";
import { Rating, ThinStar } from "@smastrom/react-rating";
import Image from "next/image";
import { greenTick } from "@/helper/imgLocation";
import { carouselDescription } from "@/helper/constant";

const ReviewCard = () => {
  const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: "#ffb700",
  };
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5">
            <div className="p-5 flex-col flex min-h-[20vh] pr border rounded-lg">
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
              <div className="w-[75vw] md:w-[33vw] xl:w-[17vw] lg:w-[23vw] break-words mt-4">
                <h1 className="whitespace-normal">
                   {carouselDescription}
                </h1>
              </div>
            </div>
            <div className="p-5 flex-col flex min-h-[20vh] pr border rounded-lg">
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
              <div className="w-[75vw] md:w-[33vw] xl:w-[17vw] lg:w-[23vw] break-words mt-4">
                <h1 className="whitespace-normal">
                   {carouselDescription}
                </h1>
              </div>
            </div>
            <div className="p-5 flex-col flex min-h-[20vh] pr border rounded-lg">
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
              <div className="w-[75vw] md:w-[33vw] xl:w-[17vw] lg:w-[23vw] break-words mt-4">
                <h1 className="whitespace-normal">
                   {carouselDescription}
                </h1>
              </div>
            </div>
            <div className="p-5 flex-col flex min-h-[20vh] pr border rounded-lg">
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
              <div className="w-[75vw] md:w-[33vw] xl:w-[17vw] lg:w-[23vw] break-words mt-4">
                <h1 className="whitespace-normal">
                   {carouselDescription}
                </h1>
              </div>
            </div>
         </div>;
};

export default ReviewCard;
