import Image from 'next/image'
import React from 'react'
import Hero1 from '../../../public/assets/images/hero1.jpg'
import Hero2 from '../../../public/assets/images/hero2.jpg'
import Hero4 from '../../../public/assets/images/hero4.jpg'
import Hero5 from '../../../public/assets/images/hero5.jpg'

export default function Hero() {
  return (
    <section>
      <div>
        {/* <Image src={Hero1} alt="hero image" className=''/>
        <Image src={Hero2} alt="hero image" className=''/>
        <Image src={Hero3} alt="hero image" className=''/>
        <Image src={Hero4} alt="hero image" className=''/>
        <Image src={Hero5} alt="hero image" className=''/> */}
        <div className="bg-no-repeat h-[120vh] bg-cover flex items-end" style={{backgroundImage:`url('${Hero1.src}')`}}>
          <div className='mb-40 text-[#FFFFFF] mx-10'>
           <h2 className="font-[700] text-[50px]">Work Out Anytime. Anywhere.</h2>
           <p className="font-[400] text-[28px]">Unlimited access to the best workouts and diet plans.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
