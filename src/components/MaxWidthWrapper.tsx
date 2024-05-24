import { cn } from "@/lib/utils";
import React from "react";

type Prop = {
  classname: string;
  children: React.ReactNode;
};

const MaxWidthWrapper = ({ classname, children }: Prop) => {
  return (
    <div
      className={cn(
        "h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
        classname
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
