import mongoose,{Model}  from "mongoose";
import { Torder } from "@/types/types";

const orderSchema = new mongoose.Schema<Torder>({
    userId :  {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    orderItem :  {
        type : [mongoose.Schema.Types.ObjectId],
        ref : 'orderItem'
    }
},{timestamps : true})

const Order:Model<Torder> = mongoose.model('Order',orderSchema)
export default Order