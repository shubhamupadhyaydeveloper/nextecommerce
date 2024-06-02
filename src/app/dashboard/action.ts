'use server'
import { TcreateNewProduct } from "@/types/types"
import { redirect } from "next/navigation";
import cloudinary from "@/lib/cloudinary";
import productModel from "@/models/product.model";
import { TproductModel } from "@/types/model";

export async function createNewProduct(previousState : any ,formdata:FormData) {
   
    const files = formdata.getAll("image").filter(file => file instanceof File && file.size > 0) as File[];
    const validateData = {
        image : files,
        title: formdata.get("title"),
        price: formdata.get("price"),
        description: formdata.get("description"),
        small: formdata.get("small"),
        medium: formdata.get("medium"),
        large: formdata.get("large"),
        xlarge: formdata.get("xlarge"),
        quantity: formdata.get("quantity"),
        rating : formdata.get("rating")
    }

    const result = TcreateNewProduct.safeParse(validateData)
    if(result.error) {
        return result.error.formErrors.fieldErrors
    }

   const uploadedImgUrls = await Promise.all(files.map(async file => {
         const arrayBuffer = await file.arrayBuffer()
         const buffer = new Uint8Array(arrayBuffer)

         return await new Promise((resolve,reject) => {
              cloudinary.uploader.upload_stream({},function (error,result) {
                 if(error) {
                    reject(error)
                    return
                 }
                 resolve(result?.secure_url)
              }).end(buffer)
         })
    }))
     
   try {
     const newProduct = await productModel.create({
        img : uploadedImgUrls,
        title : result.data.title,
        description : result.data.description,
        price : result.data.price,
        sizes : [
            {
              size : "small",
              quantity : result.data.small
            },
            {
              size : "medium",
              quantity : result.data.medium
            },
            {
              size : "large",
              quantity : result.data.large
            },
            {
              size : "xlarge",
              quantity : result.data.xlarge
            }
        ],
     quantity : result.data.quantity,
     rating : result.data.rating
     })
     newProduct.save()
     console.log("product created successfully")
   } catch (error:any) {
      console.log(error)
   }
}