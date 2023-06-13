import React from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import Link from 'next/link'
import Cardio from '../../../public/assets/images/cardio.jpg'
import Yoga from '../../../public/assets/images/yoga.jpg'
import Stretch from '../../../public/assets/images/stretch.jpg'
import NoEquipment from '../../../public/assets/images/no-equipments.jpg'

export default function Varities() {
  const data=[
    { 
      name:"Cardio",  
      image:Cardio,
    },
    {
      name:"Yoga",  
      image:Yoga,
      link:"/services/service-3"
    },
    {
      name:"Stretch",  
      image:Stretch
    },
    {
      name:"No Equipments",  
      image:NoEquipment
    }
  ] 
  const settings={
    dots:false,
    infinite:true,
    slidesToShow:3,
    slidesToScroll:2,
    autoplay:true,
    speed:1800,
    pauseOnHover:true
  }
  return (
    <section>
      <div className='mx-auto'>
         <div className='py-20 px-10 text-center bg-gradient-to-r from-[#220024] via-[#630869] to-[#8800ff] text-[#FFFFFF]'>
           <h2 className='font-[600] text-[45px]'>Different Variety</h2>
           <p className='font-inter font-[400] text-[26px] mt-[20px]'>Never get bored. Get results with short & effective workouts you can do anywhere.</p>

           <Slider {...settings}>
             {data.map((items,i)=>(
                  <div className='w-1/3 pr-5 cursor-pointer mt-10'>
                   {/* <div className='h-[300px]' style={{backgroundImage:`url('${items.image}')`}}>Cardio </div>   */}
                   <Link href='/services/service-3' className='outline-none'>
                     <Image src={items.image} alt="exercise images" className='h-[300px] rounded-[20px]'/>
                   </Link>
                   <p className="font-oswald font-[400] text-[24px] mt-5">{items.name}</p>
                  </div>
              ))}
           </Slider>
         </div>
      </div>
    </section>
  )
}
