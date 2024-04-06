import mongoose ,{Document} from "mongoose"

export type TuserSchema = Document & {
    username : string,
    email : string,
    password : string,
    orders : mongoose.Schema.Types.ObjectId[]
}

export type Torder = Document & {
   userId : mongoose.Schema.Types.ObjectId,
   orderItem :  mongoose.Schema.Types.ObjectId[]
}

export type TorderItem = Document &  {
    quantity : number,
    productId : mongoose.Schema.Types.ObjectId,
    orderId : mongoose.Schema.Types.ObjectId
}

export type Tproduct = Document & {
    priceInCents  : number,
    name : string,
    filePath : string,
    imgPath : string,
    description : string,
    isAvailableForPurchase : boolean,
    downloadVerification : mongoose.Schema.Types.ObjectId[]
}

export type TdownloadVerification = Document & {
    productId : mongoose.Schema.Types.ObjectId
}
