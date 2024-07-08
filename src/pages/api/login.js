import mongoose from "mongoose";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
import { connectionSrt } from "@/pages/database/db";
import { User } from "@/schemas/userModal";

export async function handler(request,res){
    if(request.method==='POST'){
    try {
        const payload=await request.json();
        const {email,password}=payload;
        await mongoose.connect(connectionSrt)

        if(!email || !password){
            return res.json({result:"Please fill all the required fields",status:400,success:false})
        }
        const user = await User.findOne({email})
        if(!user){
            return res.json({result:"User doesn't exists",status:400,success:false})
        }
        const validPassword = await bcryptjs.compare(password,user.password)
        if(!validPassword){
            return res.json({result:"Invalid password",status:400,success:false})
        }
        const tokenData={
            userId:user._id,
            email:user.email
        }
        const token=jwt.sign(tokenData,process.env.JWT_SECRET_KEY,{expiresIn:84600})

        const response= res.json({result:"Login successfull",success:true})
        response.cookies.set('token',token,{httpOnly:true})
        return response;

    } catch (error) {
        console.log("Error",error);
        return res.json("something went wrong",{success:false,status:500})
    }}
}