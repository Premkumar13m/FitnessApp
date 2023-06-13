import React from 'react'
import Link from 'next/link'
import Logo from '../../../public/assets/images/darklogo.png'
import Image from 'next/image'
import FollowIcon from '../../../public/assets/images/follow-icon.svg'
import FacebookIcon from '../../../public/assets/images/facebook-logo.png'
import InstaIcon from '../../../public/assets/images/insta-logo.webp'
import LinkedinIcon from '../../../public/assets/images/linkedin-logo.png'

export default function Footer() {
  return (
    <section>
      <div className="mx-auto px-10 pb-10 flex bg-gradient-to-r from-[#220024] via-[#630869] to-[#2d1245] text-[#FFFFFF] font-inter font-[400] text-[18px]">
        <div className="w-1/3 mt-5">
          <h3 className="text-[35px] font-[400] font-pacifico">next.fit</h3> 
          <ul className='gap-3 mt-10'>
            <Link href="/"><li>Home</li></Link>
            <Link href="/services"><li>Services</li></Link>
            <Link href="/blogs"><li>Blogs</li></Link>
            <li>Contact Us</li>
          </ul>  
        </div>
        <div className="w-1/3 flex justify-center items-center">
          <div>
             <div className="flex justify-between w-[160px] border border-[#D9D9D9] rounded-[50px] pl-3">Follow Us On<Image src={FollowIcon} alt="follow icon"/></div>
             <div className="flex gap-5 items-center justify-center mt-7">
               <Image src={InstaIcon} alt="Insta icon" className="h-[25px] w-[25px]"/>
               <Image src={FacebookIcon} alt="Facebook icon" className="h-[25px] w-[25px]"/>
               <Image src={LinkedinIcon} alt="LinkedIn icon" className="h-[35px] w-[35px]"/>
             </div> 
          </div>  
        </div>
        <div className="w-1/3 flex items-center justify-center">
          <div>
            <h3 className="font-inter font-[600] text-[20px] leading-[22px]">Contact Us At</h3>
            <p className="font-inter font-[400] text-[16px] mt-5">C-122, 3rd Floor Indrapuri Sector-C<br/>Bhopal,MP, 462022</p>
            <p className="font-inter font-[400] text-[20px] leading-[22px] mt-5">hi@next.fit.com</p>
            <p className="font-inter font-[400] text-[20px] mt-2">9507558339</p>
          </div>
        </div>
      </div>  
    </section>
  )
}
