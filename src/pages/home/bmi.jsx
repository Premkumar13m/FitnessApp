import React,{useState} from 'react'
import Image from 'next/image';
import BmiBg from '../../../public/assets/images/bmi-bg.jpg'
import Link from 'next/link';

export default function Bmi() {
  const [bmi, setBmi] = useState();
  const [info, setInfo] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [color,setColor]=useState();

  const handleBmi = () => {
    let val = (
      [Number(weight) / Number(height) / Number(height)] * 10000
    ).toFixed(1);
    setBmi(val);
    if (val <= 18.5) {
      setInfo("Under Weight");
      setColor("#FFBF00")
    } else if (val >18.5 && val <= 24.9) {
      setInfo("Healthy");
      setColor("#228B22");
    } else if (val > 24.9 && val < 30) {
      setInfo("Overweight");
      setColor("#FF5F14")
    } else{
      setInfo("Obese");
      setColor("#D2042D")
    }
  };

  return (
    <section>
      <div className="mx-auto pt-20 md:min-h-[100vh] bg-no-repeat bg-cover object-contain" style={{backgroundImage:`url('${BmiBg.src}')`}}>
        <h2 className="font-[700] text-[50px] text-center bg-clip-text text-transparent bg-gradient-to-r from-[#ff4a54] to-[#004466]">Calculate Your Body Mass Index</h2>
        <h1 className='font-oswald font-[400] text-[#FFFFFF] text-[60px] text-center'>BMI Calculator</h1>
        <div className="flex justify-center">
          <div>
           <div>
            <input
              type="text"
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Height in cm"
              className="outline-none font-inter text-center font-[400] text-[30px] rounded-[20px]"
            />
           </div>
           <div className="mt-10">
            <input
             type="text"
             onChange={(e) => setWeight(e.target.value)}
             placeholder="Weight in kg"
             className="outline-none font-inter text-center font-[400] text-[30px] rounded-[20px]"
            />
           </div>
           <div className="flex justify-center">
             <button onClick={handleBmi} className="text-[#FFFFFF] font-inter font-[400] text-[30px] border-2 w-[190px] rounded-[20px] mt-[40px] border-[#FF4a5f] hover:bg-[#ff4a5f] hover:text-[#FFFFFF]">Calculate</button>
           </div>
           
           <div className="font-inter font-[400] text-[24px] bg-black text-white text-center mt-5 rounded-[30px]"  style={{backgroundColor:color}}>
            <h1>{bmi}</h1>
            <h2>{info}</h2>
           </div>
           <div className="mb-10 mt-4">
            <p className='text-[24px] font-[600] font-inter text-white'>To get your diet plan Click <Link href="/services/dietplan"><span className='text-blue-600'>here</span></Link></p>
           </div>
          </div> 
        </div>  
      </div>
    </section> 
  )
}
