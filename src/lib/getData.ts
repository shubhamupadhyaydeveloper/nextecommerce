"use server"
import { connectToMongoose } from "@/helper/connect"
import productModel from "@/models/product.model"

// mongodb connection
connectToMongoose()

export async function getProductDetail(id:string) {
     try {
      const product = await productModel.findById(id).lean();
      return JSON.parse(JSON.stringify(product)); 
     } catch (error:any) {
        console.log("error in getProductDetail action",error)
     }
}