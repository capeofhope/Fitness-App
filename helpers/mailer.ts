import User from '@/models/userModel';
import bcryptjs from 'bcryptjs';
import nodemailer from 'nodemailer';

export const sendEmail=async({email,emailType,userId}:any)=>{
    try{
        //TODO: configure mail for usage
        const hashedToken=await bcryptjs.hash(userId.toString(),10);
        if(emailType==='VERIFY'){
            await User.findByIdAndUpdate(userId,{
                verificationToken:hashedToken,
                verificationTokenExpiry:Date.now()+3600000,
            })
        }else if(emailType==='RESET'){
            await User.findByIdAndUpdate(userId,{
                resetPasswordToken:hashedToken,
                resetPasswordTokenExpiry:Date.now()+3600000,
            })
        }
        const transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "1428c13b8eb40e",
              pass: "4c4c99b067ab5a"
            }
          });
          const mailOption={
            from:process.env.SENDER_MAIL,
            to:email,
            subject: emailType==='VERIFY'?"Verify your email":"Reset your password", // Subject line
            html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to ${emailType==="VERIFY"?"verify your email":"reset your password"} or copy and paste the link below in your browser.<br><a>${process.env.DOMAIN}/verifyemail?token=${hashedToken}</a></p>`, // html body
          }
          const mailResponse=await transport.sendMail(mailOption);
          return mailResponse;
    }catch(err:any){
        throw new Error("Error in sending email",err);
    }
}