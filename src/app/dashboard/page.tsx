"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const Dashboard = () => {
  return (
    <MaxWidthWrapper classname="mt-[10vh] mb-[5vh] overflow-hidden lg:mb-[20vh] md:mb-[7vh]">
      <div>
        <h1 className="font-bold text-xl">Create New Item</h1>
        <form action="" className="flex flex-col gap-3 mt-5">
          <div>
            <Label htmlFor="file">Image</Label>
            <Input
              type="file"
              name="imgLink"
              id="file"
              className="h-[10vh] cursor-pointer text-center p-5 w-[100vw]  md:w-[30vw] border rounded-lg"
            />
          </div>

          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              type="text"
              id="title"
              name="title"
              placeholder="enter title"
              className="border p-2 rounded-lg w-[100vw] md:w-[30vw]"
            />
          </div>
          <div>
            <Label htmlFor="price">Price</Label>
            <Input
              type="number"
              name="price"
              min={1}
              id="price"
              placeholder="enter price"
              className="border p-2 rounded-lg w-[100vw]  md:w-[30vw]"
            />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              name="description"
              id="description"
              placeholder="enter description"
              className="border p-2 rounded-lg w-[100vw]  md:w-[30vw]"
            />
          </div>
          <div>
            <Label htmlFor="sizes" className="font-bold text-lg">
              Sizes
            </Label>
            <div className="flex flex-wrap gap-2">
              <div>
                <Label htmlFor="small">Small</Label>
                <Input
                  type="number"
                  id="small"
                  name="small"
                  placeholder="small"
                  className="w-[20vw] md:w-[10vw]"
                />
              </div>
              <div>
                <Label htmlFor="medium">Medium</Label>
                <Input
                  type="number"
                  id="medium"
                  name="medium"
                  placeholder="medium"
                  className="w-[20vw] md:w-[10vw]"
                />
              </div>
              <div>
                <Label htmlFor="large">Large</Label>
                <Input
                  type="number"
                  id="large"
                  name="large"
                  placeholder="large"
                  className="w-[20vw] md:w-[10vw]"
                />
              </div>
              <div>
                <Label htmlFor="xlarge">x-Large</Label>
                <Input
                  type="number"
                  id="xlarge"
                  name="xlarge"
                  placeholder="xlarge"
                  className="w-[20vw] md:w-[10vw]"
                />
              </div>
            </div>
          </div>
          <div>
            <Label htmlFor="quantity">Total Quantity</Label>
            <Input
              type="number"
              name="quantity"
              id="quantity"
              min={1}
              placeholder="enter quantity"
              className="border p-2 rounded-lg w-[100vw] md:w-[30vw]"
            />
          </div>

          <Button type={"submit"} className="w-[20vw] md:w-[10vw] mt-4">
            save
          </Button>
        </form>
      </div>
    </MaxWidthWrapper>
  );
};

export default Dashboard;
