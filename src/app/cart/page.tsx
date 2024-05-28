"use client";
import DynamicLoading from "@/components/DynamicLoading";
import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import RedirectButton from "@/components/RedirectButton";
import CartBox from "@/components/cart/CartBox";
import Checkout from "@/components/cart/Checkout";
import globalState from "@/store/zustand";
import Image from "next/image";

const CartPage = () => {
  const { cart } = globalState();
  return (
    <MaxWidthWrapper classname="px-4 py-6">
      <div className="mt-[10vh]">
        <RedirectButton />
        <h1 className="anton text-4xl mb-5">Your Cart</h1>{" "}
        <div className="flex justify-center md:flex-row flex-col gap-3 mt-5 mb-10 md:mb-[15vh] xl:mb-[25vh]">
          {cart.length === 0 ? (
            <Image
              src="/emptycart.png"
              width={350}
              height={200}
              alt="emptycart"
              loading="lazy"
            />
          ) : (
            <>
              <div className="flex-[1.5]">
                <CartBox />
              </div>
              <div className="flex-1">
                <Checkout />
              </div>
            </>
          )}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default CartPage;
