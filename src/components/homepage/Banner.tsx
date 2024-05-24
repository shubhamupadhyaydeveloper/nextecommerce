import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { bannerDescription } from "@/helper/constant";
import { heroImg, starImg } from "@/helper/imgLocation";
import Image from "next/image";
import React from "react";


const Banner = () => {
  return (
    <div className="flex flex-col overflow-hidden md:flex-row items-center justify-between gap-10 bg-[#F2F0F1] pr-5 pl-5 md:pl-5 xl:pl-20 pt-10 rounded-md">
    <div className="flex flex-col">
      <h1 className="md:text-4xl lg:text-5xl xl:text-6xl text-center md:text-start text-4xl anton text-black leading-tight">
        <span className="block">FIND CLOTHES</span>
        <span className="block">THAT MATCHES</span>
        <span className="block">YOUR STYLE</span>
      </h1>
      <h1 className="font-light md:w-[30vw] text-sm  w-[50vw] md:text-start md:mt-5 mt-2 text-center ">
        {bannerDescription}
      </h1>
      <div className="flex justify-center md:justify-start mt-3 md:mt-2 xl:mt-5">
        <Button className=":w-[200px] md:w-[150px] rounded-full">Shop Now</Button>
      </div>
    </div>
    <div className="relative">
      <Image src={starImg} width={40} height={40} alt="star" className="absolute xl:top-40 xl:left-11 top-20 left-4" />
      <Image src={heroImg} width={500} height={200} alt="cover img" />
      <Image src={starImg} width={60} height={40} alt="star" className="absolute xl:top-20 xl:right-11 top-10 right-2" />
    </div>
  </div>
  )
}

export default Banner;