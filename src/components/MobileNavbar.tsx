import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { signOut } from "next-auth/react";

const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="mt-4">
            <Link href="/">
              <SheetClose asChild>
                <h1 className="text-center font-bold text-2xl">Nikee</h1>
              </SheetClose>
            </Link>
          </SheetTitle>
          <SheetDescription>
            <div className="flex justify-between h-[85vh] flex-col mt-5">
              <div className="flex flex-col items-center gap-1">
                <Separator className="w-[50vw] md:w-[15vw]" />
                <div className="flex gap-4 items-center justify-center mt-2 ">
                  <div className="flex items-center cursor-pointer relative">
                    <Link href="/cart">
                      <ShoppingCart />
                    </Link>
                    <div className="flex items-center absolute top-0 left-4 justify-center rounded-full w-[20px] h-[20px] text-white bg-blue-500">
                      <h1 className="text-sm text-center">0</h1>
                    </div>
                  </div>
                  <Link href="/cart">
                    <SheetClose asChild>
                      <h1 className="text-center font-medium text-2xl">cart</h1>
                    </SheetClose>
                  </Link>
                </div>
                <Separator className="w-[50vw] md:w-[15vw]" />
                <div className="flex gap-4 items-center justify-center mt-2 ">
                  <ShoppingCart />
                  <Link href="/cart">
                    <SheetClose asChild>
                      <h1 className="text-center font-medium text-2xl">cart</h1>
                    </SheetClose>
                  </Link>
                </div>
                <Separator className="w-[50vw] md:w-[15vw]" />
              </div>
              <Button onClick={() => signOut()}>logout</Button>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
