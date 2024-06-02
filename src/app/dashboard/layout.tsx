import DashBoardNavbar from "@/components/DashBoardNavbar";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Separator } from "@/components/ui/separator";
import React from "react";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <MaxWidthWrapper classname="flex overflow-hidden">
        <div className="md:flex-1">
          <DashBoardNavbar />
        </div>
        <div className="flex-[3]">{children}</div>
    </MaxWidthWrapper>
  );
};

export default DashBoardLayout;
