import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger><Menu /></SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="mt-4">Nikee</SheetTitle>
          <SheetDescription>
            <div className="flex justify-between h-[90vh] flex-col">
            <div className="flex flex-col gap-1">
                <div className="flex items-start gap-5 ">
               <ShoppingCart />
                <Link href="/cart" ><h1 className="text-center">cart</h1></Link>
                </div>
            </div>
            <Button >logout</Button>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
