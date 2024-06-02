"use client";
import React from "react";
import { Button } from "./ui/button";
import { getProductDetail } from "@/lib/getData";
import { Tproduct } from "@/types/types";
import { TproductModel } from "@/types/model";
import globalState from "@/store/zustand";
import { toast } from "sonner";


type Props = {
  id: string;
  size : string,
  stock : number,
  disable : boolean
};

const AddToCart = ({ id ,size, stock,disable }: Props) => {
  const {addToCart} = globalState()

  async function handleClick() {
    try {
      const product:TproductModel = await getProductDetail(id);
      const createItem:Tproduct = {
          _id : product._id,
          title : product.title,
          price : product.price,
          description : product.description,
          size  : size,
          sizeStock : stock,
          img : product?.img[0],
          quantity : 1
      }
      addToCart(createItem);
      toast.success("product added to cart")
      
    } catch (error:any) {
       console.log("Error in addtocart",error)
       toast.error(error)
    }
  }

  return (
    <div>
      <Button
        onClick={handleClick}
        className="rounded-full flex-[2] px-5 w-[30vw] md:w-[15vw] "
        disabled={disable}
      >
        Add to Cart
      </Button>
      {disable &&  <h1 className="text-red-500 text-md font-medium pl-2 mt-2">select a size 😓</h1>}
    </div>
  );
};

export default AddToCart;
