import React from "react";
import { Rating, ThinStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { EmblaOptionsType } from "embla-carousel";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import DynamicLoading from "@/components/DynamicLoading";

import AddToCart from "@/components/AddToCart";
import { getProductDetail } from "@/lib/getData";
import { TproductSizes } from "@/types/model";
import SizesButtons from "@/components/SizesButtons";

const DetailPageCarousel = DynamicLoading(
  () => import("@/components/detail/DetailPageCarousel")
);
const ReviewCard = DynamicLoading(
  () => import("@/components/detail/ReviewCard")
);
const RedirectButton = DynamicLoading(
  () => import("@/components/RedirectButton")
);

type productProp = {
  params: {
    id: string;
  };
};

const myStyles = {
  itemShapes: ThinStar,
  activeFillColor: "#ffb700",
};

const ProductDetail = async ({ params }: productProp) => {
  const detail = await getProductDetail(params!.id);

  const OPTIONS: EmblaOptionsType = {};
  const SLIDES = detail?.img;

  return (
    <MaxWidthWrapper classname="">
      <div className="mb-20 flex flex-col p-2 overflow-hidden">
        <RedirectButton className="mt-[10vh]" />
        <div className="flex flex-col gap-10 xl:flex-row justify-between">
          <div className="">
            <DetailPageCarousel slides={SLIDES} options={OPTIONS} />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="anton md:text-4xl text-2xl">{detail?.title}</h1>
            <div className="flex flex-row items-center gap-2">
              <h1 className="font-medium">Rating</h1>
              <Rating
                readOnly={true}
                style={{ maxWidth: 130 }}
                value={detail!.rating}
                itemStyles={myStyles}
              />
            </div>
            <h1 className="font-bold text-3xl">₹ {detail?.price}</h1>
            <div className="break-words w-[80vw] xl:w-[25vw] md:w-[80vw] border-b-2 pb-4">
              <h1 className="whitespace-normal md:text-xl text-md font-light">
                {detail?.description}
              </h1>
            </div>
            <div>
              <h1 className="font-medium text-lg mb-2">Choose size</h1>
              {detail?.sizes && (
                <SizesButtons
                  sizes={detail.sizes}
                  id={detail?._id}
                />
              )}
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
