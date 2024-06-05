"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { TproductSizes } from "@/types/model";
import AddToCart from "./AddToCart";

type props = {
  sizes?: TproductSizes[];
  id: string;
};

type Tsizes = "small" | "medium" | "large" | "xlarge"

const SizesButtons = ({ sizes, id }: props) => {
  const [size, SetSize] = useState<string>("");
  const [stock,SetStock] = useState<number>(0)


  const handleClick = (size:Tsizes,count:number) => {
      SetSize(size)
      SetStock(count)
  }

  useEffect(() => {
     SetSize("")
     SetStock(0)
  },[])

  return (
    <>
      <div className="flex flex-col gap-4">

        <div className="flex flex-wrap gap-2">
          {sizes?.map((item) => (
            <Button
            key={item.size}
            variant={"outline"}
            disabled={item.quantity <= 0}
            className={`${size === item.size && "bg-black text-white "}`}
            onClick={() => handleClick(item.size,item.quantity)}
            >
              {item.size}
            </Button>
          ))}
        </div>
          <h1 className="font-semibold text-md">You selected <span className="font-medium text-md text-green-400">{size === "" ? "None" : size}</span></h1>
        <AddToCart id={id} disable={size === "" || stock === 0} size={size} stock={stock} />
      </div>
    </>
  );
};

export default SizesButtons;
