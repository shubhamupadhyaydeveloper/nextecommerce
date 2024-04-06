import mongoose,{Model} from "mongoose";
import { TdownloadVerification } from "@/types/types";

const downloadVerificationSchema = new  mongoose.Schema<TdownloadVerification>({
     productId : {
        type : mongoose.Schema.Types.ObjectId,
        ref :  'Product'
     }
},{timestamps :  true})

const downloadVerifcation:Model<TdownloadVerification> = mongoose.model('downloadVerifcation',downloadVerificationSchema)
export default downloadVerifcation