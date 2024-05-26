"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { Rating, ThinStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import RedirectButton from "@/components/RedirectButton";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

const myStyles = {
  itemShapes: ThinStar,
  activeFillColor: "#ffb700",
};

const ProductDetail = () => {
  const { id } = useParams();
  const [sizeValue, SetSizeValue] = useState<string>('');
  const sizesArray = ["small", "medium", "large", "x-large"]

  return (
    <MaxWidthWrapper classname="">
      <div className="mt-[10vh] mb-20 flex flex-col p-2">
        <RedirectButton />
        <div className="flex flex-col md:flex-row justify-between">
          <div>hello</div>
          <div className="flex flex-col gap-3">
            <h1 className="anton md:text-4xl text-2xl">One Life Graphic T-Shirt</h1>
            <div className="flex flex-row items-center gap-2">
              <h1 className="font-medium">Rating</h1>
              <Rating
                readOnly={true}
                style={{ maxWidth: 130 }}
                value={3}
                itemStyles={myStyles}
              />
            </div>
            <h1 className="font-bold text-3xl">₹ 260</h1>
            <div className="break-words w-[80vw] md:w-[50vw] border-b-2 pb-4">
              <h1 className="whitespace-normal md:text-xl text-md font-light">
                This graphic shirt which is perfect
                This graphic shirt which is perfect
              </h1>
            </div>
            <div>
              <h1 className="font-medium text-lg">Choose size</h1>
              <div className="flex gap-2 mt-3 flex-wrap border-b-2 pb-4">
                {sizesArray.map(item => (
                  <Button
                    key={item}
                    onClick={() => SetSizeValue(item)}
                    variant={"outline"}
                    className={`${sizeValue === item && 'bg-black text-white'} rounded-full`}
                  >
                    {item}
                  </Button>
                ))}
              </div>

              <div className="flex gap-2 mt-5 w-[35vh] items-center ">
                  <div className=" bg-[#F0F0F0] flex flex-1 gap-5 p-[0.6rem] rounded-full">
                    <Plus className="cursor-pointer" /> 
                     <h1>{1}</h1>
                     <Minus className="cursor-pointer"/>
                  </div>
                  <Button className="rounded-full flex-[2] px-5 w-[50vw] ">Add to Cart</Button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default ProductDetail;
