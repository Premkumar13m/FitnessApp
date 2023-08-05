import React,{useState} from 'react'
import Image from 'next/image'
import bgImg from '../../../public/assets/images/diet-plan.jpg'
import Header from '../components/header'
import Footer from '../components/footer'
import Service1 from './service-1'
import officeYoga from './office-yoga'
import Vegetarian from './dietplan/vegetarian'
import Link from 'next/link'
import vegweeklyPlan from './dietplan/vegweeklyplan'
import nonVegWeekly from './dietplan/nonvegweekly'
import underVeg from './dietplan/underveg'
import underNonVeg from './dietplan/undernon-veg'
import overVeg from './dietplan/overveg'
import overNonVeg from './dietplan/overnonveg'
import underVeghome from './dietplan/underveghome'
import underNonVeghome from './dietplan/undernonveghome'
import nonVegetarian from './dietplan/non-vegetarian'
import overveghome from './dietplan/overveghome'
import overNonVeghome from './dietplan/overnonveghome'

export default function dietPlan() {
  const[Bmi, setBmi]=useState();
  const[Age, setAge]=useState();
  const[Gender, setGender]=useState();
  const[Veg, setVeg]=useState();
  const[Nonveg, setNonveg]=useState();
  const[dietplan,setDietplan]=useState();
  const[type,setType]=useState();
  const[data,setData]=useState();
  const[color,setColor]=useState();

  const handleType=()=>{
    if(Bmi<18.5 && Veg){
      setType(underVeg)
    }
    if(Bmi<18.5 && Nonveg){
      setType(underNonVeg)
    }
    if(Bmi>18.5 && Bmi<24.9 && Veg){
      setType(vegweeklyPlan)
    }
    if(Bmi>18.5 && Bmi<24.9 && Nonveg){
      setType(nonVegWeekly)
    }
    if(Bmi>24.9 && Bmi<30 && Veg){
      setType(overVeg)
    }
    if(Bmi>24.9 && Bmi<30 && Veg){
      setType(overNonVeg)
    }
    if(Bmi>=30 && Veg){
      setType(overVeg)
    }
    if(Bmi>=30 && Nonveg){
      setType(overNonVeg)
    }
  }

  const Diet=()=>{
    if(Bmi<18.5 && Age>20 && Veg)
    {
      setData("You need to gain weight");
      setColor("#FFBF00")
      setDietplan(underVeghome);
    }
    if(Bmi<18.5 && Age>20 && Nonveg)
    {
      setData("You need to gain weight");
      setColor("#FFBF00")
      setDietplan(underNonVeghome);
    }
    if(Bmi>18.5 && Bmi<24.9 && Age>20 && Veg)
    {
      setData("You are healthy follow these diet to remain same");
      setColor('#4F7942')
      setDietplan(Vegetarian);
    }
    if(Bmi>18.5 && Bmi<24.9 && Age>20 && Nonveg)
    {
      setData("You are healthy fooow these diet to remain same");
      setColor('#4F7942')
      setDietplan(nonVegetarian);
    }
    if(Bmi>24.9 && Bmi<30 && Age>20 && Veg)
    {
      setData("You need to reduce weight");
      setColor("#FF5F14")
      setDietplan(overveghome);
    }
    if(Bmi>24.9 && Bmi<30 && Age>20 && Nonveg)
    {
      setData("You need to reduce weight");
      setColor("#FF5F14")
      setDietplan(overNonVeghome);
    }
    if(Bmi>=30 && Age>20 && Veg)
    {
      setData("You strictly need to reduce weight");
      setColor("#FF5F14")
      setDietplan(overveghome);
    }
    if(Bmi>=30 && Age>20 && Nonveg)
    {
      setData("You strictly need to reduce weight");
      setColor("#FF5F14")
      setDietplan(overNonVeghome);
    }

  }

  return (
    <section>
      <Header/>
      <div className=' bg-cover bg-no-repeat min-h-[90vh]' style={{backgroundImage:`url('${bgImg.src}')`}}>
       <div className='mx-auto px-10 flex min-h-[90vh] justify-center items-center' >
         <div className="flex flex-col gap-6 min-w-[500px] p-2 rounded-[20px] backdrop-blur-sm font-inter font-[400] text-[20px] shadow-xl">
           <h2 className='font-oswald font-[600] text-[24px] text-[#900C3F]'>Get Your Diet Plan By Answering Just Simple Questions</h2>
           <input type="text"
             onChange={(e) => setBmi(e.target.value)}
             placeholder="Enter your BMI" 
             id="bmi" 
             className='placeholder-[#121212] outline-none bg-transparent border-b-2 border-[#D9D9D9]'
            />
           <select name="Gender"
             onChange={(e) => setGender(e.target.value)} id="gender" className="outline-none bg-transparent border-b-2 border-[#D9D9D9]">
             <option value="Select">Select Your Gender</option>
             <option value="Male">Male</option>
             <option value="Female">Female</option>
             <option value="Others">Others</option>
           </select>
           <input type="text"
             onChange={(e) => setAge(e.target.value)}
             placeholder='Enter your Age' 
             id="age" className='placeholder-[#121212] outline-none bg-transparent border-b-2 border-[#D9D9D9]'
            />
           <div className="flex justify-between px-5">
            <button id="veg" onClick={setVeg} className='w-[180px] rounded-[30px] active:bg-[#4cbb17] py-1 border-2 border-slate-600 hover:bg-[#4CBB17] hover:text-[#ffffff] shadow-xl'>Vegetarian</button>
            <button id="nonveg" onClick={setNonveg} className='w-[180px] rounded-[30px] py-1 border-2 border-slate-600 hover:bg-[#C70039] hover:text-[#ffffff] shadow-xl'>Non-Vegetarian</button>
           </div>
           <button type="submit" onClick={Diet} className=' rounded-[30px] px-5 py-1 border-2 border-slate-600 hover:bg-[#E4D00A] hover:text-[#ffffff] shadow-xl'>Submit</button>

           <div className='font-inter font-[400] text-[24px]'>
             <div className='text-[#ffffff] text-center' style={{backgroundColor:color}}>{data}</div>
             {dietplan}
           </div>
           <div className='text-[#ffffff] text-center font-[600]'>For complete diet-plan Click <button type='submit' onClick={handleType}><span className='text-blue-600'>here</span></button></div>
           <div>
             {type}
           </div>
         </div>
       </div>
      </div>
      <Footer/>
    </section>
  )
}
