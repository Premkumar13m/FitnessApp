import Image from 'next/image';
import React from 'react'
import officeYoga1 from '../../../public/assets/images/officeyoga/officeyoga1.jpg';
import officeYoga2 from '../../../public/assets/images/officeyoga/officeyoga2.jpg';
import officeYoga3 from '../../../public/assets/images/officeyoga/officeyoga3.jpg';
import officeYoga4 from '../../../public/assets/images/officeyoga/officeyoga4.jpg';

export default function officeYoga() {
  return (
    <section>
      <div className="mx-auto px-10">
        <h1 className="font-oswald font-[600] text-[40px] max-w-[800px] leading-[50px]">
          Yoga Poses That You Can Do At Your Work Desk
        </h1>
        <p className="font-inter font-[400] text-[18px] mt-5 text-justify">
          The pandemic has altered your work lives and has brought the office to
          your homes. As you spend hours in front of your laptops, you mostly
          tend to forget about taking adequate breaks.
          <br />
          Sitting in the same position for long periods can eventually make your
          body stiff and lead to neck, shoulder, and lower back pain. Since many
          of you might not find time to leave your desk for an actual workout,
          you can try simple yoga poses at your work desk.
        </p>
        {/* <Image src={officeYoga1} alt="yoga to do in office" /> */}
        <div className="font-inter font-[400] text-[18px] text-justify mt-5">
          <h2 className="font-bebas font-[400] text-[28px] mt-2 text-center">
            3 Yoga Poses To Do At Your Work Desk At Home
          </h2>
          <h3 className="mt-2 font-inter text-[20px] font-[600] text-[#ff4a5f]">
            Wrist And Finger Stretches
          </h3>
          <p>
            Continuously working on your keyboard can build up tension in the
            muscles and tendons of your hands, wrists, and fingers. Increasing
            blood flow to these areas will help relieve this tension. You can
            try these wrist and finger stretch every 2-3 hours between your
            work.
          </p>
          <div className="flex justify-center my-2">
            <Image src={officeYoga2} alt="yoga to do in office" className='shadow-md shadow-stone-600 rounded-[10px]'/>
          </div>

          <ol className="list-inside list-decimal">
            <li>
              Stretch your hands overhead or towards your sides and draw 5 to 10
              circles in and out with the help of your wrists.
            </li>
            <li>
              Extend your arm in front with your palm facing up and your fingers
              pointing down. Now with your other hand stretch your fingers back
              towards you.
            </li>
            <li>Repeat the same on each arm and hold it for 3-5 breaths.</li>
          </ol>
        </div>

        <div className="font-inter font-[400] text-[18px] text-justify">
          <h3 className="mt-2 font-inter text-[20px] font-[600] text-[#ff4a5f]">
            Desk Chaturanga
          </h3>
          <p>
            This is a strengthening pose that helps strengthen your arms and
            relieve the stress on your neck. This pose requires you to get up
            from your chair.
          </p>
          <div className="flex justify-center my-2">
            <Image src={officeYoga3} alt="yoga to do in office" className='shadow-md shadow-stone-600 rounded-[10px]'/>
          </div>
          <ol className="list-inside list-decimal">
            <li>
              From a standing position lean forward and place your arms roughly
              shoulder-width apart on your desk. Gently step backwards until
              your body is diagonal to the floor.
            </li>
            <li>
              Enhale as you bend the elbows to a 90-degree angle, hugging the
              elbows in towards the ribs. Exhale and press back up to your
              starting position.{" "}
            </li>
            <li>Repeat the same 8-12 times.</li>
          </ol>
        </div>

        <div className="font-inter font-[400] text-[18px] text-justify">
          <h3 className="mt-2 font-inter text-[20px] font-[600] text-[#ff4a5f]">
            Sit And Stand Chair Pose
          </h3>
          <p>
            This pose helps in strengthening your glutes (gluteal region
            commonly known as the buttocks) and hamstring muscles (thigh muscles
            between the hip and the knee) that are underused while you sit for
            long hours.It also helps release the stress on your lower back.
          </p>
          <div className="flex justify-center my-2">
            <Image src={officeYoga4} alt="yoga to do in office" className='shadow-md shadow-stone-600 rounded-[10px]'/>
          </div>
          <ol className="list-inside list-decimal">
            <li>
              Begin in a seated position with your legs flat on the floor and
              your knees bent at a 90-degree angle. Press your heels down and
              slowly stand up using only your legs, muscles and glutes.
            </li>
            <li>
              Sit back down slowly, again solely using your leg muscles. Avoid
              leaning forward or shifting your hips from one side to the other.
              You can repeat the pose 5 to 10 times.
            </li>
            <li>Repeat the same on each arm and hold it for 3-5 breaths.</li>
          </ol>
        </div>
        <div className="text-[18px] font-inter mt-10">
          These simple yoga poses can be easily practised between your work
          hours while you can remain at your desk. It helps you get rid of those
          stiff muscles and also helps in boosting your energy levels.
        </div>
        <div className='flex justify-center'>
         <p className="text-[18px] max-w-[600px] mb-5 shadow-2xl shadow-stone-600 font-inter mt-10 border-2 p-4 border-[#ff4a5f] text-justify rounded-[20px]">
           <b>Disclaimer:</b> This article is written for informational
           and educational purposes only. The content presented on this page
           should not be considered as a substitute for medical expertise. Please
           "DO NOT SELF-MEDICATE" and seek professional help regarding any health
           conditions or concerns.<span className='font-pacifico'>next.fit</span> will not be responsible for any act or
           omission arising from the interpretation of the content present on
           this page.
         </p>
        </div> 
      </div>
    </section>
  );
}
