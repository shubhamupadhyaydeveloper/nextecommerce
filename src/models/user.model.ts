import mongoose,{Model} from "mongoose";
import { TuserSchema } from "@/types/types";

const userSchema = new mongoose.Schema<TuserSchema>({
    username : {
        type : String,
        requried : [true,'username is required']
    },
    email :  {
        type : String,
        required : [true,'email is required']
    },
    password : {
        type : String,
        required : [true,'password is required'],
        minLength : [4,'alteast 4 digit']
    },
    orders : {
        type : [mongoose.Schema.Types.ObjectId],
        ref : 'Order'
    }
},{timestamps : true})

const User:Model<TuserSchema> = mongoose.model('User',userSchema)
export default  User;