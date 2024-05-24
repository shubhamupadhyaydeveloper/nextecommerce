import { connectToMongoose } from "@/helper/connect"
import sendEmail from "@/lib/sendEmail"
import userModel from "@/models/user.model"
import bcrypt from 'bcryptjs'

// connect to mongodb
connectToMongoose()

// signUp apiResponse

export async function POST(req : Request) {
  try {
    const {username ,email , password} = await req.json()

    if(!username || !email || !password) return Response.json({error : "credentials is missing"},{status : 400})

    const user = await userModel.findOne({email : email , isVerified : true})
    if(user) return Response.json({error : "user already exist"},{status : 409})

    // user find by email
    const userFindWithEmail = await userModel.findOne({email : email, isVerified  : false})
    
    const hashedPassword = await bcrypt.hash(password , 10);
    const codeGenerator = ():string => {
        return Math.floor(100000 + Math.random() * 900000).toString();
    };
    const codeExpiry = new Date();
    codeExpiry.setHours(codeExpiry.getHours() + 1)

    if(userFindWithEmail) {
        userFindWithEmail.password = hashedPassword
        userFindWithEmail.verifyCode = codeGenerator()
        userFindWithEmail.verifyCodeExpiry = codeExpiry
        userFindWithEmail.username = username
        await userFindWithEmail.save()
        
        sendEmail({username , email , code : userFindWithEmail.verifyCode});
        return Response.json({message : "user updated successful",user : userFindWithEmail}, {status : 201})
    }
    

    const newUser = await userModel.create({
        username,
        email,
        password : hashedPassword,
        verifyCode : codeGenerator(),
        verifyCodeExpiry : codeExpiry,
    })
    await newUser.save();
    
    sendEmail({username , email , code : codeGenerator()});

    return Response.json({message : "user created successful",user : newUser}, {status : 201})
    
  } catch (error:any) {
    console.log("error in signup",error)
    return Response.json({error : "error in signup"})
  }
}