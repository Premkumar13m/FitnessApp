import Image from 'next/image';
import React from 'react'
import Blog2Image from '../../../public/assets/images/blog2.jpg'

export default function Blog2() {
  return (
    <section>
      <div className="mx-auto px-10">
        <h2 className="font-bebas font-[400] text-[50px]">
          Importance of Diet And Nutrition in Daily Life
        </h2>
        <div className="flex justify-center">
          <Image src={Blog2Image} alt="blog2 Image" />
        </div>
        <p className="font-inter font-[400] text-[18px] text-[#7A7A7A] leading-[30px] mt-5">
          Whether you're trying to lose weight, or just improve your diet, meal
          planning is an easy step to help you reach your goals. There are
          numerous advantages of planning out your meals in advance that can not
          only save your waistline, but also improve your health. "With anything
          in life, if you fail to plan, you plan to fail. That applies to meal
          planning as well," says Silvia Veri, registered dietitian at the
          Beaumont Weight Control Center - Canton. "Planning meals and snacks
          ahead of time increases the chance for success, it increases the
          likelihood a healthier food choice will be made."
        </p>
        <p>Just for testing</p>
        <p>For configuration purpose</p>
        <p>For new configuration of git</p>
        <p className="font-inter font-[600] text-[24px] mt-5">Eat Healthy</p>
        <p className='font-inter font-[400] text-[18px] text-[#7A7a7A] leading-[30px] mt-5'>
          When you're hungry and your blood sugar drops, you're more inclined to
          eat whatever you can get the fastest. This is why some of us settle
          for the closest fast food joint with unhealthy options. Meal planning
          eliminates this issue when you have a balanced meal at your
          fingertips, filled with nutrient-dense food prepped and ready to go!
          "Many times unhealthy foods are chosen because of convenience,"
          explains Veri. "If we can take the time out to plan meals, write a
          grocery list and have fruits, vegetables, whole grains and beans
          available, they will become convenient and eaten more often."
        </p>
        <div className="border-b-2 border-[#FF4A5F] p-2 mb-10"></div>
      </div>
    </section>
  );
}
