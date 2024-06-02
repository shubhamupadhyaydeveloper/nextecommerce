"use client";
import React from "react";
import CartItem from "./CartItem";
import { Separator } from "../ui/separator";
import { Tproduct } from "@/types/types";

type props = {
  cart: Tproduct[];
};

const CartBox = ({ cart }: props) => {
  return (
    <div className="border rounded-lg p-5 gap-3 flex flex-col w-full">
      {cart.length > 0 &&
        cart.map((item) => (
          <>
            <CartItem
              imgLink={item.img}
              title={item.title}
              price={item.price}
              size={item.size}
              stock={item.sizeStock}
              quantity={item.quantity}
              id={item._id}
            />
            <Separator />
          </>
        ))}
    </div>
  );
};

export default CartBox;
