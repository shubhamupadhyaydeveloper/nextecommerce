import DynamicLoading from "@/components/DynamicLoading";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const Banner = DynamicLoading(() => import("@/components/homepage/Banner"))
const Brands = DynamicLoading(() => import("@/components/homepage/Brands"))
const Browse = DynamicLoading(() => import("@/components/homepage/Browse"))
const HomePageReviewCarausel = DynamicLoading(() => import("@/components/homepage/Crousel"))

import Products from "@/components/homepage/Products";

import React from "react";

const Home = () => {
  return (
    <>
    <MaxWidthWrapper classname="mt-[100px] overflow-hidden">
       <Banner />
       <Brands />
       <Products />
       <Browse />
       <HomePageReviewCarausel />
    </MaxWidthWrapper>
    </>
  );
};

export default Home;
