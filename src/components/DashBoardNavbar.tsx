"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Separator } from "./ui/separator";

type Links = {
  name: string;
  path: string;
};

const DashBoardNavbar = () => {
  const pathname = usePathname();
  const currentPath = pathname.split("/")[2];

  const navItems: Links[] = [
    { name: "Create Item", path: "" },
    { name: "All product", path: "allproduct" },
    { name: "Orders", path: "orders" },
  ];

  return (
    <div className="mt-[10vh] overflow-hidden">
      <div className="md:flex md:flex-col hidden md:w-[20vw] xl:w-[10vw] md:items-start border-r-[2px] border-black">
        {navItems.map((item) => (
          <div className="flex flex-col gap-2" key={item.name}>
          <h1
            key={item.path}
            className={`font-medium p-2 mt-2 rounded-lg hover:bg-black hover:text-white ${
              item.path === currentPath ? "bg-black text-white" : ""
            }`}
          >
            <Link href={`/dashboard/${item.path}`}>{item.name}</Link>
          </h1>

          <Separator />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashBoardNavbar;
