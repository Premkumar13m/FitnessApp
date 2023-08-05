import React from 'react'

export default function underVeg() {
    const data = [
      {
        title: "DAY 1",
        plans: [
          {
            time: "Breakfast (8:00-8:30AM)",
            food: "1 cup milk + 2 toasted bread + 5 almonds + 1 apple",
          },
          {
            time: "Mid-Meal (11:00-11:30AM)",
            food: "1 cup banana shake",
          },
          {
            time: "Lunch (2:00-2:30PM)",
            food: "1 cup moong dal + 1 cup bhindi + 2 chapatti + salad",
          },
          {
            time: "Evening (4:00-4:30PM)",
            food: "1 cup strawberry smoothie + 1 cup vegetable poha",
          },
          {
            time: "Dinner (8:00-8:30PM)",
            food: "1 cup dal + 1 cup potato curry + 1 cup rice + salad",
          },
        ],
      },
      {
        title: "DAY 2",
        plans: [
          {
            time: "Breakfast (8:00-8:30AM)",
            food: "3 onion stuffed parantha + 1 cup curd + 3 cashews + 4 almonds + 2 walnuts",
          },
          {
            time: "Mid-Meal (11:00-11:30AM)",
            food: "1 cup mango shake",
          },
          {
            time: "Lunch (2:00-2:30PM)",
            food: "1 cup rajma + 1 cup gobhi aloo + 1 cup cucumber raita + 1 cup rice + 1 chapatti + onion salad",
          },
          {
            time: "Evening (4:00-4:30PM)",
            food: "1 cup pomegranate juice + 2 butter toasted bread",
          },
          {
            time: "Dinner (8:00-8:30PM)",
            food: "1 cup beans potato vegetable + 3 chapatti + salad",
          },
        ],
      },
      {
        title: "DAY 3",
        plans: [
          {
            time: "Breakfast (8:00-8:30AM)",
            food: "3 paneer stuffed besan cheela + 1 cup curd + 3 cashews + 4 almonds + 2 walnuts",
          },
          {
            time: "Mid-Meal (11:00-11:30AM)",
            food: "1 apple smoothie with maple syrup",
          },
          {
            time: "Lunch (2:00-2:30PM)",
            food: "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad",
          },
          {
            time: "Evening (4:00-4:30PM)",
            food: "Tea/ Coffee (1 cup) + Papri Chat (1 cup)",
          },
          {
            time: "Dinner (8:00-8:30PM)",
            food: "1 cup carrot peas vegetable +3 chapatti + salad",
          },
        ],
      },
      {
        title: "DAY 4",
        plans: [
          {
            time: "Breakfast (8:00-8:30AM)",
            food: "1.5 cup vegetable bread upma + 1 cup milk + 3 cashews + 4 almonds + 2 walnuts",
          },
          {
            time: "Mid-Meal (11:00-11:30AM)",
            food: "1 cup ripe banana with 2 tsp ghee",
          },
          {
            time: "Lunch (2:00-2:30PM)",
            food: "1 cup rajma curry + 1 cup spinach potato + 3 chapatti + 1/2 cup rice + salad",
          },
          {
            time: "Evening (4:00-4:30PM)",
            food: "1 cup vegetable juice + 1 cup upma",
          },
          {
            time: "Dinner (8:00-8:30PM)",
            food: "1.5 cup parwal vegetable + 3 chapatti + salad",
          },
        ],
      },
      {
        title: "DAY 5",
        plans: [
          {
            time: "Breakfast (8:00-8:30AM)",
            food: "2 cucmber potato sandwich + 1 orange juice + 3 cshews + 2 walnuts + 4 almonds",
          },
          {
            time: "Mid-Meal (11:00-11:30AM)",
            food: "1 cup buttermilk + 1 cup sweet potato chaat",
          },
          {
            time: "Lunch (2:00-2:30PM)",
            food: "1 cup white chana + 3 chapatti + 1/2 cup rice + salad",
          },
          {
            time: "Evening (4:00-4:30PM)",
            food: "1 cup almond milk + banana",
          },
          {
            time: "Dinner (8:00-8:30PM)",
            food: "1 cup cauliflower potato vegetable + 3 chapatti + salad",
          },
        ],
      },
      {
        title: "DAY 6",
        plans: [
          {
            time: "Breakfast (8:00-8:30AM)",
            food: "2 cup vegetable poha + 1 cup curd + 3 cashews + 4 almonds + 2 walnuts",
          },
          {
            time: "Mid-Meal (11:00-11:30AM)",
            food: "2 cups watermelon juice",
          },
          {
            time: "Lunch (2:00-2:30PM)",
            food: "1 cup chana dal + 1 cup bhindi vegetable + 3 chapatti + 1/2 cup rice + salad",
          },
          {
            time: "Evening (4:00-4:30PM)",
            food: "Sandwich + Aloo Chat (1 cup)",
          },
          {
            time: "Dinner (8:00-8:30PM)",
            food: "1 cup peas mushroom vegetable + 3 chapatti + salad",
          },
        ],
      },
      {
        title: "DAY 7",
        plans: [
          {
            time: "Breakfast (8:00-8:30AM)",
            food: "Veg Upma (1 cup) + Raita (1/2 cup)",
          },
          {
            time: "Mid-Meal (11:00-11:30AM)",
            food: "1 cup coconut water + 1 cup pomegranate",
          },
          {
            time: "Lunch (2:00-2:30PM)",
            food: "1 cup soybean curry + 1 cup rice + salad",
          },
          {
            time: "Evening (4:00-4:30PM)",
            food: "Tea/ Coffee (1 cup) + Papri Chat (1 cup)",
          },
          {
            time: "Dinner (8:00-8:30PM)",
            food: "Chapati (2) + 1 cup paneer tikka",
          },
        ],
      },
    ];
    return (
      <section>
        <div className="container mx-auto px-10 bg-[#4F7942] text-white">
          <div className>
            <h1 className="font-inter font-[600] text-[28px] text-center">
              Weekly Diet Plan for Vegetarians for Weight Gain
            </h1>
            {data.map((items, i) => (
              <div key={"cards-" + i} className="pb-10">
                <h2 className="font-inter font-[600] text-[24px] text-center">
                  {items.title}
                </h2>
                <div className="border border-[#DDDDDD] rounded-[20px] mt-5">
                  {items.plans.map((obj, k) => (
                    <div className=" flex font-inter font-[600] text-[20px] border-b">
                      <div className="w-1/3 border-r p-4">{obj.time}</div>
                      <div className="w-2/3 p-4">{obj.food}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}
