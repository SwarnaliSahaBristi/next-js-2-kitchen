// "use client";
import React from "react";
import { format } from "date-fns";

const FeedbackCard = ({ feedback }) => {
  const { _id, message, date } = feedback;

  return (
    <div className="bg-white shadow-md rounded-2xl p-5 border border-gray-100 hover:shadow-lg transition duration-300">
      
      {/* Message */}
      <p className="text-gray-700 text-base mb-3">
        {message}
      </p>

      {/* Date */}
      <p className="text-sm text-gray-400 mb-4">
        {format(new Date(date), "PPP p")}
      </p>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          className="px-4 py-2 text-sm font-medium rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition"
        >
          Update
        </button>

        <button
          className="px-4 py-2 text-sm font-medium rounded-xl bg-red-500 text-white hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default FeedbackCard;
