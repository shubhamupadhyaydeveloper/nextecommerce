import mongoose, { Schema, Types, Model } from "mongoose";
import { TorderItemModel } from "@/types/model";

const orderItemSchema = new Schema<TorderItemModel>({
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  quantity : {
    type : Number,
    required : true
  },
  img : {
    type : String,
    default : ''
  }
},{timestamps : true});

const orderItemModel:Model<TorderItemModel> = mongoose.models.OrderItem || mongoose.model('OrderItem',orderItemSchema)
export default orderItemModel