import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToMongoose } from "@/helper/connect";
import userModel from "@/models/user.model";
import bcrypt from 'bcryptjs'
import GitHubProvider from "next-auth/providers/github";

// connect database
connectToMongoose();

export const nextOptions:NextAuthOptions = {
    providers : [
       GitHubProvider({
        clientId : process.env.CLIENT_ID as string,
        clientSecret : process.env.CLIENT_SECRET as string
       }),
       CredentialsProvider({
           id : "credential",
           name : "Credentials",
           credentials : {
             email : {label : "email", type : "text", placeholder : "enter your email here"},
             password : {label : "password", type : "text", placeholder :"enter your password"}
           },
           async authorize(credential : any) : Promise<any> {
             try {
               const user = await userModel.findOne({email : credential?.email})
               if(!user) {
                 throw new Error("user is not found with this email")
               }

               const isPasswordCorrect = await bcrypt.compare(user.password , credential?.password)

               if(!isPasswordCorrect) {
                throw new Error("password is not correct try again")
               }
               
               if(user && isPasswordCorrect) {
                  return user;
               }    
             } catch (error:any) {
                console.log('error in login in next-auth')
                throw new Error(error)
             }
           }
       }),
       
     ],
     callbacks : {
        async jwt({user,token}) {
            if(user) {
               token._id = user._id,
               token.email = user.email,
               token.isAdmin = user.isAdmin,
               token.isVerified = user.isVerified,
               token.username = user.username
            }
            return token;
        },
        async session({session,token}) {
           if(token) {
             session.user._id = token._id,
             session.user.isVerified = token.isVerified,
             session.user.isAdmin = token.isAdmin,
             session.user.username = token.username
           }
           return session;
        }
     },
     secret : process.env.NEXT_SECRET,
     pages : { 
      signIn : "signin"
     },
     session : {
      strategy : 'jwt'
     }
} 
