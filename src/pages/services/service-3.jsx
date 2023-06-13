import React from 'react'
import Image from 'next/image'
import TreePose from '../../../public/assets/gifs/yoga/Tree Pose.gif'
import TrianglePose from '../../../public/assets/gifs/yoga/triangle-poses.gif'
import BoatPose from '../../../public/assets/gifs/yoga/Boat Pose.gif'
import BoundAngle from '../../../public/assets/gifs/yoga/Bound Angle Pose.gif'
import LotusPose from '../../../public/assets/gifs/yoga/Lotus Pose.gif'
import ForwardBend from '../../../public/assets/gifs/yoga/Standing Forward Bend.gif'
import Backbend from '../../../public/assets/gifs/yoga/Standing Backbend Pose.gif'
import ShoulderStand from '../../../public/assets/gifs/yoga/Shoulder Stand to Plow.gif'
import HandStand from '../../../public/assets/gifs/yoga/Handstand.gif'

export default function Service3() {
  const data=[
    {
      title:"Tree Pose",
      image:TreePose
    },
    {
      title:"Triangle Pose",
      image:TrianglePose
    },
    {
      title:"Boat Pose",
      image:BoatPose
    },
    {
      title:"Bound Angle Pose",
      image:BoundAngle
    },
    {
      title:"Lotus Pose",
      image:LotusPose
    },
    {
      title:"Standing Forward Bend",
      image:ForwardBend
    },
    {
      title:"Standing Backbend Pose",
      image:Backbend
    },
    {
      title:"Shoulder Stand To Plow",
      image:ShoulderStand
    },
    {
      title:"Handstand",
      image:HandStand
    }
  ]  
  return (
    <section>
      <div className="mx-auto px-10">
      <h2 className="font-oswald font-[400] text-[75px]"><span className="font-[200] text-[#7A7A7A]">Yoga</span> Poses</h2>
       <div className="mt-10">
         <div className="flex flex-wrap">
          {data.map((items,i)=>(
           <div className='w-1/3 pb-5 pr-4'>
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
