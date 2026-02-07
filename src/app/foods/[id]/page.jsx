import React from "react";

export function generateStaticParams() {
  return [{ id: '52774' }, { id: '53057' }, { id: '52928' }]
}

const getSingleFood = async (id) => {
    console.log(id)
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
    { cache: "no-store" },
  );

  if (!res.ok) return null;

  const data = await res.json();
  console.log(data)
  return data.details || data;
};

const page = async ({ params }) => {
  const { id } = await params;
  console.log(id)
  const food = await getSingleFood(id);
  console.log("Food:", food);
  if (!food) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-xl font-semibold text-gray-600">
          Food Not Found 🍽️
        </h2>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src={food.foodImg}
            alt={food.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{food.title}</h1>
          <p>Category: {food.category}</p>
          <p>Cuisine: {food.area}</p>
          <p className="text-2xl font-bold text-emerald-600">৳ {food.price}</p>
        </div>
      </div>

      <div className="flex gap-4 mt-6">
        <a
          href={food.video}
          target="_blank"
          className="flex-1 bg-red-600 text-white py-3 rounded-lg text-center"
        >
          Watch Video
        </a>

        <button
          disabled
          className="flex-1 bg-blue-400 text-white py-3 rounded-lg cursor-not-allowed"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default page;
