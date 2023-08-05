import React from 'react'

export default function overVeg() {
    const data = [
      {
        title: "DAY 1",
        plans: [
          {
            time: "Breakfast (8:00-8:30AM)",
            food: "1 serving Strawberry-Banana Green Smoothie",
          },
          {
            time: "Mid-Meal (11:00-11:30AM)",
            food: "2 Tbsp. unsalted almonds",
          },
          {
            time: "Lunch (2:00-2:30PM)",
            food: "1 serving Greek Salad with Edamame",
          },
          {
            time: "Evening (4:00-4:30PM)",
            food: "3/4 cup Frosted Grapes",
          },
          {
            time: "Dinner (8:00-8:30PM)",
            food: "1 serving Roasted Vegetable & Black Bean Tacos",
          },
        ],
      },
      {
        title: "DAY 2",
        plans: [
          {
            time: "Breakfast (8:00-8:30AM)",
            food: "2 servings Baked Banana-Nut Oatmeal Cups + 1 clementine",
          },
          {
            time: "Mid-Meal (11:00-11:30AM)",
            food: "1/2 cup raspberries",
          },
          {
            time: "Lunch (2:00-2:30PM)",
            food: "1 serving Chipotle-Lime Cauliflower Taco Bowls",
          },
          {
            time: "Evening (4:00-4:30PM)",
            food: "1 medium apple",
          },
          {
            time: "Dinner (8:00-8:30PM)",
            food: "1 serving Oven Baked Sweet Potato Fries",
          },
        ],
      },
      {
        title: "DAY 3",
        plans: [
          {
            time: "Breakfast (8:00-8:30AM)",
            food: "1 cup plain nonfat Greek yogurt + 1/4 cup raspberries",
          },
          {
            time: "Mid-Meal (11:00-11:30AM)",
            food: "1 cup sliced cucumber",
          },
          {
            time: "Lunch (2:00-2:30PM)",
            food: "1 serving Chipotle-Lime Cauliflower Taco Bowls",
          },
          {
            time: "Evening (4:00-4:30PM)",
            food: "1 medium banana + 1 Tbsp. peanut butter",
          },
          {
            time: "Dinner (8:00-8:30PM)",
            food: "Chapati (2) + MixVeg.",
          },
        ],
      },
      {
        title: "DAY 4",
        plans: [
          {
            time: "Breakfast (8:00-8:30AM)",
            food: "1 serving Muesli with Raspberries + 1 medium banana",
          },
          {
            time: "Mid-Meal (11:00-11:30AM)",
            food: "1 hard-boiled egg sprinkled with a pinch each of salt and pepper",
          },
          {
            time: "Lunch (2:00-2:30PM)",
            food: "1  serving Chipotle-Lime Cauliflower Taco Bowls",
          },
          {
            time: "Evening (4:00-4:30PM)",
            food: "1/2 cup raspberries + 1 oz. dark chocolate",
          },
          {
            time: "Dinner (8:00-8:30PM)",
            food: "1 serving Paneer & Chapati",
          },
        ],
      },
      {
        title: "DAY 5",
        plans: [
          {
            time: "Breakfast (8:00-8:30AM)",
            food: "1 serving Muesli with Raspberries",
          },
          {
            time: "Mid-Meal (11:00-11:30AM)",
            food: "Fruit Salad (1 cup) + Tender Coconut Water (1 glass)",
          },
          {
            time: "Lunch (2:00-2:30PM)",
            food: "1 cup soy bean curry + 1 cup tinda vegetable + 2 chapatti + salad",
          },
          {
            time: "Evening (4:00-4:30PM)",
            food: "3/4 cup sliced carrots",
          },
          {
            time: "Dinner (8:00-8:30PM)",
            food: "1 serving Spinach Ravioli with Artichokes & Olives",
          },
        ],
      },
      {
        title: "DAY 6",
        plans: [
          {
            time: "Breakfast (8:00-8:30AM)",
            food: "1 serving Muesli with Raspberries + 1 medium banana",
          },
          {
            time: "Mid-Meal (11:00-11:30AM)",
            food: "1 medium apple + 1 Tbsp. peanut butter",
          },
          {
            time: "Lunch (2:00-2:30PM)",
            food: "1 serving Veggie & Hummus Sandwich + 1 clementine",
          },
          {
            time: "Evening (4:00-4:30PM)",
            food: "1 hard-boiled egg sprinkled with a pinch each salt and pepper",
          },
          {
            time: "Dinner (8:00-8:30PM)",
            food: "1 serving Curried Sweet Potato & Peanut Soup + 1 (2-in.) slice whole-wheat baguette",
          },
        ],
      },
      {
        title: "DAY 7",
        plans: [
          {
            time: "Breakfast (8:00-8:30AM)",
            food: "1 serving Strawberry-Banana Green Smoothie",
          },
          {
            time: "Mid-Meal (11:00-11:30AM)",
            food: "1 medium apple",
          },
          {
            time: "Lunch (2:00-2:30PM)",
            food: "1 serving Curried Sweet Potato & Peanut Soup",
          },
          {
            time: "Evening (4:00-4:30PM)",
            food: "1 cup raspberries + 1 oz. dark chocolate",
          },
          {
            time: "Dinner (8:00-8:30PM)",
            food: "1 serving Raw Vegan Zoodles with Romesco",
          },
        ],
      },
    ];
    return (
      <section>
        <div className="container mx-auto px-10 bg-[#4F7942] text-white">
          <div className>
            <h1 className="font-inter font-[600] text-[28px] text-center">
              Weekly Diet Plan for Vegetarians for Weight Loss
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
