import Image from "next/image";
import React from "react";
import Increment from "../Increment";
import RemoveToCart from "./RemoveToCart";

type props = {
  id : string
  imgLink: string;
  title: string;
  size: string;
  price: number;
  stock : number,
  quantity : number,
  onDelete?: () => void;
};

const CartItem = ({imgLink,title,size,price,stock,quantity,id}:props) => {

  return (
    <div className="flex gap-3">
      <Image src={imgLink} width={100} height={70} alt="img" className="h-[12vh]" />
      <div className="flex flex-col w-full">
        <div className="flex justify-between ">
          <h1 className="font-bold text-lg">{title}</h1>
          <RemoveToCart id={id} />
        </div>
        <h1 className="font-medium">
          size: <span className="font-light">{size}</span>
        </h1>
        <h1 className="font-medium">
          quantity: <span className="font-light">{quantity}</span>
        </h1>
        <h1 className="font-medium">
          stock: <span className="text-red-500 font-medium">{stock}&nbsp;left 😓</span>
        </h1>
        <div className="flex justify-between ">
          <h1 className="font-bold text-lg">₹ {price}</h1>
          {}
           <Increment stock={stock} id={id} size={size} quantity={quantity} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
