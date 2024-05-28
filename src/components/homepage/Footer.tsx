import { footerDescription } from "@/helper/constant";
import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";

const Footer = () => {
  return (
    <div className="w-full bg-black text-white p-10 ">
      <MaxWidthWrapper classname="">
        <div className="flex justify-between flex-col gap-3 md:flex-row ">
          <div className="flex flex-col gap-3">
            <h1 className="anton text-2xl">Nikee</h1>
            <div className="break-words w-[70vw] md:w-[25vw] font-light">
              <h3 className="whitespace-normal">{footerDescription}</h3>
            </div>
          </div>
          <div>
            <h1>Nike ©️ 2024 All Right Reserved</h1>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Footer;
