"use client"
import { Minus, Plus } from "lucide-react";
import React, { useCallback, useState } from "react";
import globalState from "@/store/zustand";
import { Button } from "./ui/button";

type props = {
   stock : number
   id : string,
   size : string,
   quantity : number
}

const Increment = ({stock,id,size,quantity}:props) => {
  const {onIncrement,onDecrement,cart} = globalState()
  const [local, Setlocal] = useState<number>(quantity);
  const onIncrease = useCallback(() => {
    Setlocal(Math.min(local+1,stock));
    onIncrement(id,size)
  }, [local]);

  const onDecrease = useCallback(() => {
    Setlocal(Math.max(local - 1, 1));
    onDecrement(id,size)
  }, [local]);

  return (
    <div className=" px-2 py-[0.6rem] rounded-full flex items-center gap-2">
      <Button variant={"secondary"} onClick={onIncrease} disabled={local === stock} > <Plus size={19} className="cursor-pointer"  /></Button>
      <h1>{local}</h1>
      <Button variant={"secondary"} onClick={onDecrease} disabled={local === 1} > <Minus size={19} className="cursor-pointer"  /></Button>
    </div>
  );
};

export default Increment;
