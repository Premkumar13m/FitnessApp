import React from 'react'
import Exercise1 from '../../../public/assets/gifs/b/b1.gif'
import Exercise2 from '../../../public/assets/gifs/b/b2.gif'
import Exercise3 from '../../../public/assets/gifs/b/b3.gif'
import Exercise4 from '../../../public/assets/gifs/b/b4.gif'
import Exercise5 from '../../../public/assets/gifs/b/b5.gif'
import Exercise6 from '../../../public/assets/gifs/b/b6.gif'
import Exercise7 from '../../../public/assets/gifs/b/b7.gif'
import Exercise8 from '../../../public/assets/gifs/b/b8.gif'
import Exercise9 from '../../../public/assets/gifs/b/b9.gif'
import Image from 'next/image'

export default function Service1() {
  const data = [
    {
      image: Exercise2,
      title: "Jumping jacks",
      steps: [
        "Stand with your feet together, knees slightly bent, and arms at your sides.",
        "Jump while raising your arms and separating legs to sides",
        "Land on your forefoot with legs apart and arms overhead",
      ],
    },
    {
        image:Exercise1,
        title:"Russian Twist",
        steps:[
            "Sit on floor, knees bent and feet on the floor",
            "Keep your back at a 45-degree angle, arms extended with palms together",
            "Move the arms from one side to another in a twisting motion"
        ]
    },
    {
        image:Exercise3,
        title:"Chair leg squats",
        steps:[
            "Stand in front of chair",
            "Slowly squat to sit down onto chair",
            "Make sure that your knees stay aligned and do not drop or bow either side",
            "Your knee should not pass over your toe",
            "Stand back up again"
        ]
    },
    {
        image:Exercise4,
        title:"Knee push ups",
        steps:[
            "Position hands shoulder width apart on floor, knees bent, legs crossed",
            "Bending at elbows, lower yourself down ",
            "Keep back straight and core engaged",
            "Push back away from the wall straightening elbows"
        ]
    },
    {
        image:Exercise5,
        title:"Plank push-ups",
        steps:[
            "Start in a plank position with knees on the ground",
            "Place down one hand at a time to lift up into a pushup position",
            "Keep back straight and core tight",
            "Move one arm at a time back into the plank position",
            "Repeat, alternating arms"
        ]
    },
    {
        image:Exercise6,
        title:"Dips on the floor/bench",
        steps:[
            "Position hands and feet shoulder width-apart on the floor/bench with bent knees",
            "Straighten arms, lifting your hips off the ground",
            "Bend elbows until 90 degrees, lowering body toward floor",
            "Push straight back up to the starting position"
        ]
    },
    {
        image:Exercise7,
        title:"Press and plank",
        steps:[
            "Start in a modified sideplank, knees bent",
            "Hold a filled water bottle in your right hand, right elbow bent and weight resting against your forearm",
            "Lift your hips so your body is straight from knees to shoulders, pressing water bottle up to the ceiling"
        ]
    },
    {
        image:Exercise8,
        title:"Superman",
        steps:[
            "Start on your hands and knees, with your back straight and core muscles tight",
            "Keeping your hips low, simultaneously raise your right arm and left leg straightening at your elbow and knee",
            "Pause then lower to the starting position before alternating sides"
        ]
    },
    {
        image:Exercise9,
        title:"Shoulder push ups",
        steps:[
            "Kneel with feet hip width",
            "Tip forward at hips, until you can place both hands on floor infront of knees",
            "Keep your back straight",
            "Bending both elbows, bring your head toward the ground (keeping chin into your chest)",
            "Press away from the floor and straighten your arms"
        ]
    }
  ];  
  return (
    <section>
     <div className="mx-auto px-10">
       <h2 className="font-oswald font-[400] text-[75px]"><span className="font-[200] text-[#7A7A7A]">Exercises For</span> Begineers</h2>
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
