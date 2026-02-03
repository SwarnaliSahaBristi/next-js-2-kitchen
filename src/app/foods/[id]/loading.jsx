
import React from "react";

const loading = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 animate-pulse">
      {/* Grid: Image + Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image skeleton */}
        <div className="rounded-2xl bg-gray-300 h-64 w-full shadow-lg"></div>

        {/* Details skeleton */}
        <div className="space-y-4">
          <div className="h-10 w-3/4 bg-gray-300 rounded"></div> {/* title */}
          <div className="h-5 w-1/2 bg-gray-200 rounded"></div> {/* category */}
          <div className="h-5 w-1/3 bg-gray-200 rounded"></div> {/* cuisine */}
          <div className="h-6 w-1/4 bg-gray-300 rounded"></div> {/* price */}
        </div>
      </div>

      {/* Buttons skeleton */}
      <div className="flex gap-4 mt-6">
        <div className="flex-1 h-12 bg-gray-300 rounded-lg"></div> {/* Watch Video */}
        <div className="flex-1 h-12 bg-gray-200 rounded-lg"></div> {/* Add to Cart */}
      </div>
    </div>
  );
};

export default loading;
