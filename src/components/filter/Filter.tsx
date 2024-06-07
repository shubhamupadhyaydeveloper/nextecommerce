"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import React from "react";
import {Slider} from 'antd'
import { usePathname, useSearchParams ,useRouter} from "next/navigation";
import { Input } from "../ui/input";

const Filter = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const  {replace}  = useRouter()
  const [minValue,SetMinValue] = React.useState<any>(searchParams.get("min"))
  const [maxValue,SetMaxValue] = React.useState<any>(searchParams.get("max"))

  const handleSliderChange = (value?:number[]) => {
     const params = new URLSearchParams(searchParams)
     params.set("min", value![0].toString())
     SetMinValue(value![0])
     params.set("max", value![1].toString())
     SetMaxValue(value![1])
     replace(`${pathname}?${params.toString()}`)
  }

  return (
    <>
      <h1 className="text-[30px] font-semibold mb-10">Filters</h1>
      <Separator />
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="py-1">
          <AccordionTrigger className="text-sm font-bold">
            Price
          </AccordionTrigger>
          <AccordionContent className="mt-5 mx-2">
             <Slider 
              max={1000}
              min={0}
              step={10}
              range
              className=""
              defaultValue={[0,999]}
              onChange={handleSliderChange}
             />
             <div className="flex w-[20vh] gap-3 items-center">
                <Input value={minValue} placeholder="0" name="min" />
                 <h1 className="text-md font-normal text-center">to</h1>
                <Input value={maxValue} placeholder="999" name="max"/>
             </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="py-1">
          <AccordionTrigger className="text-sm font-bold">
            Size
          </AccordionTrigger>
          <AccordionContent>
             
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default Filter;
