import { resend } from '@/helper/resend'
import EmailTemplate from './emailTemplate'

type Apiresponse = {
    message : string,
    success : boolean
}

type Props = {
    username : string,
    email : string,
    code : string
}

export const sendEmail = async ({username,email,code}:Props) : Promise<Apiresponse> => {
    try {
        await resend.emails.send({
            from: 'Nikee <donotreply@shubhamupadhyay.online>',
            to: email,
            subject: 'Signup Verificaiton Code',
            react:  EmailTemplate({username , otp: code}),
          });
         return {message : 'email sended to user',success : true}
    } catch (error:any) {
        console.log('error in sendEmail')
        throw new Error(error)
    }
    
}

export default sendEmail;