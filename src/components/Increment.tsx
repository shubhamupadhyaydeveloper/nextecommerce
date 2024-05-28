"use client"
import { Minus, Plus } from "lucide-react";
import React, { useCallback, useState } from "react";

const Increment = () => {
  const [quantity, SetQuantity] = useState<number>(1);
  const onIncrease = useCallback(() => {
    SetQuantity(quantity + 1);
  }, [quantity]);

  const onDecrease = useCallback(() => {
    SetQuantity(Math.max(quantity - 1, 1));
  }, [quantity]);

  return (
    <div className="bg-[#F0F0F0] px-2 py-[0.6rem] rounded-full flex items-center gap-2">
      <Plus size={19} className="cursor-pointer" onClick={onIncrease} />
      <h1>{quantity}</h1>
      <Minus size={19} className="cursor-pointer" onClick={onDecrease} />
    </div>
  );
};

export default Increment;
