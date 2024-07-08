import mongoose from "mongoose";

const userModal = new mongoose.Schema({
    name:String,
    gender:String,
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:String,
});

export const User=mongoose.models.users || mongoose.model("users",userModal);