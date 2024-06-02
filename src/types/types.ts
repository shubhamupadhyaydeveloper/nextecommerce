import { z } from "zod";
import { TproductSizes } from "./model";

// signup

export const TsignUp = z.object({
  username: z
    .string()
    .regex(/^[a-zA-Z]+$/, { message: "number not allowed" })
    .min(2, { message: "atleast 2 letter are required" }),
  email: z.string().email({ message: "email is required" }),
  password: z.string().min(4, { message: "password atleast 4 char" }),
});

//signin

export const TsignIn = z.object({
  email: z.string().email({ message: "email is required" }),
  password: z.string().min(4, { message: "password atleast 4 char" }),
});

// verify code

export const TverifyCode = z.object({
  code: z.number(),
});

export type Tproduct = {
  _id: string;
  title: string;
  price: number;
  description: string;
  size: string;
  sizeStock : number;
  img: string;
  quantity: number;
};

export const TcreateNewProduct = z.object({
  image: z
    .array(
      z
        .instanceof(File, { message: "image is required" })
        .refine((file) => file.size <= 1 * 1024 * 1024, {
          message: "one of files size greater than 1mb",
        })
        .refine((file) => file.size > 0 , {message : "image is empty"})
    ).min(1,"image is required"),
  title: z.string().min(1, { message: "title is required" }),
  price: z.coerce.number().min(1, { message: "price is required" }),
  description: z.string().min(1, { message: "description is required" }),
  small: z.coerce.number(),
  medium: z.coerce.number(),
  large: z.coerce.number(),
  xlarge: z.coerce.number(),
  quantity: z.coerce.number().min(1, { message: "quantity is required" }),
  rating : z.coerce.number().min(1,{message : "rating is required"})
});
