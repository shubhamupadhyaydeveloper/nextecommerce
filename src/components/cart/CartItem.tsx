import { Trash2 } from "lucide-react";
import Image from "next/image";
import React from "react";
import Increment from "../Increment";

type props = {
  imgLink: string;
  title: string;
  size: string;
  price: number;
  onDelete: () => void;
};

const CartItem = () => {

  return (
    <div className="flex gap-3">
      <Image src="/tshirt.png" width={100} height={100} alt="img" />
      <div className="flex flex-col w-full">
        <div className="flex justify-between ">
          <h1 className="font-bold text-lg">Your new Tshirt</h1>
          <Trash2 color="red" className="cursor-pointer" />
        </div>
        <h1 className="font-medium">
          size: <span className="font-light">large</span>
        </h1>
        <div className="flex justify-between ">
          <h1 className="font-bold text-lg">₹ 120</h1>
           <Increment />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
