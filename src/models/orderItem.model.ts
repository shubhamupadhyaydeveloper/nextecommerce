import mongoose, { Model } from "mongoose";
import { TorderItem } from "@/types/types";

const orderItemSchema = new mongoose.Schema<TorderItem>({
    quantity : {
        type : Number,
        default : 1
    },
    orderId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Order'
    },
    productId : {
        type :  mongoose.Schema.Types.ObjectId,
        ref : 'Product'
    }
},{timestamps : true})

const orderItem:Model<TorderItem> = mongoose.model('orderItem',orderItemSchema)
export default orderItem