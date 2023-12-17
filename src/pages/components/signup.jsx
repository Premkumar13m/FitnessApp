import React, { useState } from 'react'
import Header from './header'
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Signup() {
  const[name,setName]=useState();
  const[gender,setGender]=useState();
  const[email,setEmail]=useState();
  const[password,setPassword]=useState();
  const router=useRouter()

  const handleRegister=async()=>{
    let result=await fetch('http://localhost:5000/register',{
      method:'post',
      body:JSON.stringify({name,gender,email,password}),
      headers:{
        'Content-Type':'application/json'
      }
    });
    result=await result.json();
    console.warn(result)
    if(name!=null && email!=null && gender!=null && password!=null){
      localStorage.setItem('user',JSON.stringify(result))
      alert('Account created successfully!')
      router.push("/components/login")
    }
    else{
      alert('Please fill out the above fields')
    }
    //console.log(name,gender,email,password)
  }

  return (
    <>
    <Header/>
    <section className="flex items-center h-[90vh]">
      <div className="mx-auto px-10 w-[600px] border-2 border-[#FF4A5F] rounded-[12px] p-4 font-inter font-[400] text-[18px]">
        <h2 className="font-oswald font-[600] text-[30px] text-center">Sign Up</h2>
        <div className="flex flex-col mt-10 gap-5">
          <input type="text" name="Name" value={name} id="Name" onChange={(e)=>setName(e.target.value)} placeholder="Enter Your Name" className="outline-none border-b-2 border-[#D9D9D9]" />
          <select name="Gender" id="" value={gender} onChange={(e)=>setGender(e.target.value)} className="outline-none border-b-2 border-[#D9D9D9]">
            <option value="Select">Select Your Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
          <input type="email" name="Email" value={email} id="Email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Your Email" className="outline-none border-b-2 border-[#D9D9D9]"/>
          <input type="password" name="Password" value={password} id="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Your Password" className="outline-none border-b-2 border-[#D9D9D9]"/>
          <div className="mt-7">
             <button type="submit" onClick={handleRegister} className="text-[#FFFFFF] w-full rounded-[20px] py-2 bg-[#E41B17] hover:bg-[#228B22]">Submit</button>
          </div>
        </div>
      </div>  
    </section>
    </>
  )
}
