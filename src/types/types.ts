import {z,} from 'zod';
import { Document } from 'mongoose';

// signup

export const TsignUp = z.object({
    username : z.string().regex(/^[a-zA-Z]+$/).min(2,{message : "atleast 2 letter are required"}),
    email : z.string().email({message : 'email is required'}),
    password : z.string().min(4,{message : 'password atleast 4 char'})
})

//signin

export const TsignIn = z.object({
    email : z.string().email({message : 'email is required'}),
    password : z.string().min(4,{message : 'password atleast 4 char'})
})

// verify code

export const TverifyCode = z.object({
    code : z.number()
})

