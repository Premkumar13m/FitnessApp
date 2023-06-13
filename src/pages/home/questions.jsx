import React from 'react'
import Image from 'next/image'
import Talk from '../../../public/assets/images/Arrow.png'

export default function Questions() {
  const data=[
    {
      question:"Are eggs good for weight gain?",
      answer:"Eggs are an excellent choice for protein and help to build muscle mass. Eggs contain high-quality protein and healthy fats."
    },
    {
      question:"Can I consume bananas and milk daily to gain weight?",
      answer:"Yes, bananas and milk together can help you gain weight quickly. However, regular consumption of this calorie-rich drink can rapidly increase calories and may lead to uncontrollable weight gain. Therefore, it is advisable to take it in moderation."
    },
    {
      question:"What are the health risks of being underweighted?",
      answer:"Being underweight can lead to various health problems like nutritional deficiencies, fertility problems, weak immune system, constant fatigue, skin, hair, and teeth issues, osteoporosis, etc."  
    },
    {
      question:"Is 800 calories a day healthy?",
      answer:"If you take a low-calorie diet, you feel low on energy, and your body suffers due to a lack of essential nutrients. Eight hundred calories per day are not sufficient to give you the power to perform all your daily tasks. Calorie requirements differ from individual to individual however a good starting point is between 1300-1500 cal per day."  
    },
    {
      question:"What food causes weight gain?",
      answer:" Higher-calorie foods, protein-rich foods, and healthy carbohydrates all lead to a sustainable weight gain good for your body and mind."  
    },
    {
      question:"Which fruit causes weight gain?",
      answer:" Fruits contain natural sugar, which is a goldmine of nutrients. Mangoes, bananas, avocados, nuts and prunes are some of the high-calorie fruits that will help you gain weight in a healthy manner."  
    },
    {
      question:"What snacks make you gain weight?",
      answer:"Calorie-dense healthy snacks which are also rich in nutrients can help in weight gain. These include nuts, seeds, fruit and nut bars, nut butter and whole grain toast, smoothies, whole eggs etc."  
    },
    {
      question:"What is the fastest way to gain weight?",
      answer:"There is no shortcut or a magic pill to gain weight fast. Focus on gaining weight in a healthy and sustainable way by making proper food choices and leading a healthy weight can lead to weight gain."
    },
    {
      question:"What fruit is the heighest in calories",
      answer:"Avocados are the highest calorie fruit, as each serving (100g) of avocado contains 160 calories."  
    },
    {
      question:"What foods are high in protein for weight gain",
      answer:"Red Meats, whole wheat breads, certain fruits like avocados, full-fat milk and nut butters are some high-protein foods for weight gain."  
    }
  ]  
  return (
    <section>
      <div className="mx-auto px-10 py-10">
        <h2 className="font-montserrat font-[600] text-[50px] leading-[55px]">Frequently Asked Questions</h2>
      <div className="mt-5">
        <p className="font-inter font-[400] text-[20px] leading-[33px] text-[#7A7A7A]">
          Here's a list of frequently asked questions our clients
          usually ask. You can take a look quickly for spotting answers to
          general queries:
        </p>
        <div>
          <div class="m-2 mt-8 rounded overflow-hidden">
            {data.map((item, i) => (
              <div
                key={`accordion-` + i}
                class="group outline-none accordion-section bg-[#FBFBFB] rounded-[14px] my-3 p-2"
                tabindex={i}
              >
                <div class="group flex justify-between px-4 py-3 items-center text-gray-500 transition ease duration-500 cursor-pointer pr-10 relative">
                  <div class="grou-focus:text-white transition ease duration-500 font-oswald text-[22px]leading-[128%] text-[#252525] font-[500]">
                    {item.question}
                  </div>
                  <div class="h-8 w-8  rounded-full items-center inline-flex justify-center transform transition ease duration-500 groupfocus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
                    <svg
                      width="14"
                      height="9"
                      viewBox="0 0 14 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.355 0.332539L7 5.67587L1.645 0.332538L6.11959e-07 1.97754L7 8.97754L14 1.97754L12.355 0.332539Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
                <div class="group-focus:max-h-screen max-h-0 px-4 overflow-hidden ease duration-500">
                  <p class="p-2 text-justify text-[#7A7A7A] text-[16px] font-[400] font-inter leading-[174%]">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
            <div className="flex justify-center">
              <div>
                <p className="font-inter font-[400] text-center text-[16px] leading-[14px] text-[#7A7A7A] mt-6">
                  Still Confused?
                </p>

                {/* <CustomCalendly
                  btn={ */}
                    <button className="mt-[20px] flex justify-between items-center w-[185px] border rounded-[100px] pl-4 border-[#A7A7A7] font-[600] font-inter text-[16px] btn-rotate">
                      Let's Discuss
                      <Image src={Talk} alt="COntact us link" />
                    </button>
                  {/* }
                /> */}
              </div>  
            </div> 
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
