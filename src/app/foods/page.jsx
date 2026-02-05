import React from "react";
import FoodCard from "../components/cards/FoodCard";
const getFoods = async () => {
  const res = await fetch(
    "https://taxi-kitchen-api.vercel.app/api/v1/foods/random",
  );
  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return data.foods || [];
};
const FoodsPage = async () => {
  const foods = await getFoods();
  return (
    <div>
      <h2 className="text-4xl font-bold p-4">
        Total <span className="text-yellow-500">{foods.length}</span> Found
      </h2>

      <div className="flex gap-5">
        <div className="grid my-5 grid-cols-3 gap-5">
          {foods.map((food) => (
            <FoodCard key={food.id} food={food}></FoodCard>
          ))}
        </div> 
        <div className="w-[400px] border-2 rounded-xl p-4">
            <h2 className="text-2xl font-bold text-center">Cart Items</h2> <hr />
        </div>
      </div>
    </div>
  );
};

export default FoodsPage;
