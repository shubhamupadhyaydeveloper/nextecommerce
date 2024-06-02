"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createNewProduct } from "./action";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";

const Dashboard = () => {
  const [error, action] = useFormState(createNewProduct, {});

  return (
    <MaxWidthWrapper classname="mt-[10vh] mb-[5vh] overflow-hidden lg:mb-[20vh] md:mb-[7vh]">
      <div>
        <h1 className="font-bold text-xl">Create New Item</h1>
        <form action={action} className="flex flex-col gap-3 mt-5">
          <div>
            <Label htmlFor="file">Image</Label>
            <Input
              type="file"
              name="image"
              multiple
              id="image"
              className="h-[10vh] cursor-pointer text-center p-5 w-[100vw] md:w-[35vw] lg:w-[30vw] border rounded-lg"
            />
            {error?.image && <h1 className="text-red-500">{error?.image}</h1>}
          </div>

          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              type="text"
              id="title"
              name="title"
              placeholder="enter title"
              className="border p-2 rounded-lg w-[100vw] md:w-[35vw] lg:w-[30vw]"
            />
            {error?.title && <h1 className="text-red-500">{error?.title}</h1>}
          </div>
          <div>
            <Label htmlFor="price">Price</Label>
            <Input
              type="number"
              name="price"
              min={1}
              id="price"
              placeholder="enter price"
              className="border p-2 rounded-lg w-[100vw] md:w-[35vw] lg:w-[30vw]"
            />

            {error?.price && <h1 className="text-red-500">{error?.price}</h1>}
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              name="description"
              id="description"
              placeholder="enter description"
              className="border p-2 rounded-lg w-[100vw] md:w-[35vw] lg:w-[30vw]"
            />
            {error?.description && (
              <h1 className="text-red-500">{error?.description}</h1>
            )}
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
                  className="w-[20vw] md:w-[15vw] lg:w-[10vw]"
                />
              </div>
              <div>
                <Label htmlFor="medium">Medium</Label>
                <Input
                  type="number"
                  id="medium"
                  name="medium"
                  placeholder="medium"
                  className="w-[20vw] md:w-[15vw] lg:w-[10vw]"
                />
              </div>
              <div>
                <Label htmlFor="large">Large</Label>
                <Input
                  type="number"
                  id="large"
                  name="large"
                  placeholder="large"
                  className="w-[20vw] md:w-[15vw] lg:w-[10vw]"
                />
              </div>
              <div>
                <Label htmlFor="xlarge">x-Large</Label>
                <Input
                  type="number"
                  id="xlarge"
                  name="xlarge"
                  placeholder="xlarge"
                  className="w-[20vw] md:w-[15vw] lg:w-[10vw]"
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
              className="border p-2 rounded-lg w-[100vw] md:w-[35vw] lg:w-[30vw]"
            />
            {error?.quantity && (
              <h1 className="text-red-500">{error?.quantity}</h1>
            )}
          </div>
          <div>
            <Label htmlFor="rating">Rating</Label>
            <Input
              type="number"
              name="rating"
              id="rating"
              min={1}
              placeholder="enter rating"
              className="border p-2 rounded-lg w-[100vw] md:w-[35vw] lg:w-[30vw]"
            />
            {error?.quantity && (
              <h1 className="text-red-500">{error?.rating}</h1>
            )}
          </div>
          <SubmitButton />
        </form>
      </div>
    </MaxWidthWrapper>
  );
};

export default Dashboard;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type={"submit"}
      className="w-[20vw] md:w-[10vw] mt-4"
      disabled={pending}
    >
      {pending ? "saving..." : "save"}
    </Button>
  );
}
