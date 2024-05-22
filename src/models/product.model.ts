import mongoose ,{Model, Schema} from "mongoose";
import { TproductModel, productSizeEnum } from "@/types/model";

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
    size : {
        type : "String",
        enum : productSizeEnum,
        required : true
    },
    img : {
        type : [String],
        default : []
    },
    quantity : {
        type : Number,
        required : true
    }
},{timestamps : true})

const productModel: Model<TproductModel> = mongoose.models.products || mongoose.model('Product',productSchema)
export default productModel;