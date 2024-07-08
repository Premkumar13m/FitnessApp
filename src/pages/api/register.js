import mongoose from "mongoose"
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs"
import { User } from "@/schemas/userModal";
import { connectionSrt } from "@/pages/database/db";

export async function POST(request){
    try {
        const payload=await request.json();
        const {name,email,password,gender}=payload;
        await mongoose.connect(connectionSrt);

        if(!email || !password || !name){
            return NextResponse.json({result:"Please fill all the fields", status: 400, success:false})
        }
        const isAlreadyExist= await User.findOne({email});
        if(isAlreadyExist){
            return NextResponse.json("User Already Exists",{status:400})
        }

        const salt = await bcryptjs.genSalt(12);
        const hashedPassword = await bcryptjs.hash(password,salt)
        const newUser = new User({ name, email, password: hashedPassword ,gender});
        
        await newUser.save();
        return NextResponse.json({result:"User added Successfully",success:true});
        
    } catch (error) {
        console.log(error,"Error occured while saving");
    }
}