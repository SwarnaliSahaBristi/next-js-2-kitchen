// components/skeletons/ReviewCardSkeleton.jsx
import React from "react";

const ReviewCardSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 space-y-3 animate-pulse">
      {/* User info */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
        <div className="space-y-1 flex-1">
          <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
          <div className="h-3 w-1/3 bg-gray-200 rounded"></div>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="w-5 h-5 bg-gray-300 rounded"></div>
        ))}
      </div>

      {/* Review text */}
      <div className="space-y-2">
        <div className="h-3 w-full bg-gray-200 rounded"></div>
        <div className="h-3 w-5/6 bg-gray-200 rounded"></div>
        <div className="h-3 w-3/4 bg-gray-200 rounded"></div>
      </div>

      {/* Likes & Date */}
      <div className="flex items-center justify-between mt-2">
        <div className="h-7 w-16 bg-gray-300 rounded-full"></div>
        <div className="h-3 w-16 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default ReviewCardSkeleton;
