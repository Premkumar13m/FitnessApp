import React from 'react'
import Image from 'next/image'
import logo from '../../../public/assets/images/logo.png'
import Link from 'next/link'

export default function Header() {
  return (
    <section>
      <div className="mx-auto px-10">
        <div className='flex'>
         <div className='w-1/2 p-1 font-pacifico font-[400] text-[35px]'>
           <Link href="/home/home">next.fit</Link>
         </div>
         <div className='w-1/2 flex justify-end items-center'>
           <ul className="flex gap-16 font-oswald text-[24px] font-[400]">
            <li>
             <Link href="/home/home">Home</Link>
            </li>
            <li>
              <Link href="/services">Services</Link></li>
            <li>
             <Link href="/blogs">Blogs</Link>
            </li>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
           </ul>
          </div> 
        </div> 
     </div>
    </section>
  )
}
