import mongoose,{Model} from "mongoose";
import { Tproduct } from "@/types/types";

const productSchema = new mongoose.Schema<Tproduct>({
    name : {
        type : String,
        required : [true,'name is required']
    },
    priceInCents : {
        type  : Number,
        required : [true,'price is required']
    },
    filePath : {
        type : String,
        required  : [true,'filePath is required']
    },
    imgPath  :  {
        type : String,
        required : [true,'img is requried']
    },
    isAvailableForPurchase : {
        type : Boolean,
        default  : true
    },
    description : {
        type : String,
        required : [true,'description is requried']
    },
    downloadVerification : {
        type : [mongoose.Schema.Types.ObjectId],
        ref  : 'downloadVerifcation'
    }

},{timestamps : true})

const Product:Model<Tproduct> = mongoose.model('Product',productSchema)
export default Product;