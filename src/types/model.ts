import { Document, Types } from "mongoose";

//usermodel

export type TuserModel = Document & {
  username: string;
  email: string;
  password: string;
  isVerified: boolean;
  verifyCode: string;
  verifyCodeExpiry: Date;
  orders: [Types.ObjectId];
  isAdmin: boolean;
};

// productmodel
export type Tsizes = "small" | "medium" | "large" | "xlarge"

export type TproductSizes = {
    size : Tsizes,
    quantity : number
}

export enum orderStatus {
  waiting = "waiting",
  fulfilled = "fulfilled",
  shipped = "shipped",
}

export enum orderPayment {
   pending = "pending",
   completed = "completed"
}

export type TproductModel = Document & {
  title: string;
  price : number;
  size: TproductSizes[];
  description: string;
  img: [String];
  quantity  : number;
};

export type TreviewModel = Document & {
  content: string;
  rating : number;
  username: string;
  userId: Types.ObjectId;
  productId: Types.ObjectId;
};

export type TorderItemModel = Document & {
  orderId: Types.ObjectId;
  quantity : number;
  productId: Types.ObjectId;
  productName: string;
  img: string;
  price : number;
};

export type TorderModel = Document & {
  userId: Types.ObjectId;
  status: orderStatus;
  shippingAddress: string;
  orderAmount : number;
  payment : orderPayment
};
