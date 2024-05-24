import userModel from "@/models/user.model";
import { connectToMongoose } from "@/helper/connect";
import { NextRequest } from "next/server"

// mongodb connection
connectToMongoose()

export async function POST(req:NextRequest) {
     try {
        const {otp} = await req.json()

        const alreadyVerified = await userModel.findOne({verifyCode : otp,isVerified : true})
        if(alreadyVerified) return Response.json({message : "user already verified"})
        
        const user = await userModel.findOne({verifyCode : otp!})
        if(!user) return Response.json({error : "user not found"},{status : 404})

        const isNotExpired = new Date(user.verifyCodeExpiry) > new Date()

        if(isNotExpired && user) {
           user.isVerified = true,
           user.verifyCodeExpiry = new Date(0)
           await user.save()

           return Response.json({message : 'user verified successful'},{status : 200})
        }


     } catch (error) {
        
     }
}