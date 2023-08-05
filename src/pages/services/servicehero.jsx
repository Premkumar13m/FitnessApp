import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import ExerciseImg from '../../../public/assets/images/services-exercise.jpg'
import DietPlan from '../../../public/assets/images/diet-services.jpg'
import YogaServices from '../../../public/assets/images/yoga-services.jpg'

export default function Servicehero() {
  return (
    <section>
        <div className="mx-auto px-10">
            <h2 className="font-oswald font-[200] text-[75px] text-[#7A7A7A]">Services We<sapn className="font-[400] text-[#000000]"> Provide</sapn></h2>
            <div className="flex gap-4">
             <div className="w-1/2">
               <h3 className="font-bebas font-[400] text-[40px]">Exercises</h3>
               <Link href="/services/exercises">
                 <Image src={ExerciseImg} alt="Exercise img"/>  
               </Link>
             </div>
             <div className="w-1/2">
               <h3 className="font-bebas font-[400] text-[40px]">Diet Plans</h3>
               <Link href="/services/dietplan">
                 <Image src={DietPlan} alt="dietplan image" className="h-[87%]"/>
               </Link>  
             </div>
            </div>
            <div className="flex justify-center mt-5 mb-10">
              <div className="w-1/2">
                <h3 className="font-bebas font-[400] text-[40px] text-center">Yoga</h3>
                <Link href="/services/yoga-services">
                  <Image src={YogaServices} alt="Yoga Services" className="h-[90%]"/>
                </Link>
              </div>
            </div> 
        </div>
    </section>
  )
}
