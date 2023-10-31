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

  return (
    <div className="flex flex-col gap-5 md:flex-row mx-auto">
      <Cards foodList={foodList} breakfast={true} />
      <Cards foodList={foodList} lunch={true} />
      <Cards foodList={foodList} dinner={true} />
    </div>
  );
};

export default CardSurvey;
