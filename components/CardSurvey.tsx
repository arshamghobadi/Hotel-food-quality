'use client';
import { useEffect, useState } from 'react';

import { getFoodList } from '@/services';
import Cards from './Cards';

const CardSurvey = () => {
  const [foodList, setFoodList] = useState<any>([]);
  useEffect(() => {
    getFoodList_();
  }, []);
  const getFoodList_ = async () => {
    const resultFood: any = await getFoodList();
    setFoodList(resultFood.foods);
  };
  console.log(foodList);

  return (
    <div className="flex  flex-col lg:flex-row lg:space-x-5 lg:items-center max-w-5xl lg:space-y-0 space-y-5">
      {foodList.map((foodItem: any) => (
        <Cards key={foodItem.name} foodList={foodItem} />
      ))}
    </div>
  );
};

export default CardSurvey;
