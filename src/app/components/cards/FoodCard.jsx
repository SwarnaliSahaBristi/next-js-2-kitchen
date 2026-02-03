import Link from "next/link";

const FoodCard = ({ food }) => {
  if (!food) return  null;
  return (
    <div className="rounded-2xl bg-white shadow-md hover:shadow-xl transition overflow-hidden">
      {/* Image */}
      <div className="h-44 w-full overflow-hidden">
        <img
          src={food?.foodImg}
          alt={food?.title}
          className="h-full w-full object-cover hover:scale-105 transition"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {food?.title}
        </h3>

        <p className="text-sm text-gray-500">
          Category: <span className="font-medium">{food?.category}</span>
        </p>

        <p className="text-xl font-bold text-emerald-600">৳ {food?.price}</p>

        {/* Buttons */}
        <div className="flex gap-2 pt-2">
          <button
            className="flex-1 rounded-xl bg-emerald-500 px-3 py-2 text-sm font-medium text-white hover:bg-emerald-600 transition"
          >
            Add to Cart
          </button>

          <Link href={`/foods/${food.id}`}
            className="flex-1 rounded-xl border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
