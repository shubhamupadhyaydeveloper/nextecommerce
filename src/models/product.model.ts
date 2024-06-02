import mongoose ,{Model, Schema} from "mongoose";
import { TproductModel,TproductSizes } from "@/types/model";

const productSizeSchema = new Schema<TproductSizes>({
     size :  {
        type : String,
        enum : ["small","medium","large","xlarge"],
        required : true
     },
     quantity : {
        type : Number,
        required : true
     }
})

const productSchema = new Schema<TproductModel>({
    title : {
        type : String,
        required : true,
    },
    price : {
        type : Number,
        required : true
    },
    description : {
        type : String,
        required : true,
    },
    sizes : {
        type : [productSizeSchema],
        required : true
    },
    img : {
        type : [String],
        default : []
    },
    quantity : {
        type : Number,
        required : true
    },
    rating : {
        type : Number
    }
},{timestamps : true})

const productModel: Model<TproductModel> = mongoose.models.Product || mongoose.model('Product',productSchema)
export default productModel;