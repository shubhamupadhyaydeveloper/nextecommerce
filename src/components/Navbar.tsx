"use client";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const token = useSession();
  console.log(token);

  return (
    <div className="fixed z-[10] inset-x-0 top-0 w-full border-b border-gray-200 bg-white/45 backdrop-blur-md transition-all p-3">
      <MaxWidthWrapper classname="text-black flex items-center justify-between">
        <h1 className="font-extrabold text-2xl">
          <Link href="/">Nikee</Link>
        </h1>
        <div className="md:hidden">
          <MobileNavbar />
        </div>
        <div className="hidden md:flex gap-1 md:gap-5">
          <div className="flex items-center cursor-pointer relative">
            <Link href="/cart">
              <ShoppingCart />
            </Link>
            <div className="flex items-center absolute top-1 left-4 justify-center rounded-full w-[20px] h-[20px] text-white bg-blue-500">
            <h1 className="text-sm text-center">0</h1>
            </div>
          </div>
          {token?.data?.user?.isAdmin === true ? (
            <Button variant={"outline"}>
              <Link href={"/dashboard"}>Dashboard</Link>
            </Button>
          ) : null}
          {token?.status === "authenticated" ? (
            <Button onClick={() => signOut()}>logout</Button>
          ) : (
            <Button>
              <Link href="/sign-in">login</Link>
            </Button>
          )}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Navbar;
