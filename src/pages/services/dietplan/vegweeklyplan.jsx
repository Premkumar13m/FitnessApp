import React from 'react'

export default function vegweeklyPlan() {
  const data=[
    {
        title:'DAY 1',
        plans: [
            {
                time:'Breakfast (8:00-8:30AM)',
                food:'1 serving Blackberry Smoothie',
            },
            {
                time:'Mid-Meal (11:00-11:30AM)',
                food:'¼ cup dry-roasted unsalted almonds'
            },
            {
                time:'Lunch (2:00-2:30PM)',
                food:'1 serving Avocado Salad Sandwiches + 1 clementine'
            },
            {
                time:'Evening (4:00-4:30PM)',
                food:'5-oz. container low-fat plain Greek yogurt + ½ cup blueberries'
            },
            {
                time:'Dinner (8:00-8:30PM)',
                food:'Chapati (2) + Jeera Aloo (1 cup)'
            } 
        ]
    },
    {
        title:'DAY 2',
        plans: [
            {
                time:'Breakfast (8:00-8:30AM)',
                food:'1 serving Peanut Butter-Banana English Muffin',
            },
            {
                time:'Mid-Meal (11:00-11:30AM)',
                food:'Fruit Salad (1 cup) + Tender Coconut Water (1 glass)'
            },
            {
                time:'Lunch (2:00-2:30PM)',
                food:'1 cup rajma + 1 cup gobhi aloo + 1 cup cucumber raita + 1 cup rice + 1 chapatti + onion salad'
            },
            {
                time:'Evening (4:00-4:30PM)',
                food:'1 small apple'
            },
            {
                time:'Dinner (8:00-8:30PM)',
                food:'Chapati (2) + Mix Veg.'
            }
        ]
    },
    {
        title:'DAY 3',
        plans: [
            {
                time:'Breakfast (8:00-8:30AM)',
                food:'1 serving Blackberry Smoothie',
            },
            {
                time:'Mid-Meal (11:00-11:30AM)',
                food:'Fruit Salad (1 cup) + Tender Coconut Water (1 glass)'
            },
            {
                time:'Lunch (2:00-2:30PM)',
                food:'1 serving One-Pot Beans & Rice with Corn & Salsa'
            },
            {
                time:'Evening (4:00-4:30PM)',
                food:'Tea/ Coffee (1 cup) + Papri Chat (1 cup)'
            },
            {
                time:'Dinner (8:00-8:30PM)',
                food:'Chapati (2) + Paneer (1 cup)'
            }
        ]
    },
    {
        title:'DAY 4',
        plans: [
            {
                time:'Breakfast (8:00-8:30AM)',
                food:'Veg. Poha (1 cup) + Raita (1/2 cup)',
            },
            {
                time:'Mid-Meal (11:00-11:30AM)',
                food:'Fruit Salad (1 cup) + Tender Coconut Water (1 glass)'
            },
            {
                time:'Lunch (2:00-2:30PM)',
                food:'1 cup white chana + palak paneer + 1 cup rice + 1 chapatti + salad'
            },
            {
                time:'Evening (4:00-4:30PM)',
                food:'Tea/ Coffee (1 cup) + 1 medium bell pepper, sliced'
            },
            {
                time:'Dinner (8:00-8:30PM)',
                food:'Chapati (2) + Mustard Greens (1 cup)'
            }
        ]
    },
    {
        title:'DAY 5',
        plans: [
            {
                time:'Breakfast (8:00-8:30AM)',
                food:'Aloo Paratha (2) + Raita (1 cup)',
            },
            {
                time:'Mid-Meal (11:00-11:30AM)',
                food:'Fruit Salad (1 cup) + Tender Coconut Water (1 glass)'
            },
            {
                time:'Lunch (2:00-2:30PM)',
                food:'1 cup soy bean curry + 1 cup tinda vegetable + 2 chapatti + salad'
            },
            {
                time:'Evening (4:00-4:30PM)',
                food:'25 dry-roasted unsalted almonds'
            },
            {
                time:'Dinner (8:00-8:30PM)',
                food:'Chapati (2) + Bottle Gourd Curry (1 cup)'
            }
        ]
    },
    {
        title:'DAY 6',
        plans: [
            {
                time:'Breakfast (8:00-8:30AM)',
                food:'Chapati (2) + Daal (1 cup)',
            },
            {
                time:'Mid-Meal (11:00-11:30AM)',
                food:'Fruit Salad (1 cup) + Tender Coconut Water (1 glass)'
            },
            {
                time:'Lunch (2:00-2:30PM)',
                food:'1 cup fish curry + 1 cup boiled rice + 1 chapatti + 1 cup ghia raita + salad'
            },
            {
                time:'Evening (4:00-4:30PM)',
                food:'Tea/ Coffee (1 cup) + Aloo Chat (1 cup)'
            },
            {
                time:'Dinner (8:00-8:30PM)',
                food:'Chapati (2) + Matar n Mushroom Curry (1 cup)'
            }
        ]
    },
    {
        title:'DAY 7',
        plans: [
            {
                time:'Breakfast (8:00-8:30AM)',
                food:'Veg Upma (1 cup) + Raita (1/2 cup)',
            },
            {
                time:'Mid-Meal (11:00-11:30AM)',
                food:'Fruit Salad (1 cup) + Tender Coconut Water (1 glass)'
            },
            {
                time:'Lunch (2:00-2:30PM)',
                food:'1 cup chicken curry + 1 cup rice + salad'
            },
            {
                time:'Evening (4:00-4:30PM)',
                food:'Tea/ Coffee (1 cup) + Papri Chat (1 cup)'
            },
            {
                time:'Dinner (8:00-8:30PM)',
                food:'Chapati (2) + Kofta (1 cup)'
            }
        ]
    },
  ];
  return (
    <section>
      <div className='container mx-auto px-10 bg-[#4F7942] text-white'>
        <div className>
            <h1 className='font-inter font-[600] text-[28px] text-center'>Weekly Diet Plan for Vegetarians</h1>
            {data.map((items,i)=>(
                <div key={"cards-"+i} className='pb-10'>
                  <h2 className='font-inter font-[600] text-[24px] text-center'>{items.title}</h2>
                  <div className='border border-[#DDDDDD] rounded-[20px] mt-5'>
                     {items.plans.map((obj,k)=>(
                         <div className=' flex font-inter font-[600] text-[20px] border-b'>
                           <div className='w-1/3 border-r p-4'>
                             {obj.time}
                           </div>
                           <div className='w-2/3 p-4'>
                             {obj.food}
                           </div>
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
