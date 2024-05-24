import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Banner from "@/components/homepage/Banner";
import Brands from "@/components/homepage/Brands";
import Browse from "@/components/homepage/Browse";
import { CarouselSize } from "@/components/homepage/Crousel";
import Products from "@/components/homepage/Products";
import {
  Carousel,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import React from "react";

const Home = () => {
  return (
    <MaxWidthWrapper classname="mt-[100px] overflow-hidden">
      <Banner />
      <div className="mt-5">
        <Brands />
      </div>
      <h1 className="anton text-center mt-14 mb-4 md:text-5xl text-3xl">
        NEW ARRIVALS
      </h1>
      <Products />
      <Browse />
      <div className="flex justify-between items-center  p-5">
        <h1 className="anton text-start mt-16 mb-4 md:text-5xl text-3xl">
          OUR HAPPY CUSTOMER
        </h1>
        <div>
          <Carousel>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <CarouselSize />
    </MaxWidthWrapper>
  );
};

export default Home;
