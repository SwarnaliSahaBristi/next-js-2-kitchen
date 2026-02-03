const FoodCardSkeleton = () => {
  return (
    <div className="rounded-2xl bg-white shadow-md overflow-hidden animate-pulse">
      {/* Image Skeleton */}
      <div className="h-44 w-full bg-gray-300" />

      {/* Content Skeleton */}
      <div className="p-4 space-y-3">
        <div className="h-5 w-3/4 bg-gray-300 rounded" />
        <div className="h-4 w-1/2 bg-gray-200 rounded" />
        <div className="h-6 w-1/3 bg-gray-300 rounded" />

        {/* Buttons Skeleton */}
        <div className="flex gap-2 pt-2">
          <div className="h-9 flex-1 bg-gray-300 rounded-xl" />
          <div className="h-9 flex-1 bg-gray-200 rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default FoodCardSkeleton;
