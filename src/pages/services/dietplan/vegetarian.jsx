import React from 'react'

export default function Vegetarian() {
    const data = [
      {
        Data1: "Breakfast (8:00-8:30AM)",
        Data2: "Aloo Paratha (2) + Raita (1 cup)",
      },
      {
        Data1: "Mid-Meal (11:00-11:30AM)",
        Data2: "Fruit Salad (1 cup) + Tender Coconut Water (1 glass)",
      },
      {
        Data1: "Lunch (2:00-2:30PM)",
        Data2: "1 cup moong dal + 1 cup bhindi + 2 chapatti + salad",
      },
      {
        Data1: "Evening (4:00-4:30PM)",
        Data2: "Tea/ Coffee (1 cup) + Boiled Chana Chat (1 cup)",
      },
      {
        Data1: "Dinner (8:00-8:30PM)",
        Data2: "Chapati (2) + Jeera Aloo (1 cup)",
      },
    ];
  return (
    <section className='container mx-auto px-10'>
    <div className="border rounded-[19px] border-[#ff4a5f] mt-14">
      {data.map((item, i) => (
        <div key={"Cards-" + i}>
          <div className="md:flex">
            <div className="flex items-center border-b border-r border-[#ff4a5f] justify-between md:w-1/3 p-[35px]">
              <div className="flex items-center">
                <p
                  data-tooltip-target="tooltip-default"
                  role="button"
                  className="pl-3 font-inter font-[600] text-[24px] leading-[28px]"
                >
                  {item.Data1}
                </p>
              </div>
            </div>
            <div className="flex items-center border-b border-[#ff4a5f] justify-between md:w-2/3 p-[35px]">
              <div className="flex items-center">
                <p className="pl-3 font-inter font-[600] text-[24px] leading-[28px]">
                  {item.Data2}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </section>
  );
}
