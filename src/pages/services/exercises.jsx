import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Begineers from '../../../public/assets/images/begineers.jpg'
import Inter from '../../../public/assets/images/intermediate.jpg'
import HighLevel from '../../../public/assets/images/high.jpg'

export default function Exercises() {
  const data=[
    {
        title:"Begineers",
        image:Begineers,
        link:"/services/service-1"
    },
    {
        title:"Moderate",
        image:Inter
    },
    {
        title:"High",
        image:HighLevel
    }
  ]
  return (
    <section>
      <div className="mx-auto px-10 ">
        <h2 className="font-oswald font-[200] text-[75px] text-[#7A7A7A]">Explore our varities of<span className='font-[400] text-[#4A4A4A]'> Exercises</span></h2>
        <div className="flex gap-4">
           <div className="flex gap-4">
             <Link href="/services/service-1" className="w-1/3">
              <Image src={Begineers} alt=""/>
              <h3 className="font-inter font-[600] text-[20px] mt-4 leading-[22px] text-center">Begineers</h3>  
             </Link>
             <Link href="/services/service-2" className='w-1/3'>
              <Image src={Inter} alt="Intermediate level"/>
              <h3 className="font-inter font-[600] text-[20px] mt-4 leading-[22px] text-center">Intermediate</h3>  
             </Link>
             <Link href="" className="w-1/3">
              <Image src={HighLevel} alt="High level" className="h-[87%]"/>
              <h3 className="font-inter font-[600] text-[20px] mt-4 leading-[22px] text-center">High</h3>  
             </Link>
           </div>
        </div>
      </div>  
    </section>
  )
}
