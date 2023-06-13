import Image from 'next/image';
import React from 'react'
import BlogImage1 from '../../../public/assets/images/blog1.jpg'

export default function Blog1() {
  const data=[
    {
      title:"Maintain a stable weight:",
      content:"Exercising burns calories. The harder and longer you work, the more calories you will burn. Burning calories will help you maintain a healthy weight."
    },
    {
      title:"Regulate your appetite:",
      content:"Exercise can decrease your appetite post-workout as well as decrease food cravings."
    },
    {
      title:"Boost brain power:",
      content:"As we age, our brains start to lose tissue. Exercise has been shown to slow that loss over time."
    },
    {
      title:"Enhance heart health:",
      content:"Regular exercise helps to decrease blood pressure and improve circulation."
    },
    {
      title:"Improve immune functioning:",
      content:"Regular exercise has been shown to increase immunoglobulins, which help us to fight infection. Regular exercise also decreases our overall health risk. The healthier we are, the more likely we will overcome an illness quickly."
    },
    {
      title:"Boost metabolism:",
      content:"Exercising regularly can increase lean muscle mass. Having this increased muscle mass increases your basal metabolic rate. This means you'll burn more calories at rest—even when binge watching your favorite shows!"
    },
    {
      title:"Prevent injury:",
      content:"Regular exercise leads to stronger muscles. Stronger muscles make you less susceptible to common injuries that occur as we age, such as 'pulling your back out.'"
        
    },
    {
      title:"Decrease cortisol levels:",
      content:"Research shows that regular exercise can decrease cortisol levels, which can promote healthier sleep as well as decreased stress levels."
    },
    {
      title:"Improve bone health:",
      content:"Regular weight-bearing exercise is proven to keep our bones stronger as we age. This can help to prevent osteoporosis and decrease age-related fractures."
    },
    {
      title:"Improved skin"
    }
  ]

  return (
    <section>
      <div className="mx-auto px-10 py-10">
        <h2 className="font-bebas font-[400] text-[50px]">
         <span className="text-[#FF4a5F]">10</span> Surprising Benefits Of Regular Exercise
        </h2>
        <div className="font-inter font-[400] text-[18px] text-[#7A7A7A]">
         <div className=" gap-5">
           <div className=" flex justify-center">
             <Image src={BlogImage1} alt="blog1 image" className='w-3/5'/>
           </div>
           
           <p className="w1/2 flex items-center mt-5">
             It can be easy to become a couch potato and pass up your regular
             exercise routine while social distancing at home during the COVID-19
             pandemic. Although it can be tempting to binge watch your favorite
             shows for hours, there can be negative health consequences to a lack
             of physical activity. These include increasing your risk for high
             blood pressure, diabetes, heart disease and depression, as well as
             decreasing your overall immune system functioning. Now more than ever,
             it's important that we work to improve our overall health.
           </p>
         </div>

         <p className="mt-5">
           So, how much should we be exercising? Experts recommend at least 150
           minutes of moderate aerobic activity per week to lower your risk of
           heart disease. Weight loss experts recommend at least 200 minutes of
           exercise per week to maintain a healthy weight.
         </p>
 
         <p className="mt-5">
           If these numbers seem out of your reach right now, that's OK. The
           research is clear: even adding a small amount of exercise can have a
           positive impact on your health. Although gyms are closed, we can still
           make the choice to get or stay active. We may need to change how we do
           things, but we can still reap the benefits of exercising during these
           challenging times.
         </p>
         <p className="mt-5">
           If you make the decision to get moving now, look for these nine
           surprising benefits of regular exercise. Increasing your activity can
           help you:
         </p>
        </div>
        {data.map((items,i)=>(
          <div className='list-decimal list-inside font-inter font-[400] text-[18px] text-[#7A7A7A] mt-2'>
           <p><span className='font-inter font-[600] text-[18px] text-[black]'>{items.title}</span>{" "}{items.content}</p>
          </div>
        ))} 
        <div className="border-b-2 border-[#FF4A5F] p-2"></div>
      </div>
    </section>
  );
}
