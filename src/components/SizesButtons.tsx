"use client"
import React, { useState } from "react";
import { Button } from "./ui/button";

const SizesButtons = () => {
  const [sizeValue, SetSizeValue] = useState<string>("");
  const sizesArray = ["small", "medium", "large", "x-large"];
  return (
    <div className="flex gap-2 mt-3 flex-wrap border-b-2 pb-4">
      {sizesArray.map((item) => (
        <Button
          key={item}
          onClick={() => SetSizeValue(item)}
          variant={"outline"}
          className={`${
            sizeValue === item && "bg-black text-white"
          } rounded-full`}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default SizesButtons;
