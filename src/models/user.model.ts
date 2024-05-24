import mongoose ,{Model,Types,Schema} from "mongoose";
import { TuserModel } from "@/types/model";


const userSchema = new Schema<TuserModel>({
    username : {
        type : String,
        required : true,
        min : 2,
        trim : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        trim : true,
        min : 4,
        required : true
    },
    isVerified : {
        type : Boolean,
        default : false,
    },
    verifyCode : {
        type : String,
        required : true
    },
    verifyCodeExpiry :{
        type : Date,
        required : true
    },
    isAdmin : {
        type : Boolean,
        default : false
    },
    orders : {
        type : [Types.ObjectId],
        ref : 'Order'
    }
},{timestamps : true}) 

const userModel:Model<TuserModel> = mongoose.models.User || mongoose.model('User',userSchema)
export default userModel;