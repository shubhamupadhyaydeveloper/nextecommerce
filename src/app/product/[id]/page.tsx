import React from "react";
import { Rating, ThinStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Button } from "@/components/ui/button";
import { EmblaOptionsType } from 'embla-carousel'
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import DynamicLoading from "@/components/DynamicLoading";
import SizesButtons from "@/components/SizesButtons";
import Increment from "@/components/Increment";
const DetailPageCarousel = DynamicLoading(() => import("@/components/detail/DetailPageCarousel"))
const ReviewCard = DynamicLoading(() => import("@/components/detail/ReviewCard"))
const RedirectButton = DynamicLoading(() => import("@/components/RedirectButton"))

type productProp = {
  params: {
    id: string;
  };
}

const myStyles = {
  itemShapes: ThinStar,
  activeFillColor: "#ffb700",
};


const ProductDetail = ({params}:productProp) => {
  const id = params.id

  const OPTIONS: EmblaOptionsType = {}
  const SLIDES = ["/tshirt.png","/tshirt.png","/tshirt.png"]
  
  return (
    <MaxWidthWrapper classname="">
      <div className="mb-20 flex flex-col p-2 overflow-hidden">
        <RedirectButton className="mt-[10vh]" />
        <div className="flex flex-col gap-10 xl:flex-row justify-between">
          <div className="">
           <DetailPageCarousel slides={SLIDES} options={OPTIONS} />
          </div>
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
            <div className="break-words w-[80vw] xl:w-[25vw] md:w-[80vw] border-b-2 pb-4">
              <h1 className="whitespace-normal md:text-xl text-md font-light">
                This graphic shirt which is perfect
                This graphic shirt which is perfect
              </h1>
            </div>
            <div>
              <h1 className="font-medium text-lg">Choose size</h1>
              <SizesButtons />

              <div className="flex gap-2 mt-5 w-[35vh] items-center ">
                   <Increment />
                  <Button className="rounded-full flex-[2] px-5 w-[50vw] ">Add to Cart</Button>
              </div>

            </div>
          </div>
        </div>
        <h1 className="flex items-center anton text-3xl mt-10 ">All Reviews</h1>
         <ReviewCard />
      </div>
    </MaxWidthWrapper>
  );
};

export default ProductDetail;
