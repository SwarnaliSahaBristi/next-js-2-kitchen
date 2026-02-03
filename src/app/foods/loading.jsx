import React from "react";
import FoodCardSkeleton from "../components/skeletons/FoodCardSkeleton";

const loading = () => {
  return <div className="grid my-5 grid-cols-3 gap-5">
    {
       [...Array(12)].map((_,index)=> <FoodCardSkeleton key={index}></FoodCardSkeleton>)
    }
    </div>;
};

export default loading;
