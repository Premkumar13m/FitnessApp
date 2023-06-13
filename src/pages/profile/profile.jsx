import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import userIcon from '../../../public/assets/images/user-icon.png'
import graph from '../../../public/assets/images/graph1.png'
import calorieIcon from '../../../public/assets/images/calories-icon.png'
import achievement from '../../../public/assets/images/achievement-icon.png'

export default function Profile() {
  const [profile,setProfile]=useState();
  return (
    <section>
      <div className="container mx-auto px-10 py-10">
         <div className="flex justify-center">
           <div className="flex flex-col items-center">
             <Image src={userIcon} alt="profile image" className="h-[100px] w-[100px]"/>  
             <h1 className="font-oswald font-[600] text-[32px] mt-5">Hello User</h1>
           </div>
         </div>
         <div className="flex justify-center mt-3">
            <button className="border-2 border-[#4a4a4a] p-2 px-4 rounded-[30px] hover:bg-blue-800 hover:text-[white] font-inter font-[400] text-[18px]">Update Profile</button> 
         </div>
         
 
         <div className="mt-10">
           <h2 className="font-oswald font-[600] text-[22px]">My Statistics</h2>
           <div className="md:flex gap-4 mt-10">
              <div className="md:w-1/3 flex flex-col items-center border-2 border-[#FF4a5f] rounded-[20px] py-5 hover:bg-[#FF4A5F] hover:text-[#FFFF]">
               <Image src={graph} alt='graph' className="h-[50px] w-[70px]"/>
               <p className="font-inter font-[600] text-[18px] mt-4">00 Workouts Total</p>
              </div>
              <div className="md:w-1/3 md:mt-0 mt-5 flex flex-col items-center border-2 border-[#FF4a5f] rounded-[20px] py-5">
               <Image src={calorieIcon} alt="calorie icon" className="h-[50px] w-[40px]"/>
               <p className="font-inter font-[600] text-[18px] mt-4">00 Calories Burnt Today</p> 
              </div> 
              <div className="md:w-1/3 md:mt-0 mt-5 flex flex-col items-center border-2 border-[#FF4a5f] rounded-[20px] py-5">
                <Image src={achievement} alt="achievements-icon icon" className="h-[50px] w-[50px]"/>
                <p className="font-inter font-[600] text-[18px] mt-4">Achievements</p> 
              </div>
            </div>   
         </div>
      </div>
    </section>
  )
}
