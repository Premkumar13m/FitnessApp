import React from 'react'
import Image from 'next/image'
import LoginBg from '../../../public/assets/images/login-bg.jpg'
import Link from 'next/link'

export default function Login() {
  return (
    <section>
     <div className="h-[100vh] bg-no-repeat bg-cover flex justify-end" style={{backgroundImage:`url('${LoginBg.src}')`}}>
         <div className='bg-blac text-[#7A7A7A] text-[18px] font-inter font-[400] w-1/2 p-10 flex flex-col justify-center -center' >
             <div className='border-b border-[#D2D2D2] pb-2 mt-5'>
                 <input type="text" name="Username" id="Username"  placeholder='Enter Username*' required className="outline-none bg-transparent "/>
             </div>
             <div className='border-b border-[#D2D2D2] pb-2 mt-5'>
                 <input type="password" name="Password" id="Password" placeholder='Enter Password*' required className="outline-none bg-transparent"/>
             </div>
             <div className='border-b border-[#D2D2D2] pb-2 mt-5'>
                 <input type="text" name="Referal code" id="Referal code" placeholder='Enter Referal Code' className="outline-none bg-transparent"/>
             </div>
             <div className="mt-10 group text-[white]">
                 <Link href="/home/home">
                     <button type='submit' className='w-full bg-[#FFBF00] py-2 rounded-[20px] group-hover:bg-[#228B22]'>Login</button>
                 </Link>
             </div>
             <div className="mt-5 flex justify-between">
                <h3>Forgot your<span className='text-blue-400'> Password?</span></h3>
                <h3>Don't have an account.<span className='text-blue-400'><Link href="/components/signup"> Signup</Link></span></h3>
             </div>
         </div>
     </div>
    </section>
  )
}
