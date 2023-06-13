import React from 'react'
import Image from 'next/image'
import Intermediate1 from '../../../public/assets/gifs/m/m1.gif'
import Intermediate2 from '../../../public/assets/gifs/m/m3.gif'
import Intermediate3 from '../../../public/assets/gifs/m/m5.gif'
import Intermediate4 from '../../../public/assets/gifs/m/m7.gif'
import Intermediate5 from '../../../public/assets/gifs/m/m9.gif'
import Intermediate6 from '../../../public/assets/gifs/m/m11.gif'
import Intermediate7 from '../../../public/assets/gifs/m/m13.gif'
import Intermediate8 from '../../../public/assets/gifs/m/m15.gif'

export default function Service2() {
  const data=[
    {
      title:"Sprinter sit-up",
      image:Intermediate1
    },
    {
      title:"Dead bugs",
      image:Intermediate2
    },
    {
      title:"Three way crunches",
      image:Intermediate3
    },
    {
      title:"Mountain climber twist",
      image:Intermediate4
    },
    {
      title:"Contralateral limb raise",
      image:Intermediate5
    },
    {
      title:"Supine bridge with leg extension",
      image:Intermediate6
    },
    {
      title:"Fast step up",
      image:Intermediate7
    },
    {
      title:"Front kick plank",
      image:Intermediate8
    }
  ]
  return (
    <section>
      <div className="mx-auto px-10">
       <h2 className="font-oswald font-[400] text-[75px]"><span className="font-[200] text-[#7A7A7A]">Exercises For</span> Intermediate</h2>
       <div className="mt-10">
         <div className="flex flex-wrap">
          {data.map((items,i)=>(
           <div className='w-1/3 pb-5'>
               <div className="">
                <Image src={items.image} alt="exercise1"/>
              </div>
               <h2 className="font-inter font-[600] text-[24px] leading-[22px] mt-4">{items.title}</h2>
           </div>
          ))}
         </div>
       </div>
      </div>
    </section>
  )
}
