import React from 'react'

export default function underNonVeghome() {
    const data = [
      {
        Data1: "Breakfast (8:00-8:30AM)",
        Data2: "2 egg brown bread sandwich + green chutney + 1 cup milk + 3 cashews + 4 almonds + 2 walnuts",
      },
      {
        Data1: "Mid-Meal (11:00-11:30AM)",
        Data2: "1 cup banana shake",
      },
      {
        Data1: "Lunch (2:00-2:30PM)",
        Data2: "1 cup arhar dal + 1 cup potato curry + 3 chapatti + 1/2 cup rice + 1/2 cup low fat curd + salad",
      },
      {
        Data1: "Evening (4:00-4:30PM)",
        Data2: "1 cup strawberry smoothie + 1 cup vegetable poha",
      },
      {
        Data1: "Dinner (8:00-8:30PM)",
        Data2: "1.5 cup chicken curry + 3 chapatti + salad",
      },
    ];
    return (
      <section className="container mx-auto px-10">
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
